import { LOAD_CARDS } from '../actions/CardActions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_CARDS:
      return [ ...action.cards ];
    default:
      return state;
  }
};