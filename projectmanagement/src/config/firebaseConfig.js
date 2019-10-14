import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA6aQllHVXR5jK0YAonpdm6GXi3bJPJj_E",
  authDomain: "project-management-c3fad.firebaseapp.com",
  databaseURL: "https://project-management-c3fad.firebaseio.com",
  projectId: "project-management-c3fad",
  storageBucket: "",
  messagingSenderId: "853083029935",
  appId: "1:853083029935:web:ebe8c6a48ee5d02452af5a",
  measurementId: "G-BRXQ1LEFEJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
//firebase.analytics();

export default firebase;
