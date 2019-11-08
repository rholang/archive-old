"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _util = require("./util");

var getTheme = (0, _memoizeOne.default)(function (isElectronMac) {
  return (0, _defineProperty2.default)({}, _util.isElectronMacKey, isElectronMac);
});

var WithElectronTheme =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(WithElectronTheme, _PureComponent);

  function WithElectronTheme() {
    (0, _classCallCheck2.default)(this, WithElectronTheme);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithElectronTheme).apply(this, arguments));
  }

  (0, _createClass2.default)(WithElectronTheme, [{
    key: "render",
    value: function render() {
      var theme = getTheme(this.props.isElectronMac);
      return _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, this.props.children);
    }
  }]);
  return WithElectronTheme;
}(_react.PureComponent);

exports.default = WithElectronTheme;
(0, _defineProperty2.default)(WithElectronTheme, "defaultProps", {
  isElectronMac: false
});