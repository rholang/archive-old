"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var baseStyles = {
  itemBase: {
    alignItems: 'center',
    border: 0,
    borderRadius: '50%',
    color: 'inherit',
    cursor: 'pointer',
    display: 'flex',
    fontSize: 'inherit',
    justifyContent: 'center',
    lineHeight: 1,
    outline: 'none',
    padding: 0,
    position: 'relative',
    // allow badge positioning
    '&:focus': {
      boxShadow: "0 0 0 2px ".concat(_colors.B100)
    }
  },
  badgeWrapper: {
    pointerEvents: 'none',
    position: 'absolute',
    userSelect: 'none'
  },
  itemWrapper: {
    display: 'flex'
  }
};
var sizeStyles = {
  large: {
    itemBase: {
      height: "".concat((0, _constants.gridSize)() * 5, "px"),
      width: "".concat((0, _constants.gridSize)() * 5, "px")
    },
    badgeWrapper: {
      left: "".concat((0, _constants.gridSize)() * 2, "px"),
      top: 0
    },
    itemWrapper: {}
  },
  small: {
    itemBase: {
      height: "".concat((0, _constants.gridSize)() * 4, "px"),
      width: "".concat((0, _constants.gridSize)() * 4, "px")
    },
    badgeWrapper: {
      left: "".concat((0, _constants.gridSize)() * 2.5, "px"),
      top: "-".concat((0, _constants.gridSize)() / 2, "px")
    },
    itemWrapper: {
      padding: "".concat((0, _constants.gridSize)() / 2, "px")
    }
  }
};

var _default = function _default(_ref) {
  var product = _ref.product;
  return function (_ref2) {
    var isActive = _ref2.isActive,
        isHover = _ref2.isHover,
        isSelected = _ref2.isSelected,
        _ref2$size = _ref2.size,
        size = _ref2$size === void 0 ? 'large' : _ref2$size;
    return {
      itemBase: (0, _objectSpread2.default)({}, baseStyles.itemBase, sizeStyles[size].itemBase, {
        backgroundColor: function () {
          if (isSelected) return product.background.static;
          if (isActive) return product.background.interact;
          if (isHover) return product.background.hint;
          return product.background.default;
        }(),
        color: product.text.default
      }),
      badgeWrapper: (0, _objectSpread2.default)({}, baseStyles.badgeWrapper, sizeStyles[size].badgeWrapper),
      itemWrapper: (0, _objectSpread2.default)({}, sizeStyles[size].itemWrapper)
    };
  };
};

exports.default = _default;