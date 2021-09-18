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
var app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

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