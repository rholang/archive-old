"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = code;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _stringRaw = _interopRequireDefault(require("string-raw"));

var _code = require("@atlaskit/code");

/*
 * Tag function to render a code block, e.g. code`console.log("hello world")`
 * Template expressions aren't yet supported, and likely never will be.
 */
function code( // Tagged Template Literal support is still WIP for flow: https://github.com/facebook/flow/issues/2616
sources) {
  for (var _len = arguments.length, substitutions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    substitutions[_key - 1] = arguments[_key];
  }

  var source = (0, _stringRaw.default)(sources, substitutions);
  source = source.replace(/^(\s*\n)+/g, ''); // Remove leading newlines

  source = source.replace(/(\n\s*)+$/g, ''); // Remove trailing newlines

  return _react.default.createElement(CodeWrapper, null, _react.default.createElement(_code.AkCodeBlock, {
    language: "javascript",
    text: source
  }));
}

var CodeWrapper = _styledComponents.default.div.withConfig({
  displayName: "code__CodeWrapper",
  componentId: "sc-3zahnc-0"
})(["\n  display: block;\n  margin-top: 8px;\n  overflow: auto;\n  max-width: calc(100vw - 4rem);\n"]);