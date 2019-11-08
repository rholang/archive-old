"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_components_1 = require("styled-components");
var dropdown_menu_1 = tslib_1.__importStar(require("@atlaskit/dropdown-menu"));
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var AvatarGroup_1 = require("../styled/AvatarGroup");
var MoreIndicator_1 = tslib_1.__importDefault(require("./MoreIndicator"));
var itemTheme_1 = tslib_1.__importDefault(require("../theme/itemTheme"));
var AvatarGroupItem_1 = tslib_1.__importDefault(require("./AvatarGroupItem"));
var GROUP_COMPONENT = {
    grid: AvatarGroup_1.Grid,
    stack: AvatarGroup_1.Stack,
};
var MAX_COUNT = {
    grid: 11,
    stack: 5,
};
var AvatarGroup = /** @class */ (function (_super) {
    tslib_1.__extends(AvatarGroup, _super);
    function AvatarGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarGroup.prototype.renderMoreDropdown = function (max, total) {
        var _a = this.props, appearance = _a.appearance, data = _a.data, borderColor = _a.borderColor, onMoreClick = _a.onMoreClick, showMoreButtonProps = _a.showMoreButtonProps, onAvatarClick = _a.onAvatarClick, size = _a.size, boundariesElement = _a.boundariesElement;
        // bail if there's not enough items
        if (total <= max)
            return null;
        // prepare the button -- we'll use it twice
        var MoreButton = function (props) { return (react_1.default.createElement(MoreIndicator_1.default, tslib_1.__assign({}, showMoreButtonProps, { borderColor: borderColor, count: total - max, isStack: appearance === 'stack', size: size }, props))); };
        // bail if the consumer wants to handle onClick
        if (typeof onMoreClick === 'function') {
            return react_1.default.createElement(MoreButton, { onClick: onMoreClick });
        }
        // crop and prepare the dropdown items
        var items = data
            .slice(max)
            .map(function (avatar, index) { return (react_1.default.createElement(AvatarGroupItem_1.default, { avatar: avatar, key: index, onAvatarClick: onAvatarClick })); });
        return (react_1.default.createElement(dropdown_menu_1.default, { trigger: react_1.default.createElement(MoreButton, null), position: "bottom right", boundariesElement: boundariesElement, shouldFlip: true },
            react_1.default.createElement(styled_components_1.ThemeProvider, { theme: itemTheme_1.default },
                react_1.default.createElement(dropdown_menu_1.DropdownItemGroup, null, items))));
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
            .map(function (avatar, idx) { return (react_1.default.createElement(Item, tslib_1.__assign({}, avatar, { borderColor: borderColor, groupAppearance: appearance, key: idx, onClick: avatar.onClick || onAvatarClick, size: size, stackIndex: max - idx }))); });
        return (react_1.default.createElement(Group, { size: size },
            items,
            this.renderMoreDropdown(+maxAvatar, total)));
    };
    AvatarGroup.defaultProps = {
        appearance: 'stack',
        avatar: avatar_1.default,
        maxCount: 0,
        showMoreButtonProps: {},
        size: 'medium',
    };
    return AvatarGroup;
}(react_1.Component));
exports.default = AvatarGroup;
//# sourceMappingURL=AvatarGroup.js.map