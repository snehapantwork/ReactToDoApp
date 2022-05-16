import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import style from "./style.css";
import ToDo from "./index";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    // console.log(todo, ...todos);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  return (
    <div className="todoapp">
      <br />
      <br />
      <h1>What's the plan for Today?</h1>
      {<TodoForm onFormSubmit={addTodo} />}
      {<ToDo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />}
    </div>
  );
};
export default ToDoList;
