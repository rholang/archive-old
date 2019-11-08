import React from 'react';
import AsyncSelect from '../AsyncSelect/View';
import { formatOptionLabel } from '../AvatarSelect/View'; // do NOT assign directly; a new component must be created to avoid inheritence

var AvatarAsyncSelectView = function AvatarAsyncSelectView(props) {
  return React.createElement(AsyncSelect, props);
};

AvatarAsyncSelectView.defaultProps = {
  formatOptionLabel: formatOptionLabel
};
export default AvatarAsyncSelectView;