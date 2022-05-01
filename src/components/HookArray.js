import React, { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);

  const addItemHandler = () => {
    const addedItem = {
      id: item.length,
      number: Math.floor(Math.random() * 10),
    };

    const updatedItem = [...item, addedItem];

    setItem(updatedItem);
  };

  return (
    <div className="mt-4 bg-red-200 p-2">
      <button onClick={addItemHandler} className="block w-full  px-10">
        Add Item
      </button>
      {item.map((item) => {
        return <li key={item.id}>{item.number}</li>;
      })}
    </div>
  );
};

export default HookArray;
