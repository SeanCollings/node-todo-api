import { LOGIN_USER } from '../../action-types';
import authReducer from '../authReducer';

describe('auth reducer', () => {
  const initialState = { user: null, loading: false, error: null };

  test('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle LOGIN_USER', () => {
    const action = {
      type: LOGIN_USER,
    };

    expect(authReducer({}, action)).toEqual({
      loading: true,
      error: null,
      user: null,
    });
  });
});
