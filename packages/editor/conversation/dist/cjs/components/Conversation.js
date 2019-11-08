"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Comment_1 = tslib_1.__importDefault(require("../containers/Comment"));
var Comment_2 = tslib_1.__importDefault(require("../components/Comment"));
var Editor_1 = tslib_1.__importDefault(require("./Editor"));
var analytics_1 = require("../internal/analytics");
// This is a stop-gap for preventing the user from losing their work. Eventually
// this will be replaced with drafts/auto-save functionality
function beforeUnloadHandler(e) {
    // The beforeUnload dialog is implemented inconsistently.
    // The following is the most cross-browser approach.
    var confirmationMessage = 'You have an unsaved comment. Are you sure you want to leave without saving?';
    e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    return confirmationMessage; // Gecko, WebKit, Chrome <34
}
var Conversation = /** @class */ (function (_super) {
    tslib_1.__extends(Conversation, _super);
    function Conversation(props) {
        var _this = _super.call(this, props) || this;
        /*
          TODO: Remove me when editor is instrumented
          Only use this method when instrumenting something that isn't instrumented itself (like Editor)
          Once editor is instrumented use the analyticsEvent passed in by editor instead.
      
          nestedDepth is always 0 when using the save handlers in this file.
          Because a new comment created on the conversation itself is always going to be the top comment.
      
          @deprecated
        */
        _this.sendEditorAnalyticsEvent = function (eventData) {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, objectId = _a.objectId, containerId = _a.containerId;
            var analyticsEvent = createAnalyticsEvent({
                actionSubject: 'editor',
                action: 'clicked',
            });
            analytics_1.fireEvent(analyticsEvent, tslib_1.__assign({ objectId: objectId, containerId: containerId }, eventData));
        };
        _this.onCancel = function () {
            _this.sendEditorAnalyticsEvent({
                actionSubjectId: analytics_1.actionSubjectIds.cancelButton,
            });
            if (_this.props.onCancel) {
                _this.props.onCancel();
            }
        };
        _this.onRetry = function (document) { return function (commentLocalId) {
            _this.sendEditorAnalyticsEvent({
                actionSubjectId: analytics_1.actionSubjectIds.retryFailedRequestButton,
            });
            _this.onSave(document, commentLocalId, true);
        }; };
        _this.onSave = function (value, commentLocalId, retry) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, objectId, containerId, id, localId, meta, onAddComment, onCreateConversation, conversation, conversationId;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                _a = this.props, objectId = _a.objectId, containerId = _a.containerId, id = _a.id, localId = _a.localId, meta = _a.meta, onAddComment = _a.onAddComment, onCreateConversation = _a.onCreateConversation, conversation = _a.conversation;
                if (!retry) {
                    this.sendEditorAnalyticsEvent({
                        actionSubjectId: analytics_1.actionSubjectIds.saveButton,
                    });
                }
                if (!id && !commentLocalId && onCreateConversation) {
                    onCreateConversation(localId, value, meta, objectId, containerId, function (id) {
                        _this.sendEditorAnalyticsEvent({
                            actionSubjectId: id,
                            eventType: analytics_1.eventTypes.TRACK,
                            attributes: {
                                nestedDepth: 0,
                            },
                            action: analytics_1.trackEventActions.created,
                            actionSubject: 'comment',
                        });
                    });
                }
                else if (onAddComment) {
                    conversationId = id || conversation.conversationId;
                    onAddComment(conversationId, conversationId, value, commentLocalId, function (id) {
                        _this.sendEditorAnalyticsEvent({
                            actionSubjectId: id,
                            eventType: analytics_1.eventTypes.TRACK,
                            attributes: {
                                nestedDepth: 0,
                            },
                            action: analytics_1.trackEventActions.created,
                            actionSubject: 'comment',
                        });
                    });
                }
                return [2 /*return*/];
            });
        }); };
        _this.onEditorClose = function () {
            if (_this.state.openEditorCount > 0) {
                _this.setState({
                    openEditorCount: _this.state.openEditorCount - 1,
                });
            }
            if (typeof _this.props.onEditorClose === 'function') {
                _this.props.onEditorClose();
            }
        };
        _this.onEditorOpen = function () {
            _this.sendEditorAnalyticsEvent({
                actionSubjectId: analytics_1.actionSubjectIds.createCommentInput,
            });
            _this.setState({
                openEditorCount: _this.state.openEditorCount + 1,
            });
            if (typeof _this.props.onEditorOpen === 'function') {
                _this.props.onEditorOpen();
            }
        };
        _this.onHighlightComment = function (event, commentId) {
            if (typeof _this.props.onHighlightComment === 'function') {
                _this.props.onHighlightComment(event, commentId);
                if (typeof _this.props.onCommentPermalinkClick === 'function') {
                    _this.props.onCommentPermalinkClick(event, commentId);
                }
            }
        };
        _this.handleEditorChange = function (value, commentId) {
            var _a = _this.props, id = _a.id, localId = _a.localId, onEditorChange = _a.onEditorChange, meta = _a.meta, objectId = _a.objectId, containerId = _a.containerId;
            if (onEditorChange) {
                var isLocal = !id;
                onEditorChange(isLocal, value, localId, commentId, meta, objectId, containerId);
            }
        };
        _this.state = {
            openEditorCount: 0,
        };
        return _this;
    }
    Conversation.prototype.renderComments = function () {
        var _this = this;
        var _a = this.props, comments = _a.comments, conversation = _a.conversation, onAddComment = _a.onAddComment, onUpdateComment = _a.onUpdateComment, onDeleteComment = _a.onDeleteComment, onRevertComment = _a.onRevertComment, onUserClick = _a.onUserClick, onCancel = _a.onCancel, user = _a.user, dataProviders = _a.dataProviders, renderEditor = _a.renderEditor, objectId = _a.objectId, containerId = _a.containerId, placeholder = _a.placeholder, disableScrollTo = _a.disableScrollTo, allowFeedbackAndHelpButtons = _a.allowFeedbackAndHelpButtons, portal = _a.portal, canModerateComments = _a.canModerateComments;
        if (!conversation) {
            return;
        }
        var conversationId = conversation.conversationId;
        return (comments || []).map(function (comment) { return (React.createElement(Comment_1.default, { key: comment.commentId, conversationId: conversationId, comment: comment, user: user, onAddComment: onAddComment, onUpdateComment: onUpdateComment, onDeleteComment: onDeleteComment, onRevertComment: onRevertComment, onEditorOpen: _this.onEditorOpen, onEditorClose: _this.onEditorClose, onEditorChange: _this.handleEditorChange, onHighlightComment: _this.onHighlightComment, onRetry: _this.onRetry(comment.document), onCancel: onCancel, onUserClick: onUserClick, dataProviders: dataProviders, renderComment: function (props) { return (React.createElement(Comment_2.default, tslib_1.__assign({}, props, { canModerateComment: canModerateComments }))); }, renderEditor: renderEditor, objectId: objectId, containerId: containerId, placeholder: placeholder, disableScrollTo: disableScrollTo, sendAnalyticsEvent: _this.sendEditorAnalyticsEvent, allowFeedbackAndHelpButtons: allowFeedbackAndHelpButtons, portal: portal })); });
    };
    Conversation.prototype.renderConversationsEditor = function () {
        var _a = this.props, isExpanded = _a.isExpanded, meta = _a.meta, dataProviders = _a.dataProviders, user = _a.user, conversation = _a.conversation, renderEditor = _a.renderEditor, placeholder = _a.placeholder, disableScrollTo = _a.disableScrollTo, allowFeedbackAndHelpButtons = _a.allowFeedbackAndHelpButtons;
        var isInline = !!meta;
        var hasConversation = !!conversation;
        var canReply = !!user && (!isInline || (isExpanded && !hasConversation));
        if (canReply) {
            return (React.createElement(Editor_1.default, { isExpanded: isExpanded, onSave: this.onSave, onCancel: this.onCancel, onOpen: this.onEditorOpen, onClose: this.onEditorClose, onChange: this.handleEditorChange, dataProviders: dataProviders, user: user, renderEditor: renderEditor, placeholder: placeholder, disableScrollTo: disableScrollTo, allowFeedbackAndHelpButtons: allowFeedbackAndHelpButtons }));
        }
        return;
    };
    Conversation.prototype.componentDidUpdate = function () {
        if (!this.props.showBeforeUnloadWarning) {
            return;
        }
        if (this.state.openEditorCount === 0) {
            window.removeEventListener('beforeunload', beforeUnloadHandler);
        }
        else if (this.state.openEditorCount === 1) {
            window.addEventListener('beforeunload', beforeUnloadHandler);
        }
    };
    Conversation.prototype.componentWillUnmount = function () {
        if (this.props.showBeforeUnloadWarning) {
            window.removeEventListener('beforeunload', beforeUnloadHandler);
        }
    };
    Conversation.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            this.renderComments(),
            this.renderConversationsEditor()));
    };
    Conversation.defaultProps = {
        placeholder: 'What do you want to say?',
        onEditorOpen: function () { },
        onEditorClose: function () { },
    };
    return Conversation;
}(React.PureComponent));
exports.default = Conversation;
//# sourceMappingURL=Conversation.js.map