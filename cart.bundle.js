/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCartItem\": () => (/* binding */ createCartItem)\n/* harmony export */ });\n// import modules:\nconst hideCartFunc = () =>\n    __webpack_require__.e(/*! import() | utilities */ \"utilities\").then(__webpack_require__.bind(__webpack_require__, /*! ./utilities.js */ \"./src/js/utilities.js\"));\nconst showCartItemsFunc = () => \n    __webpack_require__.e(/*! import() | utilities */ \"utilities\").then(__webpack_require__.bind(__webpack_require__, /*! ./utilities.js */ \"./src/js/utilities.js\"));\nconst NumberOfItemsFunc = () => \n    __webpack_require__.e(/*! import() | utilities */ \"utilities\").then(__webpack_require__.bind(__webpack_require__, /*! ./utilities.js */ \"./src/js/utilities.js\"));\nconst totalPriceFunc = () => \n    __webpack_require__.e(/*! import() | utilities */ \"utilities\").then(__webpack_require__.bind(__webpack_require__, /*! ./utilities.js */ \"./src/js/utilities.js\"));\nconst removeProductsFromLsFunc = () => \n    __webpack_require__.e(/*! import() | storage */ \"storage\").then(__webpack_require__.bind(__webpack_require__, /*! ./storage.js */ \"./src/js/storage.js\"));\nconst addToItemCountInLsFunc = () => \n    __webpack_require__.e(/*! import() | storage */ \"storage\").then(__webpack_require__.bind(__webpack_require__, /*! ./storage.js */ \"./src/js/storage.js\"));\nconst subFromItemCountInLsFunc = () => \n    __webpack_require__.e(/*! import() | storage */ \"storage\").then(__webpack_require__.bind(__webpack_require__, /*! ./storage.js */ \"./src/js/storage.js\"));\n\n// dom elements:\nconst cart_items = document.getElementById('cart_items');\nconst overlayEl = document.getElementById('cart_overlay');\nconst cartEl = document.getElementById('cart');\nconst close_cart_icon = document.getElementById('close_cart_icon');\nconst navbar_cart_temp = document.querySelector('.navbar-cart_temp');\nconst total_price_el = document.getElementById('total_price_el');\n\n// create cart item:\nfunction createCartItem(productData, index) {\n    const cart_item = document.createElement('div');\n    cart_item.className = 'cart_item _row';\n    const {image, title, price, item_count} = productData;\n    const itemStr = `\n        <div class=\"cart_info d-flex align-items-center\">\n            <div class=\"cart_item_img\">\n                <img class='img-fluid'\n                    src=${image}\n                    alt=${title}>\n            </div>\n            <div class=\"cart_item_text\">\n                <h3 class=\"item_title\">${title}</h3>\n                <span class=\"item_price\">$${price}</span>\n                <button class=\"remove_item_btn\">remove</button>\n            </div>\n        </div>\n        <div class=\"cart_count\">\n            <div class=\"arrow arrow_up\">\n                <img src=\"img/chevron-up-icon.svg\" alt=\"chevron up icon\">\n            </div>\n            <p class=\"item_count\">${item_count}</p>\n            <div class=\"arrow arrow_down\">\n                <img src=\"img/chevron-down-icon.svg\" alt=\"chevron down icon\">\n            </div>\n        </div>\n    `;\n    cart_item.innerHTML = itemStr;\n\n    const remove_item_btn = cart_item.querySelector('.remove_item_btn');\n    remove_item_btn.addEventListener('click', _ => {\n        removeProductsFromLsFunc().then(({removeProductsFromLs}) => {\n            removeProductsFromLs(productData);\n            NumberOfItemsFunc().then(({NumberOfItems}) => {\n                NumberOfItems(navbar_cart_temp);\n            });\n            totalPriceFunc().then(({totalPrice}) => {\n                totalPrice(total_price_el);\n            });\n            showCartItemsFunc().then(({showCartItems}) => {\n                showCartItems();\n            });\n        });\n    });\n\n    const cart_count_btns = cart_item.querySelectorAll('.arrow');\n    cart_count_btns.forEach(arrow => {\n        arrow.addEventListener('click', _ => {\n            if (arrow.classList.contains('arrow_up')) {\n                addToItemCountInLsFunc().then(({addToItemCountInLs}) => {\n                    addToItemCountInLs(index);\n                });\n                showCartItemsFunc().then(({showCartItems}) => {\n                    showCartItems();\n                }); \n            } \n            else {\n                if (productData.item_count === 1) {\n                    removeProductsFromLsFunc().then(({removeProductsFromLs}) => {\n                        removeProductsFromLs(productData);\n                    });\n                    showCartItemsFunc().then(({showCartItems}) => {\n                        showCartItems();\n                    });\n                    // reset price and item_count:\n                    navbar_cart_temp.innerHTML = `Cart( ${0} )`;\n                    total_price_el.innerHTML = `$00.00`;\n                    hideCartFunc().then(({hideCart}) => {\n                        hideCart(overlayEl, cartEl);\n                    });\n                } else {\n                    subFromItemCountInLsFunc().then(({subFromItemCountInLs}) => {\n                        subFromItemCountInLs(index);\n                    });\n                    showCartItemsFunc().then(({showCartItems}) => {\n                        showCartItems();\n                    });\n                }\n            }\n        }); \n    });\n\n    NumberOfItemsFunc().then(({NumberOfItems}) => {\n        NumberOfItems(navbar_cart_temp);\n    });\n\n    totalPriceFunc().then(({totalPrice}) => {\n        totalPrice(total_price_el);\n    });\n\n    cart_items.appendChild(cart_item);\n}\n\n// close products cart:\nclose_cart_icon.addEventListener('click', _ => {\n    hideCartFunc().then(({hideCart}) => {\n        hideCart(overlayEl, cartEl);\n    });\n});\n\ndocument.body.addEventListener('click', event => {\n    if (event.target.classList.contains('cart_overlay')\n    || event.target.classList.contains('remove_item_btn')) {\n        hideCartFunc().then(({hideCart}) => {\n            hideCart(overlayEl, cartEl);\n        });\n    }\n});\n\n//# sourceURL=webpack://shopping_cart/./src/js/cart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "shopping_cart:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"cart": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkshopping_cart"] = self["webpackChunkshopping_cart"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/cart.js");
/******/ 	
/******/ })()
;