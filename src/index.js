import "./style.css";
// references to the input, button, and task container elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskContainer = document.getElementById("taskContainer");

let tasks = [];

// Function to update the task container
function updateTaskContainer() {
  taskContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("ul");
    taskItem.classList.add("task-item");

    const taskContent = document.createElement("li");
    taskContent.textContent = task.description;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn");
    editButton.addEventListener("click", () => {
      const newDescription = prompt("Enter a new description for the task:");

      if (newDescription !== null) {
        tasks[index].description = newDescription;
        updateTaskContainer();
        saveTasksToLocalStorage();
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn");
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      for (let i = 0; i < tasks.length; i += 1) {
        tasks[i].index = i + 1;
      }
      updateTaskContainer();
      saveTasksToLocalStorage();
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskContainer.appendChild(taskItem);
  });
}

// Function to add a new task
function addTask(description) {
  const newTask = {
    description: description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  updateTaskContainer();
  saveTasksToLocalStorage();
}

function edditTask(index) {}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    updateTaskContainer();
  }
}

//  event listener to the "Add Task" button
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

// Loading tasks from local storage on page load
window.addEventListener("load", () => {
  loadTasksFromLocalStorage();
});
