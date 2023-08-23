import './style.css';
import { updateStatus, clearCompletedTasks } from './modules/app.js';
import {
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
} from './modules/localStorage.js';

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskContainer = document.getElementById('taskContainer');

let tasks = [];

// event listener to the checkbox
function createCheckbox(index, completed) {
  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;

  checkbox.addEventListener('change', (event) => {
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
  taskContainer.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('ul');
    taskItem.classList.add('task-item');

    const checkbox = createCheckbox(index, task.completed);

    const taskContent = document.createElement('li');
    taskContent.textContent = task.description;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn');
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      updateTaskIndexes();
      updateTaskContainer();
      saveTasksToLocalStorage(tasks);
    });

    taskItem.appendChild(taskContent);
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
  saveTasksToLocalStorage(tasks);
}

//  event listener to the "Add Task" button
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

saveTasksToLocalStorage(tasks);

// event listener to the "Clear Completed Tasks" button
const clearCompletedButton = document.getElementById('clearCompletedButton');
clearCompletedButton.addEventListener('click', () => {
  tasks = clearCompletedTasks(tasks);
  updateTaskIndexes();
  updateTaskContainer();
});

// Loading tasks from local storage on page load
window.addEventListener('load', () => {
  loadTasksFromLocalStorage(tasks); // Pass the tasks array as an argument
});
