import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [theme, changeTheme] = useState("default");
  const [fontSize, changeFontSize] = useState("11");

  console.log("simple JS function");

  // run only when component mounted -> good place to fetch initial data
  useEffect(() => {
    console.log("run this useEffect only on component mount");
    // get initial data from database/.json file
  }, []);

  useEffect(() => {
    console.log("run this useEffect only when THEME changes");
  }, [theme]);

  useEffect(() => {
    console.log("run this useEffect only when FONT SIZE changes");
  }, [fontSize]);

  return (
    <>
      <div>
        <h1>Theme change</h1>
        <button onClick={() => changeTheme("default")}>Default theme</button>
        <button onClick={() => changeTheme("dark")}>Dark theme</button>
        <div>Current theme is: {theme}</div>
      </div>
      <div>
        <h1>Font size change</h1>
        <button onClick={() => changeFontSize("11")}>Default font</button>
        <button onClick={() => changeFontSize("16")}>Big font</button>
        <div>Current font size is: {fontSize}</div>
      </div>
    </>
  );
}

export default UseEffectExample;
