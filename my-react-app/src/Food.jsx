import React from "react";

const Food = () => {
  const food1 = "Mongo";
  const food2 = "Apple";
  return (
    <div>
      <ul>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
      </ul>
    </div>
  );
};

export default Food;
