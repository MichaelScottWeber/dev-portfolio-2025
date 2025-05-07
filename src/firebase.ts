// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-BCv9p8xUfvx5az-0VGj4BD60NdvKwX4',
  authDomain: 'dev-portfolio-2025.firebaseapp.com',
  projectId: 'dev-portfolio-2025',
  storageBucket: 'dev-portfolio-2025.firebasestorage.app',
  messagingSenderId: '440783670716',
  appId: '1:440783670716:web:ac581a6a10df2552056fb9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
