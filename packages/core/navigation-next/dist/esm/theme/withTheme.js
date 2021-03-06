import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { withTheme as WithEmotionTheme } from 'emotion-theming';
import { light } from './modes';

var withTheme = function withTheme(defaultTheme) {
  return function (WrappedComponent) {
    // $FlowFixMe - Flow types for WithEmotionTheme only want a component with a single 'theme' prop
    var WithTheme = WithEmotionTheme(function (props) {
      var ctxTheme = props.theme,
          rest = _objectWithoutProperties(props, ["theme"]);

      var theme = Object.keys(ctxTheme).length > 0 ? ctxTheme : defaultTheme;
      return ___EmotionJSX(WrappedComponent, _extends({
        theme: theme
      }, rest));
    });
    WithTheme.displayName = "WithTheme(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
    return WithTheme;
  };
};

var defaultContentTheme = {
  mode: light,
  context: 'container'
};
var defaultGlobalTheme = {
  mode: light
};
export var withContentTheme = function withContentTheme(WrappedComponent) {
  return withTheme(defaultContentTheme)(WrappedComponent);
};
export var withGlobalTheme = function withGlobalTheme(WrappedComponent) {
  return withTheme(defaultGlobalTheme)(WrappedComponent);
};
export default withTheme;