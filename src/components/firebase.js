import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAu8XM1FQLEQjNXe1r43jKZYEzLjeVU05E",
    authDomain: "ecommerce-4a702.firebaseapp.com",
    projectId: "ecommerce-4a702",
    storageBucket: "ecommerce-4a702.appspot.com",
    messagingSenderId: "281224851908",
    appId: "1:281224851908:web:7966544309031b8856f491",
    measurementId: "G-1N3846VKY2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionProductos = collection(db, 'productos')