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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-base-treeview/wi-base-treeview.less":
/*!*******************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-base-treeview/wi-base-treeview.less ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"@keyframes appear {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\nwi-base-treeview {\\n  display: block;\\n  font-size: 13px;\\n  overflow-anchor: none;\\n  overflow-y: auto;\\n  width: 100%;\\n  flex: 1;\\n}\\nwi-base-treeview .wi-treeview-container {\\n  display: block;\\n  background: #fff;\\n  margin: 0 10px;\\n  cursor: pointer;\\n  border-bottom: 1px solid #f4f4f4;\\n  align-items: center;\\n  transition-property: padding, margin;\\n  transition-duration: 0.2s;\\n  line-height: 26px;\\n  display: flex;\\n}\\nwi-base-treeview .wi-treeview-container wi-base-treeview {\\n  margin-left: unset;\\n}\\nwi-base-treeview .wi-treeview-container:hover {\\n  color: #0074c5;\\n  background: #f4f4f4;\\n  padding: 0 6px;\\n  margin: 0;\\n}\\nwi-base-treeview .wi-treeview-container > div {\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  overflow: hidden;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-unit {\\n  overflow: hidden;\\n  flex: 1;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-family {\\n  overflow: hidden;\\n  flex: 2;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content {\\n  padding: 8px 0;\\n  display: flex;\\n  flex: 3;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content .icon-expanded {\\n  width: 25px;\\n  color: #33333369;\\n  text-align: center;\\n  height: 26px;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content .icon-expanded:hover {\\n  color: #0078be41;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content .icon-expanded > i {\\n  text-align: center;\\n  padding-top: 6px;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content > div.item-content {\\n  display: flex;\\n  overflow: hidden;\\n  flex: 1;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content > div.item-content .item-label {\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n  padding-left: 10px;\\n  font-size: 12px;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content > div.item-content .wi-parent-icon {\\n  vertical-align: text-bottom;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content > div.item-content .wi-parent-id {\\n  font-size: 80%;\\n  display: inline-block;\\n  line-height: 1.3em;\\n  padding: 0 3px;\\n  position: relative;\\n  right: 3px;\\n  top: 3px;\\n  border-radius: 2px;\\n  border: 1px solid;\\n  opacity: 0.6;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content > div.item-content .image-bg {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  opacity: 0.4;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content .actions {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  background: #fff;\\n  border-radius: 16px;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-content .actions > wi-button > div > button {\\n  height: 26px;\\n  padding: 4px;\\n  border-radius: 100%;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-choices {\\n  flex: 3;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-choices > select,\\nwi-base-treeview .wi-treeview-container .wi-parent-choices > input {\\n  width: 100%;\\n  height: 36px;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-choices > select:hover,\\nwi-base-treeview .wi-treeview-container .wi-parent-choices > input:hover {\\n  border: 0.5px solid #0077be;\\n}\\nwi-base-treeview .wi-treeview-container .wi-parent-choices > input::-webkit-outer-spin-button,\\nwi-base-treeview .wi-treeview-container .wi-parent-choices > input::-webkit-inner-spin-button {\\n  -webkit-appearance: none;\\n  margin: 0;\\n}\\nwi-base-treeview .wi-treeview-container.item-active {\\n  color: #000;\\n  font-weight: bold;\\n  background: #eeeeee;\\n  border-left: 4px solid #0074c5;\\n  margin: 0;\\n  padding: 0 6px;\\n  display: flex;\\n  align-items: center;\\n  transition: none;\\n}\\nwi-base-treeview .wi-treeview-container.item-unused {\\n  opacity: 0.3;\\n}\\nwi-base-treeview .wi-treeview-container:focus {\\n  box-shadow: none;\\n  outline: 0;\\n}\\nwi-base-treeview .falsy[type=curve] {\\n  color: red;\\n}\\nwi-base-treeview .rootview {\\n  padding-left: 0;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./wi-base-treeview/wi-base-treeview.less?../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-dialog/style.less":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-dialog/style.less ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./wi-dialog/style.less?../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-droppable/style.less":
/*!****************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-droppable/style.less ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"wi-droppable .drag-over {\\n  border: 2px dashed #0077be;\\n  background-color: rgba(209, 209, 209, 0.5);\\n}\\nwi-droppable > div {\\n  float: left;\\n  margin: -2px;\\n  border: 2px dashed transparent;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./wi-droppable/style.less?../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-icons/sprite.less":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-icons/sprite.less ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-login/wi-login.less":
/*!***************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-login/wi-login.less ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".ngdialog svg {\\n  width: 70px;\\n  display: block;\\n  margin: 77px auto 0;\\n}\\n.ngdialog .path {\\n  stroke-dasharray: 1000;\\n  stroke-dashoffset: 0;\\n}\\n.ngdialog .path.circle {\\n  -webkit-animation: dash 0.9s ease-in-out;\\n  animation: dash 0.9s ease-in-out;\\n}\\n.ngdialog .path.line {\\n  stroke-dashoffset: 1000;\\n  -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;\\n  animation: dash 0.9s 0.35s ease-in-out forwards;\\n}\\n.ngdialog .path.check {\\n  stroke-dashoffset: -100;\\n  -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;\\n  animation: dash-check 0.9s 0.35s ease-in-out forwards;\\n}\\n.ngdialog p {\\n  text-align: center;\\n  margin: 20px 0 45px;\\n  font-size: 1.25em;\\n}\\n.ngdialog p.wellcome {\\n  color: #424242;\\n  font-size: 14px;\\n}\\n@-webkit-keyframes dash {\\n  0% {\\n    stroke-dashoffset: 1000;\\n  }\\n  100% {\\n    stroke-dashoffset: 0;\\n  }\\n}\\n@keyframes dash {\\n  0% {\\n    stroke-dashoffset: 1000;\\n  }\\n  100% {\\n    stroke-dashoffset: 0;\\n  }\\n}\\n@-webkit-keyframes dash-check {\\n  0% {\\n    stroke-dashoffset: -100;\\n  }\\n  100% {\\n    stroke-dashoffset: 900;\\n  }\\n}\\n@keyframes dash-check {\\n  0% {\\n    stroke-dashoffset: -100;\\n  }\\n  100% {\\n    stroke-dashoffset: 900;\\n  }\\n}\\n.ngdialog * {\\n  box-sizing: border-box;\\n}\\n.ngdialog *:focus {\\n  outline: none;\\n}\\n.ngdialog .login {\\n  font-family: Arial;\\n  margin: 20px auto;\\n  display: flex;\\n  width: 100%;\\n  justify-content: center;\\n  border-radius: 2px;\\n}\\n.ngdialog .login-screen {\\n  padding: 11px 40px 5px 40px;\\n  flex: 1;\\n}\\n.ngdialog ::placeholder {\\n  color: #c0c0c0;\\n}\\n.ngdialog :-ms-input-placeholder {\\n  color: #c0c0c0;\\n}\\n.ngdialog ::-ms-input-placeholder {\\n  color: #c0c0c0;\\n}\\n.ngdialog .app-title {\\n  text-align: left;\\n  color: #777;\\n  font-weight: bold;\\n  font-size: 20px;\\n  padding-bottom: 10px;\\n}\\n.ngdialog .login-form {\\n  text-align: center;\\n}\\n.ngdialog .control-group {\\n  margin-bottom: 20px;\\n}\\n.ngdialog input {\\n  text-align: left;\\n  color: #0074c5;\\n  background-color: #f2f2f2;\\n  border: 1px solid #ffffff;\\n  border-radius: 70px;\\n  font-size: 14px;\\n  font-weight: bold;\\n  padding: 10px 18px 11px 22px;\\n  width: 100%;\\n  transition: border 0.5s;\\n}\\n.ngdialog input:focus {\\n  border: 1px solid #0074c5;\\n  box-shadow: none;\\n}\\n.ngdialog .btn {\\n  border: 2px solid transparent;\\n  background: #0074c5;\\n  color: #ffffff;\\n  font-size: 14px;\\n  font-weight: bold;\\n  padding: 10px;\\n  text-decoration: none;\\n  text-shadow: none;\\n  border-radius: 70px;\\n  box-shadow: none;\\n  transition: 0.25s;\\n  display: block;\\n  width: 100%;\\n  margin: 0 auto;\\n}\\n.ngdialog .btn:hover {\\n  background-color: #0074c5;\\n  color: #fff;\\n}\\n.ngdialog .btn.focus,\\n.ngdialog .btn:focus,\\n.ngdialog .btn:hover {\\n  color: #fff;\\n  text-decoration: none;\\n}\\n.ngdialog .login-link {\\n  font-size: 12px;\\n  color: #acabab;\\n  display: block;\\n  margin-top: 12px;\\n}\\n.ngdialog .acceptLogout {\\n  display: flex;\\n  align-items: center;\\n  padding: 13px;\\n  justify-content: space-between;\\n}\\n.ngdialog.ngdialog-theme-default .ngdialog-content {\\n  -webkit-animation: ngdialog-flyin 0.3s;\\n  animation: ngdialog-flyin 0.3s;\\n  background: #ffffff;\\n  border-radius: 5px;\\n  color: #444;\\n  font-family: Arial;\\n  font-size: 1.1em;\\n  line-height: 1.5em;\\n  margin: 0 auto;\\n  max-width: 100%;\\n  padding: 1em;\\n  position: relative;\\n  width: 400px;\\n  -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.05), 0 9px 46px 8px rgba(0, 0, 0, 0.02), 0 11px 15px -7px rgba(0, 0, 0, 0.07);\\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.05), 0 9px 46px 8px rgba(0, 0, 0, 0.02), 0 11px 15px -7px rgba(0, 0, 0, 0.07);\\n}\\n.ngdialog-close {\\n  display: none;\\n}\\n.ngdialog.ngdialog-theme-default .ngdialog-button {\\n  padding: 14px 20px !important;\\n  border-radius: 47px;\\n}\\n.ngdialog.ngdialog-theme-default .ngdialog-button.ngdialog-button-primary {\\n  background: #0074c5;\\n  color: #fff;\\n}\\n.ngdialog-overlay {\\n  background: rgba(32, 33, 36, 0.38);\\n  -webkit-backface-visibility: hidden;\\n  -webkit-animation: ngdialog-fadein 0.3s;\\n  animation: ngdialog-fadein 0.3s;\\n}\\nwi-login > div {\\n  position: absolute;\\n  z-index: 4;\\n  right: 14px;\\n  top: 9px;\\n  display: flex;\\n  align-items: center;\\n}\\nwi-login > div > div {\\n  display: flex;\\n  align-items: center;\\n  padding: 3px 5px 3px 9px;\\n  border-radius: 20px;\\n  border: 1px solid white;\\n  background: #fff;\\n  color: #0078be73;\\n  cursor: pointer;\\n}\\nwi-login > div > div span.icon {\\n  padding-left: 10px;\\n  font-size: 130%;\\n}\\nwi-login > div > div.online {\\n  color: #ffffff;\\n  font-weight: bold;\\n  background: none;\\n  font-size: 12px;\\n}\\nwi-login > div > span {\\n  padding: 3px 9px 3px 9px;\\n  margin-left: 10px;\\n  border-radius: 20px;\\n  border: 1px solid white;\\n  color: #0077be;\\n  background: #fff;\\n  font-size: 12px !important;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\nwi-login > div > span.logout {\\n  display: none;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./wi-login/wi-login.less?../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-tree-view/style.less":
/*!****************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-tree-view/style.less ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"wi-tree-view div input {\\n  width: 100%;\\n  line-height: 1.5;\\n  padding: 10px 10px 10px 14px;\\n  border: none;\\n  border-bottom: 1px solid #f0f0f0;\\n  outline: none;\\n  box-sizing: border-box;\\n}\\nwi-tree-view div input::placeholder {\\n  color: #cecece;\\n}\\nwi-tree-node > div {\\n  cursor: default;\\n  padding-left: 19px;\\n}\\nwi-tree-node .node-caret,\\nwi-tree-node .node-label,\\nwi-tree-node .node-icon {\\n  display: flex;\\n  padding-right: 10px;\\n  font-size: 13px;\\n}\\nwi-tree-node .node-caret {\\n  color: #cccbcb;\\n  font-size: 14px;\\n  cursor: pointer;\\n  width: 10px;\\n}\\nwi-tree-node .invisible {\\n  visibility: hidden;\\n}\\nwi-tree-node .node-content {\\n  border-bottom: 1px solid #f0f0f0;\\n  position: relative;\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: center;\\n  transition-property: padding, margin;\\n  transition-duration: 0.2s;\\n}\\nwi-tree-node .node-content,\\nwi-tree-node .node-content::after {\\n  line-height: 2.3em;\\n}\\nwi-tree-node .node-content.search-mode > div {\\n  opacity: 0.2;\\n}\\nwi-tree-node .node-content.search-mode.highlight {\\n  color: #0077be;\\n}\\nwi-tree-node .node-content.search-mode.highlight > div {\\n  opacity: 1;\\n}\\nwi-tree-node .node-content.selected {\\n  background: linear-gradient(to left, #f0f0f0, #fff);\\n}\\nwi-tree-node .node-content.selected::after {\\n  background-color: #0077be;\\n  line-height: 2.3em;\\n}\\nwi-tree-node .node-content::after {\\n  content: \\\"2r\\\";\\n  color: transparent;\\n  display: block;\\n  position: absolute;\\n  top: 0;\\n  width: 4px;\\n}\\nwi-tree-node .node-content::after {\\n  right: 0;\\n}\\nwi-tree-node .node-content:hover {\\n  background: linear-gradient(to left, #f0f0f0, #fff);\\n}\\nwi-tree-node .dragging {\\n  border: none;\\n  background-color: transparent;\\n  z-index: 1;\\n}\\nwi-tree-node .dragging.selected {\\n  background: transparent;\\n}\\nwi-tree-node .dragging.selected::after {\\n  background-color: transparent;\\n  line-height: 2.3em;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./wi-tree-view/style.less?../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./editable/style.css":
/*!*******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./editable/style.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"editable label {\\n    float: left;\\n    margin-right: 15px;\\n}\\n/*editable div.my-content {\\n    float: left;\\n}*/\\neditable div.my-content input {\\n    width: 100%;\\n    background-color: wheat;\\n}\\neditable form {\\n    margin-bottom: 0;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./editable/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./katex-view/style.css":
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./katex-view/style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"katex-view .latex {\\n    display:inline-block;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./katex-view/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./side-bar/side-bar.css":
/*!**********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./side-bar/side-bar.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"side-bar>div {\\n    height: 100%;\\n    width: 0px;\\n    background: #ffffff;\\n    position: relative;\\n}\\nside-bar>div div.content {\\n    overflow-x:hidden;\\n    height: 100%;\\n    /* padding-left: 15px; */\\n}\\nside-bar div.handle {\\n    display: inline-block;\\n    z-index: 89;\\n    position: absolute;\\n    top: 0px;\\n    /*right: 0px;*/\\n    width: 15px;\\n    height: 100%;\\n    cursor: pointer;\\n    background-color: #eee;\\n    opacity: 0.1;\\n}\\n\\nside-bar div.handle:hover {\\n    opacity: 0.5;\\n}\\nside-bar div.handle.full-opacity{\\n    opacity: 1;\\n}\\nside-bar div.icon:hover {\\n    color: #0075c5;\\n}\\n\\nside-bar div.icon {\\n    color: #000;\\n    position: relative;\\n    top: 50%;\\n    text-align: center;\\n    /*font-size: 150%;*/\\n}\\n\\nside-bar .animation-enable {\\n    transition: width 0.3s cubic-bezier(0, 1.04, 1, 1);\\n}\\n\\nside-bar .ui-resizable-handle {\\n    cursor: ew-resize;\\n    width: 4px;\\n    position: absolute;\\n    font-size: 0.1px;\\n    display: block;\\n    -ms-touch-action: none;\\n    touch-action: none;\\n}\\n\\nside-bar .ui-resizable-w {\\n    cursor: ew-resize;\\n    width: 7px;\\n    left: -5px;\\n    top: 0;\\n    height: 100%;\\n}\\nside-bar .ui-resizable-e {\\n    cursor: ew-resize;\\n    width: 7px;\\n    right: -5px;\\n    top: 0;\\n    height: 100%;\\n}\\nside-bar .fix-right {\\n    left: 0px !important;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./side-bar/side-bar.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./wi-table-view/style.css":
/*!************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./wi-table-view/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"wi-table-view div.table {\\n    display:table;\\n    margin-top: 10px;  \\n    border: 1px solid #ccc;\\n    position: relative;\\n    outline: none;\\n}\\nwi-table-view div.header {\\n    background-color: #eee;\\n    font-weight: bold;\\n}\\nwi-table-view div.empty-header {\\n    color: transparent;\\n}\\nwi-table-view div.cell {\\n    display:table-cell;\\n    padding: 3px;\\n    border: 1px solid #ccc;\\n    cursor: default;\\n    position: relative;\\n}\\nwi-table-view div.cell input {\\n    outline:none;\\n    border:none;\\n    box-shadow: none;\\n    color: blue;\\n    position:absolute;\\n    background-color: transparent;\\n}\\nwi-table-view div.row {\\n    display: table-row;\\n}\\nwi-table-view div.indicator {\\n    border: 1px solid blue;\\n    position: absolute;\\n    overflow: visible;\\n    box-sizing: content-box;\\n}\\nwi-table-view div.handle {\\n    border: 2px solid blue;\\n    position: absolute;\\n    width: 1px;\\n    height: 1px;\\n    bottom: -3px;\\n    right: -3px;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./wi-table-view/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/jwt-decode/lib/atob.js":
/*!**********************************************!*\
  !*** ../node_modules/jwt-decode/lib/atob.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The code was extracted from:\n * https://github.com/davidchambers/Base64.js\n */\n\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nfunction InvalidCharacterError(message) {\n  this.message = message;\n}\n\nInvalidCharacterError.prototype = new Error();\nInvalidCharacterError.prototype.name = 'InvalidCharacterError';\n\nfunction polyfill (input) {\n  var str = String(input).replace(/=+$/, '');\n  if (str.length % 4 == 1) {\n    throw new InvalidCharacterError(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n  }\n  for (\n    // initialize result and counters\n    var bc = 0, bs, buffer, idx = 0, output = '';\n    // get next character\n    buffer = str.charAt(idx++);\n    // character found in table? initialize bit storage and add its ascii value;\n    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\n      // and if not first of each 4 characters,\n      // convert the first 8 bits to one ascii character\n      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0\n  ) {\n    // try to find character in table (0-63, not found => -1)\n    buffer = chars.indexOf(buffer);\n  }\n  return output;\n}\n\n\nmodule.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;\n\n\n//# sourceURL=webpack:///../node_modules/jwt-decode/lib/atob.js?");

/***/ }),

/***/ "../node_modules/jwt-decode/lib/base64_url_decode.js":
/*!***********************************************************!*\
  !*** ../node_modules/jwt-decode/lib/base64_url_decode.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var atob = __webpack_require__(/*! ./atob */ \"../node_modules/jwt-decode/lib/atob.js\");\n\nfunction b64DecodeUnicode(str) {\n  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {\n    var code = p.charCodeAt(0).toString(16).toUpperCase();\n    if (code.length < 2) {\n      code = '0' + code;\n    }\n    return '%' + code;\n  }));\n}\n\nmodule.exports = function(str) {\n  var output = str.replace(/-/g, \"+\").replace(/_/g, \"/\");\n  switch (output.length % 4) {\n    case 0:\n      break;\n    case 2:\n      output += \"==\";\n      break;\n    case 3:\n      output += \"=\";\n      break;\n    default:\n      throw \"Illegal base64url string!\";\n  }\n\n  try{\n    return b64DecodeUnicode(output);\n  } catch (err) {\n    return atob(output);\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/jwt-decode/lib/base64_url_decode.js?");

/***/ }),

/***/ "../node_modules/jwt-decode/lib/index.js":
/*!***********************************************!*\
  !*** ../node_modules/jwt-decode/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar base64_url_decode = __webpack_require__(/*! ./base64_url_decode */ \"../node_modules/jwt-decode/lib/base64_url_decode.js\");\n\nfunction InvalidTokenError(message) {\n  this.message = message;\n}\n\nInvalidTokenError.prototype = new Error();\nInvalidTokenError.prototype.name = 'InvalidTokenError';\n\nmodule.exports = function (token,options) {\n  if (typeof token !== 'string') {\n    throw new InvalidTokenError('Invalid token specified');\n  }\n\n  options = options || {};\n  var pos = options.header === true ? 0 : 1;\n  try {\n    return JSON.parse(base64_url_decode(token.split('.')[pos]));\n  } catch (e) {\n    throw new InvalidTokenError('Invalid token specified: ' + e.message);\n  }\n};\n\nmodule.exports.InvalidTokenError = InvalidTokenError;\n\n\n//# sourceURL=webpack:///../node_modules/jwt-decode/lib/index.js?");

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"../node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./editable/index.js":
/*!***************************!*\
  !*** ./editable/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = \"editable\";\nconst componentName = \"editable\";\nmodule.exports.name = moduleName;\n\nvar module = angular.module(moduleName, []);\nmodule.component(componentName, {\n    template: __webpack_require__(/*! ./template.html */ \"./editable/template.html\"),\n    controller: EditableController,\n    style: __webpack_require__(/*! ./style.css */ \"./editable/style.css\"),\n    controllerAs: 'self',\n    bindings:{\n        itemValue: \"<\",\n        setValue: \"<\",\n        itemLabel: \"<\",\n        labelStyle: \"<\",\n        contentStyle: \"<\",\n        enabled: \"<\",\n        params: \"<\"\n    }\n});\n\nfunction EditableController($scope, $element, $timeout) {\n    let self = this;\n    this.$onInit = function() {\n    }\n    this.focusMe = function() {\n        $timeout(() => {$element.find('form input')[0].focus();});\n    }\n    this.unfocusMe = function() {\n        $timeout(() => {$element.find('form input')[0].blur();});\n    }\n    this.getItemValue = function() {\n        if (typeof self.itemValue === 'function') {\n            return self.itemValue(self.params);\n        }\n        return self.itemValue;\n    }\n    this.setItemValue = function(newVal) {\n        if ( typeof self.setValue === 'function') \n            return self.setValue(self.params, newVal);\n        if (typeof self.itemValue != 'function') \n            return self.itemValue = newVal;\n        return;\n    }\n}\n\n\n//# sourceURL=webpack:///./editable/index.js?");

/***/ }),

/***/ "./editable/style.css":
/*!****************************!*\
  !*** ./editable/style.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./editable/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./editable/style.css?");

/***/ }),

/***/ "./editable/template.html":
/*!********************************!*\
  !*** ./editable/template.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<label ng-if=\\\"self.itemLabel\\\" ng-style=\\\"self.labelStyle\\\" ng-bind=\\\"self.itemLabel\\\"></label>\\n<div ng-style=\\\"self.contentStyle\\\" class=\\\"my-content\\\">\\n    <div ng-hide=\\\"editting\\\" ng-bind=\\\"self.getItemValue()\\\" \\n        ng-click=\\\"editting = true && self.enabled; temp = self.getItemValue();self.focusMe();\\\">\\n    </div>\\n    <form ng-show=\\\"editting\\\" ng-submit=\\\"self.unfocusMe()\\\">\\n        <input type=\\\"text\\\" ng-model=\\\"temp\\\" ng-blur=\\\"self.setItemValue(temp); editting = false;\\\">\\n    </form>\\n</div>\\n<div style=\\\"clear:both\\\"></div>\\n\";\n\n//# sourceURL=webpack:///./editable/template.html?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./wi-icons */ \"./wi-icons/index.js\");\nmodule.exports = {\n    editable: __webpack_require__(/*! ./editable */ \"./editable/index.js\"),\n    sideBar : __webpack_require__(/*! ./side-bar/index */ \"./side-bar/index.js\"),\n    wiBaseTreeview : __webpack_require__(/*! ./wi-base-treeview/wi-base-treeview */ \"./wi-base-treeview/wi-base-treeview.js\"),\n    wiLogin: __webpack_require__(/*! ./wi-login/wi-login */ \"./wi-login/wi-login.js\"),\n    wiToken: __webpack_require__(/*! ./wi-token/index */ \"./wi-token/index.js\"),\n    wiSession: __webpack_require__(/*! ./wi-session */ \"./wi-session/index.js\"),\n    katexView: __webpack_require__(/*! ./katex-view */ \"./katex-view/index.js\"),\n    wiTableView: __webpack_require__(/*! ./wi-table-view */ \"./wi-table-view/index.js\"),\n    wiTreeView: __webpack_require__(/*! ./wi-tree-view */ \"./wi-tree-view/index.js\"),\n    wiDroppable: __webpack_require__(/*! ./wi-droppable */ \"./wi-droppable/index.js\"),\n    wiDialog: __webpack_require__(/*! ./wi-dialog */ \"./wi-dialog/index.js\")\n}\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./katex-view/index.js":
/*!*****************************!*\
  !*** ./katex-view/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = \"katexView\";\nconst componentName = \"katexView\";\nmodule.exports.name = moduleName;\n\nvar module = angular.module(moduleName, []);\nmodule.component(componentName, {\n    template: __webpack_require__(/*! ./template.html */ \"./katex-view/template.html\"),\n    controller: KatexViewController,\n    style: __webpack_require__(/*! ./style.css */ \"./katex-view/style.css\"),\n    controllerAs: 'self',\n    bindings:{\n        latexContent: \"<\"\n    }\n});\n\nfunction KatexViewController($scope, $element, $timeout) {\n    let self = this;\n    this.$onInit = function() {\n        $scope.$watch(function() {\n            return self.latexContent;\n        }, showEquation);\n    }\n    function showEquation() {\n        let html = katex.renderToString(self.latexContent,{displayMode: false});\n        $element.find('.latex').empty().append(html);\n    }\n}\n\n\n//# sourceURL=webpack:///./katex-view/index.js?");

/***/ }),

/***/ "./katex-view/style.css":
/*!******************************!*\
  !*** ./katex-view/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./katex-view/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./katex-view/style.css?");

/***/ }),

/***/ "./katex-view/template.html":
/*!**********************************!*\
  !*** ./katex-view/template.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class='latex'></div>\\n\";\n\n//# sourceURL=webpack:///./katex-view/template.html?");

/***/ }),

/***/ "./side-bar/index.js":
/*!***************************!*\
  !*** ./side-bar/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var componentName = 'sideBar';\n\nmodule.exports.name = componentName;\n\n__webpack_require__(/*! ./side-bar.css */ \"./side-bar/side-bar.css\");\n\nvar app = angular.module(componentName, []);\n\napp.component(componentName, {\n    template: __webpack_require__(/*! ./template.html */ \"./side-bar/template.html\"),\n    controller: sideBarController,\n    controllerAs: 'self',\n    bindings: {\n        myDefaultWidth: \"<\",\n        orientation: \"@\",\n        collapsed: \"<\",\n    },\n    transclude: true\n});\n\nfunction sideBarController($element, $timeout, $scope) {\n    let self = this;\n    this.toggle = function (x) {\n        $timeout(function () {\n            self.myWidth = self.myWidth === 15 ? self.myDefaultWidth : 15;\n        });\n    }\n\n    this.$onInit = function () {\n        this.myWidth = this.collapsed ? 15 : this.myDefaultWidth;\n        this.orientation = this.orientation || \"e\";\n        $timeout(function () {\n            $element.find('.side-bar').resizable({\n                handles: self.orientation,\n                animate: false,\n                start: function (event, ui) {\n                    ui.element.removeClass('animation-enable');\n                },\n                stop: function (event, ui) {\n                    self.myWidth = ui.element.width();\n                    ui.element.addClass('animation-enable');\n                }\n            });\n        }, 300);\n    }\n    this.myStyle = function () {\n        switch (this.orientation) {\n            case \"e\":\n                return {\n                    float: 'left',\n                    width: (self.myWidth + 'px')\n                };\n            case \"w\":\n                return {\n                    float: 'right',\n                    width: (self.myWidth + 'px')\n                };\n        }\n    }\n    this.handlePosition = function () {\n        switch (this.orientation) {\n            case \"e\":\n                return {\n                    right: 0\n                };\n            case \"w\":\n                return {\n                    left: 0\n                };\n        }\n    }\n    this.handleOpacityClass = function () {\n        if (this.myWidth > 20) {\n            return \"\";\n        } else {\n            return \"full-opacity\";\n        }\n    }\n}\n\n//# sourceURL=webpack:///./side-bar/index.js?");

/***/ }),

/***/ "./side-bar/side-bar.css":
/*!*******************************!*\
  !*** ./side-bar/side-bar.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./side-bar.css */ \"../node_modules/css-loader/dist/cjs.js!./side-bar/side-bar.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./side-bar/side-bar.css?");

/***/ }),

/***/ "./side-bar/template.html":
/*!********************************!*\
  !*** ./side-bar/template.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"side-bar animation-enable\\\" ng-style=\\\"self.myStyle()\\\"\\n    ng-class=\\\"{'fix-right': self.orientation === 'w'}\\\">\\n    <div class='content' ng-transclude></div>\\n    <div class=\\\"handle {{self.handleOpacityClass()}}\\\" ng-click=\\\"self.toggle();\\\" ng-style=\\\"self.handlePosition()\\\">\\n        <div ng-show=\\\"self.myWidth <= 20\\\" class=\\\"icon\\\">\\n            <i ng-show=\\\"self.orientation === 'e'\\\" class=\\\"fas fa fa-caret-right\\\"></i>\\n            <i ng-show=\\\"self.orientation === 'w'\\\" class=\\\"fas fa fa-caret-left\\\"></i>\\n        </div>\\n        <div ng-hide=\\\"self.myWidth <= 20\\\" class=\\\"icon\\\">\\n            <i ng-show=\\\"self.orientation === 'e'\\\" class=\\\"fas fa fa-caret-left\\\"></i>\\n            <i ng-show=\\\"self.orientation === 'w'\\\" class=\\\"fas fa fa-caret-right\\\"></i>\\n        </div>\\n    </div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./side-bar/template.html?");

/***/ }),

/***/ "./wi-base-treeview/wi-base-treeview.html":
/*!************************************************!*\
  !*** ./wi-base-treeview/wi-base-treeview.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div ng-if=\\\"inited\\\" vs-repeat=\\\"vsRepeatOptions\\\">\\n    <div ng-repeat=\\\"item in wiBaseTreeview.nodes track by $index\\\"\\n        class=\\\"wi-treeview-container {{wiBaseTreeview.isFalsy(item);}}\\\"\\n        ng-class='{\\\"item-active\\\": item.data.selected, \\\"item-unused\\\": item.data.unused}'\\n        type=\\\"{{item.type}}\\\"\\n        data=\\\"{{item.id}}\\\"\\n        ng-click=\\\"!item.data.notClick && wiBaseTreeview.onClick($index, $event, item)\\\"\\n        ng-dblclick=\\\"wiBaseTreeview.onDoubleClick(item)\\\"\\n        wi-right-click=\\\"wiBaseTreeview.onClick($index, $event, item); wiBaseTreeview.showContextMenu($event, $index, item)\\\"\\n        wi-element-ready=\\\"wiBaseTreeview.onReadyFunction();\\\"\\n        ng-hide=\\\"item.data.hide || item.data.forceHide || item.data.deleted\\\"\\n        tabindex=\\\"0\\\">\\n            <div class=\\\"wi-parent-content\\\" ng-style=\\\"item.type==='curve'?wiBaseTreeview.nameStyle:''\\\"\\n                title=\\\"{{item.data.toggle?item.data.label:item.data.tooltip||item.data.label}}\\\">\\n                <div ng-style=\\\"{width: 12 * item.level + 'px'}\\\"></div>\\n                <div class=\\\"icon-expanded\\\"\\n                    ng-click=\\\"wiBaseTreeview.onCollapse(item, $index, $event); $event.stopPropagation();\\\">\\n                    <i aria-hidden=\\\"true\\\" class=\\\"fa\\\"\\n                        ng-class=\\\"\\n                            {'fa-caret-down': item.data.childExpanded,\\n                            'fa-caret-right': !item.data.childExpanded,\\n                            'wi-hidden': item.children == null || item.children.length == 0}\\\"></i>\\n                </div>\\n                <div class=\\\"item-content\\\"\\n                    style=\\\"position: relative;\\\">\\n                    <div class=\\\"display-inline-block margin-right-0_5em\\\" style=\\\"padding-top: 6px;\\\">\\n                        <span class=\\\"{{item.data.icon}}\\\"></span>\\n                        <div ng-if=\\\"wiBaseTreeview.showId && item.id\\\" class='wi-parent-id'>{{item.id}}</div>\\n                    </div>\\n                    <span ng-if=\\\"(wiBaseTreeview.isShowParentName && item.parentData)\\\">{{item.parentData.label}} /</span>\\n                    <span ng-if=\\\"(wiBaseTreeview.isShowParentName && item.parentDataArr)\\\" ng-repeat=\\\"parentData in item.parentDataArr\\\">{{parentData.label}} /&nbsp;</span>\\n                    <span class=\\\"item-label\\\" ng-style=\\\"{'font-weight': item.data.imageBg ? 500 : ''}\\\">{{item.data.toggle?item.data.tooltip:item.data.label}}</span>\\n                    <div class=\\\"pull-right actions\\\" ng-if=\\\"item.actions.length\\\" ng-click=\\\"$event.stopPropagation()\\\">\\n                        <wi-button ng-repeat=\\\"action in item.actions\\\" icon=\\\"{{action.icon}}\\\" handler=\\\"action.handler\\\" label=\\\"{{action.label}}\\\" tooltip=\\\"{{action.tooltip}}\\\"></wi-button>\\n                    </div>\\n                    <div ng-if=\\\"item.data.imageBg\\\" class=\\\"image-bg\\\" ng-style=\\\"{'background-image': item.data.imageBg}\\\">\\n                    </div>\\n                </div>\\n            </div>\\n            <div class=\\\"wi-parent-family\\\" ng-if='item.type==\\\"curve\\\"' ng-style=\\\"wiBaseTreeview.familyStyle\\\">\\n                <span class='display-inline-block' style='text-indent:10px;' title=\\\"{{item.data.familyName}}\\\">{{item.data.familyName}}</span>\\n            </div>\\n            <div class=\\\"wi-parent-unit\\\" ng-if='item.type==\\\"curve\\\"'>\\n                <span class='display-inline-block' style='text-indent:10px;' title=\\\"{{item.data.unit}}\\\">{{item.data.unit}}</span>\\n            </div>\\n            <div class=\\\"wi-parent-choices\\\" ng-if='item.type.includes(\\\"choice\\\")'>\\n                <select ng-model='item.data.value' ng-if='item.data.choices'\\n                ng-options=\\\"choice as choice.name for choice in item.data.choices track by choice.value\\\"></select>\\n                <input type=\\\"number\\\" ng-model=\\\"item.data.value\\\" ng-value=\\\"item.data.value | number: 4\\\"ng-if=\\\"!item.data.choices\\\" step=\\\"any\\\">\\n            </div>\\n    </div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./wi-base-treeview/wi-base-treeview.html?");

/***/ }),

/***/ "./wi-base-treeview/wi-base-treeview.js":
/*!**********************************************!*\
  !*** ./wi-base-treeview/wi-base-treeview.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const componentName = 'wiBaseTreeview';\nconst moduleName = 'wi-base-treeview';\n__webpack_require__(/*! ./wi-base-treeview.less */ \"./wi-base-treeview/wi-base-treeview.less\");\nvar wiToken = __webpack_require__(/*! ../wi-token */ \"./wi-token/index.js\");\nlet app = angular.module(moduleName, [wiToken.name]);\napp.component(componentName, {\n    template: __webpack_require__(/*! ./wi-base-treeview.html */ \"./wi-base-treeview/wi-base-treeview.html\"),\n    controller: WiBaseTreeController,\n    controllerAs: componentName,\n    bindings: {\n        name: '@',\n        container: '<',\n        config: '<',\n        onReadyFunction: '<',\n        onClickFunction: '<',\n        afterClickFunction: '<',\n        showContextMenuFunction: '<',\n        isShowParentName: '<',\n        filter: '@',\n        filterBy: '@',\n        filterKey: '<',\n        filterOptions: '<',\n        filterAll: '<',\n        onSelectFunction: '<',\n        showId: '<',\n        hightlightItemFunc: '<',\n    }\n})\n\nexports.name = moduleName;\n\nconst itemHeight = 42;\nfunction WiBaseTreeController($scope, $element, $timeout, $http, wiToken) {\n    let self = this;\n    const ignoreKeys = ['$$hashKey', 'icon', 'id', 'currentState', 'createdAt', 'createdBy', 'updatedAt', 'updatedBy', 'parentDataArr'];\n\n    function isColor(string) {\n        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(string);\n    }\n\n    function isKeyIgnored(key) {\n        return ignoreKeys.includes(key) || key.includes('_');\n    }\n\n    function getValueArr(object) {\n        if (!object) return [];\n        const valueArr = [];\n        for (const key in object) {\n            if (isKeyIgnored(key)) continue;\n            if (object.hasOwnProperty(key)) {\n                const value = object[key];\n                const valueType = typeof value;\n                if (valueType === 'object') {\n                    if (Array.isArray(value) && value.length > 10) continue;\n                    valueArr.push(...getValueArr(value));\n                } else if ((valueType === 'string' || valueType === 'number') && !isColor(value)) valueArr.push(value);\n            }\n        }\n        return valueArr;\n    }\n\n    function filterLabel(node) {\n        if (self.filterKey) {\n            let valueArr = [];\n            Object.keys(self.filterKey).forEach(key => {\n                if (!self.filterKey[key]) return;\n                switch (key) {\n                    case 'name':\n                        node.data.label && valueArr.push(node.data.label);\n                        break;\n                    case 'wellHeader':\n                        if (node.type === 'well' && node.properties) valueArr.push(..._.without(node.properties.wellheaders.map(wh => wh.value), undefined, null));\n                        break;\n                    case 'family':\n                        if (node.type === 'curve') valueArr.push(_.get(node, 'properties.family.name'));\n                        break;\n                    case 'unit':\n                        if (node.type === 'curve') valueArr.push(_.get(node, 'properties.unit'))\n                        break;\n                    default:\n                        return;\n                }\n            })\n            return valueArr.join(' ').toLowerCase();\n        }\n        if (self.filterAll) return (getValueArr(node.data).join(' ') + getValueArr(node.properties).join(' ')).toLowerCase();\n        return (node.data.toggle ? node.data.tooltip : node.data.label).toLowerCase();\n    }\n\n    function filterType(input) {\n        if (!self.filterBy || !input.type) return true;\n        return self.filterBy.includes(input.type.toLowerCase());\n    }\n\n    function nodesFromConfig(config, level = 0) {\n        const nodes = [];\n        if (!Array.isArray(config)) return nodes;\n        for (const node of config) {\n            if (node.data.hide || node.data.forceHide || node.data.deleted) continue;\n            node.level = level;\n            nodes.push(node);\n            if (node.data.childExpanded && node.children && node.children.length) {\n                nodes.push(...nodesFromConfig(node.children, level + 1));\n            }\n        }\n        return nodes;\n    }\n    this.$onInit = function () {\n        self.name = self.name || 'treeviewController' + Date.now();\n        self.filter = self.filter || '';\n        self.filterOptions = self.filterOptions || {\n            strict: true,\n            keepChildren: true\n        };\n        $timeout(() => {\n            $scope.inited = true\n        }, 100);\n        $scope.vsRepeatOptions = {\n            scrollParent: $element,\n            size: itemHeight,\n        }\n        self.config = self.config || [];\n        if (self.container) self.container[self.name] = self;\n        else {\n            setTimeout(() => {\n                if (self.container) self.container[self.name] = self;\n            });\n        }\n        // if (self.name) wiComponentService.putComponent(self.name, self);\n        $scope.$watch(() => this.filterBy, () => {\n            self.filterFn();\n            self.updateNodes();\n        });\n\n        function backupConfig(newConfig = [], oldConfig = []) {\n            for (let item of newConfig) {\n                const oldItems = oldConfig.filter(i => i.type === item.type && ((!item.id && i.data.label === item.data.label) || (item.id && i.id === item.id)));\n                if (oldItems.length !== 1) continue;\n                const oldItem = oldItems[0];\n                if (oldItem.type === item.type && oldItem.id === item.id) {\n                    item.data.selected = oldItem.data.selected;\n                    item.data.childExpanded = oldItem.data.childExpanded;\n                    item.data.prevExpanded = oldItem.data.prevExpanded;\n                    if (Array.isArray(oldItem.children) && Array.isArray(item.children)) {\n                        backupConfig(item.children, oldItem.children);\n                    }\n                }\n            }\n        }\n        $scope.$watch(() => this.config, function (newConfig = [], oldConfig = []) {\n            backupConfig(newConfig, oldConfig);\n        });\n        $scope.$watchCollection(() => this.config, function () {\n            self.filterFn();\n            self.updateNodes();\n        });\n        $scope.$watch(() => [this.filter, this.filterKey, this.filterOptions], _.debounce(() => {\n            self.filterFn();\n            self.updateNodes();\n        }, 500), true);\n        if (ResizeObserver) {\n            new ResizeObserver(() => setTimeout(() => $element.trigger('scroll'))).observe($element[0]);\n        }\n        const watches = [];\n        $scope.$on('vsRepeatReinitialized', function (event, startIdx, endIdx) {\n            for (const unwatch of watches) unwatch();\n            watches.length = 0;\n            for (let i = startIdx; i <= endIdx; i++) {\n                self.nodes[i] && watches.push(\n                    $scope.$watchCollection(() => _.get(self.nodes[i], `children`), function (cur, old) {\n                        self.updateNodesDebounced();\n                    })\n                );\n            }\n        });\n        self.onReadyFunction && onScroll();\n    };\n    const onReadyFunctionDebounced = _.debounce(function () {\n        $element.find('.wi-treeview-container').each(function () {\n            const draggable = $(this).draggable('instance');\n            draggable && draggable.destroy();\n            const droppable = $(this).droppable('instance');\n            droppable && droppable.destroy();\n        });\n        self.onReadyFunction && self.onReadyFunction();\n    }, 100);\n\n    function onScroll() {\n        $element.on('scroll', onReadyFunctionDebounced);\n    }\n    this.updateNodes = function () {\n        self.nodes = nodesFromConfig(self.config);\n        self.onReadyFunction && onReadyFunctionDebounced();\n        if (!$scope.$root.$$phase) $scope.$digest();\n    }\n    this.updateNodesDebounced = _.debounce(this.updateNodes, 200);\n    let _searching = false;\n\n    function filterF(input) {\n        if (self.filter === undefined) return;\n        let queries = self.filter || '';\n        queries = queries.toLowerCase();\n        let matches = new Array();\n        visit(input, function (_node, _options) {\n            if (_node.type === 'project') return;\n            if (!_searching) _node.data.prevExpanded = _node.data.childExpanded;\n            if (!filterType(_node)) {\n                _node.data.hide = true;\n                return;\n            }\n            if (queries.length === 0) {\n                _node.data.hide = false;\n                if (_searching && typeof _node.data.prevExpanded === 'boolean') _node.data.childExpanded = _node.data.prevExpanded;\n                return;\n            }\n            const nodeStr = filterLabel(_node);\n            let match = false;\n            if (self.filterOptions.strict) match = nodeStr.includes(queries);\n            else {\n                const regex = new RegExp(queries.split('').map(c => c.replace(/([.?*+^$[\\]\\\\(){}|-])/, \"\\\\$1\")).join('.*?'));\n                match = nodeStr.search(regex) > -1;\n            }\n            if (match) {\n                _node.data.hide = false;\n                _options.push(_node);\n            } else _node.data.hide = true;\n            return false;\n        }, matches);\n        if (!matches.length) return;\n        let parents = [];\n        matches.forEach(item => {\n            visit(input, function (_node, _opt) {\n                if (_node == item) {\n                    _opt.path.slice(0, -1).forEach(n => {\n                        if (parents.indexOf(n) < 0) parents.push(n);\n                    })\n                    return true\n                }\n                return false;\n            }, {\n                path: []\n            })\n            // show children\n            if (self.filterOptions.keepChildren) visit(item, (_node) => _node.data.hide = false);\n        })\n        parents.forEach(c => {\n            c.data.hide = false\n            if (!_searching) c.data.prevExpanded = c.data.childExpanded || false;\n            c.data.childExpanded = true;\n        });\n    }\n    this.filterFn = function () {\n        if (self.config && self.config.length) {\n            self.config.forEach((c, i) => {\n                filterF(c);\n            })\n            const queries = self.filter || '';\n            _searching = !!queries.length;\n            if (!$scope.$root.$$phase) $scope.$digest();\n        }\n    }\n\n    this.onCollapse = function (node, $index, $event) {\n        let childSelected = false;\n        visit(node, function (_node) {\n            if (_node.data.selected && _node !== node) {\n                childSelected = true;\n                return true;\n            }\n        });\n        if (childSelected) self.onClick($index, $event, node);\n        if (node.children) {\n            node.data.childExpanded = !node.data.childExpanded;\n            node.data.prevExpanded = node.data.childExpanded;\n            self.updateNodes();\n        }\n    };\n\n    this.addItem = function (parentName, item) {\n        let parentItem = this.getItemByName(parentName);\n\n        if (parentItem) parentItem.children.push(item);\n    };\n\n    this.addItemToFirst = function (parentName, item) {\n        console.log('addItemToFirst self', self);\n        let parentItem = this.getItemByName(parentName);\n        if (parentItem) {\n            parentItem.children.unshift(item);\n        }\n    };\n\n    this.expand = function (node) {\n        node.data.childExpanded = true;\n        for (let child of node.children) {\n            if (child.data.hide) continue;\n            child.data.childExpanded = true;\n        }\n        self.updateNodes();\n    };\n\n    this.collapse = function (node) {\n        node.data.childExpanded = false;\n        for (let child of node.children) {\n            if (child.data.hide) continue;\n            child.data.childExpanded = false;\n        }\n        self.updateNodes();\n    };\n\n    this.expandAll = expandAll;\n\n    function expandAll(children) {\n        if (!children) {\n            return;\n        }\n        for (let child of children) {\n            if (child.data.hide) continue;\n            child.data.childExpanded = true;\n            expandAll(child.children);\n        }\n        self.updateNodes();\n    }\n\n    this.collapseAll = collapseAll;\n\n    function collapseAll(children) {\n        if (!children) {\n            return;\n        }\n        for (let child of children) {\n            if (child.data.hide) continue;\n            child.data.childExpanded = false;\n            child.data.prevExpanded = child.data.childExpanded;\n            collapseAll(child.children);\n        }\n        self.updateNodes();\n    }\n\n    function unselectAllNodes() {\n        self.config.forEach(function (item) {\n            visit(item, function (node) {\n                if (node.data) node.data.selected = false;\n            });\n        });\n    }\n    this.onClick = function ($index, $event, node) {\n        const parentNode = getParentNode(node, self.config);\n        $index = parentNode.children.indexOf(node);\n        self.onSelectFunction && self.onSelectFunction(node);\n        self.onClickFunction && self.onClickFunction($index, $event, node);\n        if (!self.onSelectFunction && !self.onClickFunction) {\n            this.baseClick.apply(this, arguments);\n        }\n        self.afterClickFunction && self.afterClickFunction(node, $index);\n        if (!Array.isArray(node.children) || !node.children.length) {\n            setTimeout(() => {\n                const unwatch = $scope.$watchCollection(() => node.children, function (cur, old) {\n                    self.updateNodesDebounced();\n                    setTimeout(unwatch, 1000);\n                });\n            });\n        }\n        // console.log(\"onClick\");\n    }\n    this.baseClick = function ($index, $event, node) {\n        const selectedNodes = self.getSelectedNodes();\n        const parentNode = getParentNode(node, self.config);\n        node.$index = $index;\n        if (!$event.shiftKey) {\n            if (!$event.ctrlKey\n                || (selectedNodes[0] && node.type != selectedNodes[0].type)\n                || parentNode != getParentNode(selectedNodes[0], self.config)\n            ) {\n                if ($event.type == \"contextmenu\" && selectedNodes.includes(node)) return;\n                unselectAllNodes();\n            }\n            node.data.selected = !node.data.selected;\n        } else {\n            if (!selectedNodes.length) return;\n            if (selectedNodes.includes(node)) return;\n            unselectAllNodes();\n            if (\n                node.type != selectedNodes[0].type ||\n                parentNode != getParentNode(selectedNodes[0], self.config)\n            ) {\n                node.data.selected = true;\n            } else {\n                let fromIndex = Math.min($index, selectedNodes[0].$index);\n                let toIndex = Math.max($index, selectedNodes.slice(-1)[0].$index);\n                for (let i = fromIndex; i <= toIndex; i++) {\n                    if (parentNode.children[i].type === node.type) parentNode.children[i].data.selected = true;\n                }\n            }\n        }\n        // console.log(\"baseClick\");\n    }\n    this.getSelectedNodes = function () {\n        return self.nodes.filter(n => n.data.selected && !n.data.forceHide);\n    }\n\n    this.onDoubleClick = function (selectedNode) {\n        if (selectedNode.handler) {\n            selectedNode.handler();\n            return;\n        }\n        if (selectedNode.children && selectedNode.children.length) {\n            selectedNode.data.childExpanded = !selectedNode.data.childExpanded;\n            self.updateNodes();\n            return;\n        }\n    }\n    this.showContextMenu = function ($event, $index, node) {\n        console.log(node);\n        typeof this.showContextMenuFunction === 'function' && this.showContextMenuFunction.apply(this, arguments);\n    }\n    this.isFalsy = function (item) {\n        if (self.hightlightItemFunc) return self.hightlightItemFunc(item);\n        item.falsy = '';\n    }\n    this.scrollToNode = function ({ type, id }) {\n        let node = null;\n        const paths = getSelectedPath(n => {\n            if (n.type == type && n.id == id) {\n                node = n;\n                return true;\n            }\n        }, self.config);\n        if (!Array.isArray(paths) || !paths.length) return;\n        for (let i = 0; i < paths.length - 1; i++) {\n            paths[i].data.childExpanded = true;\n        }\n        unselectAllNodes();\n        node.data.selected = true;\n        self.updateNodes();\n        const idx = self.nodes.findIndex(n => n === node);\n        $element.animate({ scrollTop: idx * itemHeight });\n    }\n}\n\nfunction visit(node, callback, options = {}) {\n    if (options && options.found) return;\n    if (node.data && node.data.deleted) return;\n    if (options && options.path && options.path.push)\n        options.path.push(node);\n    try {\n        if (callback(node, options)) {\n            if (options) options.found = true\n        }\n    } catch (e) {}\n    if (node.children) {\n        node.children.forEach(function (child) {\n            visit(child, callback, options);\n        });\n    } else if (Array.isArray(node)) {\n        node.forEach(function (child) {\n            visit(child, callback, options);\n        });\n    }\n    if (options && options.path && options.path.pop)\n        options.path.pop();\n}\nconst pseudoParentNode = {\n    children: []\n};\n\nfunction getParentNode(node, rootNode, parentType) {\n    const path = getSelectedPath(node, rootNode);\n    let parentNode = parentType ? path.find(p => p.type === parentType) : path[path.length - 2];\n    if (!parentNode) {\n        if (Array.isArray(rootNode)) parentNode = Object.assign(pseudoParentNode, {\n            children: rootNode\n        });\n        else if (typeof rootNode === 'object') parentNode = rootNode;\n    }\n    return parentNode;\n}\n\nfunction getSelectedPath(foundCB, rootNode) {\n    // const wiComponentService = __GLOBAL.wiComponentService;\n    if (!rootNode) {\n        console.error(\"rootNode invalue\");\n        return;\n    }\n    if (!rootNode) return;\n    let selectedPath = new Array();\n    visit(rootNode, function (node, options) {\n        if (foundCB) {\n            if ((typeof foundCB === 'function' && foundCB(node)) || (typeof foundCB === 'object' && node === foundCB)) {\n                selectedPath = options.path.slice();\n                return true;\n            }\n        } else if (node.data.selected == true) {\n            selectedPath = options.path.slice();\n            return true;\n        }\n        return false;\n    }, {\n        path: new Array()\n    });\n    return selectedPath.filter(n => !Array.isArray(n));\n}\n\n//# sourceURL=webpack:///./wi-base-treeview/wi-base-treeview.js?");

/***/ }),

/***/ "./wi-base-treeview/wi-base-treeview.less":
/*!************************************************!*\
  !*** ./wi-base-treeview/wi-base-treeview.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./wi-base-treeview.less */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-base-treeview/wi-base-treeview.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./wi-base-treeview/wi-base-treeview.less?");

/***/ }),

/***/ "./wi-dialog/index.js":
/*!****************************!*\
  !*** ./wi-dialog/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var componentName = 'wiDialog';\n\nmodule.exports.name = componentName;\n\n__webpack_require__(/*! ./style.less */ \"./wi-dialog/style.less\");\n\nvar app = angular.module(componentName, ['ngDialog']);\n\napp.component(componentName, {\n    template: __webpack_require__(/*! ./template.html */ \"./wi-dialog/template.html\"),\n    controller: wiDialogController,\n    controllerAs: 'self',\n    bindings: {\n        templateId: '@',\n        getlabel: '<',\n        onDoneFn: '<',\n        onCancelFn: '<',\n        onApplyFn: '<'\n    },\n    transclude: true\n});\n\nfunction wiDialogController(ngDialog) {\n   this.$onInit = function(){\n       console.log(\"onInit\");\n\n   }\n   this.onDoneClick = function(){\n       onDoneFn();\n       ngDialog.close();\n   }\n}\n\n//# sourceURL=webpack:///./wi-dialog/index.js?");

/***/ }),

/***/ "./wi-dialog/style.less":
/*!******************************!*\
  !*** ./wi-dialog/style.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./style.less */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-dialog/style.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./wi-dialog/style.less?");

/***/ }),

/***/ "./wi-dialog/template.html":
/*!*********************************!*\
  !*** ./wi-dialog/template.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<script type=\\\"text/ng-template\\\" id='{{self.templateId}}'>\\n    <div>{{self.getlabel}}</div>\\n    <div ng-transclude></div>\\n    <div>\\n        <div ng-if=\\\"self.onDoneFn\\\" ng-click=\\\"self.onDoneClick()\\\">Done</div>\\n        <div ng-if=\\\"self.onCancelFn\\\" ng-click=\\\"self.onCancelClick()\\\">Cancel</div>\\n        <div ng-if=\\\"self.onApplyFn\\\" ng-click=\\\"self.onApplyClick()\\\">Apply</div>\\n    </div>\\n</script>\";\n\n//# sourceURL=webpack:///./wi-dialog/template.html?");

/***/ }),

/***/ "./wi-droppable/index.js":
/*!*******************************!*\
  !*** ./wi-droppable/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var componentName = 'wiDroppable';\nmodule.exports.name = componentName;\n__webpack_require__(/*! ./style.less */ \"./wi-droppable/style.less\");\nvar app = angular.module(componentName, []);\n\napp.component(componentName, {\n    template: __webpack_require__(/*! ./template.html */ \"./wi-droppable/template.html\"),\n    controller: wiDroppableController,\n    controllerAs: 'self',\n    bindings: {\n        onDrop: '<',\n        onOver: '<',\n        onOut: '<',\n        onDeactivate: '<',\n        containerStyle: \"<\"\n    },\n    transclude: true\n});\n\nfunction wiDroppableController($scope, $element) {\n    let self = this;\n    this.$onInit = function () {\n        $element.children().droppable({\n            drop: function (event, ui) {\n                self.onDrop && self.onDrop(event, ui.helper, ui.helper.myData);\n            },\n            over: function (event, ui) {\n                $(this).addClass('drag-over');\n                ui.helper.addClass();\n                self.onOver && self.onOver(event, ui.helper, ui.helper.myData);\n            },\n            out: function (event, ui) {\n                $(this).removeClass('drag-over');\n                self.onOut && self.onOut(event, ui.helper, ui.helper.myData);\n            },\n            deactivate: function (event, ui) {\n                $(this).removeClass('drag-over');\n                self.onDeactivate && self.onDeactivate(event, ui.helper, ui.helper.myData);\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./wi-droppable/index.js?");

/***/ }),

/***/ "./wi-droppable/style.less":
/*!*********************************!*\
  !*** ./wi-droppable/style.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./style.less */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-droppable/style.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./wi-droppable/style.less?");

/***/ }),

/***/ "./wi-droppable/template.html":
/*!************************************!*\
  !*** ./wi-droppable/template.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div ng-transclude ng-style=\\\"self.containerStyle\\\"></div>\\n\";\n\n//# sourceURL=webpack:///./wi-droppable/template.html?");

/***/ }),

/***/ "./wi-icons/index.js":
/*!***************************!*\
  !*** ./wi-icons/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./sprite.less */ \"./wi-icons/sprite.less\");\n\n//# sourceURL=webpack:///./wi-icons/index.js?");

/***/ }),

/***/ "./wi-icons/sprite.less":
/*!******************************!*\
  !*** ./wi-icons/sprite.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./sprite.less */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-icons/sprite.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./wi-icons/sprite.less?");

/***/ }),

/***/ "./wi-login/template.html":
/*!********************************!*\
  !*** ./wi-login/template.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n    <div ng-class=\\\"{'online':self.isLogin()}\\\" ng-click=\\\"self.onLoginClick()\\\">\\n        <span>{{self.getName()}}</span>\\n        <span class=\\\"icon fa fa-user-circle-o\\\"></span>\\n    </div>\\n    <span ng-class=\\\"{'logout':!self.isLogin()}\\\" ng-click=\\\"self.onLoginClick()\\\">Logout</span>\\n</div>\\n\\n<script type=\\\"text/ng-template\\\" id=\\\"templateLogin\\\">\\n    <div class=\\\"login\\\">\\n        <div class=\\\"login-screen\\\">\\n                <div class=\\\"app-title\\\">\\n                    <p>Login to {{self.appName}}</p>\\n                </div>\\n                <div class=\\\"login-form\\\">\\n                    <div class=\\\"control-group\\\">\\n                        <input type=\\\"text\\\" placeholder=\\\"username\\\" ng-model=\\\"self.name\\\">\\n                    </div>\\n    \\n                    <div class=\\\"control-group\\\">\\n                        <input type=\\\"password\\\" placeholder=\\\"password\\\" ng-model=\\\"self.password\\\">\\n                    </div>\\n    \\n                    <a class=\\\"btn\\\" ng-click=\\\"self.getInfor()\\\" href=\\\"#\\\">Login</a>\\n                    <a class=\\\"login-link\\\" target=\\\"_blank\\\" href=\\\"{{self.registerUrl}}\\\">Register now!</a>\\n                </div>\\n        </div>\\n    </div>\\n</script>\\n<script type=\\\"text/ng-template\\\" id=\\\"templateDone\\\">\\n    <div class =\\\"success\\\">\\n            <svg  version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 130.2 130.2\\\">\\n                <circle class=\\\"path circle\\\" fill=\\\"none\\\" stroke=\\\"#00be49\\\" stroke-width=\\\"6\\\" stroke-miterlimit=\\\"10\\\" cx=\\\"65.1\\\" cy=\\\"65.1\\\" r=\\\"62.1\\\"/>\\n                <polyline class=\\\"path check\\\" fill=\\\"none\\\" stroke=\\\"#00be49\\\" stroke-width=\\\"6\\\" stroke-linecap=\\\"round\\\" stroke-miterlimit=\\\"10\\\" points=\\\"100.2,40.2 51.5,88.8 29.8,67.5 \\\"/>\\n            </svg>\\n            <p class=\\\"wellcome\\\">Login successfull!</p>\\n    </div>\\n</script>\\n<script type=\\\"text/ng-template\\\" id=\\\"templateWarningLogout\\\">\\n    <div class=\\\"ngdialog-buttons\\\">\\n            <div class =\\\"acceptLogout\\\">Logout Base Map\\n                <button type=\\\"button\\\" class=\\\"ngdialog-button ngdialog-button-primary\\\" ng-click=\\\"self.acceptLogout()\\\">Logout</button>\\n            </div>\\n    </div>\\n    \\n</script>\\n<script type=\\\"text/ng-template\\\" id=\\\"templateLogout\\\">\\n    <div class =\\\"success\\\">\\n            <svg  version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 130.2 130.2\\\">\\n                <circle class=\\\"path circle\\\" fill=\\\"none\\\" stroke=\\\"#00be49\\\" stroke-width=\\\"6\\\" stroke-miterlimit=\\\"10\\\" cx=\\\"65.1\\\" cy=\\\"65.1\\\" r=\\\"62.1\\\"/>\\n                <polyline class=\\\"path check\\\" fill=\\\"none\\\" stroke=\\\"#00be49\\\" stroke-width=\\\"6\\\" stroke-linecap=\\\"round\\\" stroke-miterlimit=\\\"10\\\" points=\\\"100.2,40.2 51.5,88.8 29.8,67.5 \\\"/>\\n            </svg>\\n            <p class=\\\"wellcome\\\">Logout success!</p>\\n    </div>\\n</script>\";\n\n//# sourceURL=webpack:///./wi-login/template.html?");

/***/ }),

/***/ "./wi-login/wi-login.js":
/*!******************************!*\
  !*** ./wi-login/wi-login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var componentName = 'wiLogin';\nmodule.exports.name = componentName;\n__webpack_require__(/*! ./wi-login.less */ \"./wi-login/wi-login.less\");\nvar wiToken = __webpack_require__(/*! ../wi-token */ \"./wi-token/index.js\");\nvar app = angular.module(componentName, ['ngDialog', wiToken.name]);\n\napp.component(componentName, {\n    template: __webpack_require__(/*! ./template.html */ \"./wi-login/template.html\"),\n    controller: wiLoginController,\n    controllerAs: 'self',\n    bindings: {\n        name: '@',\n        password: '@',\n        whoami: '@',\n        registerUrl: '@',\n        appName: '@'\n    }\n});\n\nfunction wiLoginController($http, $scope, ngDialog, wiToken) {\n    let self = this;\n    this.onLoginClick = function () {\n        if (wiToken.getToken()) {\n            wiToken.setToken(null);\n            this.showDialogWarningLogout();\n        } else {\n            this.showDialogLogin();\n        }\n    }\n    this.showDialogWarningLogout = function () {\n        ngDialog.open({\n            template: 'templateWarningLogout',\n            className: 'ngdialog-theme-default',\n            scope: $scope,\n        });\n    }\n    this.showDialogLogout = function () {\n        ngDialog.open({\n            template: 'templateLogout',\n            className: 'ngdialog-theme-default',\n            scope: $scope,\n        });\n        wiToken.removeToken();\n        setTimeout(function () {\n            ngDialog.close();\n        }, 1200);\n        setTimeout(function () {\n            location.reload();\n        }, 1200);\n    }\n    this.showDialogLogin = function () {\n        ngDialog.open({\n            template: 'templateLogin',\n            className: 'ngdialog-theme-default',\n            scope: $scope,\n        });\n    }\n    this.acceptLogout = function () {\n        this.showDialogLogout();\n    }\n    this.getName = function () {\n        return wiToken.getUserName();\n    }\n    this.isLogin = function () {\n        return wiToken.getToken();\n    }\n    this.getInfor = function () {\n        if (this.name === undefined || this.password === undefined) {\n            console.error(\"error\");\n        } else {\n            $http({\n                method: 'POST',\n                url: 'http://admin.dev.i2g.cloud/login',\n                data: {\n                    username: this.name,\n                    password: this.password,\n                    whoami: self.whoami\n                },\n                headers: {}\n\n            }).then(function (response) {\n                if (response.data.code == 200) {\n                    status = \"online\";\n                    wiToken.setToken(response.data.content.token);\n                    wiToken.saveToken(response.data.content)\n                    ngDialog.close();\n                    ngDialog.open({\n                        template: 'templateDone',\n                        className: 'ngdialog-theme-default',\n                        scope: $scope,\n                    });\n                    setTimeout(function () {\n                        ngDialog.close();\n                    }, 1100);\n                } else if (response.data.code == 512) {\n                    console.error(\"512\");\n                }\n            }, function (errorResponse) {\n                console.error(errorResponse);\n            });\n        }\n    }\n}\n\n//# sourceURL=webpack:///./wi-login/wi-login.js?");

/***/ }),

/***/ "./wi-login/wi-login.less":
/*!********************************!*\
  !*** ./wi-login/wi-login.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./wi-login.less */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-login/wi-login.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./wi-login/wi-login.less?");

/***/ }),

/***/ "./wi-session/index.js":
/*!*****************************!*\
  !*** ./wi-session/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var serviceName = 'wiSession';\nmodule.exports.name = serviceName;\n\nlet app = angular.module(serviceName, []);\napp.factory(serviceName, function () {\n    return new SessionStorageService();\n});\n\nfunction SessionStorageService() {\n    let self = this;\n    this.putData = function(key, value){\n        window.sessionStorage.setItem(key, value);\n    }\n    this.getData = function(key){\n        return window.sessionStorage.getItem(key);\n    }\n}\n\n\n//# sourceURL=webpack:///./wi-session/index.js?");

/***/ }),

/***/ "./wi-table-view/index.js":
/*!********************************!*\
  !*** ./wi-table-view/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const name = \"wiTableView\";\nmodule.exports.name = name;\n\nvar module = angular.module(name, ['editable']);\n\n\nmodule.component(name, {\n    style: __webpack_require__(/*! ./style.css */ \"./wi-table-view/style.css\"),\n    template: __webpack_require__(/*! ./template.html */ \"./wi-table-view/template.html\"),\n    controller: Controller,\n    controllerAs: \"self\",\n    bindings: {\n        headerEditable: \"<\",\n        cellEditable: \"<\",\n        showOriginHeader: \"<\",\n        colHeaders: \"<\",\n        rowHeaders: \"<\",\n        colLabels: \"<\",\n        rowLabels: \"<\",\n        rowCount: \"<\",\n        colCount: \"<\",\n        accessor: \"<\",\n        setter: \"<\"\n    },\n});\n\nfunction Controller($scope, $element) {\n    let self = this;\n    \n    this.$onInit = function() {\n        this.colLabels = this.colLabels || {};\n        this.rowLabels = this.rowLabels || {};\n    }\n    this.getRows = function() {\n        let rowCount = 0;\n        if (typeof self.rowCount === 'function') {\n            rowCount = self.rowCount();\n        }\n        else {\n            rowCount = self.rowCount;\n        }\n        return [...Array(rowCount).keys()];\n    }\n    this.getCols = function(row) {\n        let colCount = 0;\n        try {\n            if (typeof self.colCount === 'function') {\n                colCount = self.colCount(row);\n            }\n            else {\n                colCount = self.colCount;\n            }\n        }\n        catch(e) {\n            return [];\n        }\n        return [...Array(colCount).keys()];\n    }\n    this.getOriginColHeaders = function() {\n        let colHeaders;\n        if (typeof self.colHeaders === 'function') {\n            colHeaders = self.colHeaders();\n        }\n        else {\n            colHeaders = self.colHeaders;\n        }\n        return colHeaders;\n    }\n    this.getColHeader = function(index) {\n        let och = self.getOriginColHeaders()[index];\n        self.colLabels[och] = self.colLabels[och] || och;\n        return self.colLabels[och];\n    }\n    this.setColHeader = function(index, newColHeader) {\n        let originColHeader = self.getOriginColHeaders()[index];\n        self.colLabels[originColHeader] = newColHeader;\n    }\n    this.getOriginRowHeader = function(index) {\n        let rowHeaders;\n        if (!self.rowHeaders) return index + 1;\n        if (typeof self.rowHeaders === 'function') {\n            rowHeaders = self.rowHeaders();\n        }\n        else {\n            rowHeaders = self.rowHeaders;\n        }\n        return rowHeaders[index];\n    }\n    this.getRowHeader = function(index) {\n        let orh = self.getOriginRowHeader(index);\n        self.rowLabels[orh] = self.rowLabels[orh] || orh;\n        return self.rowLabels[orh];\n    }\n    this.setRowHeader = function(index, newRowHeader) {\n        let originRowHeader = self.getOriginRowHeader(index);\n        self.rowLabels[originRowHeader] = newRowHeader;\n    }\n    this.cellClick = function(row, col) {\n        self.selectedRow = row + headerRowCount();\n        self.selectedCol = col + headerColCount();\n    }\n    this.indicatorStyle = function() {\n        let display = 'none';\n        try {\n            if (self.selectedRow !== undefined && self.selectedCol !== undefined) {\n                display = 'block';\n                let row = $element.find('.row')[self.selectedRow];\n                let cell = $(row).find('.cell')[self.selectedCol];\n                return {\n                    display: 'block',\n                    width: cell.clientWidth,\n                    height: cell.clientHeight,\n                    top: cell.offsetTop,\n                    left: cell.offsetLeft \n                }\n            }\n        }\n        catch(e) {\n            console.log(e);\n            display = 'none';\n        }\n        return {display};\n    }\n    this.keyUp = function($event) {\n        if ($event.keyCode == 27) {\n            delete self.selectedRow;\n            delete self.selectedCol;\n        }\n    }\n    function headerRowCount() {\n        return self.colHeaders ? (self.showOriginHeader?2:1):0;\n    }\n    function headerColCount() {\n        return self.showOriginHeader?2:1;\n    }\n}\n\n\n//# sourceURL=webpack:///./wi-table-view/index.js?");

/***/ }),

/***/ "./wi-table-view/style.css":
/*!*********************************!*\
  !*** ./wi-table-view/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./wi-table-view/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./wi-table-view/style.css?");

/***/ }),

/***/ "./wi-table-view/template.html":
/*!*************************************!*\
  !*** ./wi-table-view/template.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div ng-hide=\\\"self.getRows().length === 0 || self.getCols(0).length === 0\\\" class=\\\"table\\\" ng-keyup=\\\"self.keyUp($event)\\\" tabindex=\\\"0\\\"> \\n    <div class=\\\"row header\\\" ng-if=\\\"!!self.colHeaders\\\">\\n        <div class=\\\"cell empty-header\\\">a</div>\\n        <div class=\\\"cell empty-header\\\"\\n            ng-if=\\\"self.showOriginHeader\\\">a</div>\\n        <div class=\\\"cell\\\" ng-repeat=\\\"colHeader in self.getOriginColHeaders()\\\">\\n            <div>{{colHeader}}</div>\\n        </div>\\n    </div>\\n    <div class=\\\"row\\\" ng-if=\\\"self.colHeaders && self.showOriginHeader\\\">\\n        <div class=\\\"cell header empty-header\\\">a</div>\\n        <div class=\\\"cell header\\\">Label</div>\\n        <div class=\\\"cell\\\" ng-repeat=\\\"col in self.getCols()\\\">\\n            <editable params=\\\"$index\\\" item-value=\\\"self.getColHeader($index)\\\" set-value=\\\"self.setColHeader\\\" \\n                    enabled=\\\"self.headerEditable\\\"\\n                    content-style=\\\"{width:'100%',height:'100%'}\\\">\\n            </editable>\\n        </div>\\n    </div>\\n    <div class=\\\"row\\\" ng-repeat=\\\"row in self.getRows()\\\">\\n        <div ng-if=\\\"self.showOriginHeader\\\" class=\\\"cell header\\\">\\n            {{self.getOriginRowHeader($index)}}\\n        </div>\\n        <div class=\\\"cell\\\">\\n            <editable params=\\\"$index\\\" item-value=\\\"self.getRowHeader($index)\\\" set-value=\\\"self.setRowHeader\\\"\\n                enabled=\\\"self.headerEditable\\\"\\n                content-style=\\\"{width:'100%',height:'100%'}\\\">\\n            </editable>\\n        </div>\\n        <div class=\\\"cell\\\" ng-repeat=\\\"col in self.getCols(row)\\\" \\n            ng-click=\\\"self.cellClick(row, col);\\\">\\n            <editable params=\\\"[row, col]\\\" item-value=\\\"self.accessor\\\" set-value=\\\"self.setter\\\"\\n                enabled=\\\"self.cellEditable\\\"\\n                content-style=\\\"{width:'100%',height:'100%'}\\\">\\n            </editable>\\n        </div>\\n    </div>\\n    <div class=\\\"indicator\\\" ng-style=\\\"self.indicatorStyle()\\\">\\n        <div class=\\\"handle\\\"></div>\\n    </div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./wi-table-view/template.html?");

/***/ }),

/***/ "./wi-token/index.js":
/*!***************************!*\
  !*** ./wi-token/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var serviceName = 'wiToken';\n//var jwt = require('jsonwebtoken');\nvar jwt_decode = __webpack_require__(/*! jwt-decode */ \"../node_modules/jwt-decode/lib/index.js\");\nmodule.exports.name = serviceName;\n\nlet app = angular.module(serviceName, []);\napp.factory(serviceName, function () {\n    return new TokenService();\n});\n\nfunction TokenService() {\n    this.token = null;\n    this.setToken = function (tokenVal) {\n        this.token = tokenVal;\n    }\n    this.getUserName = function () {\n        if (this.token === undefined || (localStorage.getItem(\"token\")) === null) {\n            return \"guest\";\n        }\n        return localStorage.getItem(\"username\");\n    }\n    this.getCompany = function () {\n        if (!this.token) {\n            return \"\";\n        }\n        //var decoded = jwt.decode(this.token);\n        var decoded = jwt_decode(this.token);\n        return decoded.company;\n    }\n    this.getToken = function () {\n        if (localStorage.getItem(\"token\")) {\n            return localStorage.getItem(\"token\");\n        }\n        return this.token;\n\n    }\n    this.saveToken = function (tokenVal) {\n        var decoded = jwt_decode(this.token);\n        localStorage.setItem('token', tokenVal.token);\n        localStorage.setItem('refresh_token', tokenVal.refresh_token);\n        localStorage.setItem('username', decoded.username);\n    }\n    this.removeToken = function () {\n        localStorage.clear();\n    }\n}\n\n\n//# sourceURL=webpack:///./wi-token/index.js?");

/***/ }),

/***/ "./wi-tree-view/index.js":
/*!*******************************!*\
  !*** ./wi-tree-view/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var componentName = 'wiTreeView';\nmodule.exports.name = componentName;\n\n__webpack_require__(/*! ./style.less */ \"./wi-tree-view/style.less\");\n\nvar app = angular.module(componentName, []);\napp.component('wiTreeNode', {\n    template: __webpack_require__(/*! ./template-node.html */ \"./wi-tree-view/template-node.html\"),\n    controller: wiTreeNodeController,\n    controllerAs: 'self',\n    bindings: {\n        treeRoot: \"<\",\n        filter: \"<\",\n        getChildren: \"<\",\n        getLabel: \"<\",\n        getIcon: \"<\",\n        keepChildren: \"<\",\n        runMatch: \"<\",\n        clickFn: \"<\",\n        onDragStart: \"<\",\n        onDragStop: \"<\",\n        collapsed: \"<\"\n    },\n    require: {\n        wiTreeView: \"^^wiTreeView\"\n    }\n});\napp.component(componentName, {\n    template: __webpack_require__(/*! ./template.html */ \"./wi-tree-view/template.html\"),\n    controller: wiTreeViewController,\n    controllerAs: 'self',\n    bindings: {\n        treeRoot: \"<\",\n        filter: \"<\",\n        keepChildren: \"<\",\n        getChildren: \"<\",\n        getLabel: \"<\",\n        getIcon: \"<\",\n        runMatch: \"<\",\n        clickFn: \"<\",\n        onDragStart: \"<\",\n        onDragStop: \"<\",\n        selectedIds: \"<\",\n        collapsed: \"<\"\n    },\n    transclude: true\n});\nfunction wiTreeViewController($element, $timeout, $scope) {\n    let self = this;\n    if (!window.wiTreeCtrl)\n        window.wiTreeCtrl = this;\n    this.$onInit = function () {\n        self.collapsed = (self.collapsed == undefined || self.collapsed === null)? true : self.collapsed;\n        this.selectedIds = this.selectedIds || {};\n        console.log(self.treeRoot);\n    }\n    this.collapseAll = function() {\n        $scope.$broadcast('collapsed-command', true);\n    }\n    this.expandAll = function() {\n        $scope.$broadcast('collapsed-command', false);\n    }\n    this.deselectAllExcept = function(scopeId) {\n        $scope.$broadcast('deselect-command', $scope.$id);\n    }\n    this.selectRange = function(scopeId) {\n        let [min, max] = getExtentIds(self.selectedIds);\n        $scope.$broadcast('select-range-command', [Math.min(scopeId, min), Math.max(scopeId, max)]);\n    }\n    function getExtentIds(hash) {\n        let keys = Object.keys(hash).sort();\n        return [keys[0], keys[keys.length-1]];\n    }\n}\nfunction wiTreeNodeController($element, $timeout, $scope) {\n    let self = this;\n    this.showNode = function() {\n        let matched = self.runMatch(self.treeRoot, self.filter);\n        self.filter1 = (matched && self.keepChildren) ? '' : self.filter;\n        return matched;\n    }\n    this.deselect = function() {\n        $timeout(() => {self.selected = false});\n        delete self.wiTreeView.selectedIds[$scope.$id];\n    }\n    this.select = function() {\n        $timeout(() => {self.selected = true});\n        self.wiTreeView.selectedIds[$scope.$id] = {elem:$element.find('.node-content')[0], data:self.treeRoot};\n    }\n    this.$onInit = function () {\n        self.collapsed = (self.collapsed == undefined || self.collapsed === null)? true : self.collapsed;\n        $scope.$on('collapsed-command', function($event, collapsed) {\n            $timeout(() => {self.collapsed = collapsed});\n        });\n        $scope.$on('deselect-command', function($event, id) {\n            if ($scope.$id != id) \n                self.deselect();\n        });\n        $scope.$on('select-range-command', function($event, [startId, stopId]) {\n            if (($scope.$id - startId) * ($scope.$id - stopId) < 0)\n                self.select();\n        })\n\n        $element.find(\".node-content\").draggable({\n            //helper: 'clone',\n            helper: function() {\n                let wrapper = $('<div style=\"border:2px dotted #0077be;\"></div>');\n                \n                //wrapper.append(this.cloneNode(true));\n                Object.values(self.wiTreeView.selectedIds).forEach((item) => {\n                    wrapper.append(wrapper.append(item.elem.cloneNode(true)));\n                });\n                return wrapper;\n            },\n            start: function($event, ui) {\n                ui.helper.addClass('dragging');\n                ui.helper.myData = Object.values(self.wiTreeView.selectedIds).map(item => item.data);\n                self.onDragStart && self.onDragStart(ui.helper.myData);\n            },\n            stop: function($event, ui){\n                self.onDragStop && self.onDragStop(ui.helper.myData);\n            }\n        });\n    }\n    this.toggleChildren = function() {\n        $timeout(() => {self.collapsed = !self.collapsed});\n    }\n    this.setCollapsed = function(collapsed) {\n        $timeout(() => {self.collapsed = collapsed});\n    }\n    this.collapseAll = function() {\n        $scope.$broadcast('collapsed-command', true);\n    }\n    this.expandAll = function() {\n        $scope.$broadcast('collapsed-command', false);\n    }\n    this.onClick = function($event) {\n        $event.preventDefault();\n        if (!$event.metaKey && !$event.ctrlKey && !$event.shiftKey) {\n            self.wiTreeView.deselectAllExcept(self);\n        }\n\n        if ($event.shiftKey) {\n            self.wiTreeView.selectRange($scope.$id);\n        }\n        self.select();\n\n        if (self.clickFn) {\n            self.clickFn($event, self.treeRoot);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./wi-tree-view/index.js?");

/***/ }),

/***/ "./wi-tree-view/style.less":
/*!*********************************!*\
  !*** ./wi-tree-view/style.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./style.less */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./wi-tree-view/style.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./wi-tree-view/style.less?");

/***/ }),

/***/ "./wi-tree-view/template-node.html":
/*!*****************************************!*\
  !*** ./wi-tree-view/template-node.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class='node-content' ng-class=\\\"{\\n    'highlight':self.showNode(), \\n    'search-mode':self.filter.length, \\n    'selected': self.selected}\\\" ng-mousedown=\\\"self.onClick($event)\\\">\\n    <div class=\\\"node-caret\\\" ng-class=\\\"{'invisible': !self.getChildren(self.treeRoot).length}\\\" ng-click=\\\"self.collapsed = !self.collapsed;\\\">\\n        <i ng-hide=\\\"self.collapsed\\\" class=\\\"fa fa-caret-down\\\"></i>\\n        <i ng-show=\\\"self.collapsed\\\" class=\\\"fa fa-caret-right\\\"></i>\\n    </div>\\n    <div class=\\\"node-icon\\\"><i class=\\\"tree-icon {{self.getIcon(self.treeRoot)}}\\\"></i></div>\\n    <div class=\\\"node-label\\\">{{self.getLabel(self.treeRoot)}}</div>\\n</div>\\n<div ng-if=\\\"self.getChildren(self.treeRoot).length\\\" ng-hide=\\\"self.collapsed\\\">\\n    <wi-tree-node ng-repeat=\\\"child in self.getChildren(self.treeRoot)\\\"\\n        tree-root='child'\\n        filter='self.filter1'\\n        keep-children='self.keepChildren'\\n        get-children='self.getChildren'\\n        get-label='self.getLabel'\\n        get-icon='self.getIcon'\\n        click-fn=\\\"self.clickFn\\\"\\n        on-drag-start='self.onDragStart'\\n        on-drag-stop='self.onDragStop'\\n        run-match=\\\"self.runMatch\\\">\\n    </wi-tree-node>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./wi-tree-view/template-node.html?");

/***/ }),

/***/ "./wi-tree-view/template.html":
/*!************************************!*\
  !*** ./wi-tree-view/template.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div style=\\\"display:flex;flex-direction:column;width:100%;height:100%;\\\">\\n    <div ng-transclude></div>\\n    <div>\\n        <input type=\\\"text\\\" ng-model=\\\"self.filter\\\" placeholder=\\\"Search\\\">\\n    </div>\\n    <div style=\\\"flex:1;overflow-y: auto;\\\">\\n        <wi-tree-node ng-repeat=\\\"child in self.treeRoot\\\"\\n            tree-root='child'\\n            filter='self.filter'\\n            get-children='self.getChildren'\\n            get-label='self.getLabel'\\n            get-icon='self.getIcon'\\n            keep-children='self.keepChildren'\\n            click-fn='self.clickFn'\\n            on-drag-start='self.onDragStart'\\n            on-drag-stop='self.onDragStop'\\n            run-match='self.runMatch'>\\n        </wi-tree-node>\\n    </div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./wi-tree-view/template.html?");

/***/ })

/******/ });