module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LoginRegisterForm.js":
/*!*****************************************!*\
  !*** ./components/LoginRegisterForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\NicholasJocius\\Documents\\GitHub\\portfolio-magic\\bookingapp\\client\\components\\LoginRegisterForm.js";


const LoginRegisterForm = ({
  email,
  setEmail,
  pass,
  setPass,
  buttonName,
  handleSubmit
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "col-md-6",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "form-group",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "email",
      onChange: e => setEmail(e.target.value),
      value: email,
      className: "form-control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
      children: "We'll never share your email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "form-group",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: "Password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "password",
      onChange: e => setPass(e.target.value),
      value: pass,
      className: "form-control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleSubmit,
      className: "btn btn-primary",
      children: buttonName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (LoginRegisterForm);

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);

 // Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDHBZ2HA2x5zZEDEFf0zrn8aeNFU0WL9CY",
  authDomain: "booking-ff726.firebaseapp.com",
  projectId: "booking-ff726",
  storageBucket: "booking-ff726.appspot.com",
  messagingSenderId: "660707561036",
  appId: "1:660707561036:web:4b2a2437a18c27247e2ee9"
}; // Initialize Firebase
// need to check firebase when using nextjs

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
}

/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginRegisterForm */ "./components/LoginRegisterForm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\NicholasJocius\\Documents\\GitHub\\portfolio-magic\\bookingapp\\client\\pages\\login.js";
// pages/login.js










const Login = () => {
  const {
    0: loginEmail,
    1: setLoginEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loginPass,
    1: setLoginPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: registerEmail,
    1: setRegisterEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: registerPass,
    1: setRegisterPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const register = async () => {
    // console.log(registerEmail, registerPass);
    await _firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().createUserWithEmailAndPassword(registerEmail, registerPass).then(user => {
      console.log("Register", user);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("Registration Complete", user.email, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].POSITION.TOP_CENTER
      });
    }).catch(err => {
      console.log(err);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error(`Registration Error: ${err}`, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].POSITION.TOP_CENTER
      });
    });
  };

  const login = async () => {
    // console.log(loginEmail, loginPass);
    await _firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(loginEmail, loginPass).then(user => {
      console.log('Login', user);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("Login Successful", user.email, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].POSITION.TOP_CENTER
      });
    }).catch(err => {
      console.log(err);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error(`Login Error: ${err}`, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].POSITION.TOP_CENTER
      });
    });
  };

  const googleLogin = async () => {
    await _firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithPopup(new _firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider()).then(user => {
      console.log('Login', user);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("Login Successful", user.email, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].POSITION.TOP_CENTER
      });
    }).catch(err => {
      console.log(err);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error(`Login Error: ${err}`, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].POSITION.TOP_CENTER
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "text-center pt-4 display-4",
      children: "Login / Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        email: loginEmail,
        setEmail: setLoginEmail,
        pass: loginPass,
        setPass: setLoginPass,
        handleSubmit: login,
        buttonName: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        email: registerEmail,
        setEmail: setRegisterEmail,
        pass: registerPass,
        setPass: setRegisterPass,
        handleSubmit: register,
        buttonName: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: googleLogin,
      className: "my-4 col-md-6 offset-md-3",
      type: "danger",
      block: true,
      shape: "round",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["GoogleOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 23
      }, undefined),
      children: "Login in with Google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTG9naW5SZWdpc3RlckZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzcyIsInNldFBhc3MiLCJidXR0b25OYW1lIiwiaGFuZGxlU3VibWl0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiTG9naW4iLCJsb2dpbkVtYWlsIiwic2V0TG9naW5FbWFpbCIsInVzZVN0YXRlIiwibG9naW5QYXNzIiwic2V0TG9naW5QYXNzIiwicmVnaXN0ZXJFbWFpbCIsInNldFJlZ2lzdGVyRW1haWwiLCJyZWdpc3RlclBhc3MiLCJzZXRSZWdpc3RlclBhc3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWdpc3RlciIsImF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsIlBPU0lUSU9OIiwiVE9QX0NFTlRFUiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJsb2dpbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ29vZ2xlTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLE1BQU1BLGlCQUFpQixHQUFHLENBQUM7QUFDdkJDLE9BRHVCO0FBRXZCQyxVQUZ1QjtBQUd2QkMsTUFIdUI7QUFJdkJDLFNBSnVCO0FBS3ZCQyxZQUx1QjtBQU12QkM7QUFOdUIsQ0FBRCxr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Q0FBRDtBQUNJLGFBQU8sRUFBRWlCLFdBRGI7QUFFSSxlQUFTLEVBQUMsMkJBRmQ7QUFHSSxVQUFJLEVBQUMsUUFIVDtBQUlJLFdBQUssTUFKVDtBQUlVLFdBQUssRUFBQyxPQUpoQjtBQUtJLFVBQUksZUFBRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWtDSCxDQTVGRDs7QUE4RmU3QixvRUFBZixFOzs7Ozs7Ozs7OztBQ3pHQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2dpblJlZ2lzdGVyRm9ybSA9ICh7XHJcbiAgICBlbWFpbCxcclxuICAgIHNldEVtYWlsLFxyXG4gICAgcGFzcyxcclxuICAgIHNldFBhc3MsXHJcbiAgICBidXR0b25OYW1lLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG59KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNtYWxsPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWw8L3NtYWxsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAge2J1dHRvbk5hbWV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblJlZ2lzdGVyRm9ybTsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxudmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURIQloySEEyeDV6WkVERUZmMHpybjhhZU5GVTBXTDlDWVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJib29raW5nLWZmNzI2LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImJvb2tpbmctZmY3MjZcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiYm9va2luZy1mZjcyNi5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjYwNzA3NTYxMDM2XCIsXHJcbiAgICBhcHBJZDogXCIxOjY2MDcwNzU2MTAzNjp3ZWI6NGIyYTI0MzdhMThjMjcyNDdlMmVlOVwiXHJcbn07XHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuLy8gbmVlZCB0byBjaGVjayBmaXJlYmFzZSB3aGVuIHVzaW5nIG5leHRqc1xyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XHJcblxyXG4iLCIvLyBwYWdlcy9sb2dpbi5qc1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTG9naW5SZWdpc3RlckZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5SZWdpc3RlckZvcm1cIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB7IEdvb2dsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbG9naW5FbWFpbCwgc2V0TG9naW5FbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2dpblBhc3MsIHNldExvZ2luUGFzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtyZWdpc3RlckVtYWlsLCBzZXRSZWdpc3RlckVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyUGFzcywgc2V0UmVnaXN0ZXJQYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVnaXN0ZXJFbWFpbCwgcmVnaXN0ZXJQYXNzKTtcclxuICAgICAgICBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKHJlZ2lzdGVyRW1haWwsIHJlZ2lzdGVyUGFzcylcclxuICAgICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJcIiwgdXNlcik7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUmVnaXN0cmF0aW9uIENvbXBsZXRlXCIsIHVzZXIuZW1haWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0NFTlRFUlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoYFJlZ2lzdHJhdGlvbiBFcnJvcjogJHtlcnJ9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2dpbkVtYWlsLCBsb2dpblBhc3MpO1xyXG4gICAgICAgIGF3YWl0IGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChsb2dpbkVtYWlsLCBsb2dpblBhc3MpXHJcbiAgICAgICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4nLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJMb2dpbiBTdWNjZXNzZnVsXCIsIHVzZXIuZW1haWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0NFTlRFUlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoYExvZ2luIEVycm9yOiAke2Vycn1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9DRU5URVJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnb29nbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpKVxyXG4gICAgICAgICAgICAudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luJywgdXNlcik7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiTG9naW4gU3VjY2Vzc2Z1bFwiLCB1c2VyLmVtYWlsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9DRU5URVJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGBMb2dpbiBFcnJvcjogJHtlcnJ9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNCBkaXNwbGF5LTRcIj5Mb2dpbiAvIFJlZ2lzdGVyPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5SZWdpc3RlckZvcm1cclxuICAgICAgICAgICAgICAgICAgICBlbWFpbD17bG9naW5FbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbD17c2V0TG9naW5FbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBwYXNzPXtsb2dpblBhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzcz17c2V0TG9naW5QYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17bG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTmFtZT1cIkxvZ2luXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPExvZ2luUmVnaXN0ZXJGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw9e3JlZ2lzdGVyRW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RW1haWw9e3NldFJlZ2lzdGVyRW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzcz17cmVnaXN0ZXJQYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhc3M9e3NldFJlZ2lzdGVyUGFzc31cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbk5hbWU9XCJSZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Z29vZ2xlTG9naW59XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS00IGNvbC1tZC02IG9mZnNldC1tZC0zXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgYmxvY2sgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8R29vZ2xlT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZ2luIGluIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=