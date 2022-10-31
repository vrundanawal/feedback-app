import React from "react";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import feedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(feedbackContext);
  return (
    <Card>
      <div className="num-display">{item?.rating}</div>
      <button
        data-testid="delete-list"
        className="close"
        onClick={() => deleteFeedback(item?.id)}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item?.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
