"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GlobalItemBase = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _GlobalItemInner = _interopRequireWildcard(require("../styled/GlobalItemInner"));

var _DefaultLinkComponent = _interopRequireDefault(require("./DefaultLinkComponent"));

var _analytics = require("../../utils/analytics");

var GlobalItem =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(GlobalItem, _PureComponent);

  function GlobalItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, GlobalItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(GlobalItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyDown", function (event) {
      if (event.key === 'Enter' && _this.props.onClick) {
        _this.props.onClick(event);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(GlobalItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          href = _this$props.href,
          CustomComponent = _this$props.linkComponent,
          isSelected = _this$props.isSelected,
          size = _this$props.size,
          ariaHasPopup = _this$props['aria-haspopup'],
          onClick = _this$props.onClick,
          providedMouseDown = _this$props.onMouseDown,
          role = _this$props.role,
          appearance = _this$props.appearance;
      var allyAndEventProps = {
        'aria-haspopup': ariaHasPopup,
        onClick: onClick,
        role: role,
        onKeyDown: this.handleKeyDown
      };
      var hoverOverrideStyles = href ? '&:hover { color: inherit; }' : '';

      if (CustomComponent) {
        var StyledComponent = (0, _styledComponents.default)(CustomComponent).withConfig({
          displayName: "GlobalItem__StyledComponent",
          componentId: "c8gzf3-0"
        })(["\n        ", ";\n        ", ";\n      "], _GlobalItemInner.globalItemStyles, hoverOverrideStyles);
        return _react.default.createElement(StyledComponent, (0, _extends2.default)({
          appearance: appearance,
          href: href,
          isSelected: isSelected,
          onMouseDown: providedMouseDown,
          size: size
        }, allyAndEventProps), children);
      }

      if (href) {
        var StyledLink = (0, _styledComponents.default)(_DefaultLinkComponent.default).withConfig({
          displayName: "GlobalItem__StyledLink",
          componentId: "c8gzf3-1"
        })(["\n        ", ";\n        ", ";\n      "], _GlobalItemInner.globalItemStyles, hoverOverrideStyles);
        return _react.default.createElement(StyledLink, (0, _extends2.default)({
          href: href,
          size: size,
          onMouseDown: providedMouseDown,
          appearance: appearance
        }, allyAndEventProps), children);
      }

      var onMouseDown = function onMouseDown(e) {
        providedMouseDown(e);
        e.preventDefault();
      };

      return _react.default.createElement(_GlobalItemInner.default, (0, _extends2.default)({
        type: "button",
        isSelected: isSelected,
        onMouseDown: onMouseDown,
        size: size,
        appearance: appearance
      }, allyAndEventProps), children);
    }
  }]);
  return GlobalItem;
}(_react.PureComponent);

exports.GlobalItemBase = GlobalItem;
(0, _defineProperty2.default)(GlobalItem, "defaultProps", {
  onMouseDown: function onMouseDown() {},
  size: 'small',
  appearance: 'round'
});

var _default = (0, _analytics.withGlobalItemAnalytics)(GlobalItem);

exports.default = _default;