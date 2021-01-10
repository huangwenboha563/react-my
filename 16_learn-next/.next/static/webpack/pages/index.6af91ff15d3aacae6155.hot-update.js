webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app-layout */ \"./components/app-layout/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/coderwhy/Desktop/React/\\u8BFE\\u5802/code/16_learn-next/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  var _this = this;\n\n  var name = props.name,\n      banners = props.banners,\n      recommends = props.recommends;\n\n  var recommentItemClick = function recommentItemClick(item) {\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({\n      pathname: \"/recommend\",\n      query: {\n        id: item\n      }\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Home\\u9875\\u9762\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"Banner\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"\\u63A8\\u8350\\u6570\\u636E\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, [1, 2, 3].map(function (item, index) {\n    return (// <Link key={item} href={`/recommend?id=${item}`}>\n      //   <li>推荐数据id:{item}</li>\n      // </Link>\n      __jsx(\"li\", {\n        key: item,\n        onClick: function onClick(e) {\n          return recommentItemClick(item);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 15\n        }\n      }, \"\\u63A8\\u8350\\u6570\\u636Eid:\", item)\n    );\n  })), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, \"name: \", name), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = Home;\n\nHome.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {\n    var res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_7___default()({\n              url: \"http://123.207.32.32:8000/home/multidata\"\n            });\n\n          case 2:\n            res = _context.sent;\n            return _context.abrupt(\"return\", {\n              name: \"why\",\n              banners: res.data.data.banner.list,\n              recommends: res.data.data.recommend.list\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJuYW1lIiwiYmFubmVycyIsInJlY29tbWVuZHMiLCJyZWNvbW1lbnRJdGVtQ2xpY2siLCJpdGVtIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCIsInN0eWxlcyIsInRpdGxlIiwibWFwIiwiaW5kZXgiLCJlIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJ1cmwiLCJyZXMiLCJkYXRhIiwiYmFubmVyIiwibGlzdCIsInJlY29tbWVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBVUMsS0FBVixFQUFpQjtBQUFBOztBQUFBLE1BQ3BCQyxJQURvQixHQUNVRCxLQURWLENBQ3BCQyxJQURvQjtBQUFBLE1BQ2RDLE9BRGMsR0FDVUYsS0FEVixDQUNkRSxPQURjO0FBQUEsTUFDTEMsVUFESyxHQUNVSCxLQURWLENBQ0xHLFVBREs7O0FBRzVCLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ25DQyxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDVkMsY0FBUSxFQUFFLFlBREE7QUFFVkMsV0FBSyxFQUFFO0FBQ0xDLFVBQUUsRUFBRUw7QUFEQztBQUZHLEtBQVo7QUFNRCxHQVBEOztBQVNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUksYUFBUyxFQUFFTSw4REFBTSxDQUFDQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVQyxHQUFWLENBQWMsVUFBQ1IsSUFBRCxFQUFPUyxLQUFQLEVBQWlCO0FBQzdCLFdBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFBSSxXQUFHLEVBQUVULElBQVQ7QUFBZSxlQUFPLEVBQUUsaUJBQUFVLENBQUM7QUFBQSxpQkFBSVgsa0JBQWtCLENBQUNDLElBQUQsQ0FBdEI7QUFBQSxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUErREEsSUFBL0Q7QUFKRjtBQU1ELEdBUEQsQ0FGSixDQVRGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0osSUFBWCxDQXJCRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLENBREY7QUEwQkQsQ0F0Q0Q7O0tBQU1GLEk7O0FBd0NOQSxJQUFJLENBQUNpQixlQUFMO0FBQUEsOExBQXVCLGlCQUFPaEIsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNIaUIsNENBQUssQ0FBQztBQUFFQyxpQkFBRyxFQUFFO0FBQVAsYUFBRCxDQURGOztBQUFBO0FBQ2ZDLGVBRGU7QUFBQSw2Q0FHZDtBQUNMbEIsa0JBQUksRUFBRSxLQUREO0FBRUxDLHFCQUFPLEVBQUVpQixHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVCxDQUFjQyxNQUFkLENBQXFCQyxJQUZ6QjtBQUdMbkIsd0JBQVUsRUFBRWdCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQSxJQUFULENBQWNHLFNBQWQsQ0FBd0JEO0FBSC9CLGFBSGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWV2QixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYXBwLWxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEhvbWUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3QgeyBuYW1lLCBiYW5uZXJzLCByZWNvbW1lbmRzIH0gPSBwcm9wcztcblxuICBjb25zdCByZWNvbW1lbnRJdGVtQ2xpY2sgPSAoaXRlbSkgPT4ge1xuICAgIFJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBcIi9yZWNvbW1lbmRcIixcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIGlkOiBpdGVtXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8YSBocmVmPVwiL2Fib3V0XCI+5YWz5LqOPC9hPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICA8YT7lhbPkuo48L2E+XG4gICAgICA8L0xpbms+ICovfVxuXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkhvbWXpobXpnaI8L2gxPlxuICAgICAgPGgyPkJhbm5lcjwvaDI+XG4gICAgICA8aDI+5o6o6I2Q5pWw5o2uPC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgIFsxLCAyLCAzXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAvLyA8TGluayBrZXk9e2l0ZW19IGhyZWY9e2AvcmVjb21tZW5kP2lkPSR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgLy8gICA8bGk+5o6o6I2Q5pWw5o2uaWQ6e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgLy8gPC9MaW5rPlxuICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtfSBvbkNsaWNrPXtlID0+IHJlY29tbWVudEl0ZW1DbGljayhpdGVtKX0+5o6o6I2Q5pWw5o2uaWQ6e2l0ZW19PC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICAgPGgyPm5hbWU6IHtuYW1lfTwvaDI+XG4gICAgICA8aDI+PC9oMj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7IHVybDogXCJodHRwOi8vMTIzLjIwNy4zMi4zMjo4MDAwL2hvbWUvbXVsdGlkYXRhXCIgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcIndoeVwiLFxuICAgIGJhbm5lcnM6IHJlcy5kYXRhLmRhdGEuYmFubmVyLmxpc3QsXG4gICAgcmVjb21tZW5kczogcmVzLmRhdGEuZGF0YS5yZWNvbW1lbmQubGlzdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})