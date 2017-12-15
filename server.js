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
/******/ 	__webpack_require__.p = "";
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _react=_interopRequireDefault(__webpack_require__(2));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var path=__webpack_require__(3);var express=__webpack_require__(4);var cookieParser=__webpack_require__(5);var fs=__webpack_require__(6);var https=__webpack_require__(7);var bodyParser=__webpack_require__(8);var cors=__webpack_require__(9);var appConfig={"httpSecure":process.env.HTTP_SECURE||3442,"wdsPort":process.env.WDS_PORT||8079,"httpsPort":process.env.HTTPS_PORT||3443,"apiUrl":'https://'+(process.env.API_MODE||'api.lemod-helper.com')//'https://api.lemod-helper.com',//'https://dev.lemod-helper.com',
};var isProduction=process.env.NODE_ENV==='production';var static_path='https://'+appConfig.host+':'+appConfig.httpsPort;var credentials={key:fs.readFileSync('./key.pem','utf8'),cert:fs.readFileSync('./cert.pem','utf8')};var app=express();var jsonParser=bodyParser.json();app.use(bodyParser.urlencoded({extended:true}));app.use(bodyParser.json());app.use(cookieParser());app.use('/',express.static(path.join(process.cwd(),'public')));app.set('views',path.join(process.cwd(),'views'));app.set('view engine','pug');app.get('*',function(req,res){//  res.locals.app_stylesheets = '<script src="/js/main.js"></script>';
res.locals.app_scripts='\n <script src="/js/app.js"></script>\n';console.log('url hit');res.render('index',{title:'Hey',message:'Hello there!'});});var secureApp=https.createServer(credentials,app).listen(appConfig.httpsPort,function(){console.log("Node.js app is running at https://localhost:".concat(appConfig.httpsPort,"/"));});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ]);