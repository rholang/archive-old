import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { withGlobalTheme, light, ThemeProvider } from '../../../theme';
import BaseGlobalNavigationSkeleton from './GlobalNavigationSkeleton';
var GlobalNavigationSkeletonWithGlobalTheme = withGlobalTheme(BaseGlobalNavigationSkeleton);

var GlobalNavigationSkeleton = function GlobalNavigationSkeleton(props) {
  return ___EmotionJSX(ThemeProvider, {
    theme: function theme(ancestorTheme) {
      return _objectSpread({
        mode: light
      }, ancestorTheme, {
        context: 'product'
      });
    }
  }, ___EmotionJSX(GlobalNavigationSkeletonWithGlobalTheme, props));
};

export default GlobalNavigationSkeleton;