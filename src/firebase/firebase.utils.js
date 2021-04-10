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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const { exists } = await userRef.get();

    if(!exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
