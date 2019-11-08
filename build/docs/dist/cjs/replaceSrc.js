"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replaceSrc;

var _codesandboxer = require("codesandboxer");

var cssResetRegexString = /((?:import|export)\s*['"\`])(..\/src\/index.less)(['"\`]\s*)/;
var srcEntryPointRegexString = /((?:import|export)[^'"\`]*['"\`])(..\/src\/)([^/]*['"\`]\s*)/;

function replaceSrc(content, name) {
  var replacedCode = content;

  if (name === '@atlaskit/css-reset') {
    replacedCode = replacedCode.replace(cssResetRegexString, "$1".concat(name, "$3"));
  }

  if (name) {
    // Replace ../src/<entry-point> with ${name}/<entry-point>
    replacedCode = replacedCode.replace(srcEntryPointRegexString, "$1".concat(name, "/$3"));
    replacedCode = (0, _codesandboxer.replaceImports)(replacedCode, [['../src', name]]);
  }

  return replacedCode;
}