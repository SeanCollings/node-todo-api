import { useDispatch, useSelector } from 'react-redux';
import { LOCAL_TOKEN } from '../constants';
import { LOGIN_USER_SUCCESS } from '../state/action-types';
import { decodeJWT, getCookie } from '../utils';

const useAuthentication = () => {
  const { user } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  if (!!user) return true;

  const token = getCookie(LOCAL_TOKEN);
  const username = decodeJWT(token);

  if (username?.name) {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: username,
    });
  }

  return !!username;
};

export default useAuthentication;
