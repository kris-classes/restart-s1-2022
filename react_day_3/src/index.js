import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UseStateExample from "./UseStateExample";
import SimpleTodo from "./SimpleTodo";
import UseRefExample from "./UseRefExample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateExample /> */}
    {/* <UseRefExample /> */}
    <SimpleTodo />
  </React.StrictMode>
);
