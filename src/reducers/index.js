import { combineReducers } from 'redux';

import cards from './card.reducers';
import users from './user.reducers';
import priorities from './priority.reducers';
import statuses from './status.reducers';

export default combineReducers({
  cards,
  users,
  priorities,
  statuses
});