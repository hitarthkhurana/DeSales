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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _public_apple_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/apple.png */ \"(app-pages-browser)/./public/apple.png\");\n/* harmony import */ var _public_banana_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/banana.png */ \"(app-pages-browser)/./public/banana.png\");\n/* harmony import */ var _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/doritos.png */ \"(app-pages-browser)/./public/doritos.png\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedProduct, setSelectedProduct] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const [selectedQuantity, setSelectedQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(1);\n    const handleClickEvent = ()=>{\n        const customerData = {\n            id: \"123456\",\n            firstName: \"John\",\n            lastName: \"Doe\",\n            email: \"john.doe@example.com\",\n            phone: \"123-456-7890\",\n            address: {\n                street: \"123 Main St\",\n                city: \"Anytown\",\n                state: \"CA\",\n                zip: \"12345\"\n            },\n            orders: [\n                listOfItems.map((item)=>{\n                    return {\n                        orderId: \"12345\",\n                        product: item.name,\n                        quantity: item.quantity,\n                        price: item.price,\n                        last4Digits: \"1234\",\n                        date: new Date().toISOString()\n                    };\n                })\n            ]\n        };\n        console.log(\"Checkout completed!\", customerData);\n    };\n    const handleAddToCart = ()=>{\n        if (selectedProduct) {\n            const newItem = {\n                name: selectedProduct.name,\n                imgName: selectedProduct.imgName,\n                price: selectedProduct.price,\n                quantity: selectedQuantity\n            };\n            setListOfItems([\n                ...listOfItems,\n                newItem\n            ]);\n        }\n    };\n    const listOfItems = [\n        {\n            name: \"Banana\",\n            imgName: _public_banana_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            price: 1.74,\n            quantity: 1\n        },\n        {\n            name: \"Apple\",\n            imgName: _public_apple_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            price: 2.7,\n            quantity: 2\n        },\n        {\n            name: \"Doritos\",\n            imgName: _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            price: 3.99,\n            quantity: 4\n        }\n    ];\n    const totalSum = listOfItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n    const tax = totalSum * 0.13;\n    const totalMoney = totalSum + tax;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-info rounded p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fs-2 mb-3 text-center\",\n                        children: \"Walmart PoS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"form-select mb-3\",\n                                value: selectedProduct,\n                                onChange: (e)=>setSelectedProduct(JSON.parse(e.target.value)),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select Product\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this),\n                                    listOfItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: JSON.stringify(item),\n                                            children: item.name\n                                        }, index, false, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-8 d-flex flex-column align-items-center flex-wrap justify-content-center mb-3\",\n                                children: selectedProduct.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"row d-flex align-items-center justify-content-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1 d-flex justify-content-center\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        src: item.imgName,\n                                                        alt: item.name,\n                                                        height: 100\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                        lineNumber: 110,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"fs-4\",\n                                                            children: [\n                                                                item.quantity,\n                                                                \" x \",\n                                                                item.name\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 113,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"fs-5\",\n                                                            children: [\n                                                                \"$ \",\n                                                                item.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 116,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, item.name, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-4 d-flex flex-column align-items-center justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Subtotal: $ \",\n                                                    totalSum.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 125,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Tax (13%): $ \",\n                                                    tax.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 126,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Total: $ \",\n                                                    totalMoney.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 127,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary mt-3\",\n                                        onClick: handleClickEvent,\n                                        children: \"Checkout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/hello-near\",\n                    children: \"Read the APIs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"P0mzH7BX5/hEv/T8bkPYv5gXCMM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLYyxPQUFPO3dEQUFFcUIsS0FBS25DLEtBQUtHLElBQUk7d0RBQUVpQyxRQUFROzs7Ozs7Ozs7Ozs4REFFcEQsOERBQUNmO29EQUFJQyxXQUFVOztzRUFDYiw4REFBQ2U7NERBQUdmLFdBQVU7O2dFQUNYdEIsS0FBS0ksUUFBUTtnRUFBQztnRUFBSUosS0FBS0csSUFBSTs7Ozs7OztzRUFFOUIsOERBQUNtQzs0REFBR2hCLFdBQVU7O2dFQUFPO2dFQUFHdEIsS0FBS0ssS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FUUkwsS0FBS0csSUFBSTs7Ozs7Z0NBYzdDOzs7Ozs7MENBRUYsOERBQUNrQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ2lCO2dEQUFHakIsV0FBVTs7b0RBQVU7b0RBQWFOLFNBQVN3QixPQUFPLENBQUM7Ozs7Ozs7MERBQ3RELDhEQUFDRDtnREFBR2pCLFdBQVU7O29EQUFVO29EQUFjSCxJQUFJcUIsT0FBTyxDQUFDOzs7Ozs7OzBEQUNsRCw4REFBQ0g7Z0RBQUdmLFdBQVU7O29EQUFVO29EQUFVRixXQUFXb0IsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7O2tEQUV2RCw4REFBQ0M7d0NBQU9uQixXQUFVO3dDQUF1Qm9CLFNBQVN6RDtrREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNMUUsOERBQUNvQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2pELGlEQUFJQTtvQkFBQ3NFLE1BQU07OEJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DO0dBaEl3Qi9EO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXBwbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9hcHBsZS5wbmdcIjtcbmltcG9ydCBiYW5hbmEgZnJvbSBcIi4uLy4uL3B1YmxpYy9iYW5hbmEucG5nXCI7XG5pbXBvcnQgZG9yaXRvcyBmcm9tIFwiLi4vLi4vcHVibGljL2Rvcml0b3MucG5nXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3QsIHNldFNlbGVjdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlbGVjdGVkUXVhbnRpdHksIHNldFNlbGVjdGVkUXVhbnRpdHldID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXN0b21lckRhdGEgPSB7XG4gICAgICBpZDogXCIxMjM0NTZcIixcbiAgICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gICAgICBsYXN0TmFtZTogXCJEb2VcIixcbiAgICAgIGVtYWlsOiBcImpvaG4uZG9lQGV4YW1wbGUuY29tXCIsXG4gICAgICBwaG9uZTogXCIxMjMtNDU2LTc4OTBcIixcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgc3RyZWV0OiBcIjEyMyBNYWluIFN0XCIsXG4gICAgICAgIGNpdHk6IFwiQW55dG93blwiLFxuICAgICAgICBzdGF0ZTogXCJDQVwiLFxuICAgICAgICB6aXA6IFwiMTIzNDVcIixcbiAgICAgIH0sXG4gICAgICBvcmRlcnM6IFtcbiAgICAgICAgbGlzdE9mSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9yZGVySWQ6IFwiMTIzNDVcIixcbiAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UsXG4gICAgICAgICAgICBsYXN0NERpZ2l0czogXCIxMjM0XCIsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhcIkNoZWNrb3V0IGNvbXBsZXRlZCFcIiwgY3VzdG9tZXJEYXRhKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUHJvZHVjdCkge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcbiAgICAgICAgbmFtZTogc2VsZWN0ZWRQcm9kdWN0Lm5hbWUsXG4gICAgICAgIGltZ05hbWU6IHNlbGVjdGVkUHJvZHVjdC5pbWdOYW1lLFxuICAgICAgICBwcmljZTogc2VsZWN0ZWRQcm9kdWN0LnByaWNlLFxuICAgICAgICBxdWFudGl0eTogc2VsZWN0ZWRRdWFudGl0eSxcbiAgICAgIH07XG5cbiAgICAgIHNldExpc3RPZkl0ZW1zKFsuLi5saXN0T2ZJdGVtcywgbmV3SXRlbV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsaXN0T2ZJdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkJhbmFuYVwiLFxuICAgICAgaW1nTmFtZTogYmFuYW5hLFxuICAgICAgcHJpY2U6IDEuNzQsXG4gICAgICBxdWFudGl0eTogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwbGVcIixcbiAgICAgIGltZ05hbWU6IGFwcGxlLFxuICAgICAgcHJpY2U6IDIuNyxcbiAgICAgIHF1YW50aXR5OiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJEb3JpdG9zXCIsXG4gICAgICBpbWdOYW1lOiBkb3JpdG9zLFxuICAgICAgcHJpY2U6IDMuOTksXG4gICAgICBxdWFudGl0eTogNCxcbiAgICB9LFxuICBdO1xuICBjb25zdCB0b3RhbFN1bSA9IGxpc3RPZkl0ZW1zLnJlZHVjZShcbiAgICAodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksXG4gICAgMFxuICApO1xuICBjb25zdCB0YXggPSB0b3RhbFN1bSAqIDAuMTM7XG4gIGNvbnN0IHRvdGFsTW9uZXkgPSB0b3RhbFN1bSArIHRheDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNVwiPlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWluZm8gcm91bmRlZCBwLTNcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZzLTIgbWItMyB0ZXh0LWNlbnRlclwiPldhbG1hcnQgUG9TPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBtYi0zXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFByb2R1Y3R9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkUHJvZHVjdChKU09OLnBhcnNlKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBQcm9kdWN0PC9vcHRpb24+XG4gICAgICAgICAgICB7bGlzdE9mSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtKU09OLnN0cmluZ2lmeShpdGVtKX0+XG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAge3NlbGVjdGVkUHJvZHVjdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGtleT17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwLTEgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ05hbWV9IGFsdD17aXRlbS5uYW1lfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX0geCB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZzLTVcIj4kIHtpdGVtLnByaWNlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlN1YnRvdGFsOiAkIHt0b3RhbFN1bS50b0ZpeGVkKDIpfTwvaDQ+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy1ib2xkXCI+VGF4ICgxMyUpOiAkIHt0YXgudG9GaXhlZCgyKX08L2g0PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlRvdGFsOiAkIHt0b3RhbE1vbmV5LnRvRml4ZWQoMil9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXQtM1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrRXZlbnR9PlxuICAgICAgICAgICAgICBDaGVja291dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTNcIj5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvaGVsbG8tbmVhclwifT5SZWFkIHRoZSBBUElzPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiYXBwbGUiLCJiYW5hbmEiLCJkb3JpdG9zIiwiTmF2QmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJzZWxlY3RlZFByb2R1Y3QiLCJzZXRTZWxlY3RlZFByb2R1Y3QiLCJzZWxlY3RlZFF1YW50aXR5Iiwic2V0U2VsZWN0ZWRRdWFudGl0eSIsImhhbmRsZUNsaWNrRXZlbnQiLCJjdXN0b21lckRhdGEiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJzdHJlZXQiLCJjaXR5Iiwic3RhdGUiLCJ6aXAiLCJvcmRlcnMiLCJsaXN0T2ZJdGVtcyIsIm1hcCIsIml0ZW0iLCJvcmRlcklkIiwicHJvZHVjdCIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwibGFzdDREaWdpdHMiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFkZFRvQ2FydCIsIm5ld0l0ZW0iLCJpbWdOYW1lIiwic2V0TGlzdE9mSXRlbXMiLCJ0b3RhbFN1bSIsInJlZHVjZSIsInRvdGFsIiwidGF4IiwidG90YWxNb25leSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJKU09OIiwicGFyc2UiLCJ0YXJnZXQiLCJvcHRpb24iLCJpbmRleCIsInN0cmluZ2lmeSIsInNyYyIsImFsdCIsImhlaWdodCIsImgyIiwiaDMiLCJoNCIsInRvRml4ZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});