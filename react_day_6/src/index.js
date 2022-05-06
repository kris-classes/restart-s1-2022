import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UseStateExample from "./UseStateExample";
import SimpleTodo from "./SimpleTodo";
import UseRefExample from "./UseRefExample";
import UseEffectExample from "./UseEffectExample";
import TodoWithBackend from "./TodoWithBackend";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    {/* <UseStateExample /> */}
    {/* <UseRefExample /> */}
    {/* <SimpleTodo /> */}
    {/* <UseEffectExample /> */}
    <TodoWithBackend />
  </>
);
