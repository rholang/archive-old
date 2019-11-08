"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var dropdown_menu_1 = require("@atlaskit/dropdown-menu");
var avatar_1 = tslib_1.__importStar(require("@atlaskit/avatar"));
var AvatarGroupItem = /** @class */ (function (_super) {
    tslib_1.__extends(AvatarGroupItem, _super);
    function AvatarGroupItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarGroupItem.prototype.render = function () {
        var _a = this.props, avatar = _a.avatar, onAvatarClick = _a.onAvatarClick;
        var href = avatar.href, rest = tslib_1.__rest(avatar, ["href"]);
        var enhancedProps = avatar_1.getProps(this);
        return (react_1.default.createElement(dropdown_menu_1.DropdownItem, tslib_1.__assign({ isInteractive: true }, enhancedProps, { elemBefore: react_1.default.createElement(avatar_1.default, tslib_1.__assign({}, rest, { borderColor: "transparent", enableTooltip: false, size: "small" })), href: href, onClick: function (event) {
                if (typeof onAvatarClick === 'function') {
                    onAvatarClick({ event: event, item: avatar });
                }
            }, rel: avatar.target ? 'noopener noreferrer' : null, target: avatar.target }), avatar.name));
    };
    return AvatarGroupItem;
}(react_1.Component));
exports.default = avatar_1.withPseudoState(AvatarGroupItem);
//# sourceMappingURL=AvatarGroupItem.js.map