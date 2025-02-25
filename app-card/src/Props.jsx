// Props = Read-only properties that are shared between Components.
//         A Parents components can send datato a child components.
//        <Component key =value />

//propsType = A meachnism that ensures that the passed value is of
//            the correct DataTypes.
//           age: PropsTypes.number

//DefaultProps = Default value for the props in case they are not
//               passed from the Parent componenet
//               name: "guess"

import React from "react";
import PropsTypes from "prop-types";

const Props = (props) => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6 rounded-lg shadow-lg w-64 text-center">
      <p className="text-lg font-semibold">
        Name: <span className="font-normal">{props.name}</span>
      </p>
      <p className="text-lg font-semibold">
        Age: <span className="font-normal">{props.age}</span>
      </p>
      <p className="text-lg font-semibold">
        Student:{" "}
        <span className="font-normal">{props.isStudent ? "Yes" : "No"}</span>
      </p>
    </div>
  );

  Props.propsTypes = {
    name: PropsTypes.string,
    age: PropsTypes.number,
    isStudent: PropsTypes.bool,
  };
  Props.defaultProps = {
    name: "Guess",
    age: 0,
    isStudent: false,
  };
};

export default Props;
