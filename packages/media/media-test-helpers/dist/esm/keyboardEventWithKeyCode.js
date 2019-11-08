import { __extends } from "tslib";
import * as exenv from 'exenv';
var FakeKeyboardEvent = /** @class */ (function () {
    function FakeKeyboardEvent(_, __) {
    }
    return FakeKeyboardEvent;
}());
var KeyboardEventWithKeyCode = /** @class */ (function (_super) {
    __extends(KeyboardEventWithKeyCode, _super);
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
export default Class;
//# sourceMappingURL=keyboardEventWithKeyCode.js.map