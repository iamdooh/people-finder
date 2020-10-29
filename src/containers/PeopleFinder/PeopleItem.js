import React, { useCallback } from 'react';
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Device } from 'components';
import styled from 'styled-components';

import DefaultProfileImage from 'assets/images/image-profile-default.svg';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 768px;
  margin: 0 auto;
  padding: 15px 0;
  box-sizing: border-box;

  @media ${Device.tablet} {
    width: 100%;
  }
`;

const Column = styled.div`
  flex: 0;
  margin-left: 1rem;
  text-align: left;

  @media ${Device.mobile} {
    margin-left: 0.75rem;
  }
`;

const ColumnPhoto = styled(Column)`
  margin-left: 0;
`;

const ColumnCenter = styled(Column)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex: 1;

  @media ${Device.tablet} {
    flex-direction: column;
  }
`;

const UserInfo = styled.div`
  flex: 1;
  width: 100%;
  line-height: 1.4;

  @media ${Device.tablet} {
    margin-bottom: 10px;
  }
`;

const UserName = styled.div`
  font-size: 1.0625rem;
  font-weight: bold;
`;

const UserDivision = styled.div`
  font-size: 0.75rem;
`;

const UserTodayStatus = styled.div`
  font-size: 0.6875rem;
  color: ${props => props.isOnWorking ? '#60d081' : '#f26c51'}
`;

const ContactInfo = styled.div`
  flex: 1;
  width: 100%;

  & > ul li {
    font-size: 0.875rem;
    font-family: sans-serif;
    line-height: 1.6;

    @media ${Device.tablet} {
      display: inline-block;
      margin-right: 15px;
      font-size: 0.75rem;
    }
  }

  .icon {
    display: inline-block;
    width: 16px;
    margin-right: 4px;
    text-align: center;
  }

  a[href^="tel:"] {
    color: #303847;
    text-decoration: none;
  }
`;

const ProfileImage = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-image: url(${DefaultProfileImage});
  background-size: contain;

  @media ${Device.mobile} {
    width: 60px;
    height: 60px;
  }
`;

const Figure = styled.figure`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageSrc});
  background-size: contain;
  border-radius: 50%;
`;

const PeopleItem = props => {
  const { t } = useTranslation();
  const {
    photoPath,
    userNm,
    teamNm,
    divisionNm,
    officeTelNo,
    hpNo,
    emailAddr,
    amNotinNm,
    pmNotinNm,
    timeNm,
  } = props;

  const isOnWorking = (!amNotinNm && !pmNotinNm);

  const _renderCurrentStatus = useCallback((am, pm, time) => {
    if (isOnWorking) {
      return t('contact_onjob');
    } else {
      if (am === pm) {
        return `${t(am)}(${t(time)})`;
      } else {
        let stats = [];

        if (am) stats.push(`${t(am)}(${t(time)})`);
        if (pm) stats.push(`${t(pm)}(${t(time)})`);

        return stats.join(', ');
      }
    }
  }, [isOnWorking, t]);

  const _renderPhoneNumber = number => {
    if (!number) return;

    let reg = (number.startsWith('02'))
      ? /(\d{2})(\d{4})(\d{1,14})/
      : /(\d{3})(\d{4})(\d{1,13})/

    return (
      <a href={`tel:${number}`}>
        {number.replace(reg, '$1-$2-$3')}
      </a>
    );
  }

  return (
    <Item>
      <ColumnPhoto>
        <ProfileImage>
          <Figure imageSrc={photoPath} />
        </ProfileImage>
      </ColumnPhoto>

      <ColumnCenter>
        <UserInfo>
          <UserName>{userNm}</UserName>
          <UserDivision>{(teamNm || divisionNm)}</UserDivision>
          <UserTodayStatus isOnWorking={isOnWorking}>
            {_renderCurrentStatus(amNotinNm, pmNotinNm, timeNm)}
          </UserTodayStatus>
        </UserInfo>

        <ContactInfo>
          <ul>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon="phone-alt" size="sm" />
              </span>
              {_renderPhoneNumber(officeTelNo)}
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon="mobile-alt" size="sm" />
              </span>
              {_renderPhoneNumber(hpNo)}
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon="envelope" size="sm" />
              </span>
              {emailAddr}
            </li>
          </ul>
        </ContactInfo>
      </ColumnCenter>
    </Item>
  );
}

PeopleItem.propTypes = {
  data: PropTypes.object
};

export default React.memo(PeopleItem);