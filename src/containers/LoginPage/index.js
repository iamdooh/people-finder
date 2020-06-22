import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

const LoginWrapperStyled = styled.div`
`;

const GOOGLE_CLIENT_ID = '275394382590-ttpmduqu7b7hl4jthsa5s6a4ioe7s8c3.apps.googleusercontent.com';

const LoginPage = (props) => {
  const { setIsAuthorized, setToken, setUser } = props;

  return (
    <LoginWrapperStyled>
      <p>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          isSignedIn={true}
          uxMode="redirect"
          onSuccess={({ tokenId, profileObj }) => {
            setIsAuthorized(true);
            setToken(tokenId);
            setUser(profileObj);

            console.log(profileObj);

            props.history.push('/');
          }}
          onFailure={(response) => {
            console.log(response);
          }}
          redirectUri={'http://localhost:9000/login'}
          cookiePolicy={'single_host_origin'} />
      </p>
    </LoginWrapperStyled>
  );
}

const mapState = state => ({
  isAuthorized: state.authorization.isAuthorized,
  token: state.authorization.token,
});

const mapDispatch = ({ authorization }) => ({
  setIsAuthorized: authorization.setIsAuthorized,
  setToken: authorization.setToken,
  setUser: authorization.setUser
});

export default connect(mapState, mapDispatch)(LoginPage);