import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBeH_3_-Km3CMP45ulaOjL2Hl3n5Si1cug",
  authDomain: "library-20c34.firebaseapp.com",
  projectId: "library-20c34",
  storageBucket: "library-20c34.appspot.com",
  messagingSenderId: "36003401036",
  appId: "1:36003401036:web:930bc16bae5bcc951013e9",
  measurementId: "G-6KD122S35V"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)