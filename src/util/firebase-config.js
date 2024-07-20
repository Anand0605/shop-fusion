
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDYtmpsU2AyPD9jCXRl1Vxu9TvGn0z1xPs",
  authDomain: "shop-2d478.firebaseapp.com",
  projectId: "shop-2d478",
  storageBucket: "shop-2d478.appspot.com",
  messagingSenderId: "47113867459",
  appId: "1:47113867459:web:7f817af7b69997dcb1d276",
  measurementId: "G-F3SBELQRYK"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig