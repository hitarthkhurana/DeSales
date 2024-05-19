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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst BarcodeScanner = (param, ref)=>{\n    let { onBarcodeDetect } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let intervalId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isScanning, setIsScanning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const startBarcodeScanner = async ()=>{\n            if (\"BarcodeDetector\" in window) {\n                const barcodeDetector = new BarcodeDetector();\n                try {\n                    const stream = await navigator.mediaDevices.getUserMedia({\n                        video: true\n                    });\n                    if (isScanning) {\n                        videoRef.current.srcObject = stream;\n                    }\n                    intervalId.current = setInterval(async ()=>{\n                        try {\n                            if (videoRef.current && videoRef.current.readyState === 4) {\n                                const barcodes = await barcodeDetector.detect(videoRef.current);\n                                if (barcodes.length > 0) {\n                                    onBarcodeDetect(barcodes[0].rawValue);\n                                }\n                            }\n                        } catch (error) {\n                            console.error(\"Barcode detection error:\", error);\n                        }\n                    }, 1000);\n                } catch (error) {\n                    console.error(\"Error accessing camera:\", error);\n                }\n            } else {\n                console.error(\"Barcode Detection API is not supported in this browser\");\n            }\n        };\n        startBarcodeScanner();\n        return ()=>{\n            if (videoRef.current && videoRef.current.srcObject) {\n                videoRef.current.srcObject.getTracks().forEach((track)=>track.stop());\n                videoRef.current.srcObject = null;\n            }\n            if (intervalId.current) {\n                clearInterval(intervalId.current);\n            }\n        };\n    }, [\n        onBarcodeDetect,\n        isScanning\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({\n            stopBarcodeScanner: ()=>{\n                if (videoRef.current && videoRef.current.srcObject) {\n                    videoRef.current.srcObject.getTracks().forEach((track)=>track.stop());\n                    videoRef.current.srcObject = null;\n                }\n                if (intervalId.current) {\n                    clearInterval(intervalId.current);\n                }\n                setIsScanning(false);\n            }\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        height: \"600px\",\n        ref: videoRef,\n        autoPlay: true,\n        playsInline: true\n    }, void 0, false, {\n        fileName: \"/Users/sargunsinghbhatti/Documents/Documents - Sargun’s MacBook Air/GitHub/Big-Panda-Project/frontend/pos-blockchain-near-app-router/src/components/BarcodeScanner.js\",\n        lineNumber: 73,\n        columnNumber: 10\n    }, undefined);\n};\n_s(BarcodeScanner, \"wyWAccVNY8Ptxd0/aJeeJIDyID8=\");\n_c = BarcodeScanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(BarcodeScanner));\nvar _c, _c1;\n$RefreshReg$(_c, \"BarcodeScanner\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JhcmNvZGVTY2FubmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQU1lO0FBRWYsTUFBTUssaUJBQWlCLFFBQXNCQztRQUFyQixFQUFFQyxlQUFlLEVBQUU7O0lBQ3pDLE1BQU1DLFdBQVdQLDZDQUFNQSxDQUFDO0lBQ3hCLElBQUlRLGFBQWFSLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3Q0osZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxzQkFBc0I7WUFDMUIsSUFBSSxxQkFBcUJDLFFBQVE7Z0JBQy9CLE1BQU1DLGtCQUFrQixJQUFJQztnQkFFNUIsSUFBSTtvQkFDRixNQUFNQyxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO3dCQUN2REMsT0FBTztvQkFDVDtvQkFDQSxJQUFJVixZQUFZO3dCQUNkRixTQUFTYSxPQUFPLENBQUNDLFNBQVMsR0FBR047b0JBQy9CO29CQUVBUCxXQUFXWSxPQUFPLEdBQUdFLFlBQVk7d0JBQy9CLElBQUk7NEJBQ0YsSUFBSWYsU0FBU2EsT0FBTyxJQUFJYixTQUFTYSxPQUFPLENBQUNHLFVBQVUsS0FBSyxHQUFHO2dDQUN6RCxNQUFNQyxXQUFXLE1BQU1YLGdCQUFnQlksTUFBTSxDQUFDbEIsU0FBU2EsT0FBTztnQ0FDOUQsSUFBSUksU0FBU0UsTUFBTSxHQUFHLEdBQUc7b0NBQ3ZCcEIsZ0JBQWdCa0IsUUFBUSxDQUFDLEVBQUUsQ0FBQ0csUUFBUTtnQ0FDdEM7NEJBQ0Y7d0JBQ0YsRUFBRSxPQUFPQyxPQUFPOzRCQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTt3QkFDNUM7b0JBQ0YsR0FBRztnQkFDTCxFQUFFLE9BQU9BLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO2dCQUMzQztZQUNGLE9BQU87Z0JBQ0xDLFFBQVFELEtBQUssQ0FBQztZQUNoQjtRQUNGO1FBRUFqQjtRQUVBLE9BQU87WUFDTCxJQUFJSixTQUFTYSxPQUFPLElBQUliLFNBQVNhLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFO2dCQUNsRGQsU0FBU2EsT0FBTyxDQUFDQyxTQUFTLENBQUNTLFNBQVMsR0FBR0MsT0FBTyxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLElBQUk7Z0JBQ3BFMUIsU0FBU2EsT0FBTyxDQUFDQyxTQUFTLEdBQUc7WUFDL0I7WUFDQSxJQUFJYixXQUFXWSxPQUFPLEVBQUU7Z0JBQ3RCYyxjQUFjMUIsV0FBV1ksT0FBTztZQUNsQztRQUNGO0lBQ0YsR0FBRztRQUFDZDtRQUFpQkc7S0FBVztJQUVoQ1IsMERBQW1CQSxDQUFDSSxLQUFLLElBQU87WUFDOUI4QixvQkFBb0I7Z0JBQ2xCLElBQUk1QixTQUFTYSxPQUFPLElBQUliLFNBQVNhLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFO29CQUNsRGQsU0FBU2EsT0FBTyxDQUFDQyxTQUFTLENBQUNTLFNBQVMsR0FBR0MsT0FBTyxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLElBQUk7b0JBQ3BFMUIsU0FBU2EsT0FBTyxDQUFDQyxTQUFTLEdBQUc7Z0JBQy9CO2dCQUNBLElBQUliLFdBQVdZLE9BQU8sRUFBRTtvQkFDdEJjLGNBQWMxQixXQUFXWSxPQUFPO2dCQUNsQztnQkFDQVYsY0FBYztZQUNoQjtRQUNGO0lBRUEscUJBQU8sOERBQUNTO1FBQU1pQixRQUFRO1FBQVMvQixLQUFLRTtRQUFVOEIsUUFBUTtRQUFDQyxXQUFXOzs7Ozs7QUFDcEU7R0FqRU1sQztLQUFBQTtBQW1FTixrRkFBZUYsaURBQVVBLENBQUNFLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFyY29kZVNjYW5uZXIuanM/NzUyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VFZmZlY3QsXG4gIHVzZVJlZixcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgZm9yd2FyZFJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBCYXJjb2RlU2Nhbm5lciA9ICh7IG9uQmFyY29kZURldGVjdCB9LCByZWYpID0+IHtcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBpbnRlcnZhbElkID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaXNTY2FubmluZywgc2V0SXNTY2FubmluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0QmFyY29kZVNjYW5uZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoXCJCYXJjb2RlRGV0ZWN0b3JcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgY29uc3QgYmFyY29kZURldGVjdG9yID0gbmV3IEJhcmNvZGVEZXRlY3RvcigpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICAgICAgdmlkZW86IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGlzU2Nhbm5pbmcpIHtcbiAgICAgICAgICAgIHZpZGVvUmVmLmN1cnJlbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGludGVydmFsSWQuY3VycmVudCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmICh2aWRlb1JlZi5jdXJyZW50ICYmIHZpZGVvUmVmLmN1cnJlbnQucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhcmNvZGVzID0gYXdhaXQgYmFyY29kZURldGVjdG9yLmRldGVjdCh2aWRlb1JlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoYmFyY29kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgb25CYXJjb2RlRGV0ZWN0KGJhcmNvZGVzWzBdLnJhd1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYXJjb2RlIGRldGVjdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgY2FtZXJhOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYXJjb2RlIERldGVjdGlvbiBBUEkgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN0YXJ0QmFyY29kZVNjYW5uZXIoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodmlkZW9SZWYuY3VycmVudCAmJiB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCkge1xuICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdC5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGludGVydmFsSWQuY3VycmVudCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW29uQmFyY29kZURldGVjdCwgaXNTY2FubmluZ10pO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgIHN0b3BCYXJjb2RlU2Nhbm5lcjogKCkgPT4ge1xuICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQgJiYgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QpIHtcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QuZ2V0VHJhY2tzKCkuZm9yRWFjaCgodHJhY2spID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChpbnRlcnZhbElkLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkLmN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgc2V0SXNTY2FubmluZyhmYWxzZSk7XG4gICAgfSxcbiAgfSkpO1xuXG4gIHJldHVybiA8dmlkZW8gaGVpZ2h0PXtcIjYwMHB4XCJ9IHJlZj17dmlkZW9SZWZ9IGF1dG9QbGF5IHBsYXlzSW5saW5lIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihCYXJjb2RlU2Nhbm5lcik7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImZvcndhcmRSZWYiLCJ1c2VTdGF0ZSIsIkJhcmNvZGVTY2FubmVyIiwicmVmIiwib25CYXJjb2RlRGV0ZWN0IiwidmlkZW9SZWYiLCJpbnRlcnZhbElkIiwiaXNTY2FubmluZyIsInNldElzU2Nhbm5pbmciLCJzdGFydEJhcmNvZGVTY2FubmVyIiwid2luZG93IiwiYmFyY29kZURldGVjdG9yIiwiQmFyY29kZURldGVjdG9yIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidmlkZW8iLCJjdXJyZW50Iiwic3JjT2JqZWN0Iiwic2V0SW50ZXJ2YWwiLCJyZWFkeVN0YXRlIiwiYmFyY29kZXMiLCJkZXRlY3QiLCJsZW5ndGgiLCJyYXdWYWx1ZSIsImVycm9yIiwiY29uc29sZSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJjbGVhckludGVydmFsIiwic3RvcEJhcmNvZGVTY2FubmVyIiwiaGVpZ2h0IiwiYXV0b1BsYXkiLCJwbGF5c0lubGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BarcodeScanner.js\n"));

/***/ })

});