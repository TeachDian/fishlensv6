// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1sQ0uFR0ysFQMazt1pVIzZEunXP6xa3w",
  authDomain: "fishlens-registration.firebaseapp.com",
  projectId: "fishlens-registration",
  storageBucket: "fishlens-registration.appspot.com",
  messagingSenderId: "173056713985",
  appId: "1:173056713985:web:c3533742690beeef742700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
