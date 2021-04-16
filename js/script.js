// JavaScript Document
const list = document.querySelector(".list-register");
const listInfo = document.querySelector(".list-info");
let nameInfo = document.getElementById("name-info")
const checkName = localStorage.getItem("username");
const logOut = document.querySelector("#logout");
const matchContent = document.querySelector(".match-section")

if (checkName) {
  list.style.display = "none";
  listInfo.style.display = "block";
  nameInfo.innerHTML = checkName;
}
logOut.addEventListener("click", logOutWeb)

function logOutWeb() {
  setTimeout(() => {
    window.location = "./login.html";
  }, 1500);
  localStorage.clear();
};
