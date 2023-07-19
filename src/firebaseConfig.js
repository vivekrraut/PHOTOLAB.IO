import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKi5numrXmFJim1AkErFRpTu-7h_mffso",
  authDomain: "photolab-dfd38.firebaseapp.com",
  projectId: "photolab-dfd38",
  storageBucket: "photolab-dfd38.appspot.com",
  messagingSenderId: "925131761686",
  appId: "1:925131761686:web:cd1664be5641ca097ead37",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };
