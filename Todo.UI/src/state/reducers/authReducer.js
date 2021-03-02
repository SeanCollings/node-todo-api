import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from '../action-types';

const intialState = {
  user: null,
  loading: false,
  error: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return { loading: true, error: null, user: null };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case REGISTER_USER_ERROR:
    case LOGIN_USER_ERROR:
      return { loading: false, error: action.payload, user: null };
    default:
      return state;
  }
};
