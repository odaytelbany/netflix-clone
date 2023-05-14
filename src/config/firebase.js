import { initializeApp } from "firebase/app";
import {  GoogleAuthProvider, getAuth } from "firebase/auth"; 
import {  getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyD6RUtTSC1SUz96mJNW1ASKd7QNAd0Ewwc",
  authDomain: "netflix-clone-f4400.firebaseapp.com",
  projectId: "netflix-clone-f4400",
  storageBucket: "netflix-clone-f4400.appspot.com",
  messagingSenderId: "480064230647",
  appId: "1:480064230647:web:a125d71547a44479e4eff2"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export {auth, googleProvider};
export default db;