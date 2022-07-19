// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwX1WGaKLzeaaynJG39NrGUMYNTxBYbDM",
  authDomain: "bits-mhsg.firebaseapp.com",
  databaseURL: "https://bits-mhsg-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bits-mhsg",
  storageBucket: "bits-mhsg.appspot.com",
  messagingSenderId: "393967848829",
  appId: "1:393967848829:web:8c5dbd75bf0aed54941014",
  measurementId: "G-R2RSWBP49D"
};

// Initialize Firebase complete
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);