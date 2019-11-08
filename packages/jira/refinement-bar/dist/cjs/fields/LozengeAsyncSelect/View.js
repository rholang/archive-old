"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.formatOptionLabel = void 0;

var _core = require("@emotion/core");

var _lozenge = _interopRequireDefault(require("@atlaskit/lozenge"));

var _theme = require("@atlaskit/theme");

var _View = _interopRequireDefault(require("../AsyncSelect/View"));

var _View2 = require("../Select/View");

/** @jsx jsx */
// do NOT assign directly; a new component must be created to avoid inheritence
var LozengeSelectView = function LozengeSelectView(props) {
  return (0, _core.jsx)(_View.default, props);
};

var formatOptionLabel = function formatOptionLabel(data) {
  return (0, _core.jsx)("div", {
    css: {
      alignItems: 'center',
      display: 'flex'
    }
  }, (0, _core.jsx)("div", {
    css: {
      marginLeft: (0, _theme.gridSize)()
    }
  }, data === _View2.CLEAR_DATA ? null : (0, _core.jsx)("div", {
    css: {
      display: 'flex'
    }
  }, (0, _core.jsx)(_lozenge.default, {
    appearance: data.appearance,
    isBold: data.isBold,
    maxWidth: data.maxWidth,
    theme: data.theme
  }, data.label))));
};

exports.formatOptionLabel = formatOptionLabel;
LozengeSelectView.defaultProps = {
  formatOptionLabel: formatOptionLabel
};
var _default = LozengeSelectView;
exports.default = _default;