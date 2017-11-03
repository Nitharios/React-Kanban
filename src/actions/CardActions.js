import axios from 'axios';
import success from '../lib/success';

const listOfCards = '/api/cards';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
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
      })
    })
    .catch(err => {
      dispatch({
        type : ERROR,
        success : success.fail        
      })
    })
  }
};

export const addCard = newCard => {
  return dispatch => {
    return axios.post(listOfCards, newCard)
    .then(response => {
      dispatch({
        type : ADD_CARD,
        card : newCard
      })
    })
    .catch(err => {
      dispatch({
        type : ERROR,
        success : success.fail
      })
    })
  }
}

export const editCard = updatedCard => {
  return dispatch => {
    return axios.put(`${listOfCards}/${updatedCard.id}`)
    .then(response => {
      dispatch({
        type : EDIT_CARD,
        card : updatedCard
      })
    })
  }
}

export const deleteCard = cardID => {
  return dispatch => {
    return axios.delete(`${listOfCards}/${cardID}`)
    .then(response => {
      dispatch({
        type : DEL_CARD,
        id : cardID
      })
    })
    .catch(err => {
      dispatch({
        type : ERROR,
        success : success.fail
      })
    })
  }
}
