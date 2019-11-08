"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Field = _interopRequireDefault(require("./Field"));

var CheckboxField = function CheckboxField(props) {
  var children = props.children,
      _props$defaultIsCheck = props.defaultIsChecked,
      defaultIsChecked = _props$defaultIsCheck === void 0 ? false : _props$defaultIsCheck,
      value = props.value,
      rest = (0, _objectWithoutProperties2.default)(props, ["children", "defaultIsChecked", "value"]);
  return value !== undefined ? _react.default.createElement(_Field.default, (0, _extends2.default)({}, rest, {
    defaultValue: function defaultValue() {
      var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return defaultIsChecked ? [].concat((0, _toConsumableArray2.default)(currentValue), [value]) : currentValue;
    },
    transform: function transform(event, currentValue) {
      return event.target.checked ? [].concat((0, _toConsumableArray2.default)(currentValue), [value]) : currentValue.filter(function (v) {
        return v !== value;
      });
    }
  }), function (_ref) {
    var _ref$fieldProps = _ref.fieldProps,
        fieldValue = _ref$fieldProps.value,
        otherFieldProps = (0, _objectWithoutProperties2.default)(_ref$fieldProps, ["value"]),
        others = (0, _objectWithoutProperties2.default)(_ref, ["fieldProps"]);
    return children((0, _objectSpread2.default)({
      fieldProps: (0, _objectSpread2.default)({}, otherFieldProps, {
        isChecked: !!fieldValue.find(function (v) {
          return v === value;
        }),
        value: value
      })
    }, others));
  }) : _react.default.createElement(_Field.default, (0, _extends2.default)({}, rest, {
    defaultValue: defaultIsChecked,
    transform: function transform(event) {
      return event.target.checked;
    }
  }), function (_ref2) {
    var _ref2$fieldProps = _ref2.fieldProps,
        fieldValue = _ref2$fieldProps.value,
        otherFieldProps = (0, _objectWithoutProperties2.default)(_ref2$fieldProps, ["value"]),
        others = (0, _objectWithoutProperties2.default)(_ref2, ["fieldProps"]);
    return children((0, _objectSpread2.default)({
      fieldProps: (0, _objectSpread2.default)({}, otherFieldProps, {
        isChecked: fieldValue,
        value: value
      })
    }, others));
  });
};

CheckboxField.defaultProps = {
  defaultIsChecked: false
};
var _default = CheckboxField;
exports.default = _default;