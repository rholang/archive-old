"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var components_1 = tslib_1.__importDefault(require("@atlaskit/theme/components"));
var Container_1 = tslib_1.__importDefault(require("./Container"));
var Format_1 = tslib_1.__importDefault(require("./Format"));
var theme_1 = require("../theme");
var Badge = function (_a) {
    var theme = _a.theme, _b = _a.appearance, appearance = _b === void 0 ? 'default' : _b, _c = _a.children, children = _c === void 0 ? 0 : _c, _d = _a.max, max = _d === void 0 ? 99 : _d, testId = _a.testId;
    return (react_1.default.createElement(theme_1.Theme.Provider, { value: theme },
        react_1.default.createElement(components_1.default.Consumer, null, function (_a) {
            var mode = _a.mode;
            return (react_1.default.createElement(theme_1.Theme.Consumer, { appearance: appearance, mode: mode }, function (tokens) { return (react_1.default.createElement(Container_1.default, tslib_1.__assign({}, tokens, { "data-testid": testId }), typeof children === 'string' ? (children) : (react_1.default.createElement(Format_1.default, { max: max }, children)))); }));
        })));
};
exports.default = Badge;
//# sourceMappingURL=index.js.map