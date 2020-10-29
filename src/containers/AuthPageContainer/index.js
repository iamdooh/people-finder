import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthPageContainer = ({ isAuthorized }) => {
  return isAuthorized
    ? <Redirect to={'/search/'} />
    : <Redirect to={'/login'} />
}

const mapState = state => ({
  isAuthorized: state.authorization.isAuthorized,
  token: state.authorization.token,
});

const mapDispatch = () => ({ });

export default connect(mapState, mapDispatch)(AuthPageContainer);