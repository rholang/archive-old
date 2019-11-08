"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/*
  Checking if two given path are equal
 */
exports.isSamePath = function (a, b) {
    if (a === b) {
        return true;
    }
    return a.length === b.length && a.every(function (v, i) { return v === b[i]; });
};
/*
  Checks if the two paths have the same parent
 */
exports.hasSameParent = function (a, b) {
    return exports.isSamePath(exports.getParentPath(a), exports.getParentPath(b));
};
/*
  Calculates the parent path for a path
*/
exports.getParentPath = function (child) {
    return child.slice(0, child.length - 1);
};
/*
  It checks if the item is on top of a sub tree based on the two neighboring items, which are above or below the item.
*/
exports.isTopOfSubtree = function (belowPath, abovePath) {
    return !abovePath || isParentOf(abovePath, belowPath);
};
var isParentOf = function (parent, child) {
    return exports.isSamePath(parent, exports.getParentPath(child));
};
exports.getIndexAmongSiblings = function (path) {
    var lastIndex = path[path.length - 1];
    return lastIndex;
};
exports.getPathOnLevel = function (path, level) {
    return path.slice(0, level);
};
exports.moveAfterPath = function (after, from) {
    var newPath = tslib_1.__spread(after);
    var movedDownOnTheSameLevel = exports.isLowerSibling(newPath, from);
    if (!movedDownOnTheSameLevel) {
        // not moved within the same subtree
        newPath[newPath.length - 1] += 1;
    }
    return newPath;
};
exports.isLowerSibling = function (a, other) {
    return exports.hasSameParent(a, other) &&
        exports.getIndexAmongSiblings(a) > exports.getIndexAmongSiblings(other);
};
//# sourceMappingURL=path.js.map