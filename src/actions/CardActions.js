import axios from 'axios';
import success from '../lib/success';

const listOfCards = '/api/cards';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDITING = 'EDITING';
export const EDIT_CARD = 'EDIT_CARD';
export const DEL_CARD = 'DEL_CARD';
export const ERROR = 'ERROR';

export const loadCards = () => {
  return dispatch => {
    return axios.get(listOfCards)
    .then(cards => {
      dispatch({
        type : LOAD_CARDS,
        cards : cards.data
      });
    })
    .catch(err => {
      dispatch({
        type : ERROR,
        success : success.fail        
      });
    });
  };
};

export const addCard = newCard => {
  return dispatch => {
    return axios.post(listOfCards, newCard)
    .then(newCardDetails => {
      dispatch({
        type : ADD_CARD,
        card : newCardDetails.data
      });
    })
    .catch(err => {
      dispatch({
        type : ERROR,
        success : success.fail
      });
    });
  };
};

export const makeCardEditable = cardID => {  
  return dispatch => {
    return dispatch({
      type : EDITING,
      cardID : cardID
    });
  };
} ;

export const editCard = updatedCard => {
  return dispatch => {
    return axios.put(`${listOfCards}/${updatedCard.id}`, updatedCard)
    .then(response => {
      dispatch({
        type : EDIT_CARD,
        updatedCard : updatedCard
      });
    });
  };
};

export const deleteCard = cardID => {
  return dispatch => {
    return axios.delete(`${listOfCards}/${cardID}`)
    .then(response => {
      dispatch({
        type : DEL_CARD,
        id : cardID
      });
    })
    .catch(err => {
      dispatch({
        type : ERROR,
        success : success.fail
      });
    });
  };
};
