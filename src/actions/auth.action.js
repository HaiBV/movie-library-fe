import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import { USER_LOADED, AUTH_ERROR } from './actionTypes';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/auth`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
