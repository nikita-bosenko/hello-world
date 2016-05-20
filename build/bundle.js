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
	var Folders = __webpack_require__(13);
	var Labels = __webpack_require__(16);
	var LetterList = __webpack_require__(18);
	var Settings = __webpack_require__(23);
	var Letter = __webpack_require__(27);
	var _ = __webpack_require__(14);
	var $ = __webpack_require__(19);

	$(document).ready(function () {

	    _.templateSettings = {
	        evaluate: /\{\{(.+?)\}\}/g,
	        interpolate: /\{\{=(.+?)\}\}/g,
	        escape: /\{\{-(.+?)\}\}/g
	    };

	    var lettersList = new LetterList();
	    var folders = new Folders();
	    var labels = new Labels();
	    var settings = new Settings();
	    var letter = new Letter();

	    folders.render();
	    labels.render();
	    //lettersList.render();
	    settings.render();

	    $('body').on('click', '.inbox-list-item', function () {

	        $('.text-area').removeClass('hidden');
	        var a = $(this).attr('id');
	        letter.render(a);
	    });

	    $('body').on('click', '.sidebar-button', function () {
	        $('.sidebar div').css('visibility', 'visible');
	        $('.sidebar').css('min-width', '210px');
	        $('.sidebar-button').css('visibility', 'hidden');
	    });

	    $('.inbox-toolbar').css('left', $('.sidebar').width());
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
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
	exports.i(__webpack_require__(5), "");
	exports.i(__webpack_require__(6), "");
	exports.i(__webpack_require__(7), "");
	exports.i(__webpack_require__(8), "");
	exports.i(__webpack_require__(9), "");
	exports.i(__webpack_require__(10), "");

	// module
	exports.push([module.id, "html, body {\r\n  height: 100%;\r\n  margin: 0;\r\n  overflow:  hidden;\r\n\r\n\r\n}\r\n\r\n.container {\r\n margin: 0;\r\n height: 100%;\r\n display: flex;\r\n flex-direction: row;\r\n\r\n\r\n}\r\n\r\n.main-field {\r\n position: relative;\r\n flex-grow: 9;\r\n border-right: 1px solid #ebeef3;\r\n display: flex;\r\n flex-direction: row;\r\n\r\n}\r\n\r\n  .inbox-list {\r\n\r\n  flex: 1 1;\r\n  border-right: 1px solid #ebeef3;\r\n  /*flex-basis: 320px;*/\r\n   min-width: 320px;\r\n\r\n\r\n  overflow-y: scroll;\r\n}\r\n\r\n\r\n\r\n.inbox-toolbar {\r\n    z-index: 1000;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 9px;\r\n  border: 1px solid #ebeef3;\r\n  height: 47px;\r\n  background-color: #eef1f7;\r\n  border-right: none;\r\n  border-left: none;\r\n}\r\n        .compose {\r\n            float:left;\r\n            margin-top: 7px;\r\n            margin-left: 15px;\r\n        }\r\n        .refresh {\r\n            float: right;\r\n            margin-top: 7px;\r\n            margin-right: 15px;\r\n        }\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n", ""]);

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
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\r\n\r\n.folders {  /*как быть с высотой этого дива? (снизу ведь отступ) Можно оставить паддинг? */\r\n  flex-grow: 1;\r\n  padding-top: 12px;\r\n  border-bottom: 3px solid #2a394f;\r\n\r\n}\r\n\r\n\r\n.folders-item {\r\n  height: 45px;\r\n  position: relative;\r\n}\r\n\r\n.folders-item:hover {\r\n    background-color: #2a394f;\r\n\r\n}\r\n\r\n.folders-icon {\r\n  position: absolute;\r\n  left: 25px;\r\n  bottom: 15px;\r\n}\r\n\r\n.folders-name {    /* как сделать на одной линии с картинкой? */\r\n  position: absolute;\r\n  left: 53px;\r\n  bottom: 13px;\r\n  font-family: sans-serif;\r\n  color: #f2f3f4;\r\n  font-size: 15px;\r\n\r\n\r\n}\r\n\r\n\r\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".sidebar {\r\n    background-color: #364760;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 2 50px;\r\n    min-width: 210px;\r\n    position: relative;\r\n\r\n}\r\n\r\n.sidebar-button {\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    top: 35px;\r\n    left: 10px;\r\n    visibility: hidden;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .sidebar {\r\n        min-width: 40px;\r\n    }\r\n\r\n    .sidebar div {\r\n        visibility: hidden;\r\n    }\r\n\r\n    .sidebar-button {\r\n       visibility: visible;\r\n    }\r\n}", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".labels {\r\n    flex-grow: 2;\r\n    padding-top: 35px;\r\n    padding-bottom: 26px;\r\n\r\n}\r\n\r\n.labels-item {\r\n    height: 30px;\r\n    margin-bottom: 6px;\r\n    position: relative;\r\n}\r\n\r\n.labels-name {\r\n    position: absolute;\r\n    left: 19px;\r\n    top: 5px;\r\n    font-family: sans-serif;\r\n    color: #f2f3f4;\r\n    font-size: 15px;\r\n}\r\n\r\n.labels-rect {\r\n\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 20px;\r\n    border-radius: 3px;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 1px;\r\n}\r\n\r\n\r\n.purple {\r\n    background-color: #7974d0;\r\n}\r\n.green {\r\n    background-color: #01caa0;\r\n}\r\n\r\n.orange {\r\n    background-color: #f8975a;\r\n}\r\n\r\n.blue {\r\n    background-color: #00adef;\r\n}\r\n\r\n.red {\r\n    background-color: #fe4225;\r\n}", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".settings {\r\n    flex-basis: 40px;\r\n    background-color: #2a394f;\r\n    padding: 0;\r\n\r\n}\r\n\r\n.settings-item {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 40px;\r\n    padding: 0;\r\n    margin-left: -0.25em;\r\n    margin-bottom: -0.25em;\r\n}\r\n\r\n.settings-item:hover {\r\n    background-color: #303f58;\r\n}\r\n\r\n.settings-icon {\r\n    display:block;\r\n    position:absolute;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n    top: 0;\r\n    margin:auto;\r\n}\r\n\r\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".inbox-list-item {\r\n    height: 86px;\r\n    min-height: 86px;\r\n    max-height: 96px;\r\n    margin-top: 0;\r\n    position: relative;\r\n    border-bottom: 1px solid #ebeef3;\r\n\r\n    /*width: 400px;*/\r\n\r\n}\r\n.inbox-list-item:nth-child(2) {  /*почему тут двойка?*/\r\n    margin-top: 62px;\r\n    border-top: none;\r\n\r\n}\r\n\r\n.inbox-list-item:nth-child(even) {\r\n    background-color: #fcfdfe;\r\n}\r\n\r\n.inbox-list-item:hover {\r\n    background-color: #ffffef;\r\n}\r\n\r\n    .star-icon {\r\n        position: absolute;\r\n        left: 10px;\r\n        top: 5px;\r\n    }\r\n    .letter-time {\r\n        position: absolute;\r\n        right: 10px;\r\n        top: 13px;\r\n        color: #666666;\r\n    }\r\n\r\n\r\n    .sender-image {\r\n\r\n        float: left;\r\n        padding: 25px 20px 0 20px;\r\n        height: 100%;\r\n    }\r\n\r\n    .text-block {\r\n\r\n        float: right;\r\n\r\n    }\r\n\r\n    .sender-name {\r\n        display: block;\r\n        color: #b6b6b6;\r\n    }\r\n\r\n    .letter-subject {\r\n        display: block;\r\n        font-weight: bold;\r\n        color: #4f4f4f;\r\n    }\r\n\r\n    .letter-preview {\r\n        /*display: block;*/\r\n        color: #b6b6b6;\r\n    }\r\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".text-area {\r\n    position: relative;\r\n    flex: 3 1;\r\n    border: 1px solid #ebeef3;\r\n    padding-top: 62px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border-left: none;\r\n    border-top: none;\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n    hr {\r\n        border: none; /* Убираем границу для браузера Firefox */\r\n        color: #ebeef3; /* Цвет линии для остальных браузеров */\r\n        background-color: #ebeef3; /* Цвет линии для браузера Firefox и Opera */\r\n        height: 1px; /* Толщина линии */\r\n        margin-bottom: 12px;\r\n    }\r\n\r\n    .text-area-info {\r\n        margin-bottom: 40px;\r\n        color: #b6b6b6;\r\n    }\r\n\r\n    .text-area-contacts {\r\n        float: left;\r\n        max-width: 50%;\r\n        clear: right;\r\n    }\r\n\r\n    .text-area-panel {\r\n        float: right;\r\n    }\r\n\r\n    .text-area-sender {\r\n        color: #2a80b9;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .text-area-subject {\r\n        color: #4f4f4f;\r\n    }\r\n\r\n    .text-area-letter {\r\n        color: #666666;\r\n    }\r\n\r\n    .text-area-button {\r\n        margin-left: 6px;\r\n    }\r\n\r\n\r\n.text-area-toolbar {\r\n    position: absolute;\r\n    left: -1px;\r\n    right: 0;\r\n    top: 9px;\r\n    border: 1px solid #ebeef3;\r\n    height: 47px;\r\n    background-color: #eef1f7;\r\n\r\n\r\n\r\n\r\n}\r\n\r\n.text-area-toolbar .buttons {\r\n    float: left;\r\n    margin-top: 7px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.text-area-toolbar .buttons img {\r\n\r\n    margin-right: -7px;\r\n}\r\n\r\n        .search-form{\r\n            float: right;\r\n            width:248px;\r\n            height:28px;\r\n            border-radius:15px;\r\n            border:#c9c9c9 solid 1px;\r\n            margin-right: 30px;\r\n            margin-top: 8px;\r\n            background-color: white;\r\n        }\r\n        .focus-active{\r\n            border-color:#aaa !important;\r\n            background:#fff !important;\r\n        }\r\n        .search-form input{\r\n            padding:0;\r\n            margin:0;\r\n            display:block;\r\n            border:none;\r\n            outline:none;\r\n            background:none;\r\n            width:100%;\r\n            height:100%;\r\n        }\r\n        .search-form .form-actions{\r\n            width:28px;\r\n            height:28px;\r\n            float:left;\r\n            background:url(" + __webpack_require__(11) + ") 10px 7px no-repeat;\r\n        }\r\n\r\n        .search-form .form-actions input{\r\n            overflow:hidden;\r\n            text-indent:-9999px;\r\n        }\r\n        .search-form .form-item{\r\n            width:210px;\r\n            padding:0px 5px;\r\n            float:right;\r\n            height:28px;\r\n        }\r\n        .search-form .form-item input{\r\n            color:#222;\r\n            height:auto !important;\r\n            padding:6px 0;\r\n        }\r\n\r\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/search_icon.png";

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nbosenko on 16.05.2016.
	 */
	var _ = __webpack_require__(14);
	var foldersTemplate = __webpack_require__(15);

	function Folders() {}

	Folders.prototype = {
	    render: function () {
	        var t = this;
	        this.getData().then(function (data) {

	            t.createHTML(data.folders);
	        });
	    },

	    getData: function () {

	        var requestResult = $.getJSON('folders.json', function (data) {
	            var foldersData = [];
	            for (var i = 0; i < data.folders.length; i++) {
	                foldersData.push({ title: data.folders[i].title, address: data.folders[i].address });
	            }

	            return foldersData;
	        });

	        return requestResult;
	    },

	    createHTML: function (data) {
	        var tmplFldrs = _.template(foldersTemplate);
	        var resultFldrs = tmplFldrs({ folders: data });
	        $(resultFldrs).prependTo($('.folders'));
	    }
	};

	module.exports = Folders;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "{{ _.forEach(folders, function(folder) { }}\r\n    <div class=\"folders-item\" id=\"\">\r\n      <img src=\"{{= folder.address}}\" alt=\"pic\" class=\"folders-icon\"/>\r\n      <span class=\"folders-name\">{{= folder.title}}</span>\r\n    </div>\r\n{{ }); }}\r\ns";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nbosenko on 17.05.2016.
	 */
	var _ = __webpack_require__(14);
	var labelsTemplate = __webpack_require__(17);

	function Labels() {}

	Labels.prototype = {
	    render: function () {
	        var t = this;
	        this.getData().then(function (data) {

	            t.createHTML(data.labels);
	        });
	    },

	    getData: function () {
	        var requestResult = $.getJSON('labels.json', function (data) {
	            var labelsData = [];
	            for (var i = 0; i < data.labels.length; i++) {
	                labelsData.push({ title: data.labels[i].title, color: data.labels[i].color });
	            }

	            return labelsData;
	        });

	        return requestResult;
	    },

	    createHTML: function (data) {
	        var tmplLbls = _.template(labelsTemplate);
	        var resultLbls = tmplLbls({ labels: data });
	        $(resultLbls).prependTo($('.labels'));
	    }
	};

	module.exports = Labels;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "{{ _.forEach(labels, function(label) { }}\r\n        <div class=\"labels-item clients\">\r\n            <span class=\"labels-name\">{{= label.title}}</span>\r\n            <div class=\"labels-rect {{= label.color}}\"></div>\r\n        </div>\r\n{{ }); }}\r\n\r\n\r\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nbosenko on 17.05.2016.
	 */
	var _ = __webpack_require__(14);
	var $ = __webpack_require__(19);
	var lettersListTemplate = __webpack_require__(20);

	function LetterList() {
	    this._data = null;
	    this.render();
	}

	LetterList.prototype = {
	    render: function () {
	        var t = this;
	        this.getData().then(function (data) {

	            t.createHTML(data);
	        });
	    },
	    getData: function () {
	        var t = this;
	        var deferred = $.Deferred();

	        if (this._data !== null) {

	            deferred.resolve(this._data);
	        }

	        $.getJSON('letters.json').then(function (data) {

	            t._data = data;
	            deferred.resolve(t._data);
	        });

	        return deferred;
	    },
	    createHTML: function (data) {
	        var tmplLetters = _.template(lettersListTemplate);
	        var resultLetters = tmplLetters({ data });
	        $(resultLetters).appendTo($('.inbox-list'));
	    }
	};

	module.exports = LetterList;

	/*var lettersList = {

	    render: function() {
	        var t = this;
	        this.getData().then(function(data){

	            t.createHTML(data);


	        });


	    },

	    getData: function() {
	        var t = this;
	        var deferred = $.Deferred();

	        if(this._data !== null) {

	            deferred.resolve(this._data);
	        }


	        $.getJSON('letters.json').then(function (data) {

	            t._data = data;
	            deferred.resolve(t._data);

	        });

	        return deferred;



	    },

	    createHTML: function(data) {
	        
	        var tmplLetters = _.template(lettersListTemplate);
	        var resultLetters = tmplLetters({data});
	        $(resultLetters).appendTo($('.inbox-list'));
	    },



	    _data: null

	};



	module.exports = lettersList;*/

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "{{ _.forEach(data, function(data, key) { }}\r\n<div class=\"inbox-list-item\" id= \"{{= key}}\">\r\n\r\n    <div class=\"sender-image\">\r\n        <img src=\"" + __webpack_require__(21) + "\"> <!--как быть с этой картинкой?-->\r\n    </div>\r\n\r\n\r\n    <img class=\"star-icon\" src=\"" + __webpack_require__(22) + "\">\r\n    <span class=\"letter-time\">5:43 PM</span>\r\n\r\n    <div class=\"text-block\">\r\n      <span class=\"sender-name\">{{= data.senderName}}</span>\r\n      <span class=\"letter-subject\">{{= data.letterSubj}}</span>\r\n      <span class=\"letter-preview\">{{= data.letterPreview}}</span>\r\n    </div>\r\n\r\n\r\n</div>\r\n{{ }); }}";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/sender_pic.png";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/star_icon.png";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nbosenko on 17.05.2016.
	 */
	var _ = __webpack_require__(14);
	var settingsTemplate = __webpack_require__(24);

	function Settings() {}

	Settings.prototype = {
	    render: function () {

	        var tmplSttngs = _.template(settingsTemplate);
	        var resultSttngs = tmplSttngs({});
	        $(resultSttngs).prependTo($('.settings'));
	    }
	};

	module.exports = Settings;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"settings-item\">\r\n    <img src=\"" + __webpack_require__(25) + "\" alt=\"pic\" class=\"settings-icon\"/>\r\n</div>\r\n<div class=\"settings-item\">\r\n    <img src=\"" + __webpack_require__(26) + "\" alt=\"pic\" class=\"settings-icon\"/>\r\n</div>\r\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/settings.png";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/add.png";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nbosenko on 18.05.2016.
	 */

	var _ = __webpack_require__(14);
	var letterTemplate = __webpack_require__(28);

	function Letter() {}

	Letter.prototype = {
	    render: function (id) {
	        var t = this;

	        this.getData(id).then(function (letterData) {

	            t.createHTML(letterData[id]);
	            $('.inbox-toolbar').css('right', $('.text-area').outerWidth());
	        });
	    },

	    getData: function (id) {

	        var promiseOfLetter = $.getJSON('letters.json').then(function (response) {

	            return response;
	        });

	        //ЗДЕСЬ В ЛЮБОМ СЛУЧАЕ ВЕСЬ ОТВЕТ В ПРОМИС ПОПАДАЕТ
	        return promiseOfLetter;
	    },

	    createHTML: function (data) {

	        var tmplLetter = _.template(letterTemplate);
	        var resultLetter = tmplLetter({ letterData: data });
	        $('.letter-container').remove();
	        $(resultLetter).appendTo($('.text-area'));
	    }
	};

	module.exports = Letter;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"letter-container\">\r\n   <h1 class=\"text-area-subject\">{{= letterData.letterSubj}}</h1>\r\n    <hr>\r\n    <div class=\"text-area-info\">\r\n        <div class=\"text-area-contacts\">\r\n            <img src=\"" + __webpack_require__(29) + "\" class=\"text-area-star\">\r\n            <span class=\"contacts-names\"><span class=\"text-area-sender\">{{= letterData.senderName}}</span> to Kamal Chaneman</span>\r\n        </div>\r\n        <div class=\"text-area-panel\">\r\n            <span class=\"text-area-date\">{{= letterData.arrivalTime}}</span>\r\n            <img class=\"text-area-button reply\" src=\"" + __webpack_require__(30) + "\">\r\n            <img class=\"text-area-button reply-to-all\" src=\"" + __webpack_require__(31) + "\">\r\n            <img class=\"text-area-button forward\" src=\"" + __webpack_require__(32) + "\">\r\n            <img class=\"text-area-button do-more\" src=\"" + __webpack_require__(33) + "\">\r\n        </div>\r\n        <div style=\"clear: both\"></div>\r\n    </div>\r\n    <div class=\"text-area-letter\">\r\n        <p>{{= letterData.letterText}}</p>\r\n    </div>\r\n</div>";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/text_star.png";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/reply.png";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/reply_all.png";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/forward.png";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/panel_dots.png";

/***/ }
/******/ ]);