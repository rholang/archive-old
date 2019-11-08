"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AnalyticsEvent_1 = tslib_1.__importDefault(require("./AnalyticsEvent"));
var UIAnalyticsEvent = /** @class */ (function (_super) {
    tslib_1.__extends(UIAnalyticsEvent, _super);
    function UIAnalyticsEvent(props) {
        var _this = _super.call(this, props) || this;
        _this.clone = function () {
            if (_this.hasFired) {
                // eslint-disable-next-line no-console
                console.warn("Cannot clone an event after it's been fired.");
                return null;
            }
            var context = tslib_1.__spread(_this.context);
            var handlers = tslib_1.__spread(_this.handlers);
            /**
             * A hacky "deep clone" of the object. This is limited in that it wont
             * support functions, regexs, Maps, Sets, etc, but none of those need to
             * be represented in our payload.
             */
            var payload = JSON.parse(JSON.stringify(_this.payload));
            return new UIAnalyticsEvent({ context: context, handlers: handlers, payload: payload });
        };
        _this.fire = function (channel) {
            if (_this.hasFired) {
                // eslint-disable-next-line no-console
                console.warn('Cannot fire an event twice.');
                return;
            }
            _this.handlers.forEach(function (handler) { return handler(_this, channel); });
            _this.hasFired = true;
        };
        _this.context = props.context || [];
        _this.handlers = props.handlers || [];
        _this.hasFired = false;
        return _this;
    }
    UIAnalyticsEvent.prototype.update = function (updater) {
        if (this.hasFired) {
            // eslint-disable-next-line no-console
            console.warn("Cannot update an event after it's been fired.");
            return this;
        }
        return _super.prototype.update.call(this, updater);
    };
    return UIAnalyticsEvent;
}(AnalyticsEvent_1.default));
exports.default = UIAnalyticsEvent;
//# sourceMappingURL=UIAnalyticsEvent.js.map