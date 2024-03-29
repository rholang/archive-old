"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequiredIndicator = exports.LabelInner = exports.LabelWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _components = require("@atlaskit/theme/components");

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var spacing = (0, _constants.gridSize)();
var fontSize = 12;
var innerHeight = spacing * 2; // 16px

var lineHeight = innerHeight / fontSize;

var getPadding = function getPadding(_ref) {
  var firstChild = _ref.firstChild,
      inlineEdit = _ref.inlineEdit;
  var right = 0;
  var bottom = spacing / 2;
  var left = 0;
  var top = spacing * 2.5;

  if (inlineEdit) {
    bottom = 0;
    left = spacing;
    top = spacing;
  }

  if (firstChild) {
    top = spacing / 2;
  }

  return (0, _styledComponents.css)(["\n    padding: ", "px ", "px ", "px ", "px;\n  "], top, right, bottom, left);
};

var LabelWrapper = _styledComponents.default.label.withConfig({
  displayName: "Label__LabelWrapper",
  componentId: "sc-17towfw-0"
})(["\n  display: block;\n"]);

exports.LabelWrapper = LabelWrapper;
var getColor = (0, _components.themed)({
  light: _colors.N200,
  dark: _colors.DN90
});
var getDisabledColor = (0, _components.themed)({
  light: _colors.N60,
  dark: _colors.DN300
});

var LabelInner = _styledComponents.default.div.withConfig({
  displayName: "Label__LabelInner",
  componentId: "sc-17towfw-1"
})(["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: 600;\n  line-height: ", ";\n  ", ";\n\n  ", ";\n"], function (props) {
  return props.isDisabled ? getDisabledColor(props) : getColor(props);
}, fontSize, lineHeight, getPadding, function (p) {
  return p.isHidden && 'display: none;';
});

exports.LabelInner = LabelInner;

var RequiredIndicator = _styledComponents.default.span.withConfig({
  displayName: "Label__RequiredIndicator",
  componentId: "sc-17towfw-2"
})(["\n  color: ", ";\n  padding-left: 2px;\n"], _colors.red);

exports.RequiredIndicator = RequiredIndicator;