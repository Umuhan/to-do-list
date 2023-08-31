const deleteTask = (tasks, indexToDelete) => {
  taskArr = tasks.filter((task, index) => index !== indexToDelete);

  return taskArr;
};

module.exports = deleteTask;
