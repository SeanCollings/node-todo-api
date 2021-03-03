import axios from 'axios';
import {
  API_URL,
  ERROR_500,
  LOCAL_TOKEN,
  URL_LOGIN,
  URL_REGISTER,
} from '../../constants';
import { decodeJWT, removeCookie, setCookie } from '../../utils';
import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  SIGN_OUT_USER,
} from '../action-types';

export const registerUser = ({ name, email, password }) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });

  try {
    const { data } = await axios.post(`${API_URL}${URL_REGISTER}`, {
      name,
      email,
      password,
    });

    if (data?.error) {
      return dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: data?.error,
      });
    }

    setCookie(LOCAL_TOKEN, data.token, 1);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: decodeJWT(data.token),
    });
  } catch (err) {
    let errorMessage = err.message;

    if (err.message.includes(ERROR_500)) {
      errorMessage = 'User already exists';
    }

    dispatch({
      type: REGISTER_USER_ERROR,
      payload: errorMessage,
    });
  }
};

export const loginUser = ({ name, email, password }) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });

  try {
    const { data } = await axios.post(`${API_URL}${URL_LOGIN}`, {
      name,
      email,
      password,
    });

    if (data?.error) {
      return dispatch({
        type: LOGIN_USER_ERROR,
        payload: data?.error,
      });
    }

    setCookie(LOCAL_TOKEN, data.token, 1);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: decodeJWT(data.token),
    });
  } catch (err) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: err.message,
    });
  }
};

export const signOutUser = () => {
  removeCookie(LOCAL_TOKEN);

  return {
    type: SIGN_OUT_USER,
  };
};
