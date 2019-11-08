import { __read, __spread } from "tslib";
/*
  Checking if two given path are equal
 */
export var isSamePath = function (a, b) {
    if (a === b) {
        return true;
    }
    return a.length === b.length && a.every(function (v, i) { return v === b[i]; });
};
/*
  Checks if the two paths have the same parent
 */
export var hasSameParent = function (a, b) {
    return isSamePath(getParentPath(a), getParentPath(b));
};
/*
  Calculates the parent path for a path
*/
export var getParentPath = function (child) {
    return child.slice(0, child.length - 1);
};
/*
  It checks if the item is on top of a sub tree based on the two neighboring items, which are above or below the item.
*/
export var isTopOfSubtree = function (belowPath, abovePath) {
    return !abovePath || isParentOf(abovePath, belowPath);
};
var isParentOf = function (parent, child) {
    return isSamePath(parent, getParentPath(child));
};
export var getIndexAmongSiblings = function (path) {
    var lastIndex = path[path.length - 1];
    return lastIndex;
};
export var getPathOnLevel = function (path, level) {
    return path.slice(0, level);
};
export var moveAfterPath = function (after, from) {
    var newPath = __spread(after);
    var movedDownOnTheSameLevel = isLowerSibling(newPath, from);
    if (!movedDownOnTheSameLevel) {
        // not moved within the same subtree
        newPath[newPath.length - 1] += 1;
    }
    return newPath;
};
export var isLowerSibling = function (a, other) {
    return hasSameParent(a, other) &&
        getIndexAmongSiblings(a) > getIndexAmongSiblings(other);
};
//# sourceMappingURL=path.js.map