import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Replace with your Firebase config from Firebase Console
// Go to: https://console.firebase.google.com/
// Project Settings > General > Find your config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Realtime Database reference
export const database = getDatabase(app);
