// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getDocs, getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwQLzchzPDvAZV9Ygr3S2bEk8X-kmNL1I",
    authDomain: "collectiq-c0f8f.firebaseapp.com",
    projectId: "collectiq-c0f8f",
    storageBucket: "collectiq-c0f8f.appspot.com",
    messagingSenderId: "7729367512",
    appId: "1:7729367512:web:cf0066503ec8d8c6808aad",
    measurementId: "G-LWBLBFRPXG"
};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase)
const firestore = getFirestore(firebase);

export {firestore, auth, getDocs, collection};