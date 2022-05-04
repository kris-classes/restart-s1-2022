import React, { useRef, useState } from "react";

// Teaches about onClick useRef
function UseRefExample() {
  const [displayValue, setDisplayValue] = useState();
  const inputRef = useRef(null);

  function handleOnClick(event) {
    const current_input_value = inputRef.current.value;
    setDisplayValue(current_input_value);
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleOnClick}>Update display</button>
      <div>Display value = "{displayValue}"</div>
    </>
  );
}

export default UseRefExample;
