import dotenv from "dotenv";
import axios from 'axios';
import { 
  CREATE_ACCOUNT_SUCCESS, 
  CREATE_ACCOUNT_FAILED,
  LOGIN_FAILED,
  LOGIN_SUCCESS 
} from './types'

dotenv.config();

export const success = payload => ({
    type: CREATE_ACCOUNT_SUCCESS,
    payload
  });
  
  export const failure = payload => ({
    type: CREATE_ACCOUNT_FAILED,
    payload
  });

export const handleSignUp = (payload) => async dispatch => {
    try {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/register', payload);
    dispatch(success(response.data));
    return true;
  }
  catch (error) {
    dispatch(failure(error.response.data));
    return false;
  }
}


export const handleSignIn = (payload) => async dispatch =>{
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', payload);
    dispatch({
      type: LOGIN_SUCCESS,
      payload : response.data
    })
    return true
  } catch (error) {
    console.log(error.response.data, '=======')
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response.data
    });
    return false;
  }
}
