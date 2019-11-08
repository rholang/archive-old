"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var react_intl_1 = require("react-intl");
var analytics_next_1 = require("@atlaskit/analytics-next");
var atlassian_switcher_1 = tslib_1.__importDefault(require("@atlaskit/atlassian-switcher"));
exports.render = function (switcherProps, analyticsListener, container) {
    react_dom_1.default.render(react_1.default.createElement(react_intl_1.IntlProvider, null,
        react_1.default.createElement(analytics_next_1.AnalyticsListener, { channel: "*", onEvent: analyticsListener },
            react_1.default.createElement(atlassian_switcher_1.default, tslib_1.__assign({}, switcherProps)))), container);
    return {
        destroy: function () {
            react_dom_1.default.unmountComponentAtNode(container);
        },
    };
};
//# sourceMappingURL=render.js.map