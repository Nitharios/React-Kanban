import { LOAD_CARDS, ADD_CARD, DEL_CARD } from '../actions/CardActions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_CARDS:
      // returns data as an array
      return [ ...action.cards ];

    case ADD_CARD: 
      return [ ...state, action.card ];

    case DEL_CARD:
      return state.filter(card => {
        return card.id !== action.id
      }) 
    // case ERROR:
    //   return state;

    default:
      return state;
  }
};