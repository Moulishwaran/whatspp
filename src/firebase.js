import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdFXILd5Z6dJQWgM3KVjmGX84UUV8Jq-k",
  authDomain: "whatsapp-mern-32dc6.firebaseapp.com",
  projectId: "whatsapp-mern-32dc6",
  storageBucket: "whatsapp-mern-32dc6.appspot.com",
  messagingSenderId: "194205291240",
  appId: "1:194205291240:web:c01cb6400e872d0cdb2f5d",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export{app, auth, provider}