import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getDatabase} from "firebase/database";
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAeEVRekkN7l-djISlHKSW_V-ppGHU5Tu8",
    authDomain: "chat-kwork-online.firebaseapp.com",
    projectId: "chat-kwork-online",
    storageBucket: "chat-kwork-online.appspot.com",
    messagingSenderId: "936705116636",
    appId: "1:936705116636:web:7de370c0612d4f163a2719",
    measurementId: "G-8XEQ7MS5Q7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

const analytics = getAnalytics(app);
