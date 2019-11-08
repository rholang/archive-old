"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _item = require("@atlaskit/item");

var _components = require("@atlaskit/theme/components");

var _constants = require("@atlaskit/theme/constants");

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

var _math = require("@atlaskit/theme/math");

var dropdownPadding = {
  bottom: _constants.gridSize,
  left: (0, _math.multiply)(_constants.gridSize, 1.5),
  right: (0, _math.multiply)(_constants.gridSize, 1.5),
  top: _constants.gridSize
};
var droplistItemTheme = {
  padding: {
    default: dropdownPadding,
    compact: dropdownPadding
  },
  borderRadius: function borderRadius() {
    return 0;
  },
  default: {
    background: (0, _components.themed)({
      light: colors.N0,
      dark: colors.DN50
    }),
    text: (0, _components.themed)({
      light: colors.N800,
      dark: colors.DN600
    }),
    secondaryText: (0, _components.themed)({
      light: colors.N200,
      dark: colors.DN300
    })
  },
  hover: {
    background: (0, _components.themed)({
      light: colors.N20,
      dark: colors.DN70
    }),
    text: (0, _components.themed)({
      light: colors.N800,
      dark: colors.DN600
    }),
    secondaryText: (0, _components.themed)({
      light: colors.N200,
      dark: colors.DN300
    })
  },
  active: {
    background: (0, _components.themed)({
      light: colors.B75,
      dark: colors.B75
    }),
    text: (0, _components.themed)({
      light: colors.N800,
      dark: colors.B400
    }),
    secondaryText: (0, _components.themed)({
      light: colors.N200,
      dark: colors.DN300
    })
  },
  selected: {
    background: 'transparent',
    text: (0, _components.themed)({
      light: colors.N800,
      dark: colors.DN600
    }),
    secondaryText: (0, _components.themed)({
      light: colors.N200,
      dark: colors.DN300
    })
  },
  disabled: {
    background: 'transparent',
    text: (0, _components.themed)({
      light: colors.N70,
      dark: colors.DN80
    }),
    secondaryText: (0, _components.themed)({
      light: colors.N50,
      dark: colors.DN70
    })
  },
  focus: {
    outline: (0, _components.themed)({
      light: colors.B100,
      dark: colors.B75
    })
  }
};

var _default = (0, _defineProperty2.default)({}, _item.itemThemeNamespace, droplistItemTheme);

exports.default = _default;