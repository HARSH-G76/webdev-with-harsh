function register(){

let user=document.getElementById("regUser").value
let pass=document.getElementById("regPass").value

localStorage.setItem("user",user)
localStorage.setItem("pass",pass)

alert("Account Created")

window.location.href="login.html"
}


function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

let savedUser=localStorage.getItem("user")
let savedPass=localStorage.getItem("pass")

if(user===savedUser && pass===savedPass){

localStorage.setItem("isLoggedIn","true")   // 

window.location.href="index.html"

}else{

alert("Wrong login")

}
}


function logout(){
localStorage.removeItem("isLoggedIn")
window.location.href="login.html"
}