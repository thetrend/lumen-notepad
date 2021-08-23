import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import note from './note';
export default combineReducers({
  alert,
  auth,
  note
});