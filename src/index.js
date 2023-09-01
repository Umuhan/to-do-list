/* eslint-disable */
import "./style.css";
import { updateStatus, clearCompletedTasks } from "./modules/app.js";
import {
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
} from "./modules/localStorage.js";

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskContainer = document.getElementById("taskContainer");

let tasks = [];

// Function to create an edit button
function createEditButton(index) {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("btn");
  editButton.addEventListener("click", () => {
    const taskContent = document.querySelector(`#taskContent-${index}`);

    if (taskContent) {
      const taskDescription = taskContent.textContent;

      // Hide the task description
      taskContent.style.display = "none";

      // Create an input field for editing
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = taskDescription;

      // Add the input field after the task content
      taskContent.parentNode.insertBefore(editInput, taskContent.nextSibling);

      // Add an event listener to save the edited description on Enter.
      editInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          const newDescription = editInput.value.trim();
          if (newDescription !== "") {
            tasks[index].description = newDescription;
            updateTaskContainer();
            saveTasksToLocalStorage(tasks);
          }

          // Remove the edit input field
          editInput.remove();

          // Show the task description again
          taskContent.style.display = "block";
        }
      });

      // Focus on the edit input field
      editInput.focus();
    }
  });

  return editButton;
}

// event listener to the checkbox
function createCheckbox(index, completed) {
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  checkbox.addEventListener("change", (event) => {
    updateStatus(tasks, index, event.target.checked);
  });
  return checkbox;
}

function updateTaskIndexes() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
}

// Function to update the task container
function updateTaskContainer() {
  taskContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("ul");
    taskItem.classList.add("task-item");

    const checkbox = createCheckbox(index, task.completed);

    const taskContent = document.createElement("li");
    taskContent.textContent = task.description;
    taskContent.id = `taskContent-${index}`;

    const editButton = createEditButton(index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn");
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      updateTaskIndexes();
      updateTaskContainer();
      saveTasksToLocalStorage(tasks);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.insertBefore(checkbox, taskItem.firstChild);
    taskItem.appendChild(deleteButton);
    taskContainer.appendChild(taskItem);
  });
}

// Function to add a new task
function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  updateTaskContainer();
  updateTaskIndexes();
  saveTasksToLocalStorage(tasks);
}

//  event listener to the "Add Task" button
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

// event listener to the "Clear Completed Tasks" button
const clearCompletedButton = document.getElementById("clearCompletedButton");
clearCompletedButton.addEventListener("click", () => {
  tasks = clearCompletedTasks(tasks);
  updateTaskIndexes();
  updateTaskContainer();
});

// Loading tasks from local storage on page load
window.addEventListener("load", () => {
  loadTasksFromLocalStorage(tasks);
  updateTaskContainer();
});
