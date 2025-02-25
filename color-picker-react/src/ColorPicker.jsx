import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center space-y-4">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">Color Picker</h1>

        {/* Color Display */}
        <div
          className="w-full h-24 rounded-lg shadow-inner border"
          style={{ background: color }}
        ></div>
        <p className="text-lg font-semibold">Selected Color: {color}</p>

        {/* Color Picker Input */}
        <div className="flex flex-col items-center space-y-2">
          <label className="text-gray-700 font-medium">Select Color</label>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-16 h-16 border-2 border-gray-300 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
