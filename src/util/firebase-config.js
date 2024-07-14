
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCvOj77JIpuvXt6SGCGogVaHutuMwQcoSM",
  authDomain: "shop-728e8.firebaseapp.com",
  projectId: "shop-728e8",
  storageBucket: "shop-728e8.appspot.com",
  messagingSenderId: "7953561052",
  appId: "1:7953561052:web:045c68ba49443b77340b19",
  measurementId: "G-9EWKQVEHCP"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig