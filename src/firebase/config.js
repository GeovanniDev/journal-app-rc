// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYHD-rPOHwDJ73voUpvvlFQ7MLIRGQnn8",
  authDomain: "react-course-79eb9.firebaseapp.com",
  projectId: "react-course-79eb9",
  storageBucket: "react-course-79eb9.firebasestorage.app",
  messagingSenderId: "524100853558",
  appId: "1:524100853558:web:557189b1643b560a799d97"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAppAuth = getAuth(FirebaseApp);
export const FirebaseDb = getFirestore(FirebaseApp);