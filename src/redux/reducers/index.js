import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import meetUpReducer from './meetUpReducer';

export default combineReducers({
  account: accountReducer,
  event: meetUpReducer
});
