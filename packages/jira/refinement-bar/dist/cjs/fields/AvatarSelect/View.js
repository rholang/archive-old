"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.formatOptionLabel = void 0;

var _core = require("@emotion/core");

var _avatar = _interopRequireDefault(require("@atlaskit/avatar"));

var _theme = require("@atlaskit/theme");

var _View = _interopRequireWildcard(require("../Select/View"));

/** @jsx jsx */
// do NOT assign directly; a new component must be created to avoid inheritence
var AvatarSelectView = function AvatarSelectView(props) {
  return (0, _core.jsx)(_View.default, props);
};

var formatOptionLabel = function formatOptionLabel(data) {
  return (0, _core.jsx)("div", {
    css: {
      alignItems: 'center',
      display: 'flex'
    }
  }, data === _View.CLEAR_DATA ? null : (0, _core.jsx)(_avatar.default, {
    src: data.avatar,
    size: "xsmall"
  }), (0, _core.jsx)("div", {
    css: {
      marginLeft: (0, _theme.gridSize)()
    }
  }, data.label));
};

exports.formatOptionLabel = formatOptionLabel;
AvatarSelectView.defaultProps = {
  formatOptionLabel: formatOptionLabel
};
AvatarSelectView.displayName = 'AvatarSelectView';
var _default = AvatarSelectView;
exports.default = _default;