"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _icon = require("@atlaskit/icon");

var _SkeletonNavigationItems = _interopRequireDefault(require("./styled/SkeletonNavigationItems"));

var _SkeletonGlobalPrimaryIconOuter = _interopRequireDefault(require("./styled/SkeletonGlobalPrimaryIconOuter"));

var _SkeletonGlobalIconOuter = _interopRequireDefault(require("./styled/SkeletonGlobalIconOuter"));

var _SkeletonGlobalTopItemsInner = _interopRequireDefault(require("./styled/SkeletonGlobalTopItemsInner"));

var SkeletonGlobalTopItems = function SkeletonGlobalTopItems() {
  return _react.default.createElement(_SkeletonGlobalTopItemsInner.default, null, _react.default.createElement(_SkeletonNavigationItems.default, null, _react.default.createElement(_SkeletonGlobalPrimaryIconOuter.default, null, _react.default.createElement(_icon.Skeleton, {
    size: "xlarge",
    weight: "strong"
  })), _react.default.createElement(_SkeletonGlobalIconOuter.default, null, _react.default.createElement(_icon.Skeleton, {
    size: "large"
  })), _react.default.createElement(_SkeletonGlobalIconOuter.default, null, _react.default.createElement(_icon.Skeleton, {
    size: "large"
  }))));
};

SkeletonGlobalTopItems.displayName = 'SkeletonGlobalTopItems';
var _default = SkeletonGlobalTopItems;
exports.default = _default;