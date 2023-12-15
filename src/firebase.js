import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAIOPpwcPUFCoPNsIyip9WcGMQrLGfBAPA",
  authDomain: "sigma-scheduler-403616.firebaseapp.com",
  projectId: "sigma-scheduler-403616",
  storageBucket: "sigma-scheduler-403616.appspot.com",
  messagingSenderId: "641199386320",
  appId: "1:641199386320:web:ed9b2353c7daff9463f8d5",
  measurementId: "G-RQ6Z50DRR5"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;

