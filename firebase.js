// firebase.js — configuration et exports partagés pour toutes les pages
// du site du Club Réussir Ensemble (index.html, cours.html, admin.html, etc.)
//
// Ce fichier était manquant sur le dépôt — reconstitué à partir de la
// configuration déjà présente dans Site_web_club.html (même projet Firebase
// "emploi-temps" que tes autres applications du Club).

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, getDoc, setDoc, addDoc, updateDoc, deleteDoc,
  collection, query, where, orderBy, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYeYPOptN2wEak_Ctcr4a8t5qXpj4riLE",
  authDomain: "emploi-temps.firebaseapp.com",
  projectId: "emploi-temps",
  storageBucket: "emploi-temps.firebasestorage.app",
  messagingSenderId: "665985283894",
  appId: "1:665985283894:web:b0c4cb14824bb8fed9a597"
};

const fbApp = initializeApp(firebaseConfig);

export const fbDB = getFirestore(fbApp);
export const fbAuth = getAuth(fbApp);

/* ── Collections utilisées par le site du Club Réussir Ensemble ── */
export const C_MATIERES    = 'site_matieres';
export const C_PAIEMENTS   = 'site_paiements';
export const C_ELEVES      = 'site_eleves';
export const C_INSC        = 'site_inscriptions';
export const C_CONTACTS    = 'site_contacts';
export const C_EVENEMENTS  = 'site_evenements';
export const C_EVALUATIONS = 'site_evaluations';
export const C_RESULTATS   = 'site_quiz_resultats';
export const C_OBJECTIFS   = 'site_objectifs';
export const C_CONFIG      = 'site_config';
export const C_VIDEOS      = 'site_videos';
export const C_EQUIPE      = 'site_equipe';
export const C_RESSOURCES  = 'site_ressources';
export const C_GAL         = 'site_galerie';

/* ── Fonctions Firestore / Auth ré-exportées pour que les pages
   n'aient qu'un seul fichier à importer ── */
export {
  doc, getDoc, setDoc, addDoc, updateDoc, deleteDoc,
  collection, query, where, orderBy, onSnapshot,
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged
};

