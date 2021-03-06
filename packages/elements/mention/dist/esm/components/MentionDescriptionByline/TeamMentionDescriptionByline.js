import { __assign, __extends } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { DescriptionBylineStyle } from './styles';
import { messages } from '../i18n';
var TeamMentionDescriptionByline = /** @class */ (function (_super) {
    __extends(TeamMentionDescriptionByline, _super);
    function TeamMentionDescriptionByline() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderByline = function (memberCount, includesYou) {
            if (includesYou) {
                if (memberCount > 50) {
                    return _this.getBylineComponent(React.createElement(FormattedMessage, __assign({}, messages.plus50MembersWithYou)));
                }
                return _this.getBylineComponent(React.createElement(FormattedMessage, __assign({}, messages.memberCountWithYou, { values: {
                        0: memberCount,
                    } })));
            }
            else {
                if (memberCount > 50) {
                    return _this.getBylineComponent(React.createElement(FormattedMessage, __assign({}, messages.plus50MembersWithoutYou)));
                }
                return _this.getBylineComponent(React.createElement(FormattedMessage, __assign({}, messages.memberCountWithoutYou, { values: {
                        0: memberCount,
                    } })));
            }
        };
        _this.getBylineComponent = function (message) { return (React.createElement(DescriptionBylineStyle, null, message)); };
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
export default TeamMentionDescriptionByline;
//# sourceMappingURL=TeamMentionDescriptionByline.js.map