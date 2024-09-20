import React, { useState } from 'react';
import './App.css'; // Make sure this file has your styles

// Star component to display individual stars
const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      onClick={onClick} // Handles click event to set the rating
      onMouseEnter={onMouseEnter} // Handles hover effect to preview rating
      onMouseLeave={onMouseLeave} // Resets the hover effect when not hovering
      style={{ cursor: 'pointer', color: filled ? 'gold' : 'gray' }} // Shows filled color or empty color
    >
      &#9733;
    </span>
  );
};

const StarRating = ({ totalStars = 5, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating); // State to manage the selected rating
  const [hoverRating, setHoverRating] = useState(0); // State to manage the hover preview

  // Function to handle mouse over event for previewing rating
  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  // Function to handle mouse leave event to reset preview
  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          filled={hoverRating ? index < hoverRating : index < rating} // Determine if star should be filled
          onClick={() => setRating(index + 1)} // Set the rating when clicked
          onMouseEnter={() => handleMouseOver(index + 1)} // Preview the rating when hovering
          onMouseLeave={handleMouseLeave} // Reset preview when not hovering
        />
      ))}
      <p>{rating} of {totalStars} stars</p> {/* Display the current rating */}
    </div>
  );
};

export default StarRating;
