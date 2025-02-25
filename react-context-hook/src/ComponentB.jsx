// useContext() = React Hook that allows you to share values between multiple levels of components without passing props throught each level

import React from "react";
import ComponentC from "./componentC";

const ComponentB = (props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 border-gray-500 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Hello</h1>
        <ComponentC user={props.user} />
      </div>
    </div>
  );
};

export default ComponentB;
