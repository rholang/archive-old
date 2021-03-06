import { __extends } from "tslib";
import * as React from 'react';
import { renderHighlight } from '../MentionItem/MentionHighlightHelpers';
import { DescriptionBylineStyle } from './styles';
var UserMentionDescriptionByline = /** @class */ (function (_super) {
    __extends(UserMentionDescriptionByline, _super);
    function UserMentionDescriptionByline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserMentionDescriptionByline.prototype.render = function () {
        var _a = this.props.mention, highlight = _a.highlight, name = _a.name, nickname = _a.nickname;
        var nicknameHighlights = highlight && highlight.nickname;
        if (name === nickname) {
            return null;
        }
        return renderHighlight(DescriptionBylineStyle, nickname, nicknameHighlights, '@');
    };
    return UserMentionDescriptionByline;
}(React.PureComponent));
export default UserMentionDescriptionByline;
//# sourceMappingURL=UserMentionDescriptionByline.js.map