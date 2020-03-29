const todoForm = document.querySelector(".todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".todoList");

const TODO_LS = "todos"

let todoArr = [];

function delTodo(event) {
    const li = event.target.parentNode;
    todoList.removeChild(li);
    const cleanTodo = todoArr.filter(function(text) {
      return text.id !== parseInt(li.id);
    })
    todoArr = cleanTodo;
    saveTodo();

}

function saveTodo() {
    localStorage.setItem(TODO_LS, JSON.stringify(todoArr));
}

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", delTodo);
    const span = document.createElement("span");
    span.textContent = text;
    const todoLength = todoArr.length + 1;
    todoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = todoLength;
    const todoObj = {
        text,
        id : todoLength
    };
    todoArr.push(todoObj);
}

function handleSubmit(event) {
    event.preventDefault();
    const todoValue = todoInput.value;
    paintTodo(todoValue);
    saveTodo();
    todoInput.value = "";
}

function loadTodoList() {
    const loadedtodo = localStorage.getItem(TODO_LS);
    if (loadedtodo !== null) {
      const parsedTodo = JSON.parse(loadedtodo);
      parsedTodo.forEach(function(todo) {
        paintTodo(todo.text);
      })
    }

}

function init() {
    loadTodoList();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
