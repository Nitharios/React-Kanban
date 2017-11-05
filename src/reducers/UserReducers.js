import { LOAD_USERS } from '../actions/UserActions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_USERS:
      // returns data as an array      
      return [ ...action.users ];

    default:
      return state;
  }
};