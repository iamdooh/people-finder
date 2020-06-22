import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from "containers/Header";
import PeopleFinder from "containers/PeopleFinder";

const AuthPageContainer = (props) => {
  const { isAuthorized } = props;

  if (!isAuthorized) {
    return <Redirect to={'/login'} />
  }

  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={PeopleFinder}
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

const mapState = state => ({
  isAuthorized: state.authorization.isAuthorized,
  token: state.authorization.token,
});

const mapDispatch = () => ({ });

export default connect(mapState, mapDispatch)(AuthPageContainer);