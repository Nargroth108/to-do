import todoCreator from './todoCreator';
import projectCreator from './projectCreator';
import populateProject from './DOMpopulateProject';

const defaultProject = projectCreator('Default Project');

const task1 = todoCreator('task1', 'dddddddddddddd', '2023-12-24', 'low');
const task2 = todoCreator('task2', 'eeeeeeeeeee', '2024-01-20', 'high');
defaultProject.todos.push(task1, task2);

console.log(defaultProject);

populateProject(defaultProject);
