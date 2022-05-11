import React, { useState } from "react";

function Form(props) {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
      </form>
    );
  }
  
  export default Form;
