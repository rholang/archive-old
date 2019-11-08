import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { components } from 'react-select';
import SelectClearIcon from '@atlaskit/icon/glyph/select-clear';
export { ClearIndicator, DropdownIndicator, LoadingIndicator } from './indicators';
export var MultiValueRemove = function MultiValueRemove(props) {
  return ___EmotionJSX(components.MultiValueRemove, props, ___EmotionJSX(SelectClearIcon, {
    size: "small",
    primaryColor: "transparent",
    secondaryColor: "inherit"
  }));
};
export var IndicatorSeparator = null;