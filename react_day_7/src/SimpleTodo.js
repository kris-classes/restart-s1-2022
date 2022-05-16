import React, { useState, useRef } from "react";

function SimpleTodo() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(event) {
    const name = todoNameRef.current.value;
    console.log(name);
    if ((name != null) & (name !== "")) {
      setTodos([{ name, completed: false }, ...todos]);
      todoNameRef.current.value = null;
    }
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todos.map(({ name }) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </>
  );
}

export default SimpleTodo;
