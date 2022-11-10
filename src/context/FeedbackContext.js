import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";
import feedbackServices from "../services/feedback.services";

//import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //const [feedback, setFeedBack] = useState(FeedbackData);
  const [feedback, setFeedBack] = useState([]);
  useEffect(() => {
    getAllFeedback();
  }, []);

  // const getAllFeedback = async () => {
  //   try {
  //     const data = await feedbackServices.getAllFeedbackDB();
  //     console.log(data.docs);
  //     setFeedBack(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   } catch (error) {
  //     alert(`The error : Something went wrong `);
  //     //console.log(`The error : ${error}`);
  //     throw new Error("Something went wrong");
  //   }
  // };
  //get the all feedback data from DB

  const getAllFeedback = async () => {
    try {
      const data = await feedbackServices.getAllFeedbackDB();
      console.log(data.docs);
      if (data) {
        setFeedBack(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(`The error : Something went wrong `);
      //console.log(`The error : ${error}`);
      throw new Error("Something error occured");
    }
  };

  // const deleteFeedback = (id) => {
  //   //console.log("app " + id);
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedBack(feedback.filter((item) => item.id !== id));
  //   }
  // };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await feedbackServices.deleteFeedbackDB(id);
      // setFeedBack(feedback.filter((item) => item.id !== id));
      getAllFeedback();
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedBack([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
