// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";

// require('dotenv').config()

const firebaseConfig = {
    apiKey: "AIzaSyAczTJr6o7456Ldfkf4lrG1VThthAly4FU",
  authDomain: "gdgpuneccd.firebaseapp.com",
  projectId: "gdgpuneccd",
  storageBucket: "gdgpuneccd.appspot.com",
  messagingSenderId: "983878995335",
  appId: "1:983878995335:web:a62f8039f4894d56f1d722",
  measurementId: "G-3HH7WSMSTC"
}

const app = initializeApp(firebaseConfig)

export default app;