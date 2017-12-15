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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Bad+Script&subset=cyrillic);", ""]);

// module
exports.push([module.i, "button::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  border: none; }\n\n.iu-button-container {\n  display: inline-block;\n  width: 100%;\n  text-align: center; }\n\n.iu-button-container .iu-button-button {\n  box-sizing: content-box;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  outline: none;\n  border: none;\n  background: transparent;\n  box-shadow: none;\n  color: currentColor;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  transition: background-color 0.3s, width 0.3s, border-width 0.3s, border-color 0.3s, border-radius 0.3s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-tap-highlight-color: transparent; }\n  .iu-button-container .iu-button-button span {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.iu-button-container .iu-button-button > span {\n  display: inherit;\n  font-weight: 100;\n  font-size: 2em;\n  transition: opacity 0.3s 0.1s; }\n\n.iu-button-container .iu-button-button > svg {\n  position: absolute;\n  width: 54px;\n  height: 54px;\n  transform: translate(-50%, -50%);\n  pointer-events: none; }\n\n.iu-button-container .iu-button-button > svg path {\n  opacity: 0;\n  fill: none; }\n\n.iu-button-container .iu-button-button svg.iu-button-progress-circle {\n  animation: spin 0.9s infinite cubic-bezier(0.085, 0.26, 0.935, 0.71); }\n\n.iu-button-container .iu-button-button svg.iu-button-progress-circle path {\n  stroke: currentColor;\n  stroke-width: 5; }\n\n.iu-button-container .iu-button-button svg.iu-button-checkmark path,\n.iu-button-container .iu-button-button svg.iu-button-cross path {\n  stroke: #fff;\n  stroke-linecap: round;\n  stroke-width: 4; }\n\n.iu-button-container.disabled .iu-button-button {\n  cursor: not-allowed; }\n\n.iu-button-container.loading .iu-button-button {\n  padding: 0;\n  width: 54px;\n  border-width: 6.5px;\n  border-color: #ddd;\n  background-color: transparent;\n  color: currentColor;\n  cursor: wait; }\n\n.iu-button-container.loading .iu-button-button span {\n  display: none;\n  opacity: 0;\n  transition: all 0.15s; }\n\n.iu-button-container.loading .iu-button-button .iu-button-progress-circle > path {\n  opacity: 1;\n  transition: opacity 0.15s 0.3s; }\n\n.iu-button-container.success .iu-button-button {\n  border-color: #A0D468;\n  background-color: #A0D468; }\n\n.iu-button-container.success .iu-button-button span {\n  display: none;\n  opacity: 0;\n  transition: all 0.15s; }\n\n.iu-button-container.success .iu-button-button .iu-button-checkmark > path {\n  opacity: 1; }\n\n.iu-button-container.error .iu-button-button {\n  border-color: #ED5565;\n  background-color: #ED5565; }\n\n.iu-button-container.error .iu-button-button span {\n  display: none;\n  opacity: 0;\n  transition: all 0.15s; }\n\n.iu-button-container.error .iu-button-button .iu-button-cross > path {\n  opacity: 1; }\n\n.iu-button-container.loading, .iu-button-container.success, .iu-button-container.error {\n  width: 100% !important;\n  height: 100% !important; }\n\n@keyframes spin {\n  from {\n    transform: translate(-50%, -50%) rotate(0deg);\n    transform-origin: center center; }\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n    transform-origin: center center; } }\n\n.iu-container {\n  box-sizing: border-box; }\n  .iu-container * {\n    box-sizing: border-box;\n    outline: none; }\n  .iu-container.disabled .iu-loadContainer {\n    cursor: not-allowed; }\n    .iu-container.disabled .iu-loadContainer .iu-dropzone {\n      background: transparent !important; }\n    .iu-container.disabled .iu-loadContainer .iu-pseudobutton * {\n      cursor: not-allowed; }\n  .iu-container.disabled .iu-label {\n    cursor: not-allowed; }\n  .iu-container.disabled .iu-deletePreview {\n    cursor: not-allowed; }\n\n.iu-imgPreview {\n  position: relative;\n  display: inline-block;\n  margin: 5px 10px 5px 0;\n  width: 100px;\n  height: 100px;\n  border: #bec3c7 1px solid;\n  border-radius: 10px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  vertical-align: bottom; }\n\n.iu-deletePreview {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border: #bec3c7 1px solid;\n  border-radius: 50%;\n  background: #fff;\n  font-size: initial;\n  cursor: pointer; }\n\n.iu-fileInput {\n  display: inline-block; }\n\n.iu-filesInputContainer {\n  display: inline-block;\n  margin: 5px 10px 5px 0;\n  vertical-align: bottom; }\n\n.iu-loadContainer {\n  position: relative;\n  overflow: hidden;\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  cursor: pointer; }\n\n.iu-pseudobutton span {\n  height: 100%; }\n  .iu-pseudobutton span .iu-imgPreview {\n    margin: 0; }\n\n.iu-dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100% !important;\n  height: 100% !important;\n  border-width: 1px !important;\n  border-style: solid !important;\n  border-radius: 10px !important; }\n  .iu-dropzone:hover {\n    background-color: #eeeeee; }\n\n.iu-label {\n  display: block;\n  padding-bottom: 5px;\n  font-size: 16px;\n  cursor: pointer; }\n\n.iu-pseudobutton {\n  margin-top: 0;\n  width: 100px;\n  height: 100px; }\n\n.iu-pseudobuttonContent {\n  line-height: 1 !important; }\n\n.iu-notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.iu-container, .iu-container * {\n  font-family: Bad Script,cursive; }\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property 'code' of null\n    at transpile (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:79:20)\n    at Object.module.exports (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:179:20)");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(13);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property 'code' of null\n    at transpile (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:79:20)\n    at Object.module.exports (/Users/kielan/Documents/Github/lemod/prod/noway/testWebpackErr/node_modules/babel-loader/lib/index.js:179:20)");

/***/ })
/******/ ]);