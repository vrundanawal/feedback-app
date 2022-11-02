import React, { useState, useContext } from "react";

//import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackDataService from "../services/feedback.services";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState(null);

  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    //console.log(e.target.value);
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleChange = (e) => {
    // console.log(typeof +e.currentTarget.value);
    setSelected(+e.currentTarget.value);
    setRating(+e.currentTarget.value);
  };

  // const handleSubmit1 = (e) => {
  //   if (e && e.preventDefault) {
  //     e.preventDefault();
  //   }
  //   // e.preventDefault();
  //   if (!rating) {
  //     window.alert("please select the rating");
  //     return;
  //   }
  //   if (text.trim().length > 10 && rating !== "") {
  //     const newFeedback = {
  //       text: text,
  //       rating: rating,
  //     };
  //     //console.log(newFeedback);
  //     addFeedback(newFeedback);
  //     setText("");
  //     setBtnDisabled(true);
  //     setRating(null);
  //     setSelected(null);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) {
      window.alert("please select the rating");
      return;
    }

    if (text.trim().length > 10 && rating !== "") {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      console.log(newFeedback);

      try {
        //store the data to DB
        await FeedbackDataService.addFeedbackDB(newFeedback);
      } catch (error) {
        setMessage(error.message);
      }
      addFeedback(newFeedback);
      setText("");
      setBtnDisabled(true);
      setRating(null);
      setSelected(null);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* todo - rating select component */}
        {/* <RatingSelect select={(rating) => setRating(rating)} /> */}

        <ul className="rating">
          <li>
            <input
              type="radio"
              id="num1"
              name="rating"
              value="1"
              data-testid="select-test"
              onChange={handleChange}
              checked={selected === 1}
            />
            <label htmlFor="num1">1</label>
          </li>
          <li>
            <input
              type="radio"
              id="num2"
              name="rating"
              value="2"
              onChange={handleChange}
              checked={selected === 2}
            />
            <label htmlFor="num2">2</label>
          </li>
          <li>
            <input
              type="radio"
              id="num3"
              name="rating"
              value="3"
              onChange={handleChange}
              checked={selected === 3}
            />
            <label htmlFor="num3">3</label>
          </li>
          <li>
            <input
              type="radio"
              id="num4"
              name="rating"
              value="4"
              onChange={handleChange}
              checked={selected === 4}
            />
            <label htmlFor="num4">4</label>
          </li>
          <li>
            <input
              type="radio"
              id="num5"
              name="rating"
              value="5"
              onChange={handleChange}
              checked={selected === 5}
            />
            <label htmlFor="num5">5</label>
          </li>
          <li>
            <input
              type="radio"
              id="num6"
              name="rating"
              value="6"
              onChange={handleChange}
              checked={selected === 6}
            />
            <label htmlFor="num6">6</label>
          </li>
          <li>
            <input
              type="radio"
              id="num7"
              name="rating"
              value="7"
              onChange={handleChange}
              checked={selected === 7}
            />
            <label htmlFor="num7">7</label>
          </li>
          <li>
            <input
              type="radio"
              id="num8"
              name="rating"
              value="8"
              onChange={handleChange}
              checked={selected === 8}
            />
            <label htmlFor="num8">8</label>
          </li>
          <li>
            <input
              type="radio"
              id="num9"
              name="rating"
              value="9"
              onChange={handleChange}
              checked={selected === 9}
            />
            <label htmlFor="num9">9</label>
          </li>
          <li>
            <input
              type="radio"
              id="num10"
              name="rating"
              value="10"
              onChange={handleChange}
              checked={selected === 10}
            />
            <label htmlFor="num10">10</label>
          </li>
        </ul>

        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
            data-testid="text-input"
          />
          <Button
            type="submit"
            data-testid="add-word-button"
            isDisabled={btnDisabled}
          >
            Send
          </Button>
        </div>
        {message && (
          <div data-testid="message" className="message">
            {message}
          </div>
        )}
      </form>
    </Card>
  );
};

export default FeedbackForm;
