"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var modal_dialog_1 = tslib_1.__importStar(require("@atlaskit/modal-dialog"));
var media_client_1 = require("@atlaskit/media-client");
var constants_1 = require("@atlaskit/media-client/constants");
/* Components */
var footer_1 = tslib_1.__importDefault(require("./footer/footer"));
var sidebar_1 = tslib_1.__importDefault(require("./sidebar/sidebar"));
var upload_1 = tslib_1.__importDefault(require("./views/upload/upload"));
var giphyView_1 = tslib_1.__importDefault(require("./views/giphy/giphyView"));
var browser_1 = tslib_1.__importDefault(require("./views/browser/browser"));
var dropzone_1 = require("./dropzone/dropzone");
var mainEditorView_1 = tslib_1.__importDefault(require("./views/editor/mainEditorView"));
/* actions */
var startApp_1 = require("../actions/startApp");
var hidePopup_1 = require("../actions/hidePopup");
var fileUploadsStart_1 = require("../actions/fileUploadsStart");
var fileUploadPreviewUpdate_1 = require("../actions/fileUploadPreviewUpdate");
var fileUploadProgress_1 = require("../actions/fileUploadProgress");
var fileUploadProcessingStart_1 = require("../actions/fileUploadProcessingStart");
var fileUploadEnd_1 = require("../actions/fileUploadEnd");
var fileUploadError_1 = require("../actions/fileUploadError");
var dropzoneDropIn_1 = require("../actions/dropzoneDropIn");
var dropzoneDragIn_1 = require("../actions/dropzoneDragIn");
var dropzoneDragOut_1 = require("../actions/dropzoneDragOut");
var passContext_1 = tslib_1.__importDefault(require("./passContext"));
var styled_1 = require("./styled");
var clipboard_1 = require("../../components/clipboard/clipboard");
var dropzone_2 = require("../../components/dropzone/dropzone");
var browser_2 = require("../../components/browser/browser");
var localUpload_1 = require("../../components/localUpload");
var resetView_1 = require("../actions/resetView");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.browserRef = React.createRef();
        _this.dropzoneRef = React.createRef();
        _this.onDragLeave = function (payload) {
            var onDropzoneDragOut = _this.props.onDropzoneDragOut;
            onDropzoneDragOut(payload.length);
            _this.setDropzoneActive(false);
        };
        _this.onDragEnter = function (payload) {
            var onDropzoneDragIn = _this.props.onDropzoneDragIn;
            onDropzoneDragIn(payload.length);
            _this.setDropzoneActive(true);
        };
        _this.onDrop = function (payload) {
            var _a = _this.props, onDropzoneDropIn = _a.onDropzoneDropIn, onUploadsStart = _a.onUploadsStart;
            onDropzoneDropIn(payload.files.length);
            onUploadsStart(payload);
        };
        _this.setDropzoneActive = function (isDropzoneActive) {
            _this.setState({
                isDropzoneActive: isDropzoneActive,
            });
        };
        _this.renderClipboard = function () {
            var _a = _this.props, onUploadPreviewUpdate = _a.onUploadPreviewUpdate, onUploadStatusUpdate = _a.onUploadStatusUpdate, onUploadProcessing = _a.onUploadProcessing, onUploadEnd = _a.onUploadEnd, onUploadError = _a.onUploadError, tenantUploadParams = _a.tenantUploadParams;
            var config = {
                uploadParams: tenantUploadParams,
                shouldCopyFileToRecents: false,
            };
            return (React.createElement(clipboard_1.Clipboard, { mediaClient: _this.componentMediaClient, config: config, onUploadsStart: _this.onDrop, onPreviewUpdate: onUploadPreviewUpdate, onStatusUpdate: onUploadStatusUpdate, onProcessing: onUploadProcessing, onEnd: onUploadEnd, onError: onUploadError }));
        };
        _this.renderBrowser = function () {
            var _a = _this.props, tenantUploadParams = _a.tenantUploadParams, onUploadsStart = _a.onUploadsStart, onUploadPreviewUpdate = _a.onUploadPreviewUpdate, onUploadStatusUpdate = _a.onUploadStatusUpdate, onUploadProcessing = _a.onUploadProcessing, onUploadEnd = _a.onUploadEnd, onUploadError = _a.onUploadError;
            var config = {
                uploadParams: tenantUploadParams,
                shouldCopyFileToRecents: false,
                multiple: true,
            };
            return (React.createElement(browser_2.Browser, { ref: _this.browserRef, mediaClient: _this.componentMediaClient, config: config, onUploadsStart: onUploadsStart, onPreviewUpdate: onUploadPreviewUpdate, onStatusUpdate: onUploadStatusUpdate, onProcessing: onUploadProcessing, onEnd: onUploadEnd, onError: onUploadError }));
        };
        _this.renderDropzone = function () {
            var _a = _this.props, onUploadPreviewUpdate = _a.onUploadPreviewUpdate, onUploadStatusUpdate = _a.onUploadStatusUpdate, onUploadProcessing = _a.onUploadProcessing, onUploadEnd = _a.onUploadEnd, onUploadError = _a.onUploadError, tenantUploadParams = _a.tenantUploadParams;
            var config = {
                uploadParams: tenantUploadParams,
                shouldCopyFileToRecents: false,
            };
            return (React.createElement(dropzone_2.Dropzone, { ref: _this.dropzoneRef, mediaClient: _this.componentMediaClient, config: config, onUploadsStart: _this.onDrop, onPreviewUpdate: onUploadPreviewUpdate, onStatusUpdate: onUploadStatusUpdate, onProcessing: onUploadProcessing, onEnd: onUploadEnd, onError: onUploadError, onDragEnter: _this.onDragEnter, onDragLeave: _this.onDragLeave }));
        };
        var onStartApp = props.onStartApp, onUploadsStart = props.onUploadsStart, onUploadPreviewUpdate = props.onUploadPreviewUpdate, onUploadStatusUpdate = props.onUploadStatusUpdate, onUploadProcessing = props.onUploadProcessing, onUploadEnd = props.onUploadEnd, onUploadError = props.onUploadError, tenantMediaClient = props.tenantMediaClient, userMediaClient = props.userMediaClient, tenantUploadParams = props.tenantUploadParams;
        _this.state = {
            isDropzoneActive: false,
        };
        // Context that has both auth providers defined explicitly using to provided contexts.
        // Each of the local components using this context will upload first to user's recents
        // and then copy to a tenant's collection.
        var mediaClient = new media_client_1.MediaClient({
            authProvider: tenantMediaClient.config.authProvider,
            userAuthProvider: userMediaClient.config.authProvider,
            cacheSize: tenantMediaClient.config.cacheSize,
        });
        _this.componentMediaClient = mediaClient;
        _this.localUploader = new localUpload_1.LocalUploadComponent(mediaClient, {
            uploadParams: tenantUploadParams,
            shouldCopyFileToRecents: false,
        });
        _this.localUploader.on('uploads-start', onUploadsStart);
        _this.localUploader.on('upload-preview-update', onUploadPreviewUpdate);
        _this.localUploader.on('upload-status-update', onUploadStatusUpdate);
        _this.localUploader.on('upload-processing', onUploadProcessing);
        _this.localUploader.on('upload-end', onUploadEnd);
        _this.localUploader.on('upload-error', onUploadError);
        onStartApp({
            onCancelUpload: function (uploadId) {
                _this.browserRef.current && _this.browserRef.current.cancel(uploadId);
                _this.dropzoneRef.current && _this.dropzoneRef.current.cancel(uploadId);
                _this.localUploader.cancel(uploadId);
            },
        });
        return _this;
    }
    App.prototype.render = function () {
        var _a = this.props, selectedServiceName = _a.selectedServiceName, isVisible = _a.isVisible, onClose = _a.onClose, store = _a.store, proxyReactContext = _a.proxyReactContext;
        var isDropzoneActive = this.state.isDropzoneActive;
        return (React.createElement(modal_dialog_1.ModalTransition, null, isVisible && (React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(modal_dialog_1.default, { onClose: onClose, width: "x-large", isChromeless: true },
                React.createElement(passContext_1.default, { store: store, proxyReactContext: proxyReactContext },
                    React.createElement(styled_1.MediaPickerPopupWrapper, null,
                        React.createElement(styled_1.SidebarWrapper, null,
                            React.createElement(sidebar_1.default, null)),
                        React.createElement(styled_1.ViewWrapper, null,
                            this.renderCurrentView(selectedServiceName),
                            React.createElement(footer_1.default, null)),
                        React.createElement(dropzone_1.Dropzone, { isActive: isDropzoneActive }),
                        React.createElement(mainEditorView_1.default, { localUploader: this.localUploader })),
                    this.renderClipboard(),
                    this.renderDropzone(),
                    this.renderBrowser()))))));
    };
    App.prototype.renderCurrentView = function (selectedServiceName) {
        if (selectedServiceName === 'upload') {
            // We need to create a new context since Cards in recents view need user auth
            var userMediaClient = this.props.userMediaClient;
            return (React.createElement(upload_1.default, { browserRef: this.browserRef, mediaClient: userMediaClient, recentsCollection: constants_1.RECENTS_COLLECTION }));
        }
        else if (selectedServiceName === 'giphy') {
            return React.createElement(giphyView_1.default, null);
        }
        else {
            return React.createElement(browser_1.default, null);
        }
    };
    return App;
}(react_1.Component));
exports.App = App;
var mapStateToProps = function (_a) {
    var view = _a.view, tenantMediaClient = _a.tenantMediaClient, userMediaClient = _a.userMediaClient, config = _a.config;
    return ({
        selectedServiceName: view.service.name,
        isVisible: view.isVisible,
        config: config,
        tenantMediaClient: tenantMediaClient,
        userMediaClient: userMediaClient,
    });
};
var mapDispatchToProps = function (dispatch) { return ({
    onStartApp: function (payload) { return dispatch(startApp_1.startApp(payload)); },
    onUploadsStart: function (payload) {
        return dispatch(fileUploadsStart_1.fileUploadsStart(payload));
    },
    onClose: function () {
        dispatch(resetView_1.resetView());
        dispatch(hidePopup_1.hidePopup());
    },
    onUploadPreviewUpdate: function (payload) {
        return dispatch(fileUploadPreviewUpdate_1.fileUploadPreviewUpdate(payload));
    },
    onUploadStatusUpdate: function (payload) {
        return dispatch(fileUploadProgress_1.fileUploadProgress(payload));
    },
    onUploadProcessing: function (payload) {
        return dispatch(fileUploadProcessingStart_1.fileUploadProcessingStart(payload));
    },
    onUploadEnd: function (payload) {
        return dispatch(fileUploadEnd_1.fileUploadEnd(payload));
    },
    onUploadError: function (payload) {
        return dispatch(fileUploadError_1.fileUploadError(payload));
    },
    onDropzoneDragIn: function (fileCount) { return dispatch(dropzoneDragIn_1.dropzoneDragIn(fileCount)); },
    onDropzoneDragOut: function (fileCount) {
        return dispatch(dropzoneDragOut_1.dropzoneDragOut(fileCount));
    },
    onDropzoneDropIn: function (fileCount) { return dispatch(dropzoneDropIn_1.dropzoneDropIn(fileCount)); },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=app.js.map