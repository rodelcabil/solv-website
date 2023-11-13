// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEoN8z5WcTIS8xEDgI608_k-TVhTC6m78",
  authDomain: "ddssi-app.firebaseapp.com",
  projectId: "ddssi-app",
  storageBucket: "ddssi-app.appspot.com",
  messagingSenderId: "913866741670",
  appId: "1:913866741670:web:a22c6274058185f0706167",
  measurementId: "G-VX2GMEB7ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);