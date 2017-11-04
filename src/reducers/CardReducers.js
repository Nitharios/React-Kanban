import { LOAD_CARDS, ADD_CARD, EDITING, EDIT_CARD, DEL_CARD } from '../actions/CardActions';

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
          });
        }

        return card;
      });

    case EDIT_CARD:
      const updatedCard = action.updatedCard;

      return state.map(card => {
        if (card.id === updatedCard.id) {
          return Object.assign({}, card, {
            id : updatedCard.id,
            title : updatedCard.title,
            priority : updatedCard.priority,
            status : updatedCard.status,
            created_By : updatedCard.created_By,
            assigned_To : updatedCard.assigned_To,
            isEditing : false
          });
        }

        return card;
      });

    case DEL_CARD:
      return state.filter(card => {
        return card.id !== action.id;
      });

    default:
      return state;
  }
};