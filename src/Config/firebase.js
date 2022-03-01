// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3VlWQqNIAvhcWHKMvN0UI6oEnfHNdHng",
  authDomain: "final-secondtonone.firebaseapp.com",
  projectId: "final-secondtonone",
  storageBucket: "final-secondtonone.appspot.com",
  messagingSenderId: "1047749911080",
  appId: "1:1047749911080:web:1c41c6067979b39a994b1d",
  measurementId: "G-JTRTVZ3SJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);