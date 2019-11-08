"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _core = require("@emotion/core");

var _theme = require("@atlaskit/theme");

var _tooltip = _interopRequireDefault(require("@atlaskit/tooltip"));

var _common = require("./common");

/** @jsx jsx */
// $FlowFixMe
var FilterButton = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      field = _ref.field,
      isInvalid = _ref.isInvalid,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick,
      onClear = _ref.onClear;
  return onClear ? (0, _core.jsx)(ButtonWrapper, null, (0, _core.jsx)(Button, {
    appearance: isInvalid ? 'warning' : 'default',
    isSelected: isSelected,
    onClick: onClick,
    ref: ref,
    hasIcon: true
  }, children), (0, _core.jsx)(_tooltip.default, {
    content: "Clear filter",
    position: "top"
  }, (0, _core.jsx)(_common.ClearButton, {
    isSelected: isSelected && !isInvalid,
    onClick: onClear,
    label: "Clear ".concat(field.label, " filter")
  }))) : (0, _core.jsx)(Button, {
    isSelected: isSelected,
    onClick: onClick,
    ref: ref
  }, children);
}); // ==============================
// Styled Components
// ==============================

exports.FilterButton = FilterButton;

var appearances = function appearances(_ref2) {
  var appearance = _ref2.appearance,
      isSelected = _ref2.isSelected;
  var styles = {
    default: {
      base: {
        background: isSelected ? _theme.colors.N700 : _theme.colors.N20A,
        color: isSelected ? 'white' : _theme.colors.N400
      },
      active: {
        background: isSelected ? _theme.colors.N700 : _theme.colors.B50,
        color: isSelected ? 'white' : _theme.colors.B400
      },
      hover: {
        background: isSelected ? _theme.colors.N700 : _theme.colors.N30A,
        color: isSelected ? 'white' : _theme.colors.N400
      }
    },
    warning: {
      base: {
        background: _theme.colors.Y100
      },
      active: {
        background: _theme.colors.Y200
      },
      hover: {
        background: _theme.colors.Y200
      }
    }
  };
  return styles[appearance];
}; // eslint-disable-next-line react/no-multi-comp


var Button = (0, _react.forwardRef)(function (_ref3, ref) {
  var appearance = _ref3.appearance,
      hasIcon = _ref3.hasIcon,
      isSelected = _ref3.isSelected,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["appearance", "hasIcon", "isSelected"]);
  var dynamic = appearances({
    appearance: appearance,
    isSelected: isSelected
  });
  return (0, _core.jsx)("button", (0, _extends2.default)({
    ref: ref,
    css: (0, _objectSpread2.default)({
      // alignItems: 'baseline',
      borderRadius: (0, _theme.borderRadius)(),
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
      padding: "".concat((0, _theme.gridSize)(), "px ").concat((0, _theme.gridSize)() * 1.5, "px"),
      paddingRight: hasIcon ? 36 : null,
      textAlign: 'center',
      textDecoration: 'none',
      transition: 'background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)',
      transitionDuration: '0.1s, 0.15s',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap'
    }, dynamic.base, {
      '&:hover': (0, _objectSpread2.default)({
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
      '&:active': (0, _objectSpread2.default)({
        transitionDuration: 0
      }, dynamic.active)
    })
  }, props));
});
Button.defaultProps = {
  appearance: 'default'
};

var ButtonWrapper = function ButtonWrapper(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css: {
      position: 'relative'
    }
  }, props));
};