import { combineReducers } from 'redux';
// cards is an array
import cards from './CardReducers';
import users from './UserReducers';

export default combineReducers({
  cards,
  users
});