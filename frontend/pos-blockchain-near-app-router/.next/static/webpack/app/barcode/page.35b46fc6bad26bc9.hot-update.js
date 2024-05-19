"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/barcode/page",{

/***/ "(app-pages-browser)/./src/app/barcode/page.js":
/*!*********************************!*\
  !*** ./src/app/barcode/page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BarcodeScanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BarcodeScanner */ \"(app-pages-browser)/./src/components/BarcodeScanner.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BarcodePage = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [detectedBarcode, setDetectedBarcode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const scannerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleBarcodeDetect = (barcode)=>{\n        setDetectedBarcode(barcode);\n        if (scannerRef.current) {\n            scannerRef.current.stopBarcodeScanner();\n        }\n        router.push({\n            pathname: \"/\",\n            query: {\n                barcode\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: \"100vh\",\n            textAlign: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Scan your product via Barcode!\"\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/barcode/page.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BarcodeScanner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    ref: scannerRef,\n                    onBarcodeDetect: handleBarcodeDetect\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/barcode/page.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                detectedBarcode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Detected Barcode: \",\n                        detectedBarcode\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/barcode/page.js\",\n                    lineNumber: 38,\n                    columnNumber: 29\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary mt-3\",\n                        children: \"Return to Cart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/barcode/page.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/barcode/page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/barcode/page.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/app/barcode/page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BarcodePage, \"Zspw7UHtKzx1zdiW1wFnIxZhGS4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = BarcodePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarcodePage);\nvar _c;\n$RefreshReg$(_c, \"BarcodePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmFyY29kZS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV5QztBQUNvQjtBQUNoQztBQUNlO0FBRTVDLE1BQU1LLGNBQWM7O0lBQ2xCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLGlCQUFpQkMsbUJBQW1CLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU1TLGFBQWFSLDZDQUFNQSxDQUFDO0lBRTFCLE1BQU1TLHNCQUFzQixDQUFDQztRQUMzQkgsbUJBQW1CRztRQUNuQixJQUFJRixXQUFXRyxPQUFPLEVBQUU7WUFDdEJILFdBQVdHLE9BQU8sQ0FBQ0Msa0JBQWtCO1FBQ3ZDO1FBQ0FQLE9BQU9RLElBQUksQ0FBQztZQUNWQyxVQUFVO1lBQ1ZDLE9BQU87Z0JBQUVMO1lBQVE7UUFDbkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTTtRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLFFBQVE7WUFDUkMsV0FBVztRQUNiO2tCQUVBLDRFQUFDTjs7OEJBQ0MsOERBQUNPOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUN0QixrRUFBY0E7b0JBQ3ZCdUIsS0FBTWhCO29CQUFtQmlCLGlCQUFpQmhCOzs7Ozs7Z0JBQ2pDSCxpQ0FBbUIsOERBQUNvQjs7d0JBQUU7d0JBQW1CcEI7Ozs7Ozs7OEJBQzFDLDhEQUFDSixpREFBSUE7b0JBQUN5QixNQUFLOzhCQUNULDRFQUFDQzt3QkFBT0MsV0FBVTtrQ0FBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkQ7R0F2Q016Qjs7UUFDV0Qsc0RBQVNBOzs7S0FEcEJDO0FBeUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYmFyY29kZS9wYWdlLmpzPzgwODIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYXJjb2RlU2Nhbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CYXJjb2RlU2Nhbm5lclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBCYXJjb2RlUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtkZXRlY3RlZEJhcmNvZGUsIHNldERldGVjdGVkQmFyY29kZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgc2Nhbm5lclJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVCYXJjb2RlRGV0ZWN0ID0gKGJhcmNvZGUpID0+IHtcbiAgICBzZXREZXRlY3RlZEJhcmNvZGUoYmFyY29kZSk7XG4gICAgaWYgKHNjYW5uZXJSZWYuY3VycmVudCkge1xuICAgICAgc2Nhbm5lclJlZi5jdXJyZW50LnN0b3BCYXJjb2RlU2Nhbm5lcigpO1xuICAgIH1cbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogXCIvXCIsXG4gICAgICBxdWVyeTogeyBiYXJjb2RlIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5TY2FuIHlvdXIgcHJvZHVjdCB2aWEgQmFyY29kZSE8L2gxPlxuICAgICAgICA8QmFyY29kZVNjYW5uZXIgXG5yZWYgPXtzY2FubmVyUmVmfSAgICAgICAgb25CYXJjb2RlRGV0ZWN0PXtoYW5kbGVCYXJjb2RlRGV0ZWN0fSAvPlxuICAgICAgICB7ZGV0ZWN0ZWRCYXJjb2RlICYmIDxwPkRldGVjdGVkIEJhcmNvZGU6IHtkZXRlY3RlZEJhcmNvZGV9PC9wPn1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC0zXCI+XG4gICAgICAgICAgICBSZXR1cm4gdG8gQ2FydFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwiQmFyY29kZVNjYW5uZXIiLCJMaW5rIiwidXNlUm91dGVyIiwiQmFyY29kZVBhZ2UiLCJyb3V0ZXIiLCJkZXRlY3RlZEJhcmNvZGUiLCJzZXREZXRlY3RlZEJhcmNvZGUiLCJzY2FubmVyUmVmIiwiaGFuZGxlQmFyY29kZURldGVjdCIsImJhcmNvZGUiLCJjdXJyZW50Iiwic3RvcEJhcmNvZGVTY2FubmVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJoMSIsInJlZiIsIm9uQmFyY29kZURldGVjdCIsInAiLCJocmVmIiwiYnV0dG9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/barcode/page.js\n"));

/***/ })

});