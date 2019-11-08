/** @jsx jsx */
import { jsx } from '@emotion/core';
import Lozenge from '@atlaskit/lozenge';
import { gridSize } from '@atlaskit/theme';
import AsyncSelect from '../AsyncSelect/View';
import { CLEAR_DATA } from '../Select/View'; // do NOT assign directly; a new component must be created to avoid inheritence

var LozengeSelectView = function LozengeSelectView(props) {
  return jsx(AsyncSelect, props);
};

export var formatOptionLabel = function formatOptionLabel(data) {
  return jsx("div", {
    css: {
      alignItems: 'center',
      display: 'flex'
    }
  }, jsx("div", {
    css: {
      marginLeft: gridSize()
    }
  }, data === CLEAR_DATA ? null : jsx("div", {
    css: {
      display: 'flex'
    }
  }, jsx(Lozenge, {
    appearance: data.appearance,
    isBold: data.isBold,
    maxWidth: data.maxWidth,
    theme: data.theme
  }, data.label))));
};
LozengeSelectView.defaultProps = {
  formatOptionLabel: formatOptionLabel
};
export default LozengeSelectView;