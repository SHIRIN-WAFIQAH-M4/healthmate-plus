// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBQd4haKl9uM_5QEij9eIC_EcUtk__bePg",
    authDomain: "healthmate-plus.firebaseapp.com",
    projectId: "healthmate-plus",
    storageBucket: "healthmate-plus.firebasestorage.app",
    messagingSenderId: "889465878945",
    appId: "1:889465878945:web:a952a8e490919b192173e0",
    measurementId: "G-P4Y9EK2L02"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>