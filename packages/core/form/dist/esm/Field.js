import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _typeof from "@babel/runtime/helpers/typeof";
import React from 'react';
import arrayShallowEqual from 'shallow-equal/arrays';
import objectShallowEqual from 'shallow-equal/objects';
import { uid } from 'react-uid';
import memoizeOne from 'memoize-one';
import invariant from 'tiny-invariant';
import { FormContext, IsDisabledContext } from './Form';
import FieldWrapper, { Label, RequiredIndicator } from './styled/Field';
import translateEvent from './utils/translateEvent';

var shallowEqual = function shallowEqual(a, b) {
  return a === b || typeof b === 'function' || Array.isArray(a) && Array.isArray(b) && arrayShallowEqual(a, b) || _typeof(a) === 'object' && _typeof(b) === 'object' && objectShallowEqual(a, b);
}; // Provides the id of the field to message components.
// This links the message with the field for screen-readers.


export var FieldId = React.createContext();

var FieldInner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FieldInner, _React$Component);

  function FieldInner() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FieldInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FieldInner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "unregisterField", function () {});

    _defineProperty(_assertThisInitialized(_this), "getFieldId", memoizeOne(function (name) {
      return "".concat(name, "-").concat(uid({
        id: name
      }));
    }));

    _defineProperty(_assertThisInitialized(_this), "state", {
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

    _defineProperty(_assertThisInitialized(_this), "register", function () {
      var _this$props = _this.props,
          defaultValue = _this$props.defaultValue,
          name = _this$props.name,
          registerField = _this$props.registerField,
          validate = _this$props.validate;

      if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
        invariant(name, '@atlaskit/form: Field components have a required name prop');
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

  _createClass(FieldInner, [{
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

      var extendedFieldProps = _objectSpread({}, fieldProps, {
        name: name,
        isDisabled: isDisabled,
        isInvalid: Boolean(error),
        isRequired: Boolean(isRequired),
        'aria-invalid': error ? 'true' : 'false',
        'aria-labelledby': "".concat(fieldId, "-label ").concat(fieldId, "-helper ").concat(fieldId, "-valid ").concat(fieldId, "-error"),
        id: fieldId
      });

      return React.createElement(FieldWrapper, null, label && React.createElement(Label, {
        id: "".concat(fieldId, "-label"),
        htmlFor: fieldId
      }, label, isRequired && React.createElement(RequiredIndicator, {
        "aria-hidden": "true"
      }, "*")), React.createElement(FieldId.Provider, {
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
}(React.Component); // Make it easier to reference context values in lifecycle methods


_defineProperty(FieldInner, "defaultProps", {
  registerField: function registerField() {
    return function () {};
  },
  transform: translateEvent
});

var Field = function Field(props) {
  return React.createElement(FormContext.Consumer, null, function (registerField) {
    return React.createElement(IsDisabledContext.Consumer, null, function (formIsDisabled) {
      return React.createElement(FieldInner, _extends({}, props, {
        registerField: registerField,
        isDisabled: formIsDisabled || props.isDisabled
      }));
    });
  });
};

Field.defaultProps = {
  defaultValue: undefined,
  isDisabled: false,
  transform: translateEvent
};
export default Field;