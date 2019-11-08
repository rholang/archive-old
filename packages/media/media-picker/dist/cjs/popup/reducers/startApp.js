"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var startApp_1 = require("../actions/startApp");
function default_1(state, action) {
    if (startApp_1.isStartAppAction(action)) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { onCancelUpload: action.payload.onCancelUpload });
    }
    else {
        return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=startApp.js.map