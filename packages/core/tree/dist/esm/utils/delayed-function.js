var DelayedFunction = /** @class */ (function () {
    function DelayedFunction(delay) {
        this.delay = delay;
    }
    DelayedFunction.prototype.start = function (fn) {
        this.stop();
        this.timeoutId = window.setTimeout(fn, this.delay);
    };
    DelayedFunction.prototype.stop = function () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
    };
    return DelayedFunction;
}());
export default DelayedFunction;
//# sourceMappingURL=delayed-function.js.map