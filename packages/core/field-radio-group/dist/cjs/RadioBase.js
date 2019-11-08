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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _radio = _interopRequireDefault(require("@atlaskit/icon/glyph/radio"));

var _Radio = require("./styled/Radio");

var Radio =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Radio, _Component);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isHovered: false,
      isFocused: false,
      isActive: false,
      mouseIsDown: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBlur", function () {
      return _this.setState({
        // onBlur is called after onMouseDown if the checkbox was focused, however
        // in this case on blur is called immediately after, and we need to check
        // whether the mouse is down.
        isActive: _this.state.mouseIsDown && _this.state.isActive,
        isFocused: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFocus", function () {
      return _this.setState({
        isFocused: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseLeave", function () {
      return _this.setState({
        isActive: false,
        isHovered: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseEnter", function () {
      return _this.setState({
        isHovered: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseUp", function () {
      return _this.setState({
        isActive: false,
        mouseIsDown: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseDown", function () {
      return _this.setState({
        isActive: true,
        mouseIsDown: true
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Radio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isDisabled = _this$props.isDisabled,
          isRequired = _this$props.isRequired,
          isSelected = _this$props.isSelected,
          name = _this$props.name,
          onChange = _this$props.onChange,
          value = _this$props.value;
      var _this$state = this.state,
          isFocused = _this$state.isFocused,
          isHovered = _this$state.isHovered,
          isActive = _this$state.isActive;
      return _react.default.createElement(_Radio.Label, {
        isDisabled: isDisabled,
        onMouseDown: this.onMouseDown,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onMouseUp: this.onMouseUp
      }, _react.default.createElement(_Radio.HiddenInput, {
        checked: isSelected,
        disabled: isDisabled,
        name: name,
        onChange: onChange,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        required: isRequired,
        type: "radio",
        value: value
      }), _react.default.createElement(_Radio.Wrapper, null, _react.default.createElement(_Radio.IconWrapper, {
        isSelected: isSelected,
        isDisabled: isDisabled,
        isFocused: isFocused,
        isActive: isActive,
        isHovered: isHovered
      }, _react.default.createElement(_radio.default, {
        primaryColor: "inherit",
        secondaryColor: "inherit",
        isHovered: this.state.isHovered,
        isActive: this.state.isActive,
        label: ""
      })), _react.default.createElement("span", null, children)));
    }
  }]);
  return Radio;
}(_react.Component);

exports.default = Radio;
(0, _defineProperty2.default)(Radio, "defaultProps", {
  isDisabled: false,
  isSelected: false
});