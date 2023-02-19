// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoFA-2cZZ34Sv5lyqIkLhUGDiIXxb90D8",
    authDomain: "hoos-here-354204.firebaseapp.com",
    databaseURL: "https://hoos-here-354204-default-rtdb.firebaseio.com",
    projectId: "hoos-here-354204",
    storageBucket: "hoos-here-354204.appspot.com",
    messagingSenderId: "67078491804",
    appId: "1:67078491804:web:1cdcee3f7beefddbda2759",
    measurementId: "G-RETQ8MJ3NJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)