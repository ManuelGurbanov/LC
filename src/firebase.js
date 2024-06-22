import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsNmCc2-aKmqScgQOD7X39Xv4y3Q9HEFQ",
  authDomain: "lc-monedas.firebaseapp.com",
  projectId: "lc-monedas",
  storageBucket: "lc-monedas.appspot.com",
  messagingSenderId: "120473729742",
  appId: "1:120473729742:web:9087d2a7b7a1862ef6ee9f",
  measurementId: "G-YEY3YYXSDY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
