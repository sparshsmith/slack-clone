import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1oZMhtzd0ZFbnIjlwJuG0052fe8vg7_c",
    authDomain: "slack-clone-f6f68.firebaseapp.com",
    projectId: "slack-clone-f6f68",
    storageBucket: "slack-clone-f6f68.appspot.com",
    messagingSenderId: "923012533865",
    appId: "1:923012533865:web:91ad5cbbd611de934bdcf8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };