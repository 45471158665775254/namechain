// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIX99_rLlyHVluPDLljY6C874UZzV9-i8",
  authDomain: "name-chain.firebaseapp.com",
  databaseURL: "https://name-chain-default-rtdb.firebaseio.com",
  projectId: "name-chain",
  storageBucket: "name-chain.appspot.com",
  messagingSenderId: "1052953908354",
  appId: "1:1052953908354:web:0bc7873af4c5e43d36d09b",
  measurementId: "G-GV3QL2ZSE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Main Code ------------------------------------------------------------------------------------------
var nameV;

function Ready(){
    nameV = document.getElementById("name-input").value;
}

document.getElementById("insert").onclick = function(){
    Ready();
    firebase.database().ref("/").set({
        name: nameV
    });
}