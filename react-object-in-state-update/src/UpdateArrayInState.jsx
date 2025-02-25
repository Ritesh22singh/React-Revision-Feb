import React, { useState } from "react";

const UpdateArrayInState = () => {
  const [food, setFood] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("inputId").value;
    document.getElementById("inputId").value = "";

    setFood([...food, newFood]);
  }

  function handleRemoveFood(index) {
    setFood(food.filter((_, i) => i !== index));

    // Working Flow....
    // This function removes a food item from the food state array at the specified index.

    // Calls setFood to update the food state.
    // Uses .filter() to create a new array without modifying the original one.
    // The filter condition (_, i) => i !== index:
    // _ (underscore) represents the current food item (not used here).
    // i represents the current index in the array.
    // i !== index ensures that the item at index is removed.


  }
  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {food.map((foods, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {foods}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Enter food name" id="inputId" />
      <button onClick={handleAddFood}>Add</button>
    </div>
  );
};

export default UpdateArrayInState;
