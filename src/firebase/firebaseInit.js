import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyASfC-8cxZB3aNvFVgR3xqDlNk2JQYUW_A",
    authDomain: "sfilsittpi.firebaseapp.com",
    databaseURL: "https://sfilsittpi-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sfilsittpi",
    storageBucket: "sfilsittpi.appspot.com",
    messagingSenderId: "275138897996",
    appId: "1:275138897996:web:2bd5e53538f7d6b181ece9",
    measurementId: "G-T9XENENCMM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();