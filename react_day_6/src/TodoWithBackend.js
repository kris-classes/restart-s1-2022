import React, { useState, useRef, useEffect } from "react";

function TodoWithBackend() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

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
      const save_items = [{ name, complete: false, id: uuidv4() }, ...todos];
      // const save_items = [name, ...todos];
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
    setTodos(save_items);
  }

  function handleCompleteTodo(event) {
    console.log(todos);
    const updatedTodos = todos.map((task) => {
      if (task.id === event.target.name) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    console.log(updatedTodos);
    saveTodosToBackend(updatedTodos);
    setTodos(updatedTodos);
  }

  function handleClearTodo(event) {
    console.log(todos);
    const updatedTodos = todos.filter((task) => event.target.name !== task.id);
    console.log(updatedTodos);
    saveTodosToBackend(updatedTodos);
    setTodos(updatedTodos);
  }

  return (
    <>
      <div>
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <button onClick={handleClearAllTodos}>Clear All Todos</button>
      </div>
      <div>
        {todos.map(({ name, complete, id }) => (
          <div key={id}>
            <span>{name}</span>
            <input
              type="checkbox"
              name={id}
              checked={complete}
              onChange={handleCompleteTodo}
            />
            <button name={id} onClick={handleClearTodo}>
              Remove Todo
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoWithBackend;
