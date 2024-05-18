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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _public_apple_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/apple.png */ \"(app-pages-browser)/./public/apple.png\");\n/* harmony import */ var _public_banana_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/banana.png */ \"(app-pages-browser)/./public/banana.png\");\n/* harmony import */ var _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/doritos.png */ \"(app-pages-browser)/./public/doritos.png\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nfunction Home() {\n    const handleClickEvent = ()=>{\n        const customerData = {\n            id: \"123456\",\n            firstName: \"John\",\n            lastName: \"Doe\",\n            email: \"john.doe@example.com\",\n            phone: \"123-456-7890\",\n            address: {\n                street: \"123 Main St\",\n                city: \"Anytown\",\n                state: \"CA\",\n                zip: \"12345\"\n            },\n            orders: [\n                listOfItems.map((item)=>{\n                    return {\n                        orderId: \"12345\",\n                        product: item.name,\n                        quantity: item.quantity,\n                        price: item.price,\n                        last4Digits: \"1234\",\n                        date: new Date().toISOString()\n                    };\n                })\n            ]\n        };\n        console.log(\"Checkout completed!\", customerData);\n    };\n    const listOfItems = [\n        {\n            name: \"Banana\",\n            imgName: _public_banana_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            price: 1.74,\n            quantity: 1\n        },\n        {\n            name: \"Apple\",\n            imgName: _public_apple_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            price: 2.7,\n            quantity: 2\n        },\n        {\n            name: \"Doritos\",\n            imgName: _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            price: 3.99,\n            quantity: 4\n        }\n    ];\n    const totalSum = listOfItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n    const tax = totalSum * 0.13;\n    const totalMoney = totalSum + tax;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-info rounded p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fs-2 mb-3 text-center\",\n                        children: \"Walmart PoS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-8 d-flex flex-column align-items-center flex-wrap justify-content-center mb-3\",\n                                children: listOfItems.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"row\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col-sm\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        src: item.imgName,\n                                                        alt: item.name,\n                                                        height: 100\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col-sm p-2\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"fs-4\",\n                                                            children: [\n                                                                item.quantity,\n                                                                \" x \",\n                                                                item.name\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"fs-5\",\n                                                            children: [\n                                                                \"$ \",\n                                                                item.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, item.name, true, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-4 d-flex flex-column align-items-center justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Subtotal: $ \",\n                                                    totalSum.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Tax (13%): $ \",\n                                                    tax.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 97,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Total: $ \",\n                                                    totalMoney.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary mt-3\",\n                                        onClick: handleClickEvent,\n                                        children: \"Checkout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/hello-near\",\n                    children: \"Read the APIs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3hDLGlEQUFJQTtvQkFBQ21ELE1BQU07OEJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DO0tBcEd3QjlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXBwbGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9hcHBsZS5wbmdcIjtcbmltcG9ydCBiYW5hbmEgZnJvbSBcIi4uLy4uL3B1YmxpYy9iYW5hbmEucG5nXCI7XG5pbXBvcnQgZG9yaXRvcyBmcm9tIFwiLi4vLi4vcHVibGljL2Rvcml0b3MucG5nXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBoYW5kbGVDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1c3RvbWVyRGF0YSA9IHtcbiAgICAgIGlkOiBcIjEyMzQ1NlwiLFxuICAgICAgZmlyc3ROYW1lOiBcIkpvaG5cIixcbiAgICAgIGxhc3ROYW1lOiBcIkRvZVwiLFxuICAgICAgZW1haWw6IFwiam9obi5kb2VAZXhhbXBsZS5jb21cIixcbiAgICAgIHBob25lOiBcIjEyMy00NTYtNzg5MFwiLFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICBzdHJlZXQ6IFwiMTIzIE1haW4gU3RcIixcbiAgICAgICAgY2l0eTogXCJBbnl0b3duXCIsXG4gICAgICAgIHN0YXRlOiBcIkNBXCIsXG4gICAgICAgIHppcDogXCIxMjM0NVwiLFxuICAgICAgfSxcbiAgICAgIG9yZGVyczogW1xuICAgICAgICBsaXN0T2ZJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JkZXJJZDogXCIxMjM0NVwiLFxuICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5uYW1lLFxuICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcbiAgICAgICAgICAgIGxhc3Q0RGlnaXRzOiBcIjEyMzRcIixcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tvdXQgY29tcGxldGVkIVwiLCBjdXN0b21lckRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGxpc3RPZkl0ZW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQmFuYW5hXCIsXG4gICAgICBpbWdOYW1lOiBiYW5hbmEsXG4gICAgICBwcmljZTogMS43NCxcbiAgICAgIHF1YW50aXR5OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBcHBsZVwiLFxuICAgICAgaW1nTmFtZTogYXBwbGUsXG4gICAgICBwcmljZTogMi43LFxuICAgICAgcXVhbnRpdHk6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkRvcml0b3NcIixcbiAgICAgIGltZ05hbWU6IGRvcml0b3MsXG4gICAgICBwcmljZTogMy45OSxcbiAgICAgIHF1YW50aXR5OiA0LFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHRvdGFsU3VtID0gbGlzdE9mSXRlbXMucmVkdWNlKFxuICAgICh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSxcbiAgICAwXG4gICk7XG4gIGNvbnN0IHRheCA9IHRvdGFsU3VtICogMC4xMztcbiAgY29uc3QgdG90YWxNb25leSA9IHRvdGFsU3VtICsgdGF4O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01XCI+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItaW5mbyByb3VuZGVkIHAtM1wiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnMtMiBtYi0zIHRleHQtY2VudGVyXCI+V2FsbWFydCBQb1M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICB7bGlzdE9mSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdOYW1lfSBhbHQ9e2l0ZW0ubmFtZX0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjb2wtc20gcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZzLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fSB4IHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnMtNVwiPiQge2l0ZW0ucHJpY2V9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy1ib2xkXCI+U3VidG90YWw6ICQge3RvdGFsU3VtLnRvRml4ZWQoMil9PC9oND5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5UYXggKDEzJSk6ICQge3RheC50b0ZpeGVkKDIpfTwvaDQ+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+VG90YWw6ICQge3RvdGFsTW9uZXkudG9GaXhlZCgyKX08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC0zXCIgb25DbGljaz17aGFuZGxlQ2xpY2tFdmVudH0+XG4gICAgICAgICAgICAgIENoZWNrb3V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtM1wiPlxuICAgICAgICA8TGluayBocmVmPXtcIi9oZWxsby1uZWFyXCJ9PlJlYWQgdGhlIEFQSXM8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJhcHBsZSIsImJhbmFuYSIsImRvcml0b3MiLCJOYXZCYXIiLCJIb21lIiwiaGFuZGxlQ2xpY2tFdmVudCIsImN1c3RvbWVyRGF0YSIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwiYWRkcmVzcyIsInN0cmVldCIsImNpdHkiLCJzdGF0ZSIsInppcCIsIm9yZGVycyIsImxpc3RPZkl0ZW1zIiwibWFwIiwiaXRlbSIsIm9yZGVySWQiLCJwcm9kdWN0IiwibmFtZSIsInF1YW50aXR5IiwicHJpY2UiLCJsYXN0NERpZ2l0cyIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiaW1nTmFtZSIsInRvdGFsU3VtIiwicmVkdWNlIiwidG90YWwiLCJ0YXgiLCJ0b3RhbE1vbmV5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJoMiIsImgzIiwiaDQiLCJ0b0ZpeGVkIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});