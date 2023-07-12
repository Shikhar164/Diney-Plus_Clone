import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvg6QiDX3MU-ao_X98eg46lFwzNMdxXfM",
    authDomain: "disneyplus-clone-2ef19.firebaseapp.com",
    projectId: "disneyplus-clone-2ef19",
    storageBucket: "disneyplus-clone-2ef19.appspot.com",
    messagingSenderId: "263267558375",
    appId: "1:263267558375:web:76139827dc3f5140bed342",
    measurementId: "G-TCDPGD7WDZ"
  };

  const app = initializeApp(firebaseConfig);//to initial firebase
  const auth=getAuth(app)//for authentication
  const provider = new GoogleAuthProvider();//for google authentication
  // const db = getDatabase(app);
  const database = getFirestore(app);
  
  export { auth,app,provider};
  // export default db;
  export default database;

  