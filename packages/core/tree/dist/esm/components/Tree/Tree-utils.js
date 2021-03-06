import { __assign } from "tslib";
import { getTreePosition } from '../../utils/tree';
import { getDestinationPath, getSourcePath } from '../../utils/flat-tree';
/*
    Translates a drag&drop movement from an index based position to a relative (parent, index) position
*/
export var calculateFinalDropPositions = function (tree, flattenedTree, dragState) {
    var source = dragState.source, destination = dragState.destination, combine = dragState.combine, horizontalLevel = dragState.horizontalLevel;
    var sourcePath = getSourcePath(flattenedTree, source.index);
    var sourcePosition = getTreePosition(tree, sourcePath);
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
    var destinationPath = getDestinationPath(flattenedTree, source.index, destination.index, horizontalLevel);
    var destinationPosition = __assign({}, getTreePosition(tree, destinationPath));
    return { sourcePosition: sourcePosition, destinationPosition: destinationPosition };
};
//# sourceMappingURL=Tree-utils.js.map