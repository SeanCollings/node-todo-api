import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from '../action-types';

const intialState = {
  loading: false,
  error: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return { loading: true, error: null };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return { loading: false, error: null };
    case REGISTER_USER_ERROR:
    case LOGIN_USER_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
