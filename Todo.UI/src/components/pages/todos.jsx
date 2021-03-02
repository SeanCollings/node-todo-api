import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/use-actions';

const TodosPage = () => {
  const { getTodos } = useActions();
  const { todos, error, loading } = useSelector(({ todos }) => todos);

  useEffect(() => {
    if (!todos.length) getTodos();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!!todos.length && <div>{todos.length}</div>}
    </div>
  );
};

export default TodosPage;
