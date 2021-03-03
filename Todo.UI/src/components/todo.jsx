import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOURS } from '../constants';
import { useActions } from '../hooks/use-actions';
import { SButtonPrimary, SButtonDanger } from './styled';

const STodoContainer = styled.div`
  margin-bottom: 1rem;
  max-width: 300px;
  min-height: 50px;
  background: ${({ completed }) =>
    completed ? COLOURS.todoComplete : COLOURS.todoBusy};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0px 4px 6px -4px ${COLOURS.secondary};
`;
const SButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;
const SInput = styled.input`
  cursor: pointer;
`;
const SLabel = styled.label`
  cursor: pointer;
`;

const Todo = ({ todo }) => {
  const { updateTodo, deleteTodo } = useActions();
  const { completed, task, id } = todo;
  const [todoComplete, setTodoComplete] = useState(completed);
  const [todoTask, setTodoTask] = useState(task);

  const handleDeleteClick = () => {
    deleteTodo({ id });
  };

  const handleUpdateClick = () => {
    updateTodo({ id, task: todoTask, completed: todoComplete });
  };

  return (
    <STodoContainer completed={completed}>
      <div>
        <input value={todoTask} onChange={(e) => setTodoTask(e.target.value)} />
      </div>
      <div>
        <SInput
          type="checkbox"
          id={id}
          name={id}
          value={todoComplete}
          checked={todoComplete}
          onChange={() => setTodoComplete((curr) => !curr)}
        ></SInput>
        <SLabel htmlFor={id}>Complete</SLabel>
      </div>
      <SButtonContainer>
        <SButtonDanger onClick={handleDeleteClick}>Delete</SButtonDanger>
        <SButtonPrimary onClick={handleUpdateClick}>Update</SButtonPrimary>
      </SButtonContainer>
    </STodoContainer>
  );
};

export default Todo;
