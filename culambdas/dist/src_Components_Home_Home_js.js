/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkculambdas"] = self["webpackChunkculambdas"] || []).push([["src_Components_Home_Home_js"],{

/***/ "./src/Components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/Components/Home/Home.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ \"./src/Components/Home/home.css\");\n/* harmony import */ var _assets_images_smoke_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/smoke.mp4 */ \"./src/assets/images/smoke.mp4\");\n/* harmony import */ var _assets_images_smoke_mp4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_smoke_mp4__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/React.createElement(\"section\", null, /*#__PURE__*/React.createElement(\"video\", {\n    className: \"hero\",\n    autoPlay: true,\n    loop: true,\n    muted: true\n  }, /*#__PURE__*/React.createElement(\"source\", {\n    src: (_assets_images_smoke_mp4__WEBPACK_IMPORTED_MODULE_1___default()),\n    type: \"video/mp4\"\n  })), /*#__PURE__*/React.createElement(\"span\", {\n    className: \"lfe-splash-text fade-in\"\n  }, \"\\u039B \\u03A6 \\u0395\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack://culambdas/./src/Components/Home/Home.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/Home/home.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/Home/home.css ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".hero {\\n  object-fit: cover;\\n  width: 100vw;\\n  height: 100vh;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.lfe-splash-text {\\n  position: absolute;\\n  color: white;\\n  font-family: 'Times New Roman', Times, serif;\\n  font-size: 8em;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.fade-in {\\n  animation: fadeIn ease 10s;\\n  -webkit-animation: fadeIn ease 10s;\\n  -moz-animation: fadeIn ease 10s;\\n  -o-animation: fadeIn ease 10s;\\n  -ms-animation: fadeIn ease 10s;\\n}\\n@keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\\n@-moz-keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\\n@-webkit-keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\\n@-o-keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\\n@-ms-keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://culambdas/./src/Components/Home/home.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Components/Home/home.css":
/*!**************************************!*\
  !*** ./src/Components/Home/home.css ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Components/Home/home.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://culambdas/./src/Components/Home/home.css?");

/***/ }),

/***/ "./src/assets/images/smoke.mp4":
/*!*************************************!*\
  !*** ./src/assets/images/smoke.mp4 ***!
  \*************************************/
/***/ (function() {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://culambdas/./src/assets/images/smoke.mp4?");

/***/ })

}]);