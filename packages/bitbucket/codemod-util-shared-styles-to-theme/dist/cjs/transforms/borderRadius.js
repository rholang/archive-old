"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = borderRadius;

var _utils = require("../utils");

function borderRadius(root, j) {
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

  var borderRadiusImportSpecifier = sharedStylesImport.find(j.ImportSpecifier, {
    imported: {
      name: 'akBorderRadius'
    }
  });

  if (!borderRadiusImportSpecifier.size()) {
    return root;
  } // Find what we are calling akGridSizeUnitless locally


  var localName = borderRadiusImportSpecifier.get(0).node.local.name; // Convert uses of the old akBorderRadius to template `${akBorderRadius()}px`

  root.find(j.Identifier, {
    name: localName
  }).replaceWith(function () {
    return j.templateLiteral([j.templateElement({
      cooked: '',
      raw: ''
    }, false), j.templateElement({
      cooked: 'px',
      raw: 'px'
    }, true)], [j.callExpression(j.identifier(localName), [])]);
  });
  (0, _utils.addNamedImport)(root, j, '@atlaskit/theme', 'borderRadius', localName, sharedStylesImport);
  (0, _utils.removeNamedImport)(root, j, '@atlaskit/util-shared-styles', 'akBorderRadius', borderRadiusImportSpecifier);
  return root;
}