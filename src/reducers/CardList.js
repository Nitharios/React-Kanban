import { LOAD_CARDS } from '../actions/CardActions';

const initialState = [];

export default (state = initialState, action) => {
  console.log('reducers : activated');
  console.log('reducers : ', action);
  switch(action.type) {
    case LOAD_CARDS:
      console.log('load', action.cards);
      return [ ...action.cards ];
    default:
      console.log('default');
      return state;
  }
};