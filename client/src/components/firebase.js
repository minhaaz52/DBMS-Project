import firebase from "firebase";

const config={
    apiKey: "AIzaSyB-XDocst01nLL2MuA6K58PaeBAnx-wbF0",
    authDomain: "dbmsproject-72d2c.firebaseapp.com",
    projectId: "dbmsproject-72d2c",
    storageBucket: "dbmsproject-72d2c.appspot.com",
    messagingSenderId: "56054819959",
    appId: "1:56054819959:web:fdb4a1bcf8604bce5b2a72"
}

firebase.initializeApp(config);
export default firebase;