const form = document.querySelector(".form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".greeting");

const NAME_LS = "name"
const SHOWING_CL = "showing"

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem(NAME_LS, currentValue);
    paintGreeting(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CL);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CL);
    greeting.classList.add(SHOWING_CL);
    greeting.textContent = `Hello ${text}`;

}

function loadName() {
    const currentUser = localStorage.getItem(NAME_LS);
    if (currentUser === null) {
        askForName();   //이름 적게함
      } else {
        paintGreeting(currentUser); //이름을 가지고 greeting출력
      }
}

function init() {
    loadName();
}

init();
