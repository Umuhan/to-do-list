const clearCompletedTasks = require('./_mock/clearAll.js');

// const tasks = [];
// const updatedTasks = tasks.filter((task) => !task.completed);

describe('clearCompletedTasks', () => {
  test('Remove completed tasks from the array', () => {
    const tasks = [
      { id: 1, text: 'Task 1', completed: true },
      { id: 2, text: 'Task 2', completed: false },
      { id: 3, text: 'Task 3', completed: true },
      { id: 4, text: 'Task 4', completed: false },
    ];

    const updatedTasks = clearCompletedTasks(tasks);

    expect(updatedTasks).toEqual([
      { id: 2, text: 'Task 2', completed: false },
      { id: 4, text: 'Task 4', completed: false },
    ]);

    expect(tasks).toEqual([
      { id: 1, text: 'Task 1', completed: true },
      { id: 2, text: 'Task 2', completed: false },
      { id: 3, text: 'Task 3', completed: true },
      { id: 4, text: 'Task 4', completed: false },
    ]);
  });

  test('Empty array of tasks', () => {
    const tasks = [];
    const updatedTasks = clearCompletedTasks(tasks);

    expect(updatedTasks).toEqual([]);
  });
});
