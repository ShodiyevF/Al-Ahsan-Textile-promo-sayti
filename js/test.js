let todoList = [];

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();
  if (task !== "") {
    todoList.push(task);
    taskInput.value = "";
    displayTasks();
  }
}

function displayTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let taskItem = document.createElement("li");
    taskItem.textContent = todoList[i];
    taskList.appendChild(taskItem);
  }
}