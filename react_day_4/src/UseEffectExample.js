import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [theme, changeTheme] = useState("default");

  // run only when component mounted -> good place to fetch initial data
  useEffect(() => {
    console.log("run this useEffect only on component mount");
  }, []);

  useEffect(() => {
    console.log("run this useEffect only when theme changes");
  }, [theme]);

  return (
    <>
      <button onClick={() => changeTheme("default")}>Default theme</button>
      <button onClick={() => changeTheme("dark")}>Dark theme</button>
      <div>Current theme is: {theme}</div>
    </>
  );
}

export default UseEffectExample;
