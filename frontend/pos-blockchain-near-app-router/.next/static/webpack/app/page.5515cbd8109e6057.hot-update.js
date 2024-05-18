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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _public_apple_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/apple.png */ \"(app-pages-browser)/./public/apple.png\");\n/* harmony import */ var _public_banana_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/banana.png */ \"(app-pages-browser)/./public/banana.png\");\n/* harmony import */ var _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/doritos.png */ \"(app-pages-browser)/./public/doritos.png\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nfunction Home() {\n    const handleClickEvent = ()=>{\n        const customerData = {\n            id: \"123456\",\n            firstName: \"John\",\n            lastName: \"Doe\",\n            email: \"john.doe@example.com\",\n            phone: \"123-456-7890\",\n            address: {\n                street: \"123 Main St\",\n                city: \"Anytown\",\n                state: \"CA\",\n                zip: \"12345\"\n            },\n            orders: [\n                listOfItems.map((item)=>{\n                    return {\n                        orderId: \"12345\",\n                        product: item.name,\n                        quantity: item.quantity,\n                        price: item.price,\n                        last4Digits: \"1234\",\n                        date: new Date().toISOString()\n                    };\n                })\n            ]\n        };\n        console.log(\"Checkout completed!\", customerData);\n    };\n    const listOfItems = [\n        {\n            name: \"Banana\",\n            imgName: _public_banana_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            price: 1.74,\n            quantity: 1\n        },\n        {\n            name: \"Apple\",\n            imgName: _public_apple_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            price: 2.7,\n            quantity: 2\n        },\n        {\n            name: \"Doritos\",\n            imgName: _public_doritos_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            price: 3.99,\n            quantity: 4\n        }\n    ];\n    const totalSum = listOfItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n    const tax = totalSum * 0.13;\n    const totalMoney = totalSum + tax;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-info rounded p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fs-2 mb-3 text-center\",\n                        children: \"Walmart PoS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-8 d-flex flex-column align-items-center flex-wrap justify-content-center mb-3\",\n                                children: listOfItems.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"row d-flex align-items-center justify-content-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1 d-flex justify-content-center\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        src: item.imgName,\n                                                        alt: item.name,\n                                                        height: 100\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"col p-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"fs-4\",\n                                                            children: [\n                                                                item.quantity,\n                                                                \" x \",\n                                                                item.name\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"fs-5\",\n                                                            children: [\n                                                                \"$ \",\n                                                                item.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, item.name, true, {\n                                                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, item.name, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-4 d-flex flex-column align-items-center justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Subtotal: $ \",\n                                                    totalSum.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Tax (13%): $ \",\n                                                    tax.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 97,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"fw-bold\",\n                                                children: [\n                                                    \"Total: $ \",\n                                                    totalMoney.toFixed(2)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary mt-3\",\n                                        onClick: handleClickEvent,\n                                        children: \"Checkout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/hello-near\",\n                    children: \"Read the APIs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/page.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzBCQU0xRSw4REFBQ2lDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDeEMsaURBQUlBO29CQUFDbUQsTUFBTTs4QkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkM7S0FwR3dCOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBhcHBsZSBmcm9tIFwiLi4vLi4vcHVibGljL2FwcGxlLnBuZ1wiO1xuaW1wb3J0IGJhbmFuYSBmcm9tIFwiLi4vLi4vcHVibGljL2JhbmFuYS5wbmdcIjtcbmltcG9ydCBkb3JpdG9zIGZyb20gXCIuLi8uLi9wdWJsaWMvZG9yaXRvcy5wbmdcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VzdG9tZXJEYXRhID0ge1xuICAgICAgaWQ6IFwiMTIzNDU2XCIsXG4gICAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxuICAgICAgbGFzdE5hbWU6IFwiRG9lXCIsXG4gICAgICBlbWFpbDogXCJqb2huLmRvZUBleGFtcGxlLmNvbVwiLFxuICAgICAgcGhvbmU6IFwiMTIzLTQ1Ni03ODkwXCIsXG4gICAgICBhZGRyZXNzOiB7XG4gICAgICAgIHN0cmVldDogXCIxMjMgTWFpbiBTdFwiLFxuICAgICAgICBjaXR5OiBcIkFueXRvd25cIixcbiAgICAgICAgc3RhdGU6IFwiQ0FcIixcbiAgICAgICAgemlwOiBcIjEyMzQ1XCIsXG4gICAgICB9LFxuICAgICAgb3JkZXJzOiBbXG4gICAgICAgIGxpc3RPZkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlcklkOiBcIjEyMzQ1XCIsXG4gICAgICAgICAgICBwcm9kdWN0OiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxuICAgICAgICAgICAgbGFzdDREaWdpdHM6IFwiMTIzNFwiLFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coXCJDaGVja291dCBjb21wbGV0ZWQhXCIsIGN1c3RvbWVyRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgbGlzdE9mSXRlbXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJCYW5hbmFcIixcbiAgICAgIGltZ05hbWU6IGJhbmFuYSxcbiAgICAgIHByaWNlOiAxLjc0LFxuICAgICAgcXVhbnRpdHk6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkFwcGxlXCIsXG4gICAgICBpbWdOYW1lOiBhcHBsZSxcbiAgICAgIHByaWNlOiAyLjcsXG4gICAgICBxdWFudGl0eTogMixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRG9yaXRvc1wiLFxuICAgICAgaW1nTmFtZTogZG9yaXRvcyxcbiAgICAgIHByaWNlOiAzLjk5LFxuICAgICAgcXVhbnRpdHk6IDQsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgdG90YWxTdW0gPSBsaXN0T2ZJdGVtcy5yZWR1Y2UoXG4gICAgKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5LFxuICAgIDBcbiAgKTtcbiAgY29uc3QgdGF4ID0gdG90YWxTdW0gKiAwLjEzO1xuICBjb25zdCB0b3RhbE1vbmV5ID0gdG90YWxTdW0gKyB0YXg7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTVcIj5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1pbmZvIHJvdW5kZWQgcC0zXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmcy0yIG1iLTMgdGV4dC1jZW50ZXJcIj5XYWxtYXJ0IFBvUzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgIHtsaXN0T2ZJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGtleT17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwLTEgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ05hbWV9IGFsdD17aXRlbS5uYW1lfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNvbCBwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnMtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9IHgge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmcy01XCI+JCB7aXRlbS5wcmljZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5TdWJ0b3RhbDogJCB7dG90YWxTdW0udG9GaXhlZCgyKX08L2g0PlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlRheCAoMTMlKTogJCB7dGF4LnRvRml4ZWQoMil9PC9oND5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5Ub3RhbDogJCB7dG90YWxNb25leS50b0ZpeGVkKDIpfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0V2ZW50fT5cbiAgICAgICAgICAgICAgQ2hlY2tvdXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0zXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL2hlbGxvLW5lYXJcIn0+UmVhZCB0aGUgQVBJczwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsImFwcGxlIiwiYmFuYW5hIiwiZG9yaXRvcyIsIk5hdkJhciIsIkhvbWUiLCJoYW5kbGVDbGlja0V2ZW50IiwiY3VzdG9tZXJEYXRhIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwic3RyZWV0IiwiY2l0eSIsInN0YXRlIiwiemlwIiwib3JkZXJzIiwibGlzdE9mSXRlbXMiLCJtYXAiLCJpdGVtIiwib3JkZXJJZCIsInByb2R1Y3QiLCJuYW1lIiwicXVhbnRpdHkiLCJwcmljZSIsImxhc3Q0RGlnaXRzIiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJpbWdOYW1lIiwidG90YWxTdW0iLCJyZWR1Y2UiLCJ0b3RhbCIsInRheCIsInRvdGFsTW9uZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNyYyIsImFsdCIsImhlaWdodCIsImgyIiwiaDMiLCJoNCIsInRvRml4ZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});