"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var media_editor_1 = require("@atlaskit/media-editor");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var deselectItem_1 = require("../../../actions/deselectItem");
var errorView_1 = tslib_1.__importDefault(require("./errorView/errorView"));
var spinnerView_1 = require("./spinnerView/spinnerView");
var editorClose_1 = require("../../../actions/editorClose");
var editorShowError_1 = require("../../../actions/editorShowError");
var styles_1 = require("./styles");
var MainEditorView = /** @class */ (function (_super) {
    tslib_1.__extends(MainEditorView, _super);
    function MainEditorView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderContent = function (editorData) {
            var imageUrl = editorData.imageUrl, originalFile = editorData.originalFile, error = editorData.error;
            if (error) {
                return _this.renderError(error);
            }
            else if (imageUrl && originalFile) {
                return (React.createElement(styles_1.CenterView, null,
                    React.createElement(media_editor_1.EditorView, { imageUrl: imageUrl, onSave: _this.onEditorSave(originalFile), onCancel: _this.onCancel, onError: _this.onEditorError })));
            }
            else {
                return React.createElement(spinnerView_1.SpinnerView, { onCancel: _this.onCancel });
            }
        };
        _this.onEditorError = function (message, retryHandler) {
            _this.props.onShowEditorError({ message: message, retryHandler: retryHandler });
        };
        _this.onEditorSave = function (originalFile) { return function (image) {
            var _a = _this.props, localUploader = _a.localUploader, onDeselectFile = _a.onDeselectFile, onCloseEditor = _a.onCloseEditor;
            var filename = originalFile.name;
            var file = _this.urltoFile(image, filename);
            localUploader.addFiles([file]);
            onDeselectFile(originalFile.id);
            onCloseEditor('Save');
        }; };
        _this.onCancel = function () {
            _this.props.onCloseEditor('Close');
        };
        _this.urltoFile = function (dataurl, filename) {
            var arr = dataurl.split(',');
            var matches = arr[0].match(/:(.*?);/);
            if (!matches || matches.length < 2) {
                throw new Error('Failed to retrieve file from data URL');
            }
            var mime = matches[1];
            var bstr = atob(arr[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            var file = new Blob([u8arr], { type: mime });
            file.name = filename;
            return file;
        };
        return _this;
    }
    MainEditorView.prototype.render = function () {
        var editorData = this.props.editorData;
        if (editorData) {
            return this.renderContent(editorData);
        }
        else {
            return null;
        }
    };
    MainEditorView.prototype.renderError = function (_a) {
        var message = _a.message, retryHandler = _a.retryHandler;
        return (React.createElement(errorView_1.default, { message: message, onRetry: retryHandler, onCancel: this.onCancel }));
    };
    return MainEditorView;
}(react_1.Component));
exports.MainEditorView = MainEditorView;
exports.default = react_redux_1.connect(function (_a) {
    var editorData = _a.editorData;
    return ({ editorData: editorData });
}, function (dispatch) { return ({
    onShowEditorError: function (_a) {
        var message = _a.message, retryHandler = _a.retryHandler;
        return dispatch(editorShowError_1.editorShowError(message, retryHandler));
    },
    onCloseEditor: function (selection) { return dispatch(editorClose_1.editorClose(selection)); },
    onDeselectFile: function (fileId) { return dispatch(deselectItem_1.deselectItem(fileId)); },
}); })(MainEditorView);
//# sourceMappingURL=mainEditorView.js.map