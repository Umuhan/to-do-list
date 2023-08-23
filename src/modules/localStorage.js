// Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage(tasks) {
  const storedTasks = localStorage.getItem(tasks);
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

export { saveTasksToLocalStorage, loadTasksFromLocalStorage };
