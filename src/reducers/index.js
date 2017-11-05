import { combineReducers } from 'redux';

import cards from './card.reducers';
import users from './user.reducers';

export default combineReducers({
  cards,
  users
});