"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spinnerWrapper = exports.externalContent = void 0;

var _constants = require("@atlaskit/theme/constants");

var externalContent = function externalContent(hasIframeLoaded) {
  return {
    visibility: hasIframeLoaded ? 'visible' : 'hidden',
    height: "calc(100% - ".concat(3 * (0, _constants.gridSize)(), "px)"),
    width: '100%',
    border: 0,
    flex: '1 1 auto'
  };
};

exports.externalContent = externalContent;
var spinnerWrapper = {
  display: 'flex',
  'justify-content': 'center',
  position: 'relative',
  top: '11.25rem'
};
exports.spinnerWrapper = spinnerWrapper;