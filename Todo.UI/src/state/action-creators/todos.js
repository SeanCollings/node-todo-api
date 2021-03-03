import protectedAxios from '../../utils/protected-axios';
import { API_URL, URL_TODOS } from '../../constants';
import {
  ADD_TODO_ERROR,
  GET_TODOS,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  EDIT_TODO_ERROR,
  DELETE_TODO_ERROR,
  EDIT_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
} from '../action-types';

export const getTodos = () => async (dispatch) => {
  dispatch({
    type: GET_TODOS,
  });

  try {
    const { data } = await protectedAxios.get(`${API_URL}${URL_TODOS}`);

    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_TODOS_ERROR,
      payload: err.message,
    });
  }
};

export const addTodo = ({ task }) => async (dispatch) => {
  try {
    const { data } = await protectedAxios.post(`${API_URL}${URL_TODOS}`, {
      task,
    });

    if (data) {
      dispatch({
        type: ADD_TODO_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_TODO_ERROR,
      payload: err.message,
    });
  }
};

export const updateTodo = ({ task, completed, id }) => async (dispatch) => {
  try {
    const { data } = await protectedAxios.put(`${API_URL}${URL_TODOS}/${id}`, {
      task,
      completed,
    });

    if (data) {
      dispatch({
        type: EDIT_TODO_SUCCESS,
        payload: { id, data },
      });
    }
  } catch (err) {
    dispatch({
      type: EDIT_TODO_ERROR,
      payload: err.message,
    });
  }
};

export const deleteTodo = ({ id }) => async (dispatch) => {
  try {
    await protectedAxios.delete(`${API_URL}${URL_TODOS}/${id}`);

    dispatch({
      type: DELETE_TODO_SUCCESS,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: DELETE_TODO_ERROR,
      payload: err.message,
    });
  }
};
