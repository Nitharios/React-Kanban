import axios from 'axios';
const listOfCards = '/api/cards';

export const LOAD_CARDS = 'LOAD_CARDS';

export const loadCards = () => {
  console.log('loadCards invoked');
  
  return (dispatch) => {
    return axios.get(listOfCards)
    .then((cards) => {
      console.log('here', cards.data);
      dispatch({
        type : LOAD_CARDS,
        cards : cards.data
      })
    })
    .catch(err => {
      return err;
    })
  }
};