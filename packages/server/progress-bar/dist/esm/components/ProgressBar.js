import { __extends } from "tslib";
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Theme } from '../theme';
var maxValue = 1;
var Bar = function (_a) {
    var isIndeterminate = _a.isIndeterminate, tokens = _a.tokens;
    if (isIndeterminate) {
        return (jsx(React.Fragment, null,
            jsx("span", { css: [tokens.bar, tokens.increasingBar] }),
            jsx("span", { css: [tokens.bar, tokens.decreasingBar] })));
    }
    return jsx("span", { css: [tokens.bar, tokens.determinateBar] });
};
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, value = _a.value, isIndeterminate = _a.isIndeterminate, theme = _a.theme;
        var valueParsed = isIndeterminate
            ? 0
            : Math.max(0, Math.min(value, maxValue));
        return (jsx(Theme.Provider, { value: theme },
            jsx(Theme.Consumer, { value: value }, function (tokens) { return (jsx("div", { css: tokens.container, role: "progressbar", "aria-valuemin": 0, "aria-valuenow": valueParsed, "aria-valuemax": maxValue, tabIndex: 0 },
                jsx(Bar, { isIndeterminate: isIndeterminate, tokens: tokens }))); })));
    };
    ProgressBar.defaultProps = {
        value: 0,
        isIndeterminate: false,
    };
    return ProgressBar;
}(React.PureComponent));
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map