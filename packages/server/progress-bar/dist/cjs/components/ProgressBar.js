"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var react_1 = tslib_1.__importDefault(require("react"));
var core_1 = require("@emotion/core");
var theme_1 = require("../theme");
var maxValue = 1;
var Bar = function (_a) {
    var isIndeterminate = _a.isIndeterminate, tokens = _a.tokens;
    if (isIndeterminate) {
        return (core_1.jsx(react_1.default.Fragment, null,
            core_1.jsx("span", { css: [tokens.bar, tokens.increasingBar] }),
            core_1.jsx("span", { css: [tokens.bar, tokens.decreasingBar] })));
    }
    return core_1.jsx("span", { css: [tokens.bar, tokens.determinateBar] });
};
var ProgressBar = /** @class */ (function (_super) {
    tslib_1.__extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, value = _a.value, isIndeterminate = _a.isIndeterminate, theme = _a.theme;
        var valueParsed = isIndeterminate
            ? 0
            : Math.max(0, Math.min(value, maxValue));
        return (core_1.jsx(theme_1.Theme.Provider, { value: theme },
            core_1.jsx(theme_1.Theme.Consumer, { value: value }, function (tokens) { return (core_1.jsx("div", { css: tokens.container, role: "progressbar", "aria-valuemin": 0, "aria-valuenow": valueParsed, "aria-valuemax": maxValue, tabIndex: 0 },
                core_1.jsx(Bar, { isIndeterminate: isIndeterminate, tokens: tokens }))); })));
    };
    ProgressBar.defaultProps = {
        value: 0,
        isIndeterminate: false,
    };
    return ProgressBar;
}(react_1.default.PureComponent));
exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map