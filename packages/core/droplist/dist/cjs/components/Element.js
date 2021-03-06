"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.baseTypes = exports.getAriaRoles = exports.supportsVoiceOver = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Item = require("../styled/Item");

var supportsVoiceOver = function supportsVoiceOver() {
  return /Mac OS X/.test(navigator.userAgent);
};

exports.supportsVoiceOver = supportsVoiceOver;

var getAriaRoles = function getAriaRoles() {
  return {
    checkbox: supportsVoiceOver() ? 'checkbox' : 'menuitemcheckbox',
    link: 'menuitem',
    option: 'option',
    radio: supportsVoiceOver() ? 'radio' : 'menuitemradio'
  };
};

exports.getAriaRoles = getAriaRoles;
var baseTypes = {
  default: 'link',
  values: ['link', 'radio', 'checkbox', 'option']
};
exports.baseTypes = baseTypes;

var Element =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Element, _PureComponent);

  function Element() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Element);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Element)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseDown", function (e) {
      e.preventDefault();

      _this.props.handleMouseDown();
    });
    return _this;
  }

  (0, _createClass2.default)(Element, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var isActive = props.isActive,
          isChecked = props.isChecked,
          isDisabled = props.isDisabled,
          isFocused = props.isFocused,
          isHidden = props.isHidden,
          isSelected = props.isSelected,
          isPrimary = props.isPrimary;
      var type = this.props.type || '';
      var appearanceProps = {
        isActive: isActive,
        isChecked: isChecked,
        isDisabled: isDisabled,
        isFocused: isFocused,
        isHidden: isHidden,
        isSelected: isSelected,
        isPrimary: isPrimary
      };
      var ariaProps = {
        'aria-checked': !!isChecked,
        'aria-disabled': !!isDisabled,
        'aria-hidden': !!isHidden,
        'aria-selected': !!isSelected
      };
      var ariaRoles = getAriaRoles();
      var commonProps = {
        'data-role': 'droplistItem',
        onClick: props.handleClick,
        onKeyPress: props.handleKeyPress,
        onMouseDown: this.handleMouseDown,
        onMouseOut: props.handleMouseOut,
        onMouseOver: props.handleMouseOver,
        onMouseUp: props.handleMouseUp,
        role: ariaRoles[type],
        title: props.title,
        tabIndex: props.type === 'option' ? null : 0
      };
      var testingProps = process.env.NODE_ENV === 'test' ? {
        'data-test-active': isActive,
        'data-test-checked': isChecked,
        'data-test-disabled': isDisabled,
        'data-test-hidden': isHidden,
        'data-test-selected': isSelected
      } : {};
      var consolidatedProps = (0, _objectSpread2.default)({}, appearanceProps, ariaProps, commonProps, testingProps);

      if (props.href && !isDisabled) {
        return _react.default.createElement(_Item.Anchor, (0, _extends2.default)({
          href: props.href,
          target: props.target
        }, consolidatedProps), props.children);
      }

      return _react.default.createElement(_Item.Span, consolidatedProps, props.children);
    }
  }]);
  return Element;
}(_react.PureComponent);

exports.default = Element;