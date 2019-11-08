"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _sharedVariables = require("../shared-variables");

var overrideItemTheme = function overrideItemTheme(outerTheme, key) {
  var original = outerTheme[key];

  if (!original || !original.padding) {
    // eslint-disable-next-line no-console
    console.error("Could not find theme with key '".concat(key, "' to modifiy it for title"));
    return outerTheme;
  } // TODO: deep modification while respecting types


  var newTheme = (0, _lodash.default)(original);
  newTheme.padding.default.left = _sharedVariables.containerTitleHorizontalPadding;
  newTheme.padding.default.right = _sharedVariables.containerTitleHorizontalPadding;
  newTheme.height.default = 0;
  newTheme.beforeItemSpacing.default = _sharedVariables.containerTitleIconSpacing;
  return (0, _objectSpread3.default)({}, outerTheme, (0, _defineProperty2.default)({}, key, newTheme));
};

var _default = overrideItemTheme;
exports.default = _default;