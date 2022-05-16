import React, { useRef, useState } from "react";

// Teaches about onClick useRef
function UseRefExample() {
  const [displayValue, setDisplayValue] = useState();
  const inputRef = useRef(null);

  const [displayValue1, setDisplayValue1] = useState();

  function handleOnClick(event) {
    const current_input_value = inputRef.current.value;
    setDisplayValue(current_input_value);
  }

  function handleOnChangeInput(event) {
    setDisplayValue1(event.target.value);
  }

  return (
    <>
      <div>
        <h1>Display value</h1>
        <input ref={inputRef} type="text" />
        <button onClick={handleOnClick}>Update display</button>
        <div>Display value = "{displayValue}"</div>
      </div>
      <div>
        <h1>Display value1</h1>
        <input onChange={handleOnChangeInput} type="text" />
        <div>Display value = "{displayValue1}"</div>
      </div>
    </>
  );
}

export default UseRefExample;
