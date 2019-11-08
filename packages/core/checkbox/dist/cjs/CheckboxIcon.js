"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var checkbox_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/checkbox"));
var components_1 = tslib_1.__importDefault(require("@atlaskit/theme/components"));
var checkbox_indeterminate_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/checkbox-indeterminate"));
var theme_1 = tslib_1.__importStar(require("./theme"));
var utils_1 = require("./utils");
var elements_1 = require("./elements");
var defaults = {
    IconWrapper: elements_1.IconWrapperOverrides,
    IconIndeterminate: {
        component: checkbox_indeterminate_1.default,
    },
    Icon: {
        component: checkbox_1.default,
    },
};
var CheckboxIcon = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxIcon, _super);
    function CheckboxIcon(props) {
        var _this = _super.call(this, props) || this;
        _this.createExtender = memoize_one_1.default(utils_1.createExtender).bind(_this);
        return _this;
    }
    CheckboxIcon.prototype.render = function () {
        var _a = this.props, isChecked = _a.isChecked, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isActive = _a.isActive, isFocused = _a.isFocused, isHovered = _a.isHovered, isIndeterminate = _a.isIndeterminate, overrides = _a.overrides, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, theme = _a.theme;
        // @ts-ignore
        var getOverrides = this.createExtender(defaults, overrides);
        var _b = getOverrides('IconWrapper'), IconWrapper = _b.component, iconWrapperOverrides = tslib_1.__rest(_b, ["component"]);
        var IconIndeterminate = getOverrides('IconIndeterminate').component;
        var Icon = getOverrides('Icon').component;
        return (react_1.default.createElement(theme_1.default.Provider, { value: theme },
            react_1.default.createElement(components_1.default.Consumer, null, function (_a) {
                var mode = _a.mode;
                return (react_1.default.createElement(theme_1.default.Consumer, { mode: mode, tokens: theme_1.componentTokens }, function (tokens) { return (react_1.default.createElement(IconWrapper, tslib_1.__assign({}, iconWrapperOverrides, { tokens: tokens, isChecked: isChecked, isDisabled: isDisabled, isFocused: isFocused, isActive: isActive, isHovered: isHovered, isInvalid: isInvalid }), isIndeterminate ? (react_1.default.createElement(IconIndeterminate, { primaryColor: primaryColor, secondaryColor: secondaryColor, size: tokens.icon.size, label: "" })) : (react_1.default.createElement(Icon, { primaryColor: primaryColor, secondaryColor: secondaryColor, size: tokens.icon.size, label: "" })))); }));
            })));
    };
    CheckboxIcon.defaultProps = {
        primaryColor: 'inherit',
        secondaryColor: 'inherit',
        isIndeterminate: false,
        theme: function (current, props) { return current(props); },
    };
    return CheckboxIcon;
}(react_1.Component));
exports.default = CheckboxIcon;
//# sourceMappingURL=CheckboxIcon.js.map