// lacal storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to render tasks on the page
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task.description}`;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn");
    editButton.addEventListener("click", () => editTask(index));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn");
    deleteButton.addEventListener("click", () => deleteTask(index));

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
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
  updateIndexes();
  saveTasksToLocalStorage();
  renderTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  updateIndexes();
  saveTasksToLocalStorage();
  renderTasks();
}

// Function to edit a task's description
function editTask(index) {
  const newDescription = prompt("Enter a new description for the task:");
  if (newDescription !== null) {
    tasks[index].description = newDescription;
    saveTasksToLocalStorage();
    renderTasks();
  }
}

// Function to update task indexes after delete
function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add event listener for adding tasks
const addTaskButton = document.getElementById("addTask");
addTaskButton.addEventListener("click", () => {
  const newTaskInput = document.getElementById("newTask");
  const newTaskDescription = newTaskInput.value.trim();
  if (newTaskDescription !== "") {
    addTask(newTaskDescription);
    newTaskInput.value = "";
  }
});

renderTasks();
