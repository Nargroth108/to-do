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
		localStorage.setItem('projects', JSON.stringify(storage));
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
/* harmony import */ var _images_expand_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/expand.svg */ "./src/images/expand.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_up_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/up.svg */ "./src/images/up.svg");
/* harmony import */ var _DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMpageManagement */ "./src/DOMpageManagement.js");
/* harmony import */ var _todo_logic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-logic.js */ "./src/todo-logic.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.js */ "./src/index.js");








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
			localStorage.setItem('projects', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
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
		icon1.src = _images_expand_svg__WEBPACK_IMPORTED_MODULE_0__;
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
			closeIcon.src = _images_up_svg__WEBPACK_IMPORTED_MODULE_3__;
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
		icon2.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_1__;
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

				subObject.title = titleInput;
				subObject.dueDate = dateInput;
				subObject.priority = priorityInput;
				subObject.description = descriptionInput;
				localStorage.setItem('projects', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.deletePageElements)();
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.loadPageElements)(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
				dialog.close();
			});
		});
		subButtonContainer.appendChild(subButton2);

		const subButton3 = document.createElement('button');
		subButton3.classList.add('sub-button');
		const icon3 = new Image();
		icon3.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
		icon3.classList.add('delete-button');
		subButton3.appendChild(icon3);
		subButton3.addEventListener('click', () => {
			if (window.confirm('Are you sure you want to delete this item?')) {
				object.todos.splice(indexOfSubobject, 1);
				localStorage.setItem('projects', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
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




let projects;

if (!localStorage.getItem('projects')) {
	projects = [];
	const defaultProject = (0,_projectCreator__WEBPACK_IMPORTED_MODULE_1__["default"])('Default Project');

	const task1 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('task1', '2023-12-24', 'Low', 'default task 1');
	const task2 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('task2', '2024-01-20', 'Medium', 'default task 2');
	const task3 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('task3', '2025-11-10', 'High', 'default task 3');
	defaultProject.todos.push(task1, task2, task3);
	projects.push(defaultProject);
} else {
	projects = JSON.parse(localStorage.getItem('projects'));
}

(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_2__.loadPageElements)(projects);

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

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b93eba7df9af3a4440c8.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c1d0dcf9918d4367d56.svg";

/***/ }),

/***/ "./src/images/expand.svg":
/*!*******************************!*\
  !*** ./src/images/expand.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "392ff9915c1a17927ab4.svg";

/***/ }),

/***/ "./src/images/up.svg":
/*!***************************!*\
  !*** ./src/images/up.svg ***!
  \***************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWxCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTWxvYWREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NcGFnZU1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NcG9wdWxhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RDcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG8tbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkRGlhbG9nKCkge1xuXHRjb25zdCBET01CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5cdGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuXHRkaWFsb2cuc2V0QXR0cmlidXRlKCdpZCcsICdkaWFsb2cnKTtcblx0RE9NQk9EWS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZGlhbG9nJyk7XG5cdGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcblxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1kaXYnKTtcblx0Zm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuXG5cdGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdGxhYmVsMS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZS1pbnB1dCcpO1xuXHRsYWJlbDEuaW5uZXJUZXh0ID0gJ1RpdGxlOic7XG5cdGRpdi5hcHBlbmRDaGlsZChsYWJlbDEpO1xuXG5cdGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGlucHV0MS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlLWlucHV0Jyk7XG5cdGlucHV0MS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUtaW5wdXQnKTtcblx0aW5wdXQxLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdGlucHV0MS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cdGxhYmVsMS5hcHBlbmRDaGlsZChpbnB1dDEpO1xuXG5cdGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdGxhYmVsMi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlLWlucHV0Jyk7XG5cdGxhYmVsMi5pbm5lclRleHQgPSAnRHVlIGRhdGU6Jztcblx0ZGl2LmFwcGVuZENoaWxkKGxhYmVsMik7XG5cblx0Y29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0aW5wdXQyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZS1pbnB1dCcpO1xuXHRpbnB1dDIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUtaW5wdXQnKTtcblx0aW5wdXQyLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5cdGlucHV0Mi5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cdGxhYmVsMi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuXG5cdGNvbnN0IGxhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdGxhYmVsMy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1pbnB1dCcpO1xuXHRsYWJlbDMuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5Oic7XG5cdGRpdi5hcHBlbmRDaGlsZChsYWJlbDMpO1xuXG5cdGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRpbnB1dDMuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1pbnB1dCcpO1xuXHRpbnB1dDMuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5LWlucHV0Jyk7XG5cdGlucHV0My5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRpbnB1dDMuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRsYWJlbDMuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcblxuXHRjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKTtcblx0b3B0aW9uMS5pbm5lclRleHQgPSAnTG93Jztcblx0aW5wdXQzLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuXHRjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbjIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNZWRpdW0nKTtcblx0b3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG5cdG9wdGlvbjIuaW5uZXJUZXh0ID0gJ01lZGl1bSc7XG5cdGlucHV0My5hcHBlbmRDaGlsZChvcHRpb24yKTtcblx0Y29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRvcHRpb24zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuXHRvcHRpb24zLmlubmVyVGV4dCA9ICdIaWdoJztcblx0aW5wdXQzLmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG5cdGNvbnN0IGxhYmVsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdGxhYmVsNC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbi1pbnB1dCcpO1xuXHRsYWJlbDQuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG5cdGRpdi5hcHBlbmRDaGlsZChsYWJlbDQpO1xuXG5cdGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGlucHV0NC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uLWlucHV0Jyk7XG5cdGlucHV0NC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24taW5wdXQnKTtcblx0aW5wdXQ0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdGlucHV0NC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cdGxhYmVsNC5hcHBlbmRDaGlsZChpbnB1dDQpO1xuXG5cdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQocCk7XG5cblx0Y29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0Y2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblx0Y2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtYnV0dG9uJyk7XG5cdGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0Nsb3NlJyk7XG5cdGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2Zvcm1ub3ZhbGlkYXRlJywgJ2Zvcm1ub3ZhbGlkYXRlJyk7XG5cdHAuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuXHRjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJyk7XG5cdHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1N1Ym1pdCcpO1xuXHRwLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG59XG4iLCJpbXBvcnQgcG9wdWxhdGVQcm9qZWN0IGZyb20gJy4vRE9NcG9wdWxhdGVQcm9qZWN0JztcbmltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tICcuL3Byb2plY3RDcmVhdG9yJztcbmltcG9ydCBsb2FkRGlhbG9nIGZyb20gJy4vRE9NbG9hZERpYWxvZyc7XG5cbmV4cG9ydCB7IGxvYWRQYWdlRWxlbWVudHMsIGRlbGV0ZVBhZ2VFbGVtZW50cyB9O1xuXG5mdW5jdGlvbiBsb2FkUGFnZUVsZW1lbnRzKHN0b3JhZ2UpIHtcblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtaGVhZGVyJyk7XG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXHRjb25zdCBhZGRDb2xsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGFkZENvbGxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWNvbGxlY3Rpb24tYnV0dG9uJyk7XG5cdGFkZENvbGxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Y29uc3QgdGl0bGVJbnB1dCA9IHByb21wdCgnV2hhdCBkbyB5b3Ugd2FudCB0byBuYW1lIHRoZSBuZXcgY29sbGVjdGlvbj8nKTtcblx0XHRsZXQgbmV3UHJvamVjdCA9IHByb2plY3RDcmVhdG9yKHRpdGxlSW5wdXQpO1xuXHRcdHN0b3JhZ2UucHVzaChuZXdQcm9qZWN0KTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG5cdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0bG9hZFBhZ2VFbGVtZW50cyhzdG9yYWdlKTtcblx0fSk7XG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQoYWRkQ29sbGVjdGlvbkJ1dHRvbik7XG5cblx0bGV0IG9iamVjdEluZGV4ID0gMDtcblx0c3RvcmFnZS5mb3JFYWNoKChvYmplY3QpID0+IHtcblx0XHRzdG9yYWdlO1xuXHRcdGNvbnN0IGN1cnJlbnRJbmRleCA9IG9iamVjdEluZGV4O1xuXG5cdFx0cG9wdWxhdGVQcm9qZWN0KG9iamVjdCk7XG5cblx0XHRjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmRlbGV0ZS1jb2xsZWN0aW9uLWJ1dHRvbidcblx0XHQpO1xuXHRcdGNvbnN0IGN1cnJlbnRCdXR0b24gPSBkZWxldGVQcm9qZWN0QnV0dG9uc1tjdXJyZW50SW5kZXhdO1xuXHRcdGN1cnJlbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSB3aG9sZSBwcm9qZWN0PycpXG5cdFx0XHQpIHtcblx0XHRcdFx0c3RvcmFnZS5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcblx0XHRcdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0XHRcdGxvYWRQYWdlRWxlbWVudHMoc3RvcmFnZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bG9hZERpYWxvZygpO1xuXG5cdFx0b2JqZWN0SW5kZXgrKztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVBhZ2VFbGVtZW50cygpIHtcblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblx0d2hpbGUgKERPTUJPRFkuZmlyc3RDaGlsZCkge1xuXHRcdERPTUJPRFkucmVtb3ZlQ2hpbGQoRE9NQk9EWS5sYXN0Q2hpbGQpO1xuXHR9XG59XG4iLCJpbXBvcnQgRXhwYW5kSWNvbiBmcm9tICcuL2ltYWdlcy9leHBhbmQuc3ZnJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuL2ltYWdlcy9lZGl0LnN2Zyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuL2ltYWdlcy9kZWxldGUuc3ZnJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi9pbWFnZXMvdXAuc3ZnJztcbmltcG9ydCB7IGxvYWRQYWdlRWxlbWVudHMsIGRlbGV0ZVBhZ2VFbGVtZW50cyB9IGZyb20gJy4vRE9NcGFnZU1hbmFnZW1lbnQnO1xuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gJy4vdG9kby1sb2dpYy5qcyc7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdChvYmplY3QpIHtcblx0Y29uc3QgYXJyYXlPZk9iamVjdCA9IE9iamVjdC52YWx1ZXMob2JqZWN0KTtcblxuXHRjb25zdCBET01CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5cdGNvbnN0IG1haW5DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1haW5DYXJkLmNsYXNzTGlzdC5hZGQoJ21haW4tY2FyZCcpO1xuXG5cdGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpbi10aXRsZScpO1xuXHRtYWluVGl0bGUuaW5uZXJUZXh0ID0gYXJyYXlPZk9iamVjdFswXTtcblx0bWFpbkNhcmQuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcblxuXHRjb25zdCBtYWluQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1haW5CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1idXR0b24tY29udGFpbmVyJyk7XG5cblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRhZGRJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWJ1dHRvbicpO1xuXHRhZGRJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2cnKTtcblx0XHRjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ1dHRvbicpO1xuXHRcdGRpYWxvZy5zaG93TW9kYWwoKTtcblxuXHRcdHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKS52YWx1ZTtcblx0XHRcdGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0JykudmFsdWU7XG5cdFx0XHRjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LWlucHV0JykudmFsdWU7XG5cdFx0XHRjb25zdCBkZXNjcmlwdGlvbklucHV0ID1cblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG5cdFx0XHRsZXQgbmV3VG9kbyA9IGNyZWF0ZUl0ZW0oXG5cdFx0XHRcdHRpdGxlSW5wdXQsXG5cdFx0XHRcdGRhdGVJbnB1dCxcblx0XHRcdFx0cHJpb3JpdHlJbnB1dCxcblx0XHRcdFx0ZGVzY3JpcHRpb25JbnB1dFxuXHRcdFx0KTtcblx0XHRcdG9iamVjdC50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblx0XHRcdGRlbGV0ZVBhZ2VFbGVtZW50cygpO1xuXHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cdFx0XHRkaWFsb2cuY2xvc2UoKTtcblx0XHR9KTtcblx0fSk7XG5cdG1haW5CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkSXRlbUJ1dHRvbik7XG5cblx0Y29uc3QgZGVsZXRlTWFpbkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0ZGVsZXRlTWFpbkNhcmQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWNvbGxlY3Rpb24tYnV0dG9uJyk7XG5cdG1haW5CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlTWFpbkNhcmQpO1xuXG5cdG1haW5DYXJkLmFwcGVuZENoaWxkKG1haW5CdXR0b25Db250YWluZXIpO1xuXG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQobWFpbkNhcmQpO1xuXG5cdGNvbnN0IHN1Yk9iamVjdHMgPSBhcnJheU9mT2JqZWN0WzFdO1xuXG5cdGxldCBzdWJPYmplY3RJbmRleCA9IDA7XG5cdHN1Yk9iamVjdHMuZm9yRWFjaCgoc3ViT2JqZWN0KSA9PiB7XG5cdFx0Y29uc3QgaW5kZXhPZlN1Ym9iamVjdCA9IHN1Yk9iamVjdEluZGV4O1xuXHRcdGNvbnN0IGFycmF5T2ZTdWJPYmplY3QgPSBPYmplY3QudmFsdWVzKHN1Yk9iamVjdCk7XG5cblx0XHRjb25zdCBzdWJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQ2FyZC5jbGFzc0xpc3QuYWRkKCdzdWItY2FyZCcpO1xuXG5cdFx0Y29uc3Qgc3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250YWluZXInKTtcblxuXHRcdGNvbnN0IHN1YkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRzdWJDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblx0XHRzdWJDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2tib3gnKTtcblx0XHRzdWJDaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuXHRcdHN1YkNoZWNrYm94LnZhbHVlID0gYXJyYXlPZlN1Yk9iamVjdFswXTtcblx0XHRzdWJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmIChvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID09PSB0cnVlKSB7XG5cdFx0XHRcdG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmIChvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0c3ViQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdWJDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkNoZWNrYm94KTtcblxuXHRcdGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N1Yi10aXRsZScpO1xuXHRcdHN1YlRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZTdWJPYmplY3RbMV07XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcblxuXHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViQ29udGFpbmVyKTtcblxuXHRcdGNvbnN0IHN1YkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0c3ViRGF0ZS5jbGFzc0xpc3QuYWRkKCdzdWItZGF0ZScpO1xuXHRcdHN1YkRhdGUuaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFsyXTtcblx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRhdGUpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24tY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBzdWJQcmlvID0gYXJyYXlPZlN1Yk9iamVjdFszXTtcblx0XHRpZiAoc3ViUHJpbyA9PT0gJ0xvdycpIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGUnKTtcblx0XHR9IGVsc2UgaWYgKHN1YlByaW8gPT09ICdNZWRpdW0nKSB7XG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogc2lsdmVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBncmF5Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjEuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24xID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjEuc3JjID0gRXhwYW5kSWNvbjtcblx0XHRpY29uMS5jbGFzc0xpc3QuYWRkKCdleHBhbmQtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMS5hcHBlbmRDaGlsZChpY29uMSk7XG5cdFx0c3ViQnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHN1YkJ1dHRvbjEuZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0J3N0eWxlJyxcblx0XHRcdFx0J2dyaWQtYXV0by1mbG93OiByb3c7IGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZSdcblx0XHRcdCk7XG5cblx0XHRcdHN1YkNhcmQubGFzdENoaWxkLnJlbW92ZTtcblx0XHRcdHN1YkNhcmQubGFzdENoaWxkLnJlbW92ZTtcblxuXHRcdFx0Y29uc3Qgc3ViRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0XHRzdWJEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtc3R5bGU6IGl0YWxpYzsgcGFkZGluZzogMjBweCcpO1xuXHRcdFx0c3ViRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFs0XTtcblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViRGVzY3JpcHRpb24pO1xuXG5cdFx0XHRjb25zdCBzdWJQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdHN1YlByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eTogJHthcnJheU9mU3ViT2JqZWN0WzNdfWA7XG5cdFx0XHRzdWJQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdCdzdHlsZScsXG5cdFx0XHRcdCd3aWR0aDogMTAwJTsgZGlzcGxheTogZ3JpZDsganVzdGlmeS1pdGVtczogY2VudGVyJ1xuXHRcdFx0KTtcblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViUHJpb3JpdHkpO1xuXG5cdFx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRhdGUpO1xuXG5cdFx0XHRzdWJCdXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcicpO1xuXHRcdFx0Y29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24nKTtcblx0XHRcdGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0Y2xvc2VJY29uLnNyYyA9IENsb3NlSWNvbjtcblx0XHRcdGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cdFx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXHRcdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJCdXR0b25Db250YWluZXIpO1xuXG5cdFx0XHRjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0c3ViQnV0dG9uMS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uMSk7XG5cblx0XHRjb25zdCBzdWJCdXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMi5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0Y29uc3QgaWNvbjIgPSBuZXcgSW1hZ2UoKTtcblx0XHRpY29uMi5zcmMgPSBFZGl0SWNvbjtcblx0XHRpY29uMi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjIuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuXHRcdHN1YkJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygndW5kZXIgZGV2ZWxvcG1lbnQnKTtcblx0XHRcdGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2cnKTtcblx0XHRcdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnV0dG9uJyk7XG5cblx0XHRcdGRpYWxvZy5zaG93TW9kYWwoKTtcblxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWUgPSBzdWJPYmplY3QudGl0bGU7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlID0gc3ViT2JqZWN0LmR1ZURhdGU7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktaW5wdXQnKS52YWx1ZSA9IHN1Yk9iamVjdC5wcmlvcml0eTtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlID1cblx0XHRcdFx0c3ViT2JqZWN0LmRlc2NyaXB0aW9uO1xuXG5cdFx0XHRzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWU7XG5cdFx0XHRcdGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0JykudmFsdWU7XG5cdFx0XHRcdGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktaW5wdXQnKS52YWx1ZTtcblx0XHRcdFx0Y29uc3QgZGVzY3JpcHRpb25JbnB1dCA9XG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG5cblx0XHRcdFx0c3ViT2JqZWN0LnRpdGxlID0gdGl0bGVJbnB1dDtcblx0XHRcdFx0c3ViT2JqZWN0LmR1ZURhdGUgPSBkYXRlSW5wdXQ7XG5cdFx0XHRcdHN1Yk9iamVjdC5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQ7XG5cdFx0XHRcdHN1Yk9iamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQ7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cdFx0XHRcdGRlbGV0ZVBhZ2VFbGVtZW50cygpO1xuXHRcdFx0XHRsb2FkUGFnZUVsZW1lbnRzKHByb2plY3RzKTtcblx0XHRcdFx0ZGlhbG9nLmNsb3NlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uMik7XG5cblx0XHRjb25zdCBzdWJCdXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMy5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0Y29uc3QgaWNvbjMgPSBuZXcgSW1hZ2UoKTtcblx0XHRpY29uMy5zcmMgPSBEZWxldGVJY29uO1xuXHRcdGljb24zLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcblx0XHRzdWJCdXR0b24zLmFwcGVuZENoaWxkKGljb24zKTtcblx0XHRzdWJCdXR0b24zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSkge1xuXHRcdFx0XHRvYmplY3QudG9kb3Muc3BsaWNlKGluZGV4T2ZTdWJvYmplY3QsIDEpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXHRcdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ1dHRvbjMpO1xuXG5cdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJCdXR0b25Db250YWluZXIpO1xuXHRcdG1haW5DYXJkLmFwcGVuZENoaWxkKHN1YkNhcmQpO1xuXG5cdFx0c3ViT2JqZWN0SW5kZXgrKztcblx0fSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi90b2RvLWxvZ2ljJztcbmltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tICcuL3Byb2plY3RDcmVhdG9yJztcbmltcG9ydCB7IGxvYWRQYWdlRWxlbWVudHMgfSBmcm9tICcuL0RPTXBhZ2VNYW5hZ2VtZW50JztcblxubGV0IHByb2plY3RzO1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG5cdHByb2plY3RzID0gW107XG5cdGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdENyZWF0b3IoJ0RlZmF1bHQgUHJvamVjdCcpO1xuXG5cdGNvbnN0IHRhc2sxID0gY3JlYXRlSXRlbSgndGFzazEnLCAnMjAyMy0xMi0yNCcsICdMb3cnLCAnZGVmYXVsdCB0YXNrIDEnKTtcblx0Y29uc3QgdGFzazIgPSBjcmVhdGVJdGVtKCd0YXNrMicsICcyMDI0LTAxLTIwJywgJ01lZGl1bScsICdkZWZhdWx0IHRhc2sgMicpO1xuXHRjb25zdCB0YXNrMyA9IGNyZWF0ZUl0ZW0oJ3Rhc2szJywgJzIwMjUtMTEtMTAnLCAnSGlnaCcsICdkZWZhdWx0IHRhc2sgMycpO1xuXHRkZWZhdWx0UHJvamVjdC50b2Rvcy5wdXNoKHRhc2sxLCB0YXNrMiwgdGFzazMpO1xuXHRwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbn0gZWxzZSB7XG5cdHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG59XG5cbmxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RDcmVhdG9yKG5hbWUpIHtcblx0bGV0IHRvZG9zID0gW107XG5cblx0cmV0dXJuIHsgbmFtZSwgdG9kb3MgfTtcbn1cbiIsImV4cG9ydCB7IGNyZWF0ZUl0ZW0sIGRlbGV0ZUl0ZW0gfTtcblxuZnVuY3Rpb24gY3JlYXRlSXRlbSh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XG5cdGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xuXG5cdHJldHVybiB7IGNvbXBsZXRlZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiB9O1xufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtKHN0b3JhZ2UsIGl0ZW0pIHtcblx0Y29uc3QgaW5kZXggPSBzdG9yYWdlLmluZGV4T2YoaXRlbSk7XG5cdHN0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==