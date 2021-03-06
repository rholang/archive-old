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

var _inlineDialog = _interopRequireDefault(require("@atlaskit/inline-dialog"));

var _Content = require("../styled/Content");

var _ValidationElement = _interopRequireDefault(require("./ValidationElement"));

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('The @atlaskit/field-base package has been deprecated. Please use the Form/Textfield/Textarea/etc packages instead.');
}

var FieldBaseStateless =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldBaseStateless, _Component);

  function FieldBaseStateless() {
    (0, _classCallCheck2.default)(this, FieldBaseStateless);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FieldBaseStateless).apply(this, arguments));
  }

  (0, _createClass2.default)(FieldBaseStateless, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.shouldReset) {
        this.props.onBlur();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          appearance = _this$props.appearance,
          children = _this$props.children,
          invalidMessage = _this$props.invalidMessage,
          isCompact = _this$props.isCompact,
          isDialogOpen = _this$props.isDialogOpen,
          isDisabled = _this$props.isDisabled,
          isFitContainerWidthEnabled = _this$props.isFitContainerWidthEnabled,
          isFocused = _this$props.isFocused,
          isInvalid = _this$props.isInvalid,
          isLoading = _this$props.isLoading,
          isPaddingDisabled = _this$props.isPaddingDisabled,
          isReadOnly = _this$props.isReadOnly,
          maxWidth = _this$props.maxWidth,
          onBlur = _this$props.onBlur,
          onDialogBlur = _this$props.onDialogBlur,
          onDialogClick = _this$props.onDialogClick,
          onDialogFocus = _this$props.onDialogFocus,
          onFocus = _this$props.onFocus,
          isValidationHidden = _this$props.isValidationHidden;

      function getAppearance(a) {
        if (isDisabled) return 'disabled';
        if (isInvalid) return 'invalid';
        return a;
      }

      return _react.default.createElement(_Content.ContentWrapper, {
        disabled: isDisabled,
        maxWidth: maxWidth,
        grow: isFitContainerWidthEnabled
      }, _react.default.createElement(_inlineDialog.default, {
        content: invalidMessage,
        isOpen: isDialogOpen && !!invalidMessage && !isValidationHidden,
        onContentBlur: onDialogBlur,
        onContentClick: onDialogClick,
        onContentFocus: onDialogFocus,
        placement: "right"
      }, _react.default.createElement(_Content.ChildWrapper, {
        compact: isCompact
      }, _react.default.createElement(_Content.Content, {
        appearance: getAppearance(appearance),
        compact: isCompact,
        disabled: isDisabled,
        isFocused: isFocused,
        invalid: isInvalid && !isFocused,
        none: appearance === 'none',
        onBlurCapture: onBlur,
        onFocusCapture: onFocus,
        paddingDisabled: isPaddingDisabled,
        readOnly: isReadOnly,
        subtle: appearance === 'subtle'
      }, children, !isValidationHidden ? _react.default.createElement(_ValidationElement.default, {
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        isLoading: isLoading
      }) : null))));
    }
  }]);
  return FieldBaseStateless;
}(_react.Component);

exports.default = FieldBaseStateless;
(0, _defineProperty2.default)(FieldBaseStateless, "defaultProps", {
  appearance: 'standard',
  invalidMessage: '',
  isCompact: false,
  isDialogOpen: false,
  isDisabled: false,
  isFitContainerWidthEnabled: false,
  isFocused: false,
  isInvalid: false,
  isLoading: false,
  isPaddingDisabled: false,
  isReadOnly: false,
  onDialogBlur: function onDialogBlur() {},
  onDialogClick: function onDialogClick() {},
  onDialogFocus: function onDialogFocus() {},
  shouldReset: false,
  isValidationHidden: false
});