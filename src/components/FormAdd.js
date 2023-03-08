import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useAddTodoMutation } from "../app/features/apiSlice";

const FormAdd = () => {
  const [addTodo] = useAddTodoMutation();
  const [inputTodo, setInputTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputTodo === "") {
      return alert("Please enter a todo");
    }
    addTodo({
      id: nanoid(),
      title: inputTodo,
      completed: false,
    });
    setInputTodo("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button type="submit" className="add">
          add
        </button>
      </form>
    </div>
  );
};

export default FormAdd;
