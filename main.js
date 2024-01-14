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
			const descriptionInputInput =
				document.getElementById('description-input').value;
			let newTodo = (0,_todo_logic_js__WEBPACK_IMPORTED_MODULE_5__.createItem)(
				titleInput,
				dateInput,
				priorityInput,
				descriptionInputInput
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
			console.log('tba');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGbUQ7QUFDTDtBQUNMOztBQUVPOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwrREFBZTs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsMERBQVU7O0FBRVo7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRzQztBQUNKO0FBQ0k7QUFDTDtBQUMwQztBQUM5QjtBQUNYO0FBQ2xDLFlBQVksc0JBQXNCOztBQUVuQjtBQUNmOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxzRUFBa0I7QUFDckIsR0FBRyxvRUFBZ0IsQ0FBQyxpREFBUTtBQUM1QjtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdDQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLG9CQUFvQjtBQUM1RDtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQ0FBUztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0VBQWtCO0FBQ3RCLElBQUksb0VBQWdCLENBQUMsaURBQVE7QUFDN0IsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0NBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQWtCO0FBQ3RCLElBQUksb0VBQWdCLENBQUMsaURBQVE7QUFDN0I7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck0wQztBQUNJO0FBQ1M7O0FBRXZEOztBQUVBLHVCQUF1QiwyREFBYzs7QUFFckMsY0FBYyx1REFBVTtBQUN4QixjQUFjLHVEQUFVO0FBQ3hCLGNBQWMsdURBQVU7QUFDeEI7QUFDQTtBQUNBOztBQUVBLFdBQVcsMkRBQWM7QUFDekIsV0FBVyx1REFBVTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUEsb0VBQWdCOztBQUVoQjs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pCVDtBQUNmOztBQUVBLFVBQVU7QUFDVjs7Ozs7Ozs7Ozs7Ozs7OztBQ0prQzs7QUFFbEM7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NbG9hZERpYWxvZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET01wYWdlTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ET01wb3B1bGF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kby1sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWREaWFsb2coKSB7XG5cdGNvbnN0IERPTUJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cblx0Y29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG5cdGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpYWxvZycpO1xuXHRET01CT0RZLmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdkaWFsb2cnKTtcblx0ZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkaXYuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWRpdicpO1xuXHRmb3JtLmFwcGVuZENoaWxkKGRpdik7XG5cblx0Y29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0bGFiZWwxLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlLWlucHV0Jyk7XG5cdGxhYmVsMS5pbm5lclRleHQgPSAnVGl0bGU6Jztcblx0ZGl2LmFwcGVuZENoaWxkKGxhYmVsMSk7XG5cblx0Y29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0aW5wdXQxLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUtaW5wdXQnKTtcblx0aW5wdXQxLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZS1pbnB1dCcpO1xuXHRpbnB1dDEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0aW5wdXQxLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcblx0bGFiZWwxLmFwcGVuZENoaWxkKGlucHV0MSk7XG5cblx0Y29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0bGFiZWwyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUtaW5wdXQnKTtcblx0bGFiZWwyLmlubmVyVGV4dCA9ICdEdWUgZGF0ZTonO1xuXHRkaXYuYXBwZW5kQ2hpbGQobGFiZWwyKTtcblxuXHRjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRpbnB1dDIuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLWlucHV0Jyk7XG5cdGlucHV0Mi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZS1pbnB1dCcpO1xuXHRpbnB1dDIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblx0aW5wdXQyLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcblx0bGFiZWwyLmFwcGVuZENoaWxkKGlucHV0Mik7XG5cblx0Y29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0bGFiZWwzLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LWlucHV0Jyk7XG5cdGxhYmVsMy5pbm5lclRleHQgPSAnUHJpb3JpdHk6Jztcblx0ZGl2LmFwcGVuZENoaWxkKGxhYmVsMyk7XG5cblx0Y29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cdGlucHV0My5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWlucHV0Jyk7XG5cdGlucHV0My5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHktaW5wdXQnKTtcblx0aW5wdXQzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdGlucHV0My5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cdGxhYmVsMy5hcHBlbmRDaGlsZChpbnB1dDMpO1xuXG5cdGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0b3B0aW9uMS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0xvdycpO1xuXHRvcHRpb24xLmlubmVyVGV4dCA9ICdMb3cnO1xuXHRpbnB1dDMuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG5cdGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0b3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ01lZGl1bScpO1xuXHRvcHRpb24yLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcblx0b3B0aW9uMi5pbm5lclRleHQgPSAnTWVkaXVtJztcblx0aW5wdXQzLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuXHRjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbjMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG5cdG9wdGlvbjMuaW5uZXJUZXh0ID0gJ0hpZ2gnO1xuXHRpbnB1dDMuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cblx0Y29uc3QgbGFiZWw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0bGFiZWw0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uLWlucHV0Jyk7XG5cdGxhYmVsNC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246Jztcblx0ZGl2LmFwcGVuZENoaWxkKGxhYmVsNCk7XG5cblx0Y29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0aW5wdXQ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24taW5wdXQnKTtcblx0aW5wdXQ0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbi1pbnB1dCcpO1xuXHRpbnB1dDQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0aW5wdXQ0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcblx0bGFiZWw0LmFwcGVuZENoaWxkKGlucHV0NCk7XG5cblx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0Zm9ybS5hcHBlbmRDaGlsZChwKTtcblxuXHRjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS1idXR0b24nKTtcblx0Y2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ2xvc2UnKTtcblx0Y2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnZm9ybW5vdmFsaWRhdGUnLCAnZm9ybW5vdmFsaWRhdGUnKTtcblx0cC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG5cdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1idXR0b24nKTtcblx0c3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU3VibWl0Jyk7XG5cdHAuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbn1cbiIsImltcG9ydCBwb3B1bGF0ZVByb2plY3QgZnJvbSAnLi9ET01wb3B1bGF0ZVByb2plY3QnO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gJy4vcHJvamVjdENyZWF0b3InO1xuaW1wb3J0IGxvYWREaWFsb2cgZnJvbSAnLi9ET01sb2FkRGlhbG9nJztcblxuZXhwb3J0IHsgbG9hZFBhZ2VFbGVtZW50cywgZGVsZXRlUGFnZUVsZW1lbnRzIH07XG5cbmZ1bmN0aW9uIGxvYWRQYWdlRWxlbWVudHMoc3RvcmFnZSkge1xuXHRjb25zdCBET01CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXInKTtcblx0RE9NQk9EWS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cdGNvbnN0IGFkZENvbGxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YWRkQ29sbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtY29sbGVjdGlvbi1idXR0b24nKTtcblx0YWRkQ29sbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRjb25zdCB0aXRsZUlucHV0ID0gcHJvbXB0KCdXaGF0IGRvIHlvdSB3YW50IHRvIG5hbWUgdGhlIG5ldyBjb2xsZWN0aW9uPycpO1xuXHRcdGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdENyZWF0b3IodGl0bGVJbnB1dCk7XG5cdFx0c3RvcmFnZS5wdXNoKG5ld1Byb2plY3QpO1xuXHRcdGRlbGV0ZVBhZ2VFbGVtZW50cygpO1xuXHRcdGxvYWRQYWdlRWxlbWVudHMoc3RvcmFnZSk7XG5cdH0pO1xuXHRET01CT0RZLmFwcGVuZENoaWxkKGFkZENvbGxlY3Rpb25CdXR0b24pO1xuXG5cdGxldCBvYmplY3RJbmRleCA9IDA7XG5cdHN0b3JhZ2UuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG5cdFx0c3RvcmFnZTtcblx0XHRjb25zdCBjdXJyZW50SW5kZXggPSBvYmplY3RJbmRleDtcblxuXHRcdHBvcHVsYXRlUHJvamVjdChvYmplY3QpO1xuXG5cdFx0Y29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5kZWxldGUtY29sbGVjdGlvbi1idXR0b24nXG5cdFx0KTtcblx0XHRjb25zdCBjdXJyZW50QnV0dG9uID0gZGVsZXRlUHJvamVjdEJ1dHRvbnNbY3VycmVudEluZGV4XTtcblx0XHRjdXJyZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgd2hvbGUgcHJvamVjdD8nKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHN0b3JhZ2Uuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XG5cdFx0XHRcdGRlbGV0ZVBhZ2VFbGVtZW50cygpO1xuXHRcdFx0XHRsb2FkUGFnZUVsZW1lbnRzKHN0b3JhZ2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGxvYWREaWFsb2coKTtcblxuXHRcdG9iamVjdEluZGV4Kys7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQYWdlRWxlbWVudHMoKSB7XG5cdGNvbnN0IERPTUJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdHdoaWxlIChET01CT0RZLmZpcnN0Q2hpbGQpIHtcblx0XHRET01CT0RZLnJlbW92ZUNoaWxkKERPTUJPRFkubGFzdENoaWxkKTtcblx0fVxufVxuIiwiaW1wb3J0IEV4cGFuZEljb24gZnJvbSAnLi9leHBhbmQuc3ZnJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuL2VkaXQuc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4vZGVsZXRlLnN2Zyc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4vdXAuc3ZnJztcbmltcG9ydCB7IGxvYWRQYWdlRWxlbWVudHMsIGRlbGV0ZVBhZ2VFbGVtZW50cyB9IGZyb20gJy4vRE9NcGFnZU1hbmFnZW1lbnQnO1xuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gJy4vdG9kby1sb2dpYy5qcyc7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9pbmRleC5qcyc7XG4vLyBpbXBvcnQgeyBhZGRQcm9qZWN0LCBhZGRUb2RvIH0gZnJvbSAnLi9hZGRQcm9qZWN0LWFuZC10b2RvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0KG9iamVjdCkge1xuXHRjb25zdCBhcnJheU9mT2JqZWN0ID0gT2JqZWN0LnZhbHVlcyhvYmplY3QpO1xuXG5cdGNvbnN0IERPTUJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cblx0Y29uc3QgbWFpbkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFpbkNhcmQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jYXJkJyk7XG5cblx0Y29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluLXRpdGxlJyk7XG5cdG1haW5UaXRsZS5pbm5lclRleHQgPSBhcnJheU9mT2JqZWN0WzBdO1xuXHRtYWluQ2FyZC5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuXG5cdGNvbnN0IG1haW5CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFpbkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWJ1dHRvbi1jb250YWluZXInKTtcblxuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGFkZEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWl0ZW0tYnV0dG9uJyk7XG5cdGFkZEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Y29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZycpO1xuXHRcdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnV0dG9uJyk7XG5cdFx0ZGlhbG9nLnNob3dNb2RhbCgpO1xuXG5cdFx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaW5wdXQnKS52YWx1ZTtcblx0XHRcdGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktaW5wdXQnKS52YWx1ZTtcblx0XHRcdGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRJbnB1dCA9XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0bGV0IG5ld1RvZG8gPSBjcmVhdGVJdGVtKFxuXHRcdFx0XHR0aXRsZUlucHV0LFxuXHRcdFx0XHRkYXRlSW5wdXQsXG5cdFx0XHRcdHByaW9yaXR5SW5wdXQsXG5cdFx0XHRcdGRlc2NyaXB0aW9uSW5wdXRJbnB1dFxuXHRcdFx0KTtcblx0XHRcdG9iamVjdC50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuXHRcdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0XHRsb2FkUGFnZUVsZW1lbnRzKHByb2plY3RzKTtcblx0XHRcdGRpYWxvZy5jbG9zZSgpO1xuXHRcdH0pO1xuXHR9KTtcblx0bWFpbkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRJdGVtQnV0dG9uKTtcblxuXHRjb25zdCBkZWxldGVNYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRkZWxldGVNYWluQ2FyZC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtY29sbGVjdGlvbi1idXR0b24nKTtcblx0bWFpbkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVNYWluQ2FyZCk7XG5cblx0bWFpbkNhcmQuYXBwZW5kQ2hpbGQobWFpbkJ1dHRvbkNvbnRhaW5lcik7XG5cblx0RE9NQk9EWS5hcHBlbmRDaGlsZChtYWluQ2FyZCk7XG5cblx0Y29uc3Qgc3ViT2JqZWN0cyA9IGFycmF5T2ZPYmplY3RbMV07XG5cblx0bGV0IHN1Yk9iamVjdEluZGV4ID0gMDtcblx0c3ViT2JqZWN0cy5mb3JFYWNoKChzdWJPYmplY3QpID0+IHtcblx0XHRjb25zdCBpbmRleE9mU3Vib2JqZWN0ID0gc3ViT2JqZWN0SW5kZXg7XG5cdFx0Y29uc3QgYXJyYXlPZlN1Yk9iamVjdCA9IE9iamVjdC52YWx1ZXMoc3ViT2JqZWN0KTtcblxuXHRcdGNvbnN0IHN1YkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRzdWJDYXJkLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jYXJkJyk7XG5cblx0XHRjb25zdCBzdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRzdWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRhaW5lcicpO1xuXG5cdFx0Y29uc3Qgc3ViQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdHN1YkNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXHRcdHN1YkNoZWNrYm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjaGVja2JveCcpO1xuXHRcdHN1YkNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG5cdFx0c3ViQ2hlY2tib3gudmFsdWUgPSBhcnJheU9mU3ViT2JqZWN0WzBdO1xuXHRcdHN1YkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPT09IHRydWUpIHtcblx0XHRcdFx0b2JqZWN0LnRvZG9zW2luZGV4T2ZTdWJvYmplY3RdLmNvbXBsZXRlZCA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqZWN0LnRvZG9zW2luZGV4T2ZTdWJvYmplY3RdLmNvbXBsZXRlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aWYgKG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRzdWJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YkNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQ2hlY2tib3gpO1xuXG5cdFx0Y29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0c3ViVGl0bGUuY2xhc3NMaXN0LmFkZCgnc3ViLXRpdGxlJyk7XG5cdFx0c3ViVGl0bGUuaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFsxXTtcblx0XHRzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuXG5cdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpO1xuXG5cdFx0Y29uc3Qgc3ViRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRzdWJEYXRlLmNsYXNzTGlzdC5hZGQoJ3N1Yi1kYXRlJyk7XG5cdFx0c3ViRGF0ZS5pbm5lclRleHQgPSBhcnJheU9mU3ViT2JqZWN0WzJdO1xuXHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViRGF0ZSk7XG5cblx0XHRjb25zdCBzdWJCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbi1jb250YWluZXInKTtcblxuXHRcdGNvbnN0IHN1YlByaW8gPSBhcnJheU9mU3ViT2JqZWN0WzNdO1xuXHRcdGlmIChzdWJQcmlvID09PSAnTG93Jykge1xuXHRcdFx0c3ViQ2FyZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6IGFudGlxdWV3aGl0ZScpO1xuXHRcdH0gZWxzZSBpZiAoc3ViUHJpbyA9PT0gJ01lZGl1bScpIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBzaWx2ZXInKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3ViQ2FyZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6IGdyYXknKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdWJCdXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMS5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0Y29uc3QgaWNvbjEgPSBuZXcgSW1hZ2UoKTtcblx0XHRpY29uMS5zcmMgPSBFeHBhbmRJY29uO1xuXHRcdGljb24xLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1idXR0b24nKTtcblx0XHRzdWJCdXR0b24xLmFwcGVuZENoaWxkKGljb24xKTtcblx0XHRzdWJCdXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0c3ViQnV0dG9uMS5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHQnc3R5bGUnLFxuXHRcdFx0XHQnZ3JpZC1hdXRvLWZsb3c6IHJvdzsgYmFja2dyb3VuZDogbGlnaHRibHVlJ1xuXHRcdFx0KTtcblxuXHRcdFx0c3ViQ2FyZC5sYXN0Q2hpbGQucmVtb3ZlO1xuXHRcdFx0c3ViQ2FyZC5sYXN0Q2hpbGQucmVtb3ZlO1xuXG5cdFx0XHRjb25zdCBzdWJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdHN1YkRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZm9udC1zdHlsZTogaXRhbGljOyBwYWRkaW5nOiAyMHB4Jyk7XG5cdFx0XHRzdWJEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBhcnJheU9mU3ViT2JqZWN0WzRdO1xuXHRcdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJEZXNjcmlwdGlvbik7XG5cblx0XHRcdGNvbnN0IHN1YlByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdFx0c3ViUHJpb3JpdHkuaW5uZXJUZXh0ID0gYFByaW9yaXR5OiAke2FycmF5T2ZTdWJPYmplY3RbM119YDtcblx0XHRcdHN1YlByaW9yaXR5LnNldEF0dHJpYnV0ZShcblx0XHRcdFx0J3N0eWxlJyxcblx0XHRcdFx0J3dpZHRoOiAxMDAlOyBkaXNwbGF5OiBncmlkOyBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXInXG5cdFx0XHQpO1xuXHRcdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJQcmlvcml0eSk7XG5cblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViRGF0ZSk7XG5cblx0XHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2p1c3RpZnktY29udGVudDogY2VudGVyJyk7XG5cdFx0XHRjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0Y2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdFx0Y29uc3QgY2xvc2VJY29uID0gbmV3IEltYWdlKCk7XG5cdFx0XHRjbG9zZUljb24uc3JjID0gQ2xvc2VJY29uO1xuXHRcdFx0Y2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblx0XHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cdFx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkJ1dHRvbkNvbnRhaW5lcik7XG5cblx0XHRcdGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRzdWJCdXR0b24xLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdGRlbGV0ZVBhZ2VFbGVtZW50cygpO1xuXHRcdFx0XHRsb2FkUGFnZUVsZW1lbnRzKHByb2plY3RzKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJCdXR0b24xKTtcblxuXHRcdGNvbnN0IHN1YkJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRzdWJCdXR0b24yLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24nKTtcblx0XHRjb25zdCBpY29uMiA9IG5ldyBJbWFnZSgpO1xuXHRcdGljb24yLnNyYyA9IEVkaXRJY29uO1xuXHRcdGljb24yLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMi5hcHBlbmRDaGlsZChpY29uMik7XG5cdFx0c3ViQnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCd0YmEnKTtcblx0XHR9KTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uMik7XG5cblx0XHRjb25zdCBzdWJCdXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMy5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0Y29uc3QgaWNvbjMgPSBuZXcgSW1hZ2UoKTtcblx0XHRpY29uMy5zcmMgPSBEZWxldGVJY29uO1xuXHRcdGljb24zLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcblx0XHRzdWJCdXR0b24zLmFwcGVuZENoaWxkKGljb24zKTtcblx0XHRzdWJCdXR0b24zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSkge1xuXHRcdFx0XHRvYmplY3QudG9kb3Muc3BsaWNlKGluZGV4T2ZTdWJvYmplY3QsIDEpO1xuXHRcdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ1dHRvbjMpO1xuXG5cdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJCdXR0b25Db250YWluZXIpO1xuXHRcdG1haW5DYXJkLmFwcGVuZENoaWxkKHN1YkNhcmQpO1xuXG5cdFx0c3ViT2JqZWN0SW5kZXgrKztcblx0fSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi90b2RvLWxvZ2ljJztcbmltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tICcuL3Byb2plY3RDcmVhdG9yJztcbmltcG9ydCB7IGxvYWRQYWdlRWxlbWVudHMgfSBmcm9tICcuL0RPTXBhZ2VNYW5hZ2VtZW50JztcblxubGV0IHByb2plY3RzID0gW107XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdENyZWF0b3IoJ0RlZmF1bHQgUHJvamVjdCcpO1xuXG5jb25zdCB0YXNrMSA9IGNyZWF0ZUl0ZW0oJ3Rhc2sxJywgJzIwMjMtMTItMjQnLCAnTG93JywgJ2RkZGRkZGRkZGRkZGRkJyk7XG5jb25zdCB0YXNrMiA9IGNyZWF0ZUl0ZW0oJ3Rhc2syJywgJzIwMjQtMDEtMjAnLCAnTWVkaXVtJywgJ2VlZWVlZWVlZWVlJyk7XG5jb25zdCB0YXNrMyA9IGNyZWF0ZUl0ZW0oJ3Rhc2szJywgJzIwMjUtMTEtMTAnLCAnSGlnaCcsICdiYmJiYmJiYmJiYicpO1xuZGVmYXVsdFByb2plY3QudG9kb3MucHVzaCh0YXNrMSwgdGFzazIsIHRhc2szKTtcbmNvbnNvbGUudGFibGUoZGVmYXVsdFByb2plY3QpO1xucHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnN0IHRzID0gcHJvamVjdENyZWF0b3IoJ3RzJyk7XG5jb25zdCB0MSA9IGNyZWF0ZUl0ZW0oJ3QxJywgJzIwMjEtMDItMDMnLCAnTG93JywgJ2Rkc2Rjc2RmYWUnKTtcbnRzLnRvZG9zLnB1c2godDEpO1xucHJvamVjdHMucHVzaCh0cyk7XG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cbmxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXG4vLyBkZWxldGVJdGVtKGRlZmF1bHRQcm9qZWN0LnRvZG9zLCB0YXNrMyk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENyZWF0b3IobmFtZSkge1xuXHRsZXQgdG9kb3MgPSBbXTtcblxuXHRyZXR1cm4geyBuYW1lLCB0b2RvcyB9O1xufVxuIiwiZXhwb3J0IHsgY3JlYXRlSXRlbSwgZGVsZXRlSXRlbSB9O1xuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcblx0Y29uc3QgY29tcGxldGVkID0gZmFsc2U7XG5cblx0cmV0dXJuIHsgY29tcGxldGVkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uIH07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oc3RvcmFnZSwgaXRlbSkge1xuXHRjb25zdCBpbmRleCA9IHN0b3JhZ2UuaW5kZXhPZihpdGVtKTtcblx0c3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9