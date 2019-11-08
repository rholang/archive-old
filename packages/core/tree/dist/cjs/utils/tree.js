"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = require("./path");
/*
  Transforms tree structure into flat list of items for rendering purposes.
  We recursively go through all the elements and its children first on each level
 */
exports.flattenTree = function (tree, path) {
    if (path === void 0) { path = []; }
    return tree.items[tree.rootId]
        ? tree.items[tree.rootId].children.reduce(function (accum, itemId, index) {
            // iterating through all the children on the given level
            var item = tree.items[itemId];
            var currentPath = tslib_1.__spread(path, [index]);
            // we create a flattened item for the current item
            var currentItem = createFlattenedItem(item, currentPath);
            // we flatten its children
            var children = flattenChildren(tree, item, currentPath);
            // append to the accumulator
            return tslib_1.__spread(accum, [currentItem], children);
        }, [])
        : [];
};
/*
  Constructs a new FlattenedItem
 */
var createFlattenedItem = function (item, currentPath) {
    return {
        item: item,
        path: currentPath,
    };
};
/*
  Flatten the children of the given subtree
*/
var flattenChildren = function (tree, item, currentPath) {
    return item.isExpanded
        ? exports.flattenTree({ rootId: item.id, items: tree.items }, currentPath)
        : [];
};
/*
  Changes the tree data structure with minimal reference changes.
 */
exports.mutateTree = function (tree, itemId, mutation) {
    var _a;
    var itemToChange = tree.items[itemId];
    if (!itemToChange) {
        // Item not found
        return tree;
    }
    // Returning a clone of the tree structure and overwriting the field coming in mutation
    return {
        // rootId should not change
        rootId: tree.rootId,
        items: tslib_1.__assign(tslib_1.__assign({}, tree.items), (_a = {}, _a[itemId] = tslib_1.__assign(tslib_1.__assign({}, itemToChange), mutation), _a)),
    };
};
exports.getItem = function (tree, path) {
    var e_1, _a;
    var cursor = tree.items[tree.rootId];
    try {
        for (var path_2 = tslib_1.__values(path), path_2_1 = path_2.next(); !path_2_1.done; path_2_1 = path_2.next()) {
            var i = path_2_1.value;
            cursor = tree.items[cursor.children[i]];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (path_2_1 && !path_2_1.done && (_a = path_2.return)) _a.call(path_2);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return cursor;
};
exports.getParent = function (tree, path) {
    var parentPath = path_1.getParentPath(path);
    return exports.getItem(tree, parentPath);
};
exports.getTreePosition = function (tree, path) {
    var parent = exports.getParent(tree, path);
    var index = path_1.getIndexAmongSiblings(path);
    return {
        parentId: parent.id,
        index: index,
    };
};
var hasLoadedChildren = function (item) {
    return !!item.hasChildren && item.children.length > 0;
};
var isLeafItem = function (item) { return !item.hasChildren; };
var removeItemFromTree = function (tree, position) {
    var sourceParent = tree.items[position.parentId];
    var newSourceChildren = tslib_1.__spread(sourceParent.children);
    var itemRemoved = newSourceChildren.splice(position.index, 1)[0];
    var newTree = exports.mutateTree(tree, position.parentId, {
        children: newSourceChildren,
        hasChildren: newSourceChildren.length > 0,
        isExpanded: newSourceChildren.length > 0 && sourceParent.isExpanded,
    });
    return {
        tree: newTree,
        itemRemoved: itemRemoved,
    };
};
var addItemToTree = function (tree, position, item) {
    var destinationParent = tree.items[position.parentId];
    var newDestinationChildren = tslib_1.__spread(destinationParent.children);
    if (typeof position.index === 'undefined') {
        if (hasLoadedChildren(destinationParent) || isLeafItem(destinationParent)) {
            newDestinationChildren.push(item);
        }
    }
    else {
        newDestinationChildren.splice(position.index, 0, item);
    }
    return exports.mutateTree(tree, position.parentId, {
        children: newDestinationChildren,
        hasChildren: true,
    });
};
exports.moveItemOnTree = function (tree, from, to) {
    var _a = removeItemFromTree(tree, from), treeWithoutSource = _a.tree, itemRemoved = _a.itemRemoved;
    return addItemToTree(treeWithoutSource, to, itemRemoved);
};
//# sourceMappingURL=tree.js.map