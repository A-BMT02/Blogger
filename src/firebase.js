import { initializeApp } from "firebase/app" ;
import { getAuth } from "firebase/auth" ; 
const firebaseConfig = {
  apiKey: "AIzaSyADVDh_MT_SDyvK2DuQSAV6_pY7bzg0wVU",
  authDomain: "fir-19681.firebaseapp.com",
  projectId: "fir-19681",
  storageBucket: "fir-19681.appspot.com",
  messagingSenderId: "639926247249",
  appId: "1:639926247249:web:ba597f7d788a85dcbefd70"
};

const app = initializeApp(firebaseConfig) ;
export const auth = getAuth() ; 