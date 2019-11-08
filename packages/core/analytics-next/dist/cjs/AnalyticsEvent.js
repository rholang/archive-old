"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AnalyticsEvent = /** @class */ (function () {
    function AnalyticsEvent(props) {
        var _this = this;
        this.clone = function () {
            // We stringify and parse here to get a hacky "deep clone" of the object.
            // This has some limitations in that it wont support functions, regexs, Maps, Sets, etc,
            // but none of those need to be represented in our payload, so we consider this fine
            var payload = JSON.parse(JSON.stringify(_this.payload));
            return new AnalyticsEvent({ payload: payload });
        };
        this.payload = props.payload;
    }
    AnalyticsEvent.prototype.update = function (updater) {
        if (typeof updater === 'function') {
            this.payload = updater(this.payload);
        }
        if (typeof updater === 'object') {
            this.payload = tslib_1.__assign(tslib_1.__assign({}, this.payload), updater);
        }
        return this;
    };
    return AnalyticsEvent;
}());
exports.default = AnalyticsEvent;
//# sourceMappingURL=AnalyticsEvent.js.map