/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: .inputSourceMap must be a boolean, object, or undefined\n    at assertInputSourceMap (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/@babel/core/lib/config/option-assertions.js:41:11)\n    at /Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/@babel/core/lib/config/options.js:71:20\n    at Array.forEach (native)\n    at validate (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/@babel/core/lib/config/options.js:57:21)\n    at OptionManager.init (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/@babel/core/lib/config/option-manager.js:102:38)\n    at manageOptions (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/@babel/core/lib/config/option-manager.js:33:30)\n    at loadConfig (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/@babel/core/lib/config/index.js:15:37)\n    at transformSync (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/@babel/core/lib/transform-sync.js:13:36)\n    at Object.transform (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/@babel/core/lib/transform.js:20:65)\n    at transpile (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:55:20)\n    at Object.module.exports (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:179:20)");

/***/ })
/******/ ]);