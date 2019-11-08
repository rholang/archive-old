"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var dividerLineHeight = 2;
var dividerTotalHeight = (0, _constants.gridSize)() * 5;
var baseStyles = {
  borderRadius: '1px',
  flexShrink: 0,
  height: "".concat(dividerLineHeight, "px"),
  margin: "".concat((dividerTotalHeight - dividerLineHeight) / 2, "px 0")
};

var _default = function _default(_ref) {
  var product = _ref.product;
  return function () {
    return {
      container: (0, _objectSpread2.default)({}, baseStyles, {
        backgroundColor: _colors.N30A
      }),
      product: (0, _objectSpread2.default)({}, baseStyles, {
        backgroundColor: product.background.static
      })
    };
  };
};

exports.default = _default;