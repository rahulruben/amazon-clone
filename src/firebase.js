import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBBeCKCg4xTasbEkmJH9kCr2zPX2P3ajUY",
    authDomain: "amz-clone-6882b.firebaseapp.com",
    databaseURL: "https://amz-clone-6882b.firebaseio.com",
    projectId: "amz-clone-6882b",
    storageBucket: "amz-clone-6882b.appspot.com",
    messagingSenderId: "855472655220",
    appId: "1:855472655220:web:b4f967b1966530d0ed7a21"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };