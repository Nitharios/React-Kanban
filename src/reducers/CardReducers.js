import { LOAD_CARDS, ADD_CARD, ERROR } from '../actions/CardActions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_CARDS:
      // returns data as an array
      return [ ...action.cards ];

    case ADD_CARD: 
      return [ ...state, action.card ];

    case ERROR:
      return [ ...state, action.error ];

    default:
      return state;
  }
};