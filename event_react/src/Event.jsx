//Click event = An interaction when a user clicks on a specific element
//                we can response to click by passing a callback to the onclick event handle.

import React from "react";

const Event = () => {
  //   const handleCick = () => console.log("Ouch...!");

  //   const handleClick2 = (name) => console.log(`${name} stop using me......`);

  //   let count = 0;

  //   const handleClick = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} you clicked me ${count} times`);
  //     } else {
  //       console.log(`${name} stop clicking me....!`);
  //     }
  //   };

  // To chenge the content of the button

  const handleButton = (e) => {
    e.target.textContent = "Ouch...!😢";
  };

  return (
    <div>
      {/* <button onClick={handleCick}>Click me😇</button>{" "} */}
      {/*Here while clicking on button this function will excute  */}
      {/* <button onClick={(e) => handleButton(e)}>Click me😇</button>{" "} */}
      {/*For this we are passing parameter, so it will excute instant readering, to prevent this we have to mentione arrow function  */}
      <button onClick={(e) => handleButton(e)}>Click me😇</button>{" "}
    </div>
  );
};

export default Event;
