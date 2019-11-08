"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _constants = require("@atlaskit/theme/constants");

var _constants2 = require("../../../common/constants");

var gridSize = (0, _constants.gridSize)();
var baseStyles = {
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  justifyContent: 'space-between',
  paddingBottom: "calc(".concat(gridSize * 3 - 4, "px)"),
  paddingTop: gridSize * 3,
  transition: 'background-color 0.3s cubic-bezier(0.2, 0, 0, 1), color 0.3s cubic-bezier(0.2, 0, 0, 1)',
  width: _constants2.GLOBAL_NAV_WIDTH
};

var _default = function _default(_ref) {
  var product = _ref.product;
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      topOffset: '0'
    },
        topOffset = _ref2.topOffset;

    return (0, _objectSpread2.default)({}, baseStyles, {
      height: "calc(100vh - ".concat(topOffset, "px)"),
      backgroundColor: product.background.default,
      color: product.text.default,
      fill: product.background.default
    });
  };
};

exports.default = _default;