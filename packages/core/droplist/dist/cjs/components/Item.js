"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DroplistItemWithoutAnalytics = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _analyticsNext = require("@atlaskit/analytics-next");

var _radio = _interopRequireDefault(require("@atlaskit/icon/glyph/radio"));

var _checkbox = _interopRequireDefault(require("@atlaskit/icon/glyph/checkbox"));

var _tooltip = _interopRequireDefault(require("@atlaskit/tooltip"));

var _version = require("../version.json");

var _Item = require("../styled/Item");

var _utils = require("../utils");

var _Element = _interopRequireDefault(require("./Element"));

var inputTypes = {
  checkbox: _checkbox.default,
  radio: _radio.default
};

var Item =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Item, _PureComponent);

  function Item() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Item)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isHovered: false,
      isPressed: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      return document.addEventListener('mouseup', _this.handleMouseUp);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentWillUnmount", function () {
      return document.removeEventListener('mouseup', _this.handleMouseUp);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "guardedActivate", function (event) {
      var _this$props = _this.props,
          isDisabled = _this$props.isDisabled,
          onActivate = _this$props.onActivate;
      if (!isDisabled && onActivate) onActivate({
        item: (0, _assertThisInitialized2.default)(_this),
        event: event
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (event) {
      return _this.guardedActivate(event);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyPress", function (event) {
      var keyIsValid = ['Enter', ' '].indexOf(event.key) > -1;
      if (keyIsValid) _this.guardedActivate(event);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseDown", function () {
      return _this.setState({
        isPressed: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseUp", function () {
      return _this.setState({
        isPressed: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseOut", function () {
      return _this.setState({
        isHovered: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseOver", function () {
      return _this.setState({
        isHovered: true
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Item, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var _this$state = this.state,
          isHovered = _this$state.isHovered,
          isPressed = _this$state.isPressed;
      var type = props.type || '';
      var hasInput = ['checkbox', 'radio'].indexOf(type) > -1;
      var Input = inputTypes[type];
      var appearanceProps = {
        isActive: props.type === 'link' && props.isActive || props.type === 'option' && props.isSelected,
        isChecked: ['checkbox', 'radio'].indexOf(type) > -1 && props.isChecked,
        isDisabled: props.isDisabled,
        isFocused: props.isFocused,
        isHidden: props.isHidden,
        isHovered: isHovered,
        isPressed: isPressed,
        isSelected: type === 'option' && props.isSelected,
        isPrimary: props.appearance === 'primary'
      };

      var element = _react.default.createElement(_Element.default, (0, _extends2.default)({}, appearanceProps, {
        handleClick: this.handleClick,
        handleKeyPress: this.handleKeyPress,
        handleMouseOut: this.handleMouseOut,
        handleMouseOver: this.handleMouseOver,
        handleMouseUp: this.handleMouseUp,
        handleMouseDown: this.handleMouseDown,
        href: props.href,
        target: props.target,
        title: props.title,
        type: props.type
      }), hasInput && _react.default.createElement(_Item.InputWrapper, appearanceProps, _react.default.createElement(Input, {
        label: "",
        primaryColor: (0, _utils.getInputBackground)(appearanceProps),
        secondaryColor: (0, _utils.getInputFill)(appearanceProps),
        size: "medium"
      })), !!props.elemBefore && _react.default.createElement(_Item.Before, null, props.elemBefore), _react.default.createElement(_Item.ContentWrapper, null, _react.default.createElement(_Item.Content, {
        allowMultiline: this.context.shouldAllowMultilineItems
      }, props.children), !!props.description && _react.default.createElement(_Item.Description, null, props.description)), !!props.elemAfter && _react.default.createElement(_Item.After, null, props.elemAfter));

      return _react.default.createElement("span", {
        role: "presentation"
      }, props.tooltipDescription ? _react.default.createElement(_tooltip.default, {
        content: props.tooltipDescription,
        position: props.tooltipPosition
      }, element) : element);
    }
  }]);
  return Item;
}(_react.PureComponent);

exports.DroplistItemWithoutAnalytics = Item;
(0, _defineProperty2.default)(Item, "defaultProps", {
  appearance: 'default',
  children: null,
  description: '',
  elemAfter: null,
  elemBefore: null,
  href: null,
  isActive: false,
  isChecked: false,
  isDisabled: false,
  isFocused: false,
  isHidden: false,
  isSelected: false,
  itemContext: 'menu',
  onActivate: function onActivate() {},
  target: null,
  title: null,
  tooltipDescription: null,
  tooltipPosition: 'right',
  type: 'link'
});
(0, _defineProperty2.default)(Item, "contextTypes", {
  shouldAllowMultilineItems: _propTypes.default.bool
});
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'droplistItem',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onActivate: createAndFireEventOnAtlaskit({
    action: 'selected',
    actionSubject: 'droplistItem',
    attributes: {
      componentName: 'droplistItem',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(Item));

exports.default = _default;