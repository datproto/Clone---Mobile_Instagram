// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaK6rOu5b-N1dfgaJqc8CSqP_wsj61IsY",
  authDomain: "instagram-mob-clone.firebaseapp.com",
  projectId: "instagram-mob-clone",
  storageBucket: "instagram-mob-clone.appspot.com",
  messagingSenderId: "875832526698",
  appId: "1:875832526698:web:99d71a62fe115c68db8713",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
