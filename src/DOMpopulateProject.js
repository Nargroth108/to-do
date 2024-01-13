export default function populateProject(object) {
	const arrayOfObject = Object.values(object);

	const DOMBODY = document.querySelector('body');

	const mainCard = document.createElement('div');
	mainCard.classList.add('main-card');

	const mainTitle = document.createElement('div');
	mainTitle.classList.add('main-title');
	mainTitle.innerText = arrayOfObject[0];
	mainCard.appendChild(mainTitle);

	DOMBODY.appendChild(mainCard);

	//Displays every object stored in the second property of the main object
	arrayOfObject[1].forEach((subObject) => {
		const arrayOfSubObject = Object.values(subObject);

		const subCard = document.createElement('div');
		subCard.classList.add('sub-card');

		const subTitle = document.createElement('p');
		subTitle.classList.add('sub-title');
		subTitle.innerText = arrayOfSubObject[0];
		subCard.appendChild(subTitle);

		const subDate = document.createElement('p');
		subDate.classList.add('sub-date');
		subDate.innerText = arrayOfSubObject[1];
		subCard.appendChild(subDate);

		mainCard.appendChild(subCard);
	});
}
