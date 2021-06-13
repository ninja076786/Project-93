var firebaseConfig = {
    apiKey: "AIzaSyAYQmNV_v5zLPCB7MDvK6h-w_NvMv5RXWg",
    authDomain: "project-93-kwitter-revamp.firebaseapp.com",
    databaseURL: "https://project-93-kwitter-revamp-default-rtdb.firebaseio.com",
    projectId: "project-93-kwitter-revamp",
    storageBucket: "project-93-kwitter-revamp.appspot.com",
    messagingSenderId: "731956554305",
    appId: "1:731956554305:web:ad1879207c8574b057b4c0"
  };
  firebase.initializeApp(firebaseConfig);
function goto(){
    user_name=document.getElementById("input_name").value;
   localStorage.setItem("user_name",user_name);
   window.location="kwitter_room.html";
}
