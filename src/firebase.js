// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIyPLYHDBucJPu8-ANNpUw5LBOHI6b6Lk",
  authDomain: "react-tutorial-e3860.firebaseapp.com",
  projectId: "react-tutorial-e3860",
  storageBucket: "react-tutorial-e3860.appspot.com",
  messagingSenderId: "517604590765",
  appId: "1:517604590765:web:2e218003b030fba9547224",
  measurementId: "G-TB88J2NR9H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
