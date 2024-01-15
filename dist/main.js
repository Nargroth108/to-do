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
	input1.setAttribute('required', 'true');
	label1.appendChild(input1);

	const label2 = document.createElement('label');
	label2.setAttribute('for', 'date-input');
	label2.innerText = 'Due date:';
	div.appendChild(label2);

	const input2 = document.createElement('input');
	input2.setAttribute('id', 'date-input');
	input2.setAttribute('name', 'date-input');
	input2.setAttribute('type', 'date');
	input2.setAttribute('required', 'true');
	label2.appendChild(input2);

	const label3 = document.createElement('label');
	label3.setAttribute('for', 'priority-input');
	label3.innerText = 'Priority:';
	div.appendChild(label3);

	const input3 = document.createElement('select');
	input3.setAttribute('id', 'priority-input');
	input3.setAttribute('name', 'priority-input');
	input3.setAttribute('type', 'text');
	input3.setAttribute('required', 'true');
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
	input4.setAttribute('required', 'true');
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
			let newTodo = (0,_todo_logic_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
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
/* harmony export */   "default": () => (/* binding */ createItem)
/* harmony export */ });
function createItem(title, dueDate, priority, description) {
	const completed = false;

	return { completed, title, dueDate, priority, description };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWxCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTWxvYWREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NcGFnZU1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NcG9wdWxhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RDcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG8tbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkRGlhbG9nKCkge1xuXHRjb25zdCBET01CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5cdGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuXHRkaWFsb2cuc2V0QXR0cmlidXRlKCdpZCcsICdkaWFsb2cnKTtcblx0RE9NQk9EWS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZGlhbG9nJyk7XG5cdGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcblxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1kaXYnKTtcblx0Zm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuXG5cdGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdGxhYmVsMS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZS1pbnB1dCcpO1xuXHRsYWJlbDEuaW5uZXJUZXh0ID0gJ1RpdGxlOic7XG5cdGRpdi5hcHBlbmRDaGlsZChsYWJlbDEpO1xuXG5cdGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGlucHV0MS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlLWlucHV0Jyk7XG5cdGlucHV0MS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUtaW5wdXQnKTtcblx0aW5wdXQxLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdGlucHV0MS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKTtcblx0bGFiZWwxLmFwcGVuZENoaWxkKGlucHV0MSk7XG5cblx0Y29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0bGFiZWwyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUtaW5wdXQnKTtcblx0bGFiZWwyLmlubmVyVGV4dCA9ICdEdWUgZGF0ZTonO1xuXHRkaXYuYXBwZW5kQ2hpbGQobGFiZWwyKTtcblxuXHRjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRpbnB1dDIuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLWlucHV0Jyk7XG5cdGlucHV0Mi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZS1pbnB1dCcpO1xuXHRpbnB1dDIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblx0aW5wdXQyLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuXHRsYWJlbDIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcblxuXHRjb25zdCBsYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRsYWJlbDMuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktaW5wdXQnKTtcblx0bGFiZWwzLmlubmVyVGV4dCA9ICdQcmlvcml0eTonO1xuXHRkaXYuYXBwZW5kQ2hpbGQobGFiZWwzKTtcblxuXHRjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblx0aW5wdXQzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktaW5wdXQnKTtcblx0aW5wdXQzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eS1pbnB1dCcpO1xuXHRpbnB1dDMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0aW5wdXQzLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuXHRsYWJlbDMuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcblxuXHRjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKTtcblx0b3B0aW9uMS5pbm5lclRleHQgPSAnTG93Jztcblx0aW5wdXQzLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuXHRjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdG9wdGlvbjIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNZWRpdW0nKTtcblx0b3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG5cdG9wdGlvbjIuaW5uZXJUZXh0ID0gJ01lZGl1bSc7XG5cdGlucHV0My5hcHBlbmRDaGlsZChvcHRpb24yKTtcblx0Y29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRvcHRpb24zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuXHRvcHRpb24zLmlubmVyVGV4dCA9ICdIaWdoJztcblx0aW5wdXQzLmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG5cdGNvbnN0IGxhYmVsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdGxhYmVsNC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbi1pbnB1dCcpO1xuXHRsYWJlbDQuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG5cdGRpdi5hcHBlbmRDaGlsZChsYWJlbDQpO1xuXG5cdGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGlucHV0NC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uLWlucHV0Jyk7XG5cdGlucHV0NC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24taW5wdXQnKTtcblx0aW5wdXQ0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdGlucHV0NC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKTtcblx0bGFiZWw0LmFwcGVuZENoaWxkKGlucHV0NCk7XG5cblx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0Zm9ybS5hcHBlbmRDaGlsZChwKTtcblxuXHRjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS1idXR0b24nKTtcblx0Y2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ2xvc2UnKTtcblx0Y2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnZm9ybW5vdmFsaWRhdGUnLCAnZm9ybW5vdmFsaWRhdGUnKTtcblx0cC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG5cdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1idXR0b24nKTtcblx0c3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU3VibWl0Jyk7XG5cdHAuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbn1cbiIsImltcG9ydCBwb3B1bGF0ZVByb2plY3QgZnJvbSAnLi9ET01wb3B1bGF0ZVByb2plY3QnO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gJy4vcHJvamVjdENyZWF0b3InO1xuaW1wb3J0IGxvYWREaWFsb2cgZnJvbSAnLi9ET01sb2FkRGlhbG9nJztcblxuZXhwb3J0IHsgbG9hZFBhZ2VFbGVtZW50cywgZGVsZXRlUGFnZUVsZW1lbnRzIH07XG5cbmZ1bmN0aW9uIGxvYWRQYWdlRWxlbWVudHMoc3RvcmFnZSkge1xuXHRjb25zdCBET01CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXInKTtcblx0RE9NQk9EWS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cdGNvbnN0IGFkZENvbGxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YWRkQ29sbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtY29sbGVjdGlvbi1idXR0b24nKTtcblx0YWRkQ29sbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRjb25zdCB0aXRsZUlucHV0ID0gcHJvbXB0KCdXaGF0IGRvIHlvdSB3YW50IHRvIG5hbWUgdGhlIG5ldyBjb2xsZWN0aW9uPycpO1xuXHRcdGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdENyZWF0b3IodGl0bGVJbnB1dCk7XG5cdFx0c3RvcmFnZS5wdXNoKG5ld1Byb2plY3QpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcblx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRsb2FkUGFnZUVsZW1lbnRzKHN0b3JhZ2UpO1xuXHR9KTtcblx0RE9NQk9EWS5hcHBlbmRDaGlsZChhZGRDb2xsZWN0aW9uQnV0dG9uKTtcblxuXHRsZXQgb2JqZWN0SW5kZXggPSAwO1xuXHRzdG9yYWdlLmZvckVhY2goKG9iamVjdCkgPT4ge1xuXHRcdHN0b3JhZ2U7XG5cdFx0Y29uc3QgY3VycmVudEluZGV4ID0gb2JqZWN0SW5kZXg7XG5cblx0XHRwb3B1bGF0ZVByb2plY3Qob2JqZWN0KTtcblxuXHRcdGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuZGVsZXRlLWNvbGxlY3Rpb24tYnV0dG9uJ1xuXHRcdCk7XG5cdFx0Y29uc3QgY3VycmVudEJ1dHRvbiA9IGRlbGV0ZVByb2plY3RCdXR0b25zW2N1cnJlbnRJbmRleF07XG5cdFx0Y3VycmVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmIChcblx0XHRcdFx0d2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHdob2xlIHByb2plY3Q/Jylcblx0XHRcdCkge1xuXHRcdFx0XHRzdG9yYWdlLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xuXHRcdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhzdG9yYWdlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRsb2FkRGlhbG9nKCk7XG5cblx0XHRvYmplY3RJbmRleCsrO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUGFnZUVsZW1lbnRzKCkge1xuXHRjb25zdCBET01CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXHR3aGlsZSAoRE9NQk9EWS5maXJzdENoaWxkKSB7XG5cdFx0RE9NQk9EWS5yZW1vdmVDaGlsZChET01CT0RZLmxhc3RDaGlsZCk7XG5cdH1cbn1cbiIsImltcG9ydCBFeHBhbmRJY29uIGZyb20gJy4vaW1hZ2VzL2V4cGFuZC5zdmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4vaW1hZ2VzL2VkaXQuc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4vaW1hZ2VzL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuL2ltYWdlcy91cC5zdmcnO1xuaW1wb3J0IHsgbG9hZFBhZ2VFbGVtZW50cywgZGVsZXRlUGFnZUVsZW1lbnRzIH0gZnJvbSAnLi9ET01wYWdlTWFuYWdlbWVudCc7XG5pbXBvcnQgY3JlYXRlSXRlbSBmcm9tICcuL3RvZG8tbG9naWMuanMnO1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3Qob2JqZWN0KSB7XG5cdGNvbnN0IGFycmF5T2ZPYmplY3QgPSBPYmplY3QudmFsdWVzKG9iamVjdCk7XG5cblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXHRjb25zdCBtYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluQ2FyZC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmQnKTtcblxuXHRjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcblx0bWFpblRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZPYmplY3RbMF07XG5cdG1haW5DYXJkLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cblx0Y29uc3QgbWFpbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tYnV0dG9uLWNvbnRhaW5lcicpO1xuXG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YWRkSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1idXR0b24nKTtcblx0YWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nJyk7XG5cdFx0Y29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idXR0b24nKTtcblx0XHRkaWFsb2cuc2hvd01vZGFsKCk7XG5cblx0XHRzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWU7XG5cdFx0XHRjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0Y29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eS1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRpb25JbnB1dCA9XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0bGV0IG5ld1RvZG8gPSBjcmVhdGVJdGVtKFxuXHRcdFx0XHR0aXRsZUlucHV0LFxuXHRcdFx0XHRkYXRlSW5wdXQsXG5cdFx0XHRcdHByaW9yaXR5SW5wdXQsXG5cdFx0XHRcdGRlc2NyaXB0aW9uSW5wdXRcblx0XHRcdCk7XG5cdFx0XHRvYmplY3QudG9kb3MucHVzaChuZXdUb2RvKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdGxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXHRcdFx0ZGlhbG9nLmNsb3NlKCk7XG5cdFx0fSk7XG5cdH0pO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEl0ZW1CdXR0b24pO1xuXG5cdGNvbnN0IGRlbGV0ZU1haW5DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGRlbGV0ZU1haW5DYXJkLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1jb2xsZWN0aW9uLWJ1dHRvbicpO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZU1haW5DYXJkKTtcblxuXHRtYWluQ2FyZC5hcHBlbmRDaGlsZChtYWluQnV0dG9uQ29udGFpbmVyKTtcblxuXHRET01CT0RZLmFwcGVuZENoaWxkKG1haW5DYXJkKTtcblxuXHRjb25zdCBzdWJPYmplY3RzID0gYXJyYXlPZk9iamVjdFsxXTtcblxuXHRsZXQgc3ViT2JqZWN0SW5kZXggPSAwO1xuXHRzdWJPYmplY3RzLmZvckVhY2goKHN1Yk9iamVjdCkgPT4ge1xuXHRcdGNvbnN0IGluZGV4T2ZTdWJvYmplY3QgPSBzdWJPYmplY3RJbmRleDtcblx0XHRjb25zdCBhcnJheU9mU3ViT2JqZWN0ID0gT2JqZWN0LnZhbHVlcyhzdWJPYmplY3QpO1xuXG5cdFx0Y29uc3Qgc3ViQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHN1YkNhcmQuY2xhc3NMaXN0LmFkZCgnc3ViLWNhcmQnKTtcblxuXHRcdGNvbnN0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBzdWJDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0c3ViQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cdFx0c3ViQ2hlY2tib3guc2V0QXR0cmlidXRlKCduYW1lJywgJ2NoZWNrYm94Jyk7XG5cdFx0c3ViQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcblx0XHRzdWJDaGVja2JveC52YWx1ZSA9IGFycmF5T2ZTdWJPYmplY3RbMF07XG5cdFx0c3ViQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRpZiAob2JqZWN0LnRvZG9zW2luZGV4T2ZTdWJvYmplY3RdLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRpZiAob2JqZWN0LnRvZG9zW2luZGV4T2ZTdWJvYmplY3RdLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdHN1YkNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3ViQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cdFx0fVxuXHRcdHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJDaGVja2JveCk7XG5cblx0XHRjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRzdWJUaXRsZS5jbGFzc0xpc3QuYWRkKCdzdWItdGl0bGUnKTtcblx0XHRzdWJUaXRsZS5pbm5lclRleHQgPSBhcnJheU9mU3ViT2JqZWN0WzFdO1xuXHRcdHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG5cblx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkNvbnRhaW5lcik7XG5cblx0XHRjb25zdCBzdWJEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHN1YkRhdGUuY2xhc3NMaXN0LmFkZCgnc3ViLWRhdGUnKTtcblx0XHRzdWJEYXRlLmlubmVyVGV4dCA9IGFycmF5T2ZTdWJPYmplY3RbMl07XG5cdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJEYXRlKTtcblxuXHRcdGNvbnN0IHN1YkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uLWNvbnRhaW5lcicpO1xuXG5cdFx0Y29uc3Qgc3ViUHJpbyA9IGFycmF5T2ZTdWJPYmplY3RbM107XG5cdFx0aWYgKHN1YlByaW8gPT09ICdMb3cnKSB7XG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlJyk7XG5cdFx0fSBlbHNlIGlmIChzdWJQcmlvID09PSAnTWVkaXVtJykge1xuXHRcdFx0c3ViQ2FyZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6IHNpbHZlcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogZ3JheScpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1YkJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRzdWJCdXR0b24xLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24nKTtcblx0XHRjb25zdCBpY29uMSA9IG5ldyBJbWFnZSgpO1xuXHRcdGljb24xLnNyYyA9IEV4cGFuZEljb247XG5cdFx0aWNvbjEuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWJ1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjEuYXBwZW5kQ2hpbGQoaWNvbjEpO1xuXHRcdHN1YkJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRzdWJCdXR0b24xLmRpc2FibGVkID0gdHJ1ZTtcblxuXHRcdFx0c3ViQ2FyZC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdCdzdHlsZScsXG5cdFx0XHRcdCdncmlkLWF1dG8tZmxvdzogcm93OyBiYWNrZ3JvdW5kOiBsaWdodGJsdWUnXG5cdFx0XHQpO1xuXG5cdFx0XHRzdWJDYXJkLmxhc3RDaGlsZC5yZW1vdmU7XG5cdFx0XHRzdWJDYXJkLmxhc3RDaGlsZC5yZW1vdmU7XG5cblx0XHRcdGNvbnN0IHN1YkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdFx0c3ViRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdmb250LXN0eWxlOiBpdGFsaWM7IHBhZGRpbmc6IDIwcHgnKTtcblx0XHRcdHN1YkRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGFycmF5T2ZTdWJPYmplY3RbNF07XG5cdFx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRlc2NyaXB0aW9uKTtcblxuXHRcdFx0Y29uc3Qgc3ViUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0XHRzdWJQcmlvcml0eS5pbm5lclRleHQgPSBgUHJpb3JpdHk6ICR7YXJyYXlPZlN1Yk9iamVjdFszXX1gO1xuXHRcdFx0c3ViUHJpb3JpdHkuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHQnc3R5bGUnLFxuXHRcdFx0XHQnd2lkdGg6IDEwMCU7IGRpc3BsYXk6IGdyaWQ7IGp1c3RpZnktaXRlbXM6IGNlbnRlcidcblx0XHRcdCk7XG5cdFx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YlByaW9yaXR5KTtcblxuXHRcdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJEYXRlKTtcblxuXHRcdFx0c3ViQnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnanVzdGlmeS1jb250ZW50OiBjZW50ZXInKTtcblx0XHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0XHRjb25zdCBjbG9zZUljb24gPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGNsb3NlSWNvbi5zcmMgPSBDbG9zZUljb247XG5cdFx0XHRjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXHRcdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uQ29udGFpbmVyKTtcblxuXHRcdFx0Y2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHN1YkJ1dHRvbjEuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0XHRcdGxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ1dHRvbjEpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24yID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjIuc3JjID0gRWRpdEljb247XG5cdFx0aWNvbjIuY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcblx0XHRzdWJCdXR0b24yLmFwcGVuZENoaWxkKGljb24yKTtcblx0XHRzdWJCdXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ3VuZGVyIGRldmVsb3BtZW50Jyk7XG5cdFx0XHRjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nJyk7XG5cdFx0XHRjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ1dHRvbicpO1xuXG5cdFx0XHRkaWFsb2cuc2hvd01vZGFsKCk7XG5cblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpLnZhbHVlID0gc3ViT2JqZWN0LnRpdGxlO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaW5wdXQnKS52YWx1ZSA9IHN1Yk9iamVjdC5kdWVEYXRlO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LWlucHV0JykudmFsdWUgPSBzdWJPYmplY3QucHJpb3JpdHk7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRcdHN1Yk9iamVjdC5kZXNjcmlwdGlvbjtcblxuXHRcdFx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0XHRjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlO1xuXHRcdFx0XHRjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LWlucHV0JykudmFsdWU7XG5cdFx0XHRcdGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPVxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuXG5cdFx0XHRcdHN1Yk9iamVjdC50aXRsZSA9IHRpdGxlSW5wdXQ7XG5cdFx0XHRcdHN1Yk9iamVjdC5kdWVEYXRlID0gZGF0ZUlucHV0O1xuXHRcdFx0XHRzdWJPYmplY3QucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0O1xuXHRcdFx0XHRzdWJPYmplY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0O1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXHRcdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cdFx0XHRcdGRpYWxvZy5jbG9zZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ1dHRvbjIpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24zID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjMuc3JjID0gRGVsZXRlSWNvbjtcblx0XHRpY29uMy5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMy5hcHBlbmRDaGlsZChpY29uMyk7XG5cdFx0c3ViQnV0dG9uMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JykpIHtcblx0XHRcdFx0b2JqZWN0LnRvZG9zLnNwbGljZShpbmRleE9mU3Vib2JqZWN0LCAxKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblx0XHRcdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0XHRcdGxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJCdXR0b24zKTtcblxuXHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uQ29udGFpbmVyKTtcblx0XHRtYWluQ2FyZC5hcHBlbmRDaGlsZChzdWJDYXJkKTtcblxuXHRcdHN1Yk9iamVjdEluZGV4Kys7XG5cdH0pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gJy4vdG9kby1sb2dpYyc7XG5pbXBvcnQgcHJvamVjdENyZWF0b3IgZnJvbSAnLi9wcm9qZWN0Q3JlYXRvcic7XG5pbXBvcnQgeyBsb2FkUGFnZUVsZW1lbnRzIH0gZnJvbSAnLi9ET01wYWdlTWFuYWdlbWVudCc7XG5cbmxldCBwcm9qZWN0cztcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuXHRwcm9qZWN0cyA9IFtdO1xuXHRjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RDcmVhdG9yKCdEZWZhdWx0IFByb2plY3QnKTtcblxuXHRjb25zdCB0YXNrMSA9IGNyZWF0ZUl0ZW0oJ3Rhc2sxJywgJzIwMjMtMTItMjQnLCAnTG93JywgJ2RlZmF1bHQgdGFzayAxJyk7XG5cdGNvbnN0IHRhc2syID0gY3JlYXRlSXRlbSgndGFzazInLCAnMjAyNC0wMS0yMCcsICdNZWRpdW0nLCAnZGVmYXVsdCB0YXNrIDInKTtcblx0Y29uc3QgdGFzazMgPSBjcmVhdGVJdGVtKCd0YXNrMycsICcyMDI1LTExLTEwJywgJ0hpZ2gnLCAnZGVmYXVsdCB0YXNrIDMnKTtcblx0ZGVmYXVsdFByb2plY3QudG9kb3MucHVzaCh0YXNrMSwgdGFzazIsIHRhc2szKTtcblx0cHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG59IGVsc2Uge1xuXHRwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xufVxuXG5sb2FkUGFnZUVsZW1lbnRzKHByb2plY3RzKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRvcihuYW1lKSB7XG5cdGxldCB0b2RvcyA9IFtdO1xuXG5cdHJldHVybiB7IG5hbWUsIHRvZG9zIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJdGVtKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcblx0Y29uc3QgY29tcGxldGVkID0gZmFsc2U7XG5cblx0cmV0dXJuIHsgY29tcGxldGVkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=