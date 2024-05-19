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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _public_apple_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/apple.png */ \"(app-pages-browser)/./public/apple.png\");\n/* harmony import */ var _public_banana_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/banana.png */ \"(app-pages-browser)/./public/banana.png\");\n/* harmony import */ var _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/doritos.png */ \"(app-pages-browser)/./public/doritos.png\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedProduct, setSelectedProduct] = useState(\"\");\n    const [selectedQuantity, setSelectedQuantity] = useState(1);\n    const handleClickEvent = ()=>{\n        const customerData = {\n            id: \"123456\",\n            firstName: \"John\",\n            lastName: \"Doe\",\n            email: \"john.doe@example.com\",\n            phone: \"123-456-7890\",\n            address: {\n                street: \"123 Main St\",\n                city: \"Anytown\",\n                state: \"CA\",\n                zip: \"12345\"\n            },\n            orders: [\n                listOfItems.map((item)=>{\n                    return {\n                        orderId: \"12345\",\n                        product: item.name,\n                        quantity: item.quantity,\n                        price: item.price,\n                        last4Digits: \"1234\",\n                        date: new Date().toISOString()\n                    };\n                })\n            ]\n        };\n        console.log(\"Checkout completed!\", customerData);\n    };\n    const handleAddToCart = ()=>{\n        if (selectedProduct) {\n            const newItem = {\n                name: selectedProduct.name,\n                imgName: selectedProduct.imgName,\n                price: selectedProduct.price,\n                quantity: selectedQuantity\n            };\n            setListOfItems([\n                ...listOfItems,\n                newItem\n            ]);\n        }\n    };\n    const listOfItems = [\n        {\n            name: \"Banana\",\n            imgName: _public_banana_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            price: 1.74,\n            quantity: 1\n        },\n        {\n            name: \"Apple\",\n            imgName: _public_apple_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            price: 2.7,\n            quantity: 2\n        },\n        {\n            name: \"Doritos\",\n            imgName: _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            price: 3.99,\n            quantity: 4\n        }\n    ];\n    const totalSum = listOfItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n    const tax = totalSum * 0.13;\n    const totalMoney = totalSum + tax;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-info rounded p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fs-2 mb-3 text-center\",\n                        children: \"Walmart PoS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-8 d-flex flex-column align-items-center flex-wrap justify-content-center mb-3\",\n                                children: listOfItems.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"row d-flex align-items-center justify-content-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1 d-flex justify-content-center\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        src: item.imgName,\n                                                        alt: item.name,\n                                                        height: 100\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"fs-4\",\n                                                            children: [\n                                                                item.quantity,\n                                                                \" x \",\n                                                                item.name\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"fs-5\",\n                                                            children: [\n                                                                \"$ \",\n                                                                item.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, item.name, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-4 d-flex flex-column align-items-center justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Subtotal: $ \",\n                                                    totalSum.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 112,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Tax (13%): $ \",\n                                                    tax.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Total: $ \",\n                                                    totalMoney.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 114,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary mt-3\",\n                                        onClick: handleClickEvent,\n                                        children: \"Checkout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/hello-near\",\n                    children: \"Read the APIs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"P0mzH7BX5/hEv/T8bkPYv5gXCMM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNPO2dEQUFHUCxXQUFVOztvREFBVTtvREFBYU4sU0FBU2MsT0FBTyxDQUFDOzs7Ozs7OzBEQUN0RCw4REFBQ0Q7Z0RBQUdQLFdBQVU7O29EQUFVO29EQUFjSCxJQUFJVyxPQUFPLENBQUM7Ozs7Ozs7MERBQ2xELDhEQUFDSDtnREFBR0wsV0FBVTs7b0RBQVU7b0RBQVVGLFdBQVdVLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7OztrREFFdkQsOERBQUNDO3dDQUFPVCxXQUFVO3dDQUF1QlUsU0FBUy9DO2tEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0xRSw4REFBQ29DO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDaEQsaURBQUlBO29CQUFDMkQsTUFBTTs4QkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkM7R0FwSHdCdEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBhcHBsZSBmcm9tIFwiLi4vLi4vcHVibGljL2FwcGxlLnBuZ1wiO1xuaW1wb3J0IGJhbmFuYSBmcm9tIFwiLi4vLi4vcHVibGljL2JhbmFuYS5wbmdcIjtcbmltcG9ydCBkb3JpdG9zIGZyb20gXCIuLi8uLi9wdWJsaWMvZG9yaXRvcy5wbmdcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3QsIHNldFNlbGVjdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlbGVjdGVkUXVhbnRpdHksIHNldFNlbGVjdGVkUXVhbnRpdHldID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXN0b21lckRhdGEgPSB7XG4gICAgICBpZDogXCIxMjM0NTZcIixcbiAgICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gICAgICBsYXN0TmFtZTogXCJEb2VcIixcbiAgICAgIGVtYWlsOiBcImpvaG4uZG9lQGV4YW1wbGUuY29tXCIsXG4gICAgICBwaG9uZTogXCIxMjMtNDU2LTc4OTBcIixcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgc3RyZWV0OiBcIjEyMyBNYWluIFN0XCIsXG4gICAgICAgIGNpdHk6IFwiQW55dG93blwiLFxuICAgICAgICBzdGF0ZTogXCJDQVwiLFxuICAgICAgICB6aXA6IFwiMTIzNDVcIixcbiAgICAgIH0sXG4gICAgICBvcmRlcnM6IFtcbiAgICAgICAgbGlzdE9mSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9yZGVySWQ6IFwiMTIzNDVcIixcbiAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UsXG4gICAgICAgICAgICBsYXN0NERpZ2l0czogXCIxMjM0XCIsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhcIkNoZWNrb3V0IGNvbXBsZXRlZCFcIiwgY3VzdG9tZXJEYXRhKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUHJvZHVjdCkge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcbiAgICAgICAgbmFtZTogc2VsZWN0ZWRQcm9kdWN0Lm5hbWUsXG4gICAgICAgIGltZ05hbWU6IHNlbGVjdGVkUHJvZHVjdC5pbWdOYW1lLFxuICAgICAgICBwcmljZTogc2VsZWN0ZWRQcm9kdWN0LnByaWNlLFxuICAgICAgICBxdWFudGl0eTogc2VsZWN0ZWRRdWFudGl0eSxcbiAgICAgIH07XG5cbiAgICAgIHNldExpc3RPZkl0ZW1zKFsuLi5saXN0T2ZJdGVtcywgbmV3SXRlbV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsaXN0T2ZJdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkJhbmFuYVwiLFxuICAgICAgaW1nTmFtZTogYmFuYW5hLFxuICAgICAgcHJpY2U6IDEuNzQsXG4gICAgICBxdWFudGl0eTogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwbGVcIixcbiAgICAgIGltZ05hbWU6IGFwcGxlLFxuICAgICAgcHJpY2U6IDIuNyxcbiAgICAgIHF1YW50aXR5OiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJEb3JpdG9zXCIsXG4gICAgICBpbWdOYW1lOiBkb3JpdG9zLFxuICAgICAgcHJpY2U6IDMuOTksXG4gICAgICBxdWFudGl0eTogNCxcbiAgICB9LFxuICBdO1xuICBjb25zdCB0b3RhbFN1bSA9IGxpc3RPZkl0ZW1zLnJlZHVjZShcbiAgICAodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksXG4gICAgMFxuICApO1xuICBjb25zdCB0YXggPSB0b3RhbFN1bSAqIDAuMTM7XG4gIGNvbnN0IHRvdGFsTW9uZXkgPSB0b3RhbFN1bSArIHRheDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNVwiPlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWluZm8gcm91bmRlZCBwLTNcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZzLTIgbWItMyB0ZXh0LWNlbnRlclwiPldhbG1hcnQgUG9TPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAge2xpc3RPZkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIga2V5PXtpdGVtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHAtMSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nTmFtZX0gYWx0PXtpdGVtLm5hbWV9IGhlaWdodD17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZzLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fSB4IHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnMtNVwiPiQge2l0ZW0ucHJpY2V9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy1ib2xkXCI+U3VidG90YWw6ICQge3RvdGFsU3VtLnRvRml4ZWQoMil9PC9oND5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5UYXggKDEzJSk6ICQge3RheC50b0ZpeGVkKDIpfTwvaDQ+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+VG90YWw6ICQge3RvdGFsTW9uZXkudG9GaXhlZCgyKX08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC0zXCIgb25DbGljaz17aGFuZGxlQ2xpY2tFdmVudH0+XG4gICAgICAgICAgICAgIENoZWNrb3V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtM1wiPlxuICAgICAgICA8TGluayBocmVmPXtcIi9oZWxsby1uZWFyXCJ9PlJlYWQgdGhlIEFQSXM8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJhcHBsZSIsImJhbmFuYSIsImRvcml0b3MiLCJOYXZCYXIiLCJIb21lIiwic2VsZWN0ZWRQcm9kdWN0Iiwic2V0U2VsZWN0ZWRQcm9kdWN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZFF1YW50aXR5Iiwic2V0U2VsZWN0ZWRRdWFudGl0eSIsImhhbmRsZUNsaWNrRXZlbnQiLCJjdXN0b21lckRhdGEiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJzdHJlZXQiLCJjaXR5Iiwic3RhdGUiLCJ6aXAiLCJvcmRlcnMiLCJsaXN0T2ZJdGVtcyIsIm1hcCIsIml0ZW0iLCJvcmRlcklkIiwicHJvZHVjdCIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwibGFzdDREaWdpdHMiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFkZFRvQ2FydCIsIm5ld0l0ZW0iLCJpbWdOYW1lIiwic2V0TGlzdE9mSXRlbXMiLCJ0b3RhbFN1bSIsInJlZHVjZSIsInRvdGFsIiwidGF4IiwidG90YWxNb25leSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwiaDIiLCJoMyIsImg0IiwidG9GaXhlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});