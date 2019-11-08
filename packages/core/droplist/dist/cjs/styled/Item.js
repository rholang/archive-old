"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryText = exports.Description = exports.Content = exports.ContentWrapper = exports.After = exports.Before = exports.InputWrapper = exports.Span = exports.Anchor = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _components = require("@atlaskit/theme/components");

var _constants = require("@atlaskit/theme/constants");

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

var _math = require("@atlaskit/theme/math");

var activeBackgroundColor = (0, _components.themed)({
  light: colors.B75,
  dark: colors.DN30
});
var hoverBackgroundColor = (0, _components.themed)({
  light: colors.N20,
  dark: colors.DN60
});
var selectedBackgroundColor = (0, _components.themed)({
  light: colors.N0,
  dark: colors.DN30
});
var activePrimaryTextColor = (0, _components.themed)({
  light: colors.N800,
  dark: colors.DN300
});
var defaultPrimaryTextColor = (0, _components.themed)({
  light: colors.N800,
  dark: colors.DN600
});
var disabledPrimaryTextColor = (0, _components.themed)({
  light: colors.N70,
  dark: colors.DN70
});
var primaryPrimaryTextColor = (0, _components.themed)({
  light: colors.B400,
  dark: colors.B400
});
var selectedPrimaryTextColor = (0, _components.themed)({
  light: colors.N800,
  dark: colors.N800
});
var focusedStyles = (0, _styledComponents.css)(["\n  box-shadow: 0 0 0 2px ", "\n    inset;\n  outline: none;\n  outline-offset: 0;\n  position: relative; /* prevents bgcolor of a hovered element from obfuscating focus ring of a focused sibling element */\n"], (0, _components.themed)({
  light: colors.B100,
  dark: colors.B75
}));
var activeStyles = (0, _styledComponents.css)(["\n  &,\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"], selectedBackgroundColor, selectedPrimaryTextColor);
var primaryStyles = (0, _styledComponents.css)(["\n  color: ", ";\n"], primaryPrimaryTextColor);

var sharedStyles = function sharedStyles(props) {
  return (0, _styledComponents.css)(["\n  align-items: center;\n  box-sizing: border-box;\n  color: ", ";\n  cursor: ", ";\n  display: ", ";\n  flex-wrap: nowrap;\n  font-size: ", "px;\n  font-weight: normal;\n  padding: 0 ", "px;\n  text-decoration: none;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    text-decoration: none;\n\n    ", ";\n  }\n  &:active {\n    background-color: ", ";\n    color: ", ";\n\n    ", ";\n  }\n  &:focus {\n    ", ";\n  }\n\n  ", " ", " ", ";\n"], props.isDisabled ? disabledPrimaryTextColor : defaultPrimaryTextColor, props.isDisabled ? 'not-allowed' : 'pointer', props.isHidden ? 'none' : 'flex', _constants.fontSize, (0, _math.multiply)(_constants.gridSize, 1.5), !props.isDisabled && hoverBackgroundColor, props.isDisabled ? disabledPrimaryTextColor : defaultPrimaryTextColor, props.isPrimary && primaryStyles, !props.isDisabled && activeBackgroundColor, !props.isDisabled && activePrimaryTextColor, props.isPrimary && primaryStyles, focusedStyles, props.isFocused && focusedStyles, props.isActive && activeStyles, props.isPrimary && primaryStyles);
};

var Anchor = _styledComponents.default.a.withConfig({
  displayName: "Item__Anchor",
  componentId: "aiqnor-0"
})(["\n  ", ";\n"], function (props) {
  return sharedStyles(props);
});

exports.Anchor = Anchor;

var Span = _styledComponents.default.span.withConfig({
  displayName: "Item__Span",
  componentId: "aiqnor-1"
})(["\n  ", ";\n"], function (props) {
  return sharedStyles(props);
}); // Checkbox/Radio wrapper -- sits left of the children


exports.Span = Span;

var InputWrapper = _styledComponents.default.span.withConfig({
  displayName: "Item__InputWrapper",
  componentId: "aiqnor-2"
})(["\n  display: flex;\n  margin: 0 2px;\n"]); // Elements injected before/after the children


exports.InputWrapper = InputWrapper;

var Before = _styledComponents.default.span.withConfig({
  displayName: "Item__Before",
  componentId: "aiqnor-3"
})(["\n  display: flex;\n"]);

exports.Before = Before;

var After = _styledComponents.default.span.withConfig({
  displayName: "Item__After",
  componentId: "aiqnor-4"
})(["\n  align-items: center;\n  display: flex;\n"]); // Alignment and layout for the children


exports.After = After;

var ContentWrapper = _styledComponents.default.span.withConfig({
  displayName: "Item__ContentWrapper",
  componentId: "aiqnor-5"
})(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 ", "px;\n  padding: ", "px 0;\n  overflow: hidden;\n\n  &:first-child {\n    margin: 0;\n  }\n"], _constants.gridSize, _constants.gridSize);

exports.ContentWrapper = ContentWrapper;

var Content = _styledComponents.default.span.withConfig({
  displayName: "Item__Content",
  componentId: "aiqnor-6"
})(["\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  ", ";\n"], function (props) {
  return props.allowMultiline && (0, _styledComponents.css)(["\n      white-space: normal;\n    "]);
}); // Description is a block element below the children, like a subtitle


exports.Content = Content;

var Description = _styledComponents.default.span.withConfig({
  displayName: "Item__Description",
  componentId: "aiqnor-7"
})(["\n  color: ", ";\n  flex: 1 1 auto;\n  font-size: 12px;\n  line-height: 16 / 12;\n  margin-top: ", "px;\n"], colors.subtleText, (0, _math.divide)(_constants.gridSize, 2)); // NOTE: Exposed as a named export for this package


exports.Description = Description;

var SecondaryText = _styledComponents.default.span.withConfig({
  displayName: "Item__SecondaryText",
  componentId: "aiqnor-8"
})(["\n  color: ", ";\n"], colors.subtleText);

exports.SecondaryText = SecondaryText;