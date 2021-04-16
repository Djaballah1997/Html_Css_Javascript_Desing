// JavaScript Document
const email = document.getElementById("email");
const passWord = document.querySelector("#pass");
const singIn = document.querySelector("#btn");
const checkEmail = localStorage.getItem("email");
const checkPass = localStorage.getItem("password");

console.log(checkEmail);
console.log(checkPass)

singIn.addEventListener("click", logIn);

function logIn(e) {
  e.preventDefault();
  if (email.value == "" || passWord.value == "") {
    alert("You Should To Enter All Data");
  } else {
    if (checkEmail && checkPass && checkEmail == email.value && checkPass == passWord.value) {
      setTimeout(() => {
        window.location = "./index.html"
      }, 1500)
    }
  }
}
