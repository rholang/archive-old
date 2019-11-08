"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var utils_1 = require("../../../utils");
var styles_1 = require("../ui/styles");
exports.isCell = function (node) {
    return (node &&
        (['TH', 'TD'].indexOf(node.tagName) > -1 ||
            !!utils_1.closestElement(node, "." + types_1.TableCssClassName.TABLE_HEADER_CELL) ||
            !!utils_1.closestElement(node, "." + types_1.TableCssClassName.TABLE_CELL)));
};
exports.isCornerButton = function (node) {
    return utils_1.containsClassName(node, types_1.TableCssClassName.CONTROLS_CORNER_BUTTON);
};
exports.isInsertRowButton = function (node) {
    return utils_1.containsClassName(node, types_1.TableCssClassName.CONTROLS_INSERT_ROW) ||
        utils_1.closestElement(node, "." + types_1.TableCssClassName.CONTROLS_INSERT_ROW) ||
        (utils_1.containsClassName(node, types_1.TableCssClassName.CONTROLS_BUTTON_OVERLAY) &&
            utils_1.closestElement(node, "." + types_1.TableCssClassName.ROW_CONTROLS));
};
exports.getColumnOrRowIndex = function (target) { return [
    parseInt(target.getAttribute('data-start-index') || '-1', 10),
    parseInt(target.getAttribute('data-end-index') || '-1', 10),
]; };
exports.isColumnControlsDecorations = function (node) {
    return utils_1.containsClassName(node, types_1.TableCssClassName.COLUMN_CONTROLS_DECORATIONS);
};
exports.isRowControlsButton = function (node) {
    return utils_1.containsClassName(node, types_1.TableCssClassName.ROW_CONTROLS_BUTTON) ||
        utils_1.containsClassName(node, types_1.TableCssClassName.NUMBERED_COLUMN_BUTTON);
};
exports.isTableControlsButton = function (node) {
    return utils_1.containsClassName(node, types_1.TableCssClassName.CONTROLS_BUTTON) ||
        utils_1.containsClassName(node, types_1.TableCssClassName.ROW_CONTROLS_BUTTON_WRAP);
};
exports.getMousePositionHorizontalRelativeByElement = function (mouseEvent) {
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
exports.getMousePositionVerticalRelativeByElement = function (mouseEvent) {
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
exports.updateResizeHandles = function (tableRef) {
    if (!tableRef) {
        return;
    }
    var height = tableRef.offsetHeight + styles_1.tableToolbarSize;
    // see ED-7600
    var nodes = Array.from(tableRef.querySelectorAll("." + types_1.TableCssClassName.RESIZE_HANDLE));
    if (!nodes || !nodes.length) {
        return;
    }
    nodes.forEach(function (node) {
        node.style.height = height + "px";
    });
};
//# sourceMappingURL=dom.js.map