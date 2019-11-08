import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";

/** @jsx jsx */
import { jsx } from '@emotion/core';
import CloseIcon from '@atlaskit/icon/glyph/editor/close';
import { borderRadius, colors } from '@atlaskit/theme';
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
export var Note = function Note(props) {
  return jsx("div", _extends({
    css: {
      color: colors.N200,
      fontSize: '0.75rem',
      marginTop: '0.5em'
    }
  }, props));
};
export var HiddenButton = function HiddenButton(props) {
  return jsx("button", _extends({
    css: hiddenStyles
  }, props));
};
export var HiddenLabel = function HiddenLabel(props) {
  return jsx("label", _extends({
    css: hiddenStyles
  }, props));
};
export var ClearButton = function ClearButton(_ref) {
  var label = _ref.label,
      isSelected = _ref.isSelected,
      props = _objectWithoutProperties(_ref, ["label", "isSelected"]);

  var size = 24;
  return jsx("button", _extends({
    css: {
      background: 0,
      border: 0,
      borderRadius: borderRadius() / 2,
      color: isSelected ? 'white' : colors.N400,
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
        backgroundColor: isSelected ? colors.N400A : colors.N30A,
        opacity: 1
      }
    }
  }, props), jsx(CloseIcon, {
    primaryColor: "inherit",
    label: label
  }));
};
ClearButton.defaultProps = {
  isSelected: false,
  type: 'button'
};