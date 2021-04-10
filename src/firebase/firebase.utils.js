import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDcHOfpFlDRKM9n_b_dbsiqgM38qu0sZEE",
    authDomain: "crwn-db-ca31b.firebaseapp.com",
    projectId: "crwn-db-ca31b",
    storageBucket: "crwn-db-ca31b.appspot.com",
    messagingSenderId: "659986165364",
    appId: "1:659986165364:web:6b5f69a679d713b3a26b21",
    measurementId: "G-40YRKDXZ5P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
