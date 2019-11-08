"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeStyle = exports.themeWithKeys = exports.defaultTheme = exports.gridSize = exports.compactLineHeight = exports.compactSmallFontSize = exports.themeNamespace = void 0;

var _constants = require("@atlaskit/theme/constants");

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

var themeNamespace = '@atlaskit-shared-theme/item'; // Used for Group titles and Item descriptions

exports.themeNamespace = themeNamespace;
var compactSmallFontSize = 10;
exports.compactSmallFontSize = compactSmallFontSize;
var compactLineHeight = 1.2;
exports.compactLineHeight = compactLineHeight;
var gridSize = (0, _constants.gridSize)();
exports.gridSize = gridSize;
var defaultTheme = {
  afterItemSpacing: {
    compact: (0, _constants.gridSize)(),
    default: (0, _constants.gridSize)()
  },
  beforeItemSpacing: {
    compact: (0, _constants.gridSize)(),
    default: (0, _constants.gridSize)()
  },
  borderRadius: (0, _constants.borderRadius)(),
  focus: {
    outline: colors.B100
  },
  height: {
    compact: 0,
    default: 0
  },
  width: {
    compact: 'auto',
    default: 'auto'
  },
  padding: {
    default: {
      bottom: (0, _constants.gridSize)() / 2,
      left: (0, _constants.gridSize)() / 2,
      right: (0, _constants.gridSize)() / 2,
      top: (0, _constants.gridSize)() / 2
    },
    compact: {
      bottom: (0, _constants.gridSize)(),
      left: (0, _constants.gridSize)(),
      right: (0, _constants.gridSize)(),
      top: (0, _constants.gridSize)()
    }
  },
  default: {
    background: colors.background,
    text: colors.text,
    secondaryText: colors.N200
  },
  selected: {
    background: colors.backgroundActive,
    text: colors.N500,
    secondaryText: colors.N200
  },
  active: {
    background: colors.backgroundActive,
    text: colors.textActive,
    secondaryText: colors.N200
  },
  hover: {
    background: colors.backgroundHover,
    text: colors.textHover,
    secondaryText: colors.N200
  },
  disabled: {
    background: colors.N0,
    text: colors.N200,
    secondaryText: colors.N200
  },
  // same as hover in this case
  dragging: {
    background: colors.N20,
    text: colors.N800,
    secondaryText: colors.N200
  }
};
exports.defaultTheme = defaultTheme;

var isValidCssValue = function isValidCssValue(value) {
  return value !== undefined && value !== null && value !== '';
}; // Returns the theme that contains the requested theme key(s), preferring the user-supplied
// theme if it is provided.


var themeWithKeys = function themeWithKeys(maybeTheme, key, parentKey) {
  if (parentKey) {
    return maybeTheme && maybeTheme[parentKey] && isValidCssValue(maybeTheme[parentKey][key]) ? maybeTheme : defaultTheme;
  }

  return maybeTheme && isValidCssValue(maybeTheme[key]) ? maybeTheme : defaultTheme;
}; // Returns the theme value for the requested key(s), falling back to the default theme if the
// user-supplied theme doesn't exist or doesn't contain the requested key(s)


exports.themeWithKeys = themeWithKeys;

var getThemeStyle = function getThemeStyle(maybeTheme, key, parentKey) {
  var theme = themeWithKeys(maybeTheme, key, parentKey);
  return parentKey ? theme[parentKey][key] : theme[key];
};

exports.getThemeStyle = getThemeStyle;