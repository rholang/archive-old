"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styled_1 = require("./styled");
var styled_2 = require("../predefined-avatar-view/styled");
var AvatarList = /** @class */ (function (_super) {
    tslib_1.__extends(AvatarList, _super);
    function AvatarList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onItemClick = function (avatar) { return function () {
            var onItemClick = _this.props.onItemClick;
            if (onItemClick) {
                onItemClick(avatar);
            }
        }; };
        return _this;
    }
    AvatarList.prototype.render = function () {
        var _this = this;
        var _a = this.props, avatars = _a.avatars, selectedAvatar = _a.selectedAvatar;
        var cards = avatars.map(function (avatar, idx) {
            var elementKey = "predefined-avatar-" + idx;
            return (React.createElement("li", { key: elementKey },
                React.createElement(styled_2.SmallAvatarImage, { isSelected: avatar === selectedAvatar, src: avatar.dataURI, onClick: _this.onItemClick(avatar) })));
        });
        return (React.createElement(styled_1.AvatarListWrapper, null,
            React.createElement("ul", null, cards)));
    };
    AvatarList.defaultProps = {
        avatars: [],
    };
    return AvatarList;
}(react_1.PureComponent));
exports.AvatarList = AvatarList;
//# sourceMappingURL=index.js.map