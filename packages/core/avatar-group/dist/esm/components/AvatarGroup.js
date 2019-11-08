import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import DropdownMenu, { DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Avatar from '@atlaskit/avatar';
import { Grid, Stack } from '../styled/AvatarGroup';
import MoreIndicator from './MoreIndicator';
import itemTheme from '../theme/itemTheme';
import AvatarGroupItem from './AvatarGroupItem';
var GROUP_COMPONENT = {
    grid: Grid,
    stack: Stack,
};
var MAX_COUNT = {
    grid: 11,
    stack: 5,
};
var AvatarGroup = /** @class */ (function (_super) {
    __extends(AvatarGroup, _super);
    function AvatarGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarGroup.prototype.renderMoreDropdown = function (max, total) {
        var _a = this.props, appearance = _a.appearance, data = _a.data, borderColor = _a.borderColor, onMoreClick = _a.onMoreClick, showMoreButtonProps = _a.showMoreButtonProps, onAvatarClick = _a.onAvatarClick, size = _a.size, boundariesElement = _a.boundariesElement;
        // bail if there's not enough items
        if (total <= max)
            return null;
        // prepare the button -- we'll use it twice
        var MoreButton = function (props) { return (React.createElement(MoreIndicator, __assign({}, showMoreButtonProps, { borderColor: borderColor, count: total - max, isStack: appearance === 'stack', size: size }, props))); };
        // bail if the consumer wants to handle onClick
        if (typeof onMoreClick === 'function') {
            return React.createElement(MoreButton, { onClick: onMoreClick });
        }
        // crop and prepare the dropdown items
        var items = data
            .slice(max)
            .map(function (avatar, index) { return (React.createElement(AvatarGroupItem, { avatar: avatar, key: index, onAvatarClick: onAvatarClick })); });
        return (React.createElement(DropdownMenu, { trigger: React.createElement(MoreButton, null), position: "bottom right", boundariesElement: boundariesElement, shouldFlip: true },
            React.createElement(ThemeProvider, { theme: itemTheme },
                React.createElement(DropdownItemGroup, null, items))));
    };
    AvatarGroup.prototype.render = function () {
        var _a = this.props, Item = _a.avatar, appearance = _a.appearance, borderColor = _a.borderColor, data = _a.data, maxCount = _a.maxCount, onAvatarClick = _a.onAvatarClick, size = _a.size;
        // NOTE: conditionally defaulting the `maxCount` prop based on `appearance`
        var max = maxCount === 0 ? MAX_COUNT[appearance] : maxCount;
        var total = data.length;
        var Group = GROUP_COMPONENT[appearance];
        // Render (max - 1) avatars to leave space for moreIndicator
        var maxAvatar = total > max ? max - 1 : max;
        var items = data
            .slice(0, maxAvatar)
            .map(function (avatar, idx) { return (React.createElement(Item, __assign({}, avatar, { borderColor: borderColor, groupAppearance: appearance, key: idx, onClick: avatar.onClick || onAvatarClick, size: size, stackIndex: max - idx }))); });
        return (React.createElement(Group, { size: size },
            items,
            this.renderMoreDropdown(+maxAvatar, total)));
    };
    AvatarGroup.defaultProps = {
        appearance: 'stack',
        avatar: Avatar,
        maxCount: 0,
        showMoreButtonProps: {},
        size: 'medium',
    };
    return AvatarGroup;
}(Component));
export default AvatarGroup;
//# sourceMappingURL=AvatarGroup.js.map