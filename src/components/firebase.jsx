// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// user api
const userFirebaseConfig = {
  apiKey: "AIzaSyB1sQ0uFR0ysFQMazt1pVIzZEunXP6xa3w",
  authDomain: "fishlens-registration.firebaseapp.com",
  projectId: "fishlens-registration",
  storageBucket: "fishlens-registration.appspot.com",
  messagingSenderId: "173056713985",
  appId: "1:173056713985:web:c3533742690beeef742700"
};

// Initialize Firebase


// admin api
const adminFirebaseConfig = {
  apiKey: "AIzaSyC1MxdtLeMsiS0XDtfnH2W6wggCKOU5wx0",
  authDomain: "fishlens-admin.firebaseapp.com",
  projectId: "fishlens-admin",
  storageBucket: "fishlens-admin.appspot.com",
  messagingSenderId: "417410952380",
  appId: "1:417410952380:web:55a206aa8c7d37cb6f34b9"
};

// Initialize Firebase apps
const userApp = initializeApp(userFirebaseConfig, "userApp");
const adminApp = initializeApp(adminFirebaseConfig, "adminApp");

// Get Firestore and Auth instances for both apps
const userFirestore = getFirestore(userApp);
const userAuth = getAuth(userApp);

const adminFirestore = getFirestore(adminApp);
const adminAuth = getAuth(adminApp);

export { userApp, userFirestore, userAuth, adminFirestore, adminAuth };
