// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9-L8nWqLxPUcS2tOorboLsPxghZ8NhBk",
  authDomain: "scan-scan-price.firebaseapp.com",
  projectId: "scan-scan-price",
  storageBucket: "scan-scan-price.appspot.com",
  messagingSenderId: "384072562356",
  appId: "1:384072562356:web:fab122203bb707503e89e1",
  measurementId: "G-DL6CVLQ6E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;