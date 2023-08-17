// import _ from "lodash";
import './style.css';
// import Icon from './images/cheched.jpg';

const tasks = [
  { description: 'Task 1', completed: false, index: 1 },
  { description: 'Task 2', completed: true, index: 2 },
  { description: 'Task 3', completed: false, index: 3 },
];

function renderTasks() {
  const listElement = document.querySelector('.list');

  const inputEl = document.createElement('input');
  inputEl.classList.add('input');
  inputEl.placeholder = 'Add your task here';
  listElement.appendChild(inputEl);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.description;
    listItem.classList.add(task.completed ? 'completed' : 'not-completed');
    listElement.appendChild(listItem);

    const span = document.createElement('div');
    span.classList.add('close');
    span.innerHTML = '\u00D7';
    listItem.appendChild(span);
  });

  const btn = document.createElement('button');
  btn.textContent = 'Clear all completed';
  btn.classList.add('btn');
  listElement.appendChild(btn);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
});
