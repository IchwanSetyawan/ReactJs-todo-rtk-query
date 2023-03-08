import React, { useState } from "react";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../app/features/apiSlice";

const TodoItem = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const completedHandler = () => {
    setIsCompleted(!todo.completed);
    updateTodo({...todo, completed: !todo.completed})
  }
  return (
    <li>
      <div style={{ textDecoration: isCompleted && "line-through" }}>
        <input type="checkbox" className="checkbox" checked={isCompleted} 
        onChange={completedHandler}
        />
        {todo.title}
      </div>
      <button onClick={() => deleteTodo({ id: todo.id })} className="delete">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
