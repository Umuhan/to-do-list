function addTask(description) {
  const tasks = [];
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
}
module.exports = addTask;
