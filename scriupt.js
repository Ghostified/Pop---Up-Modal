
var a = document.getElementById("loginButton");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
console.log('the vars::',a,b,x,y);

function login(){
  x.style.left = "4px";
  y.style.right= "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;

}
function register()  {
  x.style.left = "-510px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1 ;

}

// let popup = document.getElementById("popup");

// function openPopup(){
//   popup.classList.add("open-popup");
// }
// function closePopup(){
//   popup.classList.remove("open-popup");
// }

// let eyeicon = document.getElementById(eyeicon);
// let password = document.getElementById(password);

// //add click on eye icon to view the password input
// eyeicon.onclick = function(){
//   if(password.type == "password"){
//     password.type = "text";
//     eyeicon.src = "./images/eye-open.png"
//   }
//   else{
//     password.type = "password";
//     eyeicon.src = "./images/eye-close.png"
//   }
// }
