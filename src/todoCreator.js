export default function todoCreator(title, description, dueDate, priority) {
	const checked = false;

	return { title, description, dueDate, priority, checked };
}
