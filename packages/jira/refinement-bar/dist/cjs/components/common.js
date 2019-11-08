"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearButton = exports.HiddenLabel = exports.HiddenButton = exports.Note = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _core = require("@emotion/core");

var _close = _interopRequireDefault(require("@atlaskit/icon/glyph/editor/close"));

var _theme = require("@atlaskit/theme");

/** @jsx jsx */
var hiddenStyles = {
  background: 0,
  backgroundClip: '-1px -1px -1px -1px',
  border: 0,
  height: 1,
  opacity: 0,
  padding: 0,
  position: 'absolute',
  width: 1
};

var Note = function Note(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css: {
      color: _theme.colors.N200,
      fontSize: '0.75rem',
      marginTop: '0.5em'
    }
  }, props));
};

exports.Note = Note;

var HiddenButton = function HiddenButton(props) {
  return (0, _core.jsx)("button", (0, _extends2.default)({
    css: hiddenStyles
  }, props));
};

exports.HiddenButton = HiddenButton;

var HiddenLabel = function HiddenLabel(props) {
  return (0, _core.jsx)("label", (0, _extends2.default)({
    css: hiddenStyles
  }, props));
};

exports.HiddenLabel = HiddenLabel;

var ClearButton = function ClearButton(_ref) {
  var label = _ref.label,
      isSelected = _ref.isSelected,
      props = (0, _objectWithoutProperties2.default)(_ref, ["label", "isSelected"]);
  var size = 24;
  return (0, _core.jsx)("button", (0, _extends2.default)({
    css: {
      background: 0,
      border: 0,
      borderRadius: (0, _theme.borderRadius)() / 2,
      color: isSelected ? 'white' : _theme.colors.N400,
      cursor: 'pointer',
      height: size,
      lineHeight: 1,
      opacity: 0.66,
      outline: 0,
      padding: 0,
      position: 'absolute',
      right: 8,
      top: '50%',
      marginTop: -(size / 2),
      transition: 'background-color 200ms, opacity 200ms',
      width: size,
      ':hover, :focus': {
        backgroundColor: isSelected ? _theme.colors.N400A : _theme.colors.N30A,
        opacity: 1
      }
    }
  }, props), (0, _core.jsx)(_close.default, {
    primaryColor: "inherit",
    label: label
  }));
};

exports.ClearButton = ClearButton;
ClearButton.defaultProps = {
  isSelected: false,
  type: 'button'
};