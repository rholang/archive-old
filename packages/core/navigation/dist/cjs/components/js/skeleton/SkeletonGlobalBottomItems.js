"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _icon = require("@atlaskit/icon");

var _SkeletonNavigationItems = _interopRequireDefault(require("./styled/SkeletonNavigationItems"));

var _SkeletonGlobalIconOuter = _interopRequireDefault(require("./styled/SkeletonGlobalIconOuter"));

var SkeletonGlobalBottomItems = function SkeletonGlobalBottomItems() {
  return _react.default.createElement(_SkeletonNavigationItems.default, null, _react.default.createElement(_SkeletonGlobalIconOuter.default, null, _react.default.createElement(_icon.Skeleton, {
    size: "medium"
  })), _react.default.createElement(_SkeletonGlobalIconOuter.default, null, _react.default.createElement(_icon.Skeleton, {
    size: "large",
    weight: "strong"
  })));
};

SkeletonGlobalBottomItems.displayName = 'SkeletonGlobalBottomItems';
var _default = SkeletonGlobalBottomItems;
exports.default = _default;