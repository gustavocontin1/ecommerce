import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDL7dnSshc6zmCHN0Lkg5xYJ-4d4AJK7ew",
    authDomain: "ecommerce-deport.firebaseapp.com",
    projectId: "ecommerce-deport",
    storageBucket: "ecommerce-deport.appspot.com",
    messagingSenderId: "1058181761030",
    appId: "1:1058181761030:web:e4bc6519cc89476e12db87"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionProductos = collection(db, 'productos')