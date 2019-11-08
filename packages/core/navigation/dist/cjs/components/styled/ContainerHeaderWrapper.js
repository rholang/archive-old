"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    /* centering the icon */\n    display: flex;\n    flex-basis: auto;\n    flex-direction: column;\n    justify-content: center;\n    min-height: 0;\n    padding: 0 ", "px 0 ", "px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var padding = {
  top: _sharedVariables.gridSize,
  right: _sharedVariables.gridSize * 2,
  bottom: _sharedVariables.gridSize,
  left: _sharedVariables.gridSize * 2
};

var minHeight = function minHeight(props) {
  if (props.isInDrawer) {
    // the header content isn't rendered in a full-width Drawer
    return 0;
  } // the height of the container icon and the margin below it


  return "".concat(padding.bottom + padding.top + _sharedVariables.globalItemSizes.medium + _sharedVariables.containerTitleBottomMargin, "px");
};

var flexBasis = function flexBasis(props) {
  if (props.isFullWidth) {
    return 0;
  }

  if (props.isInDrawer) {
    return "\n      ".concat(props.iconOffset - _sharedVariables.layout.padding.top, "px\n    ");
  }

  return 'auto';
};

var ContainerHeaderWrapper = _styledComponents.default.div.withConfig({
  displayName: "ContainerHeaderWrapper",
  componentId: "sc-12gbk2d-0"
})(["\n  flex-basis: ", ";\n  flex-shrink: 0;\n  min-height: ", ";\n  overflow: hidden;\n  padding: 0 ", "px 0 ", "px;\n  transition: flex-basis ", ",\n    padding ", ";\n\n  ", " > *:first-child {\n    margin-bottom: ", "px;\n  }\n"], flexBasis, minHeight, padding.right, padding.left, _sharedVariables.drawerContainerHeaderAnimationSpeed, _sharedVariables.drawerContainerHeaderAnimationSpeed, (0, _util.whenCollapsed)(_templateObject(), _sharedVariables.gridSize, _sharedVariables.gridSize), _sharedVariables.containerTitleBottomMargin);

ContainerHeaderWrapper.displayName = 'ContainerHeaderWrapper';
var _default = ContainerHeaderWrapper;
exports.default = _default;