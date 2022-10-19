// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUb-Pt3pMq_EZ1iOjzS8Fmjjka4vb9BKE",
  authDomain: "lanrewajuglobal-af4d8.firebaseapp.com",
  projectId: "lanrewajuglobal-af4d8",
  storageBucket: "lanrewajuglobal-af4d8.appspot.com",
  messagingSenderId: "739258666919",
  appId: "1:739258666919:web:54089e3f630e198b9ef082",
  measurementId: "G-RM1TCLB623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);