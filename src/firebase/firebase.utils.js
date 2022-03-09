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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData 
      })
    } catch (error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(docSnapshot => {
    const { title, items } = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator; 
  }, {});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;  