import { authConstants } from '../types/auth';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  const { LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOADED, AUTH_ERROR, LOGOUT } = authConstants;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case LOGIN_FAILURE:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        ...payload,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state;
  }
}

export default auth;