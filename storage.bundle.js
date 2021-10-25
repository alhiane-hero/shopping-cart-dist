"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkshopping_cart"] = self["webpackChunkshopping_cart"] || []).push([["storage"],{

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProductsToLs\": () => (/* binding */ addProductsToLs),\n/* harmony export */   \"addToItemCountInLs\": () => (/* binding */ addToItemCountInLs),\n/* harmony export */   \"subFromItemCountInLs\": () => (/* binding */ subFromItemCountInLs),\n/* harmony export */   \"removeProductsFromLs\": () => (/* binding */ removeProductsFromLs),\n/* harmony export */   \"getProductsFromLs\": () => (/* binding */ getProductsFromLs)\n/* harmony export */ });\nfunction addProductsToLs(productData) {\n    const lsProducts = getProductsFromLs();\n    localStorage.setItem('product',\n        JSON.stringify([...lsProducts, productData]));\n}\n\nfunction addToItemCountInLs(index) {\n    const lsProducts = getProductsFromLs();\n    lsProducts[index].item_count += 1;\n    localStorage.setItem('product',\n    JSON.stringify([...lsProducts]));\n}\n\nfunction subFromItemCountInLs(index) {\n    const lsProducts = getProductsFromLs();\n    if (lsProducts.length !== 0) {\n        lsProducts[index].item_count -= 1;\n    }\n    localStorage.setItem('product',\n    JSON.stringify([...lsProducts]));\n}\n\nfunction removeProductsFromLs(productData) {\n    const lsProducts = getProductsFromLs();\n    localStorage.setItem('product', JSON.stringify(\n        lsProducts.filter(product => product.id !== productData.id)\n    ));\n}\n\nfunction getProductsFromLs() {\n    const lsProducts = JSON.parse(localStorage.getItem('product'));\n    return localStorage.getItem('product') !== null ? lsProducts : [];\n}\n\n//# sourceURL=webpack://shopping_cart/./src/js/storage.js?");

/***/ })

}]);