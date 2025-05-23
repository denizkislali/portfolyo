import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9AxBnurA2WMQPA4WCvVb2GuN-ktjt-sY",
  authDomain: "portfolyo-contact.firebaseapp.com",
  projectId: "portfolyo-contact",
  storageBucket: "portfolyo-contact.appspot.com", // ✔️ düzeltildi
  messagingSenderId: "442119071558",
  appId: "1:442119071558:web:f11aa9fbf65e83dd5ea747",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
