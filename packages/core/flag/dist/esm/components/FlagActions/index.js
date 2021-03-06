import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import uuid from 'uuid/v1';
import Button from '@atlaskit/button';
import Container, { Action } from './styledFlagActions';
import { actionButtonStyles, getPseudos } from '../../theme';
import { DEFAULT_APPEARANCE } from '../Flag';
var FlagActions = /** @class */ (function (_super) {
    __extends(FlagActions, _super);
    function FlagActions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getUniqueId = function (prefix) { return prefix + "-" + uuid(); };
        return _this;
    }
    FlagActions.prototype.render = function () {
        var _this = this;
        var _a = this.props, actions = _a.actions, appearance = _a.appearance, linkComponent = _a.linkComponent;
        var isBold = appearance !== DEFAULT_APPEARANCE;
        if (!actions.length)
            return null;
        return (React.createElement(Container, { appearance: appearance }, actions.map(function (action, index) { return (React.createElement(Action, { key: _this.getUniqueId('flag-action'), hasDivider: !!index, useMidDot: !isBold, "data-testid": action.testId },
            React.createElement(Button, { onClick: action.onClick, href: action.href, target: action.target, 
                // This is very much a hack
                // This should be tidied up when the appearance prop
                // of flag is aligned with other appearance props.
                appearance: appearance === 'normal'
                    ? 'link'
                    : appearance, component: linkComponent, spacing: "compact", "data-testid": action.testId, theme: function (adgTheme, themeProps) {
                    var _a = adgTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
                    return __assign({ buttonStyles: __assign(__assign(__assign({}, buttonStyles), actionButtonStyles({
                            appearance: appearance,
                            mode: themeProps.mode,
                        })), getPseudos({ appearance: appearance, mode: themeProps.mode })) }, rest);
                } }, action.content))); })));
    };
    // eslint-disable-line react/sort-comp
    FlagActions.defaultProps = {
        appearance: DEFAULT_APPEARANCE,
        actions: [],
    };
    return FlagActions;
}(Component));
export default FlagActions;
//# sourceMappingURL=index.js.map