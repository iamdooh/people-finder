import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import AuthPageContainer from "containers/AuthPageContainer";
import LoginPage from "containers/LoginPage";
import PeopleFinder from "containers/PeopleFinder";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
  return (
    <React.Suspense fallback={<></>}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/search/:keyword?" component={PeopleFinder} />
          <Route path="/" component={AuthPageContainer} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;