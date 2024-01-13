import { createItem, deleteItem } from './todo-logic';
import projectCreator from './projectCreator';
import { loadPageElements, deletePageElements } from './DOMpageManagement';
// import populateProject from './DOMpopulateProject';

let projects = [];
const defaultProject = projectCreator('Default Project');
console.table(defaultProject);

const task1 = createItem('task1', '2023-12-24', 'low', 'dddddddddddddd');
const task2 = createItem('task2', '2024-01-20', 'medium', 'eeeeeeeeeee');
const task3 = createItem('task3', '2025-11-10', 'high', 'bbbbbbbbbbb');
defaultProject.todos.push(task1, task2, task3);
console.table(defaultProject);
projects.push(defaultProject);

const ts = projectCreator('ts');
const t1 = createItem('t1', '2021-02-03', 'low', 'ddsdcsdfae');
ts.todos.push(t1);
projects.push(ts);
console.log(projects);

loadPageElements(projects);

// deleteItem(defaultProject.todos, task3);

export default projects;
