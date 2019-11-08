import { TableCssClassName as ClassName } from '../types';
import { closestElement, containsClassName } from '../../../utils';
import { tableToolbarSize } from '../ui/styles';
export var isCell = function (node) {
    return (node &&
        (['TH', 'TD'].indexOf(node.tagName) > -1 ||
            !!closestElement(node, "." + ClassName.TABLE_HEADER_CELL) ||
            !!closestElement(node, "." + ClassName.TABLE_CELL)));
};
export var isCornerButton = function (node) {
    return containsClassName(node, ClassName.CONTROLS_CORNER_BUTTON);
};
export var isInsertRowButton = function (node) {
    return containsClassName(node, ClassName.CONTROLS_INSERT_ROW) ||
        closestElement(node, "." + ClassName.CONTROLS_INSERT_ROW) ||
        (containsClassName(node, ClassName.CONTROLS_BUTTON_OVERLAY) &&
            closestElement(node, "." + ClassName.ROW_CONTROLS));
};
export var getColumnOrRowIndex = function (target) { return [
    parseInt(target.getAttribute('data-start-index') || '-1', 10),
    parseInt(target.getAttribute('data-end-index') || '-1', 10),
]; };
export var isColumnControlsDecorations = function (node) {
    return containsClassName(node, ClassName.COLUMN_CONTROLS_DECORATIONS);
};
export var isRowControlsButton = function (node) {
    return containsClassName(node, ClassName.ROW_CONTROLS_BUTTON) ||
        containsClassName(node, ClassName.NUMBERED_COLUMN_BUTTON);
};
export var isTableControlsButton = function (node) {
    return containsClassName(node, ClassName.CONTROLS_BUTTON) ||
        containsClassName(node, ClassName.ROW_CONTROLS_BUTTON_WRAP);
};
export var getMousePositionHorizontalRelativeByElement = function (mouseEvent) {
    var element = mouseEvent.target;
    if (element instanceof HTMLElement) {
        var elementRect = element.getBoundingClientRect();
        if (elementRect.width <= 0) {
            return null;
        }
        var x = mouseEvent.clientX - elementRect.left;
        return x / elementRect.width > 0.5 ? 'right' : 'left';
    }
    return null;
};
export var getMousePositionVerticalRelativeByElement = function (mouseEvent) {
    var element = mouseEvent.target;
    if (element instanceof HTMLElement) {
        var elementRect = element.getBoundingClientRect();
        if (elementRect.height <= 0) {
            return null;
        }
        var y = mouseEvent.clientY - elementRect.top;
        return y / elementRect.height > 0.5 ? 'bottom' : 'top';
    }
    return null;
};
export var updateResizeHandles = function (tableRef) {
    if (!tableRef) {
        return;
    }
    var height = tableRef.offsetHeight + tableToolbarSize;
    // see ED-7600
    var nodes = Array.from(tableRef.querySelectorAll("." + ClassName.RESIZE_HANDLE));
    if (!nodes || !nodes.length) {
        return;
    }
    nodes.forEach(function (node) {
        node.style.height = height + "px";
    });
};
//# sourceMappingURL=dom.js.map