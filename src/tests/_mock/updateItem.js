const todoList = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Go to the gym', completed: true },
  { id: 3, task: 'Read a book', completed: false },
];

function updateTodoItem(id, updatedTask) {
  const index = todoList.findIndex((item) => item.id === id);

  if (index !== -1) {
    todoList[index].task = updatedTask;
  }
}

module.exports = updateTodoItem;
