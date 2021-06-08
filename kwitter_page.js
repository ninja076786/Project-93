var firebaseConfig = {
      apiKey: "AIzaSyDNeLHeDMj82-Z0qYZDkp_qwh3kZeXhY6U",
      authDomain: "adv-93-kwitter-chat-app-part-1.firebaseapp.com",
      databaseURL: "https://adv-93-kwitter-chat-app-part-1-default-rtdb.firebaseio.com",
      projectId: "adv-93-kwitter-chat-app-part-1",
      storageBucket: "adv-93-kwitter-chat-app-part-1.appspot.com",
      messagingSenderId: "127777931954",
      appId: "1:127777931954:web:c30ea8ebe5fc7e07233fab"
    };
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