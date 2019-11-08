"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var React = tslib_1.__importStar(require("react"));
var AvatarItemOption_1 = require("./AvatarItemOption");
var HighlightText_1 = require("./HighlightText");
var SizeableAvatar_1 = require("./SizeableAvatar");
var utils_1 = require("./utils");
var UserOption = /** @class */ (function (_super) {
    tslib_1.__extends(UserOption, _super);
    function UserOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getPrimaryText = function () {
            var _a = _this.props.user, name = _a.name, publicName = _a.publicName, highlight = _a.highlight;
            var result = [
                React.createElement(AvatarItemOption_1.TextWrapper, { key: "name", color: _this.props.isSelected ? theme_1.colors.N0 : theme_1.colors.N800 },
                    React.createElement(HighlightText_1.HighlightText, { highlights: highlight && highlight.name }, name)),
            ];
            if (utils_1.hasValue(publicName) && name.trim() !== publicName.trim()) {
                result.push(React.createElement(React.Fragment, { key: "publicName" },
                    ' ',
                    React.createElement(AvatarItemOption_1.TextWrapper, { color: _this.props.isSelected ? theme_1.colors.N50 : theme_1.colors.N200 },
                        "(",
                        React.createElement(HighlightText_1.HighlightText, { highlights: highlight && highlight.publicName }, publicName),
                        ")")));
            }
            return result;
        };
        _this.renderSecondaryText = function () {
            return _this.props.user.byline ? (React.createElement(AvatarItemOption_1.TextWrapper, { color: _this.props.isSelected ? theme_1.colors.N50 : theme_1.colors.N200 }, _this.props.user.byline)) : (undefined);
        };
        _this.renderAvatar = function () {
            var _a = _this.props, _b = _a.user, avatarUrl = _b.avatarUrl, name = _b.name, status = _a.status;
            return (React.createElement(SizeableAvatar_1.SizeableAvatar, { appearance: "big", src: avatarUrl, presence: status, name: name }));
        };
        return _this;
    }
    UserOption.prototype.render = function () {
        return (React.createElement(AvatarItemOption_1.AvatarItemOption, { avatar: this.renderAvatar(), primaryText: this.getPrimaryText(), secondaryText: this.renderSecondaryText() }));
    };
    return UserOption;
}(React.PureComponent));
exports.UserOption = UserOption;
//# sourceMappingURL=UserOption.js.map