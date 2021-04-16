// JavaScript Document
const userName = document.getElementById("name");
const email = document.getElementById("email");
const passWord = document.querySelector("#pass");
const singUp = document.querySelector("#btn");


singUp.addEventListener("click", registerAccount);

function registerAccount(e) {
  e.preventDefault();
  if (userName.value == "" || email.value == "" || passWord.value == "") {
    alert("You Shold To Enter All Data")
  } else {
    localStorage.setItem("username", userName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", passWord.value);
    setTimeout(() => {
      window.location = "./login.html"
    }, 1500)
  }


}
