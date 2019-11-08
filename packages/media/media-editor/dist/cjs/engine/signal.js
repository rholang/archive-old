"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signal = /** @class */ (function () {
    function Signal() {
        this.handler = null;
    }
    // Call this method to emit event
    Signal.prototype.emit = function (data) {
        if (this.handler) {
            this.handler(data);
        }
    };
    // The following methods are used by the engine. Do not call them
    Signal.prototype.listen = function (handler) {
        this.handler = handler;
    };
    Signal.prototype.reset = function () {
        this.handler = null;
    };
    return Signal;
}());
exports.Signal = Signal;
//# sourceMappingURL=signal.js.map