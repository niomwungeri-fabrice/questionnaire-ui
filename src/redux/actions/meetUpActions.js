import dotenv from "dotenv";
import axios from 'axios';
import { 
    CREATE_MEETUP_SUCCESS,
    SET_ERROR,
    ADD_TAG,
    REMOVE_TAG
  } from './types'
  
dotenv.config();

const { REACT_APP_API_URL } = process.env;

export const handleCreateMeetUp = (payload, token) => async dispatch => {
    try {
    const response = await axios.post(`${REACT_APP_API_URL}/meetup/new/`, payload, 
    { headers: {
      'Authorization': 'Bearer ' + token
      }
    });
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

export const handleAddTag= (payload) => async dispatch => {
  try {
    const response = await axios.post(`${REACT_APP_API_URL}/tags/`, payload);
    dispatch({
      type: ADD_TAG,
      payload: response.data
    });
    return true;
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response.data
    });
    return false
  }
}
export const handleRemoveTag = (payload) => async dispatch => {
  dispatch({
    type: REMOVE_TAG,
    payload: payload
  });
}