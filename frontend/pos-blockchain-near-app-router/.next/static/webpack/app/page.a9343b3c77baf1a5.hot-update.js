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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _public_apple_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/apple.png */ \"(app-pages-browser)/./public/apple.png\");\n/* harmony import */ var _public_banana_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/banana.png */ \"(app-pages-browser)/./public/banana.png\");\n/* harmony import */ var _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/doritos.png */ \"(app-pages-browser)/./public/doritos.png\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedProduct, setSelectedProduct] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const [selectedQuantity, setSelectedQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(1);\n    const handleClickEvent = ()=>{\n        const customerData = {\n            id: \"123456\",\n            firstName: \"John\",\n            lastName: \"Doe\",\n            email: \"john.doe@example.com\",\n            phone: \"123-456-7890\",\n            address: {\n                street: \"123 Main St\",\n                city: \"Anytown\",\n                state: \"CA\",\n                zip: \"12345\"\n            },\n            orders: [\n                listOfItems.map((item)=>{\n                    return {\n                        orderId: \"12345\",\n                        product: item.name,\n                        quantity: item.quantity,\n                        price: item.price,\n                        last4Digits: \"1234\",\n                        date: new Date().toISOString()\n                    };\n                })\n            ]\n        };\n        console.log(\"Checkout completed!\", customerData);\n    };\n    const handleAddToCart = ()=>{\n        if (selectedProduct) {\n            const newItem = {\n                name: selectedProduct.name,\n                imgName: selectedProduct.imgName,\n                price: selectedProduct.price,\n                quantity: selectedQuantity\n            };\n            setListOfItems([\n                ...listOfItems,\n                newItem\n            ]);\n        }\n    };\n    const listOfItems = [\n        {\n            name: \"Banana\",\n            imgName: _public_banana_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            price: 1.74,\n            quantity: 1\n        },\n        {\n            name: \"Apple\",\n            imgName: _public_apple_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            price: 2.7,\n            quantity: 2\n        },\n        {\n            name: \"Doritos\",\n            imgName: _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            price: 3.99,\n            quantity: 4\n        }\n    ];\n    const totalSum = listOfItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n    const tax = totalSum * 0.13;\n    const totalMoney = totalSum + tax;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-info rounded p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fs-2 mb-3 text-center\",\n                        children: \"Walmart PoS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"form-select mb-3\",\n                                value: selectedProduct,\n                                onChange: (e)=>setSelectedProduct(JSON.parse(e.target.value)),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select Product\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this),\n                                    listOfItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: JSON.stringify(item),\n                                            children: item.name\n                                        }, index, false, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                className: \"form-control mb-3\",\n                                value: selectedQuantity,\n                                onChange: (e)=>setSelectedQuantity(parseInt(e.target.value)),\n                                min: 1\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-8 d-flex flex-column align-items-center flex-wrap justify-content-center mb-3\",\n                                children: listOfItems.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"row d-flex align-items-center justify-content-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1 d-flex justify-content-center\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        src: item.imgName,\n                                                        alt: item.name,\n                                                        height: 100\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                        lineNumber: 117,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 116,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"fs-4\",\n                                                            children: [\n                                                                item.quantity,\n                                                                \" x \",\n                                                                item.name\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 120,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"fs-5\",\n                                                            children: [\n                                                                \"$ \",\n                                                                item.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 123,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, item.name, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-4 d-flex flex-column align-items-center justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Subtotal: $ \",\n                                                    totalSum.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 132,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Tax (13%): $ \",\n                                                    tax.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 133,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Total: $ \",\n                                                    totalMoney.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 134,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary mt-3\",\n                                        onClick: handleClickEvent,\n                                        children: \"Checkout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/hello-near\",\n                    children: \"Read the APIs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"P0mzH7BX5/hEv/T8bkPYv5gXCMM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQ0M7b0NBQ2hCLHFCQUNFLDhEQUFDcUI7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ0Q7b0RBQUlDLFdBQVU7OERBQ2IsNEVBQUNsRCxrREFBS0E7d0RBQUNrRSxLQUFLdEMsS0FBS2MsT0FBTzt3REFBRXlCLEtBQUt2QyxLQUFLRyxJQUFJO3dEQUFFcUMsUUFBUTs7Ozs7Ozs7Ozs7OERBRXBELDhEQUFDbkI7b0RBQUlDLFdBQVU7O3NFQUNiLDhEQUFDbUI7NERBQUduQixXQUFVOztnRUFDWHRCLEtBQUtJLFFBQVE7Z0VBQUM7Z0VBQUlKLEtBQUtHLElBQUk7Ozs7Ozs7c0VBRTlCLDhEQUFDdUM7NERBQUdwQixXQUFVOztnRUFBTztnRUFBR3RCLEtBQUtLLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBVFJMLEtBQUtHLElBQUk7Ozs7O2dDQWM3Qzs7Ozs7OzBDQUVGLDhEQUFDa0I7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNxQjtnREFBR3JCLFdBQVU7O29EQUFVO29EQUFhTixTQUFTNEIsT0FBTyxDQUFDOzs7Ozs7OzBEQUN0RCw4REFBQ0Q7Z0RBQUdyQixXQUFVOztvREFBVTtvREFBY0gsSUFBSXlCLE9BQU8sQ0FBQzs7Ozs7OzswREFDbEQsOERBQUNIO2dEQUFHbkIsV0FBVTs7b0RBQVU7b0RBQVVGLFdBQVd3QixPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7a0RBRXZELDhEQUFDQzt3Q0FBT3ZCLFdBQVU7d0NBQXVCd0IsU0FBUzdEO2tEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0xRSw4REFBQ29DO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDakQsaURBQUlBO29CQUFDMEUsTUFBTTs4QkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkM7R0F2SXdCbkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBhcHBsZSBmcm9tIFwiLi4vLi4vcHVibGljL2FwcGxlLnBuZ1wiO1xuaW1wb3J0IGJhbmFuYSBmcm9tIFwiLi4vLi4vcHVibGljL2JhbmFuYS5wbmdcIjtcbmltcG9ydCBkb3JpdG9zIGZyb20gXCIuLi8uLi9wdWJsaWMvZG9yaXRvcy5wbmdcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkUHJvZHVjdCwgc2V0U2VsZWN0ZWRQcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRRdWFudGl0eSwgc2V0U2VsZWN0ZWRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBoYW5kbGVDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1c3RvbWVyRGF0YSA9IHtcbiAgICAgIGlkOiBcIjEyMzQ1NlwiLFxuICAgICAgZmlyc3ROYW1lOiBcIkpvaG5cIixcbiAgICAgIGxhc3ROYW1lOiBcIkRvZVwiLFxuICAgICAgZW1haWw6IFwiam9obi5kb2VAZXhhbXBsZS5jb21cIixcbiAgICAgIHBob25lOiBcIjEyMy00NTYtNzg5MFwiLFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICBzdHJlZXQ6IFwiMTIzIE1haW4gU3RcIixcbiAgICAgICAgY2l0eTogXCJBbnl0b3duXCIsXG4gICAgICAgIHN0YXRlOiBcIkNBXCIsXG4gICAgICAgIHppcDogXCIxMjM0NVwiLFxuICAgICAgfSxcbiAgICAgIG9yZGVyczogW1xuICAgICAgICBsaXN0T2ZJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JkZXJJZDogXCIxMjM0NVwiLFxuICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5uYW1lLFxuICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcbiAgICAgICAgICAgIGxhc3Q0RGlnaXRzOiBcIjEyMzRcIixcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tvdXQgY29tcGxldGVkIVwiLCBjdXN0b21lckRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRQcm9kdWN0KSB7XG4gICAgICBjb25zdCBuZXdJdGVtID0ge1xuICAgICAgICBuYW1lOiBzZWxlY3RlZFByb2R1Y3QubmFtZSxcbiAgICAgICAgaW1nTmFtZTogc2VsZWN0ZWRQcm9kdWN0LmltZ05hbWUsXG4gICAgICAgIHByaWNlOiBzZWxlY3RlZFByb2R1Y3QucHJpY2UsXG4gICAgICAgIHF1YW50aXR5OiBzZWxlY3RlZFF1YW50aXR5LFxuICAgICAgfTtcblxuICAgICAgc2V0TGlzdE9mSXRlbXMoWy4uLmxpc3RPZkl0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxpc3RPZkl0ZW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQmFuYW5hXCIsXG4gICAgICBpbWdOYW1lOiBiYW5hbmEsXG4gICAgICBwcmljZTogMS43NCxcbiAgICAgIHF1YW50aXR5OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBcHBsZVwiLFxuICAgICAgaW1nTmFtZTogYXBwbGUsXG4gICAgICBwcmljZTogMi43LFxuICAgICAgcXVhbnRpdHk6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkRvcml0b3NcIixcbiAgICAgIGltZ05hbWU6IGRvcml0b3MsXG4gICAgICBwcmljZTogMy45OSxcbiAgICAgIHF1YW50aXR5OiA0LFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHRvdGFsU3VtID0gbGlzdE9mSXRlbXMucmVkdWNlKFxuICAgICh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSxcbiAgICAwXG4gICk7XG4gIGNvbnN0IHRheCA9IHRvdGFsU3VtICogMC4xMztcbiAgY29uc3QgdG90YWxNb25leSA9IHRvdGFsU3VtICsgdGF4O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01XCI+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItaW5mbyByb3VuZGVkIHAtM1wiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnMtMiBtYi0zIHRleHQtY2VudGVyXCI+V2FsbWFydCBQb1M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IG1iLTNcIlxuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkUHJvZHVjdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRQcm9kdWN0KEpTT04ucGFyc2UoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFByb2R1Y3Q8L29wdGlvbj5cbiAgICAgICAgICAgIHtsaXN0T2ZJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e0pTT04uc3RyaW5naWZ5KGl0ZW0pfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRRdWFudGl0eX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRRdWFudGl0eShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgIHtsaXN0T2ZJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGtleT17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwLTEgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ05hbWV9IGFsdD17aXRlbS5uYW1lfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX0geCB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZzLTVcIj4kIHtpdGVtLnByaWNlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlN1YnRvdGFsOiAkIHt0b3RhbFN1bS50b0ZpeGVkKDIpfTwvaDQ+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy1ib2xkXCI+VGF4ICgxMyUpOiAkIHt0YXgudG9GaXhlZCgyKX08L2g0PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlRvdGFsOiAkIHt0b3RhbE1vbmV5LnRvRml4ZWQoMil9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXQtM1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrRXZlbnR9PlxuICAgICAgICAgICAgICBDaGVja291dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTNcIj5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvaGVsbG8tbmVhclwifT5SZWFkIHRoZSBBUElzPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiYXBwbGUiLCJiYW5hbmEiLCJkb3JpdG9zIiwiTmF2QmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJzZWxlY3RlZFByb2R1Y3QiLCJzZXRTZWxlY3RlZFByb2R1Y3QiLCJzZWxlY3RlZFF1YW50aXR5Iiwic2V0U2VsZWN0ZWRRdWFudGl0eSIsImhhbmRsZUNsaWNrRXZlbnQiLCJjdXN0b21lckRhdGEiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJzdHJlZXQiLCJjaXR5Iiwic3RhdGUiLCJ6aXAiLCJvcmRlcnMiLCJsaXN0T2ZJdGVtcyIsIm1hcCIsIml0ZW0iLCJvcmRlcklkIiwicHJvZHVjdCIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwibGFzdDREaWdpdHMiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFkZFRvQ2FydCIsIm5ld0l0ZW0iLCJpbWdOYW1lIiwic2V0TGlzdE9mSXRlbXMiLCJ0b3RhbFN1bSIsInJlZHVjZSIsInRvdGFsIiwidGF4IiwidG90YWxNb25leSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJKU09OIiwicGFyc2UiLCJ0YXJnZXQiLCJvcHRpb24iLCJpbmRleCIsInN0cmluZ2lmeSIsImlucHV0IiwidHlwZSIsInBhcnNlSW50IiwibWluIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwiaDIiLCJoMyIsImg0IiwidG9GaXhlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});