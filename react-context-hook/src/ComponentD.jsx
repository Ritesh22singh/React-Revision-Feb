// useContext() = React Hook that allows you to share values between multiple levels of components without passing props throught each level

import React, { use, useContext } from "react";
import { UserContext } from "./ComponentA";

const ComponentD = () => {
  const user = UserContext(useContext);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 border-gray-500 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Hello</h1>
        <h2>User: {user}</h2>
      </div>
    </div>
  );
};

export default ComponentD;

// Here to pass data from componentA to ComponentD, we need to pass data from each level --->ComponenetA-->ComponenetB--->ComponenetC---ComponenetD
//so this will casue props drilling
