"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var actions_1 = require("./actions");
exports.default = (function (state, action) {
    switch (action.type) {
        case actions_1.MediaLinkingActionsTypes.showToolbar: {
            return tslib_1.__assign(tslib_1.__assign({}, state), { visible: true });
        }
        case actions_1.MediaLinkingActionsTypes.setUrl: {
            return tslib_1.__assign(tslib_1.__assign({}, state), { editable: true, link: action.payload });
        }
        case actions_1.MediaLinkingActionsTypes.hideToolbar: {
            return tslib_1.__assign(tslib_1.__assign({}, state), { visible: false });
        }
        case actions_1.MediaLinkingActionsTypes.unlink: {
            return tslib_1.__assign(tslib_1.__assign({}, state), { link: '', visible: false, editable: false });
        }
    }
    return state;
});
//# sourceMappingURL=reducer.js.map