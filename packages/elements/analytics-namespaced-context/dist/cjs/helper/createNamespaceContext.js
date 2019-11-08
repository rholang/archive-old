"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var createNamespaceContext = function (namespace, displayName) {
    if (displayName === void 0) { displayName = 'NamespacedContext'; }
    var Component = function (props) {
        var _a;
        var newData = (_a = {},
            _a[namespace] = props.data,
            _a);
        return (React.createElement(analytics_next_1.AnalyticsContext, { data: newData }, React.Children.only(props.children)));
    };
    Component.displayName = displayName;
    return Component;
};
exports.default = createNamespaceContext;
//# sourceMappingURL=createNamespaceContext.js.map