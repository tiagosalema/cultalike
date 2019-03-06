webpackHotUpdate("static\\development\\pages\\me.js",{

/***/ "./components/Movies.jsx":
/*!*******************************!*\
  !*** ./components/Movies.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\tiago\\OneDrive\\Documents\\_Projects\\app\\frontend\\components\\Movies.jsx";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query GET_MOVIES_QUERY {\n    movies {\n      id\n      title\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n  }\n\n  td,\n  th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n  }\n\n  tr:nth-child(even) {\n    background-color: #dddddd;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Table = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].table(_templateObject());
var GET_MOVIES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());

var Movies = function Movies() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: GET_MOVIES_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        error = _ref.error,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Loading...");
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Error, my guy: ", error.message);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Table, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Movie"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Rate"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, data.movies.map(function (movie) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        key: movie.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, movie.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "10"));
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ }),

/***/ "./node_modules/apollo-boost/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-cache/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-error/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-http-common/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-http/lib/bundle.esm.js":
false,

/***/ "./node_modules/immutable-tuple/dist/tuple.mjs":
false,

/***/ "./node_modules/optimism/lib/cache.js":
false,

/***/ "./node_modules/optimism/lib/entry.js":
false,

/***/ "./node_modules/optimism/lib/index.js":
false,

/***/ "./node_modules/optimism/lib/local.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false

})
//# sourceMappingURL=me.js.9c2f4ddab2d7d7ee811e.hot-update.js.map