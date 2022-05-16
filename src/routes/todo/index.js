import { useState } from "react";
import TodoForm from "./TodoForm";
import style from "./style.css";
import React from "react";

const ToDo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onFormSubmit={submitUpdate} />;
  }

  return (
    <>
      {todos.map((todo, index) => (
        <div className="todorow" key={index}>
          <div key={todo.id}>{todo.text}</div>
          <div>
            <button
              type="button"
              class={style.editicon}
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            >
              {"Edit"}
            </button>
            <button
              type="button"
              onClick={() => removeTodo(todo.id)}
              class={style.deleteicon}
            >
              {"Delete"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ToDo;
