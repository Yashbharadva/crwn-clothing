import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBKz-NGHUCyRvvfOdGbfbTmk_yBxpZeKQU",
    authDomain: "crwn-db-d5943.firebaseapp.com",
    projectId: "crwn-db-d5943",
    storageBucket: "crwn-db-d5943.appspot.com",
    messagingSenderId: "4001601877",
    appId: "1:4001601877:web:7c5f8bb3f2f3983696f7dc",
    measurementId: "G-4XDWETXSHT"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;  