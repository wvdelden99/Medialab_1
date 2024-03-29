// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHmsvE2a8BENAMBoxTGX6uOOQKylzPKUo",
  authDomain: "medialab-npo-stories.firebaseapp.com",
  projectId: "medialab-npo-stories",
  storageBucket: "medialab-npo-stories.appspot.com",
  messagingSenderId: "532938405144",
  appId: "1:532938405144:web:76e03b031db9f575371a6d",
  measurementId: "G-1EXG1VZBG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);