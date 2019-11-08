"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageWrapper = exports.NPSWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var NPSWrapper = _styledComponents.default.div.withConfig({
  displayName: "nps__NPSWrapper",
  componentId: "v3g5lc-0"
})(["\n  background-color: white;\n  width: 550px;\n  border-radius: 4px;\n"]);

exports.NPSWrapper = NPSWrapper;

var PageWrapper = _styledComponents.default.div.withConfig({
  displayName: "nps__PageWrapper",
  componentId: "v3g5lc-1"
})(["\n  padding: 16px;\n"]);

exports.PageWrapper = PageWrapper;