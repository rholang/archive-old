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

var _item = require("@atlaskit/item");

var _NavigationItemGroupTitle = _interopRequireDefault(require("../styled/NavigationItemGroupTitle"));

var _NavigationItemGroupSeparator = _interopRequireDefault(require("../styled/NavigationItemGroupSeparator"));

var _NavigationItemGroupHeader = _interopRequireDefault(require("../styled/NavigationItemGroupHeader"));

var _NavigationItemGroupAction = _interopRequireDefault(require("../styled/NavigationItemGroupAction"));

var NavigationItemGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(NavigationItemGroup, _Component);

  function NavigationItemGroup() {
    (0, _classCallCheck2.default)(this, NavigationItemGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NavigationItemGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(NavigationItemGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          action = _this$props.action,
          isCompact = _this$props.isCompact,
          hasSeparator = _this$props.hasSeparator,
          children = _this$props.children,
          innerRef = _this$props.innerRef;
      var wrappedTitle = title ? _react.default.createElement(_NavigationItemGroupTitle.default, null, title) : null;
      var wrappedAction = action ? _react.default.createElement(_NavigationItemGroupAction.default, null, action) : null;
      var separator = hasSeparator ? _react.default.createElement(_NavigationItemGroupSeparator.default, null) : null;
      var header = title || action ? _react.default.createElement(_NavigationItemGroupHeader.default, null, wrappedTitle) : null;
      var groupHeading = separator || header ? _react.default.createElement("div", null, separator, header) : null;
      return _react.default.createElement(_item.ItemGroup, {
        title: groupHeading,
        elemAfter: wrappedAction,
        isCompact: isCompact,
        innerRef: innerRef
      }, children);
    }
  }]);
  return NavigationItemGroup;
}(_react.Component);

exports.default = NavigationItemGroup;
(0, _defineProperty2.default)(NavigationItemGroup, "defaultProps", {
  isCompact: false,
  hasSeparator: false
});