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
    firebase.initializeApp(firebaseConfig);
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name")
    function gogurt(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
     username:user_name,
     message:msg,
     likes:0,
    });
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function LOGGIOUTTI(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
           window.location="index.html"
     }
