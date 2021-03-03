import { sortByCreatedDate } from '../../utils';
import {
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  GET_TODOS,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  EDIT_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
} from '../action-types';

const intialState = {
  loading: false,
  todos: [],
  error: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { todos: [], error: null, loading: true };
    case GET_TODOS_SUCCESS:
      return {
        todos: sortByCreatedDate(action.payload),
        error: null,
        loading: false,
      };
    case GET_TODOS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ADD_TODO_SUCCESS:
      return {
        todos: [...state.todos, action.payload],
        error: null,
        loading: false,
      };
    case ADD_TODO_ERROR:
      return { ...state, error: action.payload, loading: false };
    case EDIT_TODO_SUCCESS:
      const { id, data } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? data : todo
      );

      return {
        todos: updatedTodos,
        error: null,
        loading: false,
      };
    case DELETE_TODO_SUCCESS:
      return {
        todos: state.todos.filter(({ id }) => id !== action.payload),
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};
