import { TableMap } from 'prosemirror-tables';
import { getCellsInRow } from 'prosemirror-utils';
import { TableCssClassName as ClassName } from '../../../types';
import { getPluginState as getMainPluginState } from '../../main';
import { closestElement, containsClassName } from '../../../../../utils';
import { updateOverflowShadows } from '../../../nodeviews/TableComponent';
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
export var updateControls = function (state) {
    var tableRef = getMainPluginState(state).tableRef;
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
    var rowControls = wrapper.parentElement.querySelectorAll("." + ClassName.ROW_CONTROLS_BUTTON_WRAP);
    var numberedRows = wrapper.parentElement.querySelectorAll(ClassName.NUMBERED_COLUMN_BUTTON);
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
    updateOverflowShadows(wrapper, tableRef, wrapper.parentElement.querySelector("." + ClassName.TABLE_RIGHT_SHADOW), wrapper.parentElement.querySelector("." + ClassName.TABLE_LEFT_SHADOW));
};
export var isClickNear = function (event, click) {
    var dx = click.x - event.clientX, dy = click.y - event.clientY;
    return dx * dx + dy * dy < 100;
};
export var getResizeCellPos = function (view, event, lastColumnResizable) {
    var state = view.state;
    var target = event.target;
    if (!containsClassName(target, ClassName.RESIZE_HANDLE)) {
        return null;
    }
    var parent = closestElement(target, '[data-start-index]');
    if (!parent) {
        return null;
    }
    var index = parseInt(parent.getAttribute('data-start-index') || '-1', 10);
    if (index === -1) {
        return null;
    }
    var cells = getCellsInRow(0)(state.selection);
    if (!cells) {
        return null;
    }
    var cellPos = cells[index].pos;
    if (!lastColumnResizable) {
        var $cell = state.doc.resolve(cellPos);
        var map = TableMap.get($cell.node(-1));
        if (map.width === index + 1) {
            return null;
        }
    }
    return cellPos;
};
//# sourceMappingURL=dom.js.map