import firebase from 'firebase';
import 'firebase/firestore';

const firestore = firebase.firebase.firestore();

firestore.collection('users').doc(qmBviN20aa9ci7Lht9zd).collection('cartItems').doc(onzUWxeNMHRFmjS4REYr);
firebase.doc('/users/qmBviN20aa9ci7Lht9zd/cartItems/onzUWxeNMHRFmjS4REYr');
//Both are same way to show firebase store

firebase.collection('/users/qmBviN20aa9ci7Lht9zd/cartItems');

//That's how can we document and collection from database.