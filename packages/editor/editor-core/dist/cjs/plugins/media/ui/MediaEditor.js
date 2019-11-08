"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_editor_1 = require("@atlaskit/media-editor");
var media_editor_2 = require("../commands/media-editor");
var MediaEditor = /** @class */ (function (_super) {
    tslib_1.__extends(MediaEditor, _super);
    function MediaEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onUploadStart = function (newFileIdentifier, dimensions) {
            var _a = _this.props.view, state = _a.state, dispatch = _a.dispatch;
            media_editor_2.uploadAnnotation(newFileIdentifier, dimensions)(state, dispatch);
        };
        _this.onClose = function () {
            var _a = _this.props.view, state = _a.state, dispatch = _a.dispatch;
            media_editor_2.closeMediaEditor()(state, dispatch);
        };
        return _this;
    }
    MediaEditor.prototype.render = function () {
        var _a = this.props.mediaEditorState, editor = _a.editor, mediaClientConfig = _a.mediaClientConfig;
        if (!editor || !mediaClientConfig) {
            return null;
        }
        var identifier = editor.identifier;
        return (React.createElement(media_editor_1.SmartMediaEditor, { identifier: identifier, mediaClientConfig: mediaClientConfig, onUploadStart: this.onUploadStart, onClose: this.onClose }));
    };
    return MediaEditor;
}(React.PureComponent));
exports.default = MediaEditor;
//# sourceMappingURL=MediaEditor.js.map