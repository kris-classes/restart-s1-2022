import React, { useState } from "react";

// Teaches about onClick action + useState
function UseStateExample() {
  const [count, setCount] = useState(0);

  function handleAddCount(event) {
    setCount(count + 1);
  }

  function handleClearCount(event) {
    console.log(event);
    setCount(0);
  }

  return (
    <>
      <div>current count: {count}</div>
      <button onClick={handleAddCount}>Add 1</button>
      <button onClick={handleClearCount}>Clear</button>
    </>
  );
}

export default UseStateExample;

// class Person:
//   name = "Nick"

//   def setName(self, new_name):
//     self.name = new_name

//   self.name

//   self.setName()
