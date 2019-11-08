"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Layout_1 = tslib_1.__importDefault(require("./Layout"));
var Header_1 = tslib_1.__importDefault(require("./Header"));
var Footer_1 = tslib_1.__importDefault(require("./Footer"));
var CommentStyles_1 = require("../styled/CommentStyles");
var Comment = /** @class */ (function (_super) {
    tslib_1.__extends(Comment, _super);
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
        var layoutContent = (react_1.default.createElement("div", null,
            react_1.default.createElement(Header_1.default, tslib_1.__assign({}, headerProps)),
            react_1.default.createElement(CommentStyles_1.Content, { isDisabled: isSaving || isError }, content),
            react_1.default.createElement(Footer_1.default, tslib_1.__assign({}, footerProps))));
        return (react_1.default.createElement(Layout_1.default, { id: id, avatar: avatar, content: layoutContent, highlighted: highlighted }, children));
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
}(react_1.Component));
exports.default = Comment;
//# sourceMappingURL=Comment.js.map