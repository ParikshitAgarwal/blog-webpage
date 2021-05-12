import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyB4nCKfyqIVFyAlFXFAaGtQ2Gmrc1Bri-Y",
    authDomain: "blog-webapp-6cb8e.firebaseapp.com",
    projectId: "blog-webapp-6cb8e",
    storageBucket: "blog-webapp-6cb8e.appspot.com",
    messagingSenderId: "288223190954",
    appId: "1:288223190954:web:31f66e805999eb4f8ad5d3"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export const auth = fire.auth();
  export const db = fire.firestore();