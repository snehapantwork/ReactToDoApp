import React from "react";
import { useEffect, useState, useRef, Fragment } from "react";
import style from "./style.css";
const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todoform" onSubmit={handleSubmit}>
      {props.edit ? (
        <Fragment>
          <input
            className="todoinput"
            type="text"
            name="todotask"
            value={input}
            placeholder="Enter the updated text here!"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button className="todobutton .edit" onClick={handleSubmit}>
            Update
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <input
            className="todoinput"
            type="text"
            name="todotask"
            value={input}
            placeholder="Enter the text here!"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button className="todobutton" onClick={handleSubmit}>
            Add Task
          </button>
        </Fragment>
      )}
    </form>
  );
};

export default TodoForm;
