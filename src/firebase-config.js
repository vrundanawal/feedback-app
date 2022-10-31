import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPZw5ziVv2PLF44wNWNFzzFT-1I46L3N8",
  authDomain: "feedback-app-9efaa.firebaseapp.com",
  projectId: "feedback-app-9efaa",
  storageBucket: "feedback-app-9efaa.appspot.com",
  messagingSenderId: "780805474987",
  appId: "1:780805474987:web:206ec664a39b6187a405ee",
  measurementId: "G-D88EW0PENL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize the db for the app
export const db = getFirestore(app);
