import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/use-actions';

const TodosPage = () => {
  const { getTodos } = useActions();
  const { todos, error, loading } = useSelector(({ todos }) => todos);

  return (
    <div>
      <button onClick={() => getTodos()}>Get Todos</button>
    </div>
  );
};

export default TodosPage;
