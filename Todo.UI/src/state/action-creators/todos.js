import protectedAxios from '../../utils/protected-axios';
import { API_URL, URL_GET_TODOS } from '../../constants';
import { GET_TODOS_ERROR, GET_TODOS_SUCCESS } from '../action-types';

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await protectedAxios.get(`${API_URL}${URL_GET_TODOS}`);

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
