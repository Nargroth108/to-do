export default function createItem(title, dueDate, priority, description) {
	const completed = false;

	return { completed, title, dueDate, priority, description };
}
