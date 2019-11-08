"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styles_1 = require("./styles");
var i18n_1 = require("../i18n");
var TeamMentionDescriptionByline = /** @class */ (function (_super) {
    tslib_1.__extends(TeamMentionDescriptionByline, _super);
    function TeamMentionDescriptionByline() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderByline = function (memberCount, includesYou) {
            if (includesYou) {
                if (memberCount > 50) {
                    return _this.getBylineComponent(React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.plus50MembersWithYou)));
                }
                return _this.getBylineComponent(React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.memberCountWithYou, { values: {
                        0: memberCount,
                    } })));
            }
            else {
                if (memberCount > 50) {
                    return _this.getBylineComponent(React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.plus50MembersWithoutYou)));
                }
                return _this.getBylineComponent(React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.memberCountWithoutYou, { values: {
                        0: memberCount,
                    } })));
            }
        };
        _this.getBylineComponent = function (message) { return (React.createElement(styles_1.DescriptionBylineStyle, null, message)); };
        return _this;
    }
    TeamMentionDescriptionByline.prototype.render = function () {
        var context = this.props.mention.context;
        if (!context) {
            return null;
        }
        var includesYou = context.includesYou;
        var memberCount = context.memberCount;
        return this.renderByline(memberCount, includesYou);
    };
    return TeamMentionDescriptionByline;
}(React.PureComponent));
exports.default = TeamMentionDescriptionByline;
//# sourceMappingURL=TeamMentionDescriptionByline.js.map