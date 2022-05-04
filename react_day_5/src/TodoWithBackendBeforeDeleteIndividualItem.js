import React, { useState, useRef, useEffect } from "react";

function TodoWithBackend() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function saveTodosToBackend(todos) {
    fetch("http://127.0.0.1:8000/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todos),
    });
  }

  function handleAddTodo(event) {
    const name = todoNameRef.current.value;
    if ((name != null) & (name !== "")) {
      const save_items = [name, ...todos];
      setTodos(save_items);
      todoNameRef.current.value = null;
      saveTodosToBackend(save_items);
    }
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json);
      });
  }, []);

  function handleClearAllTodos(event) {
    const save_items = [];
    saveTodosToBackend(save_items);
    setTodos([]);
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearAllTodos}>Clear All Todos</button>
      <div>
        {todos.map((name) => (
          <div key={new Date().getTime()}>{name}</div>
        ))}
      </div>
    </>
  );
}

export default TodoWithBackend;
