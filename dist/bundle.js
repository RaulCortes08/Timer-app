/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var startButton = document.getElementById('startButton');\n  var stopButton = document.getElementById('stopButton');\n  var resetButton = document.getElementById('resetButton');\n  var upButton = document.getElementById('upButton');\n  var downButton = document.getElementById('downButton');\n  var display = document.getElementById('minutes');\n  var secondsDisplay = document.getElementById('seconds');\n  var timer = new _timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](display);\n\n  // Botones de control\n  startButton.addEventListener('click', function () {\n    return timer.start();\n  });\n  stopButton.addEventListener('click', function () {\n    return timer.stop();\n  });\n  resetButton.addEventListener('click', function () {\n    return timer.reset();\n  });\n\n  // Botones para incrementar y decrementar tiempo\n  upButton.addEventListener('click', function () {\n    return timer.increaseTime();\n  });\n  downButton.addEventListener('click', function () {\n    return timer.decreaseTime();\n  });\n});\n\n//# sourceURL=webpack://timer-app/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://timer-app/./src/style.scss?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Timer)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Timer = /*#__PURE__*/function () {\n  function Timer(displayElement) {\n    _classCallCheck(this, Timer);\n    this.displayElement = displayElement;\n    this.minutes = 0;\n    this.seconds = 0;\n    this.timerInterval = null;\n    this.isRunning = false;\n    this.updateDisplay();\n  }\n  return _createClass(Timer, [{\n    key: \"updateDisplay\",\n    value: function updateDisplay() {\n      var minutes = String(this.minutes).padStart(2, '0');\n      var seconds = String(this.seconds).padStart(2, '0');\n      this.displayElement.textContent = \"\".concat(minutes, \":\").concat(seconds);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n      if (!this.isRunning) {\n        this.isRunning = true;\n        this.timerInterval = setInterval(function () {\n          if (_this.seconds === 0) {\n            if (_this.minutes === 0) {\n              _this.stop();\n            } else {\n              _this.minutes--;\n              _this.seconds = 59;\n            }\n          } else {\n            _this.seconds--;\n          }\n          _this.updateDisplay();\n        }, 1000);\n      }\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      clearInterval(this.timerInterval);\n      this.isRunning = false;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.stop();\n      this.minutes = 0;\n      this.seconds = 0;\n      this.updateDisplay();\n    }\n  }, {\n    key: \"increaseTime\",\n    value: function increaseTime() {\n      if (this.minutes < 99) {\n        this.minutes++;\n        this.updateDisplay();\n      }\n    }\n  }, {\n    key: \"decreaseTime\",\n    value: function decreaseTime() {\n      if (this.minutes > 0) {\n        this.minutes--;\n        this.updateDisplay();\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://timer-app/./src/timer.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;