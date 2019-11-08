"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _GoToItem = _interopRequireDefault(require("../GoToItem"));

var _Item = _interopRequireDefault(require("../../presentational/Item"));

var ConnectedItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ConnectedItem, _Component);

  function ConnectedItem() {
    (0, _classCallCheck2.default)(this, ConnectedItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConnectedItem).apply(this, arguments));
  }

  (0, _createClass2.default)(ConnectedItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          after = _this$props.after,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["after"]);
      return this.props.goTo ? (0, _core.jsx)(_GoToItem.default, (0, _extends2.default)({}, props, {
        after: after
      })) : (0, _core.jsx)(_Item.default, (0, _extends2.default)({}, props, {
        after: after === null ? undefined : after
      }));
    }
  }]);
  return ConnectedItem;
}(_react.Component);

exports.default = ConnectedItem;