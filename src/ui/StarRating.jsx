import React, { useState } from "react";

const useStarRating = (initialRating = 0, totalStars = 5) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingClick = (clickedIndex) => {
    setRating(clickedIndex + 1);
  };

  const stars = Array.from({ length: totalStars }, (_, index) => ({
    index,
    filled: index < rating,
  }));

  return { rating, handleRatingClick, stars };
};

const StarRating = ({ totalStars }) => {
  const { rating, handleRatingClick, stars } = useStarRating(0, totalStars);

  return (
    <div>
      {stars.map(({ index, filled }) => (
        <span
          key={index}
          style={{ cursor: "pointer", color: filled ? "gold" : "gold" }}
          onClick={() => handleRatingClick(index)}
        >
          ★
        </span>
      ))}
      {/* <span>
        {rating} / {totalStars}
      </span> */}
    </div>
  );
};

export default StarRating;
