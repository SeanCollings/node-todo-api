import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todosReducer from './todosReducer';

const reducers = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export default reducers;
