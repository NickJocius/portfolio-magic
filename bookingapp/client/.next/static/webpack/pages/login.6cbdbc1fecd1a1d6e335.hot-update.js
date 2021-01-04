webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LoginRegisterForm */ "./components/LoginRegisterForm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");




var _jsxFileName = "C:\\Users\\NicholasJocius\\Documents\\GitHub\\portfolio-magic\\bookingapp\\client\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();

// pages/login.js










var Login = function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      loginEmail = _useState[0],
      setLoginEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      loginPass = _useState2[0],
      setLoginPass = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      registerEmail = _useState3[0],
      setRegisterEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      registerPass = _useState4[0],
      setRegisterPass = _useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var register = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().createUserWithEmailAndPassword(registerEmail, registerPass).then(function (user) {
                console.log("Register", user);
                react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success("Registration Complete", user.email, {
                  position: react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].POSITION.TOP_CENTER
                });
              })["catch"](function (err) {
                console.log(err);
                react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error("Registration Error: ".concat(err), {
                  position: react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].POSITION.TOP_CENTER
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function register() {
      return _ref.apply(this, arguments);
    };
  }();

  var login = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword(loginEmail, loginPass).then(function (user) {
                console.log('Login', user);
                react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success("Login Successful", user.email, {
                  position: react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].POSITION.TOP_CENTER
                });
              })["catch"](function (err) {
                console.log(err);
                react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error("Login Error: ".concat(err), {
                  position: react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].POSITION.TOP_CENTER
                });
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function login() {
      return _ref2.apply(this, arguments);
    };
  }();

  var googleLogin = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithPopup(new _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider()).then(function (user) {
                console.log('Login', user);
                react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success("Login Successful", user.email, {
                  position: react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].POSITION.TOP_CENTER
                });
              })["catch"](function (err) {
                console.log(err);
                react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error("Login Error: ".concat(err), {
                  position: react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].POSITION.TOP_CENTER
                });
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function googleLogin() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
      className: "text-center pt-4 display-4",
      children: "Login / Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        email: loginEmail,
        setEmail: setLoginEmail,
        pass: loginPass,
        setPass: setLoginPass,
        handleSubmit: login,
        buttonName: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: googleLogin,
        className: "mb-3",
        type: "danger",
        block: true,
        shape: "round",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["GoogleOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 104
        }, _this),
        children: "Login in with Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        email: registerEmail,
        setEmail: setRegisterEmail,
        pass: registerPass,
        setPass: setRegisterPass,
        handleSubmit: register,
        buttonName: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, _this);
};

_s(Login, "dkH2bAd+1Oi3OZqWmgqiJqvBiaw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2luRW1haWwiLCJzZXRMb2dpbkVtYWlsIiwibG9naW5QYXNzIiwic2V0TG9naW5QYXNzIiwicmVnaXN0ZXJFbWFpbCIsInNldFJlZ2lzdGVyRW1haWwiLCJyZWdpc3RlclBhc3MiLCJzZXRSZWdpc3RlclBhc3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWdpc3RlciIsImZpcmViYXNlIiwiYXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInRvYXN0Iiwic3VjY2VzcyIsImVtYWlsIiwicG9zaXRpb24iLCJQT1NJVElPTiIsIlRPUF9DRU5URVIiLCJlcnIiLCJlcnJvciIsImxvZ2luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnb29nbGVMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDb0JDLHNEQUFRLENBQUMsRUFBRCxDQUQ1QjtBQUFBLE1BQ1RDLFVBRFM7QUFBQSxNQUNHQyxhQURIOztBQUFBLG1CQUVrQkYsc0RBQVEsQ0FBQyxFQUFELENBRjFCO0FBQUEsTUFFVEcsU0FGUztBQUFBLE1BRUVDLFlBRkY7O0FBQUEsbUJBRzBCSixzREFBUSxDQUFDLEVBQUQsQ0FIbEM7QUFBQSxNQUdUSyxhQUhTO0FBQUEsTUFHTUMsZ0JBSE47O0FBQUEsbUJBSXdCTixzREFBUSxDQUFDLEVBQUQsQ0FKaEM7QUFBQSxNQUlUTyxZQUpTO0FBQUEsTUFJS0Ms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Z0JBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyw0QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNJLHFFQUFDLHFFQUFEO0FBQ0ksYUFBSyxFQUFFNUIsVUFEWDtBQUVJLGdCQUFRLEVBQUVDLGFBRmQ7QUFHSSxZQUFJLEVBQUVDLFNBSFY7QUFJSSxlQUFPLEVBQUVDLFlBSmI7QUFLSSxvQkFBWSxFQUFFdUIsS0FMbEI7QUFNSSxrQkFBVSxFQUFDO0FBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBU0kscUVBQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUVFLFdBQWpCO0FBQThCLGlCQUFTLEVBQUMsTUFBeEM7QUFBK0MsWUFBSSxFQUFDLFFBQXBEO0FBQTZELGFBQUssTUFBbEU7QUFBbUUsYUFBSyxFQUFDLE9BQXpFO0FBQWlGLFlBQUksZUFBRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKLGVBVUkscUVBQUMscUVBQUQ7QUFDSSxhQUFLLEVBQUV4QixhQURYO0FBRUksZ0JBQVEsRUFBRUMsZ0JBRmQ7QUFHSSxZQUFJLEVBQUVDLFlBSFY7QUFJSSxlQUFPLEVBQUVDLGVBSmI7QUFLSSxvQkFBWSxFQUFFRyxRQUxsQjtBQU1JLGtCQUFVLEVBQUM7QUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3QkgsQ0FsRkQ7O0dBQU1aLEs7VUFLYVcscUQ7OztLQUxiWCxLO0FBb0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi42Y2JkYmMxZmVjZDFhMWQ2ZTMzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvbG9naW4uanNcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExvZ2luUmVnaXN0ZXJGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luUmVnaXN0ZXJGb3JtXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgeyBHb29nbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xvZ2luRW1haWwsIHNldExvZ2luRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9naW5QYXNzLCBzZXRMb2dpblBhc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXJFbWFpbCwgc2V0UmVnaXN0ZXJFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtyZWdpc3RlclBhc3MsIHNldFJlZ2lzdGVyUGFzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlZ2lzdGVyRW1haWwsIHJlZ2lzdGVyUGFzcyk7XHJcbiAgICAgICAgYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChyZWdpc3RlckVtYWlsLCByZWdpc3RlclBhc3MpXHJcbiAgICAgICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdGVyXCIsIHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlJlZ2lzdHJhdGlvbiBDb21wbGV0ZVwiLCB1c2VyLmVtYWlsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9DRU5URVJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGBSZWdpc3RyYXRpb24gRXJyb3I6ICR7ZXJyfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0NFTlRFUlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9naW5FbWFpbCwgbG9naW5QYXNzKTtcclxuICAgICAgICBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQobG9naW5FbWFpbCwgbG9naW5QYXNzKVxyXG4gICAgICAgICAgICAudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luJywgdXNlcik7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiTG9naW4gU3VjY2Vzc2Z1bFwiLCB1c2VyLmVtYWlsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9DRU5URVJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGBMb2dpbiBFcnJvcjogJHtlcnJ9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ29vZ2xlTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbicsIHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkxvZ2luIFN1Y2Nlc3NmdWxcIiwgdXNlci5lbWFpbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihgTG9naW4gRXJyb3I6ICR7ZXJyfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0NFTlRFUlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTQgZGlzcGxheS00XCI+TG9naW4gLyBSZWdpc3RlcjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5SZWdpc3RlckZvcm1cclxuICAgICAgICAgICAgICAgICAgICBlbWFpbD17bG9naW5FbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbD17c2V0TG9naW5FbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBwYXNzPXtsb2dpblBhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzcz17c2V0TG9naW5QYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17bG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTmFtZT1cIkxvZ2luXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2dvb2dsZUxvZ2lufSBjbGFzc05hbWU9XCJtYi0zXCIgdHlwZT1cImRhbmdlclwiIGJsb2NrIHNoYXBlPVwicm91bmRcIiBpY29uPXs8R29vZ2xlT3V0bGluZWQgLz59PkxvZ2luIGluIHdpdGggR29vZ2xlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5SZWdpc3RlckZvcm1cclxuICAgICAgICAgICAgICAgICAgICBlbWFpbD17cmVnaXN0ZXJFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbD17c2V0UmVnaXN0ZXJFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBwYXNzPXtyZWdpc3RlclBhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzcz17c2V0UmVnaXN0ZXJQYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTmFtZT1cIlJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==