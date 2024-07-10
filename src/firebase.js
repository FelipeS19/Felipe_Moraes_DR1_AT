import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJeSbjsooHM-gZP91qpdcxA-R6-LYmCdo",
  authDomain: "quantumtecn.firebaseapp.com",
  projectId: "quantumtecn",
  storageBucket: "quantumtecn.appspot.com",
  messagingSenderId: "1063532401727",
  appId: "1:1063532401727:web:7040e339a93e2699b4148a",
  measurementId: "G-F5S09HK0SX"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth, signInWithEmailAndPassword }; 