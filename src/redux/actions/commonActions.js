import {SET_INPUT} from './types'

export const handleInputs = payload => {
    return {
      type: SET_INPUT,
      payload
    };
  };