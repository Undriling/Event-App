// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeDMCi93PUf2ONCvUHfNhQMPHxfe8ipdQ",
  authDomain: "event-planner-efa69.firebaseapp.com",
  projectId: "event-planner-efa69",
  storageBucket: "event-planner-efa69.firebasestorage.app",
  messagingSenderId: "1002577988236",
  appId: "1:1002577988236:web:580548809901b6050fc9a9",
  measurementId: "G-22CXZSE5FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
