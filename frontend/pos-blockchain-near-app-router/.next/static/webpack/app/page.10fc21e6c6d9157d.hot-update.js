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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _public_apple_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/apple.png */ \"(app-pages-browser)/./public/apple.png\");\n/* harmony import */ var _public_banana_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/banana.png */ \"(app-pages-browser)/./public/banana.png\");\n/* harmony import */ var _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/doritos.png */ \"(app-pages-browser)/./public/doritos.png\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedProduct, setSelectedProduct] = useState(\"\");\n    const [selectedQuantity, setSelectedQuantity] = useState(1);\n    const handleClickEvent = ()=>{\n        const customerData = {\n            id: \"123456\",\n            firstName: \"John\",\n            lastName: \"Doe\",\n            email: \"john.doe@example.com\",\n            phone: \"123-456-7890\",\n            address: {\n                street: \"123 Main St\",\n                city: \"Anytown\",\n                state: \"CA\",\n                zip: \"12345\"\n            },\n            orders: [\n                listOfItems.map((item)=>{\n                    return {\n                        orderId: \"12345\",\n                        product: item.name,\n                        quantity: item.quantity,\n                        price: item.price,\n                        last4Digits: \"1234\",\n                        date: new Date().toISOString()\n                    };\n                })\n            ]\n        };\n        console.log(\"Checkout completed!\", customerData);\n    };\n    const handleAddToCart = ()=>{\n        if (selectedProduct) {\n            const newItem = {\n                name: selectedProduct.name,\n                imgName: selectedProduct.imgName,\n                price: selectedProduct.price,\n                quantity: selectedQuantity\n            };\n            setListOfItems([\n                ...listOfItems,\n                newItem\n            ]);\n        }\n    };\n    const listOfItems = [\n        {\n            name: \"Banana\",\n            imgName: _public_banana_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            price: 1.74,\n            quantity: 1\n        },\n        {\n            name: \"Apple\",\n            imgName: _public_apple_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            price: 2.7,\n            quantity: 2\n        },\n        {\n            name: \"Doritos\",\n            imgName: _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            price: 3.99,\n            quantity: 4\n        }\n    ];\n    const totalSum = listOfItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n    const tax = totalSum * 0.13;\n    const totalMoney = totalSum + tax;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-info rounded p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fs-2 mb-3 text-center\",\n                        children: \"Walmart PoS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"form-select mb-3\",\n                                value: selectedProduct,\n                                onChange: (e)=>setSelectedProduct(JSON.parse(e.target.value)),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select Product\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this),\n                                    listOfItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: JSON.stringify(item),\n                                            children: item.name\n                                        }, index, false, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-8 d-flex flex-column align-items-center flex-wrap justify-content-center mb-3\",\n                                children: listOfItems.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"row d-flex align-items-center justify-content-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1 d-flex justify-content-center\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        src: item.imgName,\n                                                        alt: item.name,\n                                                        height: 100\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"fs-4\",\n                                                            children: [\n                                                                item.quantity,\n                                                                \" x \",\n                                                                item.name\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 112,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"fs-5\",\n                                                            children: [\n                                                                \"$ \",\n                                                                item.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 115,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, item.name, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-4 d-flex flex-column align-items-center justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Subtotal: $ \",\n                                                    totalSum.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 124,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Tax (13%): $ \",\n                                                    tax.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 125,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Total: $ \",\n                                                    totalMoney.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 126,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary mt-3\",\n                                        onClick: handleClickEvent,\n                                        children: \"Checkout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/hello-near\",\n                    children: \"Read the APIs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"P0mzH7BX5/hEv/T8bkPYv5gXCMM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtHLElBQUk7d0RBQUVpQyxRQUFROzs7Ozs7Ozs7Ozs4REFFcEQsOERBQUNmO29EQUFJQyxXQUFVOztzRUFDYiw4REFBQ2U7NERBQUdmLFdBQVU7O2dFQUNYdEIsS0FBS0ksUUFBUTtnRUFBQztnRUFBSUosS0FBS0csSUFBSTs7Ozs7OztzRUFFOUIsOERBQUNtQzs0REFBR2hCLFdBQVU7O2dFQUFPO2dFQUFHdEIsS0FBS0ssS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FUUkwsS0FBS0csSUFBSTs7Ozs7Z0NBYzdDOzs7Ozs7MENBRUYsOERBQUNrQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ2lCO2dEQUFHakIsV0FBVTs7b0RBQVU7b0RBQWFOLFNBQVN3QixPQUFPLENBQUM7Ozs7Ozs7MERBQ3RELDhEQUFDRDtnREFBR2pCLFdBQVU7O29EQUFVO29EQUFjSCxJQUFJcUIsT0FBTyxDQUFDOzs7Ozs7OzBEQUNsRCw4REFBQ0g7Z0RBQUdmLFdBQVU7O29EQUFVO29EQUFVRixXQUFXb0IsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7O2tEQUV2RCw4REFBQ0M7d0NBQU9uQixXQUFVO3dDQUF1Qm9CLFNBQVN6RDtrREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNMUUsOERBQUNvQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2hELGlEQUFJQTtvQkFBQ3FFLE1BQU07OEJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DO0dBaEl3QmhFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXBwbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9hcHBsZS5wbmdcIjtcbmltcG9ydCBiYW5hbmEgZnJvbSBcIi4uLy4uL3B1YmxpYy9iYW5hbmEucG5nXCI7XG5pbXBvcnQgZG9yaXRvcyBmcm9tIFwiLi4vLi4vcHVibGljL2Rvcml0b3MucG5nXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0LCBzZXRTZWxlY3RlZFByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZFF1YW50aXR5LCBzZXRTZWxlY3RlZFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VzdG9tZXJEYXRhID0ge1xuICAgICAgaWQ6IFwiMTIzNDU2XCIsXG4gICAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxuICAgICAgbGFzdE5hbWU6IFwiRG9lXCIsXG4gICAgICBlbWFpbDogXCJqb2huLmRvZUBleGFtcGxlLmNvbVwiLFxuICAgICAgcGhvbmU6IFwiMTIzLTQ1Ni03ODkwXCIsXG4gICAgICBhZGRyZXNzOiB7XG4gICAgICAgIHN0cmVldDogXCIxMjMgTWFpbiBTdFwiLFxuICAgICAgICBjaXR5OiBcIkFueXRvd25cIixcbiAgICAgICAgc3RhdGU6IFwiQ0FcIixcbiAgICAgICAgemlwOiBcIjEyMzQ1XCIsXG4gICAgICB9LFxuICAgICAgb3JkZXJzOiBbXG4gICAgICAgIGxpc3RPZkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlcklkOiBcIjEyMzQ1XCIsXG4gICAgICAgICAgICBwcm9kdWN0OiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxuICAgICAgICAgICAgbGFzdDREaWdpdHM6IFwiMTIzNFwiLFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coXCJDaGVja291dCBjb21wbGV0ZWQhXCIsIGN1c3RvbWVyRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFByb2R1Y3QpIHtcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4gICAgICAgIG5hbWU6IHNlbGVjdGVkUHJvZHVjdC5uYW1lLFxuICAgICAgICBpbWdOYW1lOiBzZWxlY3RlZFByb2R1Y3QuaW1nTmFtZSxcbiAgICAgICAgcHJpY2U6IHNlbGVjdGVkUHJvZHVjdC5wcmljZSxcbiAgICAgICAgcXVhbnRpdHk6IHNlbGVjdGVkUXVhbnRpdHksXG4gICAgICB9O1xuXG4gICAgICBzZXRMaXN0T2ZJdGVtcyhbLi4ubGlzdE9mSXRlbXMsIG5ld0l0ZW1dKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbGlzdE9mSXRlbXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJCYW5hbmFcIixcbiAgICAgIGltZ05hbWU6IGJhbmFuYSxcbiAgICAgIHByaWNlOiAxLjc0LFxuICAgICAgcXVhbnRpdHk6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkFwcGxlXCIsXG4gICAgICBpbWdOYW1lOiBhcHBsZSxcbiAgICAgIHByaWNlOiAyLjcsXG4gICAgICBxdWFudGl0eTogMixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRG9yaXRvc1wiLFxuICAgICAgaW1nTmFtZTogZG9yaXRvcyxcbiAgICAgIHByaWNlOiAzLjk5LFxuICAgICAgcXVhbnRpdHk6IDQsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgdG90YWxTdW0gPSBsaXN0T2ZJdGVtcy5yZWR1Y2UoXG4gICAgKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5LFxuICAgIDBcbiAgKTtcbiAgY29uc3QgdGF4ID0gdG90YWxTdW0gKiAwLjEzO1xuICBjb25zdCB0b3RhbE1vbmV5ID0gdG90YWxTdW0gKyB0YXg7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTVcIj5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1pbmZvIHJvdW5kZWQgcC0zXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmcy0yIG1iLTMgdGV4dC1jZW50ZXJcIj5XYWxtYXJ0IFBvUzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgbWItM1wiXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRQcm9kdWN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFByb2R1Y3QoSlNPTi5wYXJzZShlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgUHJvZHVjdDwvb3B0aW9uPlxuICAgICAgICAgICAge2xpc3RPZkl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoaXRlbSl9PlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgIHtsaXN0T2ZJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGtleT17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwLTEgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ05hbWV9IGFsdD17aXRlbS5uYW1lfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX0geCB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZzLTVcIj4kIHtpdGVtLnByaWNlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlN1YnRvdGFsOiAkIHt0b3RhbFN1bS50b0ZpeGVkKDIpfTwvaDQ+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy1ib2xkXCI+VGF4ICgxMyUpOiAkIHt0YXgudG9GaXhlZCgyKX08L2g0PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlRvdGFsOiAkIHt0b3RhbE1vbmV5LnRvRml4ZWQoMil9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXQtM1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrRXZlbnR9PlxuICAgICAgICAgICAgICBDaGVja291dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTNcIj5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvaGVsbG8tbmVhclwifT5SZWFkIHRoZSBBUElzPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiYXBwbGUiLCJiYW5hbmEiLCJkb3JpdG9zIiwiTmF2QmFyIiwiSG9tZSIsInNlbGVjdGVkUHJvZHVjdCIsInNldFNlbGVjdGVkUHJvZHVjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWRRdWFudGl0eSIsInNldFNlbGVjdGVkUXVhbnRpdHkiLCJoYW5kbGVDbGlja0V2ZW50IiwiY3VzdG9tZXJEYXRhIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwic3RyZWV0IiwiY2l0eSIsInN0YXRlIiwiemlwIiwib3JkZXJzIiwibGlzdE9mSXRlbXMiLCJtYXAiLCJpdGVtIiwib3JkZXJJZCIsInByb2R1Y3QiLCJuYW1lIiwicXVhbnRpdHkiLCJwcmljZSIsImxhc3Q0RGlnaXRzIiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVBZGRUb0NhcnQiLCJuZXdJdGVtIiwiaW1nTmFtZSIsInNldExpc3RPZkl0ZW1zIiwidG90YWxTdW0iLCJyZWR1Y2UiLCJ0b3RhbCIsInRheCIsInRvdGFsTW9uZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwiSlNPTiIsInBhcnNlIiwidGFyZ2V0Iiwib3B0aW9uIiwiaW5kZXgiLCJzdHJpbmdpZnkiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJoMiIsImgzIiwiaDQiLCJ0b0ZpeGVkIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});