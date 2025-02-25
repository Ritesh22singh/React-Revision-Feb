// useEffect() = React hook that tells React DO SOME CODE WHEN(pick one):
//               This component re-renders
//               This components mounts
//               The state of a value

// useEffect(function, [dependencies arr])

// 1). useEffect(() => {})                  ---> Runs after every re-render
// 2). useEffect(() => {}, [])             --->Runs only on mount
// 3). useEffect(() => {}, [value])        --> Runs on mount + when value changes

// USES
// 1# Event Listeners
// 2# DOM Manipulation
// 3# Subscription (real-time updates)
// 4# Fetching Data from API
// 5# clean up when a componenet is unmount

import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} Color: ${color}`;
  }, [count]);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubstrate() {
    setCount(count - 1);
  }

  function handleColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubstrate}>Subtrate</button>
      <br />
      <button onClick={handleColor}>Change Color</button>
    </div>
  );
};

export default UseEffectHook;

// Why we used useEffect hook?

// We used useEffect hook because, its give us previlage to when our function will mount or re-render,
// like when we give dependencie --- on that time only re-render
// Or without dependenies arr -- or every mount
