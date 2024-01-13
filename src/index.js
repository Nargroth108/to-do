import todoCreator from './todoCreator';
import projectCreator from './projectCreator';
import populateProject from './DOMpopulateProject';

const defaultProject = projectCreator('Default Project');

const task1 = todoCreator('task1', '2023-12-24', 'low', 'dddddddddddddd');
const task2 = todoCreator('task2', '2024-01-20', 'high', 'eeeeeeeeeee');
defaultProject.todos.push(task1, task2);

console.log(defaultProject);

populateProject(defaultProject);
