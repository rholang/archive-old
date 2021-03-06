"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FieldTextAreaStatelessWithoutAnalytics = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _analyticsNext = require("@atlaskit/analytics-next");

var _fieldBase = _interopRequireWildcard(require("@atlaskit/field-base"));

var _version = require("./version.json");

var _TextArea = _interopRequireDefault(require("./styled/TextArea"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "FieldTextAreaStateless__Wrapper",
  componentId: "sc-159dr31-0"
})(["\n  flex: 1 1 100%;\n"]);

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/field-text-area has been deprecated. Please use the @atlaskit/textarea package instead.');
}

var FieldTextAreaStateless =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldTextAreaStateless, _Component);

  function FieldTextAreaStateless() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FieldTextAreaStateless);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FieldTextAreaStateless)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "input", void 0);
    return _this;
  }

  (0, _createClass2.default)(FieldTextAreaStateless, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          compact = _this$props.compact,
          disabled = _this$props.disabled,
          id = _this$props.id,
          invalidMessage = _this$props.invalidMessage,
          isInvalid = _this$props.isInvalid,
          isLabelHidden = _this$props.isLabelHidden,
          isMonospaced = _this$props.isMonospaced,
          isReadOnly = _this$props.isReadOnly,
          isSpellCheckEnabled = _this$props.isSpellCheckEnabled,
          label = _this$props.label,
          maxLength = _this$props.maxLength,
          minimumRows = _this$props.minimumRows,
          name = _this$props.name,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          placeholder = _this$props.placeholder,
          enableResize = _this$props.enableResize,
          required = _this$props.required,
          shouldFitContainer = _this$props.shouldFitContainer,
          value = _this$props.value,
          isValidationHidden = _this$props.isValidationHidden;
      return _react.default.createElement(Wrapper, null, !isLabelHidden && _react.default.createElement(_fieldBase.Label, {
        htmlFor: id,
        isDisabled: disabled,
        isLabelHidden: isLabelHidden,
        isRequired: required,
        label: label
      }), _react.default.createElement(_fieldBase.default, {
        isCompact: compact,
        isDisabled: disabled,
        isInvalid: isInvalid,
        isReadOnly: isReadOnly,
        isRequired: required,
        invalidMessage: invalidMessage,
        isFitContainerWidthEnabled: shouldFitContainer,
        isValidationHidden: isValidationHidden
      }, _react.default.createElement(_TextArea.default, {
        disabled: disabled,
        readOnly: isReadOnly,
        name: name,
        placeholder: placeholder,
        value: value,
        required: required,
        isMonospaced: isMonospaced,
        minimumRows: minimumRows,
        enableResize: enableResize,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        id: id,
        autoFocus: autoFocus,
        spellCheck: isSpellCheckEnabled,
        maxLength: maxLength,
        innerRef: function innerRef(input) {
          _this2.input = input;
        }
      })));
    }
  }]);
  return FieldTextAreaStateless;
}(_react.Component);

exports.FieldTextAreaStatelessWithoutAnalytics = FieldTextAreaStateless;
(0, _defineProperty2.default)(FieldTextAreaStateless, "defaultProps", {
  compact: false,
  disabled: false,
  isReadOnly: false,
  required: false,
  isInvalid: false,
  label: '',
  type: 'text',
  isSpellCheckEnabled: true,
  minimumRows: 1,
  isValidationHidden: false
});
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'fieldTextArea',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onBlur: createAndFireEventOnAtlaskit({
    action: 'blurred',
    actionSubject: 'textArea',
    attributes: {
      componentName: 'fieldTextArea',
      packageName: _version.name,
      packageVersion: _version.version
    }
  }),
  onFocus: createAndFireEventOnAtlaskit({
    action: 'focused',
    actionSubject: 'textArea',
    attributes: {
      componentName: 'fieldTextArea',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(FieldTextAreaStateless));

exports.default = _default;