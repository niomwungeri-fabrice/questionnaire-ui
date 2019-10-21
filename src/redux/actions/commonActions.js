import { SET_INPUT, CLEAR_INPUT } from './types'

export const REACT_APP_SERVER_URL = 'https://questionnaire-web-api.herokuapp.com/api/v1'

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