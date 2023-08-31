const deleteTask = require('./_mock/deleteTask.js');

describe('deleteTask', () => {
  test('should remove a task from the array based on index', () => {
    const initialTasks = [
      { text: 'Task 1' },
      { text: 'Task 2' },
      { text: 'Task 3' },
    ];
    const indexToDelete = 1;

    const updatedTasks = deleteTask(initialTasks, indexToDelete);

    expect(updatedTasks).toHaveLength(initialTasks.length - 1);
  });

  test('should return a new array and not modify the original array', () => {
    const initialTasks = [
      { text: 'Task 1' },
      { text: 'Task 2' },
      { text: 'Task 3' },
    ];
    const indexToDelete = 0;

    const updatedTasks = deleteTask(initialTasks, indexToDelete);

    expect(updatedTasks).not.toBe(initialTasks);
  });

  test('should not modify the array if index is out of bounds', () => {
    const initialTasks = [{ text: 'Task 1' }, { text: 'Task 2' }];
    const indexToDelete = 5;

    const updatedTasks = deleteTask(initialTasks, indexToDelete);

    expect(updatedTasks).toEqual(initialTasks);
  });
});
