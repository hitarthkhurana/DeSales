"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_banana_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/banana.png */ \"(app-pages-browser)/./public/banana.png\");\n/* harmony import */ var _public_apple_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/apple.png */ \"(app-pages-browser)/./public/apple.png\");\n/* harmony import */ var _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/doritos.png */ \"(app-pages-browser)/./public/doritos.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nfunction Home() {\n    const handleClickEvent = ()=>{\n        const customerData = {\n            id: \"123456\",\n            firstName: \"John\",\n            lastName: \"Doe\",\n            email: \"john.doe@example.com\",\n            phone: \"123-456-7890\",\n            address: {\n                street: \"123 Main St\",\n                city: \"Anytown\",\n                state: \"CA\",\n                zip: \"12345\"\n            },\n            orders: [\n                {\n                    orderId: \"78901\",\n                    product: \"Banana\",\n                    quantity: 1,\n                    price: 1.74,\n                    last4Digits: \"4534\",\n                    date: new Date().toISOString()\n                }\n            ]\n        };\n        console.log(\"Checkout completed!\", customerData);\n    };\n    const listOfItems = [\n        {\n            name: \"Banana\",\n            imgName: _public_banana_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            price: 1.74,\n            quantity: 1\n        },\n        {\n            name: \"Apple\",\n            imgName: _public_apple_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            price: 2.7,\n            quantity: 2\n        },\n        {\n            name: \"Doritos\",\n            imgName: _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            price: 3.99,\n            quantity: 4\n        }\n    ];\n    const totalSum = listOfItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n    const tax = totalSum * 0.13;\n    const totalMoney = totalSum + tax;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-info rounded p-3 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fs-2 mb-3\",\n                        children: \"Walmart PoS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"column d-flex flex-column align-items-center mb-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: listOfItems.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            src: item.imgName,\n                                            alt: item.name,\n                                            height: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"fs-4\",\n                                            children: [\n                                                item.quantity,\n                                                \" x \",\n                                                item.name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"fs-5\",\n                                            children: [\n                                                \"$ \",\n                                                item.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, item.name, true, {\n                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"column\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"fw-bold\",\n                                        children: [\n                                            \"Subtotal: $ \",\n                                            totalSum.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"fw-bold\",\n                                        children: [\n                                            \"Tax (13%): $ \",\n                                            tax.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"fw-bold\",\n                                        children: [\n                                            \"Total: $ \",\n                                            totalMoney.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-primary mt-3\",\n                                onClick: handleClickEvent,\n                                children: \"Checkout\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    href: \"/hello-near\",\n                    children: \"Read the APIs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTBDO0FBQ0E7QUFDWDtBQUNjO0FBQ0Y7QUFDSTtBQUNsQjtBQUVkLFNBQVNNO0lBQ3RCLE1BQU1DLG1CQUFtQjtRQUN2QixNQUFNQyxlQUFlO1lBQ25CQyxJQUFJO1lBQ0pDLFdBQVc7WUFDWEMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsU0FBUztnQkFDUEMsUUFBUTtnQkFDUkMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsS0FBSztZQUNQO1lBQ0FDLFFBQVE7Z0JBQ047b0JBQ0VDLFNBQVM7b0JBQ1RDLFNBQVM7b0JBQ1RDLFVBQVU7b0JBQ1ZDLE9BQU87b0JBQ1BDLGFBQWE7b0JBQ2JDLE1BQU0sSUFBSUMsT0FBT0MsV0FBVztnQkFDOUI7YUFFRDtRQUNIO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJyQjtJQUNyQztJQUVBLE1BQU1zQixjQUFjO1FBQ2xCO1lBQ0VDLE1BQU07WUFDTkMsU0FBUzlCLDBEQUFNQTtZQUNmcUIsT0FBTztZQUNQRCxVQUFVO1FBQ1o7UUFDQTtZQUNFUyxNQUFNO1lBQ05DLFNBQVM3Qix5REFBS0E7WUFDZG9CLE9BQU87WUFDUEQsVUFBVTtRQUNaO1FBQ0E7WUFDRVMsTUFBTTtZQUNOQyxTQUFTNUIsMkRBQU9BO1lBQ2hCbUIsT0FBTztZQUNQRCxVQUFVO1FBQ1o7S0FDRDtJQUNELE1BQU1XLFdBQVdILFlBQVlJLE1BQU0sQ0FDakMsQ0FBQ0MsT0FBT0MsT0FBU0QsUUFBUUMsS0FBS2IsS0FBSyxHQUFHYSxLQUFLZCxRQUFRLEVBQ25EO0lBRUYsTUFBTWUsTUFBTUosV0FBVztJQUN2QixNQUFNSyxhQUFhTCxXQUFXSTtJQUU5QixxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN4QywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDdUM7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBWTs7Ozs7O2tDQUMxQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNaVixZQUFZWSxHQUFHLENBQUMsQ0FBQ047Z0NBQ2hCLHFCQUNFLDhEQUFDRzs7c0RBQ0MsOERBQUN0QyxrREFBS0E7NENBQUMwQyxLQUFLUCxLQUFLSixPQUFPOzRDQUFFWSxLQUFLUixLQUFLTCxJQUFJOzRDQUFFYyxRQUFROzs7Ozs7c0RBQ2xELDhEQUFDQzs0Q0FBR04sV0FBVTs7Z0RBQ1hKLEtBQUtkLFFBQVE7Z0RBQUM7Z0RBQUljLEtBQUtMLElBQUk7Ozs7Ozs7c0RBRTlCLDhEQUFDZ0I7NENBQUdQLFdBQVU7O2dEQUFPO2dEQUFHSixLQUFLYixLQUFLOzs7Ozs7OzttQ0FMMUJhLEtBQUtMLElBQUk7Ozs7OzRCQVF2Qjs7Ozs7Ozs7Ozs7a0NBSUosOERBQUNRO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDUTt3Q0FBR1IsV0FBVTs7NENBQVU7NENBQWFQLFNBQVNnQixPQUFPLENBQUM7Ozs7Ozs7a0RBQ3RELDhEQUFDRDt3Q0FBR1IsV0FBVTs7NENBQVU7NENBQWNILElBQUlZLE9BQU8sQ0FBQzs7Ozs7OztrREFDbEQsOERBQUNIO3dDQUFHTixXQUFVOzs0Q0FBVTs0Q0FBVUYsV0FBV1csT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7OzBDQUV2RCw4REFBQ0M7Z0NBQU9WLFdBQVU7Z0NBQXVCVyxTQUFTNUM7MENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3hFLDhEQUFDZ0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNuQyxpREFBSUE7b0JBQUMrQyxNQUFNOzhCQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQztLQTlGd0I5QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBiYW5hbmEgZnJvbSBcIi4uLy4uL3B1YmxpYy9iYW5hbmEucG5nXCI7XG5pbXBvcnQgYXBwbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9hcHBsZS5wbmdcIjtcbmltcG9ydCBkb3JpdG9zIGZyb20gXCIuLi8uLi9wdWJsaWMvZG9yaXRvcy5wbmdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaGFuZGxlQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXN0b21lckRhdGEgPSB7XG4gICAgICBpZDogXCIxMjM0NTZcIixcbiAgICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gICAgICBsYXN0TmFtZTogXCJEb2VcIixcbiAgICAgIGVtYWlsOiBcImpvaG4uZG9lQGV4YW1wbGUuY29tXCIsXG4gICAgICBwaG9uZTogXCIxMjMtNDU2LTc4OTBcIixcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgc3RyZWV0OiBcIjEyMyBNYWluIFN0XCIsXG4gICAgICAgIGNpdHk6IFwiQW55dG93blwiLFxuICAgICAgICBzdGF0ZTogXCJDQVwiLFxuICAgICAgICB6aXA6IFwiMTIzNDVcIixcbiAgICAgIH0sXG4gICAgICBvcmRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG9yZGVySWQ6IFwiNzg5MDFcIixcbiAgICAgICAgICBwcm9kdWN0OiBcIkJhbmFuYVwiLFxuICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgIHByaWNlOiAxLjc0LFxuICAgICAgICAgIGxhc3Q0RGlnaXRzOiBcIjQ1MzRcIixcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICAgIC8vIEFkZCBtb3JlIGl0ZW1zIHRvIHRoZSBvcmRlcnMgYXJyYXkgYXMgbmVlZGVkXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhcIkNoZWNrb3V0IGNvbXBsZXRlZCFcIiwgY3VzdG9tZXJEYXRhKTtcbiAgfTtcblxuICBjb25zdCBsaXN0T2ZJdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkJhbmFuYVwiLFxuICAgICAgaW1nTmFtZTogYmFuYW5hLFxuICAgICAgcHJpY2U6IDEuNzQsXG4gICAgICBxdWFudGl0eTogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwbGVcIixcbiAgICAgIGltZ05hbWU6IGFwcGxlLFxuICAgICAgcHJpY2U6IDIuNyxcbiAgICAgIHF1YW50aXR5OiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJEb3JpdG9zXCIsXG4gICAgICBpbWdOYW1lOiBkb3JpdG9zLFxuICAgICAgcHJpY2U6IDMuOTksXG4gICAgICBxdWFudGl0eTogNCxcbiAgICB9LFxuICBdO1xuICBjb25zdCB0b3RhbFN1bSA9IGxpc3RPZkl0ZW1zLnJlZHVjZShcbiAgICAodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksXG4gICAgMFxuICApO1xuICBjb25zdCB0YXggPSB0b3RhbFN1bSAqIDAuMTM7XG4gIGNvbnN0IHRvdGFsTW9uZXkgPSB0b3RhbFN1bSArIHRheDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNVwiPlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWluZm8gcm91bmRlZCBwLTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZzLTIgbWItM1wiPldhbG1hcnQgUG9TPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICB7bGlzdE9mSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ05hbWV9IGFsdD17aXRlbS5uYW1lfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fSB4IHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZzLTVcIj4kIHtpdGVtLnByaWNlfTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlN1YnRvdGFsOiAkIHt0b3RhbFN1bS50b0ZpeGVkKDIpfTwvaDQ+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlRheCAoMTMlKTogJCB7dGF4LnRvRml4ZWQoMil9PC9oND5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+VG90YWw6ICQge3RvdGFsTW9uZXkudG9GaXhlZCgyKX08L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0V2ZW50fT5cbiAgICAgICAgICAgIENoZWNrb3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTNcIj5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvaGVsbG8tbmVhclwifT5SZWFkIHRoZSBBUElzPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmF2QmFyIiwiSW1hZ2UiLCJiYW5hbmEiLCJhcHBsZSIsImRvcml0b3MiLCJMaW5rIiwiSG9tZSIsImhhbmRsZUNsaWNrRXZlbnQiLCJjdXN0b21lckRhdGEiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJzdHJlZXQiLCJjaXR5Iiwic3RhdGUiLCJ6aXAiLCJvcmRlcnMiLCJvcmRlcklkIiwicHJvZHVjdCIsInF1YW50aXR5IiwicHJpY2UiLCJsYXN0NERpZ2l0cyIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjb25zb2xlIiwibG9nIiwibGlzdE9mSXRlbXMiLCJuYW1lIiwiaW1nTmFtZSIsInRvdGFsU3VtIiwicmVkdWNlIiwidG90YWwiLCJpdGVtIiwidGF4IiwidG90YWxNb25leSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwiaDIiLCJoMyIsImg0IiwidG9GaXhlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});