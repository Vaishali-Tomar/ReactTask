import React, { useState } from "react";

const SelectedItems = () => {
  const [selectedFood, setSelectedFood] = useState(""); // Correct initial value
  const [options, setOptions] = useState([]); // Correct initial value

  const handleChange = (e) => {
    const selectedFood = e.target.value;
    setSelectedFood(selectedFood);

    if (selectedFood === "fruits") { // Remove the leading space
      setOptions([
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
      ]);
    } else if (selectedFood === "vegetables") {
      setOptions([
        { value: "potato", label: "Potato" }, // Corrected typo from "patoto"
        { value: "pears", label: "Pears" }, // Corrected typo from "prers"
      ]);
    } else if (selectedFood === "dairy") {
      setOptions([
        { value: "milk", label: "Milk" },
        { value: "oats", label: "Oats" },
      ]);
    } else {
      setOptions([]);
    }
  };

  return (
    <div>
      <select name="food" id="food" value={selectedFood} onChange={handleChange}>
        <option value="">Select</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="dairy">Dairy</option>
      </select>

      {selectedFood && (
        <select name={selectedFood} id={selectedFood}>
          <option value="">Select {selectedFood}</option>
          {options.map((option) => ( // Use options and option correctly here
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SelectedItems;
