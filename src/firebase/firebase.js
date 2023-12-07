// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCb5-GIt0TK21E_qsb7kazbEnqUy_u2WPI",
    authDomain: "react-recipes-62f84.firebaseapp.com",
    databaseURL: "https://react-recipes-62f84-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-recipes-62f84",
    storageBucket: "react-recipes-62f84.appspot.com",
    messagingSenderId: "866839009505",
    appId: "1:866839009505:web:a97ff21d225df4acc53fa0",
    measurementId: "G-D3YK70XT0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);