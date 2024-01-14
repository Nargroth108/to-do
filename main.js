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

	// let objectIndex = 0;
	storage.forEach((object) => {
		(0,_DOMpopulateProject__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
		// objectIndex++;
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
			subDescription.innerText = arrayOfSubObject[4];
			subCard.appendChild(subDescription);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWxCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTXBhZ2VNYW5hZ2VtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTXBvcHVsYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLWxvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvcHVsYXRlUHJvamVjdCBmcm9tICcuL0RPTXBvcHVsYXRlUHJvamVjdCc7XG5cbmV4cG9ydCB7IGxvYWRQYWdlRWxlbWVudHMsIGRlbGV0ZVBhZ2VFbGVtZW50cyB9O1xuXG5mdW5jdGlvbiBsb2FkUGFnZUVsZW1lbnRzKHN0b3JhZ2UpIHtcblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtaGVhZGVyJyk7XG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXHRjb25zdCBhZGRDb2xsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGFkZENvbGxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWNvbGxlY3Rpb24tYnV0dG9uJyk7XG5cdGFkZENvbGxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ3RiYScpO1xuXHR9KTtcblx0RE9NQk9EWS5hcHBlbmRDaGlsZChhZGRDb2xsZWN0aW9uQnV0dG9uKTtcblxuXHQvLyBsZXQgb2JqZWN0SW5kZXggPSAwO1xuXHRzdG9yYWdlLmZvckVhY2goKG9iamVjdCkgPT4ge1xuXHRcdHBvcHVsYXRlUHJvamVjdChvYmplY3QpO1xuXHRcdC8vIG9iamVjdEluZGV4Kys7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQYWdlRWxlbWVudHMoKSB7XG5cdGNvbnN0IERPTUJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdHdoaWxlIChET01CT0RZLmZpcnN0Q2hpbGQpIHtcblx0XHRET01CT0RZLnJlbW92ZUNoaWxkKERPTUJPRFkubGFzdENoaWxkKTtcblx0fVxufVxuIiwiaW1wb3J0IEV4cGFuZEljb24gZnJvbSAnLi9leHBhbmQuc3ZnJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuL2VkaXQuc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4vZGVsZXRlLnN2Zyc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4vdXAuc3ZnJztcbmltcG9ydCB7IGxvYWRQYWdlRWxlbWVudHMsIGRlbGV0ZVBhZ2VFbGVtZW50cyB9IGZyb20gJy4vRE9NcGFnZU1hbmFnZW1lbnQnO1xuLy8gaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vRE9NZXZlbnRMaXN0ZW5lcnMuanMnO1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3Qob2JqZWN0KSB7XG5cdGNvbnN0IGFycmF5T2ZPYmplY3QgPSBPYmplY3QudmFsdWVzKG9iamVjdCk7XG5cblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXHRjb25zdCBtYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluQ2FyZC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmQnKTtcblxuXHRjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcblx0bWFpblRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZPYmplY3RbMF07XG5cdG1haW5DYXJkLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cblx0Y29uc3QgbWFpbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tYnV0dG9uLWNvbnRhaW5lcicpO1xuXG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YWRkSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1idXR0b24nKTtcblx0YWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygndGJhJyk7XG5cdH0pO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEl0ZW1CdXR0b24pO1xuXG5cdGNvbnN0IGRlbGV0ZU1haW5DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGRlbGV0ZU1haW5DYXJkLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1jb2xsZWN0aW9uLWJ1dHRvbicpO1xuXHRtYWluQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZU1haW5DYXJkKTtcblxuXHRtYWluQ2FyZC5hcHBlbmRDaGlsZChtYWluQnV0dG9uQ29udGFpbmVyKTtcblxuXHRET01CT0RZLmFwcGVuZENoaWxkKG1haW5DYXJkKTtcblxuXHRjb25zdCBzdWJPYmplY3RzID0gYXJyYXlPZk9iamVjdFsxXTtcblxuXHRsZXQgc3ViT2JqZWN0SW5kZXggPSAwO1xuXHRzdWJPYmplY3RzLmZvckVhY2goKHN1Yk9iamVjdCkgPT4ge1xuXHRcdGNvbnN0IGluZGV4T2ZTdWJvYmplY3QgPSBzdWJPYmplY3RJbmRleDtcblx0XHRjb25zdCBhcnJheU9mU3ViT2JqZWN0ID0gT2JqZWN0LnZhbHVlcyhzdWJPYmplY3QpO1xuXG5cdFx0Y29uc3Qgc3ViQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHN1YkNhcmQuY2xhc3NMaXN0LmFkZCgnc3ViLWNhcmQnKTtcblxuXHRcdGNvbnN0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBzdWJDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0c3ViQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cdFx0c3ViQ2hlY2tib3guc2V0QXR0cmlidXRlKCduYW1lJywgJ2NoZWNrYm94Jyk7XG5cdFx0c3ViQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcblx0XHRzdWJDaGVja2JveC52YWx1ZSA9IGFycmF5T2ZTdWJPYmplY3RbMF07XG5cdFx0c3ViQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkKTtcblx0XHRcdGlmIChvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID09PSB0cnVlKSB7XG5cdFx0XHRcdG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9iamVjdC50b2Rvc1tpbmRleE9mU3Vib2JqZWN0XS5jb21wbGV0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmIChvYmplY3QudG9kb3NbaW5kZXhPZlN1Ym9iamVjdF0uY29tcGxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0c3ViQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdWJDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkNoZWNrYm94KTtcblxuXHRcdGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N1Yi10aXRsZScpO1xuXHRcdHN1YlRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZTdWJPYmplY3RbMV07XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcblxuXHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViQ29udGFpbmVyKTtcblxuXHRcdGNvbnN0IHN1YkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0c3ViRGF0ZS5jbGFzc0xpc3QuYWRkKCdzdWItZGF0ZScpO1xuXHRcdHN1YkRhdGUuaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFsyXTtcblx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRhdGUpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24tY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBzdWJQcmlvID0gYXJyYXlPZlN1Yk9iamVjdFszXTtcblx0XHRpZiAoc3ViUHJpbyA9PT0gJ2xvdycpIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGUnKTtcblx0XHR9IGVsc2UgaWYgKHN1YlByaW8gPT09ICdtZWRpdW0nKSB7XG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogc2lsdmVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBncmF5Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjEuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24xID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjEuc3JjID0gRXhwYW5kSWNvbjtcblx0XHRpY29uMS5jbGFzc0xpc3QuYWRkKCdleHBhbmQtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMS5hcHBlbmRDaGlsZChpY29uMSk7XG5cdFx0c3ViQnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHN1YkJ1dHRvbjEuZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0J3N0eWxlJyxcblx0XHRcdFx0J2dyaWQtYXV0by1mbG93OiByb3c7IGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZSdcblx0XHRcdCk7XG5cblx0XHRcdHN1YkNhcmQubGFzdENoaWxkLnJlbW92ZTtcblx0XHRcdHN1YkNhcmQubGFzdENoaWxkLnJlbW92ZTtcblxuXHRcdFx0Y29uc3Qgc3ViRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0XHRzdWJEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBhcnJheU9mU3ViT2JqZWN0WzRdO1xuXHRcdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJEZXNjcmlwdGlvbik7XG5cblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViRGF0ZSk7XG5cblx0XHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2p1c3RpZnktY29udGVudDogY2VudGVyJyk7XG5cdFx0XHRjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0Y2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdFx0Y29uc3QgY2xvc2VJY29uID0gbmV3IEltYWdlKCk7XG5cdFx0XHRjbG9zZUljb24uc3JjID0gQ2xvc2VJY29uO1xuXHRcdFx0Y2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblx0XHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cdFx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkJ1dHRvbkNvbnRhaW5lcik7XG5cblx0XHRcdGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRzdWJCdXR0b24xLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdGRlbGV0ZVBhZ2VFbGVtZW50cygpO1xuXHRcdFx0XHRsb2FkUGFnZUVsZW1lbnRzKHByb2plY3RzKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJCdXR0b24xKTtcblxuXHRcdGNvbnN0IHN1YkJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRzdWJCdXR0b24yLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24nKTtcblx0XHRjb25zdCBpY29uMiA9IG5ldyBJbWFnZSgpO1xuXHRcdGljb24yLnNyYyA9IEVkaXRJY29uO1xuXHRcdGljb24yLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMi5hcHBlbmRDaGlsZChpY29uMik7XG5cdFx0c3ViQnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCd0YmEnKTtcblx0XHR9KTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uMik7XG5cblx0XHRjb25zdCBzdWJCdXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMy5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0Y29uc3QgaWNvbjMgPSBuZXcgSW1hZ2UoKTtcblx0XHRpY29uMy5zcmMgPSBEZWxldGVJY29uO1xuXHRcdGljb24zLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcblx0XHRzdWJCdXR0b24zLmFwcGVuZENoaWxkKGljb24zKTtcblx0XHRzdWJCdXR0b24zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSkge1xuXHRcdFx0XHRvYmplY3QudG9kb3Muc3BsaWNlKGluZGV4T2ZTdWJvYmplY3QsIDEpO1xuXHRcdFx0XHRkZWxldGVQYWdlRWxlbWVudHMoKTtcblx0XHRcdFx0bG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ1dHRvbjMpO1xuXG5cdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJCdXR0b25Db250YWluZXIpO1xuXHRcdG1haW5DYXJkLmFwcGVuZENoaWxkKHN1YkNhcmQpO1xuXG5cdFx0c3ViT2JqZWN0SW5kZXgrKztcblx0fSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi90b2RvLWxvZ2ljJztcbmltcG9ydCBwcm9qZWN0Q3JlYXRvciBmcm9tICcuL3Byb2plY3RDcmVhdG9yJztcbmltcG9ydCB7IGxvYWRQYWdlRWxlbWVudHMsIGRlbGV0ZVBhZ2VFbGVtZW50cyB9IGZyb20gJy4vRE9NcGFnZU1hbmFnZW1lbnQnO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0Q3JlYXRvcignRGVmYXVsdCBQcm9qZWN0Jyk7XG5cbmNvbnN0IHRhc2sxID0gY3JlYXRlSXRlbSgndGFzazEnLCAnMjAyMy0xMi0yNCcsICdsb3cnLCAnZGRkZGRkZGRkZGRkZGQnKTtcbmNvbnN0IHRhc2syID0gY3JlYXRlSXRlbSgndGFzazInLCAnMjAyNC0wMS0yMCcsICdtZWRpdW0nLCAnZWVlZWVlZWVlZWUnKTtcbmNvbnN0IHRhc2szID0gY3JlYXRlSXRlbSgndGFzazMnLCAnMjAyNS0xMS0xMCcsICdoaWdoJywgJ2JiYmJiYmJiYmJiJyk7XG5kZWZhdWx0UHJvamVjdC50b2Rvcy5wdXNoKHRhc2sxLCB0YXNrMiwgdGFzazMpO1xuY29uc29sZS50YWJsZShkZWZhdWx0UHJvamVjdCk7XG5wcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcblxuY29uc3QgdHMgPSBwcm9qZWN0Q3JlYXRvcigndHMnKTtcbmNvbnN0IHQxID0gY3JlYXRlSXRlbSgndDEnLCAnMjAyMS0wMi0wMycsICdsb3cnLCAnZGRzZGNzZGZhZScpO1xudHMudG9kb3MucHVzaCh0MSk7XG5wcm9qZWN0cy5wdXNoKHRzKTtcbmNvbnNvbGUubG9nKHByb2plY3RzKTtcblxubG9hZFBhZ2VFbGVtZW50cyhwcm9qZWN0cyk7XG5cbi8vIGRlbGV0ZUl0ZW0oZGVmYXVsdFByb2plY3QudG9kb3MsIHRhc2szKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRvcihuYW1lKSB7XG5cdGxldCB0b2RvcyA9IFtdO1xuXG5cdHJldHVybiB7IG5hbWUsIHRvZG9zIH07XG59XG4iLCJleHBvcnQgeyBjcmVhdGVJdGVtLCBkZWxldGVJdGVtIH07XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0odGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xuXHRjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4geyBjb21wbGV0ZWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24gfTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbShzdG9yYWdlLCBpdGVtKSB7XG5cdGNvbnN0IGluZGV4ID0gc3RvcmFnZS5pbmRleE9mKGl0ZW0pO1xuXHRzdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=