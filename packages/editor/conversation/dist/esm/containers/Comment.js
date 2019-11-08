import { __assign, __extends, __rest } from "tslib";
import * as React from 'react';
import { connect } from 'react-redux';
import { getComments, getHighlighted } from '../internal/selectors';
var mapStateToProps = function (state, ownProps) {
    var comments = getComments(state, ownProps.conversationId, ownProps.comment.commentId);
    var isHighlighted = getHighlighted(state) === ownProps.comment.commentId.toString();
    return __assign(__assign({}, ownProps), { comments: comments,
        isHighlighted: isHighlighted });
};
var CommentContainer = /** @class */ (function (_super) {
    __extends(CommentContainer, _super);
    function CommentContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommentContainer.prototype.render = function () {
        var _a = this.props, renderComment = _a.renderComment, props = __rest(_a, ["renderComment"]);
        return renderComment(props);
    };
    return CommentContainer;
}(React.Component));
export default connect(mapStateToProps)(CommentContainer);
//# sourceMappingURL=Comment.js.map