"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.IconWrapper = exports.Label = exports.HiddenInput = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _components = require("@atlaskit/theme/components");

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

var HiddenInput = _styledComponents.default.input.withConfig({
  displayName: "Radio__HiddenInput",
  componentId: "sc-8cbspg-0"
})(["\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1;\n  opacity: 0;\n"]);

exports.HiddenInput = HiddenInput;
var disabledColor = (0, _components.themed)({
  light: colors.N80,
  dark: colors.N80
});

var Label = _styledComponents.default.label.withConfig({
  displayName: "Radio__Label",
  componentId: "sc-8cbspg-1"
})(["\n  display: 'block';\n  color: ", ";\n  ", ";\n"], function (props // $FlowFixMe - theme is not found in props
) {
  return props.isDisabled ? disabledColor(props) : colors.text(props);
}, function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled ? (0, _styledComponents.css)(["\n          cursor: not-allowed;\n        "]) : '';
});

exports.Label = Label;
var borderColor = (0, _components.themed)({
  light: colors.N40,
  dark: colors.DN80
});
var focusBorder = (0, _styledComponents.css)(["\n  stroke: ", ";\n  stroke-width: 2px;\n"], (0, _components.themed)({
  light: colors.B100,
  dark: colors.B75
}));
var invalidBorder = (0, _styledComponents.css)(["\n  stroke: ", ";\n  stroke-width: 2px;\n"], (0, _components.themed)({
  light: colors.R300,
  dark: colors.R300
}));
var activeBorder = (0, _styledComponents.css)(["\n  stroke: currentColor;\n  stroke-width: 2px;\n"]);
var selectedBorder = (0, _styledComponents.css)(["\n  stroke: currentColor;\n  stroke-width: 2px;\n"]);
var border = (0, _styledComponents.css)(["\n  stroke: ", ";\n  stroke-width: 2px;\n"], function (_ref2) {
  var isHovered = _ref2.isHovered,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["isHovered"]);
  return isHovered ? (0, _components.themed)({
    light: colors.N40,
    dark: colors.DN200
  })(rest) : borderColor(rest);
});

var getBorderColor = function getBorderColor(props) {
  if (props.isDisabled) return '';
  if (props.isFocused) return focusBorder;
  if (props.isActive) return activeBorder;
  if (props.isInvalid) return invalidBorder;
  if (props.isSelected) return selectedBorder;
  return border;
};

var getDotColor = function getDotColor(props) {
  var isSelected = props.isSelected,
      isDisabled = props.isDisabled,
      isActive = props.isActive,
      rest = (0, _objectWithoutProperties2.default)(props, ["isSelected", "isDisabled", "isActive"]);
  var color = (0, _components.themed)({
    light: colors.N10,
    dark: colors.DN10
  });

  if (isDisabled && isSelected) {
    color = (0, _components.themed)({
      light: colors.N70,
      dark: colors.DN90
    });
  } else if (isActive && isSelected && !isDisabled) {
    color = (0, _components.themed)({
      light: colors.B400,
      dark: colors.DN10
    });
  } else if (!isSelected) {
    color = (0, _components.themed)({
      light: 'transparent',
      dark: 'transparent'
    });
  }

  return color(rest);
};

var getCircleColor = function getCircleColor(props) {
  var isSelected = props.isSelected,
      isDisabled = props.isDisabled,
      isActive = props.isActive,
      isHovered = props.isHovered,
      rest = (0, _objectWithoutProperties2.default)(props, ["isSelected", "isDisabled", "isActive", "isHovered"]); // set the default

  var color = (0, _components.themed)({
    light: colors.N10,
    dark: colors.DN10
  });

  if (isDisabled) {
    color = (0, _components.themed)({
      light: colors.N20,
      dark: colors.DN10
    });
  } else if (isActive) {
    color = (0, _components.themed)({
      light: colors.B50,
      dark: colors.B200
    });
  } else if (isHovered && isSelected) {
    color = (0, _components.themed)({
      light: colors.B300,
      dark: colors.B75
    });
  } else if (isHovered) {
    color = (0, _components.themed)({
      light: colors.N30,
      dark: colors.DN30
    });
  } else if (isSelected) {
    color = (0, _components.themed)({
      light: colors.B400,
      dark: colors.B400
    });
  }

  return color(rest);
};

var IconWrapper = _styledComponents.default.span.withConfig({
  displayName: "Radio__IconWrapper",
  componentId: "sc-8cbspg-2"
})(["\n  line-height: 0;\n  flex-shrink: 0;\n  color: ", ";\n  fill: ", ";\n  transition: all 0.2s ease-in-out;\n\n  /* This is adding a property to the inner svg, to add a border to the radio */\n  & circle:first-of-type {\n    transition: stroke 0.2s ease-in-out;\n    ", ";\n  }\n"], getCircleColor, getDotColor, getBorderColor);

exports.IconWrapper = IconWrapper;

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Radio__Wrapper",
  componentId: "sc-8cbspg-3"
})(["\n  display: flex;\n  align-items: center;\n"]);

exports.Wrapper = Wrapper;