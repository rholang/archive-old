import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import { DropdownItem } from '@atlaskit/dropdown-menu';
import Avatar, { withPseudoState, getProps, } from '@atlaskit/avatar';
var AvatarGroupItem = /** @class */ (function (_super) {
    __extends(AvatarGroupItem, _super);
    function AvatarGroupItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarGroupItem.prototype.render = function () {
        var _a = this.props, avatar = _a.avatar, onAvatarClick = _a.onAvatarClick;
        var href = avatar.href, rest = __rest(avatar, ["href"]);
        var enhancedProps = getProps(this);
        return (React.createElement(DropdownItem, __assign({ isInteractive: true }, enhancedProps, { elemBefore: React.createElement(Avatar, __assign({}, rest, { borderColor: "transparent", enableTooltip: false, size: "small" })), href: href, onClick: function (event) {
                if (typeof onAvatarClick === 'function') {
                    onAvatarClick({ event: event, item: avatar });
                }
            }, rel: avatar.target ? 'noopener noreferrer' : null, target: avatar.target }), avatar.name));
    };
    return AvatarGroupItem;
}(Component));
export default withPseudoState(AvatarGroupItem);
//# sourceMappingURL=AvatarGroupItem.js.map