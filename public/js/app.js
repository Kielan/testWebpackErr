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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property 'code' of null\n    at transpile (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:79:20)\n    at Object.module.exports (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:179:20)");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _reactDom=_interopRequireDefault(__webpack_require__(3));var _reactRouterDom=__webpack_require__(4);var _multipleExports=__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Page1=/*#__PURE__*/function(_React$Component){_inherits(Page1,_React$Component);function Page1(){_classCallCheck(this,Page1);return _possibleConstructorReturn(this,(Page1.__proto__||Object.getPrototypeOf(Page1)).apply(this,arguments));}_createClass(Page1,[{key:"render",value:function render(){console.log('check jquery jQuery',jQuery);return _react.default.createElement("div",null,"HMMMM",_react.default.createElement(_multipleExports.A,null));}}]);return Page1;}(_react.default.Component);var Page3=/*#__PURE__*/function(_React$Component2){_inherits(Page3,_React$Component2);function Page3(){_classCallCheck(this,Page3);return _possibleConstructorReturn(this,(Page3.__proto__||Object.getPrototypeOf(Page3)).apply(this,arguments));}_createClass(Page3,[{key:"render",value:function render(){return _react.default.createElement("div",null);}}]);return Page3;}(_react.default.Component);var Page2=/*#__PURE__*/function(_React$Component3){_inherits(Page2,_React$Component3);function Page2(){_classCallCheck(this,Page2);return _possibleConstructorReturn(this,(Page2.__proto__||Object.getPrototypeOf(Page2)).apply(this,arguments));}_createClass(Page2,[{key:"render",value:function render(){return _react.default.createElement("div",null);}}]);return Page2;}(_react.default.Component);var Dash=function Dash(component){return function(routeProps){var DashElement=(0,_react.createElement)(component,_extends({resource:resource},routeProps));return(0,_react.createElement)("div",{},(0,_react.createElement)(Sidebar,_extends({resource:resource},routeProps)),(0,_react.createElement)(component,_extends({resource:resource},routeProps)));};};var Routes=/*#__PURE__*/function(_React$Component4){_inherits(Routes,_React$Component4);function Routes(){_classCallCheck(this,Routes);return _possibleConstructorReturn(this,(Routes.__proto__||Object.getPrototypeOf(Routes)).apply(this,arguments));}_createClass(Routes,[{key:"render",value:function render(){var listReasource={};return _react.default.createElement(_reactRouterDom.BrowserRouter,null,_react.default.createElement(_reactRouterDom.Switch,null,_react.default.createElement(_reactRouterDom.Route,{exact:true,path:"/login",component:Page1}),_react.default.createElement(_reactRouterDom.Route,{exact:true,path:"/user-lise",component:Page2}),_react.default.createElement(_reactRouterDom.Route,{exact:true,path:"/user/:firstName/:lastName/:id",component:Page3})));}}]);return Routes;}(_react.default.Component);exports.default=Routes;if(typeof window!=='undefined'){_reactDom.default.render(_react.default.createElement(Routes,null),document.getElementById('app-container'));}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property 'code' of null\n    at transpile (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:79:20)\n    at Object.module.exports (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:179:20)");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property 'code' of null\n    at transpile (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:79:20)\n    at Object.module.exports (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:179:20)");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"A",{enumerable:true,get:function get(){return _A.default;}});Object.defineProperty(exports,"B",{enumerable:true,get:function get(){return _B.default;}});var _A=_interopRequireDefault(__webpack_require__(6));var _B=_interopRequireDefault(__webpack_require__(7));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var A=/*#__PURE__*/function(_React$Component){_inherits(A,_React$Component);function A(){_classCallCheck(this,A);return _possibleConstructorReturn(this,(A.__proto__||Object.getPrototypeOf(A)).apply(this,arguments));}_createClass(A,[{key:"render",value:function render(){return _react.default.createElement("div",null,_react.default.createElement("span",null,"AAAAAAA"));}}]);return A;}(_react.default.Component);exports.default=A;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var B=/*#__PURE__*/function(_React$Component){_inherits(B,_React$Component);function B(){_classCallCheck(this,B);return _possibleConstructorReturn(this,(B.__proto__||Object.getPrototypeOf(B)).apply(this,arguments));}_createClass(B,[{key:"render",value:function render(){return _react.default.createElement("div",null);}}]);return B;}(_react.default.Component);exports.default=B;

/***/ })
/******/ ]);