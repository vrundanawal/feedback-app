//import the db
import { db } from "../firebase-config";
//for api integration need this function which is comming from firebase
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//create a feedback collection reference
const feedbackCollectionRef = collection(db, "feedback"); //create a reference

class FeedbackDataService {
  //for add the feedback
  addFeedbackDB = (newFeedback) => {
    return addDoc(feedbackCollectionRef, newFeedback);
  };

  //update feedback
  updateFeedback = (id, updatedFeedback) => {
    const feedbackDoc = doc(db, "feedback", id);
    return updateDoc(feedbackDoc, updatedFeedback);
  };

  //delete feedback
  deleteFeedback = (id) => {
    const feedbackDoc = doc(db, "feedback", id);
    return deleteDoc(feedbackDoc);
  };

  //get all the feedback
  getAllFeedback = () => {
    return getDocs(feedbackCollectionRef);
  };

  //for a particular feedback
  getFeedback = (id) => {
    const feedbackDoc = doc(db, "feedback", id);
    return getDoc(feedbackDoc);
  };
}

export default new FeedbackDataService();
