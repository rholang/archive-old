"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withGlobalTheme = exports.withContentTheme = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _emotionTheming = require("emotion-theming");

var _modes = require("./modes");

var withTheme = function withTheme(defaultTheme) {
  return function (WrappedComponent) {
    // $FlowFixMe - Flow types for WithEmotionTheme only want a component with a single 'theme' prop
    var WithTheme = (0, _emotionTheming.withTheme)(function (props) {
      var ctxTheme = props.theme,
          rest = (0, _objectWithoutProperties2.default)(props, ["theme"]);
      var theme = Object.keys(ctxTheme).length > 0 ? ctxTheme : defaultTheme;
      return (0, _core.jsx)(WrappedComponent, (0, _extends2.default)({
        theme: theme
      }, rest));
    });
    WithTheme.displayName = "WithTheme(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
    return WithTheme;
  };
};

var defaultContentTheme = {
  mode: _modes.light,
  context: 'container'
};
var defaultGlobalTheme = {
  mode: _modes.light
};

var withContentTheme = function withContentTheme(WrappedComponent) {
  return withTheme(defaultContentTheme)(WrappedComponent);
};

exports.withContentTheme = withContentTheme;

var withGlobalTheme = function withGlobalTheme(WrappedComponent) {
  return withTheme(defaultGlobalTheme)(WrappedComponent);
};

exports.withGlobalTheme = withGlobalTheme;
var _default = withTheme;
exports.default = _default;