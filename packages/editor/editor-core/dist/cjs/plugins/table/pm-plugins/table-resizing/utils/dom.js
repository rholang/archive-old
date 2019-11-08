"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var types_1 = require("../../../types");
var main_1 = require("../../main");
var utils_1 = require("../../../../../utils");
var TableComponent_1 = require("../../../nodeviews/TableComponent");
function getHeights(children) {
    var heights = [];
    for (var i = 0, count = children.length; i < count; i++) {
        var child = children[i];
        if (child) {
            var rect = child.getBoundingClientRect();
            var height = rect ? rect.height : child.offsetHeight;
            heights[i] = height;
        }
        else {
            heights[i] = undefined;
        }
    }
    return heights;
}
exports.updateControls = function (state) {
    var tableRef = main_1.getPluginState(state).tableRef;
    if (!tableRef) {
        return;
    }
    var tr = tableRef.querySelector('tr');
    if (!tr) {
        return;
    }
    var wrapper = tableRef.parentElement;
    if (!(wrapper && wrapper.parentElement)) {
        return;
    }
    var rows = tableRef.querySelectorAll('tr');
    var rowControls = wrapper.parentElement.querySelectorAll("." + types_1.TableCssClassName.ROW_CONTROLS_BUTTON_WRAP);
    var numberedRows = wrapper.parentElement.querySelectorAll(types_1.TableCssClassName.NUMBERED_COLUMN_BUTTON);
    var rowHeights = getHeights(rows);
    // update rows controls height on resize
    for (var i = 0, count = rowControls.length; i < count; i++) {
        var height = rowHeights[i];
        if (height) {
            rowControls[i].style.height = height + 1 + "px";
            if (numberedRows.length) {
                numberedRows[i].style.height = height + 1 + "px";
            }
        }
    }
    TableComponent_1.updateOverflowShadows(wrapper, tableRef, wrapper.parentElement.querySelector("." + types_1.TableCssClassName.TABLE_RIGHT_SHADOW), wrapper.parentElement.querySelector("." + types_1.TableCssClassName.TABLE_LEFT_SHADOW));
};
exports.isClickNear = function (event, click) {
    var dx = click.x - event.clientX, dy = click.y - event.clientY;
    return dx * dx + dy * dy < 100;
};
exports.getResizeCellPos = function (view, event, lastColumnResizable) {
    var state = view.state;
    var target = event.target;
    if (!utils_1.containsClassName(target, types_1.TableCssClassName.RESIZE_HANDLE)) {
        return null;
    }
    var parent = utils_1.closestElement(target, '[data-start-index]');
    if (!parent) {
        return null;
    }
    var index = parseInt(parent.getAttribute('data-start-index') || '-1', 10);
    if (index === -1) {
        return null;
    }
    var cells = prosemirror_utils_1.getCellsInRow(0)(state.selection);
    if (!cells) {
        return null;
    }
    var cellPos = cells[index].pos;
    if (!lastColumnResizable) {
        var $cell = state.doc.resolve(cellPos);
        var map = prosemirror_tables_1.TableMap.get($cell.node(-1));
        if (map.width === index + 1) {
            return null;
        }
    }
    return cellPos;
};
//# sourceMappingURL=dom.js.map