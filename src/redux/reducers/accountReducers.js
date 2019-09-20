import {CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILED, SET_INPUT } from '../actions/types'

const initialState = {
    message: "",
    error: "",
    token: "",
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  };

export default function (state = initialState, {type, payload}) {
    switch (type) {
        case CREATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case CREATE_ACCOUNT_FAILED:
            return {
                ...state, 
                error: payload
            }
        case SET_INPUT:
            return {
                ...state,
                  user: { ...state.user, [payload.field]: payload.value }
                };
        default:
            return state;
    }
}