"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var startApp_1 = require("../actions/startApp");
var updatePopupUrls_1 = require("../actions/updatePopupUrls");
function default_1() {
    return function (store) { return function (next) { return function (action) {
        if (startApp_1.isStartAppAction(action)) {
            var redirectUrl = store.getState().redirectUrl;
            store.dispatch(updatePopupUrls_1.updatePopupUrls({ redirectUrl: redirectUrl }));
        }
        return next(action);
    }; }; };
}
exports.default = default_1;
//# sourceMappingURL=startApp.js.map