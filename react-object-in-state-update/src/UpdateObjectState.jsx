import React, { useState } from "react";

const UpdateObjectState = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div>
      <p>
        Your Favorite car is: {car.year}, {car.make}, {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
};

export default UpdateObjectState;

// Instead of directly modifying the state, we use a functional update ((c) => {}).
// c represents the previous state of car.
// This is useful to avoid potential state update issues due to React's asynchronous state updates.
// { ...c } → This is spread syntax, which creates a shallow copy of the previous state (c), keeping all existing properties intact.
// year: event.target.value → This updates only the year property while leaving other properties unchanged.
