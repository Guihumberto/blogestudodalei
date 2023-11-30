
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDOImE8NRLFUofhwgMR4E1_540hmY0Xb7I",
  authDomain: "blog-estudodalei.firebaseapp.com",
  databaseURL: "https://blog-estudodalei-default-rtdb.firebaseio.com",
  projectId: "blog-estudodalei",
  storageBucket: "blog-estudodalei.appspot.com",
  messagingSenderId: "32519445829",
  appId: "1:32519445829:web:eb8bf30b034f6c83a6322c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export default db
