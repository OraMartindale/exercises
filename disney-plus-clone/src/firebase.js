import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAMZ2oe9-I678puZKGyfCwoWEpWZl-Bjz0",
  authDomain: "disneyplus-clone-7ae1c.firebaseapp.com",
  projectId: "disneyplus-clone-7ae1c",
  storageBucket: "disneyplus-clone-7ae1c.appspot.com",
  messagingSenderId: "641891176640",
  appId: "1:641891176640:web:ab7e8697e2d6de21d85d25"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;