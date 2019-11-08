"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var styled_1 = require("./styled");
var arrow_left_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/arrow-left"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var BackBtn = /** @class */ (function (_super) {
    tslib_1.__extends(BackBtn, _super);
    function BackBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackBtn.prototype.render = function () {
        return (React.createElement(button_1.default, { className: "back-button", iconAfter: React.createElement(arrow_left_1.default, { label: "" }), onClick: this.props.onClick }));
    };
    return BackBtn;
}(react_1.PureComponent));
var PredefinedAvatarView = /** @class */ (function (_super) {
    tslib_1.__extends(PredefinedAvatarView, _super);
    function PredefinedAvatarView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredefinedAvatarView.prototype.render = function () {
        var _this = this;
        var _a = this.props, avatars = _a.avatars, selectedAvatar = _a.selectedAvatar, onGoBack = _a.onGoBack, predefinedAvatarsText = _a.predefinedAvatarsText;
        var cards = avatars.map(function (avatar, idx) {
            var elementKey = "predefined-avatar-" + idx;
            return (React.createElement("li", { key: elementKey },
                React.createElement(styled_1.LargeAvatarImage, { isSelected: avatar === selectedAvatar, src: avatar.dataURI, onClick: _this.createOnItemClickHandler(avatar) })));
        });
        return (React.createElement(styled_1.PredefinedAvatarViewWrapper, null,
            React.createElement("div", { className: "header" },
                React.createElement(BackBtn, { onClick: onGoBack }),
                React.createElement("div", { className: "description" }, predefinedAvatarsText || (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.default_avatars))))),
            React.createElement("ul", null, cards)));
    };
    PredefinedAvatarView.prototype.createOnItemClickHandler = function (avatar) {
        var onAvatarSelected = this.props.onAvatarSelected;
        return function () {
            if (onAvatarSelected) {
                onAvatarSelected(avatar);
            }
        };
    };
    PredefinedAvatarView.defaultProps = {
        avatars: [],
        onAvatarSelected: function () { },
    };
    return PredefinedAvatarView;
}(react_1.PureComponent));
exports.PredefinedAvatarView = PredefinedAvatarView;
//# sourceMappingURL=index.js.map