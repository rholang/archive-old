import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/** @jsx jsx */
// $FlowFixMe
import { forwardRef } from 'react';
import { jsx } from '@emotion/core';
import { borderRadius, colors, gridSize } from '@atlaskit/theme';
import Tooltip from '@atlaskit/tooltip';
import { ClearButton } from './common';
export var FilterButton = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      field = _ref.field,
      isInvalid = _ref.isInvalid,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick,
      onClear = _ref.onClear;
  return onClear ? jsx(ButtonWrapper, null, jsx(Button, {
    appearance: isInvalid ? 'warning' : 'default',
    isSelected: isSelected,
    onClick: onClick,
    ref: ref,
    hasIcon: true
  }, children), jsx(Tooltip, {
    content: "Clear filter",
    position: "top"
  }, jsx(ClearButton, {
    isSelected: isSelected && !isInvalid,
    onClick: onClear,
    label: "Clear ".concat(field.label, " filter")
  }))) : jsx(Button, {
    isSelected: isSelected,
    onClick: onClick,
    ref: ref
  }, children);
}); // ==============================
// Styled Components
// ==============================

var appearances = function appearances(_ref2) {
  var appearance = _ref2.appearance,
      isSelected = _ref2.isSelected;
  var styles = {
    default: {
      base: {
        background: isSelected ? colors.N700 : colors.N20A,
        color: isSelected ? 'white' : colors.N400
      },
      active: {
        background: isSelected ? colors.N700 : colors.B50,
        color: isSelected ? 'white' : colors.B400
      },
      hover: {
        background: isSelected ? colors.N700 : colors.N30A,
        color: isSelected ? 'white' : colors.N400
      }
    },
    warning: {
      base: {
        background: colors.Y100
      },
      active: {
        background: colors.Y200
      },
      hover: {
        background: colors.Y200
      }
    }
  };
  return styles[appearance];
}; // eslint-disable-next-line react/no-multi-comp


var Button = forwardRef(function (_ref3, ref) {
  var appearance = _ref3.appearance,
      hasIcon = _ref3.hasIcon,
      isSelected = _ref3.isSelected,
      props = _objectWithoutProperties(_ref3, ["appearance", "hasIcon", "isSelected"]);

  var dynamic = appearances({
    appearance: appearance,
    isSelected: isSelected
  });
  return jsx("button", _extends({
    ref: ref,
    css: _objectSpread({
      // alignItems: 'baseline',
      borderRadius: borderRadius(),
      borderWidth: 0,
      boxSizing: 'border-box',
      cursor: 'pointer',
      display: 'inline-flex',
      fontSize: 'inherit',
      fontStyle: 'normal',
      lineHeight: 1.3,
      margin: 0,
      maxWidth: '100%',
      outline: 0,
      padding: "".concat(gridSize(), "px ").concat(gridSize() * 1.5, "px"),
      paddingRight: hasIcon ? 36 : null,
      textAlign: 'center',
      textDecoration: 'none',
      transition: 'background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)',
      transitionDuration: '0.1s, 0.15s',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap'
    }, dynamic.base, {
      '&:hover': _objectSpread({
        transition: 'background 0s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)'
      }, dynamic.hover),
      '&:focus': {
        boxShadow: '0 0 0 2px rgba(38,132,255,0.6)',
        transitionDuration: '0s, 0.2s',
        '&::-moz-focus-inner': {
          border: 0,
          margin: 0,
          padding: 0
        }
      },
      '&:active': _objectSpread({
        transitionDuration: 0
      }, dynamic.active)
    })
  }, props));
});
Button.defaultProps = {
  appearance: 'default'
};

var ButtonWrapper = function ButtonWrapper(props) {
  return jsx("div", _extends({
    css: {
      position: 'relative'
    }
  }, props));
};