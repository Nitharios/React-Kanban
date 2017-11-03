import axios from 'axios';
import success from '../lib/success';
const listOfCards = '/api/cards';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
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
      console.log(err);

      dispatch({
        type : ERROR,
        response : success.fail        
      })
    })
  }
};

export const addCard = (newCard) => {
  console.log(newCard);
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
        response : success.fail
      })
    })
  }
}