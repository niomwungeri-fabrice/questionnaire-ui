import dotenv from "dotenv";
import axios from 'axios';
import { 
    CREATE_MEETUP_SUCCESS,
    SET_ERROR
  } from './types'
  
dotenv.config();
const { REACT_APP_API_URL } = process.env;

export const handleCreateMeetUp = (payload) => async dispatch => {
    try {
    const response = await axios.post(`${REACT_APP_API_URL}/meetup/new/`, payload);
    dispatch({
      type: CREATE_MEETUP_SUCCESS,
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