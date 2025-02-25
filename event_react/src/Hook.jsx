// React Hook = Special function that allow functional componets
//              to use React features without writing class component
//              (React v16.8) ex: --> useState, useEffect, useContext, useReducer, useCallback, and more.....

// useState() = A React hook that allow the creation of the a stateful variable and a setter function to update its value in the virtual DOM. [name, setName]

import React, { useState } from "react";

const Hook = () => {
  const [name, setname] = useState("Guess");
  const [age, setAge] = useState(11);
  const [isEmployeed, setIsemployeed] = useState(false);

  const updateName = () => {
    setname("Ritesh");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const toggleEmployeeStatus = () => {
    setIsemployeed(!isEmployeed);
  };

  return (
    <>
      <div>
        <p>My Name is: {name}</p>
        <button onClick={updateName}>Update Name</button>

        <p>My Age is: {age}</p>
        <button onClick={updateAge}>Update Age:</button>

        <p>Is Employed: {isEmployeed ? "Yes" : "No"} </p>
        <button onClick={toggleEmployeeStatus}>Employeed?</button>
      </div>
    </>
  );
};

export default Hook;
