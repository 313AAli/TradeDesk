// shared/firebase.js
// Include this on every app page. Redirects to login if not authenticated.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const FC = {
  apiKey:"AIzaSyCACYBsV7UocUCsL1DgtNd_iTdes2_VHZU",
  authDomain:"trade-desk---trading-tracker.firebaseapp.com",
  projectId:"trade-desk---trading-tracker",
  storageBucket:"trade-desk---trading-tracker.firebasestorage.app",
  messagingSenderId:"126552279055",
  appId:"1:126552279055:web:1d3b15c892a6d1d6957b7a"
};

const FA  = initializeApp(FC);
const auth = getAuth(FA);
const db   = getFirestore(FA);
const gp   = new GoogleAuthProvider();

window._auth = auth;
window._db   = db;
window._fb   = { signOut, onAuthStateChanged, doc, setDoc, getDoc, gp };

export { auth, db, gp, onAuthStateChanged, signOut, doc, setDoc, getDoc };
