"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var avatar_1 = tslib_1.__importStar(require("@atlaskit/avatar"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var editor_common_1 = require("@atlaskit/editor-common");
var remove_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/remove"));
var textarea_1 = tslib_1.__importDefault(require("@atlaskit/textarea"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var getInlineCommentId = function () { return "inline-comment-" + adf_schema_1.generateUuid(); };
var getCommentValue = function (id) {
    return (window.localStorage.getItem(id) ||
        "This is the comment text for annotation " + id);
};
var InlineComment = /** @class */ (function (_super) {
    tslib_1.__extends(InlineComment, _super);
    function InlineComment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDelete = function () {
            var _a = _this.props, id = _a.comment.id, onDelete = _a.onDelete;
            window.localStorage.removeItem(id);
            onDelete(id);
        };
        return _this;
    }
    InlineComment.prototype.render = function () {
        var comment = this.props.comment;
        return (React.createElement("div", { style: {
                backgroundColor: 'white',
                minHeight: '100px',
                width: '250px',
                overflow: 'hidden',
                margin: '8px',
                padding: '4px',
                boxSizing: 'border-box',
                border: '1px solid #e2e2e2',
            } },
            React.createElement(avatar_1.AvatarItem, { avatar: React.createElement(avatar_1.default, { src: "https://api.adorable.io/avatars/80/chaki@me.com.png", presence: "online" }), key: 'mike@atlassian.com', primaryText: 'Mike Cannon-Brookes', secondaryText: 'mike@atlassian.com' }),
            React.createElement("div", { style: { padding: '8px' } }, getCommentValue(comment.id)),
            React.createElement("div", { style: { padding: '4px' } },
                React.createElement(button_1.default, { appearance: "subtle", onClick: this.onDelete, spacing: "none" },
                    React.createElement(remove_1.default, { label: "remove comment" })))));
    };
    return InlineComment;
}(React.Component));
var ExampleInlineCommentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExampleInlineCommentComponent, _super);
    function ExampleInlineCommentComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            commentingValue: '',
        };
        _this.saveComment = function () {
            // const { onCreate } = this.props;
            var commentingValue = _this.state.commentingValue;
            /*
              Component is responsible for creating the inline comment (sync or async),
              then passes the IC's identifier back to the Editor using onSuccess()
            */
            var id = getInlineCommentId();
            window.localStorage.setItem(id, commentingValue);
            _this.setState({ commentingValue: '' });
            // onCreate(id);
        };
        _this.renderInsertComment = function () {
            var commentingValue = _this.state.commentingValue;
            return (React.createElement("div", { style: {
                    padding: '10px',
                } },
                React.createElement("div", { style: { paddingBottom: '10px' } },
                    React.createElement(textarea_1.default, { onChange: function (event) {
                            return _this.setState({ commentingValue: event.target.value });
                        }, value: commentingValue })),
                React.createElement(button_1.default, { appearance: "primary", onClick: _this.saveComment }, "Save")));
        };
        _this.renderContent = function (comments) {
            var onDelete = _this.props.onDelete;
            if (comments.length) {
                return comments.map(function (comment) { return (React.createElement(InlineComment, { key: comment.id, comment: comment, onDelete: onDelete })); });
            }
            else {
                return _this.renderInsertComment();
            }
        };
        return _this;
    }
    ExampleInlineCommentComponent.prototype.componentWillMount = function () {
        this.setState({
            commentingValue: '',
        });
    };
    ExampleInlineCommentComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.props.dom !== nextProps.dom ||
            this.state.commentingValue !== nextState.commentingValue);
    };
    ExampleInlineCommentComponent.prototype.getStyles = function (showing) {
        return showing
            ? {
                transition: '200ms width ease-in',
            }
            : {
                width: 0,
                visibility: 'hidden',
                transition: '200ms width ease-in',
            };
    };
    ExampleInlineCommentComponent.prototype.render = function () {
        var _a = this.props, dom = _a.dom, annotations = _a.annotations, textSelection = _a.textSelection;
        // we're only interested in inline comments
        // right now, these are the only types of annotations in ADF
        var comments = annotations.filter(function (annotation) { return annotation.type === 'inlineComment'; });
        if (!dom) {
            return;
        }
        return (React.createElement(editor_common_1.Popup, { target: dom, alignY: "bottom", fitHeight: 200, fitWidth: 200, alignX: 'right', offset: [
                dom
                    ? -(window.innerWidth - dom.getBoundingClientRect().right - 50)
                    : 0,
                20,
            ] },
            React.createElement("div", { style: this.getStyles(!!comments.length || !!textSelection) }, this.renderContent(comments))));
    };
    return ExampleInlineCommentComponent;
}(React.Component));
exports.default = ExampleInlineCommentComponent;
//# sourceMappingURL=index.js.map