import { combineReducers } from 'redux';

import cards from './CardReducers';
import users from './UserReducers';

export default combineReducers({
  cards,
  users
});