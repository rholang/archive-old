"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = utilSharedStylesToThemeCodeshift;

var _gridSize = _interopRequireDefault(require("./transforms/gridSize"));

var _gridSizeUnitless = _interopRequireDefault(require("./transforms/gridSizeUnitless"));

var _color = _interopRequireDefault(require("./transforms/color"));

var _borderRadius = _interopRequireDefault(require("./transforms/borderRadius"));

var _typography = _interopRequireDefault(require("./transforms/typography"));

var _codeFont = _interopRequireDefault(require("./transforms/codeFont"));

var _fixRedundantRenames = _interopRequireDefault(require("./transforms/fixRedundantRenames"));

var _fontSize = _interopRequireDefault(require("./transforms/fontSize"));

var _fontFamily = _interopRequireDefault(require("./transforms/fontFamily"));

var _layers = _interopRequireDefault(require("./transforms/layers"));

// This function gets called by jscodeshift.
// It gets passed the file info and a reference to the jscodeshift API.
function utilSharedStylesToThemeCodeshift(fileInfo, api) {
  var j = api.jscodeshift;
  var root = j(fileInfo.source);
  var transforms = [_fontFamily.default, _gridSize.default, _gridSizeUnitless.default, _color.default, _borderRadius.default, _typography.default, _codeFont.default, _fontSize.default, _layers.default, _fixRedundantRenames.default];
  var transformed = root;
  transforms.forEach(function (transform) {
    transformed = transform(transformed, j);
  });
  return transformed.toSource({
    quote: 'double'
  });
}