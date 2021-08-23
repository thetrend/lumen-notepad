import { v4 as uuidv4 } from 'uuid';
import { alertConstants } from '../types/alert';
const { SET_ALERT, REMOVE_ALERT } = alertConstants;

export const setAlert = (message, type = 'error', timeout = 5000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: {
      message,
      type,
      id
    }
  });
  setTimeout(() =>
    dispatch({ 
      type: REMOVE_ALERT,
      payload: id
    }),
    timeout
  );
};