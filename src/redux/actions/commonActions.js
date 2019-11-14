import { SET_INPUT, CLEAR_INPUT, SET_ERROR } from './types';

export const REACT_APP_SERVER_URL =
  'https://questionnaire-web-api.herokuapp.com/api/v1';

export const handleInputs = payload => {
  return {
    type: SET_INPUT,
    payload
  };
};

export const handleClearInputs = payload => {
  return {
    type: CLEAR_INPUT,
    payload
  };
};


export const setToken = (token) =>{
  return {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
}

export const setError = error => ({
  type: SET_ERROR,
  payload: error
});

export const setSuccess = (type, payload) => ({
  type,
  payload
});
