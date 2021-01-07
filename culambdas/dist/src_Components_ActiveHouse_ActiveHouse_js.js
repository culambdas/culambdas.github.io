/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkculambdas"] = self["webpackChunkculambdas"] || []).push([["src_Components_ActiveHouse_ActiveHouse_js"],{

/***/ "./src/Components/ActiveHouse/ActiveHouse.js":
/*!***************************************************!*\
  !*** ./src/Components/ActiveHouse/ActiveHouse.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _activehouse_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activehouse.css */ \"./src/Components/ActiveHouse/activehouse.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar ActiveHouse = function ActiveHouse() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var changeTab = function changeTab(event) {\n    console.log(event.target.id); // setValue(newValue);\n  };\n\n  return /*#__PURE__*/React.createElement(\"section\", {\n    id: \"active-house\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"active-house-hero\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"active-house-image\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"active-house-image-text\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"Spring 2021 Active House\"))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"active-house-tabs-container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tab-container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    id: \"sp18\",\n    className: \"active\",\n    onClick: changeTab\n  }, \"Spring 2018\"), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"fa18\",\n    className: \"\",\n    onClick: changeTab\n  }, \"Fall 2018\"), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"sp19\",\n    className: \"\",\n    onClick: changeTab\n  }, \"Spring 2019\"), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"fa19\",\n    className: \"\",\n    onClick: changeTab\n  }, \"Fall 2019\"), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"sp20\",\n    className: \"\",\n    onClick: changeTab\n  }, \"Spring 2020\")), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"\",\n    className: \"tab-content active\"\n  }, /*#__PURE__*/React.createElement(\"ul\", null, /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"roster-photo\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: __webpack_require__(/*! ./orion.png */ \"./src/Components/ActiveHouse/orion.png\")\n  }))), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"roster-photo\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: './orion.png'\n  }))), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"roster-photo\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: '../../assets/images/roster-photos/orion.jpeg'\n  }))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveHouse);\n\n//# sourceURL=webpack://culambdas/./src/Components/ActiveHouse/ActiveHouse.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/ActiveHouse/activehouse.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/ActiveHouse/activehouse.css ***!
  \******************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_active_house_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/active-house.jpg */ \"./src/assets/images/active-house.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_active_house_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ACTIVE HOUSE HERO */\\n.active-house-hero {\\n  height: 100vh;\\n}\\n\\n.active-house-image {\\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\n  /* Set a specific height */\\n  height: 100%;\\n\\n  /* Position and center the image to scale nicely on all screens */\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  position: relative;\\n}\\n\\n.active-house-image-text {\\n  text-align: center;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  color: white;\\n  font-size: 3em;\\n}\\n\\n@media screen and (max-width: 1008px) {\\n  .active-house-hero {\\n    height: 70vh;\\n  }\\n  .active-house-image-text {\\n    font-size: 2em;\\n  }\\n}\\n@media screen and (max-width: 512px) {\\n  .active-house-hero {\\n    height: 50vh;\\n  }\\n  .active-house-image-text {\\n    font-size: 1.5em;\\n  }\\n}\\n\\n/* ACTIVE HOUSE TABS */\\n.active-house-tabs-container {\\n  padding: 50px;\\n}\\n\\n.tab-container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n\\n.tab-container div {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100px;\\n  margin: 5px 10px 0px 10px;\\n  padding: 15px 15px;\\n  font-weight: 300;\\n  font-size: 14px;\\n  cursor: pointer;\\n  transition: all 1s ease-in-out;\\n  -webkit-transition: 0.4s linear;\\n  -moz-transition: 0.4s linear;\\n  -o-transition: 0.4s linear;\\n  transition: 0.4s linear;\\n  -webkit-transition-property: background-color, border;\\n  -moz-transition-property: background-color, border;\\n  -o-transition-property: background-color, border;\\n  transition-property: background-color, border;\\n}\\n\\n.tab-container div.active {\\n  border: 3px solid #253069;\\n  font-weight: 700;\\n  color: black;\\n  background-color: white;\\n}\\n\\n.tab-container div:hover {\\n  background: #253069;\\n  font-weight: 700;\\n  color: #fff;\\n}\\n\\n.tab-content {\\n  margin-top: 20px;\\n}\\n\\n.tab-content ul {\\n  display: grid;\\n  grid-template-rows: auto;\\n  grid-template-columns: repeat(auto-fill, minmax(10rem, 20rem));\\n  grid-auto-flow: row;\\n  gap: 1rem;\\n  justify-content: center;\\n  width: 100%;\\n  max-width: 70rem;\\n  margin: auto;\\n  padding: 0 2rem;\\n  list-style: none;\\n}\\n\\n.tab-content ul li {\\n  display: grid;\\n  grid-template-rows: 1fr auto;\\n  overflow: hidden;\\n  width: 100%;\\n  color: white;\\n}\\n\\n.roster-photo {\\n  display: grid;\\n  grid-template-rows: 1fr;\\n  grid-row: 1 / 3;\\n  grid-column: 1;\\n  width: 100%;\\n  cursor: pointer;\\n}\\n\\n.roster-photo img {\\n  display: block;\\n  grid-row: 1;\\n  grid-column: 1;\\n  width: 100%;\\n  height: auto;\\n  filter: grayscale(1);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://culambdas/./src/Components/ActiveHouse/activehouse.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://culambdas/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/Components/ActiveHouse/activehouse.css":
/*!****************************************************!*\
  !*** ./src/Components/ActiveHouse/activehouse.css ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_activehouse_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./activehouse.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Components/ActiveHouse/activehouse.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_activehouse_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_activehouse_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://culambdas/./src/Components/ActiveHouse/activehouse.css?");

/***/ }),

/***/ "./src/Components/ActiveHouse/orion.png":
/*!**********************************************!*\
  !*** ./src/Components/ActiveHouse/orion.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/12d7d3b8d457b02f9b30877d6144c5fb-orion.png\");\n\n//# sourceURL=webpack://culambdas/./src/Components/ActiveHouse/orion.png?");

/***/ }),

/***/ "./src/assets/images/active-house.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/active-house.jpg ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/0afa4e4e4daefaa51f799176d09f14ca-active-house.jpg\");\n\n//# sourceURL=webpack://culambdas/./src/assets/images/active-house.jpg?");

/***/ })

}]);