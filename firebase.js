import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgYbQ5vjAUZuROECciHdRfs5PFQpf5zQY",
  authDomain: "create-authentication.firebaseapp.com",
  projectId: "create-authentication",
  storageBucket: "create-authentication.appspot.com",
  messagingSenderId: "643699423161",
  appId: "1:643699423161:web:c300c82287609f0ccf6868",
  measurementId: "G-P2LMC2SFSD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
