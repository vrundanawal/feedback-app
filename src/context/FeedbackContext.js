import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";
import feedbackServices from "../services/feedback.services";

//import FeedbackData from "../data/FeedbackData";
const feedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //const [feedback, setFeedBack] = useState(FeedbackData);
  const [feedback, setFeedBack] = useState([]);
  useEffect(() => {
    getAllFeedback();
  }, []);

  //get the data from DB
  const getAllFeedback = async () => {
    const data = await feedbackServices.getAllFeedback();
    //console.log(data.docs);
    setFeedBack(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteFeedback = (id) => {
    //console.log("app " + id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedBack([newFeedback, ...feedback]);
  };

  return (
    <feedbackContext.Provider
      value={{ feedback: feedback, deleteFeedback, addFeedback }}
    >
      {children}
    </feedbackContext.Provider>
  );
};
export default feedbackContext;
