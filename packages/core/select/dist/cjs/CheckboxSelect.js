"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Select = _interopRequireDefault(require("./Select"));

var _inputOptions = require("./components/input-options");

var CheckboxSelect = function CheckboxSelect(_ref) {
  var components = _ref.components,
      props = (0, _objectWithoutProperties2.default)(_ref, ["components"]);
  return (0, _core.jsx)(_Select.default, (0, _extends2.default)({
    closeMenuOnSelect: false,
    hideSelectedOptions: false,
    isMulti: true,
    components: (0, _objectSpread2.default)({}, components, {
      Option: _inputOptions.CheckboxOption
    })
  }, props));
};

var _default = CheckboxSelect;
exports.default = _default;