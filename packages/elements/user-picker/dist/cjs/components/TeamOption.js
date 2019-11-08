"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var AvatarItemOption_1 = require("./AvatarItemOption");
var HighlightText_1 = require("./HighlightText");
var i18n_1 = require("./i18n");
var SizeableAvatar_1 = require("./SizeableAvatar");
var TeamOption = /** @class */ (function (_super) {
    tslib_1.__extends(TeamOption, _super);
    function TeamOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getPrimaryText = function () {
            var _a = _this.props.team, name = _a.name, highlight = _a.highlight;
            return [
                React.createElement(AvatarItemOption_1.TextWrapper, { key: "name", color: _this.props.isSelected ? theme_1.colors.N0 : theme_1.colors.N800 },
                    React.createElement(HighlightText_1.HighlightText, { highlights: highlight && highlight.name }, name)),
            ];
        };
        _this.renderByline = function () {
            var _a = _this.props, isSelected = _a.isSelected, _b = _a.team, memberCount = _b.memberCount, includesYou = _b.includesYou;
            // if Member count is missing, do not show the byline, regardless of the availability of includesYou
            if (memberCount === null || typeof memberCount === 'undefined') {
                return undefined;
            }
            else {
                if (includesYou === true) {
                    if (memberCount > 50) {
                        return _this.getBylineComponent(isSelected, React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.plus50MembersWithYou)));
                    }
                    else {
                        return _this.getBylineComponent(isSelected, React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.memberCountWithYou, { values: {
                                count: memberCount,
                            } })));
                    }
                }
                else {
                    if (memberCount > 50) {
                        return _this.getBylineComponent(isSelected, React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.plus50MembersWithoutYou)));
                    }
                    else {
                        return _this.getBylineComponent(isSelected, React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.memberCountWithoutYou, { values: {
                                count: memberCount,
                            } })));
                    }
                }
            }
        };
        _this.getBylineComponent = function (isSelected, message) { return (React.createElement(AvatarItemOption_1.TextWrapper, { color: isSelected ? theme_1.colors.N50 : theme_1.colors.N200 }, message)); };
        _this.renderAvatar = function () {
            var _a = _this.props.team, avatarUrl = _a.avatarUrl, name = _a.name;
            return React.createElement(SizeableAvatar_1.SizeableAvatar, { appearance: "big", src: avatarUrl, name: name });
        };
        return _this;
    }
    TeamOption.prototype.render = function () {
        return (React.createElement(AvatarItemOption_1.AvatarItemOption, { avatar: this.renderAvatar(), secondaryText: this.renderByline(), primaryText: this.getPrimaryText() }));
    };
    return TeamOption;
}(React.PureComponent));
exports.TeamOption = TeamOption;
//# sourceMappingURL=TeamOption.js.map