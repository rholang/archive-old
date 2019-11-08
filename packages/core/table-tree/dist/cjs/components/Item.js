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

var _Items = _interopRequireDefault(require("./Items"));

var _toItemId = _interopRequireDefault(require("../utils/toItemId"));

var Item =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Item, _Component);

  function Item() {
    (0, _classCallCheck2.default)(this, Item);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Item).apply(this, arguments));
  }

  (0, _createClass2.default)(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          depth = _this$props.depth,
          data = _this$props.data,
          render = _this$props.render;
      var renderedRow = render(data);

      if (!renderedRow) {
        return null;
      }

      var _renderedRow$props = renderedRow.props,
          itemId = _renderedRow$props.itemId,
          items = _renderedRow$props.items;
      return _react.default.cloneElement(renderedRow, {
        depth: depth,
        data: data,
        renderChildren: function renderChildren() {
          return _react.default.createElement("div", {
            id: (0, _toItemId.default)(itemId)
          }, _react.default.createElement(_Items.default, {
            parentData: data,
            depth: depth,
            items: items,
            render: render
          }));
        }
      });
    }
  }]);
  return Item;
}(_react.Component);

exports.default = Item;
(0, _defineProperty2.default)(Item, "defaultProps", {
  depth: 0
});