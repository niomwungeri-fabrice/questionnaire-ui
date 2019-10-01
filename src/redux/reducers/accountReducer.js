import {
    CREATE_ACCOUNT_SUCCESS,
    LOGIN_SUCCESS,
    CURRENT_ACCOUNT_SUCCESS, 
    SET_INPUT,
    SET_ERROR
} from '../actions/types'
import { initialState }from '../InitialState'

export default function (state = initialState, {type, payload}) {
    switch (type) {
        case CREATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state, 
                token: payload.access,
                refresh: payload.refresh
            }
        case CURRENT_ACCOUNT_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case SET_INPUT:
            return {
                ...state,
                  user: { ...state.user, [payload.field]: payload.value }
                };
        case SET_ERROR:
            return {
                ...state, 
                error: payload
            }
        default:
            return state;
    }
}