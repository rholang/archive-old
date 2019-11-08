"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var skeleton_1 = require("../PrimaryButton/skeleton");
var styles_1 = require("./styles");
exports.PrimaryItemsContainerSkeleton = function (_a) {
    var count = _a.count;
    return (core_1.jsx(react_1.Fragment, null, Array.from({ length: count }, function (_, index) { return (core_1.jsx(skeleton_1.PrimaryButtonSkeleton, { key: index, css: styles_1.primaryButtonSkeletonCSS })); })));
};
//# sourceMappingURL=skeleton.js.map