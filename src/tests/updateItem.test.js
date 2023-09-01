const updateTodoItem = require('./_mock/updateItem.js');

describe('updateTodoItem function', () => {
  let todoList;
  beforeEach(() => {
    todoList = [
      { id: 1, task: 'Buy groceries', completed: false },
      { id: 2, task: 'Go to the gym', completed: true },
      { id: 3, task: 'Read a book', completed: false },
    ];
  });

  test('Update a non-existing item', () => {
    const idToUpdate = 4;
    const newTask = 'Go for a walk';

    updateTodoItem(idToUpdate, newTask);
    expect(todoList).toEqual([
      { id: 1, task: 'Buy groceries', completed: false },
      { id: 2, task: 'Go to the gym', completed: true },
      { id: 3, task: 'Read a book', completed: false },
    ]);
  });
});
