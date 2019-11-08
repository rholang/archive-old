"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _evaluateInner = _interopRequireDefault(require("./utils/evaluate-inner"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  /* global rule that sets the default fill that will cascade into 2 colour icons */\n  .ak-icon {\n    fill: white;\n    height: 24px;\n    width: 24px;\n  }\n  .ak-icon__size-small {\n    height: 16px;\n    width: 16px;\n  }\n  .ak-icon__size-medium {\n    height: 24px;\n    width: 24px;\n    max-width: 24px;\n  }\n  .ak-icon__size-large {\n    height: 32px;\n    width: 32px;\n    max-width: 32px;\n  }\n  .ak-icon__size-xlarge {\n    height: 48px;\n    width: 48px;\n    max-width: 48px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _evaluateInner.default)(_templateObject());

exports.default = _default;