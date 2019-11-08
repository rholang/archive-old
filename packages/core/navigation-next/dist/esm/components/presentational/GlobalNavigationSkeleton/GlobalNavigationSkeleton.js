import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import GlobalNavigationSkeletonItem from './GlobalNavigationSkeletonItem';
import { Container, PrimaryItemsList, SecondaryItemsList, FirstPrimaryItemWrapper } from './primitives';

var GlobalNavigationSkeleton = function GlobalNavigationSkeleton(props) {
  var dataset = props.dataset,
      theme = props.theme,
      rest = _objectWithoutProperties(props, ["dataset", "theme"]);

  var wrapperStyles = theme.mode.globalNav();
  return ___EmotionJSX(Container, _extends({
    styles: wrapperStyles
  }, dataset, rest), ___EmotionJSX(PrimaryItemsList, null, ___EmotionJSX(FirstPrimaryItemWrapper, null, ___EmotionJSX(GlobalNavigationSkeletonItem, null)), ___EmotionJSX(GlobalNavigationSkeletonItem, null), ___EmotionJSX(GlobalNavigationSkeletonItem, null), ___EmotionJSX(GlobalNavigationSkeletonItem, null)), ___EmotionJSX(SecondaryItemsList, null, ___EmotionJSX(GlobalNavigationSkeletonItem, null), ___EmotionJSX(GlobalNavigationSkeletonItem, null), ___EmotionJSX(GlobalNavigationSkeletonItem, null), ___EmotionJSX(GlobalNavigationSkeletonItem, null)));
};

GlobalNavigationSkeleton.defaultProps = {
  dataset: {
    'data-testid': 'GlobalNavigationSkeleton'
  }
};
export default GlobalNavigationSkeleton;