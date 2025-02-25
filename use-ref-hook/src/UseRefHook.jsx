import React, { useState, useRef, useEffect } from "react";

const UseRefHook = () => {
  //const [number, setNumber] = useState(0);

  const inputRef = useRef(0);
  console.log(inputRef);

  useEffect(() => {
    console.log("Component Render");
  });

  function handleClick() {
    //setNumber((n) => n + 1);
    // ref.current++;
    inputRef.current.focus();
    inputRef.current.style.backgroundcolor = "color";
  }

  return (
    <div>
      <button onClick={handleClick}>Click me! </button>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRefHook;
