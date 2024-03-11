// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import exp from "constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNjYaZthEjyATDcfRPZRYDp1Xffyli-wQ",
  authDomain: "netflix-gpt-mithlesh.firebaseapp.com",
  databaseURL: "https://netflix-gpt-mithlesh-default-rtdb.firebaseio.com",
  projectId: "netflix-gpt-mithlesh",
  storageBucket: "netflix-gpt-mithlesh.appspot.com",
  messagingSenderId: "177806782590",
  appId: "1:177806782590:web:c460d48986fa96d186a82f",
  measurementId: "G-WTDPK926HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth() 