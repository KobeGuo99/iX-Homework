// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUIDYZFnB3bryBRgLzhx651Q99EK56d_w",
  authDomain: "library-s2-45c0a.firebaseapp.com",
  projectId: "library-s2-45c0a",
  storageBucket: "library-s2-45c0a.appspot.com",
  messagingSenderId: "353939624777",
  appId: "1:353939624777:web:2e461564adada3527c0098",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
