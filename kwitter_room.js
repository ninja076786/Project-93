jongla=document.getElementById("input_name").value;
   document.getElementById("name_here").innerHTML="Welcome "+jongla+" !"
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
function logout(){
    window.location="index.html";
}
function addRoom(){
  var mocha1=document.getElementById("room_name").value;
  firebase.database().ref("/").child(mocha1).update({
    ALERT_ALERT_ALERT_ALERT_ALERT1:"A Room Has Been Added!!!"
    });
    localStorage.setItem("mocha1",mocha1);
    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code

 //End code
 });});}
getData();
window.location("kwitter_page.html");
document.getElementById("output").innerHTML=row
}
function gotoroom(){
  var mocha2=document.getElementById("room_name").value;
  firebase.database().ref("/").child(mocha2).update({
    ALERT_ALERT_ALERT_ALERT_ALERT2:"null Will Go To A Trending Room!!!"
    });
    localStorage.setItem("mocha2",mocha2);
    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 var row="<div class='room_name' id='+Room_names+' onclick='redirect(this.id)' style='cursor:pointer;'># "+Room_names+"</div><hr>";
 });});}
getData();
window.location("kwitter_page.html");
document.getElementById("output").innerHTML=row
}
