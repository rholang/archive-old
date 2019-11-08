"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editor_common_1 = require("@atlaskit/editor-common");
var styles_1 = require("../styles");
var HORIZONTAL_ALIGN_COLUMN_BUTTON = -(styles_1.tableInsertColumnButtonSize / 2);
var HORIZONTAL_ALIGN_NUMBERED_COLUMN_BUTTON = HORIZONTAL_ALIGN_COLUMN_BUTTON + editor_common_1.akEditorTableNumberColumnWidth;
var VERTICAL_ALIGN_COLUMN_BUTTON = styles_1.tableToolbarSize + styles_1.tableInsertColumnButtonOffset;
var HORIZONTAL_ALIGN_ROW_BUTTON = -(styles_1.tableToolbarSize +
    styles_1.tableInsertColumnButtonOffset +
    styles_1.tableInsertColumnButtonSize);
var VERTICAL_ALIGN_ROW_BUTTON = styles_1.tableInsertColumnButtonSize / 2;
function getRowOptions(index) {
    var defaultOptions = {
        alignX: 'left',
        alignY: 'bottom',
        offset: [0, VERTICAL_ALIGN_ROW_BUTTON],
    };
    if (index === 0) {
        defaultOptions = tslib_1.__assign(tslib_1.__assign({}, defaultOptions), { alignY: 'top', 
            // The offset is the inverse the original, because is align top nop bottom.
            offset: [0, -VERTICAL_ALIGN_ROW_BUTTON] });
    }
    return tslib_1.__assign(tslib_1.__assign({}, defaultOptions), { onPositionCalculated: function (position) {
            return tslib_1.__assign(tslib_1.__assign({}, position), { 
                // Left position should be always the offset (To place in the correct position even if the table has overflow).
                left: HORIZONTAL_ALIGN_ROW_BUTTON });
        } });
}
function getColumnOptions(index, tableContainer, hasNumberedColumns) {
    var options = {
        alignX: 'end',
        alignY: 'top',
        offset: [HORIZONTAL_ALIGN_COLUMN_BUTTON, VERTICAL_ALIGN_COLUMN_BUTTON],
        // :: (position: PopupPosition) -> PopupPosition
        // Limit the InsertButton position to the table container
        // if the left position starts before it
        // we should always set the InsertButton on the start,
        // considering the offset from the first column
        onPositionCalculated: function (position) {
            var left = position.left;
            if (!left) {
                // If not left, lest skip expensive next calculations.
                return position;
            }
            if (index === 0) {
                return tslib_1.__assign(tslib_1.__assign({}, position), { left: hasNumberedColumns
                        ? HORIZONTAL_ALIGN_NUMBERED_COLUMN_BUTTON
                        : HORIZONTAL_ALIGN_COLUMN_BUTTON });
            }
            // Check if current position is greater than the available container width
            var rect = tableContainer
                ? tableContainer.getBoundingClientRect()
                : null;
            return tslib_1.__assign(tslib_1.__assign({}, position), { left: rect && left > rect.width ? rect.width : left });
        },
    };
    // We need to change the popup position when
    // the column index is zero
    if (index === 0) {
        return tslib_1.__assign(tslib_1.__assign({}, options), { alignX: 'left', alignY: 'top' });
    }
    return options;
}
function getPopupOptions(type, index, hasNumberedColumns, tableContainer) {
    switch (type) {
        case 'column':
            return getColumnOptions(index, tableContainer, hasNumberedColumns);
        case 'row':
            return getRowOptions(index);
        default:
            return {};
    }
}
exports.default = getPopupOptions;
//# sourceMappingURL=getPopupOptions.js.map