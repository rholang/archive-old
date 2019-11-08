"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hidePopup_1 = require("../actions/hidePopup");
exports.default = (function (eventEmitter) { return function (_) { return function (next) { return function (action) {
    if (hidePopup_1.isHidePopupAction(action)) {
        eventEmitter.emitClosed();
    }
    return next(action);
}; }; }; });
//# sourceMappingURL=hidePopup.js.map