import { saveTasksToLocalStorage } from './localStorage.js';

function updateStatus(tasks, index, completed) {
  tasks[index].completed = completed;
  saveTasksToLocalStorage(tasks);
}

function clearCompletedTasks(tasks) {
  const updatedTasks = tasks.filter((task) => !task.completed);
  return updatedTasks;
}

export { updateStatus, clearCompletedTasks };
