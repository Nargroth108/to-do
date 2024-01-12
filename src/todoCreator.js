export default function todoCreator(title, description, dueDate, priority) {
	const completed = false;

	return { title, description, dueDate, priority, completed };
}
