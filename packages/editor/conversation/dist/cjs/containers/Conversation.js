"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_redux_1 = require("react-redux");
var Conversation_1 = tslib_1.__importDefault(require("../components/Conversation"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var actions_1 = require("../internal/actions");
var selectors_1 = require("../internal/selectors");
var uuid_1 = require("../internal/uuid");
var mapStateToProps = function (state, ownProps) {
    var id = ownProps.id, localId = ownProps.localId, objectId = ownProps.objectId, containerId = ownProps.containerId;
    var conversation = selectors_1.getConversation(state, id || localId);
    var comments = selectors_1.getComments(state, id || localId);
    var user = selectors_1.getUser(state);
    return tslib_1.__assign(tslib_1.__assign({}, ownProps), { conversation: conversation,
        comments: comments,
        objectId: objectId,
        containerId: containerId,
        user: user });
};
var mapDispatchToProps = function (dispatch, _a) {
    var provider = _a.provider;
    return ({
        onAddComment: function (conversationId, parentId, value, localId, onSuccess) {
            dispatch(actions_1.addComment(conversationId, parentId, value, localId, provider, onSuccess));
        },
        onUpdateComment: function (conversationId, commentId, value, onSuccess) {
            dispatch(actions_1.updateComment(conversationId, commentId, value, provider, onSuccess));
        },
        onDeleteComment: function (conversationId, commentId, onSuccess) {
            dispatch(actions_1.deleteComment(conversationId, commentId, provider, onSuccess));
        },
        onRevertComment: function (conversationId, commentId) {
            dispatch(actions_1.revertComment(conversationId, commentId, provider));
        },
        onHighlightComment: function (_event, commentId) {
            dispatch({ type: actions_1.HIGHLIGHT_COMMENT, payload: { commentId: commentId } });
        },
        onUpdateUser: function (user) {
            dispatch(actions_1.updateUser(user, provider));
        },
        onCreateConversation: function (localId, value, meta, objectId, containerId, onSuccess) {
            dispatch(actions_1.createConversation(localId, value, meta, provider, objectId, containerId, onSuccess));
        },
        onEditorChange: function (isLocal, value, conversationId, commentId, meta, objectId, containerId) {
            dispatch(actions_1.saveDraft(isLocal, value, conversationId, commentId, meta, provider, objectId, containerId));
        },
    });
};
var ResourcedConversation = analytics_next_1.withAnalyticsEvents()(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Conversation_1.default));
var ConversationContainer = /** @class */ (function (_super) {
    tslib_1.__extends(ConversationContainer, _super);
    function ConversationContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            localId: props.id || uuid_1.uuid.generate(),
        };
        return _this;
    }
    ConversationContainer.prototype.render = function () {
        var _a = this, props = _a.props, localId = _a.state.localId;
        var store = props.provider.store;
        return (React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(ResourcedConversation, tslib_1.__assign({}, props, { localId: localId }))));
    };
    return ConversationContainer;
}(React.Component));
exports.default = ConversationContainer;
//# sourceMappingURL=Conversation.js.map