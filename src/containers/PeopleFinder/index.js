import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as employeeActions from 'actions/employee';
import { useTranslation } from 'react-i18next';
import { Device } from 'components';
import styled from 'styled-components';

import Header from "containers/Header";
import PeopleItem from './PeopleItem';

const PeopleFinderStyled = styled.div`
  padding-top: 120px;
`;

const ListItemStyled = styled.div`
  border-bottom: 1px solid #e0e0e0;
  transition: background 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    background-color: #efefef;
  }

  @media ${Device.mobile} {
    padding: 0 10px;
  }

  @media ${Device.tablet} {
    padding: 0 20px;
  }
`;

const NotFoundItemsStyled = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
  font-weight: bold;
  text-align: center;
  line-height: 65px;
  color: #848484;
  font-style: italic;
`;

const PeopleFinder = ({
  employees,
  employeeActions,
}) => {
  const { t } = useTranslation();
  const { keyword } = useParams();

  useEffect(() => {
    if (keyword) {
      employeeActions.fetchEmployeeAsync(decodeURIComponent(keyword));
    }
  }, [employeeActions, keyword]);

  return (
    <Fragment>
      <Header />

      {keyword && employees &&
        <PeopleFinderStyled>
          {
            employees.length > 0
              ? employees.map((item, idx) =>
                <ListItemStyled key={idx}>
                  <PeopleItem {...item} />
                </ListItemStyled>
              )
              : <NotFoundItemsStyled>{t('no_search_data')}</NotFoundItemsStyled>
          }
        </PeopleFinderStyled>
      }
    </Fragment>
  );
}

const mapState = state => ({
  employees: state.employee.employees,
});

const mapDispatch = dispatch => ({
  employeeActions: bindActionCreators(employeeActions, dispatch),
});

export default connect(mapState, mapDispatch)(PeopleFinder);