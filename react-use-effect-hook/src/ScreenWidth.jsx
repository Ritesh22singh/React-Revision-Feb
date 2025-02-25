import React, { useEffect, useState } from "react";

const ScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [heigth, setheigth] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listerner Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Remove Event listener...");

      // return () => { ... } (Cleanup Function)
      // The function inside return is the cleanup function.
      // It runs when the component unmounts (i.e., is removed from the DOM).
      // window.removeEventListener("resize", handleResize); removes the event listener to prevent memory leaks.
      // console.log("Remove Event listener..."); logs a message when the event listener is removed.
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setheigth(window.innerHeight);
  }

  return (
    <div>
      <p>window width: {width}px</p>
      <p>Window Heigth: {heigth}px</p>
    </div>
  );
};

export default ScreenWidth;

// Why is Cleanup Important?
// If we don't remove the event listener when the component unmounts, it can still listen for events even though the component is no longer in the DOM.
// This can lead to memory leaks and unexpected behavior.
