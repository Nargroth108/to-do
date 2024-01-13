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
	console.log('test');
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
			console.log('tba');
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EOztBQUVIOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEVBQUUsK0RBQWU7QUFDakIsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QnNDO0FBQ0o7QUFDSTs7QUFFdkI7QUFDZjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3Q0FBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0NBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7O0FDekdlO0FBQ2Y7O0FBRUEsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmtDOztBQUVsQztBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCc0Q7QUFDUjtBQUM2QjtBQUMzRTs7QUFFQTtBQUNBLHVCQUF1QiwyREFBYztBQUNyQzs7QUFFQSxjQUFjLHVEQUFVO0FBQ3hCLGNBQWMsdURBQVU7QUFDeEIsY0FBYyx1REFBVTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsV0FBVywyREFBYztBQUN6QixXQUFXLHVEQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQSxvRUFBZ0I7O0FBRWhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NcGFnZU1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvRE9NcG9wdWxhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RDcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG8tbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb3B1bGF0ZVByb2plY3QgZnJvbSAnLi9ET01wb3B1bGF0ZVByb2plY3QnO1xuXG5leHBvcnQgeyBsb2FkUGFnZUVsZW1lbnRzLCBkZWxldGVQYWdlRWxlbWVudHMgfTtcblxuZnVuY3Rpb24gbG9hZFBhZ2VFbGVtZW50cyhzdG9yYWdlKSB7XG5cdGNvbnN0IERPTUJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuXHRET01CT0RZLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cblx0Y29uc3QgYWRkQ29sbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRhZGRDb2xsZWN0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1jb2xsZWN0aW9uLWJ1dHRvbicpO1xuXHRhZGRDb2xsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCd0YmEnKTtcblx0fSk7XG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQoYWRkQ29sbGVjdGlvbkJ1dHRvbik7XG5cblx0c3RvcmFnZS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0cG9wdWxhdGVQcm9qZWN0KGl0ZW0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUGFnZUVsZW1lbnRzKCkge1xuXHRjb25zb2xlLmxvZygndGVzdCcpO1xuXHRjb25zdCBET01CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXHR3aGlsZSAoRE9NQk9EWS5maXJzdENoaWxkKSB7XG5cdFx0RE9NQk9EWS5yZW1vdmVDaGlsZChET01CT0RZLmxhc3RDaGlsZCk7XG5cdH1cbn1cbiIsImltcG9ydCBFeHBhbmRJY29uIGZyb20gJy4vZXhwYW5kLnN2Zyc7XG5pbXBvcnQgRWRpdEljb24gZnJvbSAnLi9lZGl0LnN2Zyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuL2RlbGV0ZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3Qob2JqZWN0KSB7XG5cdGNvbnN0IGFycmF5T2ZPYmplY3QgPSBPYmplY3QudmFsdWVzKG9iamVjdCk7XG5cblx0Y29uc3QgRE9NQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXHRjb25zdCBtYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtYWluQ2FyZC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmQnKTtcblxuXHRjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcblx0bWFpblRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZPYmplY3RbMF07XG5cdG1haW5DYXJkLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRhZGRJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWJ1dHRvbicpO1xuXHRhZGRJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCd0YmEnKTtcblx0fSk7XG5cdG1haW5DYXJkLmFwcGVuZENoaWxkKGFkZEl0ZW1CdXR0b24pO1xuXG5cdERPTUJPRFkuYXBwZW5kQ2hpbGQobWFpbkNhcmQpO1xuXG5cdC8vRGlzcGxheXMgZXZlcnkgb2JqZWN0IHN0b3JlZCBpbiB0aGUgc2Vjb25kIHByb3BlcnR5IG9mIHRoZSBtYWluIG9iamVjdFxuXHRhcnJheU9mT2JqZWN0WzFdLmZvckVhY2goKHN1Yk9iamVjdCkgPT4ge1xuXHRcdGNvbnN0IGFycmF5T2ZTdWJPYmplY3QgPSBPYmplY3QudmFsdWVzKHN1Yk9iamVjdCk7XG5cblx0XHRjb25zdCBzdWJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQ2FyZC5jbGFzc0xpc3QuYWRkKCdzdWItY2FyZCcpO1xuXG5cdFx0Y29uc3Qgc3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250YWluZXInKTtcblxuXHRcdGNvbnN0IHN1YkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRzdWJDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblx0XHRzdWJDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2tib3gnKTtcblx0XHRzdWJDaGVja2JveC52YWx1ZSA9IGFycmF5T2ZTdWJPYmplY3RbMF07XG5cdFx0c3ViQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygndGJhJyk7XG5cdFx0fSk7XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkNoZWNrYm94KTtcblxuXHRcdGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N1Yi10aXRsZScpO1xuXHRcdHN1YlRpdGxlLmlubmVyVGV4dCA9IGFycmF5T2ZTdWJPYmplY3RbMV07XG5cdFx0c3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcblxuXHRcdHN1YkNhcmQuYXBwZW5kQ2hpbGQoc3ViQ29udGFpbmVyKTtcblxuXHRcdGNvbnN0IHN1YkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0c3ViRGF0ZS5jbGFzc0xpc3QuYWRkKCdzdWItZGF0ZScpO1xuXHRcdHN1YkRhdGUuaW5uZXJUZXh0ID0gYXJyYXlPZlN1Yk9iamVjdFsyXTtcblx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkRhdGUpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1idXR0b24tY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBzdWJQcmlvID0gYXJyYXlPZlN1Yk9iamVjdFszXTtcblx0XHRpZiAoc3ViUHJpbyA9PT0gJ2xvdycpIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGUnKTtcblx0XHR9IGVsc2UgaWYgKHN1YlByaW8gPT09ICdtZWRpdW0nKSB7XG5cdFx0XHRzdWJDYXJkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogc2lsdmVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YkNhcmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiBncmF5Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjEuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24xID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjEuc3JjID0gRXhwYW5kSWNvbjtcblx0XHRpY29uMS5jbGFzc0xpc3QuYWRkKCdleHBhbmQtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMS5hcHBlbmRDaGlsZChpY29uMSk7XG5cdFx0c3ViQnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCd0YmEnKTtcblx0XHR9KTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uMSk7XG5cblx0XHRjb25zdCBzdWJCdXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMi5jbGFzc0xpc3QuYWRkKCdzdWItYnV0dG9uJyk7XG5cdFx0Y29uc3QgaWNvbjIgPSBuZXcgSW1hZ2UoKTtcblx0XHRpY29uMi5zcmMgPSBFZGl0SWNvbjtcblx0XHRpY29uMi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjIuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuXHRcdHN1YkJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygndGJhJyk7XG5cdFx0fSk7XG5cdFx0c3ViQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ1dHRvbjIpO1xuXG5cdFx0Y29uc3Qgc3ViQnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHN1YkJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnc3ViLWJ1dHRvbicpO1xuXHRcdGNvbnN0IGljb24zID0gbmV3IEltYWdlKCk7XG5cdFx0aWNvbjMuc3JjID0gRGVsZXRlSWNvbjtcblx0XHRpY29uMy5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG5cdFx0c3ViQnV0dG9uMy5hcHBlbmRDaGlsZChpY29uMyk7XG5cdFx0c3ViQnV0dG9uMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCd0YmEnKTtcblx0XHR9KTtcblx0XHRzdWJCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uMyk7XG5cblx0XHRzdWJDYXJkLmFwcGVuZENoaWxkKHN1YkJ1dHRvbkNvbnRhaW5lcik7XG5cdFx0bWFpbkNhcmQuYXBwZW5kQ2hpbGQoc3ViQ2FyZCk7XG5cdH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENyZWF0b3IobmFtZSkge1xuXHRsZXQgdG9kb3MgPSBbXTtcblxuXHRyZXR1cm4geyBuYW1lLCB0b2RvcyB9O1xufVxuIiwiZXhwb3J0IHsgY3JlYXRlSXRlbSwgZGVsZXRlSXRlbSB9O1xuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcblx0Y29uc3QgY29tcGxldGVkID0gZmFsc2U7XG5cblx0cmV0dXJuIHsgY29tcGxldGVkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uIH07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oc3RvcmFnZSwgaXRlbSkge1xuXHRjb25zdCBpbmRleCA9IHN0b3JhZ2UuaW5kZXhPZihpdGVtKTtcblx0c3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGNyZWF0ZUl0ZW0sIGRlbGV0ZUl0ZW0gfSBmcm9tICcuL3RvZG8tbG9naWMnO1xuaW1wb3J0IHByb2plY3RDcmVhdG9yIGZyb20gJy4vcHJvamVjdENyZWF0b3InO1xuaW1wb3J0IHsgbG9hZFBhZ2VFbGVtZW50cywgZGVsZXRlUGFnZUVsZW1lbnRzIH0gZnJvbSAnLi9ET01wYWdlTWFuYWdlbWVudCc7XG4vLyBpbXBvcnQgcG9wdWxhdGVQcm9qZWN0IGZyb20gJy4vRE9NcG9wdWxhdGVQcm9qZWN0JztcblxubGV0IHByb2plY3RzID0gW107XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RDcmVhdG9yKCdEZWZhdWx0IFByb2plY3QnKTtcbmNvbnNvbGUudGFibGUoZGVmYXVsdFByb2plY3QpO1xuXG5jb25zdCB0YXNrMSA9IGNyZWF0ZUl0ZW0oJ3Rhc2sxJywgJzIwMjMtMTItMjQnLCAnbG93JywgJ2RkZGRkZGRkZGRkZGRkJyk7XG5jb25zdCB0YXNrMiA9IGNyZWF0ZUl0ZW0oJ3Rhc2syJywgJzIwMjQtMDEtMjAnLCAnbWVkaXVtJywgJ2VlZWVlZWVlZWVlJyk7XG5jb25zdCB0YXNrMyA9IGNyZWF0ZUl0ZW0oJ3Rhc2szJywgJzIwMjUtMTEtMTAnLCAnaGlnaCcsICdiYmJiYmJiYmJiYicpO1xuZGVmYXVsdFByb2plY3QudG9kb3MucHVzaCh0YXNrMSwgdGFzazIsIHRhc2szKTtcbmNvbnNvbGUudGFibGUoZGVmYXVsdFByb2plY3QpO1xucHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnN0IHRzID0gcHJvamVjdENyZWF0b3IoJ3RzJyk7XG5jb25zdCB0MSA9IGNyZWF0ZUl0ZW0oJ3QxJywgJzIwMjEtMDItMDMnLCAnbG93JywgJ2Rkc2Rjc2RmYWUnKTtcbnRzLnRvZG9zLnB1c2godDEpO1xucHJvamVjdHMucHVzaCh0cyk7XG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cbmxvYWRQYWdlRWxlbWVudHMocHJvamVjdHMpO1xuXG4vLyBkZWxldGVJdGVtKGRlZmF1bHRQcm9qZWN0LnRvZG9zLCB0YXNrMyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=