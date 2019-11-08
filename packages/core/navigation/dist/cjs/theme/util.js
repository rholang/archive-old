"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WithRootTheme", {
  enumerable: true,
  get: function get() {
    return _withRootTheme.default;
  }
});
exports.defaultGlobalTheme = exports.defaultContainerTheme = exports.getProvidedScrollbar = exports.whenCollapsedAndNotInOverflowDropdown = exports.whenNotInOverflowDropdown = exports.whenNotCollapsed = exports.whenCollapsed = exports.isInCompactGroup = exports.isInOverflowDropdown = exports.isCollapsed = exports.getProvided = exports.isElectronMac = exports.electronMacTopPadding = exports.isElectronMacKey = exports.isDropdownOverflowKey = exports.groupKey = exports.rootKey = exports.prefix = void 0;

var _styledComponents = require("styled-components");

var _hasOwnProperty = _interopRequireDefault(require("../utils/has-own-property"));

var _presets = require("./presets");

var _withRootTheme = _interopRequireDefault(require("./with-root-theme"));

var prefix = function prefix(key) {
  return "@atlaskit-private-theme-do-not-use/navigation:".concat(key);
};

exports.prefix = prefix;
var rootKey = prefix('root');
exports.rootKey = rootKey;
var groupKey = prefix('group');
exports.groupKey = groupKey;
var isDropdownOverflowKey = prefix('isDropdownOverflow');
exports.isDropdownOverflowKey = isDropdownOverflowKey;
var isElectronMacKey = prefix('isElectronMac');
exports.isElectronMacKey = isElectronMacKey;
var electronMacTopPadding = 14;
exports.electronMacTopPadding = electronMacTopPadding;

var isElectronMac = function isElectronMac(map) {
  return map !== undefined && (0, _hasOwnProperty.default)(map, isElectronMacKey) && map[isElectronMacKey];
};

exports.isElectronMac = isElectronMac;

var getProvided = function getProvided(map) {
  if (map !== undefined && (0, _hasOwnProperty.default)(map, rootKey) && map[rootKey]) {
    return map[rootKey].provided;
  }

  return _presets.container;
};

exports.getProvided = getProvided;

var isCollapsed = function isCollapsed(map) {
  return map[rootKey] && map[rootKey].isCollapsed;
};

exports.isCollapsed = isCollapsed;

var isInOverflowDropdown = function isInOverflowDropdown(map) {
  return (0, _hasOwnProperty.default)(map, isDropdownOverflowKey);
};

exports.isInOverflowDropdown = isInOverflowDropdown;

var isInCompactGroup = function isInCompactGroup(map) {
  if (!(0, _hasOwnProperty.default)(map, groupKey)) {
    return false;
  }

  return map[groupKey].isCompact;
};

exports.isInCompactGroup = isInCompactGroup;

var whenCollapsed = function whenCollapsed() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _styledComponents.css)(["\n  ", ";\n"], function (_ref) {
    var theme = _ref.theme;
    return isCollapsed(theme) ? _styledComponents.css.apply(void 0, args) : '';
  });
};

exports.whenCollapsed = whenCollapsed;

var whenNotCollapsed = function whenNotCollapsed() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return (0, _styledComponents.css)(["\n  ", ";\n"], function (_ref2) {
    var theme = _ref2.theme;
    return !isCollapsed(theme) ? _styledComponents.css.apply(void 0, args) : '';
  });
};

exports.whenNotCollapsed = whenNotCollapsed;

var whenNotInOverflowDropdown = function whenNotInOverflowDropdown() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return (0, _styledComponents.css)(["\n  ", ";\n"], function (_ref3) {
    var theme = _ref3.theme;
    return !isInOverflowDropdown(theme) ? _styledComponents.css.apply(void 0, args) : '';
  });
};

exports.whenNotInOverflowDropdown = whenNotInOverflowDropdown;

var whenCollapsedAndNotInOverflowDropdown = function whenCollapsedAndNotInOverflowDropdown() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return (0, _styledComponents.css)(["\n  ", ";\n"], function (_ref4) {
    var theme = _ref4.theme;
    return isCollapsed(theme) && !isInOverflowDropdown(theme) ? _styledComponents.css.apply(void 0, args) : '';
  });
};

exports.whenCollapsedAndNotInOverflowDropdown = whenCollapsedAndNotInOverflowDropdown;

var getProvidedScrollbar = function getProvidedScrollbar(map) {
  if (map !== undefined && (0, _hasOwnProperty.default)(map, rootKey) && map[rootKey] && map[rootKey].provided.scrollBar) {
    return map[rootKey].provided.scrollBar;
  }

  return _presets.container.scrollBar;
}; // NOTE: Dark mode is a user preference that takes precedence over provided themes


exports.getProvidedScrollbar = getProvidedScrollbar;

var defaultContainerTheme = function defaultContainerTheme(containerTheme, mode) {
  if (containerTheme && containerTheme.hasDarkmode) {
    return containerTheme;
  }

  if (mode === 'dark') {
    return _presets.dark;
  }

  return containerTheme || _presets.container;
};

exports.defaultContainerTheme = defaultContainerTheme;

var defaultGlobalTheme = function defaultGlobalTheme(globalTheme, mode) {
  if (globalTheme && globalTheme.hasDarkmode) return globalTheme;

  if (mode === 'dark') {
    return _presets.dark;
  }

  return globalTheme || _presets.global;
};

exports.defaultGlobalTheme = defaultGlobalTheme;