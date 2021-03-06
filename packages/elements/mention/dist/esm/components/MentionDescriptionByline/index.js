import { __extends } from "tslib";
import * as React from 'react';
import { UserType } from '../../types';
import UserMentionDescriptionByline from './UserMentionDescriptionByline';
import TeamMentionDescriptionByline from './TeamMentionDescriptionByline';
var MentionDescriptionByline = /** @class */ (function (_super) {
    __extends(MentionDescriptionByline, _super);
    function MentionDescriptionByline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MentionDescriptionByline.prototype.render = function () {
        var userType = this.props.mention.userType;
        switch (userType) {
            case UserType[UserType.TEAM]: {
                return React.createElement(TeamMentionDescriptionByline, { mention: this.props.mention });
            }
            default: {
                return React.createElement(UserMentionDescriptionByline, { mention: this.props.mention });
            }
        }
    };
    return MentionDescriptionByline;
}(React.PureComponent));
export default MentionDescriptionByline;
//# sourceMappingURL=index.js.map