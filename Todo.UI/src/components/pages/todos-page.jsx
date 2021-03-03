import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useActions } from '../../hooks/use-actions';
import { SButtonPrimary, SHeading } from '../styled';
import Todo from '../todo';

const STodosContainer = styled.div`
  padding-top: 1.5rem;
`;

const TodosPage = () => {
  const { getTodos, addTodo } = useActions();
  const {
    todos: { todos, error, loading },
    auth: { user },
  } = useSelector(({ todos, auth }) => ({ todos, auth }));
  const [task, setTask] = useState('');

  useEffect(() => {
    if (!todos.length) getTodos();
  }, []);

  const handleAddTodo = () => {
    if (!task.length) return;

    addTodo({ task });
  };

  return (
    <div>
      <SHeading>{`Welcome${user?.name ? `, ${user.name}` : ''}`}</SHeading>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <SButtonPrimary onClick={handleAddTodo}>Add Todo</SButtonPrimary>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!!todos.length && (
        <STodosContainer>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </STodosContainer>
      )}
    </div>
  );
};

export default TodosPage;
