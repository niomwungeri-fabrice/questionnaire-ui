import {
    CREATE_MEETUP_SUCCESS,
    SET_INPUT,
    SET_ERROR
} from '../actions/types'
import { initialState }from '../InitialState'

export default function (state = initialState, {type, payload}) {
    switch (type) {
        case CREATE_MEETUP_SUCCESS:
            return {
                ...state,
                meetUp: payload
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