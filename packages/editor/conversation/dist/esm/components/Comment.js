import { __assign, __awaiter, __extends, __generator, __makeTemplateObject, __read, __rest, __spread } from "tslib";
import AkAvatar from '@atlaskit/avatar';
import AkComment, { CommentAction, CommentAuthor, CommentTime, } from '@atlaskit/comment';
import { WithProviders } from '@atlaskit/editor-common';
import { ConnectedReactionsView } from '@atlaskit/reactions';
import { ReactRenderer } from '@atlaskit/renderer';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as React from 'react';
import styled from 'styled-components';
import CommentContainer from '../containers/Comment';
import { actionSubjectIds, eventTypes, fireEvent, trackEventActions, } from '../internal/analytics';
import Editor from './Editor';
export var DeletedMessage = function (_a) {
    var isAuthor = _a.isAuthor;
    return isAuthor ? (React.createElement("em", null, "Comment deleted by the author")) : (React.createElement("em", null, "Comment deleted by admin"));
};
var commentChanged = function (oldComment, newComment) {
    if (oldComment.state !== newComment.state) {
        return true;
    }
    if (oldComment.deleted !== newComment.deleted) {
        return true;
    }
    return false;
};
var userChanged = function (oldUser, newUser) {
    if (oldUser === void 0) { oldUser = { id: '' }; }
    if (newUser === void 0) { newUser = { id: '' }; }
    return oldUser.id !== newUser.id;
};
var Reactions = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 20px;\n  & > div {\n    height: 20px;\n  }\n"], ["\n  height: 20px;\n  & > div {\n    height: 20px;\n  }\n"])));
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(props) {
        var _this = _super.call(this, props) || this;
        _this.dispatch = function (dispatch) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var handler = _this.props[dispatch];
            if (handler) {
                handler.apply(handler, args);
                _this.setState({
                    lastDispatch: { handler: dispatch, args: args },
                });
            }
        };
        _this.onReply = function (_event, analyticsEvent) {
            var _a = _this.props, objectId = _a.objectId, containerId = _a.containerId;
            analyticsEvent &&
                fireEvent(analyticsEvent, {
                    actionSubjectId: actionSubjectIds.replyButton,
                    objectId: objectId,
                    containerId: containerId,
                });
            _this.setState({
                isReplying: true,
            });
        };
        _this.onSaveReply = function (value) { return __awaiter(_this, void 0, void 0, function () {
            var _a, conversationId, parentComment, sendAnalyticsEvent;
            return __generator(this, function (_b) {
                _a = this.props, conversationId = _a.conversationId, parentComment = _a.comment, sendAnalyticsEvent = _a.sendAnalyticsEvent;
                sendAnalyticsEvent({
                    actionSubjectId: actionSubjectIds.saveButton,
                });
                this.dispatch('onAddComment', conversationId, parentComment.commentId, value, undefined, function (id) {
                    sendAnalyticsEvent({
                        actionSubjectId: id,
                        action: trackEventActions.created,
                        eventType: eventTypes.TRACK,
                        actionSubject: 'comment',
                        attributes: {
                            nestedDepth: (parentComment.nestedDepth || 0) + 1,
                        },
                    });
                });
                this.setState({
                    isReplying: false,
                });
                return [2 /*return*/];
            });
        }); };
        _this.onCancelReply = function () {
            _this.props.sendAnalyticsEvent({
                actionSubjectId: actionSubjectIds.cancelButton,
            });
            _this.setState({
                isReplying: false,
            });
        };
        _this.onDelete = function (_value, analyticsEvent) {
            var _a = _this.props, _b = _a.comment, nestedDepth = _b.nestedDepth, commentId = _b.commentId, objectId = _a.objectId, containerId = _a.containerId, conversationId = _a.conversationId, sendAnalyticsEvent = _a.sendAnalyticsEvent;
            analyticsEvent &&
                fireEvent(analyticsEvent, {
                    actionSubjectId: actionSubjectIds.deleteButton,
                    objectId: objectId,
                    containerId: containerId,
                });
            _this.dispatch('onDeleteComment', conversationId, commentId, function (id) {
                sendAnalyticsEvent({
                    actionSubjectId: id,
                    action: trackEventActions.deleted,
                    eventType: eventTypes.TRACK,
                    actionSubject: 'comment',
                    attributes: {
                        nestedDepth: nestedDepth || 0,
                    },
                });
            });
        };
        _this.onEdit = function (_value, analyticsEvent) {
            var _a = _this.props, objectId = _a.objectId, containerId = _a.containerId;
            analyticsEvent &&
                fireEvent(analyticsEvent, {
                    actionSubjectId: actionSubjectIds.editButton,
                    objectId: objectId,
                    containerId: containerId,
                });
            _this.setState({
                isEditing: true,
            });
        };
        _this.handleCommentEditorChange = function (value) {
            var comment = _this.props.comment;
            _this.dispatch('onEditorChange', value, comment.commentId);
        };
        _this.onSaveEdit = function (value) { return __awaiter(_this, void 0, void 0, function () {
            var _a, conversationId, comment, sendAnalyticsEvent;
            return __generator(this, function (_b) {
                _a = this.props, conversationId = _a.conversationId, comment = _a.comment, sendAnalyticsEvent = _a.sendAnalyticsEvent;
                sendAnalyticsEvent({
                    actionSubjectId: actionSubjectIds.saveButton,
                });
                this.dispatch('onUpdateComment', conversationId, comment.commentId, value, function (id) {
                    sendAnalyticsEvent({
                        actionSubjectId: id,
                        action: trackEventActions.updated,
                        eventType: eventTypes.TRACK,
                        actionSubject: 'comment',
                        attributes: {
                            nestedDepth: comment.nestedDepth || 0,
                        },
                    });
                });
                this.setState({
                    isEditing: false,
                });
                return [2 /*return*/];
            });
        }); };
        _this.onCancelEdit = function () {
            _this.props.sendAnalyticsEvent({
                actionSubjectId: actionSubjectIds.cancelButton,
            });
            _this.setState({
                isEditing: false,
            });
        };
        _this.onRequestCancel = function (_value, analyticsEvent) {
            var _a = _this.props, comment = _a.comment, onCancel = _a.onCancel, objectId = _a.objectId, containerId = _a.containerId;
            // Invoke optional onCancel hook
            if (onCancel) {
                onCancel();
            }
            analyticsEvent &&
                fireEvent(analyticsEvent, {
                    actionSubjectId: actionSubjectIds.cancelFailedRequestButton,
                    objectId: objectId,
                    containerId: containerId,
                });
            _this.dispatch('onRevertComment', comment.conversationId, comment.commentId);
        };
        _this.onRequestRetry = function (_value, analyticsEvent) {
            var lastDispatch = _this.state.lastDispatch;
            var _a = _this.props, objectId = _a.objectId, containerId = _a.containerId, onRetry = _a.onRetry, _b = _a.comment, localId = _b.localId, isPlaceholder = _b.isPlaceholder;
            if (onRetry && isPlaceholder) {
                return onRetry(localId);
            }
            analyticsEvent &&
                fireEvent(analyticsEvent, {
                    actionSubjectId: actionSubjectIds.retryFailedRequestButton,
                    objectId: objectId,
                    containerId: containerId,
                });
            if (!lastDispatch) {
                return;
            }
            _this.dispatch.apply(_this, __spread([lastDispatch.handler], lastDispatch.args));
        };
        /**
         * Username click handler - pass a User object, returns a handler which will invoke onUserClick with it
         * @param {User} user
         */
        _this.handleUserClick = function (user) { return function () {
            var onUserClick = _this.props.onUserClick;
            if (onUserClick && typeof onUserClick === 'function') {
                onUserClick(user);
            }
        }; };
        _this.handleTimeClick = function (event) {
            var _a = _this.props, comment = _a.comment, onHighlightComment = _a.onHighlightComment, disableScrollTo = _a.disableScrollTo;
            if (!disableScrollTo && comment && onHighlightComment) {
                onHighlightComment(event, comment.commentId);
            }
        };
        _this.state = {
            isEditing: false,
        };
        return _this;
    }
    Comment.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var _a = this.state, isEditing = _a.isEditing, isReplying = _a.isReplying;
        var _b = this.props, isHighlighted = _b.isHighlighted, portal = _b.portal;
        if (nextState.isEditing !== isEditing ||
            nextState.isReplying !== isReplying ||
            nextProps.isHighlighted !== isHighlighted ||
            nextProps.portal !== portal) {
            return true;
        }
        if (commentChanged(this.props.comment, nextProps.comment)) {
            return true;
        }
        if (userChanged(this.props.user, nextProps.user)) {
            return true;
        }
        var _c = this.props.comments, oldComments = _c === void 0 ? [] : _c;
        var _d = nextProps.comments, newComments = _d === void 0 ? [] : _d;
        if (oldComments.length !== newComments.length) {
            return true;
        }
        if (newComments.some(function (newComment) {
            var _a = __read(oldComments.filter(function (oldComment) {
                return oldComment.commentId === newComment.commentId ||
                    oldComment.localId === newComment.localId;
            }), 1), oldComment = _a[0];
            return commentChanged(oldComment, newComment);
        })) {
            return true;
        }
        return false;
    };
    Comment.prototype.getContent = function () {
        var _a = this.props, comment = _a.comment, dataProviders = _a.dataProviders, user = _a.user, renderEditor = _a.renderEditor, disableScrollTo = _a.disableScrollTo, allowFeedbackAndHelpButtons = _a.allowFeedbackAndHelpButtons, onEditorClose = _a.onEditorClose, onEditorOpen = _a.onEditorOpen, portal = _a.portal;
        var isEditing = this.state.isEditing;
        var createdBy = comment.createdBy;
        var isAuthor = user && createdBy && user.id === createdBy.id;
        if (comment.deleted) {
            return React.createElement(DeletedMessage, { isAuthor: isAuthor });
        }
        if (isEditing) {
            return (React.createElement(Editor, { defaultValue: comment.document.adf, isExpanded: true, isEditing: isEditing, onSave: this.onSaveEdit, onCancel: this.onCancelEdit, onClose: onEditorClose, onOpen: onEditorOpen, onChange: this.handleCommentEditorChange, dataProviders: dataProviders, user: user, renderEditor: renderEditor, disableScrollTo: disableScrollTo, allowFeedbackAndHelpButtons: allowFeedbackAndHelpButtons }));
        }
        return (React.createElement(ReactRenderer, { document: comment.document.adf, dataProviders: dataProviders, disableHeadingIDs: true, portal: portal }));
    };
    Comment.prototype.renderComments = function () {
        var _a = this.props, comment = _a.comment, comments = _a.comments, otherCommentProps = __rest(_a, ["comment", "comments"]);
        if (!comments || comments.length === 0) {
            return null;
        }
        return comments.map(function (child) { return (React.createElement(CommentContainer, __assign({ key: child.localId, comment: child, renderComment: function (props) { return React.createElement(Comment, __assign({}, props)); } }, otherCommentProps))); });
    };
    Comment.prototype.renderEditor = function () {
        var isReplying = this.state.isReplying;
        if (!isReplying) {
            return null;
        }
        var _a = this.props, dataProviders = _a.dataProviders, user = _a.user, renderEditor = _a.renderEditor, disableScrollTo = _a.disableScrollTo, allowFeedbackAndHelpButtons = _a.allowFeedbackAndHelpButtons, onEditorClose = _a.onEditorClose, onEditorOpen = _a.onEditorOpen;
        return (React.createElement(Editor, { isExpanded: true, onCancel: this.onCancelReply, onSave: this.onSaveReply, dataProviders: dataProviders, onOpen: onEditorOpen, onClose: onEditorClose, onChange: this.handleCommentEditorChange, user: user, renderEditor: renderEditor, disableScrollTo: disableScrollTo, allowFeedbackAndHelpButtons: allowFeedbackAndHelpButtons }));
    };
    Comment.prototype.getActions = function () {
        var _a = this.props, comment = _a.comment, user = _a.user, dataProviders = _a.dataProviders, objectId = _a.objectId, canModerateComment = _a.canModerateComment;
        var isEditing = this.state.isEditing;
        var canReply = !!user && !isEditing && !comment.deleted;
        if (!canReply) {
            return undefined;
        }
        var createdBy = comment.createdBy, commentAri = comment.commentAri;
        var actions = [
            React.createElement(CommentAction, { key: "reply", onClick: this.onReply }, "Reply"),
        ];
        var editAction = (React.createElement(CommentAction, { key: "edit", onClick: this.onEdit }, "Edit"));
        var deleteAction = (React.createElement(CommentAction, { key: "delete", onClick: this.onDelete }, "Delete"));
        if (createdBy && user && user.id === createdBy.id) {
            actions = __spread(actions, [editAction, deleteAction]);
        }
        else if (user && canModerateComment) {
            actions = __spread(actions, [deleteAction]);
        }
        if (objectId &&
            commentAri &&
            dataProviders &&
            dataProviders.hasProvider('reactionsStore') &&
            dataProviders.hasProvider('emojiProvider')) {
            actions = __spread(actions, [
                React.createElement(WithProviders, { key: "reactions", providers: ['emojiProvider', 'reactionsStore'], providerFactory: dataProviders, renderNode: function (_a) {
                        var emojiProvider = _a.emojiProvider, reactionsStore = _a.reactionsStore;
                        return (React.createElement(Reactions, null,
                            React.createElement(ConnectedReactionsView, { store: reactionsStore, containerAri: objectId, ari: commentAri, emojiProvider: emojiProvider })));
                    } }),
            ]);
        }
        return actions;
    };
    Comment.prototype.renderAuthor = function () {
        var _a = this.props, comment = _a.comment, onUserClick = _a.onUserClick;
        var createdBy = comment.createdBy;
        return (React.createElement(CommentAuthor, { onClick: onUserClick && this.handleUserClick(createdBy), href: onUserClick ? '#' : createdBy.profileUrl }, createdBy && createdBy.name));
    };
    Comment.prototype.render = function () {
        var _a = this.props, comment = _a.comment, isHighlighted = _a.isHighlighted, disableScrollTo = _a.disableScrollTo;
        var createdBy = comment.createdBy, commentState = comment.state, error = comment.error;
        var errorProps = {};
        if (error) {
            errorProps.actions = [];
            if (error.canRetry) {
                errorProps.actions = [
                    React.createElement(CommentAction, { key: "retry", onClick: this.onRequestRetry }, "Retry"),
                ];
            }
            errorProps.actions = __spread(errorProps.actions, [
                React.createElement(CommentAction, { key: "cancel", onClick: this.onRequestCancel }, "Cancel"),
            ]);
            errorProps.message = error.message;
        }
        var comments = this.renderComments();
        var editor = this.renderEditor();
        var commentId = disableScrollTo
            ? undefined
            : "comment-" + comment.commentId;
        return (React.createElement(AkComment, { id: commentId, author: this.renderAuthor(), avatar: React.createElement(AkAvatar, { src: createdBy && createdBy.avatarUrl, href: createdBy && createdBy.profileUrl, name: createdBy && createdBy.name, enableTooltip: true }), type: createdBy && createdBy.type, time: React.createElement(CommentTime, { onClick: this.handleTimeClick, href: disableScrollTo ? undefined : "#" + commentId }, distanceInWordsToNow(new Date(comment.createdAt), {
                addSuffix: true,
            })), actions: this.getActions(), content: this.getContent(), isSaving: commentState === 'SAVING', isError: commentState === 'ERROR', errorActions: errorProps.actions, errorIconLabel: errorProps.message, highlighted: isHighlighted }, editor || comments ? (React.createElement("div", null,
            comments,
            editor)) : null));
    };
    return Comment;
}(React.Component));
export default Comment;
var templateObject_1;
//# sourceMappingURL=Comment.js.map