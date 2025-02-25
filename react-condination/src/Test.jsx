// Conditional Rendering = Allows you to control what gets rendered
//                         in your appplication based on certain conditions
//                         (show, Hide, or change componenets)

import React from "react";
import PropsTypes from "prop-types";

const Test = (props) => {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.username}</h2>;
  //   } else {
  //     return <h2> Please log in to continue.....</h2>;
  //   }

  //Second method for condinanal rendering
  //   return props.isLoggedIn ? (
  //     <h2>wlecome {props.username}</h2>
  //   ) : (
  //     <h2>Please log in to continue.....</h2>
  //   );

  // Third Method

  const welcomeMsg = <h2>wlecome {props.username}</h2>;
  const loginMsg = <h2>Please log in to continue.....</h2>;

  return props.isLoggedIn ? { welcomeMsg } : { loginMsg };

  // By the use of propsType u can check the datatype which is coming from prarent is correct or not

  Test.propsTypes = {
    isLoggedIn: PropsTypes.bool,
    username: PropsTypes.string,
  };

  // By the help of default props, we can assign default value if the value is not passed from parent

  Test.defaultProps = {
    isLoggedIn: false,
    username: "Guess",
  };
};

export default Test;
