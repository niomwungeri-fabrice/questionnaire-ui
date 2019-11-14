import dotenv from 'dotenv';
import axios from 'axios';
import { setSuccess, setError, setToken } from './commonActions';
import {
  CREATE_ACCOUNT_SUCCESS,
  LOGIN_SUCCESS,
  CURRENT_ACCOUNT_SUCCESS
} from './types';

dotenv.config();

const { REACT_APP_API_URL } = process.env;

export const handleSignUp = payload => async dispatch => {
  try {
    const response = await axios.post(
      `${REACT_APP_API_URL}/register/`,
      payload
    );
    dispatch(setSuccess(CREATE_ACCOUNT_SUCCESS, response.data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};

export const handleSignIn = payload => async dispatch => {
  try {
    const response = await axios.post(`${REACT_APP_API_URL}/token/`, payload);
    dispatch(setSuccess(LOGIN_SUCCESS, response.data));
    localStorage.setItem('token', response.data.access);
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};

export const handleCurrentAccount = tokenPayload => async dispatch => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/me/`,
      setToken(tokenPayload)
    );
    dispatch(setSuccess(CURRENT_ACCOUNT_SUCCESS, response.data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};
