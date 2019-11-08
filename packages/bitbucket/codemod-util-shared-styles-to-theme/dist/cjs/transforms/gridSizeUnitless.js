"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gridSizeUnitless;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

function gridSizeUnitless(root, j) {
  // Check if we import shared styles
  var sharedStylesCollections = (0, _utils.getSharedStyles)(root, j);

  if (!sharedStylesCollections) {
    return root;
  }

  var _sharedStylesCollecti = (0, _slicedToArray2.default)(sharedStylesCollections, 3),
      sharedStylesImport = _sharedStylesCollecti[0],
      gridSizeImportSpecifier = _sharedStylesCollecti[1],
      oldLocalName = _sharedStylesCollecti[2]; // There is a chance that gridSize is already imported from akTheme under
  // a different name, so we reassign that here.


  var localName = (0, _utils.addNamedImport)(root, j, '@atlaskit/theme', 'gridSize', oldLocalName, sharedStylesImport);
  root.find(j.Identifier, {
    name: oldLocalName
  }).filter(function (node) {
    return j(node).closest(j.ImportDeclaration).size() === 0;
  }).filter(function (node) {
    return j(node).closest(j.CallExpression).size() === 0;
  }).replaceWith(function () {
    return j.callExpression(j.identifier(localName), []);
  });
  (0, _utils.removeNamedImport)(root, j, '@atlaskit/util-shared-styles', 'akGridSizeUnitless', gridSizeImportSpecifier);
  return root;
}