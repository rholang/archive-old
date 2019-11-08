"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
/**
 * Styling a avatar is complicated and there are a number of properties which
 * inform its appearance. We want to be able to style any arbitrary component
 * like a Link, but we don't want to pass all of these appearance-related props
 * through to the component or underlying DOM node. This component acts as a
 * layer which catches the appearance-related properties so that they can be
 * used by styled-components, then passes the rest of the props on to the custom
 * component.
 */
var CustomComponentProxy = /** @class */ (function (_super) {
    tslib_1.__extends(CustomComponentProxy, _super);
    function CustomComponentProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomComponentProxy.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, avatar = _a.avatar, borderColor = _a.borderColor, ProxiedComponent = _a.component, enableTooltip = _a.enableTooltip, groupAppearance = _a.groupAppearance, innerRef = _a.innerRef, isActive = _a.isActive, isDisabled = _a.isDisabled, isFocus = _a.isFocus, isHover = _a.isHover, isSelected = _a.isSelected, primaryText = _a.primaryText, secondaryText = _a.secondaryText, stackIndex = _a.stackIndex, rest = tslib_1.__rest(_a, ["appearance", "avatar", "borderColor", "component", "enableTooltip", "groupAppearance", "innerRef", "isActive", "isDisabled", "isFocus", "isHover", "isSelected", "primaryText", "secondaryText", "stackIndex"]);
        return ProxiedComponent ? react_1.default.createElement(ProxiedComponent, tslib_1.__assign({}, rest)) : null;
    };
    return CustomComponentProxy;
}(react_1.Component));
exports.default = CustomComponentProxy;
//# sourceMappingURL=CustomComponentProxy.js.map