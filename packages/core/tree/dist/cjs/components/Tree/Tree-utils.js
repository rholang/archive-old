"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tree_1 = require("../../utils/tree");
var flat_tree_1 = require("../../utils/flat-tree");
/*
    Translates a drag&drop movement from an index based position to a relative (parent, index) position
*/
exports.calculateFinalDropPositions = function (tree, flattenedTree, dragState) {
    var source = dragState.source, destination = dragState.destination, combine = dragState.combine, horizontalLevel = dragState.horizontalLevel;
    var sourcePath = flat_tree_1.getSourcePath(flattenedTree, source.index);
    var sourcePosition = tree_1.getTreePosition(tree, sourcePath);
    if (combine) {
        return {
            sourcePosition: sourcePosition,
            destinationPosition: {
                parentId: combine.draggableId,
            },
        };
    }
    if (!destination) {
        return { sourcePosition: sourcePosition, destinationPosition: undefined };
    }
    var destinationPath = flat_tree_1.getDestinationPath(flattenedTree, source.index, destination.index, horizontalLevel);
    var destinationPosition = tslib_1.__assign({}, tree_1.getTreePosition(tree, destinationPath));
    return { sourcePosition: sourcePosition, destinationPosition: destinationPosition };
};
//# sourceMappingURL=Tree-utils.js.map