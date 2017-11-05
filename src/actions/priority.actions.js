import axios from 'axios';
import success from '../lib/success';

const listOfPriorities = '/api/priorities';

export const LOAD_PRIORITIES = 'LOAD_PRIORITIES';
export const ERROR = 'ERROR';

export const loadPriorities = () => {
  return dispatch => {         
    return axios.get(listOfPriorities)
    .then(priorities => {
      dispatch({
        type : LOAD_PRIORITIES,
        priorities : priorities.data
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