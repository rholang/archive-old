"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = exports.Content = exports.ContentWrapper = exports.After = exports.Before = exports.InputWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _theme = require("../util/theme");

// Checkbox/Radio wrapper -- sits left of the children
var InputWrapper = _styledComponents.default.span.withConfig({
  displayName: "ItemParts__InputWrapper",
  componentId: "sc-14xek3m-0"
})(["\n  display: flex;\n  margin: 0 2px;\n"]); // Elements injected before/after the children


exports.InputWrapper = InputWrapper;

var BeforeAfterBase = _styledComponents.default.span.withConfig({
  displayName: "ItemParts__BeforeAfterBase",
  componentId: "sc-14xek3m-1"
})(["\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  /* Fix windows line-height issue */\n  padding-bottom: 1px;\n"]);

var getBeforeSpacing = function getBeforeSpacing(_ref) {
  var isCompact = _ref.isCompact,
      theme = _ref.theme;
  var spaceKey = isCompact ? 'compact' : 'default';
  var space = (0, _theme.getThemeStyle)(theme[_theme.themeNamespace], spaceKey, 'beforeItemSpacing');
  return (0, _styledComponents.css)(["\n    margin-right: ", "px;\n  "], space);
};

var Before = (0, _styledComponents.default)(BeforeAfterBase).withConfig({
  displayName: "ItemParts__Before",
  componentId: "sc-14xek3m-2"
})(["\n  ", ";\n"], getBeforeSpacing);
exports.Before = Before;

var getAfterSpacing = function getAfterSpacing(_ref2) {
  var isCompact = _ref2.isCompact,
      theme = _ref2.theme;
  var spaceKey = isCompact ? 'compact' : 'default';
  var space = (0, _theme.getThemeStyle)(theme[_theme.themeNamespace], spaceKey, 'afterItemSpacing');
  return (0, _styledComponents.css)(["\n    margin-left: ", "px;\n  "], space);
};

var After = (0, _styledComponents.default)(BeforeAfterBase).withConfig({
  displayName: "ItemParts__After",
  componentId: "sc-14xek3m-3"
})(["\n  ", ";\n"], getAfterSpacing); // Alignment and layout for the children

exports.After = After;

var ContentWrapper = _styledComponents.default.span.withConfig({
  displayName: "ItemParts__ContentWrapper",
  componentId: "sc-14xek3m-4"
})(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin: 0;\n  overflow: hidden;\n\n  &:first-child {\n    margin: 0;\n  }\n"]);

exports.ContentWrapper = ContentWrapper;

var Content = _styledComponents.default.span.withConfig({
  displayName: "ItemParts__Content",
  componentId: "sc-14xek3m-5"
})(["\n  display: block;\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: ", ";\n  line-height: ", ";\n  /* Fix windows line-height issue */\n  padding-bottom: 1px;\n"], function (_ref3) {
  var allowMultiline = _ref3.allowMultiline;
  return allowMultiline ? 'normal' : 'nowrap';
}, 16 / (0, _constants.fontSize)());

exports.Content = Content;

var getColorStyle = function getColorStyle(_ref4) {
  var isDisabled = _ref4.isDisabled,
      theme = _ref4.theme;

  if (isDisabled) {
    return (0, _styledComponents.css)(["\n      color: ", ";\n    "], (0, _theme.getThemeStyle)(theme[_theme.themeNamespace], 'secondaryText', 'disabled'));
  }

  return (0, _styledComponents.css)(["\n    color: ", ";\n\n    /* This detects hover on the grandparent. Saves us having to maintain isHovered\n       state in the grandparent. */\n    *:hover > * > & {\n      color: ", ";\n    }\n\n    *:active > * > & {\n      color: ", ";\n    }\n  "], (0, _theme.getThemeStyle)(theme[_theme.themeNamespace], 'secondaryText', 'default'), function () {
    return (0, _theme.getThemeStyle)(theme[_theme.themeNamespace], 'secondaryText', 'hover');
  }, function () {
    return (0, _theme.getThemeStyle)(theme[_theme.themeNamespace], 'secondaryText', 'active');
  });
};

var getDescriptionFontStyles = function getDescriptionFontStyles(_ref5) {
  var isCompact = _ref5.isCompact;
  var descriptionFontSize = isCompact ? _theme.compactSmallFontSize : (0, _constants.fontSizeSmall)();
  var lineHeight = isCompact ? _theme.compactLineHeight : 14 / descriptionFontSize;
  return (0, _styledComponents.css)(["\n    font-size: ", "px;\n    line-height: ", ";\n    /* Fix windows line-height issue */\n    padding-bottom: 1px;\n  "], descriptionFontSize, lineHeight);
}; // Description is a block element below the children, like a subtitle


var Description = _styledComponents.default.span.withConfig({
  displayName: "ItemParts__Description",
  componentId: "sc-14xek3m-6"
})(["\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  ", " ", ";\n"], getColorStyle, getDescriptionFontStyles);

exports.Description = Description;