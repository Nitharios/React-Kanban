import axios from 'axios';
import success from '../lib/success';

const listOfStatuses = '/api/statuses';

export const LOAD_STATUSES = 'LOAD_STATUSES';
export const ERROR = 'ERROR';

export const loadStatuses = () => {
  return dispatch => {         
    return axios.get(listOfStatuses)
    .then(statuses => {
      dispatch({
        type : LOAD_STATUSES,
        statuses : statuses.data
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