import { combineReducers } from 'redux';

import { authorization } from './authorization';
import { employee } from './employee';

export default combineReducers({
  authorization,
  employee,
});