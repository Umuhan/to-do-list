function clearCompletedTasks(tasks) {
  const updatedTasks = tasks.filter((task) => !task.completed);
  return updatedTasks;
}

module.exports = clearCompletedTasks;
