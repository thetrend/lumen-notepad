import axios from 'axios';
import { authConstants } from '../types/auth';
import { setAlert } from './alert';
const { LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOADED, AUTH_ERROR, LOGOUT } = authConstants;

const authAPI = '/api/users';

export const loadUser = () => async dispatch => {
  try {
    const response = await axios
      .get(`${authAPI}/user`, {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(response => response);
    dispatch({
      type: USER_LOADED,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });

  try {
    const response = await axios
      .post(`${authAPI}/login`, body, config)
      .then(response => response);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch(setAlert(error.response.data));
    dispatch({
      type: LOGIN_FAILURE
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  dispatch({
    type: REMOVE_ALERT
  })
};