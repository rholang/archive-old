"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Drawer = _interopRequireDefault(require("../Drawer"));

var _sharedVariables = require("../../../shared-variables");

/*
NOTE: All drawers mirror each other in design, with the only difference
being the offset.
*/
var SearchDrawer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SearchDrawer, _PureComponent);

  function SearchDrawer() {
    (0, _classCallCheck2.default)(this, SearchDrawer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SearchDrawer).apply(this, arguments));
  }

  (0, _createClass2.default)(SearchDrawer, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Drawer.default, (0, _extends2.default)({
        iconOffset: _sharedVariables.drawerIconOffset,
        width: this.props.isFullWidth ? 'full' : 'wide'
      }, this.props));
    }
  }]);
  return SearchDrawer;
}(_react.PureComponent);

exports.default = SearchDrawer;