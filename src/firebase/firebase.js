import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA99esw3UDLgkanbcM27-p7Yvw2azjhzgU",
  authDomain: "todo-32b9b.firebaseapp.com",
  databaseURL: "https://todo-32b9b.firebaseio.com",
  projectId: "todo-32b9b",
  storageBucket: "todo-32b9b.appspot.com",
  messagingSenderId: "936549225572",
  appId: "1:936549225572:web:b91bd8b2cd2adeffd7bb71"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const DB = myFirebase
  .database()
  .ref()
  .child("todoRoot")
  .child("todos");
export const db = DB;
