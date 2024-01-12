export default function populateProject(project) {
	const DOMBODY = document.querySelector('body');

	const projectCard = document.createElement('div');
	projectCard.classList.add('project-card');

	const projectTitle = document.createElement('div');
	projectTitle.classList.add('project-title');
	projectTitle.innerText = project.name;
	projectCard.appendChild(projectTitle);
	DOMBODY.appendChild(projectCard);

	project.todos.forEach((todo) => {
		const todoCard = document.createElement('div');
		todoCard.classList.add('todo-card');

		const todoTitle = document.createElement('input');
		todoTitle.setAttribute('type', 'text');
		todoTitle.value = todo.title;
		todoTitle.disabled = true;
		todoCard.appendChild(todoTitle);

		const todoDate = document.createElement('input');
		todoDate.setAttribute('type', 'date');
		todoDate.value = todo.dueDate;
		todoDate.disabled = true;
		todoCard.appendChild(todoDate);

		projectCard.appendChild(todoCard);
	});
}
