webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
var _jsxFileName = "C:\\Users\\tiago\\OneDrive\\Documents\\_Projects\\app\\frontend\\components\\Form.jsx";



var FormTemplate = function FormTemplate(_ref) {
  var isSubmitting = _ref.isSubmitting;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    name: "title",
    placeholder: "Movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "number",
    name: "rate",
    placeholder: "Rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: isSubmitting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Create"));
};

var FormikApp = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues: function mapPropsToValues(_ref2) {
    var email = _ref2.email,
        password = _ref2.password;
    return {
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit: function handleSubmit(values, _ref3) {
    var resetForm = _ref3.resetForm,
        setErrors = _ref3.setErrors,
        setSubmitting = _ref3.setSubmitting;
    setTimeout(function () {
      console.log(values);

      if (values.email === "andrew@test.io") {
        setErrors({
          email: "That email is already taken"
        });
      } else {
        resetForm();
      }

      setSubmitting(false);
    }, 2000);
  }
})(FormTemplate);
/* harmony default export */ __webpack_exports__["default"] = (FormikApp);

/***/ })

})
//# sourceMappingURL=index.js.08b9c94d9542537791a6.hot-update.js.map