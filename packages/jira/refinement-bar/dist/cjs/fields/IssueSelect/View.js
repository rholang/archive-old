"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.formatOptionLabel = void 0;

var _core = require("@emotion/core");

var _theme = require("@atlaskit/theme");

var _ = _interopRequireDefault(require("@atlaskit/icon-object/glyph/blog/16"));

var _2 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/branch/16"));

var _3 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/bug/16"));

var _4 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/calendar/16"));

var _5 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/changes/16"));

var _6 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/code/16"));

var _7 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/commit/16"));

var _8 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/epic/16"));

var _9 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/improvement/16"));

var _10 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/incident/16"));

var _11 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/issue/16"));

var _12 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/new-feature/16"));

var _13 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/page/16"));

var _14 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/problem/16"));

var _15 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/pull-request/16"));

var _16 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/question/16"));

var _17 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/story/16"));

var _18 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/subtask/16"));

var _19 = _interopRequireDefault(require("@atlaskit/icon-object/glyph/task/16"));

var _View = _interopRequireDefault(require("../Select/View"));

/** @jsx jsx */
// do NOT assign directly; a new component must be created to avoid inheritence
var IssueSelectView = function IssueSelectView(props) {
  return (0, _core.jsx)(_View.default, props);
};

var icons = {
  blog: _.default,
  branch: _2.default,
  bug: _3.default,
  calendar: _4.default,
  changes: _5.default,
  code: _6.default,
  commit: _7.default,
  epic: _8.default,
  improvement: _9.default,
  incident: _10.default,
  issue: _11.default,
  'new-feature': _12.default,
  page: _13.default,
  problem: _14.default,
  'pull-request': _15.default,
  question: _16.default,
  story: _17.default,
  subtask: _18.default,
  task: _19.default
};

var formatOptionLabel = function formatOptionLabel(data) {
  if (!data.type) {
    return data.label;
  }

  var Icon = icons[data.type];
  return (0, _core.jsx)("div", {
    css: {
      alignItems: 'center',
      display: 'flex'
    }
  }, (0, _core.jsx)(Icon, {
    label: "".concat(data.type, " icon")
  }), (0, _core.jsx)("div", {
    css: {
      marginLeft: (0, _theme.gridSize)()
    }
  }, data.label));
};

exports.formatOptionLabel = formatOptionLabel;
IssueSelectView.defaultProps = {
  formatOptionLabel: formatOptionLabel
};
IssueSelectView.displayName = 'IssueSelectView';
var _default = IssueSelectView;
exports.default = _default;