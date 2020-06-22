import React, { Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faMobileAlt,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SearchResultStyled = styled.div`
  padding-top: 100px;
`;

const ListItemStyled = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  transition: background 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    background-color: #efefef;
  }

  .column {
    margin-left: 1rem;
    text-align: left;

    &.names {
      margin-right: auto;
    }

    &.favorite {
      color: #ddd;
    }

    svg {
      width: 20px;
    }
  }
`;

const ProfileImageStyled = styled.figure`
  margin-left: 0 !important;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

const employeeMap = [
  {
    id: 0,
    image: 'https://lh3.googleusercontent.com/a-/AAuE7mATJTm29AtV9kMG2nJkphih5EaQuhxG93JFs_fi',
    name: '오두용',
    team: '연구기획팀',
    officeTel: '070-7011-1965',
    mobile: '010-3396-8301',
    status: '교육(종일)'
  }
]

const PeopleFinder = (props) => {
  console.log(props);

  useEffect(() => {
    
  }, []);

  return (
    <Fragment>
      <SearchResultStyled>
        <ul>
          {
            employeeMap.map(employee => {
              return (
                <ListItemStyled key={employee.id}>
                  <ProfileImageStyled className="column">
                    <img src={employee.image} alt="" />
                  </ProfileImageStyled>

                  <div className="column names">
                    <div className="name">{employee.name}</div>
                    <div className="division">{employee.team}</div>
                  </div>

                  <div className="column phones">
                    <div className="office">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                      {employee.officeTel}
                    </div>
                    <div className="mobile">
                      <FontAwesomeIcon icon={faMobileAlt} />
                      {employee.mobile}
                    </div>
                  </div>

                  <div className="column absent-status">
                    {employee.status}
                  </div>

                  <div className="column favorite">
                    <FontAwesomeIcon icon={faStar} size="lg" />
                  </div>
                </ListItemStyled>
              )
            })
          }
        </ul>
      </SearchResultStyled>
    </Fragment>
  );
}

export default PeopleFinder;