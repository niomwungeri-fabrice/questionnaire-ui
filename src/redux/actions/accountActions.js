import dotenv from "dotenv";
import axios from 'axios';
// import {REACT_APP_SERVER_URL} from './commonActions'
import { 
  CREATE_ACCOUNT_SUCCESS, 
  CREATE_ACCOUNT_FAILED,
  LOGIN_FAILED,
  LOGIN_SUCCESS 
} from './types'

dotenv.config();

const { REACT_APP_API_URL } = process.env;

export const handleSignUp = (payload) => async dispatch => {
    try {
    const response = await axios.post(`${REACT_APP_API_URL}/register/`, payload);
    dispatch({
      type: CREATE_ACCOUNT_SUCCESS,
      payload: response.data
    });
    return true;
  }
  catch (error) {
    dispatch({
      type: CREATE_ACCOUNT_FAILED,
      payload: error.response.data
    });
    return false;
  }
}


export const handleSignIn = (payload) => async dispatch =>{
  try {
    const response = await axios.post(`${REACT_APP_API_URL}/token/  `, payload);
    dispatch({
      type: LOGIN_SUCCESS,
      payload : response.data
    })
    return true
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response.data
    });
    return false;
  }
}
