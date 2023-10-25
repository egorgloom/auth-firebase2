
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// apiKey: "AIzaSyBlTJPoQ1iM7-ZLqY_-G45v_NouqXciRDw",
// authDomain: "bank-feb65.firebaseapp.com",
// projectId: "bank-feb65",
// storageBucket: "bank-feb65.appspot.com",
// messagingSenderId: "2146625466",
// appId: "1:2146625466:web:d6c8431932849f29c41f83",

console.log(import.meta.env)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



export default app;