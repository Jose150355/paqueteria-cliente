// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU9iJHHYRKwetQCrkGHvK8SduGz1ZXk8w",
  authDomain: "paqueteria-aguila-calva.firebaseapp.com",
  projectId: "paqueteria-aguila-calva",
  storageBucket: "paqueteria-aguila-calva.firebasestorage.app",
  messagingSenderId: "166215707569",
  appId: "1:166215707569:web:bd214ec189d8755fa92b90"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
