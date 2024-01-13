import ExpandIcon from '../src/expand.svg';
import EditIcon from '../src/edit.svg';
import DeleteIcon from '../src/delete.svg';

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

		const subCheckbox = document.createElement('input');
		subCheckbox.setAttribute('type', 'checkbox');
		subCheckbox.value = arrayOfSubObject[0];
		subCard.appendChild(subCheckbox);

		const subTitle = document.createElement('p');
		subTitle.classList.add('sub-title');
		subTitle.innerText = arrayOfSubObject[1];
		subCard.appendChild(subTitle);

		const subDate = document.createElement('p');
		subDate.classList.add('sub-date');
		subDate.innerText = arrayOfSubObject[2];
		subCard.appendChild(subDate);

		const subPrio = document.createElement('div');
		subPrio.classList.add('sub-prio');
		subPrio.innerText = arrayOfSubObject[3];
		subCard.appendChild(subPrio);

		const subButton1 = document.createElement('button');
		subButton1.classList.add('sub-button');
		const icon1 = new Image();
		icon1.src = ExpandIcon;
		subButton1.appendChild(icon1);
		subCard.appendChild(subButton1);

		const subButton2 = document.createElement('button');
		subButton2.classList.add('sub-button');
		const icon2 = new Image();
		icon2.src = EditIcon;
		subButton2.appendChild(icon2);
		subCard.appendChild(subButton2);

		const subButton3 = document.createElement('button');
		subButton3.classList.add('sub-button');
		const icon3 = new Image();
		icon3.src = DeleteIcon;
		subButton3.appendChild(icon3);
		subCard.appendChild(subButton3);

		mainCard.appendChild(subCard);
	});
}
