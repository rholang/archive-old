"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _colors = require("@atlaskit/theme/colors");

var _constants = require("../../../common/constants");

var baseStyles = {
  boxSizing: 'border-box',
  height: '100%',
  left: 0,
  minWidth: _constants.CONTENT_NAV_WIDTH,
  overflowX: 'hidden',
  position: 'absolute',
  top: 0,
  width: '100%'
};

var _default = function _default(_ref) {
  var product = _ref.product;
  return function () {
    return {
      container: (0, _objectSpread2.default)({}, baseStyles, {
        backgroundColor: _colors.N20,
        color: _colors.N500
      }),
      product: (0, _objectSpread2.default)({}, baseStyles, {
        backgroundColor: product.background.default,
        color: product.text.default
      })
    };
  };
};

exports.default = _default;