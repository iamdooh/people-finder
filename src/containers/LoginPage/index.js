import React, { useRef, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Device } from 'components';
import styled, { createGlobalStyle } from 'styled-components';

import * as authorizationActions from 'actions/authorization';

import loginBgLeftTop from 'assets/images/login-bg-left-top.svg';
import loginBgRightBottom from 'assets/images/login-bg-right-bottom.svg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2a2f37;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: '';
      position: fixed;
      background-repeat: no-repeat;
      object-fit: contain;
      pointer-events: none;
      z-index: -1;
    }

    &::before {
      right: 0px;
      bottom: 0px;
      width: 848px;
      height: 482px;
      background-image: url(${loginBgRightBottom});

      @media ${Device.tablet} {
        width: 664px;
        height: 417px;
        background-size: 664px 417px;
      }

      @media ${Device.mobileLarge} {
        bottom: -45px;
        width: 333px;
        height: 227px;
        background-size: 333px 227px;
      }
    }

    &::after {
      left: 0px;
      top: 0px;
      width: 567px;
      height: 245px;
      background-image: url(${loginBgLeftTop});

      @media ${Device.tablet} {
        width: 510px;
        height: 245px;
        background-size: 510px 245px;
      }

      @media ${Device.mobileLarge} {
        top: -70px;
        width: 240px;
        height: 113px;
        background-size: 240px 113px;
      }
    }
  }
`;

const LoginWrapper = styled.div`
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin-bottom: 96px;
  font-size: 2.25rem;
  color: #fff;

  @media ${Device.mobileLarge} {
    font-size: 1.5rem;
  }
`;

const DropdownSelection = styled.select`
  min-width: 220px;
  padding: 8px;
  margin-bottom: 5px;
  background-color: rgb(38, 41, 45);
  color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  line-height: 40px;
  outline: none;

  @media ${Device.mobileLarge} {
    width: 100%;
    font-size: 1rem;
    line-height: 48px;
  }
`;

const LoginButton = styled.button`
  min-width: 220px;
  padding: 0 10px;
  border-radius: 2px;
  border: none;
  background-color: #dc4e41;
  line-height: 40px;
  color: #fff;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  svg {
    margin-right: 8px;
    font-size: 1rem;
  }

  @media ${Device.mobileLarge} {
    width: 100%;
    padding: 0;
    font-size: 1rem;
    line-height: 48px;
  }
`;

const GOOGLE_CLIENT_ID = '275394382590-ttpmduqu7b7hl4jthsa5s6a4ioe7s8c3.apps.googleusercontent.com';

const LoginPage = (props) => {
  const { t } = useTranslation();
  const { authorizationActions, authorization } = props;
  const refBranchDropdown = useRef(null);

  useEffect(() => {
    authorizationActions.fetchBranchAsync();
  }, [authorizationActions]);

  return (
    <LoginWrapper>
      <GlobalStyle />
      <Title>RSUPPORT ADDRESS</Title>

      <DropdownSelection
        ref={refBranchDropdown}
        value={authorization.branchSeq}
        onChange={e => {
          authorizationActions.setBranchSeq(e.target.value);
        }}
      >
        {
          authorization.branches.map(code => (
            <option key={code.id} value={code.id}>{t(code.name)}</option>
          ))
        }
      </DropdownSelection>

      <p>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          isSignedIn={true}
          render={renderProps =>
            <LoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <FontAwesomeIcon icon={['fab', 'google']} />
              {t('contact_login')}
            </LoginButton>
          }
          theme="dark"
          onSuccess={({ tokenId }) => {
            if (!authorization.branchSeq) {
              authorizationActions.setBranchSeq(refBranchDropdown.current.value);
            }

            authorizationActions.authorizeAsync(tokenId)
              .then(() => {
                props.history.push('/');
              });
          }}
          onFailure={(response) => {
            console.log(response);
          }}
          redirectUri={`${process.env.REACT_APP_API_ENDPOINT}/login`}
          cookiePolicy={'single_host_origin'} />
      </p>
    </LoginWrapper>
  );
}

const mapState = state => ({
  authorization: state.authorization,
});

const mapDispatch = dispatch => ({
  authorizationActions: bindActionCreators(authorizationActions, dispatch),
});

export default connect(mapState, mapDispatch)(LoginPage);