import {CREATE_ACCOUNT_SUCCESS, SET_INPUT} from '../actions/types'

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
        case SET_INPUT:
            return {
                ...state,
                  user: { ...state.user, [payload.field]: payload.value }
                };
        default:
            return state;
    }
}