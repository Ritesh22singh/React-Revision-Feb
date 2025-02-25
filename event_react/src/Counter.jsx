import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);

    const Counter = () => {
      const [count, setCount] = useState(0);

      const increment = () => {
        setCount(count + 1);
      };

      const decrement = () => {
        setCount(count - 1);
      };

      const reset = () => {
        setCount(0);
      };

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-gray-800 mb-4">{count}</p>
            <div className="flex gap-4">
              <button
                onClick={increment}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 active:scale-95 transition"
              >
                Increment
              </button>
              <button
                onClick={reset}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 active:scale-95 transition"
              >
                Reset
              </button>
              <button
                onClick={decrement}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 active:scale-95 transition"
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      );
    };
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
