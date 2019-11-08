"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.START_APP = 'START_APP';
function isStartAppAction(action) {
    return action.type === exports.START_APP;
}
exports.isStartAppAction = isStartAppAction;
function startApp(payload) {
    return {
        type: exports.START_APP,
        payload: payload,
    };
}
exports.startApp = startApp;
//# sourceMappingURL=startApp.js.map