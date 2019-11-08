"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styles_1 = require("../styles");
var DELETE_BUTTON_CONTROLS_OFFSET = styles_1.tableToolbarSize + styles_1.tableDeleteButtonSize + styles_1.tableDeleteButtonOffset;
function getColumnOptions(left, tableWrapper) {
    return {
        alignX: 'left',
        alignY: 'start',
        offset: [left, DELETE_BUTTON_CONTROLS_OFFSET],
        shouldRenderPopup: function () {
            if (tableWrapper) {
                var rect = tableWrapper.getBoundingClientRect();
                var maxVisibleLeftPosition = rect.width + tableWrapper.scrollLeft - styles_1.tableDeleteButtonSize;
                var minVisibleLeftPosition = tableWrapper.scrollLeft;
                return (maxVisibleLeftPosition - left > 0 && left > minVisibleLeftPosition);
            }
            return true;
        },
    };
}
function getRowOptions(top) {
    return {
        alignX: 'left',
        alignY: 'start',
        forcePlacement: true,
        offset: [0, -top],
        onPositionCalculated: function (position) {
            return tslib_1.__assign(tslib_1.__assign({}, position), { 
                // We need to force left to always be the offset to not be affected by overflow
                left: -DELETE_BUTTON_CONTROLS_OFFSET });
        },
    };
}
function getPopupOptions(_a) {
    var left = _a.left, top = _a.top, selectionType = _a.selectionType, tableWrapper = _a.tableWrapper;
    switch (selectionType) {
        case 'column':
            return getColumnOptions(left, tableWrapper);
        case 'row':
            return getRowOptions(top);
        default: {
            return {};
        }
    }
}
exports.default = getPopupOptions;
//# sourceMappingURL=getPopUpOptions.js.map