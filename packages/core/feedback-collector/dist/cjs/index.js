"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FeedbackForm", {
  enumerable: true,
  get: function get() {
    return _FeedbackForm.default;
  }
});
Object.defineProperty(exports, "FeedbackFlag", {
  enumerable: true,
  get: function get() {
    return _FeedbackFlag.default;
  }
});
exports.default = void 0;

var _FeedbackCollector = _interopRequireDefault(require("./components/FeedbackCollector"));

var _FeedbackForm = _interopRequireDefault(require("./components/FeedbackForm"));

var _FeedbackFlag = _interopRequireDefault(require("./components/FeedbackFlag"));

var _default = _FeedbackCollector.default;
exports.default = _default;