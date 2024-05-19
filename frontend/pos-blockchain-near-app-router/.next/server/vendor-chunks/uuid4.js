"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uuid4";
exports.ids = ["vendor-chunks/uuid4"];
exports.modules = {

/***/ "(ssr)/./node_modules/uuid4/index.mjs":
/*!**************************************!*\
  !*** ./node_modules/uuid4/index.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   uuid4: () => (/* binding */ uuid4),\n/* harmony export */   valid: () => (/* binding */ valid)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n\n\nconst uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;\nfunction valid(uuid) {\n  return uuidPattern.test(uuid);\n}\n\nfunction uuid4() {\n  var rnd = crypto__WEBPACK_IMPORTED_MODULE_0__.randomBytes(16);\n  rnd[6] = (rnd[6] & 0x0f) | 0x40;\n  rnd[8] = (rnd[8] & 0x3f) | 0x80;\n  rnd = rnd.toString(\"hex\").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);\n  rnd.shift();\n  return rnd.join(\"-\");\n}\nuuid4.valid = valid;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uuid4);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXVpZDQvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7O0FBRTVCLCtCQUErQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHO0FBQ3pGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0NBQWtCO0FBQzlCO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUc7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDO0FBQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL3V1aWQ0L2luZGV4Lm1qcz83YTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuXG5jb25zdCB1dWlkUGF0dGVybiA9IC9eWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tNFswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaTtcbmZ1bmN0aW9uIHZhbGlkKHV1aWQpIHtcbiAgcmV0dXJuIHV1aWRQYXR0ZXJuLnRlc3QodXVpZCk7XG59XG5cbmZ1bmN0aW9uIHV1aWQ0KCkge1xuICB2YXIgcm5kID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcbiAgcm5kWzZdID0gKHJuZFs2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kWzhdID0gKHJuZFs4XSAmIDB4M2YpIHwgMHg4MDtcbiAgcm5kID0gcm5kLnRvU3RyaW5nKFwiaGV4XCIpLm1hdGNoKC8oLns4fSkoLns0fSkoLns0fSkoLns0fSkoLnsxMn0pLyk7XG4gIHJuZC5zaGlmdCgpO1xuICByZXR1cm4gcm5kLmpvaW4oXCItXCIpO1xufVxudXVpZDQudmFsaWQgPSB2YWxpZDtcblxuZXhwb3J0IGRlZmF1bHQgdXVpZDQ7XG5leHBvcnQgeyB1dWlkNCwgdmFsaWQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uuid4/index.mjs\n");

/***/ })

};
;