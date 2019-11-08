"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var DummyItem =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DummyItem, _PureComponent);

  function DummyItem() {
    (0, _classCallCheck2.default)(this, DummyItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DummyItem).apply(this, arguments));
  }

  return DummyItem;
}(_react.PureComponent);

exports.default = DummyItem;
(0, _defineProperty2.default)(DummyItem, "defaultProps", {
  isDisabled: false,
  isSelected: false
});