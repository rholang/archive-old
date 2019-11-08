"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _theme = require("@atlaskit/theme");

var _evaluateInner = _interopRequireDefault(require("./utils/evaluate-inner"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  .ak-lozenge {\n    border-radius: ", ";\n    box-sizing: border-box;\n    display: inline-flex;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 1;\n    max-width: 200px;\n    overflow: hidden;\n    padding: 2px 4px 3px 4px;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    vertical-align: baseline;\n    white-space: nowrap;\n  }\n  .ak-lozenge__appearance-default {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-default-bold {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-inprogress {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-inprogress-bold {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-moved {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-moved-bold {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-new {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-new-bold {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-removed {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-removed-bold {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-success {\n    background-color: ", ";\n    color: ", ";\n  }\n  .ak-lozenge__appearance-success-bold {\n    background-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var lozengeBorderRadius = '3px';

var _default = (0, _evaluateInner.default)(_templateObject(), lozengeBorderRadius, _theme.colors.N40, _theme.colors.N500, _theme.colors.N500, _theme.colors.N0, _theme.colors.B50, _theme.colors.B500, _theme.colors.B400, _theme.colors.N0, _theme.colors.Y75, _theme.colors.N800, _theme.colors.Y500, _theme.colors.N800, _theme.colors.P50, _theme.colors.P500, _theme.colors.P400, _theme.colors.N0, _theme.colors.R50, _theme.colors.R500, _theme.colors.R400, _theme.colors.N0, _theme.colors.G50, _theme.colors.G500, _theme.colors.G400, _theme.colors.N0);

exports.default = _default;