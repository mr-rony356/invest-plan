import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAjGkf_d3zQ-0k8wgH5aR5dYYJ40V1YeE",
  authDomain: "aaron-real-estate.firebaseapp.com",
  projectId: "aaron-real-estate",
  storageBucket: "aaron-real-estate.firebasestorage.app",
  messagingSenderId: "654666209154",
  appId: "1:654666209154:web:05e7050e26b5d57a28219b",
  measurementId: "G-25CZHB0XK9"
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };