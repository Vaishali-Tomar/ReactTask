import React, { useState } from "react";

const ChipsInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Fixed: Removed () from e.target.value
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue) {
      addChips(inputValue.trim());
      setInputValue(''); // Fixed: Set inputValue to empty string to clear input
    }
  };

  const addChips = (chipText) => {
    if (chipText && !chips.includes(chipText)) {
      setChips([...chips, chipText]);
    }
  };

  const handleDelete = (index) => {
    setChips(chips.filter((chip, chipIndex) => chipIndex !== index)); // Fixed: Use index to filter out the chip
  };

  return (
    <div>
      <div>
        {chips.map((chip, index) => (
          <div key={index}>
            {chip}
            <button onClick={() => handleDelete(index)}>X</button> {/* Fixed: Passing index instead of chipText */}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type something and press Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ChipsInput;
