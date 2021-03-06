import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import CommentLayout from './Layout';
import HeaderItems from './Header';
import FooterItems from './Footer';
import { Content } from '../styled/CommentStyles';
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comment.prototype.render = function () {
        var _a = this.props, actions = _a.actions, author = _a.author, avatar = _a.avatar, children = _a.children, content = _a.content, edited = _a.edited, errorActions = _a.errorActions, errorIconLabel = _a.errorIconLabel, highlighted = _a.highlighted, isError = _a.isError, isSaving = _a.isSaving, restrictedTo = _a.restrictedTo, savingText = _a.savingText, time = _a.time, type = _a.type, id = _a.id;
        var headerProps = {
            author: author,
            edited: edited,
            isError: isError,
            isSaving: isSaving,
            restrictedTo: restrictedTo,
            savingText: savingText,
            time: time,
            type: type,
        };
        var footerProps = {
            actions: actions,
            errorActions: errorActions,
            errorIconLabel: errorIconLabel,
            isError: isError,
            isSaving: isSaving,
        };
        var layoutContent = (React.createElement("div", null,
            React.createElement(HeaderItems, __assign({}, headerProps)),
            React.createElement(Content, { isDisabled: isSaving || isError }, content),
            React.createElement(FooterItems, __assign({}, footerProps))));
        return (React.createElement(CommentLayout, { id: id, avatar: avatar, content: layoutContent, highlighted: highlighted }, children));
    };
    Comment.defaultProps = {
        actions: [],
        restrictedTo: '',
        highlighted: false,
        isSaving: false,
        savingText: 'Sending...',
        isError: false,
        errorActions: [],
        errorIconLabel: '',
    };
    return Comment;
}(Component));
export default Comment;
//# sourceMappingURL=Comment.js.map