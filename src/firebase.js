import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyClpHeRF6N1dGvKYKvjJ-HtKkCNO48I4nQ",
  authDomain: "chat-app-61b12.firebaseapp.com",
  projectId: "chat-app-61b12",
  storageBucket: "chat-app-61b12.appspot.com",
  messagingSenderId: "313774050843",
  appId: "1:313774050843:web:36f1caa1308b1ded1872be",
  measurementId: "G-0HPC4RK0JR",
});

const firestore_db = firebaseApp.firestore();
const auth = firebase.auth();

export { firestore_db, auth };
