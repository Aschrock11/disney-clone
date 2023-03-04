import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARHLAQW3ddAXL2hCBKZOmFz5PQqTlfod0",
    authDomain: "disney-clone-ab432.firebaseapp.com",
    projectId: "disney-clone-ab432",
    storageBucket: "disney-clone-ab432.appspot.com",
    messagingSenderId: "130248294968",
    appId: "1:130248294968:web:7e2d174942dbc539d9dccd",
    measurementId: "G-6RBHXKX9X4"
};

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);

const auth = getAuth(firebaseapp);

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseapp);

export { auth, provider, storage };
export default db;
