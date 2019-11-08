"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var types_1 = require("../../types");
var UserMentionDescriptionByline_1 = tslib_1.__importDefault(require("./UserMentionDescriptionByline"));
var TeamMentionDescriptionByline_1 = tslib_1.__importDefault(require("./TeamMentionDescriptionByline"));
var MentionDescriptionByline = /** @class */ (function (_super) {
    tslib_1.__extends(MentionDescriptionByline, _super);
    function MentionDescriptionByline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MentionDescriptionByline.prototype.render = function () {
        var userType = this.props.mention.userType;
        switch (userType) {
            case types_1.UserType[types_1.UserType.TEAM]: {
                return React.createElement(TeamMentionDescriptionByline_1.default, { mention: this.props.mention });
            }
            default: {
                return React.createElement(UserMentionDescriptionByline_1.default, { mention: this.props.mention });
            }
        }
    };
    return MentionDescriptionByline;
}(React.PureComponent));
exports.default = MentionDescriptionByline;
//# sourceMappingURL=index.js.map