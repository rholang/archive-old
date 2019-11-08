"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fontSizeTransformation;

var _utils = require("../utils");

function fontSizeTransformation(root, j) {
  // Check if we import shared styles
  var sharedStylesImport = root.find(j.ImportDeclaration, {
    source: {
      type: 'Literal',
      value: '@atlaskit/util-shared-styles'
    }
  });

  if (!sharedStylesImport.size()) {
    return root;
  }

  var codeFontImportSpecifier = sharedStylesImport.find(j.ImportSpecifier, {
    imported: {
      name: 'akFontSizeDefault'
    }
  });

  if (!codeFontImportSpecifier.size()) {
    return root;
  } // Find what we are calling akGridSizeUnitless locally


  var localName = codeFontImportSpecifier.get(0).node.local.name; // Convert uses of the old akCodeFontFamily to template `${akCodeFontFamily()}px`

  root.find(j.Identifier, {
    name: localName
  }).replaceWith(function () {
    return j.binaryExpression('+', j.callExpression(j.identifier(localName), []), j.literal('px'));
  });
  (0, _utils.addNamedImport)(root, j, '@atlaskit/theme', 'fontSize', localName, sharedStylesImport);
  (0, _utils.removeNamedImport)(root, j, '@atlaskit/util-shared-styles', 'akFontSizeDefault', codeFontImportSpecifier);
  return root;
}