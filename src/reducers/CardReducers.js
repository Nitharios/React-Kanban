import { LOAD_CARDS, ADD_CARD, EDITING, DEL_CARD } from '../actions/CardActions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_CARDS:
      // returns data as an array
      return [ ...action.cards ];

    case ADD_CARD: 
      return [ ...state, action.card ];

    case EDITING:
      return state.map(card => {
        if (card.id === action.cardID) {
          return Object.assign({}, card, {
            isEditing : !card.isEditing
          })
        }

        return card;
      });

    case DEL_CARD:
      return state.filter(card => {
        return card.id !== action.id
      }) 

    default:
      return state;
  }
};

// function updateCard(state, action) {
//   let arr = [];

//   for (let i = 0; i < state.length; i++) {
//     arr = arr.concat(state[i]);

//     if (arr[i].id === action.cardID) {
//       arr[i].isEditing = true;
//     }
//   }

//   console.log('update', arr);
//   return state;
// }