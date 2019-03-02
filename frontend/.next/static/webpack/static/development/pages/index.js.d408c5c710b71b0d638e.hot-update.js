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
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\tiago\\OneDrive\\Documents\\_Projects\\app\\frontend\\components\\Form.jsx";




var FormTemplate = function FormTemplate(_ref) {
  var values = _ref.values,
      isSubmitting = _ref.isSubmitting;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "email",
    name: "email",
    placeholder: "Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "password",
    name: "password",
    placeholder: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "checkbox",
    name: "newsletter",
    checked: values.newsletter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), "Join our newsletter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: isSubmitting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Submit"));
};

var FormikApp = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues: function mapPropsToValues(_ref2) {
    var email = _ref2.email,
        password = _ref2.password,
        newsletter = _ref2.newsletter,
        plan = _ref2.plan;
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "free"
    };
  },
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2___default.a.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_2___default.a.string().email("Email not valid").required("Email is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_2___default.a.string().min(9, "Password must be 9 characters or longer").required("Password is required")
  }),
  handleSubmit: function handleSubmit(values, _ref3) {
    var resetForm = _ref3.resetForm,
        setErrors = _ref3.setErrors,
        setSubmitting = _ref3.setSubmitting;
    setTimeout(function () {
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
//# sourceMappingURL=index.js.d408c5c710b71b0d638e.hot-update.js.map