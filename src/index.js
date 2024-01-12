import todoCreator from './todoCreator';
import projectCreator from './projectCreator';

const task1 = todoCreator('task1', 'dddddddddddddd', 20, 'low');
const task2 = todoCreator('task2', 'eeeeeeeeeee', 23, 'high');

const defaultProject = projectCreator('Default Project');
defaultProject.todos.push(task1, task2);

console.log(defaultProject);
