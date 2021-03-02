import { GET_TODOS_ERROR, GET_TODOS_SUCCESS, GET_TODOS } from '../action-types';

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
      return { todos: action.payload, error: null, loading: false };
    case GET_TODOS_ERROR:
      return { todos: [], error: action.payload, loading: false };
    default:
      return state;
  }
};
