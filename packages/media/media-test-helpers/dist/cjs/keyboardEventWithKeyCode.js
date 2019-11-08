"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var exenv = tslib_1.__importStar(require("exenv"));
var FakeKeyboardEvent = /** @class */ (function () {
    function FakeKeyboardEvent(_, __) {
    }
    return FakeKeyboardEvent;
}());
var KeyboardEventWithKeyCode = /** @class */ (function (_super) {
    tslib_1.__extends(KeyboardEventWithKeyCode, _super);
    function KeyboardEventWithKeyCode(type, options) {
        return _super.call(this, type, options) || this;
    }
    return KeyboardEventWithKeyCode;
}((exenv.canUseDOM
    ? KeyboardEvent
    : {})));
var Class = exenv.canUseDOM
    ? KeyboardEventWithKeyCode
    : FakeKeyboardEvent;
exports.default = Class;
//# sourceMappingURL=keyboardEventWithKeyCode.js.map