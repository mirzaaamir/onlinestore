import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBVcjE6O0iPWjcqDbSCtb9Lf2v5dtouha4",
    authDomain: "onlinestore-db-a6b56.firebaseapp.com",
    projectId: "onlinestore-db-a6b56",
    storageBucket: "onlinestore-db-a6b56.appspot.com",
    messagingSenderId: "819604189082",
    appId: "1:819604189082:web:f89b395d0b71bf2ca19423",
    measurementId: "G-G6EBW36DVX"
};

firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;