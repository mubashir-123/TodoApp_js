import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA65IWOX94Wy-0tyJu04yn1nzMCNW4rsZQ",
  authDomain: "todoapp-cc72f.firebaseapp.com",
  projectId: "todoapp-cc72f",
  storageBucket: "todoapp-cc72f.appspot.com",
  messagingSenderId: "1080116170755",
  appId: "1:1080116170755:web:6452bda6609ff3994f3e36",
  measurementId: "G-RL283NG63F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);