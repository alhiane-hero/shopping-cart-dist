"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkshopping_cart"] = self["webpackChunkshopping_cart"] || []).push([["get_products"],{

/***/ "./src/js/get_products.js":
/*!********************************!*\
  !*** ./src/js/get_products.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProducts\": () => (/* binding */ getProducts)\n/* harmony export */ });\nconst json = __webpack_require__(/*! ./data.json */ \"./src/js/data.json\");\n\nfunction getProducts() {\n    return json.items;\n}\n\n//# sourceURL=webpack://shopping_cart/./src/js/get_products.js?");

/***/ }),

/***/ "./src/js/data.json":
/*!**************************!*\
  !*** ./src/js/data.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"items\":[{\"id\":1,\"title\":\"Nike backpak\",\"cate\":\"Backpak\",\"price\":94.99,\"image\":\"img/product-1.jpeg\",\"item_count\":1},{\"id\":2,\"title\":\"Hat for women\",\"cate\":\"HATS\",\"price\":18.99,\"image\":\"img/product-2.jpeg\",\"item_count\":1},{\"id\":3,\"title\":\"Women bag\",\"cate\":\"BAG\",\"price\":45.52,\"image\":\"img/product-3.jpeg\",\"item_count\":1},{\"id\":4,\"title\":\"Wristwatch rolex\",\"cate\":\"wristwatch\",\"price\":98.45,\"image\":\"img/product-4.jpeg\",\"item_count\":1},{\"id\":5,\"title\":\"Sun glasses\",\"cate\":\"glasses\",\"price\":52.59,\"image\":\"img/product-5.jpeg\",\"item_count\":1},{\"id\":6,\"title\":\"Ice cap\",\"cate\":\"CAP\",\"price\":55.58,\"image\":\"img/product-6.jpeg\",\"item_count\":1},{\"id\":7,\"title\":\"Men belt\",\"cate\":\"BELT\",\"price\":45.12,\"image\":\"img/product-7.jpeg\",\"item_count\":1},{\"id\":8,\"title\":\"Men scarf\",\"cate\":\"SCARF\",\"price\":23.45,\"image\":\"img/product-8.jpeg\",\"item_count\":1},{\"id\":9,\"title\":\"Diamond jewelers\",\"cate\":\"JEWELERS\",\"price\":88.49,\"image\":\"img/product-9.jpeg\",\"item_count\":1}]}');\n\n//# sourceURL=webpack://shopping_cart/./src/js/data.json?");

/***/ })

}]);