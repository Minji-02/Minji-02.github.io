const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting  = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";  // 반복되어 들어가는 요소는 CONST로 두기(오타 방지)

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(variable) {
  greeting.innerText = `Hello ${variable} :-)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  // show the form
  // hidden 지우고 폼 보여주게 함!!
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // null이 아님!! == localstorage에 정보가 있음!
  // show the greetings
  paintGreetings(savedUsername);
}