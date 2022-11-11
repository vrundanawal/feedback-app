import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";
import feedbackServices from "../services/feedback.services";
import { toast } from "react-toastify";

//import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //const [feedback, setFeedBack] = useState(FeedbackData);
  const [feedback, setFeedBack] = useState([]);
  //const [error, setError] = useState("");
  useEffect(() => {
    getAllFeedback();
  }, []);

  const getAllFeedback = async () => {
    try {
      const data = await feedbackServices.getAllFeedbackDB();
      setFeedBack(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      // alert(`The error :  `);
      console.log(`The error : ${error}`);
      toast.error("Some error:  " + error.message);
      //setError(error);
      throw new Error("Some error occured");
    }
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        await feedbackServices.deleteFeedbackDB(id);
        // setFeedBack(feedback.filter((item) => item.id !== id));
        toast.success("Feedback deleted successfully");
        getAllFeedback();
      } catch (error) {
        //setError(error);
        toast.error("Delete failed" + error.message);
        throw new Error("Some error occured");
      }
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //console.log(newFeedback);
    toast.success("Feedback added successfully");
    setFeedBack([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
