"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_redux_1 = require("react-redux");
var selectors_1 = require("../internal/selectors");
var mapStateToProps = function (state, ownProps) {
    var comments = selectors_1.getComments(state, ownProps.conversationId, ownProps.comment.commentId);
    var isHighlighted = selectors_1.getHighlighted(state) === ownProps.comment.commentId.toString();
    return tslib_1.__assign(tslib_1.__assign({}, ownProps), { comments: comments,
        isHighlighted: isHighlighted });
};
var CommentContainer = /** @class */ (function (_super) {
    tslib_1.__extends(CommentContainer, _super);
    function CommentContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommentContainer.prototype.render = function () {
        var _a = this.props, renderComment = _a.renderComment, props = tslib_1.__rest(_a, ["renderComment"]);
        return renderComment(props);
    };
    return CommentContainer;
}(React.Component));
exports.default = react_redux_1.connect(mapStateToProps)(CommentContainer);
//# sourceMappingURL=Comment.js.map