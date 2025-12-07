import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAV7V3uwM7k5N7o4Lc0SREfuIW7MHUCNa4",
  authDomain: "dompet-mahasiswa-24675.firebaseapp.com",
  projectId: "dompet-mahasiswa-24675",
  storageBucket: "dompet-mahasiswa-24675.firebasestorage.app",
  messagingSenderId: "552101239846",
  appId: "1:552101239846:web:c41278ee4cc7eb1f75dae7",
  measurementId: "G-C2MEWVH984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
