import React from "react";

import { useContext } from "react";
import feedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(feedbackContext);
  console.log(feedback);
  //calculate the rating average
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;
  console.log(average);
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

export default FeedbackStats;
