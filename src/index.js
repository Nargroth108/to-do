import { createItem } from './todo-logic';
import projectCreator from './projectCreator';
import { loadPageElements } from './DOMpageManagement';

let projects;
if (!JSON.parse(localStorage.getItem('projects'))) {
	projects = [];
	const defaultProject = projectCreator('Default Project');

	const task1 = createItem('task1', '2023-12-24', 'Low', 'default task 1');
	const task2 = createItem('task2', '2024-01-20', 'Medium', 'default task 2');
	const task3 = createItem('task3', '2025-11-10', 'High', 'default task 3');
	defaultProject.todos.push(task1, task2, task3);
	projects.push(defaultProject);
} else {
	projects = JSON.parse(localStorage.getItem('projects'));
}

loadPageElements(projects);

export default projects;
