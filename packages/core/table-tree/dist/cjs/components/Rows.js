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

var _react = _interopRequireWildcard(require("react"));

var _Items = _interopRequireDefault(require("./Items"));

var Rows =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Rows, _Component);

  function Rows() {
    (0, _classCallCheck2.default)(this, Rows);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Rows).apply(this, arguments));
  }

  (0, _createClass2.default)(Rows, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          render = _this$props.render;
      return _react.default.createElement("div", null, _react.default.createElement(_Items.default, {
        items: items,
        render: render
      }));
    }
  }]);
  return Rows;
}(_react.Component);

exports.default = Rows;