import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMSvhlyQrWZTdO4z8O1B2AehhoiyoXNCA",
  authDomain: "odam-ai.firebaseapp.com",
  projectId: "odam-ai",
  storageBucket: "odam-ai.appspot.com",
  messagingSenderId: "161533228228",
  appId: "1:161533228228:web:f0259595bc636475c68591"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 