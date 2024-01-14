/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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




function loadPageElements(storage) {
	const DOMBODY = document.querySelector('body');

	const header = document.createElement('header');
	header.classList.add('page-header');
	DOMBODY.appendChild(header);

	const addCollectionButton = document.createElement('button');
	addCollectionButton.classList.add('add-collection-button');
	addCollectionButton.addEventListener('click', () => {
		console.log('tba');
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





// import { deleteProject } from './DOMeventListeners.js';


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
		console.log('tba');
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
			console.log(object.todos[indexOfSubobject].completed);
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
		if (subPrio === 'low') {
			subCard.setAttribute('style', 'background: antiquewhite');
		} else if (subPrio === 'medium') {
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
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.loadPageElements)(_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
				(0,_DOMpageManagement__WEBPACK_IMPORTED_MODULE_4__.loadPageElements)(_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
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

const task1 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('task1', '2023-12-24', 'low', 'dddddddddddddd');
const task2 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('task2', '2024-01-20', 'medium', 'eeeeeeeeeee');
const task3 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('task3', '2025-11-10', 'high', 'bbbbbbbbbbb');
defaultProject.todos.push(task1, task2, task3);
console.table(defaultProject);
projects.push(defaultProject);

const ts = (0,_projectCreator__WEBPACK_IMPORTED_MODULE_1__["default"])('ts');
const t1 = (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.createItem)('t1', '2021-02-03', 'low', 'ddsdcsdfae');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWxCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTXBhZ2VNYW5hZ2VtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTXBvcHVsYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLWxvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvcHVsYXRlUHJvamVjdCBmcm9tICcuL0RPTXBvcHVsYXRlUHJvamVjdCc7XG5cbmV4cG9ydCB7IGxvYWRQYWdlRWxlbWVudHMsIGRlbGV0ZVBhZ2VFbGVtZW50cyB9O1xuXG5mdW5jdGlvbiBsb2FkUGFnZUVsZW1lbnRzKHN0b3JhZ2UpIHtcblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtaGVhZGVyJyk7XG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXHRjb25zdCBhZGRDb2xsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGFkZENvbGxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWNvbGxlY3Rpb24tYnV0dG9uJyk7XG5cdGFkZENvbGxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ3RiYScpO1xuXHR9KTtcblx0RE9NQk9EWS5hcHBlbmRDaGlsZChhZGRDb2xsZWN0aW9uQnV0dG9uKTtcblxuXHRsZXQgb2JqZWN0SW5kZXggPSAwO1xuXHRzdG9yYWdlLmZvckVhY2goKG9iamVjdCkgPT4ge1xuXHRcdHN0b3JhZ2U7XG5cdFx0Y29uc3QgY3VycmVudEluZGV4ID0gb2JqZWN0SW5kZXg7XG5cblx0XHRwb3B1bGF0ZVByb2plY3Qob2JqZWN0KTtcblxuXHRcdGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuZGVsZXRlLWNvbGxlY3Rpb24tYnV0dG9uJ1xuXHRcdCk7XG5cdFx0Y29uc3QgY3VycmVudEJ1dHRvbiA9IGRlbGV0ZVByb2plY3RCdXR0b25zW2N1cnJlbnRJbmRleF07XG5cdFx0Y3VycmVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmIChcblx0XHRcdFx0d2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHdob2xlIHByb2plY3Q/Jylcblx0XHRcdCkge1xuXHRcdFx0XHRzdG9yYWdlLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xuXHRcdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhzdG9yYWdlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdG9iamVjdEluZGV4Kys7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQYWdlRWxlbWVudHMoKSB7XG5cdGNvbnN0IERPTUJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdHdoaWxlIChET01CT0RZLmZpcnN0Q2hpbGQpIHtcblx0XHRET01CT0RZLnJlbW92ZUNoaWxkKERPTUJPRFkubGFzdENoaWxkKTtcblx0fVxufVxuIiwiaW1wb3J0IEV4cGFuZEljb24gZnJvbSAnLi9leHBhbmQuc3ZnJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuL2VkaXQuc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4vZGVsZXRlLnN2Zyc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4vdXAuc3ZnJztcbmltcG9ydCB7IGxvYWRQYWdlRWxlbWVudHMsIGRlbGV0ZVBhZ2VFbGVtZW50cyB9IGZyb20gJy4vRE9NcGFnZU1hbmFnZW1lbnQnO1xuLy8gaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vRE9NZXZlbnRMaXN0ZW5lcnMuanMnO1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3Qob2JqZWN0KSB7XG5cdGNvbnN0IGFycmF5T2ZPYmplY3QgPSBPYmplY3QudmFsdWVzKG9iamVjdCk7XG5cblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXHRjb25zdCBtYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluQ2FyZC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmQnKTtcblxuXHRjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcblx0bWFpblRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZPYmplY3RbMF07XG5cdG1haW5DYXJkLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cblx0Y29uc3QgbWFpbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tYnV0dG9uLWNvbnRhaW5lcicpO1xuXG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YWRkSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1idXR0b24nKTtcblx0YWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygndGJhJyk7XG5cdH0pO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEl0ZW1CdXR0b24pO1xuXG5cdGNvbnN0IGRlbGV0ZU1haW5DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGRlbGV0ZU1haW5DYXJkLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1jb2xsZWN0aW9uLWJ1dHRvbicpO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZU1haW5DYXJkKTtcblxuXHRtYWluQ2FyZC5hcHBlbmRDaGlsZChtYWluQnV0dG9uQ29udGFpbmVyKTtcblxuXHRET01CT0RZLmFwcGVuZENoaWxkKG1haW5DYXJkKTtcblxuXHRjb25zdCBzdWJPYmplY3RzID0gYXJyYXlPZk9iamVjdFsxXTtcblxuXHRsZXQgc3ViT2JqZWN0SW5kZXggPSAwO1xuXHRzdWJPYmplY3RzLmZvckVhY2goKHN1Yk9iamVjdCkgPT4ge1xuXHRcdGNvbnN0IGluZGV4T2ZTdWJvYmplY3QgPSBzdWJPYmplY3RJbmRleDtcblx0XHRjb25zdCBhcnJheU9mU3ViT2JqZWN0ID0gT2JqZWN0LnZhbHVlcyhzdWJPYmplY3QpO1xuXG5cdFx0Y29uc3Qgc3ViQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHN1YkNhcmQuY2xhc3NMaXN0LmFkZCgnc3ViLWNhcmQnKTtcblxuXHRcdGNvbnN0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBzdWJDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0c3ViQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cdFx0c3ViQ2hlY2tib3guc2V0QXR0cmlidXRlKCduYW1lJywgJ2NoZWNrYm94Jyk7XG5cdFx0c3ViQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcblx0XHRzdWJDaGVja2JveC52YWx1ZSA9IGFycmF5T2ZTdWJPYmplY3RbMF07XG5cdFx0c3ViQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkKTtcblx0XHRcdGlmIChvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID09PSB0cnVlKSB7XG5cdFx0XHRcdG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmIChvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0c3ViQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdWJDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkNoZWNrYm94KTtcblxuXHRcdGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N1Yi10aXRsZScpO1xuXHRcdHN1YlRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZTdWJPYmplY3RbMV07XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcblxuXHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViQ29udGFpbmVyKTtcblxuXHRcdGNvbnN0IHN1YkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0c3ViRGF0ZS5jbGFzc0xpc3QuYWRkKCdzdWItZGF0ZScpO1xuXHRcdHN1YkRhdGUuaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFsyXTtcblx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRhdGUpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24tY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBzdWJQcmlvID0gYXJyYXlPZlN1Yk9iamVjdFszXTtcblx0XHRpZiAoc3ViUHJpbyA9PT0gJ2xvdycpIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGUnKTtcblx0XHR9IGVsc2UgaWYgKHN1YlByaW8gPT09ICdtZWRpdW0nKSB7XG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogc2lsdmVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBncmF5Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjEuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24xID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjEuc3JjID0gRXhwYW5kSWNvbjtcblx0XHRpY29uMS5jbGFzc0xpc3QuYWRkKCdleHBhbmQtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMS5hcHBlbmRDaGlsZChpY29uMSk7XG5cdFx0c3ViQnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHN1YkJ1dHRvbjEuZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0J3N0eWxlJyxcblx0XHRcdFx0J2dyaWQtYXV0by1mbG93OiByb3c7IGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZSdcblx0XHRcdCk7XG5cblx0XHRcdHN1YkNhcmQubGFzdENoaWxkLnJlbW92ZTtcblx0XHRcdHN1YkNhcmQubGFzdENoaWxkLnJlbW92ZTtcblxuXHRcdFx0Y29uc3Qgc3ViRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0XHRzdWJEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtc3R5bGU6IGl0YWxpYzsgcGFkZGluZzogMjBweCcpO1xuXHRcdFx0c3ViRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFs0XTtcblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViRGVzY3JpcHRpb24pO1xuXG5cdFx0XHRjb25zdCBzdWJQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdHN1YlByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eTogJHthcnJheU9mU3ViT2JqZWN0WzNdfWA7XG5cdFx0XHRzdWJQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdCdzdHlsZScsXG5cdFx0XHRcdCd3aWR0aDogMTAwJTsgZGlzcGxheTogZ3JpZDsganVzdGlmeS1pdGVtczogY2VudGVyJ1xuXHRcdFx0KTtcblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViUHJpb3JpdHkpO1xuXG5cdFx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRhdGUpO1xuXG5cdFx0XHRzdWJCdXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcicpO1xuXHRcdFx0Y29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24nKTtcblx0XHRcdGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0Y2xvc2VJY29uLnNyYyA9IENsb3NlSWNvbjtcblx0XHRcdGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cdFx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXHRcdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJCdXR0b25Db250YWluZXIpO1xuXG5cdFx0XHRjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0c3ViQnV0dG9uMS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uMSk7XG5cblx0XHRjb25zdCBzdWJCdXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMi5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0Y29uc3QgaWNvbjIgPSBuZXcgSW1hZ2UoKTtcblx0XHRpY29uMi5zcmMgPSBFZGl0SWNvbjtcblx0XHRpY29uMi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjIuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuXHRcdHN1YkJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygndGJhJyk7XG5cdFx0fSk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ1dHRvbjIpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24zID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjMuc3JjID0gRGVsZXRlSWNvbjtcblx0XHRpY29uMy5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMy5hcHBlbmRDaGlsZChpY29uMyk7XG5cdFx0c3ViQnV0dG9uMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JykpIHtcblx0XHRcdFx0b2JqZWN0LnRvZG9zLnNwbGljZShpbmRleE9mU3Vib2JqZWN0LCAxKTtcblx0XHRcdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0XHRcdGxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJCdXR0b24zKTtcblxuXHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uQ29udGFpbmVyKTtcblx0XHRtYWluQ2FyZC5hcHBlbmRDaGlsZChzdWJDYXJkKTtcblxuXHRcdHN1Yk9iamVjdEluZGV4Kys7XG5cdH0pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gJy4vdG9kby1sb2dpYyc7XG5pbXBvcnQgcHJvamVjdENyZWF0b3IgZnJvbSAnLi9wcm9qZWN0Q3JlYXRvcic7XG5pbXBvcnQgeyBsb2FkUGFnZUVsZW1lbnRzIH0gZnJvbSAnLi9ET01wYWdlTWFuYWdlbWVudCc7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RDcmVhdG9yKCdEZWZhdWx0IFByb2plY3QnKTtcblxuY29uc3QgdGFzazEgPSBjcmVhdGVJdGVtKCd0YXNrMScsICcyMDIzLTEyLTI0JywgJ2xvdycsICdkZGRkZGRkZGRkZGRkZCcpO1xuY29uc3QgdGFzazIgPSBjcmVhdGVJdGVtKCd0YXNrMicsICcyMDI0LTAxLTIwJywgJ21lZGl1bScsICdlZWVlZWVlZWVlZScpO1xuY29uc3QgdGFzazMgPSBjcmVhdGVJdGVtKCd0YXNrMycsICcyMDI1LTExLTEwJywgJ2hpZ2gnLCAnYmJiYmJiYmJiYmInKTtcbmRlZmF1bHRQcm9qZWN0LnRvZG9zLnB1c2godGFzazEsIHRhc2syLCB0YXNrMyk7XG5jb25zb2xlLnRhYmxlKGRlZmF1bHRQcm9qZWN0KTtcbnByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuXG5jb25zdCB0cyA9IHByb2plY3RDcmVhdG9yKCd0cycpO1xuY29uc3QgdDEgPSBjcmVhdGVJdGVtKCd0MScsICcyMDIxLTAyLTAzJywgJ2xvdycsICdkZHNkY3NkZmFlJyk7XG50cy50b2Rvcy5wdXNoKHQxKTtcbnByb2plY3RzLnB1c2godHMpO1xuY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG5sb2FkUGFnZUVsZW1lbnRzKHByb2plY3RzKTtcblxuLy8gZGVsZXRlSXRlbShkZWZhdWx0UHJvamVjdC50b2RvcywgdGFzazMpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RDcmVhdG9yKG5hbWUpIHtcblx0bGV0IHRvZG9zID0gW107XG5cblx0cmV0dXJuIHsgbmFtZSwgdG9kb3MgfTtcbn1cbiIsImV4cG9ydCB7IGNyZWF0ZUl0ZW0sIGRlbGV0ZUl0ZW0gfTtcblxuZnVuY3Rpb24gY3JlYXRlSXRlbSh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XG5cdGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xuXG5cdHJldHVybiB7IGNvbXBsZXRlZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiB9O1xufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtKHN0b3JhZ2UsIGl0ZW0pIHtcblx0Y29uc3QgaW5kZXggPSBzdG9yYWdlLmluZGV4T2YoaXRlbSk7XG5cdHN0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==