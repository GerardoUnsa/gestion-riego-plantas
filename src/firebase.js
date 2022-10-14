import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCSMulKk6vkuLq2VSsgmOXsULbYPQC5Urw",
  authDomain: "riego-plantas.firebaseapp.com",
  projectId: "riego-plantas",
  storageBucket: "riego-plantas.appspot.com",
  messagingSenderId: "499295162321",
  appId: "1:499295162321:web:584785453a04cf7af4daf0"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const db = fb.firestore()
