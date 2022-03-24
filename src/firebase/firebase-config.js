import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDjmFuQtjJxfgXSGe4yO2XzFkdeHfTNZ3Y",
    authDomain: "react-app-course-acba5.firebaseapp.com",
    projectId: "react-app-course-acba5",
    storageBucket: "react-app-course-acba5.appspot.com",
    messagingSenderId: "845410345027",
    appId: "1:845410345027:web:45f1329e0df0e13c1c74f6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }