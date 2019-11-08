"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _flag = require("@atlaskit/flag");

var _colors = require("@atlaskit/theme/colors");

var _checkCircle = _interopRequireDefault(require("@atlaskit/icon/glyph/check-circle"));

var FeedbackFlag = function FeedbackFlag(props) {
  return _react.default.createElement(_flag.AutoDismissFlag, (0, _extends2.default)({
    icon: _react.default.createElement(_checkCircle.default, {
      primaryColor: _colors.G300,
      label: "Success"
    }),
    id: "feedbackSent",
    description: "Your valuable feedback helps us continually improve our products.",
    title: "Thanks!"
  }, props));
};

var _default = FeedbackFlag;
exports.default = _default;