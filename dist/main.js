/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMloadDialog.js":
/*!******************************!*\
  !*** ./src/DOMloadDialog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadDialog)
/* harmony export */ });
function loadDialog() {
	const DOMBODY = document.querySelector('body');

	const dialog = document.createElement('dialog');
	dialog.setAttribute('id', 'dialog');
	DOMBODY.appendChild(dialog);

	const form = document.createElement('form');
	form.setAttribute('method', 'dialog');
	dialog.appendChild(form);

	const div = document.createElement('div');
	div.classList.add('dialog-div');
	form.appendChild(div);

	const label1 = document.createElement('label');
	label1.setAttribute('for', 'title-input');
	label1.innerText = 'Title:';
	div.appendChild(label1);

	const input1 = document.createElement('input');
	input1.setAttribute('id', 'title-input');
	input1.setAttribute('name', 'title-input');
	input1.setAttribute('type', 'text');
	input1.setAttribute('required', 'required');
	label1.appendChild(input1);

	const label2 = document.createElement('label');
	label2.setAttribute('for', 'date-input');
	label2.innerText = 'Due date:';
	div.appendChild(label2);

	const input2 = document.createElement('input');
	input2.setAttribute('id', 'date-input');
	input2.setAttribute('name', 'date-input');
	input2.setAttribute('type', 'date');
	input2.setAttribute('required', 'required');
	label2.appendChild(input2);

	const label3 = document.createElement('label');
	label3.setAttribute('for', 'priority-input');
	label3.innerText = 'Priority:';
	div.appendChild(label3);

	const input3 = document.createElement('select');
	input3.setAttribute('id', 'priority-input');
	input3.setAttribute('name', 'priority-input');
	input3.setAttribute('type', 'text');
	input3.setAttribute('required', 'required');
	label3.appendChild(input3);

	const option1 = document.createElement('option');
	option1.setAttribute('value', 'Low');
	option1.innerText = 'Low';
	input3.appendChild(option1);
	const option2 = document.createElement('option');
	option2.setAttribute('value', 'Medium');
	option2.setAttribute('selected', 'selected');
	option2.innerText = 'Medium';
	input3.appendChild(option2);
	const option3 = document.createElement('option');
	option3.setAttribute('value', 'High');
	option3.innerText = 'High';
	input3.appendChild(option3);

	const label4 = document.createElement('label');
	label4.setAttribute('for', 'description-input');
	label4.innerText = 'Description:';
	div.appendChild(label4);

	const input4 = document.createElement('input');
	input4.setAttribute('id', 'description-input');
	input4.setAttribute('name', 'description-input');
	input4.setAttribute('type', 'text');
	input4.setAttribute('required', 'required');
	label4.appendChild(input4);

	const p = document.createElement('p');
	form.appendChild(p);

	const cancelBtn = document.createElement('input');
	cancelBtn.setAttribute('type', 'submit');
	cancelBtn.setAttribute('id', 'close-button');
	cancelBtn.setAttribute('value', 'Close');
	cancelBtn.setAttribute('formnovalidate', 'formnovalidate');
	p.appendChild(cancelBtn);

	const submitBtn = document.createElement('input');
	submitBtn.setAttribute('type', 'submit');
	submitBtn.setAttribute('id', 'submit-button');
	submitBtn.setAttribute('value', 'Submit');
	p.appendChild(submitBtn);
}


/***/ }),

/***/ "./src/DOMpageManagement.js":
/*!**********************************!*\
  !*** ./src/DOMpageManagement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deletePageElements: () => (/* binding */ deletePageElements),
/* harmony export */   loadPageElements: () => (/* binding */ loadPageElements)
/* harmony export */ });
/* harmony import */ var _DOMpopulateProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMpopulateProject */ "./src/DOMpopulateProject.js");
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectCreator */ "./src/projectCreator.js");
/* harmony import */ var _DOMloadDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMloadDialog */ "./src/DOMloadDialog.js");






function loadPageElements(storage) {
	const DOMBODY = document.querySelector('body');

	const header = document.createElement('header');
	header.classList.add('page-header');
	DOMBODY.appendChild(header);

	const addCollectionButton = document.createElement('button');
	addCollectionButton.classList.add('add-collection-button');
	addCollectionButton.addEventListener('click', () => {
		const titleInput = prompt('What do you want to name the new collection?');
		let newProject = (0,_projectCreator__WEBPACK_IMPORTED_MODULE_1__["default"])(titleInput);
		storage.push(newProject);
		deletePageElements();
		loadPageElements(storage);
	});
	DOMBODY.appendChild(addCollectionButton);

	let objectIndex = 0;
	storage.forEach((object) => {
		storage;
		const currentIndex = objectIndex;

		(0,_DOMpopulateProject__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

		const deleteProjectButtons = document.querySelectorAll(
			'.delete-collection-button'
		);
		const currentButton = deleteProjectButtons[currentIndex];
		currentButton.addEventListener('click', () => {
			if (
				window.confirm('Are you sure you want to delete the whole project?')
			) {
				storage.splice(currentIndex, 1);
				deletePageElements();
				loadPageElements(storage);
			}
		});
		(0,_DOMloadDialog__WEBPACK_IMPORTED_MODULE_2__["default"])();

		objectIndex++;
	});
}

function deletePageElements() {
	const DOMBODY = document.querySelector('body');
	while (DOMBODY.firstChild) {
		DOMBODY.removeChild(DOMBODY.lastChild);
	}
}


/***/ }),

/***/ "./src/DOMpopulateProject.js":
/*!***********************************!*\
  !*** ./src/DOMpopulateProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateProject)
/* harmony export */ });
/* harmony import */ var _expand_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expand.svg */ "./src/expand.svg");
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.svg */ "./src/edit.svg");
/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.svg */ "./src/delete.svg");
/* harmony import */ var _up_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./up.svg */ "./src/up.svg");
/* harmony import */ var _DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMpageManagement */ "./src/DOMpageManagement.js");
/* harmony import */ var _todo_logic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-logic.js */ "./src/todo-logic.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.js */ "./src/index.js");







// import { addProject, addTodo } from './addProject-and-todo.js';

function populateProject(object) {
	const arrayOfObject = Object.values(object);

	const DOMBODY = document.querySelector('body');

	const mainCard = document.createElement('div');
	mainCard.classList.add('main-card');

	const mainTitle = document.createElement('div');
	mainTitle.classList.add('main-title');
	mainTitle.innerText = arrayOfObject[0];
	mainCard.appendChild(mainTitle);

	const mainButtonContainer = document.createElement('div');
	mainButtonContainer.classList.add('main-button-container');

	const addItemButton = document.createElement('button');
	addItemButton.classList.add('add-item-button');
	addItemButton.addEventListener('click', () => {
		const dialog = document.getElementById('dialog');
		const submitBtn = document.getElementById('submit-button');
		dialog.showModal();

		submitBtn.addEventListener('click', (event) => {
			event.preventDefault();
			const titleInput = document.getElementById('title-input').value;
			const dateInput = document.getElementById('date-input').value;
			const priorityInput = document.getElementById('priority-input').value;
			const descriptionInput =
				document.getElementById('description-input').value;
			let newTodo = (0,_todo_logic_js__WEBPACK_IMPORTED_MODULE_5__.createItem)(
				titleInput,
				dateInput,
				priorityInput,
				descriptionInput
			);
			object.todos.push(newTodo);
			(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.deletePageElements)();
			(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.loadPageElements)(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
			dialog.close();
		});
	});
	mainButtonContainer.appendChild(addItemButton);

	const deleteMainCard = document.createElement('button');
	deleteMainCard.classList.add('delete-collection-button');
	mainButtonContainer.appendChild(deleteMainCard);

	mainCard.appendChild(mainButtonContainer);

	DOMBODY.appendChild(mainCard);

	const subObjects = arrayOfObject[1];

	let subObjectIndex = 0;
	subObjects.forEach((subObject) => {
		const indexOfSubobject = subObjectIndex;
		const arrayOfSubObject = Object.values(subObject);

		const subCard = document.createElement('div');
		subCard.classList.add('sub-card');

		const subContainer = document.createElement('div');
		subContainer.classList.add('sub-container');

		const subCheckbox = document.createElement('input');
		subCheckbox.setAttribute('type', 'checkbox');
		subCheckbox.setAttribute('name', 'checkbox');
		subCheckbox.classList.add('checkbox');
		subCheckbox.value = arrayOfSubObject[0];
		subCheckbox.addEventListener('click', () => {
			if (object.todos[indexOfSubobject].completed === true) {
				object.todos[indexOfSubobject].completed = false;
			} else {
				object.todos[indexOfSubobject].completed = true;
			}
		});
		if (object.todos[indexOfSubobject].completed === false) {
			subCheckbox.checked = false;
		} else {
			subCheckbox.checked = true;
		}
		subContainer.appendChild(subCheckbox);

		const subTitle = document.createElement('p');
		subTitle.classList.add('sub-title');
		subTitle.innerText = arrayOfSubObject[1];
		subContainer.appendChild(subTitle);

		subCard.appendChild(subContainer);

		const subDate = document.createElement('p');
		subDate.classList.add('sub-date');
		subDate.innerText = arrayOfSubObject[2];
		subCard.appendChild(subDate);

		const subButtonContainer = document.createElement('div');
		subButtonContainer.classList.add('sub-button-container');

		const subPrio = arrayOfSubObject[3];
		if (subPrio === 'Low') {
			subCard.setAttribute('style', 'background: antiquewhite');
		} else if (subPrio === 'Medium') {
			subCard.setAttribute('style', 'background: silver');
		} else {
			subCard.setAttribute('style', 'background: gray');
		}

		const subButton1 = document.createElement('button');
		subButton1.classList.add('sub-button');
		const icon1 = new Image();
		icon1.src = _expand_svg__WEBPACK_IMPORTED_MODULE_0__;
		icon1.classList.add('expand-button');
		subButton1.appendChild(icon1);
		subButton1.addEventListener('click', () => {
			subButton1.disabled = true;

			subCard.setAttribute(
				'style',
				'grid-auto-flow: row; background: lightblue'
			);

			subCard.lastChild.remove;
			subCard.lastChild.remove;

			const subDescription = document.createElement('p');
			subDescription.setAttribute('style', 'font-style: italic; padding: 20px');
			subDescription.innerText = arrayOfSubObject[4];
			subCard.appendChild(subDescription);

			const subPriority = document.createElement('p');
			subPriority.innerText = `Priority: ${arrayOfSubObject[3]}`;
			subPriority.setAttribute(
				'style',
				'width: 100%; display: grid; justify-items: center'
			);
			subCard.appendChild(subPriority);

			subCard.appendChild(subDate);

			subButtonContainer.setAttribute('style', 'justify-content: center');
			const closeButton = document.createElement('button');
			closeButton.classList.add('sub-button');
			const closeIcon = new Image();
			closeIcon.src = _up_svg__WEBPACK_IMPORTED_MODULE_3__;
			closeButton.appendChild(closeIcon);
			subButtonContainer.appendChild(closeButton);
			subCard.appendChild(subButtonContainer);

			closeButton.addEventListener('click', () => {
				subButton1.disabled = false;
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.deletePageElements)();
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.loadPageElements)(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
			});
		});
		subButtonContainer.appendChild(subButton1);

		const subButton2 = document.createElement('button');
		subButton2.classList.add('sub-button');
		const icon2 = new Image();
		icon2.src = _edit_svg__WEBPACK_IMPORTED_MODULE_1__;
		icon2.classList.add('edit-button');
		subButton2.appendChild(icon2);
		subButton2.addEventListener('click', () => {
			console.log('under development');
			const dialog = document.getElementById('dialog');
			const submitBtn = document.getElementById('submit-button');

			dialog.showModal();

			document.getElementById('title-input').value = subObject.title;
			document.getElementById('date-input').value = subObject.dueDate;
			document.getElementById('priority-input').value = subObject.priority;
			document.getElementById('description-input').value =
				subObject.description;

			submitBtn.addEventListener('click', (event) => {
				event.preventDefault();

				const titleInput = document.getElementById('title-input').value;
				const dateInput = document.getElementById('date-input').value;
				const priorityInput = document.getElementById('priority-input').value;
				const descriptionInput =
					document.getElementById('description-input').value;

				// let changedTodo = createItem(
				// 	titleInput,
				// 	dateInput,
				// 	priorityInput,
				// 	descriptionInput
				// );
				// object.todos.push(changedTodo);
				subObject.title = titleInput;
				subObject.dueDate = dateInput;
				subObject.priority = priorityInput;
				subObject.description = descriptionInput;
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.deletePageElements)();
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.loadPageElements)(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
				dialog.close();
			});
		});
		subButtonContainer.appendChild(subButton2);

		const subButton3 = document.createElement('button');
		subButton3.classList.add('sub-button');
		const icon3 = new Image();
		icon3.src = _delete_svg__WEBPACK_IMPORTED_MODULE_2__;
		icon3.classList.add('delete-button');
		subButton3.appendChild(icon3);
		subButton3.addEventListener('click', () => {
			if (window.confirm('Are you sure you want to delete this item?')) {
				object.todos.splice(indexOfSubobject, 1);
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.deletePageElements)();
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.loadPageElements)(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
			}
		});
		subButtonContainer.appendChild(subButton3);

		subCard.appendChild(subButtonContainer);
		mainCard.appendChild(subCard);

		subObjectIndex++;
	});
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-logic */ "./src/todo-logic.js");
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectCreator */ "./src/projectCreator.js");
/* harmony import */ var _DOMpageManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMpageManagement */ "./src/DOMpageManagement.js");




let projects = [];

const defaultProject = (0,_projectCreator__WEBPACK_IMPORTED_MODULE_1__["default"])('Default Project');

const task1 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('task1', '2023-12-24', 'Low', 'dddddddddddddd');
const task2 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('task2', '2024-01-20', 'Medium', 'eeeeeeeeeee');
const task3 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('task3', '2025-11-10', 'High', 'bbbbbbbbbbb');
defaultProject.todos.push(task1, task2, task3);
console.table(defaultProject);
projects.push(defaultProject);

const ts = (0,_projectCreator__WEBPACK_IMPORTED_MODULE_1__["default"])('ts');
const t1 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('t1', '2021-02-03', 'Low', 'ddsdcsdfae');
ts.todos.push(t1);
projects.push(ts);
console.log(projects);

(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_2__.loadPageElements)(projects);

// deleteItem(defaultProject.todos, task3);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/projectCreator.js":
/*!*******************************!*\
  !*** ./src/projectCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCreator)
/* harmony export */ });
function projectCreator(name) {
	let todos = [];

	return { name, todos };
}


/***/ }),

/***/ "./src/todo-logic.js":
/*!***************************!*\
  !*** ./src/todo-logic.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createItem: () => (/* binding */ createItem),
/* harmony export */   deleteItem: () => (/* binding */ deleteItem)
/* harmony export */ });


function createItem(title, dueDate, priority, description) {
	const completed = false;

	return { completed, title, dueDate, priority, description };
}

function deleteItem(storage, item) {
	const index = storage.indexOf(item);
	storage.splice(index, 1);
}


/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b93eba7df9af3a4440c8.svg";

/***/ }),

/***/ "./src/edit.svg":
/*!**********************!*\
  !*** ./src/edit.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c1d0dcf9918d4367d56.svg";

/***/ }),

/***/ "./src/expand.svg":
/*!************************!*\
  !*** ./src/expand.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "392ff9915c1a17927ab4.svg";

/***/ }),

/***/ "./src/up.svg":
/*!********************!*\
  !*** ./src/up.svg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "060183b3b894eedce368.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGbUQ7QUFDTDtBQUNMOztBQUVPOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwrREFBZTs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsMERBQVU7O0FBRVo7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRzQztBQUNKO0FBQ0k7QUFDTDtBQUMwQztBQUM5QjtBQUNYO0FBQ2xDLFlBQVksc0JBQXNCOztBQUVuQjtBQUNmOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxzRUFBa0I7QUFDckIsR0FBRyxvRUFBZ0IsQ0FBQyxpREFBUTtBQUM1QjtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdDQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLG9CQUFvQjtBQUM1RDtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQ0FBUztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0VBQWtCO0FBQ3RCLElBQUksb0VBQWdCLENBQUMsaURBQVE7QUFDN0IsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBa0I7QUFDdEIsSUFBSSxvRUFBZ0IsQ0FBQyxpREFBUTtBQUM3QjtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3Q0FBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBa0I7QUFDdEIsSUFBSSxvRUFBZ0IsQ0FBQyxpREFBUTtBQUM3QjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TzBDO0FBQ0k7QUFDUzs7QUFFdkQ7O0FBRUEsdUJBQXVCLDJEQUFjOztBQUVyQyxjQUFjLHVEQUFVO0FBQ3hCLGNBQWMsdURBQVU7QUFDeEIsY0FBYyx1REFBVTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsV0FBVywyREFBYztBQUN6QixXQUFXLHVEQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQSxvRUFBZ0I7O0FBRWhCOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekJUO0FBQ2Y7O0FBRUEsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmtDOztBQUVsQztBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET01sb2FkRGlhbG9nLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTXBhZ2VNYW5hZ2VtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTXBvcHVsYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLWxvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZERpYWxvZygpIHtcblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXHRjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcblx0ZGlhbG9nLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlhbG9nJyk7XG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXHRmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2RpYWxvZycpO1xuXHRkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRpdi5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctZGl2Jyk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcblxuXHRjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRsYWJlbDEuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUtaW5wdXQnKTtcblx0bGFiZWwxLmlubmVyVGV4dCA9ICdUaXRsZTonO1xuXHRkaXYuYXBwZW5kQ2hpbGQobGFiZWwxKTtcblxuXHRjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRpbnB1dDEuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZS1pbnB1dCcpO1xuXHRpbnB1dDEuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlLWlucHV0Jyk7XG5cdGlucHV0MS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRpbnB1dDEuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRsYWJlbDEuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcblxuXHRjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRsYWJlbDIuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZS1pbnB1dCcpO1xuXHRsYWJlbDIuaW5uZXJUZXh0ID0gJ0R1ZSBkYXRlOic7XG5cdGRpdi5hcHBlbmRDaGlsZChsYWJlbDIpO1xuXG5cdGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGlucHV0Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtaW5wdXQnKTtcblx0aW5wdXQyLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlLWlucHV0Jyk7XG5cdGlucHV0Mi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuXHRpbnB1dDIuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRsYWJlbDIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcblxuXHRjb25zdCBsYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRsYWJlbDMuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktaW5wdXQnKTtcblx0bGFiZWwzLmlubmVyVGV4dCA9ICdQcmlvcml0eTonO1xuXHRkaXYuYXBwZW5kQ2hpbGQobGFiZWwzKTtcblxuXHRjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblx0aW5wdXQzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktaW5wdXQnKTtcblx0aW5wdXQzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eS1pbnB1dCcpO1xuXHRpbnB1dDMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0aW5wdXQzLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcblx0bGFiZWwzLmFwcGVuZENoaWxkKGlucHV0Myk7XG5cblx0Y29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRvcHRpb24xLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG5cdG9wdGlvbjEuaW5uZXJUZXh0ID0gJ0xvdyc7XG5cdGlucHV0My5hcHBlbmRDaGlsZChvcHRpb24xKTtcblx0Y29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRvcHRpb24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTWVkaXVtJyk7XG5cdG9wdGlvbjIuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRvcHRpb24yLmlubmVyVGV4dCA9ICdNZWRpdW0nO1xuXHRpbnB1dDMuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG5cdGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0b3B0aW9uMy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0hpZ2gnKTtcblx0b3B0aW9uMy5pbm5lclRleHQgPSAnSGlnaCc7XG5cdGlucHV0My5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuXHRjb25zdCBsYWJlbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRsYWJlbDQuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24taW5wdXQnKTtcblx0bGFiZWw0LmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjonO1xuXHRkaXYuYXBwZW5kQ2hpbGQobGFiZWw0KTtcblxuXHRjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRpbnB1dDQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbi1pbnB1dCcpO1xuXHRpbnB1dDQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uLWlucHV0Jyk7XG5cdGlucHV0NC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRpbnB1dDQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRsYWJlbDQuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcblxuXHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRmb3JtLmFwcGVuZENoaWxkKHApO1xuXG5cdGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlLWJ1dHRvbicpO1xuXHRjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdDbG9zZScpO1xuXHRjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdmb3Jtbm92YWxpZGF0ZScsICdmb3Jtbm92YWxpZGF0ZScpO1xuXHRwLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cblx0Y29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0c3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblx0c3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpO1xuXHRzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKTtcblx0cC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xufVxuIiwiaW1wb3J0IHBvcHVsYXRlUHJvamVjdCBmcm9tICcuL0RPTXBvcHVsYXRlUHJvamVjdCc7XG5pbXBvcnQgcHJvamVjdENyZWF0b3IgZnJvbSAnLi9wcm9qZWN0Q3JlYXRvcic7XG5pbXBvcnQgbG9hZERpYWxvZyBmcm9tICcuL0RPTWxvYWREaWFsb2cnO1xuXG5leHBvcnQgeyBsb2FkUGFnZUVsZW1lbnRzLCBkZWxldGVQYWdlRWxlbWVudHMgfTtcblxuZnVuY3Rpb24gbG9hZFBhZ2VFbGVtZW50cyhzdG9yYWdlKSB7XG5cdGNvbnN0IERPTUJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuXHRET01CT0RZLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cblx0Y29uc3QgYWRkQ29sbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRhZGRDb2xsZWN0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1jb2xsZWN0aW9uLWJ1dHRvbicpO1xuXHRhZGRDb2xsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGNvbnN0IHRpdGxlSW5wdXQgPSBwcm9tcHQoJ1doYXQgZG8geW91IHdhbnQgdG8gbmFtZSB0aGUgbmV3IGNvbGxlY3Rpb24/Jyk7XG5cdFx0bGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0Q3JlYXRvcih0aXRsZUlucHV0KTtcblx0XHRzdG9yYWdlLnB1c2gobmV3UHJvamVjdCk7XG5cdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0bG9hZFBhZ2VFbGVtZW50cyhzdG9yYWdlKTtcblx0fSk7XG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQoYWRkQ29sbGVjdGlvbkJ1dHRvbik7XG5cblx0bGV0IG9iamVjdEluZGV4ID0gMDtcblx0c3RvcmFnZS5mb3JFYWNoKChvYmplY3QpID0+IHtcblx0XHRzdG9yYWdlO1xuXHRcdGNvbnN0IGN1cnJlbnRJbmRleCA9IG9iamVjdEluZGV4O1xuXG5cdFx0cG9wdWxhdGVQcm9qZWN0KG9iamVjdCk7XG5cblx0XHRjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmRlbGV0ZS1jb2xsZWN0aW9uLWJ1dHRvbidcblx0XHQpO1xuXHRcdGNvbnN0IGN1cnJlbnRCdXR0b24gPSBkZWxldGVQcm9qZWN0QnV0dG9uc1tjdXJyZW50SW5kZXhdO1xuXHRcdGN1cnJlbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSB3aG9sZSBwcm9qZWN0PycpXG5cdFx0XHQpIHtcblx0XHRcdFx0c3RvcmFnZS5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcblx0XHRcdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0XHRcdGxvYWRQYWdlRWxlbWVudHMoc3RvcmFnZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bG9hZERpYWxvZygpO1xuXG5cdFx0b2JqZWN0SW5kZXgrKztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVBhZ2VFbGVtZW50cygpIHtcblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblx0d2hpbGUgKERPTUJPRFkuZmlyc3RDaGlsZCkge1xuXHRcdERPTUJPRFkucmVtb3ZlQ2hpbGQoRE9NQk9EWS5sYXN0Q2hpbGQpO1xuXHR9XG59XG4iLCJpbXBvcnQgRXhwYW5kSWNvbiBmcm9tICcuL2V4cGFuZC5zdmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4vZWRpdC5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi9kZWxldGUuc3ZnJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi91cC5zdmcnO1xuaW1wb3J0IHsgbG9hZFBhZ2VFbGVtZW50cywgZGVsZXRlUGFnZUVsZW1lbnRzIH0gZnJvbSAnLi9ET01wYWdlTWFuYWdlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi90b2RvLWxvZ2ljLmpzJztcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuL2luZGV4LmpzJztcbi8vIGltcG9ydCB7IGFkZFByb2plY3QsIGFkZFRvZG8gfSBmcm9tICcuL2FkZFByb2plY3QtYW5kLXRvZG8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3Qob2JqZWN0KSB7XG5cdGNvbnN0IGFycmF5T2ZPYmplY3QgPSBPYmplY3QudmFsdWVzKG9iamVjdCk7XG5cblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXHRjb25zdCBtYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluQ2FyZC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmQnKTtcblxuXHRjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcblx0bWFpblRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZPYmplY3RbMF07XG5cdG1haW5DYXJkLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cblx0Y29uc3QgbWFpbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tYnV0dG9uLWNvbnRhaW5lcicpO1xuXG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YWRkSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1idXR0b24nKTtcblx0YWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nJyk7XG5cdFx0Y29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idXR0b24nKTtcblx0XHRkaWFsb2cuc2hvd01vZGFsKCk7XG5cblx0XHRzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWU7XG5cdFx0XHRjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0Y29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eS1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRpb25JbnB1dCA9XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0bGV0IG5ld1RvZG8gPSBjcmVhdGVJdGVtKFxuXHRcdFx0XHR0aXRsZUlucHV0LFxuXHRcdFx0XHRkYXRlSW5wdXQsXG5cdFx0XHRcdHByaW9yaXR5SW5wdXQsXG5cdFx0XHRcdGRlc2NyaXB0aW9uSW5wdXRcblx0XHRcdCk7XG5cdFx0XHRvYmplY3QudG9kb3MucHVzaChuZXdUb2RvKTtcblx0XHRcdGRlbGV0ZVBhZ2VFbGVtZW50cygpO1xuXHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cdFx0XHRkaWFsb2cuY2xvc2UoKTtcblx0XHR9KTtcblx0fSk7XG5cdG1haW5CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkSXRlbUJ1dHRvbik7XG5cblx0Y29uc3QgZGVsZXRlTWFpbkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0ZGVsZXRlTWFpbkNhcmQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWNvbGxlY3Rpb24tYnV0dG9uJyk7XG5cdG1haW5CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlTWFpbkNhcmQpO1xuXG5cdG1haW5DYXJkLmFwcGVuZENoaWxkKG1haW5CdXR0b25Db250YWluZXIpO1xuXG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQobWFpbkNhcmQpO1xuXG5cdGNvbnN0IHN1Yk9iamVjdHMgPSBhcnJheU9mT2JqZWN0WzFdO1xuXG5cdGxldCBzdWJPYmplY3RJbmRleCA9IDA7XG5cdHN1Yk9iamVjdHMuZm9yRWFjaCgoc3ViT2JqZWN0KSA9PiB7XG5cdFx0Y29uc3QgaW5kZXhPZlN1Ym9iamVjdCA9IHN1Yk9iamVjdEluZGV4O1xuXHRcdGNvbnN0IGFycmF5T2ZTdWJPYmplY3QgPSBPYmplY3QudmFsdWVzKHN1Yk9iamVjdCk7XG5cblx0XHRjb25zdCBzdWJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQ2FyZC5jbGFzc0xpc3QuYWRkKCdzdWItY2FyZCcpO1xuXG5cdFx0Y29uc3Qgc3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250YWluZXInKTtcblxuXHRcdGNvbnN0IHN1YkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRzdWJDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblx0XHRzdWJDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2tib3gnKTtcblx0XHRzdWJDaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuXHRcdHN1YkNoZWNrYm94LnZhbHVlID0gYXJyYXlPZlN1Yk9iamVjdFswXTtcblx0XHRzdWJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmIChvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID09PSB0cnVlKSB7XG5cdFx0XHRcdG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmIChvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0c3ViQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdWJDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkNoZWNrYm94KTtcblxuXHRcdGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N1Yi10aXRsZScpO1xuXHRcdHN1YlRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZTdWJPYmplY3RbMV07XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcblxuXHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViQ29udGFpbmVyKTtcblxuXHRcdGNvbnN0IHN1YkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0c3ViRGF0ZS5jbGFzc0xpc3QuYWRkKCdzdWItZGF0ZScpO1xuXHRcdHN1YkRhdGUuaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFsyXTtcblx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRhdGUpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24tY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBzdWJQcmlvID0gYXJyYXlPZlN1Yk9iamVjdFszXTtcblx0XHRpZiAoc3ViUHJpbyA9PT0gJ0xvdycpIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGUnKTtcblx0XHR9IGVsc2UgaWYgKHN1YlByaW8gPT09ICdNZWRpdW0nKSB7XG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogc2lsdmVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBncmF5Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjEuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24xID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjEuc3JjID0gRXhwYW5kSWNvbjtcblx0XHRpY29uMS5jbGFzc0xpc3QuYWRkKCdleHBhbmQtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMS5hcHBlbmRDaGlsZChpY29uMSk7XG5cdFx0c3ViQnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHN1YkJ1dHRvbjEuZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0J3N0eWxlJyxcblx0XHRcdFx0J2dyaWQtYXV0by1mbG93OiByb3c7IGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZSdcblx0XHRcdCk7XG5cblx0XHRcdHN1YkNhcmQubGFzdENoaWxkLnJlbW92ZTtcblx0XHRcdHN1YkNhcmQubGFzdENoaWxkLnJlbW92ZTtcblxuXHRcdFx0Y29uc3Qgc3ViRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0XHRzdWJEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtc3R5bGU6IGl0YWxpYzsgcGFkZGluZzogMjBweCcpO1xuXHRcdFx0c3ViRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFs0XTtcblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViRGVzY3JpcHRpb24pO1xuXG5cdFx0XHRjb25zdCBzdWJQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdHN1YlByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eTogJHthcnJheU9mU3ViT2JqZWN0WzNdfWA7XG5cdFx0XHRzdWJQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdCdzdHlsZScsXG5cdFx0XHRcdCd3aWR0aDogMTAwJTsgZGlzcGxheTogZ3JpZDsganVzdGlmeS1pdGVtczogY2VudGVyJ1xuXHRcdFx0KTtcblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViUHJpb3JpdHkpO1xuXG5cdFx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRhdGUpO1xuXG5cdFx0XHRzdWJCdXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcicpO1xuXHRcdFx0Y29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24nKTtcblx0XHRcdGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0Y2xvc2VJY29uLnNyYyA9IENsb3NlSWNvbjtcblx0XHRcdGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cdFx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXHRcdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJCdXR0b25Db250YWluZXIpO1xuXG5cdFx0XHRjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0c3ViQnV0dG9uMS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uMSk7XG5cblx0XHRjb25zdCBzdWJCdXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMi5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0Y29uc3QgaWNvbjIgPSBuZXcgSW1hZ2UoKTtcblx0XHRpY29uMi5zcmMgPSBFZGl0SWNvbjtcblx0XHRpY29uMi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjIuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuXHRcdHN1YkJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygndW5kZXIgZGV2ZWxvcG1lbnQnKTtcblx0XHRcdGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2cnKTtcblx0XHRcdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnV0dG9uJyk7XG5cblx0XHRcdGRpYWxvZy5zaG93TW9kYWwoKTtcblxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWUgPSBzdWJPYmplY3QudGl0bGU7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlID0gc3ViT2JqZWN0LmR1ZURhdGU7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktaW5wdXQnKS52YWx1ZSA9IHN1Yk9iamVjdC5wcmlvcml0eTtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlID1cblx0XHRcdFx0c3ViT2JqZWN0LmRlc2NyaXB0aW9uO1xuXG5cdFx0XHRzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWU7XG5cdFx0XHRcdGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0JykudmFsdWU7XG5cdFx0XHRcdGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktaW5wdXQnKS52YWx1ZTtcblx0XHRcdFx0Y29uc3QgZGVzY3JpcHRpb25JbnB1dCA9XG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG5cblx0XHRcdFx0Ly8gbGV0IGNoYW5nZWRUb2RvID0gY3JlYXRlSXRlbShcblx0XHRcdFx0Ly8gXHR0aXRsZUlucHV0LFxuXHRcdFx0XHQvLyBcdGRhdGVJbnB1dCxcblx0XHRcdFx0Ly8gXHRwcmlvcml0eUlucHV0LFxuXHRcdFx0XHQvLyBcdGRlc2NyaXB0aW9uSW5wdXRcblx0XHRcdFx0Ly8gKTtcblx0XHRcdFx0Ly8gb2JqZWN0LnRvZG9zLnB1c2goY2hhbmdlZFRvZG8pO1xuXHRcdFx0XHRzdWJPYmplY3QudGl0bGUgPSB0aXRsZUlucHV0O1xuXHRcdFx0XHRzdWJPYmplY3QuZHVlRGF0ZSA9IGRhdGVJbnB1dDtcblx0XHRcdFx0c3ViT2JqZWN0LnByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dDtcblx0XHRcdFx0c3ViT2JqZWN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dDtcblx0XHRcdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0XHRcdGxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXHRcdFx0XHRkaWFsb2cuY2xvc2UoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJCdXR0b24yKTtcblxuXHRcdGNvbnN0IHN1YkJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRzdWJCdXR0b24zLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24nKTtcblx0XHRjb25zdCBpY29uMyA9IG5ldyBJbWFnZSgpO1xuXHRcdGljb24zLnNyYyA9IERlbGV0ZUljb247XG5cdFx0aWNvbjMuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjMuYXBwZW5kQ2hpbGQoaWNvbjMpO1xuXHRcdHN1YkJ1dHRvbjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpKSB7XG5cdFx0XHRcdG9iamVjdC50b2Rvcy5zcGxpY2UoaW5kZXhPZlN1Ym9iamVjdCwgMSk7XG5cdFx0XHRcdGRlbGV0ZVBhZ2VFbGVtZW50cygpO1xuXHRcdFx0XHRsb2FkUGFnZUVsZW1lbnRzKHByb2plY3RzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uMyk7XG5cblx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkJ1dHRvbkNvbnRhaW5lcik7XG5cdFx0bWFpbkNhcmQuYXBwZW5kQ2hpbGQoc3ViQ2FyZCk7XG5cblx0XHRzdWJPYmplY3RJbmRleCsrO1xuXHR9KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuL3RvZG8tbG9naWMnO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gJy4vcHJvamVjdENyZWF0b3InO1xuaW1wb3J0IHsgbG9hZFBhZ2VFbGVtZW50cyB9IGZyb20gJy4vRE9NcGFnZU1hbmFnZW1lbnQnO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0Q3JlYXRvcignRGVmYXVsdCBQcm9qZWN0Jyk7XG5cbmNvbnN0IHRhc2sxID0gY3JlYXRlSXRlbSgndGFzazEnLCAnMjAyMy0xMi0yNCcsICdMb3cnLCAnZGRkZGRkZGRkZGRkZGQnKTtcbmNvbnN0IHRhc2syID0gY3JlYXRlSXRlbSgndGFzazInLCAnMjAyNC0wMS0yMCcsICdNZWRpdW0nLCAnZWVlZWVlZWVlZWUnKTtcbmNvbnN0IHRhc2szID0gY3JlYXRlSXRlbSgndGFzazMnLCAnMjAyNS0xMS0xMCcsICdIaWdoJywgJ2JiYmJiYmJiYmJiJyk7XG5kZWZhdWx0UHJvamVjdC50b2Rvcy5wdXNoKHRhc2sxLCB0YXNrMiwgdGFzazMpO1xuY29uc29sZS50YWJsZShkZWZhdWx0UHJvamVjdCk7XG5wcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcblxuY29uc3QgdHMgPSBwcm9qZWN0Q3JlYXRvcigndHMnKTtcbmNvbnN0IHQxID0gY3JlYXRlSXRlbSgndDEnLCAnMjAyMS0wMi0wMycsICdMb3cnLCAnZGRzZGNzZGZhZScpO1xudHMudG9kb3MucHVzaCh0MSk7XG5wcm9qZWN0cy5wdXNoKHRzKTtcbmNvbnNvbGUubG9nKHByb2plY3RzKTtcblxubG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cbi8vIGRlbGV0ZUl0ZW0oZGVmYXVsdFByb2plY3QudG9kb3MsIHRhc2szKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRvcihuYW1lKSB7XG5cdGxldCB0b2RvcyA9IFtdO1xuXG5cdHJldHVybiB7IG5hbWUsIHRvZG9zIH07XG59XG4iLCJleHBvcnQgeyBjcmVhdGVJdGVtLCBkZWxldGVJdGVtIH07XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0odGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xuXHRjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4geyBjb21wbGV0ZWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24gfTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbShzdG9yYWdlLCBpdGVtKSB7XG5cdGNvbnN0IGluZGV4ID0gc3RvcmFnZS5pbmRleE9mKGl0ZW0pO1xuXHRzdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=