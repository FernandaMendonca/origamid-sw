import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIHTva1p2DDTREFcqM22iTsW0qc-sCvUg",
  authDomain: "origamid-sw.firebaseapp.com",
  projectId: "origamid-sw",
  storageBucket: "origamid-sw.appspot.com",
  messagingSenderId: "139658778385",
  appId: "1:139658778385:web:6af5205b50b92881771eb0"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
