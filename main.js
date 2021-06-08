function goto(){
    user_name=document.getElementById("inputi_name").value;
   localStorage.setItem("user_name",user_name);
   window.location="kwitter_room.html";
}
