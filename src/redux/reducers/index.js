import {combineReducers} from 'redux'
import accountReducers from './accountReducers'

export default combineReducers({
    account: accountReducers
})