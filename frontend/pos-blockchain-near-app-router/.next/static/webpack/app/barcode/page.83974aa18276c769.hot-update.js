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

/***/ "(app-pages-browser)/./src/components/BarcodeScanner.js":
/*!******************************************!*\
  !*** ./src/components/BarcodeScanner.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst BarcodeScanner = (param)=>{\n    let { onBarcodeDetect } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let intervalId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isScanning, setIsScanning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let intervalId;\n        const startBarcodeScanner = async ()=>{\n            if (\"BarcodeDetector\" in window) {\n                const barcodeDetector = new BarcodeDetector();\n                try {\n                    const stream = await navigator.mediaDevices.getUserMedia({\n                        video: true\n                    });\n                    if (videoRef.current) {\n                        videoRef.current.srcObject = stream;\n                    }\n                    intervalId = setInterval(async ()=>{\n                        if (videoRef.current) {\n                            try {\n                                const barcodes = await barcodeDetector.detect(videoRef.current);\n                                if (barcodes.length > 0) {\n                                    onBarcodeDetect(barcodes[0].rawValue);\n                                }\n                            } catch (error) {\n                                console.error(\"Barcode detection error:\", error);\n                            }\n                        }\n                    }, 1000);\n                } catch (error) {\n                    console.error(\"Error accessing camera:\", error);\n                }\n            } else {\n                console.error(\"Barcode Detection API is not supported in this browser\");\n            }\n        };\n        startBarcodeScanner();\n        return ()=>{\n            if (videoRef.current) {\n                if (videoRef.current.srcObject) {\n                    videoRef.current.srcObject.getTracks().forEach((track)=>track.stop());\n                    videoRef.current.srcObject = null;\n                }\n                if (intervalId.current) {\n                    clearInterval(intervalId.current);\n                }\n            }\n        };\n    }, [\n        onBarcodeDetect\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        ref: videoRef,\n        autoPlay: true,\n        playsInline: true\n    }, void 0, false, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/components/BarcodeScanner.js\",\n        lineNumber: 60,\n        columnNumber: 10\n    }, undefined);\n};\n_s(BarcodeScanner, \"xgrh8d0buKI75FYnjVgQO1f9qMo=\");\n_c = BarcodeScanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarcodeScanner);\nvar _c;\n$RefreshReg$(_c, \"BarcodeScanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVTY2FubmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUVwRCxNQUFNRyxpQkFBaUI7UUFBQyxFQUFFQyxlQUFlLEVBQUU7O0lBQ3pDLE1BQU1DLFdBQVdKLDZDQUFNQSxDQUFDO0lBQ3hCLElBQUlLLGFBQWFMLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3Q0YsZ0RBQVNBLENBQUM7UUFDUixJQUFJTTtRQUNKLE1BQU1HLHNCQUFzQjtZQUMxQixJQUFJLHFCQUFxQkMsUUFBUTtnQkFDL0IsTUFBTUMsa0JBQWtCLElBQUlDO2dCQUU1QixJQUFJO29CQUNGLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7d0JBQ3ZEQyxPQUFPO29CQUNUO29CQUVBLElBQUlaLFNBQVNhLE9BQU8sRUFBRTt3QkFDcEJiLFNBQVNhLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHTjtvQkFDL0I7b0JBRUFQLGFBQWFjLFlBQVk7d0JBQ3ZCLElBQUlmLFNBQVNhLE9BQU8sRUFBRTs0QkFDcEIsSUFBSTtnQ0FDRixNQUFNRyxXQUFXLE1BQU1WLGdCQUFnQlcsTUFBTSxDQUFDakIsU0FBU2EsT0FBTztnQ0FDOUQsSUFBSUcsU0FBU0UsTUFBTSxHQUFHLEdBQUc7b0NBQ3ZCbkIsZ0JBQWdCaUIsUUFBUSxDQUFDLEVBQUUsQ0FBQ0csUUFBUTtnQ0FDdEM7NEJBQ0YsRUFBRSxPQUFPQyxPQUFPO2dDQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTs0QkFDNUM7d0JBQ0Y7b0JBQ0YsR0FBRztnQkFDTCxFQUFFLE9BQU9BLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO2dCQUMzQztZQUNGLE9BQU87Z0JBQ0xDLFFBQVFELEtBQUssQ0FBQztZQUNoQjtRQUNGO1FBRUFoQjtRQUVBLE9BQU87WUFDTCxJQUFJSixTQUFTYSxPQUFPLEVBQUU7Z0JBQ3BCLElBQUliLFNBQVNhLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFO29CQUM5QmQsU0FBU2EsT0FBTyxDQUFDQyxTQUFTLENBQ3ZCUSxTQUFTLEdBQ1RDLE9BQU8sQ0FBQyxDQUFDQyxRQUFVQSxNQUFNQyxJQUFJO29CQUNoQ3pCLFNBQVNhLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHO2dCQUMvQjtnQkFDQSxJQUFJYixXQUFXWSxPQUFPLEVBQUU7b0JBQ3RCYSxjQUFjekIsV0FBV1ksT0FBTztnQkFDbEM7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDZDtLQUFnQjtJQUVwQixxQkFBTyw4REFBQ2E7UUFBTWUsS0FBSzNCO1FBQVU0QixRQUFRO1FBQUNDLFdBQVc7Ozs7OztBQUNuRDtHQTFETS9CO0tBQUFBO0FBNEROLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVTY2FubmVyLmpzPzc1MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEJhcmNvZGVTY2FubmVyID0gKHsgb25CYXJjb2RlRGV0ZWN0IH0pID0+IHtcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBpbnRlcnZhbElkID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaXNTY2FubmluZywgc2V0SXNTY2FubmluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpbnRlcnZhbElkO1xuICAgIGNvbnN0IHN0YXJ0QmFyY29kZVNjYW5uZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoXCJCYXJjb2RlRGV0ZWN0b3JcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgY29uc3QgYmFyY29kZURldGVjdG9yID0gbmV3IEJhcmNvZGVEZXRlY3RvcigpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICAgICAgdmlkZW86IHRydWUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xuICAgICAgICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFyY29kZXMgPSBhd2FpdCBiYXJjb2RlRGV0ZWN0b3IuZGV0ZWN0KHZpZGVvUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChiYXJjb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBvbkJhcmNvZGVEZXRlY3QoYmFyY29kZXNbMF0ucmF3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFyY29kZSBkZXRlY3Rpb24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgY2FtZXJhOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYXJjb2RlIERldGVjdGlvbiBBUEkgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN0YXJ0QmFyY29kZVNjYW5uZXIoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xuICAgICAgICBpZiAodmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QpIHtcbiAgICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdFxuICAgICAgICAgICAgLmdldFRyYWNrcygpXG4gICAgICAgICAgICAuZm9yRWFjaCgodHJhY2spID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcnZhbElkLmN1cnJlbnQpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9LCBbb25CYXJjb2RlRGV0ZWN0XSk7XG5cbiAgcmV0dXJuIDx2aWRlbyByZWY9e3ZpZGVvUmVmfSBhdXRvUGxheSBwbGF5c0lubGluZSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhcmNvZGVTY2FubmVyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQmFyY29kZVNjYW5uZXIiLCJvbkJhcmNvZGVEZXRlY3QiLCJ2aWRlb1JlZiIsImludGVydmFsSWQiLCJpc1NjYW5uaW5nIiwic2V0SXNTY2FubmluZyIsInN0YXJ0QmFyY29kZVNjYW5uZXIiLCJ3aW5kb3ciLCJiYXJjb2RlRGV0ZWN0b3IiLCJCYXJjb2RlRGV0ZWN0b3IiLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsImN1cnJlbnQiLCJzcmNPYmplY3QiLCJzZXRJbnRlcnZhbCIsImJhcmNvZGVzIiwiZGV0ZWN0IiwibGVuZ3RoIiwicmF3VmFsdWUiLCJlcnJvciIsImNvbnNvbGUiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInJlZiIsImF1dG9QbGF5IiwicGxheXNJbmxpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BarcodeScanner.js\n"));

/***/ })

});