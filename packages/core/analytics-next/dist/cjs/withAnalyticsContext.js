"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var AnalyticsContext_1 = tslib_1.__importDefault(require("./AnalyticsContext"));
var withAnalyticsContext = function (defaultData) { return function (WrappedComponent) {
    var WithAnalyticsContext = react_1.default.forwardRef(function (props, ref) {
        var _a = props.analyticsContext, analyticsContext = _a === void 0 ? {} : _a, rest = tslib_1.__rest(props, ["analyticsContext"]);
        var analyticsData = tslib_1.__assign(tslib_1.__assign({}, defaultData), analyticsContext);
        return (react_1.default.createElement(AnalyticsContext_1.default, { data: analyticsData },
            react_1.default.createElement(WrappedComponent, tslib_1.__assign({}, rest, { ref: ref }))));
    });
    // @ts-ignore
    WithAnalyticsContext.displayName = "WithAnalyticsContext(" + (WrappedComponent.displayName ||
        WrappedComponent.name) + ")";
    return WithAnalyticsContext;
}; };
exports.default = withAnalyticsContext;
//# sourceMappingURL=withAnalyticsContext.js.map