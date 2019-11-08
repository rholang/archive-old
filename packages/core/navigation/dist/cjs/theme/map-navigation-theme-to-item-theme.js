"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sharedVariables = require("../shared-variables");

// Converts the top-level 'Provided' container navigation theme into the
// format the @atlaskit/item expects.
var itemThemeFromNavTheme = function itemThemeFromNavTheme(navigationTheme) {
  return {
    padding: {
      compact: {
        bottom: _sharedVariables.gridSize,
        left: _sharedVariables.gridSize,
        right: _sharedVariables.gridSize,
        top: _sharedVariables.gridSize
      },
      default: {
        bottom: _sharedVariables.gridSize,
        left: _sharedVariables.gridSize * 1.5,
        right: _sharedVariables.gridSize * 1.5,
        top: _sharedVariables.gridSize
      }
    },
    borderRadius: 3,
    height: {
      compact: _sharedVariables.gridSize * 4.5,
      default: _sharedVariables.gridSize * 5
    },
    beforeItemSpacing: {
      compact: _sharedVariables.gridSize,
      default: _sharedVariables.gridSize * 2
    },
    default: {
      background: navigationTheme.item.default.background,
      text: navigationTheme.text,
      secondaryText: navigationTheme.subText
    },
    hover: {
      background: navigationTheme.item.hover.background,
      text: navigationTheme.text,
      secondaryText: navigationTheme.subText
    },
    active: {
      background: navigationTheme.item.active.background,
      text: navigationTheme.item.active.text || navigationTheme.text,
      secondaryText: navigationTheme.subText
    },
    selected: {
      background: navigationTheme.item.selected.background,
      text: navigationTheme.item.selected.text || '',
      secondaryText: navigationTheme.subText
    },
    focus: {
      outline: navigationTheme.item.focus.outline
    },
    dragging: {
      background: navigationTheme.item.dragging.background
    }
  };
};

var _default = itemThemeFromNavTheme;
exports.default = _default;