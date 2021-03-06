import { __assign, __rest } from "tslib";
import * as React from 'react';
import Tooltip from '@atlaskit/tooltip';
import Button from '@atlaskit/button';
import { getButtonStyles, baseStyles } from './styles';
export default (function (_a) {
    var title = _a.title, icon = _a.icon, iconAfter = _a.iconAfter, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, selected = _a.selected, disabled = _a.disabled, href = _a.href, target = _a.target, _b = _a.appearance, appearance = _b === void 0 ? 'subtle' : _b, children = _a.children, className = _a.className;
    return (React.createElement(Tooltip, { content: title, hideTooltipOnClick: true, position: "top" },
        React.createElement("div", { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
            React.createElement(Button, { className: className, theme: function (adgTheme, themeProps) {
                    var _a = adgTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
                    return __assign({ buttonStyles: __assign(__assign(__assign({}, buttonStyles), baseStyles), (appearance === 'danger' &&
                            getButtonStyles({
                                appearance: appearance,
                                state: themeProps.state,
                                mode: themeProps.mode,
                            }))) }, rest);
                }, "aria-label": title, spacing: "compact", href: href, target: target, appearance: appearance, "aria-haspopup": true, iconBefore: icon || undefined, iconAfter: iconAfter, onClick: onClick, isSelected: selected, isDisabled: disabled }, children))));
});
//# sourceMappingURL=Button.js.map