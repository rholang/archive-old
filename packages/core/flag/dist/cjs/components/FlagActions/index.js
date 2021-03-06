"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var v1_1 = tslib_1.__importDefault(require("uuid/v1"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var styledFlagActions_1 = tslib_1.__importStar(require("./styledFlagActions"));
var theme_1 = require("../../theme");
var Flag_1 = require("../Flag");
var FlagActions = /** @class */ (function (_super) {
    tslib_1.__extends(FlagActions, _super);
    function FlagActions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getUniqueId = function (prefix) { return prefix + "-" + v1_1.default(); };
        return _this;
    }
    FlagActions.prototype.render = function () {
        var _this = this;
        var _a = this.props, actions = _a.actions, appearance = _a.appearance, linkComponent = _a.linkComponent;
        var isBold = appearance !== Flag_1.DEFAULT_APPEARANCE;
        if (!actions.length)
            return null;
        return (react_1.default.createElement(styledFlagActions_1.default, { appearance: appearance }, actions.map(function (action, index) { return (react_1.default.createElement(styledFlagActions_1.Action, { key: _this.getUniqueId('flag-action'), hasDivider: !!index, useMidDot: !isBold, "data-testid": action.testId },
            react_1.default.createElement(button_1.default, { onClick: action.onClick, href: action.href, target: action.target, 
                // This is very much a hack
                // This should be tidied up when the appearance prop
                // of flag is aligned with other appearance props.
                appearance: appearance === 'normal'
                    ? 'link'
                    : appearance, component: linkComponent, spacing: "compact", "data-testid": action.testId, theme: function (adgTheme, themeProps) {
                    var _a = adgTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
                    return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, buttonStyles), theme_1.actionButtonStyles({
                            appearance: appearance,
                            mode: themeProps.mode,
                        })), theme_1.getPseudos({ appearance: appearance, mode: themeProps.mode })) }, rest);
                } }, action.content))); })));
    };
    // eslint-disable-line react/sort-comp
    FlagActions.defaultProps = {
        appearance: Flag_1.DEFAULT_APPEARANCE,
        actions: [],
    };
    return FlagActions;
}(react_1.Component));
exports.default = FlagActions;
//# sourceMappingURL=index.js.map