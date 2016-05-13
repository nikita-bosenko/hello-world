/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	__webpack_require__(1);
	var content = __webpack_require__(6);
	var _ = __webpack_require__(7);
	var $ = __webpack_require__(8);

	$(document).ready(function () {
	  var foldersTemplate = __webpack_require__(9);
	  var labelsTemplate = __webpack_require__(16);
	  var settingsTemplate = __webpack_require__(19);

	  _.templateSettings = {
	    evaluate: /\{\{(.+?)\}\}/g,
	    interpolate: /\{\{=(.+?)\}\}/g,
	    escape: /\{\{-(.+?)\}\}/g
	  };

	  $.getJSON('folders.json', function (data) {
	    debugger;
	    _.forEach(data, function (key, val) {});
	  });

	  /*[
	  {
	  title: "Inbox",
	  address: require('./images/inbox.png')
	  },
	  {
	  title: "Starred",
	  address: require('./images/starred.png')
	  },
	  {
	  title: "Draft",
	  address: require('./images/draft.png')
	  },
	  {
	  title: "Sent Mail",
	  address: require('./images/sent_mail.png')
	  },
	  {
	  title: "Trash",
	  address: require('./images/trash.png')
	  }
	                  ];*/

	  /*var tmplFldrs = _.template(foldersTemplate);
	  var resultFldrs = tmplFldrs({folders: folders});
	  $(resultFldrs).prependTo($('.folders'));*/

	  var labels = [{
	    title: "Clients",
	    color: "purple"
	  }, {
	    title: "Memo",
	    color: "green"
	  }, {
	    title: "Family",
	    color: "orange"
	  }, {
	    title: "Works",
	    color: "blue"
	  }, {
	    title: "To Read",
	    color: "red"
	  }];

	  var tmplLbls = _.template(labelsTemplate);
	  var resultLbls = tmplLbls({ labels: labels });
	  $(resultLbls).prependTo($('.labels'));

	  var settings = [{
	    address: __webpack_require__(20)
	  }, {
	    address: __webpack_require__(21)
	  }];

	  var tmplSttngs = _.template(settingsTemplate);
	  var resultSttngs = tmplSttngs({ settings: settings });
	  $(resultSttngs).prependTo($('.settings'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.i(__webpack_require__(4), "");
	exports.i(__webpack_require__(15), "");
	exports.i(__webpack_require__(17), "");
	exports.i(__webpack_require__(18), "");

	// module
	exports.push([module.id, "html, body {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n width: 100%;\r\n height: 100%;\r\n display: flex;\r\n flex-direction: row;\r\n}\r\n\r\n.main-field {\r\n position: relative;\r\n flex-grow: 0.9;\r\n box-shadow:  2px 0 0 0 #888, 0 2px 0 0 #888, 2px 2px 0 0 #888, 2px 0 0 0 #888 inset,0 2px 0 0 #888 inset;\r\n display: flex;\r\n flex-direction: row;\r\n}\r\n\r\n.inbox-field {\r\n  flex-grow: 0.35;\r\n  box-shadow:  2px 0 0 0 #888, 0 2px 0 0 #888, 2px 2px 0 0 #888, 2px 0 0 0 #888 inset,0 2px 0 0 #888 inset;\r\n  display:flex;\r\n  flex-direction: column;\r\n}\r\n    .letter {\r\n      height: 86px;\r\n      box-shadow:  2px 0 0 0 #888, 0 2px 0 0 #888, 2px 2px 0 0 #888, 2px 0 0 0 #888 inset,0 2px 0 0 #888 inset;\r\n      margin-top:59px;\r\n    }\r\n\r\n.text-area {\r\n  flex-grow: 0.65;\r\n  box-shadow:  2px 0 0 0 #888, 0 2px 0 0 #888, 2px 2px 0 0 #888, 2px 0 0 0 #888 inset,0 2px 0 0 #888 inset;\r\n}\r\n\r\n.toolbar {\r\n  position: absolute;\r\n  left: 0px;\r\n  right: 0px;\r\n  top: 10px;\r\n  box-shadow:  2px 0 0 0 #888, 0 2px 0 0 #888, 2px 2px 0 0 #888, 2px 0 0 0 #888 inset,0 2px 0 0 #888 inset;\r\n  height: 49px;\r\n  background-color: white;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\r\n\r\n.folders {  /*как быть с высотой этого дива? (снизу ведь отступ) Можно оставить паддинг? */\r\n  flex-grow: 0.25;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 12px;\r\n  border-bottom: 3px solid #2a394f;\r\n}\r\n\r\n\r\n.folders-item {\r\n  height: 45px;\r\n  position: relative;\r\n}\r\n\r\n.folders-item:hover {\r\n    background-color: #2a394f;\r\n\r\n}\r\n\r\n.folders-icon {\r\n  position: absolute;\r\n  left: 25px;\r\n  bottom: 15px;\r\n}\r\n\r\n.folders-name {    /* как сделать на одной линии с картинкой? */\r\n  position: absolute;\r\n  left: 53px;\r\n  bottom: 13px;\r\n  font-family: sans-serif;\r\n  color: #f2f3f4;\r\n  font-size: 15px;\r\n\r\n\r\n}\r\n\r\n\r\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "It works from content.js";

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "{{ _.forEach(folders, function(folder) { }}\r\n    <div class=\"folders-item\" id=\"\">\r\n      <img src=\"{{= folder.address}}\" alt=\"pic\" class=\"folders-icon\"/>\r\n      <span class=\"folders-name\">{{= folder.title}}</span>\r\n    </div>\r\n{{ }); }}\r\n";

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".sidebar {\r\n    flex-grow: 0.1;\r\n    background-color: #364760;\r\n    display: flex;\r\n    flex-direction: column;\r\n}", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "{{ _.forEach(labels, function(label) { }}\r\n        <div class=\"labels-item clients\">\r\n            <span class=\"labels-name\">{{= label.title}}</span>\r\n            <div class=\"labels-rect {{= label.color}}\"></div>\r\n        </div>\r\n{{ }); }}\r\n\r\n\r\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".labels {\r\n    flex-grow: 0.7;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 35px;\r\n    padding-bottom: 26px;\r\n\r\n}\r\n\r\n.labels-item {\r\n    height: 30px;\r\n    margin-bottom: 6px;\r\n    position: relative;\r\n}\r\n\r\n.labels-name {\r\n    position: absolute;\r\n    left: 19px;\r\n    top: 5px;\r\n    font-family: sans-serif;\r\n    color: #f2f3f4;\r\n    font-size: 15px;\r\n}\r\n\r\n.labels-rect {\r\n\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 20px;\r\n    border-radius: 3px;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 1px;\r\n}\r\n\r\n\r\n.purple {\r\n    background-color: #7974d0;\r\n}\r\n.green {\r\n    background-color: #01caa0;\r\n}\r\n\r\n.orange {\r\n    background-color: #f8975a;\r\n}\r\n\r\n.blue {\r\n    background-color: #00adef;\r\n}\r\n\r\n.red {\r\n    background-color: #fe4225;\r\n}", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".settings {\r\n    flex-grow: 0.1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    background-color: #2a394f;\r\n}\r\n\r\n.settings-item {\r\n    width: 38px;\r\n    position: relative;\r\n}\r\n\r\n.settings-item:hover {\r\n    background-color: #303f58;\r\n\r\n\r\n}\r\n\r\n.settings-icon {\r\n    display:block;\r\n    position:absolute;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n    top:0;\r\n    margin:auto;\r\n}", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "{{ _.forEach(settings, function(setting) { }}\r\n<div class=\"settings-item settings\">\r\n    <img src=\"{{= setting.address}}\" alt=\"pic\" class=\"settings-icon\"/>\r\n</div>\r\n{{ }); }}\r\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/settings.png";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/add.png";

/***/ }
/******/ ]);