import dotenv from 'dotenv';
import axios from 'axios';
import {
  CREATE_MEETUP_SUCCESS,
  ADD_TAG,
  REMOVE_TAG,
  GET_ALL_MEETUP_SUCCESS
} from './types';
import { setSuccess, setToken, setError } from '../actions/commonActions';

dotenv.config();

const { REACT_APP_API_URL } = process.env;

export const handleCreateMeetUp = (payload, token) => async dispatch => {
  try {
    const response = await axios.post(
      `${REACT_APP_API_URL}/meetup/new/`,
      payload,
      setToken(token)
    );
    dispatch(setSuccess(CREATE_MEETUP_SUCCESS, response.data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};

export const handleGetAllMeetUPs = () => async dispatch => {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/meetup/`);
    dispatch(setSuccess(GET_ALL_MEETUP_SUCCESS, response.data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};

export const handleAddTag = payload => async dispatch => {
  try {
    const response = await axios.post(`${REACT_APP_API_URL}/tags/`, payload);
    dispatch(setSuccess(ADD_TAG, response.data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};

export const handleRemoveTag = payload => {
  return {
    type: REMOVE_TAG,
    payload
  };
};
