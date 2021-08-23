import { alertConstants } from '../types/alert';

const initialState = [];

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { SET_ALERT, REMOVE_ALERT } = alertConstants;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

export default alertReducer;