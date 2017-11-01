import { LOAD_CARDS } from '../actions/cards';

const initialState = {
  cardList : []
}

const reducers = (state = initialState, action) => {
  console.log(action);
  console.log('reducers : activated');
  console.log('reducers : ', action);
  switch(action.type) {
    case LOAD_CARDS:
      console.log('loading cards');
      return Object.assign({}, state, { cardList : [...action.cards] })
    default:
      return state;
  }
};

export default reducers;
