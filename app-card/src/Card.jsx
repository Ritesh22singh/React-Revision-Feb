import React from "react";
import propic from "./assets/New Pic2.jpeg";

const Card = (props) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-64 text-center">
      <img
        src={props.img}
        alt="Profile Picture"
        className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-md"
      />
      <h1 className="mt-4 text-lg font-semibold">{props.name}</h1>
      <p className="text-gray-600 mt-2">I am a Software Developer</p>
    </div>
  );
};

export default Card;
