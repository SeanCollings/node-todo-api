import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actionCreators } from '../..';
import {
  GET_TODOS,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
} from '../../action-types';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import protectedAxios from '../../../utils/protected-axios';

jest.mock('../../../utils/protected-axios', () => ({
  ...jest.requireActual('../../../utils/protected-axios'),
  get: jest.fn(),
}));

describe('todos action creator', () => {
  test('should dispatch actions for getTodos', async () => {
    protectedAxios.get.mockReturnValueOnce({ data: { test: 'data' } });

    const expectedActions = [
      { type: GET_TODOS },
      { type: GET_TODOS_SUCCESS, payload: { test: 'data' } },
    ];

    const store = mockStore({ loading: false, todos: [], error: null });

    await store.dispatch(actionCreators.getTodos());

    expect(store.getActions()).toEqual(expectedActions);
  });

  test('should handle errors in getTodos', async () => {
    protectedAxios.get.mockReturnValueOnce(
      Promise.reject({ message: 'error message' })
    );

    const expectedActions = [
      { type: GET_TODOS },
      { type: GET_TODOS_ERROR, payload: 'error message' },
    ];

    const store = mockStore({ loading: false, todos: [], error: null });

    await store.dispatch(actionCreators.getTodos());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
