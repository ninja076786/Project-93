function goto(){
    user_name=document.getElementById("input_name").value;
   localStorage.setItem("user_name",user_name);
   window.location="kwitter_room.html";
}
