const addTask = require('./_mock/addTask.js');

describe('Adding new tasks', () => {
  test('addTask function exists', () => {
    expect(typeof addTask).toEqual('function');
  });

  test('should add a task to the tasks array', () => {
    const tasks = [];
    const description = 'Test task';
    addTask(description, tasks);

    expect(tasks).toHaveLength(1);
  });
});
