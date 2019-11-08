/** @jsx jsx */
import { jsx } from '@emotion/core';
import Avatar from '@atlaskit/avatar';
import { gridSize } from '@atlaskit/theme';
import Select, { CLEAR_DATA } from '../Select/View'; // do NOT assign directly; a new component must be created to avoid inheritence

var AvatarSelectView = function AvatarSelectView(props) {
  return jsx(Select, props);
};

export var formatOptionLabel = function formatOptionLabel(data) {
  return jsx("div", {
    css: {
      alignItems: 'center',
      display: 'flex'
    }
  }, data === CLEAR_DATA ? null : jsx(Avatar, {
    src: data.avatar,
    size: "xsmall"
  }), jsx("div", {
    css: {
      marginLeft: gridSize()
    }
  }, data.label));
};
AvatarSelectView.defaultProps = {
  formatOptionLabel: formatOptionLabel
};
AvatarSelectView.displayName = 'AvatarSelectView';
export default AvatarSelectView;