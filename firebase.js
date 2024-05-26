import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZT5YdNQy87UVr3ec4FAYwcwXELjQZyXs",
    authDomain: "jayesh-572c5.firebaseapp.com",
    projectId: "jayesh-572c5",
    storageBucket: "jayesh-572c5.appspot.com",
    messagingSenderId: "234927471107",
    appId: "1:234927471107:web:28a841562e4d603a4eec36",
    measurementId: "G-CYYM8H1XSX"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };