"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FieldTextStatelessWithoutAnalytics = void 0;

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

var _Input = _interopRequireDefault(require("./styled/Input"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "FieldTextStateless__Wrapper",
  componentId: "ynbdsh-0"
})(["\n  flex: 1 1 100%;\n"]);

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/field-text has been deprecated. Please use the @atlaskit/textfield package instead.');
}

var FieldTextStateless =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldTextStateless, _Component);

  function FieldTextStateless() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FieldTextStateless);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FieldTextStateless)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "input", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setInputRef", function (input) {
      _this.input = input; // $FlowFixMe - Cannot call `this.props.innerRef` because undefined [1] is not a function

      _this.props.innerRef(input);
    });
    return _this;
  }

  (0, _createClass2.default)(FieldTextStateless, [{
    key: "focus",
    value: function focus() {
      if (this.input) {
        this.input.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(Wrapper, null, !this.props.isLabelHidden && _react.default.createElement(_fieldBase.Label, {
        htmlFor: this.props.id,
        isDisabled: this.props.disabled,
        isLabelHidden: this.props.isLabelHidden,
        isRequired: this.props.required,
        label: this.props.label || ''
      }), _react.default.createElement(_fieldBase.default, {
        invalidMessage: this.props.invalidMessage,
        isCompact: this.props.compact,
        isDisabled: this.props.disabled,
        isFitContainerWidthEnabled: this.props.shouldFitContainer,
        isInvalid: this.props.isInvalid,
        isReadOnly: this.props.isReadOnly,
        isRequired: this.props.required,
        isValidationHidden: this.props.isValidationHidden
      }, _react.default.createElement(_Input.default, {
        autoComplete: this.props.autoComplete,
        autoFocus: this.props.autoFocus,
        disabled: this.props.disabled,
        form: this.props.form,
        id: this.props.id,
        innerRef: this.setInputRef,
        isMonospaced: this.props.isMonospaced,
        maxLength: this.props.maxLength,
        min: this.props.min,
        max: this.props.max,
        name: this.props.name,
        onBlur: this.props.onBlur,
        onChange: this.props.onChange,
        onFocus: this.props.onFocus,
        onKeyDown: this.props.onKeyDown,
        onKeyPress: this.props.onKeyPress,
        onKeyUp: this.props.onKeyUp,
        pattern: this.props.pattern,
        placeholder: this.props.placeholder,
        readOnly: this.props.isReadOnly,
        required: this.props.required,
        spellCheck: this.props.isSpellCheckEnabled,
        type: this.props.type,
        value: this.props.value
      })));
    }
  }]);
  return FieldTextStateless;
}(_react.Component);

exports.FieldTextStatelessWithoutAnalytics = FieldTextStateless;
(0, _defineProperty2.default)(FieldTextStateless, "defaultProps", {
  compact: false,
  disabled: false,
  isInvalid: false,
  isReadOnly: false,
  isSpellCheckEnabled: true,
  onChange: function onChange() {},
  required: false,
  type: 'text',
  isValidationHidden: false,
  innerRef: function innerRef() {}
});
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'fieldText',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onBlur: createAndFireEventOnAtlaskit({
    action: 'blurred',
    actionSubject: 'textField',
    attributes: {
      componentName: 'fieldText',
      packageName: _version.name,
      packageVersion: _version.version
    }
  }),
  onFocus: createAndFireEventOnAtlaskit({
    action: 'focused',
    actionSubject: 'textField',
    attributes: {
      componentName: 'fieldText',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(FieldTextStateless));

exports.default = _default;