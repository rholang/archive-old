"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var editor_core_1 = require("@atlaskit/editor-core");
var renderer_1 = require("@atlaskit/renderer");
var editor_common_1 = require("@atlaskit/editor-common");
var emptyDoc = '{ "type": "doc", "version": 1, "content": [] }';
var Document = /** @class */ (function (_super) {
    tslib_1.__extends(Document, _super);
    function Document() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Document.prototype.renderToolbar = function () {
        var _a = this.props, mode = _a.mode, renderToolbar = _a.renderToolbar;
        if (renderToolbar) {
            return (React.createElement(editor_core_1.WithEditorActions, { render: function (actions) { return renderToolbar(mode, actions); } }));
        }
        return;
    };
    Document.prototype.renderTitle = function () {
        var _a = this.props, renderTitle = _a.renderTitle, mode = _a.mode, doc = _a.doc;
        if (renderTitle) {
            return renderTitle(mode, doc);
        }
        return;
    };
    Document.prototype.renderEditor = function () {
        var _a = this.props, doc = _a.doc, editorProps = _a.editorProps;
        var _b = (doc || {}).body, body = _b === void 0 ? emptyDoc : _b;
        return (React.createElement(editor_core_1.EditorContext, null,
            React.createElement(editor_core_1.Editor, tslib_1.__assign({ appearance: "full-page", placeholder: "Write something...", defaultValue: body, primaryToolbarComponents: this.renderToolbar(), contentComponents: this.renderTitle() }, editorProps))));
    };
    Document.prototype.render = function () {
        var _a = this.props, doc = _a.doc, isLoading = _a.isLoading, hasError = _a.hasError, mode = _a.mode, editorProps = _a.editorProps, rendererProps = _a.rendererProps;
        if (hasError) {
            return React.createElement("div", null, "Something went wrong \uD83D\uDE14");
        }
        if (isLoading) {
            return React.createElement("div", null, "Loading document... \uD83D\uDC28");
        }
        switch (mode) {
            case 'create':
            case 'edit':
                return this.renderEditor();
            default:
                var _b = (doc || {}).body, body = _b === void 0 ? emptyDoc : _b;
                var dataProviders = void 0;
                if (editorProps) {
                    var mentionProvider = editorProps.mentionProvider, emojiProvider = editorProps.emojiProvider, mediaProvider = editorProps.mediaProvider;
                    dataProviders = editor_common_1.ProviderFactory.create({
                        mentionProvider: mentionProvider,
                        emojiProvider: emojiProvider,
                        mediaProvider: mediaProvider,
                    });
                }
                return (React.createElement(renderer_1.ReactRenderer, tslib_1.__assign({ dataProviders: dataProviders, document: JSON.parse(body) }, rendererProps)));
        }
    };
    return Document;
}(react_1.Component));
exports.default = Document;
//# sourceMappingURL=document.js.map