"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.default = (function (pluginState, action) {
    switch (action.type) {
        case 'STOP_RESIZING':
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), { resizeHandlePos: null, dragging: null });
        case 'SET_RESIZE_HANDLE_POSITION':
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), { resizeHandlePos: action.data.resizeHandlePos });
        case 'SET_DRAGGING':
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), { dragging: action.data.dragging });
        case 'SET_LAST_CLICK':
            var lastClick = action.data.lastClick;
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), { lastClick: lastClick, resizeHandlePos: lastClick ? pluginState.resizeHandlePos : null });
        default:
            return pluginState;
    }
});
//# sourceMappingURL=reducer.js.map