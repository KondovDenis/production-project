"use strict";
(self["webpackChunkproduction_project"] = self["webpackChunkproduction_project"] || []).push([["src_pages_MainPage_ui_MainPage_tsx"],{

/***/ "./src/app/providers/ErrorBoundary/ui/BugButton.tsx":
/*!**********************************************************!*\
  !*** ./src/app/providers/ErrorBoundary/ui/BugButton.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BugButton": () => (/* binding */ BugButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};



var BugButton = function BugButton(_a) {
  var className = _a.className;
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    error = _b[0],
    setError = _b[1];
  var onThrow = function onThrow() {
    return setError(true);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, __assign({
    onClick: onThrow
  }, {
    children: "throw error"
  }));
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/MainPage/ui/MainPage.tsx":
/*!********************************************!*\
  !*** ./src/pages/MainPage/ui/MainPage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _app_providers_ErrorBoundary_ui_BugButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/providers/ErrorBoundary/ui/BugButton */ "./src/app/providers/ErrorBoundary/ui/BugButton.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var MainPage = function MainPage() {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('main').t;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_providers_ErrorBoundary_ui_BugButton__WEBPACK_IMPORTED_MODULE_2__.BugButton, {}), t('Главная страница')]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX01haW5QYWdlX3VpX01haW5QYWdlX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxRQUFRLElBQUssWUFBWTtFQUNsREEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sSUFBSSxVQUFTQyxDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVILENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUlJLENBQUMsSUFBSUwsQ0FBQyxFQUFFLElBQUlILE1BQU0sQ0FBQ1MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFDM0ROLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQytDO0FBQ2E7QUFDakI7QUFDckMsSUFBSVksU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQWFDLEVBQUUsRUFBRTtFQUNqQyxJQUFJQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ0MsU0FBUztFQUM1QixJQUFJQyxFQUFFLEdBQUdKLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUVLLEtBQUssR0FBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFFRSxRQUFRLEdBQUdGLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDekQsSUFBSUcsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBZTtJQUFFLE9BQU9ELFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFBRSxDQUFDO0VBQ3BEUCxnREFBUyxDQUFDLFlBQVk7SUFDbEIsSUFBSU0sS0FBSyxFQUFFO01BQ1AsTUFBTSxJQUFJRyxLQUFLLENBQUMsQ0FBQztJQUNyQjtFQUNKLENBQUMsRUFBRSxDQUFDSCxLQUFLLENBQUMsQ0FBQztFQUNYLE9BQVFSLHNEQUFJLENBQUNDLDREQUFNLEVBQUVoQixRQUFRLENBQUM7SUFBRTJCLE9BQU8sRUFBRUY7RUFBUSxDQUFDLEVBQUU7SUFBRUcsUUFBUSxFQUFFO0VBQWMsQ0FBQyxDQUFDLENBQUM7QUFDckYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjhEO0FBQ2hCO0FBQytCO0FBQzlFLElBQUlJLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQWU7RUFDdkIsSUFBSTdCLENBQUMsR0FBRzRCLDZEQUFjLENBQUMsTUFBTSxDQUFDLENBQUM1QixDQUFDO0VBQ2hDLE9BQVEyQix1REFBSyxDQUFDLEtBQUssRUFBRTtJQUFFRixRQUFRLEVBQUUsQ0FBQ2Isc0RBQUksQ0FBQ0ksZ0ZBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFaEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0VBQUUsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFDRCxpRUFBZTZCLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aW9uLXByb2plY3QvLi9zcmMvYXBwL3Byb3ZpZGVycy9FcnJvckJvdW5kYXJ5L3VpL0J1Z0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbi1wcm9qZWN0Ly4vc3JjL3BhZ2VzL01haW5QYWdlL3VpL01haW5QYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9zaGFyZWQvdWkvQnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHZhciBCdWdCdXR0b24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgZXJyb3IgPSBfYlswXSwgc2V0RXJyb3IgPSBfYlsxXTtcbiAgICB2YXIgb25UaHJvdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEVycm9yKHRydWUpOyB9O1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9LCBbZXJyb3JdKTtcbiAgICByZXR1cm4gKF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IG9uVGhyb3cgfSwgeyBjaGlsZHJlbjogXCJ0aHJvdyBlcnJvclwiIH0pKSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBCdWdCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9hcHAvcHJvdmlkZXJzL0Vycm9yQm91bmRhcnkvdWkvQnVnQnV0dG9uJztcbnZhciBNYWluUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCdtYWluJykudDtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KEJ1Z0J1dHRvbiwge30pLCB0KCfQk9C70LDQstC90LDRjyDRgdGC0YDQsNC90LjRhtCwJyldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJqc3giLCJfanN4IiwiQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdWdCdXR0b24iLCJfYSIsImNsYXNzTmFtZSIsIl9iIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uVGhyb3ciLCJFcnJvciIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImpzeHMiLCJfanN4cyIsInVzZVRyYW5zbGF0aW9uIiwiTWFpblBhZ2UiXSwic291cmNlUm9vdCI6IiJ9