import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

let middlewares = [reduxThunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();

  middlewares = [...middlewares, logger];
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;