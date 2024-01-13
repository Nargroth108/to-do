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

	storage.forEach((item) => {
		(0,_DOMpopulateProject__WEBPACK_IMPORTED_MODULE_0__["default"])(item);
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







function populateProject(object) {
	const arrayOfObject = Object.values(object);

	const DOMBODY = document.querySelector('body');

	const mainCard = document.createElement('div');
	mainCard.classList.add('main-card');

	const mainTitle = document.createElement('div');
	mainTitle.classList.add('main-title');
	mainTitle.innerText = arrayOfObject[0];
	mainCard.appendChild(mainTitle);

	const addItemButton = document.createElement('button');
	addItemButton.classList.add('add-item-button');
	addItemButton.addEventListener('click', () => {
		console.log('tba');
	});
	mainCard.appendChild(addItemButton);

	DOMBODY.appendChild(mainCard);

	//Displays every object stored in the second property of the main object
	arrayOfObject[1].forEach((subObject) => {
		const arrayOfSubObject = Object.values(subObject);

		const subCard = document.createElement('div');
		subCard.classList.add('sub-card');

		const subContainer = document.createElement('div');
		subContainer.classList.add('sub-container');

		const subCheckbox = document.createElement('input');
		subCheckbox.setAttribute('type', 'checkbox');
		subCheckbox.setAttribute('name', 'checkbox');
		subCheckbox.value = arrayOfSubObject[0];
		subCheckbox.addEventListener('click', () => {
			console.log('tba');
		});
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
			console.log('tba');
		});
		subButtonContainer.appendChild(subButton3);

		subCard.appendChild(subButtonContainer);
		mainCard.appendChild(subCard);
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



// import populateProject from './DOMpopulateProject';

let projects = [];
const defaultProject = (0,_projectCreator__WEBPACK_IMPORTED_MODULE_1__["default"])('Default Project');
console.table(defaultProject);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFnZU1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NcG9wdWxhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RDcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG8tbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9wdWxhdGVQcm9qZWN0IGZyb20gJy4vRE9NcG9wdWxhdGVQcm9qZWN0JztcblxuZXhwb3J0IHsgbG9hZFBhZ2VFbGVtZW50cywgZGVsZXRlUGFnZUVsZW1lbnRzIH07XG5cbmZ1bmN0aW9uIGxvYWRQYWdlRWxlbWVudHMoc3RvcmFnZSkge1xuXHRjb25zdCBET01CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXInKTtcblx0RE9NQk9EWS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cdGNvbnN0IGFkZENvbGxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YWRkQ29sbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtY29sbGVjdGlvbi1idXR0b24nKTtcblx0YWRkQ29sbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygndGJhJyk7XG5cdH0pO1xuXHRET01CT0RZLmFwcGVuZENoaWxkKGFkZENvbGxlY3Rpb25CdXR0b24pO1xuXG5cdHN0b3JhZ2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdHBvcHVsYXRlUHJvamVjdChpdGVtKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVBhZ2VFbGVtZW50cygpIHtcblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblx0d2hpbGUgKERPTUJPRFkuZmlyc3RDaGlsZCkge1xuXHRcdERPTUJPRFkucmVtb3ZlQ2hpbGQoRE9NQk9EWS5sYXN0Q2hpbGQpO1xuXHR9XG59XG4iLCJpbXBvcnQgRXhwYW5kSWNvbiBmcm9tICcuL2V4cGFuZC5zdmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4vZWRpdC5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi9kZWxldGUuc3ZnJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi91cC5zdmcnO1xuaW1wb3J0IHsgbG9hZFBhZ2VFbGVtZW50cywgZGVsZXRlUGFnZUVsZW1lbnRzIH0gZnJvbSAnLi9ET01wYWdlTWFuYWdlbWVudCc7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdChvYmplY3QpIHtcblx0Y29uc3QgYXJyYXlPZk9iamVjdCA9IE9iamVjdC52YWx1ZXMob2JqZWN0KTtcblxuXHRjb25zdCBET01CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5cdGNvbnN0IG1haW5DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1haW5DYXJkLmNsYXNzTGlzdC5hZGQoJ21haW4tY2FyZCcpO1xuXG5cdGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpbi10aXRsZScpO1xuXHRtYWluVGl0bGUuaW5uZXJUZXh0ID0gYXJyYXlPZk9iamVjdFswXTtcblx0bWFpbkNhcmQuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcblxuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGFkZEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWl0ZW0tYnV0dG9uJyk7XG5cdGFkZEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ3RiYScpO1xuXHR9KTtcblx0bWFpbkNhcmQuYXBwZW5kQ2hpbGQoYWRkSXRlbUJ1dHRvbik7XG5cblx0RE9NQk9EWS5hcHBlbmRDaGlsZChtYWluQ2FyZCk7XG5cblx0Ly9EaXNwbGF5cyBldmVyeSBvYmplY3Qgc3RvcmVkIGluIHRoZSBzZWNvbmQgcHJvcGVydHkgb2YgdGhlIG1haW4gb2JqZWN0XG5cdGFycmF5T2ZPYmplY3RbMV0uZm9yRWFjaCgoc3ViT2JqZWN0KSA9PiB7XG5cdFx0Y29uc3QgYXJyYXlPZlN1Yk9iamVjdCA9IE9iamVjdC52YWx1ZXMoc3ViT2JqZWN0KTtcblxuXHRcdGNvbnN0IHN1YkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRzdWJDYXJkLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jYXJkJyk7XG5cblx0XHRjb25zdCBzdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRzdWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRhaW5lcicpO1xuXG5cdFx0Y29uc3Qgc3ViQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdHN1YkNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXHRcdHN1YkNoZWNrYm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjaGVja2JveCcpO1xuXHRcdHN1YkNoZWNrYm94LnZhbHVlID0gYXJyYXlPZlN1Yk9iamVjdFswXTtcblx0XHRzdWJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCd0YmEnKTtcblx0XHR9KTtcblx0XHRzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQ2hlY2tib3gpO1xuXG5cdFx0Y29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0c3ViVGl0bGUuY2xhc3NMaXN0LmFkZCgnc3ViLXRpdGxlJyk7XG5cdFx0c3ViVGl0bGUuaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFsxXTtcblx0XHRzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuXG5cdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpO1xuXG5cdFx0Y29uc3Qgc3ViRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRzdWJEYXRlLmNsYXNzTGlzdC5hZGQoJ3N1Yi1kYXRlJyk7XG5cdFx0c3ViRGF0ZS5pbm5lclRleHQgPSBhcnJheU9mU3ViT2JqZWN0WzJdO1xuXHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViRGF0ZSk7XG5cblx0XHRjb25zdCBzdWJCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbi1jb250YWluZXInKTtcblxuXHRcdGNvbnN0IHN1YlByaW8gPSBhcnJheU9mU3ViT2JqZWN0WzNdO1xuXHRcdGlmIChzdWJQcmlvID09PSAnbG93Jykge1xuXHRcdFx0c3ViQ2FyZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6IGFudGlxdWV3aGl0ZScpO1xuXHRcdH0gZWxzZSBpZiAoc3ViUHJpbyA9PT0gJ21lZGl1bScpIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBzaWx2ZXInKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3ViQ2FyZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6IGdyYXknKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdWJCdXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMS5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0Y29uc3QgaWNvbjEgPSBuZXcgSW1hZ2UoKTtcblx0XHRpY29uMS5zcmMgPSBFeHBhbmRJY29uO1xuXHRcdGljb24xLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1idXR0b24nKTtcblx0XHRzdWJCdXR0b24xLmFwcGVuZENoaWxkKGljb24xKTtcblx0XHRzdWJCdXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0c3ViQnV0dG9uMS5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHQnc3R5bGUnLFxuXHRcdFx0XHQnZ3JpZC1hdXRvLWZsb3c6IHJvdzsgYmFja2dyb3VuZDogbGlnaHRibHVlJ1xuXHRcdFx0KTtcblxuXHRcdFx0c3ViQ2FyZC5sYXN0Q2hpbGQucmVtb3ZlO1xuXHRcdFx0c3ViQ2FyZC5sYXN0Q2hpbGQucmVtb3ZlO1xuXG5cdFx0XHRjb25zdCBzdWJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdHN1YkRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGFycmF5T2ZTdWJPYmplY3RbNF07XG5cdFx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRlc2NyaXB0aW9uKTtcblxuXHRcdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJEYXRlKTtcblxuXHRcdFx0c3ViQnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnanVzdGlmeS1jb250ZW50OiBjZW50ZXInKTtcblx0XHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0XHRjb25zdCBjbG9zZUljb24gPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGNsb3NlSWNvbi5zcmMgPSBDbG9zZUljb247XG5cdFx0XHRjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXHRcdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblx0XHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uQ29udGFpbmVyKTtcblxuXHRcdFx0Y2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHN1YkJ1dHRvbjEuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0ZGVsZXRlUGFnZUVsZW1lbnRzKCk7XG5cdFx0XHRcdGxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ1dHRvbjEpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24yID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjIuc3JjID0gRWRpdEljb247XG5cdFx0aWNvbjIuY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcblx0XHRzdWJCdXR0b24yLmFwcGVuZENoaWxkKGljb24yKTtcblx0XHRzdWJCdXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ3RiYScpO1xuXHRcdH0pO1xuXHRcdHN1YkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJCdXR0b24yKTtcblxuXHRcdGNvbnN0IHN1YkJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRzdWJCdXR0b24zLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24nKTtcblx0XHRjb25zdCBpY29uMyA9IG5ldyBJbWFnZSgpO1xuXHRcdGljb24zLnNyYyA9IERlbGV0ZUljb247XG5cdFx0aWNvbjMuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjMuYXBwZW5kQ2hpbGQoaWNvbjMpO1xuXHRcdHN1YkJ1dHRvbjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygndGJhJyk7XG5cdFx0fSk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ1dHRvbjMpO1xuXG5cdFx0c3ViQ2FyZC5hcHBlbmRDaGlsZChzdWJCdXR0b25Db250YWluZXIpO1xuXHRcdG1haW5DYXJkLmFwcGVuZENoaWxkKHN1YkNhcmQpO1xuXHR9KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUl0ZW0sIGRlbGV0ZUl0ZW0gfSBmcm9tICcuL3RvZG8tbG9naWMnO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gJy4vcHJvamVjdENyZWF0b3InO1xuaW1wb3J0IHsgbG9hZFBhZ2VFbGVtZW50cywgZGVsZXRlUGFnZUVsZW1lbnRzIH0gZnJvbSAnLi9ET01wYWdlTWFuYWdlbWVudCc7XG4vLyBpbXBvcnQgcG9wdWxhdGVQcm9qZWN0IGZyb20gJy4vRE9NcG9wdWxhdGVQcm9qZWN0JztcblxubGV0IHByb2plY3RzID0gW107XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RDcmVhdG9yKCdEZWZhdWx0IFByb2plY3QnKTtcbmNvbnNvbGUudGFibGUoZGVmYXVsdFByb2plY3QpO1xuXG5jb25zdCB0YXNrMSA9IGNyZWF0ZUl0ZW0oJ3Rhc2sxJywgJzIwMjMtMTItMjQnLCAnbG93JywgJ2RkZGRkZGRkZGRkZGRkJyk7XG5jb25zdCB0YXNrMiA9IGNyZWF0ZUl0ZW0oJ3Rhc2syJywgJzIwMjQtMDEtMjAnLCAnbWVkaXVtJywgJ2VlZWVlZWVlZWVlJyk7XG5jb25zdCB0YXNrMyA9IGNyZWF0ZUl0ZW0oJ3Rhc2szJywgJzIwMjUtMTEtMTAnLCAnaGlnaCcsICdiYmJiYmJiYmJiYicpO1xuZGVmYXVsdFByb2plY3QudG9kb3MucHVzaCh0YXNrMSwgdGFzazIsIHRhc2szKTtcbmNvbnNvbGUudGFibGUoZGVmYXVsdFByb2plY3QpO1xucHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnN0IHRzID0gcHJvamVjdENyZWF0b3IoJ3RzJyk7XG5jb25zdCB0MSA9IGNyZWF0ZUl0ZW0oJ3QxJywgJzIwMjEtMDItMDMnLCAnbG93JywgJ2Rkc2Rjc2RmYWUnKTtcbnRzLnRvZG9zLnB1c2godDEpO1xucHJvamVjdHMucHVzaCh0cyk7XG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cbmxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXG4vLyBkZWxldGVJdGVtKGRlZmF1bHRQcm9qZWN0LnRvZG9zLCB0YXNrMyk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENyZWF0b3IobmFtZSkge1xuXHRsZXQgdG9kb3MgPSBbXTtcblxuXHRyZXR1cm4geyBuYW1lLCB0b2RvcyB9O1xufVxuIiwiZXhwb3J0IHsgY3JlYXRlSXRlbSwgZGVsZXRlSXRlbSB9O1xuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcblx0Y29uc3QgY29tcGxldGVkID0gZmFsc2U7XG5cblx0cmV0dXJuIHsgY29tcGxldGVkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uIH07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oc3RvcmFnZSwgaXRlbSkge1xuXHRjb25zdCBpbmRleCA9IHN0b3JhZ2UuaW5kZXhPZihpdGVtKTtcblx0c3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9