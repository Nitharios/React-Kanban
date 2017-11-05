import { LOAD_PRIORITIES } from '../actions/priority.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRIORITIES:
      // returns data as an array      
      return [ ...action.priorities ];

    default:
      return state;
  }
};