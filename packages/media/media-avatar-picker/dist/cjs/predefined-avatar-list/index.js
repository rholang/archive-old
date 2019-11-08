"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var avatar_list_1 = require("../avatar-list");
var more_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/more"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var styled_1 = require("./styled");
var ShowMoreButton = /** @class */ (function (_super) {
    tslib_1.__extends(ShowMoreButton, _super);
    function ShowMoreButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShowMoreButton.prototype.render = function () {
        return (React.createElement(button_1.default, { className: "show-more-button", iconAfter: React.createElement(more_1.default, { label: "", size: "large" }), onClick: this.props.onClick }));
    };
    return ShowMoreButton;
}(react_1.PureComponent));
var PredefinedAvatarList = /** @class */ (function (_super) {
    tslib_1.__extends(PredefinedAvatarList, _super);
    function PredefinedAvatarList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredefinedAvatarList.prototype.UNSAFE_componentWillMount = function () {
        var _this = this;
        this.setState(function (state) {
            var avatars = _this.props.avatars;
            return tslib_1.__assign(tslib_1.__assign({}, state), { avatars: avatars });
        });
    };
    PredefinedAvatarList.prototype.render = function () {
        var _a = this.props, avatars = _a.avatars, selectedAvatar = _a.selectedAvatar, onShowMore = _a.onShowMore, onAvatarSelected = _a.onAvatarSelected;
        return (React.createElement(styled_1.PredefinedAvatarsWrapper, null,
            React.createElement(avatar_list_1.AvatarList, { avatars: avatars, selectedAvatar: selectedAvatar, onItemClick: onAvatarSelected }),
            React.createElement(ShowMoreButton, { onClick: onShowMore })));
    };
    PredefinedAvatarList.defaultProps = {
        avatars: [],
    };
    return PredefinedAvatarList;
}(react_1.PureComponent));
exports.PredefinedAvatarList = PredefinedAvatarList;
//# sourceMappingURL=index.js.map