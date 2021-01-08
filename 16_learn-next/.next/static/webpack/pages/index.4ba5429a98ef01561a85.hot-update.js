webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_app_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/app-layout */ \"./components/app-layout/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/coderwhy/Desktop/React/\\u8BFE\\u5802/code/16_learn-next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"];\n\n  var recommentItemClick = function recommentItemClick(item) {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: \"/recommend\",\n      query: {\n        id: item\n      }\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {}, []);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"Home\\u9875\\u9762\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"Banner\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"\\u63A8\\u8350\\u6570\\u636E\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, [1, 2, 3].map(function (item, index) {\n    return (// <Link key={item} href={`/recommend?id=${item}`}>\n      //   <li>推荐数据id:{item}</li>\n      // </Link>\n      __jsx(\"li\", {\n        key: item,\n        onClick: function onClick(e) {\n          return recommentItemClick(item);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 15\n        }\n      }, \"\\u63A8\\u8350\\u6570\\u636Eid:\", item)\n    );\n  })));\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJyZWNvbW1lbnRJdGVtQ2xpY2siLCJpdGVtIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCIsInVzZUVmZmVjdCIsInN0eWxlcyIsInRpdGxlIiwibWFwIiwiaW5kZXgiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCQyxnREFBUTs7QUFFUixNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLElBQUQsRUFBVTtBQUNuQ0Msc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1ZDLGNBQVEsRUFBRSxZQURBO0FBRVZDLFdBQUssRUFBRTtBQUNMQyxVQUFFLEVBQUVMO0FBREM7QUFGRyxLQUFaO0FBTUQsR0FQRDs7QUFTQU0seURBQVMsQ0FBQyxZQUFNLENBQ2YsQ0FEUSxFQUNOLEVBRE0sQ0FBVDtBQUdBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUksYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVQyxHQUFWLENBQWMsVUFBQ1QsSUFBRCxFQUFPVSxLQUFQLEVBQWlCO0FBQzdCLFdBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFBSSxXQUFHLEVBQUVWLElBQVQ7QUFBZSxlQUFPLEVBQUUsaUJBQUFXLENBQUM7QUFBQSxpQkFBSVosa0JBQWtCLENBQUNDLElBQUQsQ0FBdEI7QUFBQSxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUErREEsSUFBL0Q7QUFKRjtBQU1ELEdBUEQsQ0FGSixDQVRGLENBREY7QUF3QkQ7O0dBdkN1QkgsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hcHAtbGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgdXNlU3RhdGVcblxuICBjb25zdCByZWNvbW1lbnRJdGVtQ2xpY2sgPSAoaXRlbSkgPT4ge1xuICAgIFJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBcIi9yZWNvbW1lbmRcIixcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIGlkOiBpdGVtXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8YSBocmVmPVwiL2Fib3V0XCI+5YWz5LqOPC9hPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICA8YT7lhbPkuo48L2E+XG4gICAgICA8L0xpbms+ICovfVxuXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkhvbWXpobXpnaI8L2gxPlxuICAgICAgPGgyPkJhbm5lcjwvaDI+XG4gICAgICA8aDI+5o6o6I2Q5pWw5o2uPC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgIFsxLCAyLCAzXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAvLyA8TGluayBrZXk9e2l0ZW19IGhyZWY9e2AvcmVjb21tZW5kP2lkPSR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgLy8gICA8bGk+5o6o6I2Q5pWw5o2uaWQ6e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgLy8gPC9MaW5rPlxuICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtfSBvbkNsaWNrPXtlID0+IHJlY29tbWVudEl0ZW1DbGljayhpdGVtKX0+5o6o6I2Q5pWw5o2uaWQ6e2l0ZW19PC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})