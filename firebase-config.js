// ===== FIREBASE CONFIG - TMKAA =====
const firebaseConfig = {
  apiKey: "AIzaSyA7StRU1x8-qMCa3IH7XMEgl9X8Wq95mF4",
  authDomain: "wedtmka.firebaseapp.com",
  projectId: "wedtmka",
  storageBucket: "wedtmka.firebasestorage.app",
  messagingSenderId: "721319516784",
  appId: "1:721319516784:web:bbf75c976ba57efa35f2b5",
  measurementId: "G-SVNMWMZR6L"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
