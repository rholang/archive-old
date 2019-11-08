"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Thankyou;

var _react = _interopRequireDefault(require("react"));

var _common = require("./common");

function Thankyou(_ref) {
  var messages = _ref.messages,
      canClose = _ref.canClose,
      canOptOut = _ref.canOptOut,
      onClose = _ref.onClose,
      onOptOut = _ref.onOptOut;
  return _react.default.createElement("div", null, _react.default.createElement(_common.Header, {
    title: messages.title,
    canClose: canClose,
    canOptOut: canOptOut,
    onClose: onClose,
    onOptOut: onOptOut
  }), _react.default.createElement(_common.Description, null, messages.description));
}