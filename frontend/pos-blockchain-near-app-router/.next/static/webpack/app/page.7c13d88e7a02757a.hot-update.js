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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_banana_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/banana.png */ \"(app-pages-browser)/./public/banana.png\");\n/* harmony import */ var _public_apple_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/apple.png */ \"(app-pages-browser)/./public/apple.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n // Add images for other items\n\nfunction Home() {\n    const handleClickEvent = ()=>{\n        const customerData = {\n            id: \"123456\",\n            firstName: \"John\",\n            lastName: \"Doe\",\n            email: \"john.doe@example.com\",\n            phone: \"123-456-7890\",\n            address: {\n                street: \"123 Main St\",\n                city: \"Anytown\",\n                state: \"CA\",\n                zip: \"12345\"\n            },\n            orders: [\n                {\n                    orderId: \"78901\",\n                    product: \"Banana\",\n                    quantity: 1,\n                    price: 1.74,\n                    last4Digits: \"4534\",\n                    date: new Date().toISOString()\n                }\n            ]\n        };\n        console.log(\"Checkout completed!\", customerData);\n    };\n    const listOfItems = [\n        {\n            name: \"Banana\",\n            imgName: _public_banana_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            price: 1.74\n        },\n        {\n            name: \"Apple\",\n            imgName: _public_apple_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            price: 3.0\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-info rounded p-3 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fs-2 mb-3\",\n                        children: \"Walmart PoS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex flex-column align-items-center mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    listOfItems.map((item)=>{\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    src: item.imgName,\n                                                    height: 100\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"fs-4\",\n                                                    children: \"1 x item.name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"fs-5\",\n                                                    children: \"$ 1.74\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, this);\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        src: _public_banana_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                        alt: \"Banana\",\n                                        height: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"fs-4\",\n                                        children: \"1 x Banana\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"fs-5\",\n                                        children: \"$ 1.74\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        src: _public_apple_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"Apple\",\n                                        height: 100\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"fs-4\",\n                                        children: \"2 x Apple\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"fs-5\",\n                                        children: \"$ 3.00\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"my-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"fw-bold\",\n                                children: \"Subtotal: $ 4.74\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"fw-bold\",\n                                children: \"Tax (13%): $ 0.38\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"fw-bold\",\n                                children: \"Total: $ 5.12\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary mt-3\",\n                        onClick: handleClickEvent,\n                        children: \"Checkout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    href: \"/hello-near\",\n                    children: \"Read the APIs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMEM7QUFDQTtBQUNYO0FBQ2M7QUFDRixDQUFDLDZCQUE2QjtBQUM1QztBQUVkLFNBQVNLO0lBQ3RCLE1BQU1DLG1CQUFtQjtRQUN2QixNQUFNQyxlQUFlO1lBQ25CQyxJQUFJO1lBQ0pDLFdBQVc7WUFDWEMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsU0FBUztnQkFDUEMsUUFBUTtnQkFDUkMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsS0FBSztZQUNQO1lBQ0FDLFFBQVE7Z0JBQ047b0JBQ0VDLFNBQVM7b0JBQ1RDLFNBQVM7b0JBQ1RDLFVBQVU7b0JBQ1ZDLE9BQU87b0JBQ1BDLGFBQWE7b0JBQ2JDLE1BQU0sSUFBSUMsT0FBT0MsV0FBVztnQkFDOUI7YUFFRDtRQUNIO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJyQjtJQUNyQztJQUVBLE1BQU1zQixjQUFjO1FBQ2xCO1lBQ0VDLE1BQU07WUFDTkMsU0FBUzdCLDBEQUFNQTtZQUNmb0IsT0FBTztRQUNUO1FBQ0E7WUFDRVEsTUFBTTtZQUNOQyxTQUFTNUIseURBQUtBO1lBQ2RtQixPQUFPO1FBQ1Q7S0FDRDtJQUVELHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2pDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNnQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFZOzs7Ozs7a0NBQzFCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztvQ0FDWkosWUFBWU0sR0FBRyxDQUFDLENBQUNDO3NEQUNoQiw4REFBQ0o7OzhEQUNDLDhEQUFDL0Isa0RBQUtBO29EQUFDb0MsS0FBS0QsS0FBS0wsT0FBTztvREFBRU8sUUFBUTs7Ozs7OzhEQUNsQyw4REFBQ0M7b0RBQUdOLFdBQVU7OERBQU87Ozs7Ozs4REFDckIsOERBQUNPO29EQUFHUCxXQUFVOzhEQUFPOzs7Ozs7Ozs7Ozs7b0NBRXpCO2tEQUNBLDhEQUFDaEMsa0RBQUtBO3dDQUFDb0MsS0FBS25DLDBEQUFNQTt3Q0FBRXVDLEtBQUk7d0NBQVNILFFBQVE7Ozs7OztrREFDekMsOERBQUNDO3dDQUFHTixXQUFVO2tEQUFPOzs7Ozs7a0RBQ3JCLDhEQUFDTzt3Q0FBR1AsV0FBVTtrREFBTzs7Ozs7Ozs7Ozs7OzBDQUV2Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDaEMsa0RBQUtBO3dDQUFDb0MsS0FBS2xDLHlEQUFLQTt3Q0FBRXNDLEtBQUk7d0NBQVFILFFBQVE7Ozs7OztrREFDdkMsOERBQUNDO3dDQUFHTixXQUFVO2tEQUFPOzs7Ozs7a0RBQ3JCLDhEQUFDTzt3Q0FBR1AsV0FBVTtrREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl6Qiw4REFBQ1M7d0JBQUdULFdBQVU7Ozs7OztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDVTtnQ0FBR1YsV0FBVTswQ0FBVTs7Ozs7OzBDQUN4Qiw4REFBQ1U7Z0NBQUdWLFdBQVU7MENBQVU7Ozs7OzswQ0FDeEIsOERBQUNNO2dDQUFHTixXQUFVOzBDQUFVOzs7Ozs7Ozs7Ozs7a0NBRTFCLDhEQUFDVzt3QkFBT1gsV0FBVTt3QkFBdUJZLFNBQVN2QztrQ0FBa0I7Ozs7Ozs7Ozs7OzswQkFJdEUsOERBQUMwQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzdCLGlEQUFJQTtvQkFBQzBDLE1BQU07OEJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DO0tBbkZ3QnpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGJhbmFuYSBmcm9tIFwiLi4vLi4vcHVibGljL2JhbmFuYS5wbmdcIjtcbmltcG9ydCBhcHBsZSBmcm9tIFwiLi4vLi4vcHVibGljL2FwcGxlLnBuZ1wiOyAvLyBBZGQgaW1hZ2VzIGZvciBvdGhlciBpdGVtc1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBoYW5kbGVDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1c3RvbWVyRGF0YSA9IHtcbiAgICAgIGlkOiBcIjEyMzQ1NlwiLFxuICAgICAgZmlyc3ROYW1lOiBcIkpvaG5cIixcbiAgICAgIGxhc3ROYW1lOiBcIkRvZVwiLFxuICAgICAgZW1haWw6IFwiam9obi5kb2VAZXhhbXBsZS5jb21cIixcbiAgICAgIHBob25lOiBcIjEyMy00NTYtNzg5MFwiLFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICBzdHJlZXQ6IFwiMTIzIE1haW4gU3RcIixcbiAgICAgICAgY2l0eTogXCJBbnl0b3duXCIsXG4gICAgICAgIHN0YXRlOiBcIkNBXCIsXG4gICAgICAgIHppcDogXCIxMjM0NVwiLFxuICAgICAgfSxcbiAgICAgIG9yZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgb3JkZXJJZDogXCI3ODkwMVwiLFxuICAgICAgICAgIHByb2R1Y3Q6IFwiQmFuYW5hXCIsXG4gICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgcHJpY2U6IDEuNzQsXG4gICAgICAgICAgbGFzdDREaWdpdHM6IFwiNDUzNFwiLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gQWRkIG1vcmUgaXRlbXMgdG8gdGhlIG9yZGVycyBhcnJheSBhcyBuZWVkZWRcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tvdXQgY29tcGxldGVkIVwiLCBjdXN0b21lckRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGxpc3RPZkl0ZW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQmFuYW5hXCIsXG4gICAgICBpbWdOYW1lOiBiYW5hbmEsXG4gICAgICBwcmljZTogMS43NCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwbGVcIixcbiAgICAgIGltZ05hbWU6IGFwcGxlLFxuICAgICAgcHJpY2U6IDMuMCxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01XCI+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItaW5mbyByb3VuZGVkIHAtMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnMtMiBtYi0zXCI+V2FsbWFydCBQb1M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAge2xpc3RPZkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nTmFtZX0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZzLTRcIj4xIHggaXRlbS5uYW1lPC9oMj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnMtNVwiPiQgMS43NDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPEltYWdlIHNyYz17YmFuYW5hfSBhbHQ9XCJCYW5hbmFcIiBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy00XCI+MSB4IEJhbmFuYTwvaDI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnMtNVwiPiQgMS43NDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXthcHBsZX0gYWx0PVwiQXBwbGVcIiBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy00XCI+MiB4IEFwcGxlPC9oMj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmcy01XCI+JCAzLjAwPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogQWRkIG1vcmUgaXRlbXMgaW4gYSBzaW1pbGFyIGZvcm1hdCAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJteS00XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy1ib2xkXCI+U3VidG90YWw6ICQgNC43NDwvaDQ+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5UYXggKDEzJSk6ICQgMC4zODwvaDQ+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5Ub3RhbDogJCA1LjEyPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0V2ZW50fT5cbiAgICAgICAgICBDaGVja291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0zXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL2hlbGxvLW5lYXJcIn0+UmVhZCB0aGUgQVBJczwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5hdkJhciIsIkltYWdlIiwiYmFuYW5hIiwiYXBwbGUiLCJMaW5rIiwiSG9tZSIsImhhbmRsZUNsaWNrRXZlbnQiLCJjdXN0b21lckRhdGEiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJzdHJlZXQiLCJjaXR5Iiwic3RhdGUiLCJ6aXAiLCJvcmRlcnMiLCJvcmRlcklkIiwicHJvZHVjdCIsInF1YW50aXR5IiwicHJpY2UiLCJsYXN0NERpZ2l0cyIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjb25zb2xlIiwibG9nIiwibGlzdE9mSXRlbXMiLCJuYW1lIiwiaW1nTmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaXRlbSIsInNyYyIsImhlaWdodCIsImgyIiwiaDMiLCJhbHQiLCJociIsImg0IiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});