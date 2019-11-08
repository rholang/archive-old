import React from 'react';
import AsyncSelect from '../AsyncSelect/View';
import { formatOptionLabel } from '../IssueSelect/View'; // do NOT assign directly; a new component must be created to avoid inheritence

var IssueAsyncSelectView = function IssueAsyncSelectView(props) {
  return React.createElement(AsyncSelect, props);
};

IssueAsyncSelectView.defaultProps = {
  formatOptionLabel: formatOptionLabel
};
export default IssueAsyncSelectView;