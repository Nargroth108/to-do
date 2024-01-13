export default function todoCreator(title, dueDate, priority, description) {
	const completed = false;

	return { completed, title, dueDate, priority, description };
}
