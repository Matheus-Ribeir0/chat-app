// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCqsA0uHKmkpC8q40kvmVcwBZEMmw08K9c",
  authDomain: "chat-app-85e4a.firebaseapp.com",
  projectId: "chat-app-85e4a",
  storageBucket: "chat-app-85e4a.appspot.com",
  messagingSenderId: "735110915342",
  appId: "1:735110915342:web:171acc14073734e244235f",
  measurementId: "G-5HBHBLHGPE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) //variável pra autenticação
export const  databaseApp = getFirestore(app)