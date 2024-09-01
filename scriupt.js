let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}

let eyeicon = document.getElementById(eyeicon);
let password = document.getElementById(password);

//add click on eye icon to view the password input
eyeicon.onclick = function(){
  if(password.type == "password"){
    password.type = "text";
    eyeicon.src = "./images/eye-open.png"
  }
  else{
    password.type = "password";
    eyeicon.src = "./images/eye-close.png"
  }
}
