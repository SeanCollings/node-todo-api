import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import TodosPage from '../todos-page';
import { useActions } from '../../../hooks/use-actions';

jest.mock('../../../hooks/use-actions');
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Header', () => {
  const mockConfigState = {
    todos: { todos: [], error: null, loading: false },
    auth: { user: { name: 'john' } },
  };
  const mockConfigStateWithTodos = {
    todos: {
      todos: [
        { completed: false, task: 'First test task', id: 1 },
        { completed: true, task: 'Second test task', id: 2 },
      ],
      error: null,
      loading: false,
    },
    auth: { user: { name: 'john' } },
  };

  useActions.mockImplementation(() => ({
    addTodo: jest.fn(),
    getTodos: jest.fn(),
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render', () => {
    useSelector.mockReturnValueOnce(mockConfigState);

    const component = renderer.create(<TodosPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render with todos', () => {
    useSelector.mockReturnValueOnce(mockConfigStateWithTodos);

    const component = renderer.create(<TodosPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
