import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      {/* This is an input */}
      <input type="text"></input>
      <button>Add todo</button>
    </>
  );
}

export default App;
