import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBS4kUrJDpg1pX1Iw-ivNqLlU83jPjtXzI",
    authDomain: "facebook-1e30f.firebaseapp.com",
    projectId: "facebook-1e30f",
    storageBucket: "facebook-1e30f.appspot.com",
    messagingSenderId: "210015119513",
    appId: "1:210015119513:web:b7590940fbb623bb063008",
    measurementId: "G-HKSY06TTVT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;