import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  // Function to handle button click events
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display)); // Calculate the result
      } catch (err) {
        setDisplay('Error'); // Handle errors (like invalid expressions)
      }
    } else if (value === 'C') {
      setDisplay(''); // Clear the display
    } else {
      setDisplay(display + value); // Append the clicked value to the display
    }
  };

  // Array of button labels
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div>
      <div style={{ marginBottom: '10px', fontSize: '24px', border: '1px solid black', padding: '10px' }}>
        {display || '0'} {/* Display current input or '0' if empty */}
      </div>
      <div>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(button)} // Pass the button value on click
            style={{ margin: '5px', padding: '15px', fontSize: '18px' }}
          >
            {button} {/* Display button label */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
