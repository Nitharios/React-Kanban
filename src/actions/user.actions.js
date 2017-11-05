import axios from 'axios';
import success from '../lib/success';

const listOfUsers = '/api/users';

export const LOAD_USERS = 'LOAD_USERS';
export const ERROR = 'ERROR';

export const loadUsers = () => {
  return dispatch => {         
    return axios.get(listOfUsers)
    .then(users => {
      dispatch({
        type : LOAD_USERS,
        users : users.data
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