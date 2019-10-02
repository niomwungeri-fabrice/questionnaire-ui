import dotenv from "dotenv";
import axios from 'axios';
// import {REACT_APP_SERVER_URL} from './commonActions'
import { 
  CREATE_ACCOUNT_SUCCESS, 
  LOGIN_SUCCESS,
  CURRENT_ACCOUNT_SUCCESS,
  SET_ERROR
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
      type: SET_ERROR,
      payload: error.response.data
    });
    return false;
  }
}

export const handleSignIn = (payload) => async dispatch =>{
  try {
    const response = await axios.post(`${REACT_APP_API_URL}/token/`, payload);
    dispatch({
      type: LOGIN_SUCCESS,
      payload : response.data
    })
    console.log(response.data)
    localStorage.setItem("token", response.data.access);
    return response.data
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response.data
    });
    return undefined;
  }
}

export const handleCurrentAccount = (tokenPayload) => async dispatch =>{
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/me/`, 
    { headers: {
      'Authorization': 'Bearer ' + tokenPayload
      }
    });
    dispatch({
      type: CURRENT_ACCOUNT_SUCCESS,
      payload : response.data
    })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response.data
    });
  }
}