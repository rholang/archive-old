import { __extends } from "tslib";
import * as React from 'react';
import { SmartMediaEditor } from '@atlaskit/media-editor';
import { uploadAnnotation, closeMediaEditor } from '../commands/media-editor';
var MediaEditor = /** @class */ (function (_super) {
    __extends(MediaEditor, _super);
    function MediaEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onUploadStart = function (newFileIdentifier, dimensions) {
            var _a = _this.props.view, state = _a.state, dispatch = _a.dispatch;
            uploadAnnotation(newFileIdentifier, dimensions)(state, dispatch);
        };
        _this.onClose = function () {
            var _a = _this.props.view, state = _a.state, dispatch = _a.dispatch;
            closeMediaEditor()(state, dispatch);
        };
        return _this;
    }
    MediaEditor.prototype.render = function () {
        var _a = this.props.mediaEditorState, editor = _a.editor, mediaClientConfig = _a.mediaClientConfig;
        if (!editor || !mediaClientConfig) {
            return null;
        }
        var identifier = editor.identifier;
        return (React.createElement(SmartMediaEditor, { identifier: identifier, mediaClientConfig: mediaClientConfig, onUploadStart: this.onUploadStart, onClose: this.onClose }));
    };
    return MediaEditor;
}(React.PureComponent));
export default MediaEditor;
//# sourceMappingURL=MediaEditor.js.map