"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var styles_1 = require("./styles");
exports.default = (function (_a) {
    var title = _a.title, icon = _a.icon, iconAfter = _a.iconAfter, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, selected = _a.selected, disabled = _a.disabled, href = _a.href, target = _a.target, _b = _a.appearance, appearance = _b === void 0 ? 'subtle' : _b, children = _a.children, className = _a.className;
    return (React.createElement(tooltip_1.default, { content: title, hideTooltipOnClick: true, position: "top" },
        React.createElement("div", { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
            React.createElement(button_1.default, { className: className, theme: function (adgTheme, themeProps) {
                    var _a = adgTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
                    return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, buttonStyles), styles_1.baseStyles), (appearance === 'danger' &&
                            styles_1.getButtonStyles({
                                appearance: appearance,
                                state: themeProps.state,
                                mode: themeProps.mode,
                            }))) }, rest);
                }, "aria-label": title, spacing: "compact", href: href, target: target, appearance: appearance, "aria-haspopup": true, iconBefore: icon || undefined, iconAfter: iconAfter, onClick: onClick, isSelected: selected, isDisabled: disabled }, children))));
});
//# sourceMappingURL=Button.js.map