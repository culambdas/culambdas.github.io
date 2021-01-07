/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkculambdas"] = self["webpackChunkculambdas"] || []).push([["src_Components_Navbar_Navbar_js"],{

/***/ "./src/Components/Navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/Components/Navbar/Navbar.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.css */ \"./src/Components/Navbar/navbar.css\");\n/* harmony import */ var _assets_images_Crest_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/Crest.png */ \"./src/assets/images/Crest.png\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\n\n\n\n\nvar Navbar = function Navbar() {\n  var openNav = function openNav() {\n    document.documentElement.style.overflow = 'hidden'; // firefox, chrome\n\n    document.body.scroll = 'no'; // ie only\n\n    document.getElementById('navOverlay').style.width = '100%';\n  };\n\n  var closeNav = function closeNav() {\n    document.documentElement.style.overflow = 'auto'; // firefox, chrome\n\n    document.body.scroll = 'yes'; // ie only\n\n    document.getElementById('navOverlay').style.width = '0%';\n  };\n\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", {\n    id: \"navbar\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"/\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: _assets_images_Crest_png__WEBPACK_IMPORTED_MODULE_1__.default,\n    alt: \"lfecrest\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"nav-toggle\"\n  }, /*#__PURE__*/React.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__.VscMenu, {\n    onClick: openNav,\n    style: {\n      color: 'white',\n      cursor: 'pointer'\n    }\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"navOverlay\",\n    className: \"nav-menu\"\n  }, /*#__PURE__*/React.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineClose, {\n    className: \"closebtn\",\n    onClick: closeNav\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"nav-menu-content\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"#about\"\n  }, \"About\"), /*#__PURE__*/React.createElement(\"a\", {\n    href: \"active-house\"\n  }, \"Active House\"), /*#__PURE__*/React.createElement(\"a\", {\n    href: \"#experience\"\n  }, \"Roster\"), /*#__PURE__*/React.createElement(\"a\", {\n    href: \"#projects\"\n  }, \"Rush\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack://culambdas/./src/Components/Navbar/Navbar.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/Navbar/navbar.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/Navbar/navbar.css ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#navbar {\\n  width: 100%;\\n  height: 50px;\\n  max-width: 1920px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: fixed;\\n  top: 0;\\n  z-index: 99;\\n  /* background-color: #f5f5f5; */\\n  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -10px;\\n}\\n\\n#navbar img {\\n  margin: 12px 0px 12px 10px;\\n  max-width: 35px;\\n  min-width: 35px;\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.nav-toggle {\\n  margin-left: auto;\\n  padding-right: 10px;\\n  font-size: 25px;\\n}\\n\\n/* The Overlay (background) */\\n.nav-menu {\\n  height: 100%;\\n  width: 0;\\n  position: fixed; /* Stay in place */\\n  z-index: 110; /* Sit on top */\\n  left: 0;\\n  top: 0;\\n  background-color: rgb(0, 0, 0); /* Black fallback color */\\n  background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */\\n  overflow-x: hidden;\\n  overflow-y: hidden;\\n  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */\\n}\\n\\n/* Position the content inside the overlay */\\n.nav-menu-content {\\n  justify-content: center;\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n  position: relative;\\n  top: 25%; /* 25% from the top */\\n  width: 100%; /* 100% width */\\n  text-align: center; /* Centered text/links */\\n  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */\\n}\\n\\n/* The navigation links inside the overlay */\\n.nav-menu a {\\n  padding: 8px;\\n  text-decoration: none;\\n  font-size: 36px;\\n  color: #818181;\\n  display: block; /* Display block instead of inline */\\n  transition: 0.1s; /* Transition effects on hover (color) */\\n}\\n\\n/* When you mouse over the navigation links, change their color */\\n.nav-menu a:hover,\\n.nav-menu a:focus,\\n.nav-menu .closebtn:hover {\\n  color: #253069;\\n  font-weight: 800;\\n  text-decoration: none;\\n  transition: 0.3s;\\n}\\n\\n/* Position the close button (top right corner) */\\n.nav-menu .closebtn {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 45px;\\n  right: 45px;\\n  font-size: 30px;\\n  color: white;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://culambdas/./src/Components/Navbar/navbar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Components/Navbar/navbar.css":
/*!******************************************!*\
  !*** ./src/Components/Navbar/navbar.css ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./navbar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Components/Navbar/navbar.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://culambdas/./src/Components/Navbar/navbar.css?");

/***/ }),

/***/ "./src/assets/images/Crest.png":
/*!*************************************!*\
  !*** ./src/assets/images/Crest.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/a0aa5ed141351db8e8ab9e02102df6d9-Crest.png\");\n\n//# sourceURL=webpack://culambdas/./src/assets/images/Crest.png?");

/***/ })

}]);