import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQd4haKl9uM_5QEij9eIC_EcUtk__bePg",
  authDomain: "healthmate-plus.firebaseapp.com",
  projectId: "healthmate-plus",
  storageBucket: "healthmate-plus.firebasestorage.app",
  messagingSenderId: "889465878945",
  appId: "1:889465878945:web:a952a8e490919b192173e0",
  measurementId: "G-P4Y9EK2L02"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);