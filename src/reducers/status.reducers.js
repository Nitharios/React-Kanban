import { LOAD_STATUSES } from '../actions/status.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_STATUSES:
      // returns data as an array      
      return [ ...action.statuses ];

    default:
      return state;
  }
};