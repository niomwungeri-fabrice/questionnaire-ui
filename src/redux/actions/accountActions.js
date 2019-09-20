import dotenv from "dotenv";
import axios from 'axios';
import { CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILED } from './types'

dotenv.config();

export const success = payload => ({
    type: CREATE_ACCOUNT_SUCCESS,
    payload
  });
  
  export const failure = payload => ({
    type: CREATE_ACCOUNT_FAILED,
    payload
  });

export const handleSignUp = (payload) => dispatch => {
    return axios.post('https://questionnaire-web-api.herokuapp.com/api/v1/register', payload)
  .then((response) => {
    dispatch(success(response.data))
    return true;
  })
  .catch(error => {
     dispatch(failure(error.response.data))
    return false;

  })
}

