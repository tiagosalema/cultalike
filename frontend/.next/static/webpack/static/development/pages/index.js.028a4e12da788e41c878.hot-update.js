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
  var values = _ref.values,
      isSubmitting = _ref.isSubmitting;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "email",
    name: "email",
    placeholder: "Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "password",
    name: "password",
    placeholder: "Password",
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

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
false,

/***/ "./node_modules/lodash/_Hash.js":
false,

/***/ "./node_modules/lodash/_ListCache.js":
false,

/***/ "./node_modules/lodash/_Map.js":
false,

/***/ "./node_modules/lodash/_MapCache.js":
false,

/***/ "./node_modules/lodash/_Promise.js":
false,

/***/ "./node_modules/lodash/_Set.js":
false,

/***/ "./node_modules/lodash/_SetCache.js":
false,

/***/ "./node_modules/lodash/_Stack.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_Uint8Array.js":
false,

/***/ "./node_modules/lodash/_WeakMap.js":
false,

/***/ "./node_modules/lodash/_arrayEach.js":
false,

/***/ "./node_modules/lodash/_arrayFilter.js":
false,

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
false,

/***/ "./node_modules/lodash/_arrayMap.js":
false,

/***/ "./node_modules/lodash/_arrayPush.js":
false,

/***/ "./node_modules/lodash/_arrayReduce.js":
false,

/***/ "./node_modules/lodash/_arraySome.js":
false,

/***/ "./node_modules/lodash/_asciiToArray.js":
false,

/***/ "./node_modules/lodash/_asciiWords.js":
false,

/***/ "./node_modules/lodash/_assignValue.js":
false,

/***/ "./node_modules/lodash/_assocIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseAssign.js":
false,

/***/ "./node_modules/lodash/_baseAssignIn.js":
false,

/***/ "./node_modules/lodash/_baseAssignValue.js":
false,

/***/ "./node_modules/lodash/_baseClone.js":
false,

/***/ "./node_modules/lodash/_baseCreate.js":
false,

/***/ "./node_modules/lodash/_baseFor.js":
false,

/***/ "./node_modules/lodash/_baseForOwn.js":
false,

/***/ "./node_modules/lodash/_baseGet.js":
false,

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_baseHas.js":
false,

/***/ "./node_modules/lodash/_baseHasIn.js":
false,

/***/ "./node_modules/lodash/_baseIsArguments.js":
false,

/***/ "./node_modules/lodash/_baseIsEqual.js":
false,

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
false,

/***/ "./node_modules/lodash/_baseIsMap.js":
false,

/***/ "./node_modules/lodash/_baseIsMatch.js":
false,

/***/ "./node_modules/lodash/_baseIsNative.js":
false,

/***/ "./node_modules/lodash/_baseIsSet.js":
false,

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
false,

/***/ "./node_modules/lodash/_baseIteratee.js":
false,

/***/ "./node_modules/lodash/_baseKeys.js":
false,

/***/ "./node_modules/lodash/_baseKeysIn.js":
false,

/***/ "./node_modules/lodash/_baseMatches.js":
false,

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
false,

/***/ "./node_modules/lodash/_baseProperty.js":
false,

/***/ "./node_modules/lodash/_basePropertyDeep.js":
false,

/***/ "./node_modules/lodash/_basePropertyOf.js":
false,

/***/ "./node_modules/lodash/_baseSlice.js":
false,

/***/ "./node_modules/lodash/_baseTimes.js":
false,

/***/ "./node_modules/lodash/_baseToString.js":
false,

/***/ "./node_modules/lodash/_baseUnary.js":
false,

/***/ "./node_modules/lodash/_baseValues.js":
false,

/***/ "./node_modules/lodash/_cacheHas.js":
false,

/***/ "./node_modules/lodash/_castPath.js":
false,

/***/ "./node_modules/lodash/_castSlice.js":
false,

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneDataView.js":
false,

/***/ "./node_modules/lodash/_cloneRegExp.js":
false,

/***/ "./node_modules/lodash/_cloneSymbol.js":
false,

/***/ "./node_modules/lodash/_cloneTypedArray.js":
false,

/***/ "./node_modules/lodash/_copyArray.js":
false,

/***/ "./node_modules/lodash/_copyObject.js":
false,

/***/ "./node_modules/lodash/_copySymbols.js":
false,

/***/ "./node_modules/lodash/_copySymbolsIn.js":
false,

/***/ "./node_modules/lodash/_coreJsData.js":
false,

/***/ "./node_modules/lodash/_createBaseFor.js":
false,

/***/ "./node_modules/lodash/_createCaseFirst.js":
false,

/***/ "./node_modules/lodash/_createCompounder.js":
false,

/***/ "./node_modules/lodash/_deburrLetter.js":
false,

/***/ "./node_modules/lodash/_defineProperty.js":
false,

/***/ "./node_modules/lodash/_equalArrays.js":
false,

/***/ "./node_modules/lodash/_equalByTag.js":
false,

/***/ "./node_modules/lodash/_equalObjects.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getAllKeys.js":
false,

/***/ "./node_modules/lodash/_getAllKeysIn.js":
false,

/***/ "./node_modules/lodash/_getMapData.js":
false,

/***/ "./node_modules/lodash/_getMatchData.js":
false,

/***/ "./node_modules/lodash/_getNative.js":
false,

/***/ "./node_modules/lodash/_getPrototype.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_getSymbols.js":
false,

/***/ "./node_modules/lodash/_getSymbolsIn.js":
false,

/***/ "./node_modules/lodash/_getTag.js":
false,

/***/ "./node_modules/lodash/_getValue.js":
false,

/***/ "./node_modules/lodash/_hasPath.js":
false,

/***/ "./node_modules/lodash/_hasUnicode.js":
false,

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
false,

/***/ "./node_modules/lodash/_hashClear.js":
false,

/***/ "./node_modules/lodash/_hashDelete.js":
false,

/***/ "./node_modules/lodash/_hashGet.js":
false,

/***/ "./node_modules/lodash/_hashHas.js":
false,

/***/ "./node_modules/lodash/_hashSet.js":
false,

/***/ "./node_modules/lodash/_initCloneArray.js":
false,

/***/ "./node_modules/lodash/_initCloneByTag.js":
false,

/***/ "./node_modules/lodash/_initCloneObject.js":
false,

/***/ "./node_modules/lodash/_isIndex.js":
false,

/***/ "./node_modules/lodash/_isKey.js":
false,

/***/ "./node_modules/lodash/_isKeyable.js":
false,

/***/ "./node_modules/lodash/_isMasked.js":
false,

/***/ "./node_modules/lodash/_isPrototype.js":
false,

/***/ "./node_modules/lodash/_isStrictComparable.js":
false,

/***/ "./node_modules/lodash/_iteratorToArray.js":
false,

/***/ "./node_modules/lodash/_listCacheClear.js":
false,

/***/ "./node_modules/lodash/_listCacheDelete.js":
false,

/***/ "./node_modules/lodash/_listCacheGet.js":
false,

/***/ "./node_modules/lodash/_listCacheHas.js":
false,

/***/ "./node_modules/lodash/_listCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapCacheClear.js":
false,

/***/ "./node_modules/lodash/_mapCacheDelete.js":
false,

/***/ "./node_modules/lodash/_mapCacheGet.js":
false,

/***/ "./node_modules/lodash/_mapCacheHas.js":
false,

/***/ "./node_modules/lodash/_mapCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapToArray.js":
false,

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
false,

/***/ "./node_modules/lodash/_memoizeCapped.js":
false,

/***/ "./node_modules/lodash/_nativeCreate.js":
false,

/***/ "./node_modules/lodash/_nativeKeys.js":
false,

/***/ "./node_modules/lodash/_nativeKeysIn.js":
false,

/***/ "./node_modules/lodash/_nodeUtil.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_overArg.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/_setCacheAdd.js":
false,

/***/ "./node_modules/lodash/_setCacheHas.js":
false,

/***/ "./node_modules/lodash/_setToArray.js":
false,

/***/ "./node_modules/lodash/_stackClear.js":
false,

/***/ "./node_modules/lodash/_stackDelete.js":
false,

/***/ "./node_modules/lodash/_stackGet.js":
false,

/***/ "./node_modules/lodash/_stackHas.js":
false,

/***/ "./node_modules/lodash/_stackSet.js":
false,

/***/ "./node_modules/lodash/_stringToArray.js":
false,

/***/ "./node_modules/lodash/_stringToPath.js":
false,

/***/ "./node_modules/lodash/_toKey.js":
false,

/***/ "./node_modules/lodash/_toSource.js":
false,

/***/ "./node_modules/lodash/_unicodeToArray.js":
false,

/***/ "./node_modules/lodash/_unicodeWords.js":
false,

/***/ "./node_modules/lodash/camelCase.js":
false,

/***/ "./node_modules/lodash/capitalize.js":
false,

/***/ "./node_modules/lodash/cloneDeepWith.js":
false,

/***/ "./node_modules/lodash/deburr.js":
false,

/***/ "./node_modules/lodash/eq.js":
false,

/***/ "./node_modules/lodash/get.js":
false,

/***/ "./node_modules/lodash/has.js":
false,

/***/ "./node_modules/lodash/hasIn.js":
false,

/***/ "./node_modules/lodash/identity.js":
false,

/***/ "./node_modules/lodash/isArguments.js":
false,

/***/ "./node_modules/lodash/isArray.js":
false,

/***/ "./node_modules/lodash/isArrayLike.js":
false,

/***/ "./node_modules/lodash/isBuffer.js":
false,

/***/ "./node_modules/lodash/isFunction.js":
false,

/***/ "./node_modules/lodash/isLength.js":
false,

/***/ "./node_modules/lodash/isMap.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isSet.js":
false,

/***/ "./node_modules/lodash/isString.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/isTypedArray.js":
false,

/***/ "./node_modules/lodash/keys.js":
false,

/***/ "./node_modules/lodash/keysIn.js":
false,

/***/ "./node_modules/lodash/mapKeys.js":
false,

/***/ "./node_modules/lodash/mapValues.js":
false,

/***/ "./node_modules/lodash/memoize.js":
false,

/***/ "./node_modules/lodash/property.js":
false,

/***/ "./node_modules/lodash/snakeCase.js":
false,

/***/ "./node_modules/lodash/stubArray.js":
false,

/***/ "./node_modules/lodash/stubFalse.js":
false,

/***/ "./node_modules/lodash/toArray.js":
false,

/***/ "./node_modules/lodash/toString.js":
false,

/***/ "./node_modules/lodash/upperFirst.js":
false,

/***/ "./node_modules/lodash/values.js":
false,

/***/ "./node_modules/lodash/words.js":
false,

/***/ "./node_modules/property-expr/index.js":
false,

/***/ "./node_modules/synchronous-promise/index.js":
false,

/***/ "./node_modules/toposort/index.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./node_modules/yup/lib/Condition.js":
false,

/***/ "./node_modules/yup/lib/Lazy.js":
false,

/***/ "./node_modules/yup/lib/Reference.js":
false,

/***/ "./node_modules/yup/lib/ValidationError.js":
false,

/***/ "./node_modules/yup/lib/array.js":
false,

/***/ "./node_modules/yup/lib/boolean.js":
false,

/***/ "./node_modules/yup/lib/date.js":
false,

/***/ "./node_modules/yup/lib/index.js":
false,

/***/ "./node_modules/yup/lib/locale.js":
false,

/***/ "./node_modules/yup/lib/mixed.js":
false,

/***/ "./node_modules/yup/lib/number.js":
false,

/***/ "./node_modules/yup/lib/object.js":
false,

/***/ "./node_modules/yup/lib/setLocale.js":
false,

/***/ "./node_modules/yup/lib/string.js":
false,

/***/ "./node_modules/yup/lib/util/createValidation.js":
false,

/***/ "./node_modules/yup/lib/util/inherits.js":
false,

/***/ "./node_modules/yup/lib/util/isAbsent.js":
false,

/***/ "./node_modules/yup/lib/util/isSchema.js":
false,

/***/ "./node_modules/yup/lib/util/isodate.js":
false,

/***/ "./node_modules/yup/lib/util/makePath.js":
false,

/***/ "./node_modules/yup/lib/util/merge.js":
false,

/***/ "./node_modules/yup/lib/util/printValue.js":
false,

/***/ "./node_modules/yup/lib/util/reach.js":
false,

/***/ "./node_modules/yup/lib/util/runValidations.js":
false,

/***/ "./node_modules/yup/lib/util/sortByKeyOrder.js":
false,

/***/ "./node_modules/yup/lib/util/sortFields.js":
false,

/***/ "./node_modules/yup/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/yup/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/yup/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/yup/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/yup/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js":
false

})
//# sourceMappingURL=index.js.028a4e12da788e41c878.hot-update.js.map