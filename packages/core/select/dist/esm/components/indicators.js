import _extends from "@babel/runtime/helpers/extends";
import { jsx as ___EmotionJSX } from "@emotion/core";

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { components } from 'react-select';
import Spinner from '@atlaskit/spinner';
import SelectClearIcon from '@atlaskit/icon/glyph/select-clear';
import DownIcon from '@atlaskit/icon/glyph/hipchat/chevron-down'; // indicators

export var ClearIndicator = function ClearIndicator(props) {
  return jsx(components.ClearIndicator, props, jsx(SelectClearIcon, {
    size: "small",
    primaryColor: "inherit"
  }));
};
export var DropdownIndicator = function DropdownIndicator(props) {
  return jsx(components.DropdownIndicator, props, jsx(DownIcon, null));
};
export var LoadingIndicator = function LoadingIndicator(props) {
  return jsx("div", _extends({
    css: props.getStyles('loadingIndicator', props)
  }, props.innerProps), jsx(Spinner, {
    size: "small"
  }));
};