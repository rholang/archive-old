"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageContainerCSS = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _helpers = require("../../../common/helpers");

var pageContainerCSS = function pageContainerCSS(_ref) {
  var disableInteraction = _ref.disableInteraction,
      leftOffset = _ref.leftOffset,
      topOffset = _ref.topOffset;
  return (0, _objectSpread2.default)({
    flex: '1 1 auto',
    marginLeft: leftOffset,
    marginTop: topOffset,
    width: 0
  }, (0, _helpers.applyDisabledProperties)(!!disableInteraction));
};

exports.pageContainerCSS = pageContainerCSS;