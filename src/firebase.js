import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCF_Rl5cXXivD-10r-THpilM6ZHXHLLT9E",
  authDomain: "control-de-inventario-175ab.firebaseapp.com",
  projectId: "control-de-inventario-175ab",
  storageBucket: "control-de-inventario-175ab.appspot.com",
  messagingSenderId: "850521455460",
  appId: "1:850521455460:web:ed3dec7d001da212db9871",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
