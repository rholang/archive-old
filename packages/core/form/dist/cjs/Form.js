"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IsDisabledContext = exports.FormContext = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _finalForm = require("final-form");

var _finalFormFocus = _interopRequireDefault(require("final-form-focus"));

var _react = _interopRequireWildcard(require("react"));

var FormContext = (0, _react.createContext)();
exports.FormContext = FormContext;
var IsDisabledContext = (0, _react.createContext)(false);
exports.IsDisabledContext = IsDisabledContext;

var createFinalForm = function createFinalForm(onSubmit, formRef) {
  var form = (0, _finalForm.createForm)({
    onSubmit: onSubmit,
    destroyOnUnregister: true,
    initialValues: {},
    mutators: {
      // https://medium.com/@erikras/final-form-arrays-and-mutators-13159cb7d285
      setDefaultValue: function setDefaultValue(_ref, state) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            name = _ref2[0],
            defaultValue = _ref2[1];

        if (state.formState.initialValues) {
          var value = typeof defaultValue === 'function' ? defaultValue(state.formState.initialValues[name]) : defaultValue; // eslint-disable-next-line no-param-reassign

          state.formState.initialValues[name] = value; // eslint-disable-next-line no-param-reassign

          state.formState.values[name] = value;
        }
      }
    }
  });
  var withFocusDecorator = (0, _finalFormFocus.default)(function () {
    return formRef.current ? Array.from(formRef.current.querySelectorAll('input')) : [];
  });
  withFocusDecorator(form);
  return form;
};

var Form =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Form, _React$Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Form);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Form)).call.apply(_getPrototypeOf2, [this].concat(_args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "unsubscribe", function () {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "formRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmitProxy", function () {
      var _this$props;

      return (_this$props = _this.props).onSubmit.apply(_this$props, arguments);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "form", createFinalForm(_this.onSubmitProxy, _this.formRef));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      dirty: false,
      submitting: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getValues", function () {
      return _this.form.getState().values;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "registerField", function (name, defaultValue, subscriber, subscription, config) {
      _this.form.pauseValidation();

      var unsubscribe = _this.form.registerField(name, subscriber, subscription, config);

      _this.form.mutators.setDefaultValue(name, defaultValue);

      _this.form.resumeValidation();

      return unsubscribe;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (e) {
      if (typeof e.preventDefault === 'function') {
        e.preventDefault();
      }

      if (_this.form) {
        _this.form.submit();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyDown", function (e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey) && _this.formRef.current) {
        var submitButton = _this.formRef.current.querySelector('button:not([type]), button[type="submit"], input[type="submit"]');

        if (submitButton) submitButton.click();
        e.preventDefault();
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = this.form.subscribe(function (_ref3) {
        var dirty = _ref3.dirty,
            submitting = _ref3.submitting;

        _this2.setState({
          dirty: dirty,
          submitting: submitting
        });
      }, {
        dirty: true,
        submitting: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isDisabled = _this$props2.isDisabled,
          children = _this$props2.children;
      var _this$state = this.state,
          dirty = _this$state.dirty,
          submitting = _this$state.submitting;
      return _react.default.createElement(FormContext.Provider, {
        value: this.registerField
      }, _react.default.createElement(IsDisabledContext.Provider, {
        value: isDisabled
      }, children({
        formProps: {
          onSubmit: this.handleSubmit,
          ref: this.formRef,
          onKeyDown: this.handleKeyDown
        },
        dirty: dirty,
        submitting: submitting,
        disabled: isDisabled,
        getValues: this.getValues
      })));
    }
  }]);
  return Form;
}(_react.default.Component);

(0, _defineProperty2.default)(Form, "defaultProps", {
  isDisabled: false
});
var _default = Form;
exports.default = _default;