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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_banana_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/banana.png */ \"(app-pages-browser)/./public/banana.png\");\n/* harmony import */ var _public_apple_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/apple.png */ \"(app-pages-browser)/./public/apple.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n // Add images for other items\n\nfunction Home() {\n    const handleClickEvent = ()=>{\n        const customerData = {\n            id: \"123456\",\n            firstName: \"John\",\n            lastName: \"Doe\",\n            email: \"john.doe@example.com\",\n            phone: \"123-456-7890\",\n            address: {\n                street: \"123 Main St\",\n                city: \"Anytown\",\n                state: \"CA\",\n                zip: \"12345\"\n            },\n            orders: [\n                {\n                    orderId: \"78901\",\n                    product: \"Banana\",\n                    quantity: 1,\n                    price: 1.74,\n                    last4Digits: \"4534\",\n                    date: new Date().toISOString()\n                }\n            ]\n        };\n        console.log(\"Checkout completed!\", customerData);\n    };\n    const listOfItems = [\n        {\n            name: \"Banana\",\n            imgName: _public_banana_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            price: 1.74,\n            quantity: 1\n        },\n        {\n            name: \"Apple\",\n            imgName: _public_apple_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            price: 2.7,\n            quantity: 2\n        }\n    ];\n    const totalSum = listOfItems.forEach((item)=>item.price * item.quantity);\n    const tax = totalSum * 0.13;\n    const totalMoney = totalSum + tax;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-info rounded p-3 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fs-2 mb-3\",\n                        children: \"Walmart PoS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex flex-column align-items-center mb-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: listOfItems.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            src: item.imgName,\n                                            height: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"fs-4\",\n                                            children: [\n                                                item.quantity,\n                                                \" x \",\n                                                item.name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"fs-5\",\n                                            children: [\n                                                \"$ \",\n                                                item.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"my-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"fw-bold\",\n                                children: [\n                                    \"Subtotal: $ \",\n                                    totalSum\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"fw-bold\",\n                                children: [\n                                    \"Tax (13%): $ \",\n                                    tax\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"fw-bold\",\n                                children: [\n                                    \"Total: $ \",\n                                    totalMoney\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary mt-3\",\n                        onClick: handleClickEvent,\n                        children: \"Checkout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    href: \"/hello-near\",\n                    children: \"Read the APIs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMEM7QUFDQTtBQUNYO0FBQ2M7QUFDRixDQUFDLDZCQUE2QjtBQUM1QztBQUVkLFNBQVNLO0lBQ3RCLE1BQU1DLG1CQUFtQjtRQUN2QixNQUFNQyxlQUFlO1lBQ25CQyxJQUFJO1lBQ0pDLFdBQVc7WUFDWEMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsU0FBUztnQkFDUEMsUUFBUTtnQkFDUkMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsS0FBSztZQUNQO1lBQ0FDLFFBQVE7Z0JBQ047b0JBQ0VDLFNBQVM7b0JBQ1RDLFNBQVM7b0JBQ1RDLFVBQVU7b0JBQ1ZDLE9BQU87b0JBQ1BDLGFBQWE7b0JBQ2JDLE1BQU0sSUFBSUMsT0FBT0MsV0FBVztnQkFDOUI7YUFFRDtRQUNIO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJyQjtJQUNyQztJQUVBLE1BQU1zQixjQUFjO1FBQ2xCO1lBQ0VDLE1BQU07WUFDTkMsU0FBUzdCLDBEQUFNQTtZQUNmb0IsT0FBTztZQUNQRCxVQUFVO1FBQ1o7UUFDQTtZQUNFUyxNQUFNO1lBQ05DLFNBQVM1Qix5REFBS0E7WUFDZG1CLE9BQU87WUFDUEQsVUFBVTtRQUNaO0tBQ0Q7SUFDRCxNQUFNVyxXQUFXSCxZQUFZSSxPQUFPLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1osS0FBSyxHQUFHWSxLQUFLYixRQUFRO0lBQ3pFLE1BQU1jLE1BQU1ILFdBQVc7SUFDdkIsTUFBTUksYUFBYUosV0FBV0c7SUFFOUIscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDdEMsMERBQU1BOzs7OzswQkFDUCw4REFBQ3FDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQVk7Ozs7OztrQ0FDMUIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWlQsWUFBWVcsR0FBRyxDQUFDLENBQUNOO2dDQUNoQixxQkFDRSw4REFBQ0c7O3NEQUNDLDhEQUFDcEMsa0RBQUtBOzRDQUFDd0MsS0FBS1AsS0FBS0gsT0FBTzs0Q0FBRVcsUUFBUTs7Ozs7O3NEQUNsQyw4REFBQ0M7NENBQUdMLFdBQVU7O2dEQUNYSixLQUFLYixRQUFRO2dEQUFDO2dEQUFJYSxLQUFLSixJQUFJOzs7Ozs7O3NEQUU5Qiw4REFBQ2M7NENBQUdOLFdBQVU7O2dEQUFPO2dEQUFHSixLQUFLWixLQUFLOzs7Ozs7Ozs7Ozs7OzRCQUd4Qzs7Ozs7Ozs7Ozs7a0NBR0osOERBQUN1Qjt3QkFBR1AsV0FBVTs7Ozs7O2tDQUNkLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFHUixXQUFVOztvQ0FBVTtvQ0FBYU47Ozs7Ozs7MENBQ3JDLDhEQUFDYztnQ0FBR1IsV0FBVTs7b0NBQVU7b0NBQWNIOzs7Ozs7OzBDQUN0Qyw4REFBQ1E7Z0NBQUdMLFdBQVU7O29DQUFVO29DQUFVRjs7Ozs7Ozs7Ozs7OztrQ0FFcEMsOERBQUNXO3dCQUFPVCxXQUFVO3dCQUF1QlUsU0FBUzFDO2tDQUFrQjs7Ozs7Ozs7Ozs7OzBCQUl0RSw4REFBQytCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDbEMsaURBQUlBO29CQUFDNkMsTUFBTTs4QkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkM7S0FuRndCNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYmFuYW5hIGZyb20gXCIuLi8uLi9wdWJsaWMvYmFuYW5hLnBuZ1wiO1xuaW1wb3J0IGFwcGxlIGZyb20gXCIuLi8uLi9wdWJsaWMvYXBwbGUucG5nXCI7IC8vIEFkZCBpbWFnZXMgZm9yIG90aGVyIGl0ZW1zXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VzdG9tZXJEYXRhID0ge1xuICAgICAgaWQ6IFwiMTIzNDU2XCIsXG4gICAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxuICAgICAgbGFzdE5hbWU6IFwiRG9lXCIsXG4gICAgICBlbWFpbDogXCJqb2huLmRvZUBleGFtcGxlLmNvbVwiLFxuICAgICAgcGhvbmU6IFwiMTIzLTQ1Ni03ODkwXCIsXG4gICAgICBhZGRyZXNzOiB7XG4gICAgICAgIHN0cmVldDogXCIxMjMgTWFpbiBTdFwiLFxuICAgICAgICBjaXR5OiBcIkFueXRvd25cIixcbiAgICAgICAgc3RhdGU6IFwiQ0FcIixcbiAgICAgICAgemlwOiBcIjEyMzQ1XCIsXG4gICAgICB9LFxuICAgICAgb3JkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBvcmRlcklkOiBcIjc4OTAxXCIsXG4gICAgICAgICAgcHJvZHVjdDogXCJCYW5hbmFcIixcbiAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICBwcmljZTogMS43NCxcbiAgICAgICAgICBsYXN0NERpZ2l0czogXCI0NTM0XCIsXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgICAvLyBBZGQgbW9yZSBpdGVtcyB0byB0aGUgb3JkZXJzIGFycmF5IGFzIG5lZWRlZFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coXCJDaGVja291dCBjb21wbGV0ZWQhXCIsIGN1c3RvbWVyRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgbGlzdE9mSXRlbXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJCYW5hbmFcIixcbiAgICAgIGltZ05hbWU6IGJhbmFuYSxcbiAgICAgIHByaWNlOiAxLjc0LFxuICAgICAgcXVhbnRpdHk6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkFwcGxlXCIsXG4gICAgICBpbWdOYW1lOiBhcHBsZSxcbiAgICAgIHByaWNlOiAyLjcsXG4gICAgICBxdWFudGl0eTogMixcbiAgICB9LFxuICBdO1xuICBjb25zdCB0b3RhbFN1bSA9IGxpc3RPZkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5KTtcbiAgY29uc3QgdGF4ID0gdG90YWxTdW0gKiAwLjEzO1xuICBjb25zdCB0b3RhbE1vbmV5ID0gdG90YWxTdW0gKyB0YXg7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTVcIj5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1pbmZvIHJvdW5kZWQgcC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmcy0yIG1iLTNcIj5XYWxtYXJ0IFBvUzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICB7bGlzdE9mSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nTmFtZX0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnMtNFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX0geCB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmcy01XCI+JCB7aXRlbS5wcmljZX08L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlN1YnRvdGFsOiAkIHt0b3RhbFN1bX08L2g0PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy1ib2xkXCI+VGF4ICgxMyUpOiAkIHt0YXh9PC9oND5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlRvdGFsOiAkIHt0b3RhbE1vbmV5fTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC0zXCIgb25DbGljaz17aGFuZGxlQ2xpY2tFdmVudH0+XG4gICAgICAgICAgQ2hlY2tvdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtM1wiPlxuICAgICAgICA8TGluayBocmVmPXtcIi9oZWxsby1uZWFyXCJ9PlJlYWQgdGhlIEFQSXM8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJJbWFnZSIsImJhbmFuYSIsImFwcGxlIiwiTGluayIsIkhvbWUiLCJoYW5kbGVDbGlja0V2ZW50IiwiY3VzdG9tZXJEYXRhIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwic3RyZWV0IiwiY2l0eSIsInN0YXRlIiwiemlwIiwib3JkZXJzIiwib3JkZXJJZCIsInByb2R1Y3QiLCJxdWFudGl0eSIsInByaWNlIiwibGFzdDREaWdpdHMiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImxpc3RPZkl0ZW1zIiwibmFtZSIsImltZ05hbWUiLCJ0b3RhbFN1bSIsImZvckVhY2giLCJpdGVtIiwidGF4IiwidG90YWxNb25leSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwic3JjIiwiaGVpZ2h0IiwiaDIiLCJoMyIsImhyIiwiaDQiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});