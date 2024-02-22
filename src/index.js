import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyNp0ROc1nONHPz1bsNCIDueoRFR7Hpjs",
  authDomain: "meren-dar-gluten-free.firebaseapp.com",
  projectId: "meren-dar-gluten-free",
  storageBucket: "meren-dar-gluten-free.appspot.com",
  messagingSenderId: "859156436341",
  appId: "1:859156436341:web:428dd0cfc04e84e6b72f3c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);