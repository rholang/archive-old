"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizerVisibleWidth = exports.resizerClickableWidth = exports.globalSecondaryActions = exports.globalPrimaryActions = exports.scrollHintSpacing = exports.scrollHintHeight = exports.scrollBarSize = exports.unthemedColors = exports.zIndex = exports.resizeAnimationTime = exports.animationTime = exports.animationTimeUnitless = exports.drawerIconOffset = exports.resizeClosedBreakpoint = exports.standardOpenWidth = exports.containerOpenWidth = exports.containerClosedWidth = exports.globalOpenWidth = exports.drawerContainerHeaderAnimationSpeed = exports.drawerOffset = exports.containerTitleIconSpacing = exports.containerTitleHorizontalPadding = exports.containerTitleBottomMargin = exports.globalItemSizes = exports.layout = exports.gridSize = void 0;

var _components = require("@atlaskit/theme/components");

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

/**
 * NOTE: changing the width of the Navigation is considered a breaking change
 */
var gridSize = (0, _constants.gridSize)();
exports.gridSize = gridSize;
var defaultClosedWidth = gridSize * 8; // Not using grid units here because this is a macOS-specific value and is not
// related to the ADG 3 grid.

var extraElectronGlobalNavWidth = 4;
var layout = {
  padding: {
    top: gridSize * 2,
    bottom: gridSize * 2,
    side: gridSize
  },
  width: {
    closed: {
      default: defaultClosedWidth,
      electron: defaultClosedWidth + extraElectronGlobalNavWidth
    }
  }
};
exports.layout = layout;
var globalItemSizes = {
  small: gridSize * 4,
  medium: gridSize * 5,
  large: gridSize * 6
};
exports.globalItemSizes = globalItemSizes;
var containerTitleBottomMargin = gridSize;
exports.containerTitleBottomMargin = containerTitleBottomMargin;
var containerTitleHorizontalPadding = gridSize / 2;
exports.containerTitleHorizontalPadding = containerTitleHorizontalPadding;
var containerTitleIconSpacing = gridSize;
exports.containerTitleIconSpacing = containerTitleIconSpacing;
var drawerOffset = gridSize * 2;
exports.drawerOffset = drawerOffset;
var drawerContainerHeaderAnimationSpeed = '220ms';
exports.drawerContainerHeaderAnimationSpeed = drawerContainerHeaderAnimationSpeed;

var globalOpenWidth = function globalOpenWidth() {
  var isElectron = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return layout.width.closed[isElectron ? 'electron' : 'default'];
};

exports.globalOpenWidth = globalOpenWidth;

var containerClosedWidth = function containerClosedWidth() {
  var isElectron = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return globalOpenWidth(isElectron);
};

exports.containerClosedWidth = containerClosedWidth;
var containerOpenWidth = 240;
exports.containerOpenWidth = containerOpenWidth;

var standardOpenWidth = function standardOpenWidth() {
  var isElectron = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return globalOpenWidth(isElectron) + containerOpenWidth;
};

exports.standardOpenWidth = standardOpenWidth;

var resizeClosedBreakpoint = function resizeClosedBreakpoint() {
  var isElectron = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return globalOpenWidth(isElectron) + containerOpenWidth / 2;
};

exports.resizeClosedBreakpoint = resizeClosedBreakpoint;
var drawerIconOffset = 80;
exports.drawerIconOffset = drawerIconOffset;
var animationTimeUnitless = 200;
exports.animationTimeUnitless = animationTimeUnitless;
var animationTime = "".concat(animationTimeUnitless, "ms");
exports.animationTime = animationTime;
var resizeAnimationTime = animationTime;
exports.resizeAnimationTime = resizeAnimationTime;
var zIndex = {
  base: _constants.layers.navigation(),
  // needs to sit on top of navigation and the drawer
  drawer: _constants.layers.blanket() + 1
}; // these are colors that are currently not controllable via theming

exports.zIndex = zIndex;
var unthemedColors = {
  resizer: (0, _components.themed)({
    light: _colors.B100,
    dark: _colors.B100
  }),
  presenceIconBg: _colors.N0
};
exports.unthemedColors = unthemedColors;
var scrollBarSize = gridSize;
exports.scrollBarSize = scrollBarSize;
var scrollHintHeight = 2;
exports.scrollHintHeight = scrollHintHeight;
var scrollHintSpacing = gridSize * 2;
exports.scrollHintSpacing = scrollHintSpacing;

var globalPrimaryActions = function () {
  var itemSizes = {
    medium: gridSize * 5
  };
  var margin = {
    bottom: gridSize * 2
  };

  var height = function height(actionCount) {
    var innerHeight = itemSizes.medium * (actionCount + 1) + gridSize * 2;
    return {
      inner: innerHeight,
      outer: gridSize + margin.bottom + innerHeight
    };
  };

  return {
    height: height,
    margin: margin,
    itemSizes: itemSizes
  };
}();

exports.globalPrimaryActions = globalPrimaryActions;

var globalSecondaryActions = function () {
  var itemSizes = {
    medium: gridSize * 5
  };
  var margin = {
    bottom: gridSize * 2
  };

  var height = function height(actionCount) {
    var innerHeight = itemSizes.medium * actionCount;
    return {
      inner: innerHeight,
      outer: margin.bottom + innerHeight
    };
  };

  return {
    height: height,
    margin: margin,
    itemSizes: itemSizes
  };
}();

exports.globalSecondaryActions = globalSecondaryActions;
var resizerClickableWidth = gridSize * 2;
exports.resizerClickableWidth = resizerClickableWidth;
var resizerVisibleWidth = 2;
exports.resizerVisibleWidth = resizerVisibleWidth;