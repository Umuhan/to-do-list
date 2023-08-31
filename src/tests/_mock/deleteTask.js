const deleteTask = (tasks, indexToDelete) => {
  const taskArr = tasks.filter((task, index) => index !== indexToDelete);

  return taskArr;
};

module.exports = deleteTask;
