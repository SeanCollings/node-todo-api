import { GET_TODOS, GET_TODOS_SUCCESS } from '../../action-types';
import todosReducer from '../todosReducer';

describe('todos reducer', () => {
  const initialState = { loading: false, todos: [], error: null };

  test('should return the initial state', () => {
    expect(todosReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle GET_TODOS', () => {
    const action = {
      type: GET_TODOS,
    };

    expect(todosReducer({}, action)).toEqual({
      todos: [],
      error: null,
      loading: true,
    });
  });

  test('should handle GET_TODOS_SUCCESS', () => {
    const todos = [
      {
        createdAt: '2021-03-03T19:16:08.047Z',
      },
      {
        createdAt: '2021-02-03T19:16:08.047Z',
      },
    ];
    const action = {
      type: GET_TODOS_SUCCESS,
      payload: todos,
    };

    expect(todosReducer({}, action)).toEqual({
      todos: todos,
      error: null,
      loading: false,
    });
  });
});
