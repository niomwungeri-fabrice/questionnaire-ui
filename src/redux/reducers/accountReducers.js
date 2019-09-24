import {
    CREATE_ACCOUNT_SUCCESS, 
    CREATE_ACCOUNT_FAILED,
    LOGIN_FAILED,
    LOGIN_SUCCESS, 
    SET_INPUT,
} from '../actions/types'

const initialState = {
    message: "",
    error: "",
    token: "",
    refresh:"",
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
        case LOGIN_FAILED:
            return {
                ...state, 
                error: payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state, 
                token: payload.access,
                refresh: payload.refresh
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