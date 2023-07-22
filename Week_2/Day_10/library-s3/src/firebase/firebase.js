// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6JwyX3WaeZy21TfHvuJe7AG5sMkpLSpw",
  authDomain: "library-s3.firebaseapp.com",
  projectId: "library-s3",
  storageBucket: "library-s3.appspot.com",
  messagingSenderId: "416704189605",
  appId: "1:416704189605:web:dca72130dad4f4494ae94c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

