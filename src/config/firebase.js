
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAq0iEMm3Be3qvKjMReKCaH2FDcqVcBtUc",
  authDomain: "tiktok---jornada-4deb6.firebaseapp.com",
  projectId: "tiktok---jornada-4deb6",
  storageBucket: "tiktok---jornada-4deb6.appspot.com",
  messagingSenderId: "349830643616",
  appId: "1:349830643616:web:21a484fb3807bc24bcaec5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
