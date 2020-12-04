webpackHotUpdate("static/development/pages/calc.js",{

/***/ "./componentes/calculadora.js":
/*!************************************!*\
  !*** ./componentes/calculadora.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/urialcantar/Proyectos/proyectosNuevos/holaMundoNext/componentes/calculadora.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

var Calculadora =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Calculadora, _React$Component);

  function Calculadora() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Calculadora);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Calculadora)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      res: '0'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDigit", function (digit) {
      console.log(digit);

      _this.setState({
        res: digit
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Calculadora, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var alerta2 = function alerta2() {
        return alert('const alertados');
      };

      return __jsx("div", {
        className: "jsx-2880046771",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2880046771" + " " + "z-depth-2 cyan darken-3 white-text center-align resultados",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.state.res), __jsx("div", {
        className: "jsx-2880046771" + " " + "calc-container blue lighten-3 hoverable z-depth-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].map(function (digit) {
        return __jsx("a", {
          key: digit,
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2880046771" + " " + "waves-effect waves-light cyan darken-3 btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, digit);
      })), __jsx("div", {
        className: "jsx-2880046771" + " " + "operadores center-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, ['+', '-', '/', '*', ''].map(function (digit) {
        return __jsx("a", {
          key: digit,
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2880046771" + " " + "waves-effect waves-light amber darken-3 btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, digit === '' ? 'C' : digit);
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2880046771",
        __self: this
      }, ".resultados.jsx-2880046771{width:300px;margin:0 auto 10px auto;font-size:32px;}.calc-container.jsx-2880046771{width:300px;text-align:center;margin:0 auto;padding:12px;}.operadors.jsx-2880046771{border:1px solid #ccc;padding:10px;margin-top:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmlhbGNhbnRhci9Qcm95ZWN0b3MvcHJveWVjdG9zTnVldm9zL2hvbGFNdW5kb05leHQvY29tcG9uZW50ZXMvY2FsY3VsYWRvcmEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNnQixBQUdpQyxBQUtBLEFBTVUsWUFWRSxBQUtOLFVBTU4sUUFMRSxLQU1FLENBWEQsUUFPcEIsT0FOQyxBQVdBLE1BTEEiLCJmaWxlIjoiL1VzZXJzL3VyaWFsY2FudGFyL1Byb3llY3Rvcy9wcm95ZWN0b3NOdWV2b3MvaG9sYU11bmRvTmV4dC9jb21wb25lbnRlcy9jYWxjdWxhZG9yYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbGN1bGFkb3JhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHN0YXRlID0ge1xuICAgICAgICByZXM6JzAnXG4gICAgfVxuXG4gICAgb25EaWdpdCA9IChkaWdpdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkaWdpdCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlczpkaWdpdH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBhbGVydGEyID0gKCk9PmFsZXJ0KCdjb25zdCBhbGVydGFkb3MnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotZGVwdGgtMiBjeWFuIGRhcmtlbi0zIHdoaXRlLXRleHQgY2VudGVyLWFsaWduIHJlc3VsdGFkb3NcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsYy1jb250YWluZXIgYmx1ZSBsaWdodGVuLTMgaG92ZXJhYmxlIHotZGVwdGgtMlwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgWycwJywnMScsJzInLCczJywnNCcsJzUnLCc2JywnNycsJzgnLCc5JywnLiddLm1hcChkaWdpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtkaWdpdH0gY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGN5YW4gZGFya2VuLTMgYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkRpZ2l0KGRpZ2l0KX0+e2RpZ2l0fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BlcmFkb3JlcyBjZW50ZXItYWxpZ25cIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFsnKycsJy0nLCcvJywnKicsJyddLm1hcChkaWdpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtkaWdpdH0gY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGFtYmVyIGRhcmtlbi0zIGJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25EaWdpdChkaWdpdCl9PntkaWdpdCA9PT0gJycgPyAnQycgOiBkaWdpdH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgLnJlc3VsdGFkb3Mge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2FsYy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm9wZXJhZG9ycyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhZG9yYSJdfQ== */\n/*@ sourceURL=/Users/urialcantar/Proyectos/proyectosNuevos/holaMundoNext/componentes/calculadora.js */"));
    }
  }]);

  return Calculadora;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculadora);

/***/ })

})
//# sourceMappingURL=calc.js.06f60e32a10bfd49b27a.hot-update.js.map