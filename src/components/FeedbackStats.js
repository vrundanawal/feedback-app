import React from "react";
import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
  //calculate the rating average
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;
  //   console.log(average);
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4 data-testid="feedback-reviews">{feedback.length} Reviews</h4>
      <h4 data-testid="average-rating">
        Average Rating : {isNaN(average) ? 0 : average}
      </h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
