"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FieldId = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _arrays = _interopRequireDefault(require("shallow-equal/arrays"));

var _objects = _interopRequireDefault(require("shallow-equal/objects"));

var _reactUid = require("react-uid");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _Form = require("./Form");

var _Field = _interopRequireWildcard(require("./styled/Field"));

var _translateEvent = _interopRequireDefault(require("./utils/translateEvent"));

var shallowEqual = function shallowEqual(a, b) {
  return a === b || typeof b === 'function' || Array.isArray(a) && Array.isArray(b) && (0, _arrays.default)(a, b) || (0, _typeof2.default)(a) === 'object' && (0, _typeof2.default)(b) === 'object' && (0, _objects.default)(a, b);
}; // Provides the id of the field to message components.
// This links the message with the field for screen-readers.


var FieldId = _react.default.createContext();

exports.FieldId = FieldId;

var FieldInner =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FieldInner, _React$Component);

  function FieldInner() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FieldInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FieldInner)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "unregisterField", function () {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getFieldId", (0, _memoizeOne.default)(function (name) {
      return "".concat(name, "-").concat((0, _reactUid.uid)({
        id: name
      }));
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      fieldProps: {
        onChange: function onChange() {},
        onBlur: function onBlur() {},
        onFocus: function onFocus() {},
        value: typeof _this.props.defaultValue === 'function' ? _this.props.defaultValue() : _this.props.defaultValue
      },
      error: undefined,
      valid: false,
      meta: {
        dirty: false,
        dirtySinceLastSubmit: false,
        touched: false,
        valid: false,
        submitting: false,
        submitFailed: false,
        error: undefined,
        submitError: undefined
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "register", function () {
      var _this$props = _this.props,
          defaultValue = _this$props.defaultValue,
          name = _this$props.name,
          registerField = _this$props.registerField,
          validate = _this$props.validate;

      if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
        (0, _tinyInvariant.default)(name, '@atlaskit/form: Field components have a required name prop');
      }

      return registerField(name, defaultValue, function (_ref) {
        var change = _ref.change,
            blur = _ref.blur,
            focus = _ref.focus,
            dirty = _ref.dirty,
            dirtySinceLastSubmit = _ref.dirtySinceLastSubmit,
            touched = _ref.touched,
            valid = _ref.valid,
            submitting = _ref.submitting,
            submitFailed = _ref.submitFailed,
            value = _ref.value,
            error = _ref.error,
            submitError = _ref.submitError;

        /** Do not update dirtySinceLastSubmit until submission has finished. */
        var modifiedDirtySinceLastSubmit = submitting ? _this.state.meta.dirtySinceLastSubmit : dirtySinceLastSubmit;
        /** Do not update submitFailed until submission has finished. */

        var modifiedSubmitFailed = submitting ? _this.state.meta.submitFailed : submitFailed;
        /** Do not use submitError if the value has changed. */

        var modifiedSubmitError = modifiedDirtySinceLastSubmit && _this.props.validate ? undefined : submitError;
        var modifiedError = modifiedSubmitError || (touched || dirty) && error;
        /**
         * If there has been a submit error, then use logic in modifiedError to determine validity,
         * so we can determine when there is a submit error which we do not want to display
         * because the value has been changed.
         */

        var modifiedValid = modifiedSubmitFailed ? modifiedError === undefined : valid;

        _this.setState({
          fieldProps: {
            onChange: function onChange(e) {
              change(_this.props.transform(e, value));
            },
            onBlur: blur,
            onFocus: focus,
            value: value
          },
          error: modifiedError,

          /**
           * The following parameters are optionally typed in final-form to indicate that not all parameters need
           * to be subscribed to. We cast them as booleans (using || false), since this is what they are semantically.
           */
          valid: modifiedValid || false,
          meta: {
            dirty: dirty || false,
            dirtySinceLastSubmit: dirtySinceLastSubmit || false,
            touched: touched || false,
            valid: valid || false,
            submitting: submitting || false,
            submitFailed: submitFailed || false,
            error: error,
            submitError: submitError
          }
        });
      }, {
        dirty: true,
        dirtySinceLastSubmit: true,
        touched: true,
        valid: true,
        submitting: true,
        submitFailed: true,
        value: true,
        error: true,
        submitError: true
      }, {
        getValidator: function getValidator() {
          return validate;
        }
      });
    });
    return _this;
  }

  (0, _createClass2.default)(FieldInner, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          defaultValue = _this$props2.defaultValue,
          name = _this$props2.name;

      if (prevProps.name !== name || !shallowEqual(prevProps.defaultValue, defaultValue)) {
        this.unregisterField();
        this.unregisterField = this.register();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unregisterField = this.register();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unregisterField();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          isRequired = _this$props3.isRequired,
          isDisabled = _this$props3.isDisabled,
          label = _this$props3.label,
          name = _this$props3.name,
          id = _this$props3.id;
      var _this$state = this.state,
          fieldProps = _this$state.fieldProps,
          error = _this$state.error,
          valid = _this$state.valid,
          meta = _this$state.meta;
      var fieldId = id || this.getFieldId(name);
      var extendedFieldProps = (0, _objectSpread2.default)({}, fieldProps, {
        name: name,
        isDisabled: isDisabled,
        isInvalid: Boolean(error),
        isRequired: Boolean(isRequired),
        'aria-invalid': error ? 'true' : 'false',
        'aria-labelledby': "".concat(fieldId, "-label ").concat(fieldId, "-helper ").concat(fieldId, "-valid ").concat(fieldId, "-error"),
        id: fieldId
      });
      return _react.default.createElement(_Field.default, null, label && _react.default.createElement(_Field.Label, {
        id: "".concat(fieldId, "-label"),
        htmlFor: fieldId
      }, label, isRequired && _react.default.createElement(_Field.RequiredIndicator, {
        "aria-hidden": "true"
      }, "*")), _react.default.createElement(FieldId.Provider, {
        value: fieldId
      }, children({
        fieldProps: extendedFieldProps,
        error: error,
        valid: valid,
        meta: meta
      })));
    }
  }]);
  return FieldInner;
}(_react.default.Component); // Make it easier to reference context values in lifecycle methods


(0, _defineProperty2.default)(FieldInner, "defaultProps", {
  registerField: function registerField() {
    return function () {};
  },
  transform: _translateEvent.default
});

var Field = function Field(props) {
  return _react.default.createElement(_Form.FormContext.Consumer, null, function (registerField) {
    return _react.default.createElement(_Form.IsDisabledContext.Consumer, null, function (formIsDisabled) {
      return _react.default.createElement(FieldInner, (0, _extends2.default)({}, props, {
        registerField: registerField,
        isDisabled: formIsDisabled || props.isDisabled
      }));
    });
  });
};

Field.defaultProps = {
  defaultValue: undefined,
  isDisabled: false,
  transform: _translateEvent.default
};
var _default = Field;
exports.default = _default;