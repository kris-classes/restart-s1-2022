import React, { useState, useRef } from "react";

function TodoItem(props) {
  return (
    <div key={props.name}>
      <span>{props.name}</span>
      <input
        type="checkbox"
        name={props.name}
        checked={props.complete}
        onChange={props.handleCompleteTodo}
      />
    </div>
  );
}

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

  function handleCompleteTodo(event) {
    const updatedTodos = todos.map((task) => {
      if (task.name === event.target.name) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todos.map(({ name, complete }) => (
          <TodoItem
            key={name}
            name={name}
            complete={complete}
            handleCompleteTodo={handleCompleteTodo}
          />
        ))}
      </div>
    </>
  );
}

export default SimpleTodo;
