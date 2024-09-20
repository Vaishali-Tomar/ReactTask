import React, { useState } from "react";

const Countetr = () => {
  const [count, setCount] = useState(0);
  const [inc, setInc] = useState(1);

  const handleDec = () => {
     setCount(count-inc);
  }

  const handleInc = () => {
    setCount(count+inc);
 }
 const reset= () => {
    setCount(0);
 }

 const handleIncrementValue = (e) => {
    setInc(parseInt(e.target.value || 10));
 }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={reset}>Reset</button>
      <label>
        set Increment Value :
        <input
          type="number"
          value={inc}
          onChange={handleIncrementValue}
          min="1"
        />
      </label>
    </div>
  );
};

export default Countetr;
