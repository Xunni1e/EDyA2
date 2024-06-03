// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { setPersistence, browserSessionPersistence } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlOSMnUtRZSJOqeO6X19rXJ355qoUhack",
  authDomain: "cinewao.firebaseapp.com",
  projectId: "cinewao",
  storageBucket: "cinewao.appspot.com",
  messagingSenderId: "378983984090",
  appId: "1:378983984090:web:3577a6b0a1459646a4aee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistencia de sesión configurada");
  })
  .catch((error) => {
    console.error("Error al configurar la persistencia de sesión:", error);
  });

export {app, auth, db}