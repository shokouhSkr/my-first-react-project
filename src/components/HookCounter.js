// import React, { Component } from "react";
import React, { useState } from "react";

const HookContent = () => {
  const [count, setCount] = useState(0); // مقدار اولیه

  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addTwoHandler = () => {
    setCount((prevCount) => prevCount + 2);
  };

  const addFiveHandler = () => {
    // setCount(count + 5);
    // use callback:
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="container mt-4 w-1/2 rounded bg-yellow-50 p-4 ring-1 ring-yellow-500">
      <h2>count - {count}</h2>
      <div className="flex items-center justify-center gap-x-2">
        <button
          className="mt-4 rounded bg-blue-100 p-2 ring-1 ring-blue-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={addOneHandler}
        >
          add One
        </button>
        <button
          className="mt-4 rounded bg-red-100 p-2 ring-1 ring-red-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={addTwoHandler}
        >
          add Two
        </button>
        <button
          className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={addFiveHandler}
        >
          add Five
        </button>
      </div>
    </div>
  );
};

export default HookContent;
