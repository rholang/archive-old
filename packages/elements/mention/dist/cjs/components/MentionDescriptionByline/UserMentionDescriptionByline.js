"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var MentionHighlightHelpers_1 = require("../MentionItem/MentionHighlightHelpers");
var styles_1 = require("./styles");
var UserMentionDescriptionByline = /** @class */ (function (_super) {
    tslib_1.__extends(UserMentionDescriptionByline, _super);
    function UserMentionDescriptionByline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserMentionDescriptionByline.prototype.render = function () {
        var _a = this.props.mention, highlight = _a.highlight, name = _a.name, nickname = _a.nickname;
        var nicknameHighlights = highlight && highlight.nickname;
        if (name === nickname) {
            return null;
        }
        return MentionHighlightHelpers_1.renderHighlight(styles_1.DescriptionBylineStyle, nickname, nicknameHighlights, '@');
    };
    return UserMentionDescriptionByline;
}(React.PureComponent));
exports.default = UserMentionDescriptionByline;
//# sourceMappingURL=UserMentionDescriptionByline.js.map