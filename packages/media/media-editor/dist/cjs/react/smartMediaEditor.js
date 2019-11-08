"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var v4_1 = tslib_1.__importDefault(require("uuid/v4"));
var react_intl_1 = require("react-intl");
var analytics_next_1 = require("@atlaskit/analytics-next");
// Importing from own entry-point, since we dont' want to bring whole media-client at this point
var constants_1 = require("@atlaskit/media-client/constants");
var media_ui_1 = require("@atlaskit/media-ui");
var modal_dialog_1 = tslib_1.__importStar(require("@atlaskit/modal-dialog"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var editorView_1 = tslib_1.__importDefault(require("./editorView/editorView"));
var styled_1 = require("./styled");
var util_1 = require("../util");
var errorView_1 = tslib_1.__importDefault(require("./editorView/errorView/errorView"));
var version_json_1 = require("../version.json");
exports.convertFileNameToPng = function (fileName) {
    if (!fileName) {
        return 'annotated-image.png';
    }
    if (fileName.endsWith('.png')) {
        return fileName;
    }
    else {
        if (fileName.lastIndexOf('.') === 0 || fileName.lastIndexOf('.') === -1) {
            return fileName + ".png";
        }
        else {
            return fileName.substring(0, fileName.lastIndexOf('.')) + ".png";
        }
    }
};
var SmartMediaEditor = /** @class */ (function (_super) {
    tslib_1.__extends(SmartMediaEditor, _super);
    function SmartMediaEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false,
            hasBeenEdited: false,
            closeIntent: false,
        };
        _this.getFile = function (identifier) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var mediaClient, collectionName, occurrenceKey, id, getFileSubscription;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mediaClient = this.props.mediaClient;
                        collectionName = identifier.collectionName, occurrenceKey = identifier.occurrenceKey;
                        return [4 /*yield*/, identifier.id];
                    case 1:
                        id = _a.sent();
                        getFileSubscription = mediaClient.file
                            .getFileState(id, { collectionName: collectionName, occurrenceKey: occurrenceKey })
                            .subscribe({
                            next: function (state) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var name, preview, status, value, imageUrl;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (state.status === 'error') {
                                                this.onError(state.message);
                                                this.getFileUnsubscribeTimeoutId = window.setTimeout(function () { return getFileSubscription.unsubscribe(); }, 0);
                                                return [2 /*return*/];
                                            }
                                            name = state.name, preview = state.preview, status = state.status;
                                            this.fileName = name;
                                            if (!(status === 'processed')) return [3 /*break*/, 1];
                                            this.setRemoteImageUrl(identifier);
                                            this.getFileUnsubscribeTimeoutId = window.setTimeout(function () { return getFileSubscription.unsubscribe(); }, 0);
                                            return [3 /*break*/, 6];
                                        case 1:
                                            if (!preview) return [3 /*break*/, 6];
                                            return [4 /*yield*/, preview];
                                        case 2:
                                            value = (_a.sent()).value;
                                            if (!(value instanceof Blob)) return [3 /*break*/, 4];
                                            return [4 /*yield*/, util_1.fileToBase64(value)];
                                        case 3:
                                            imageUrl = _a.sent();
                                            this.setState({
                                                imageUrl: imageUrl,
                                            });
                                            return [3 /*break*/, 5];
                                        case 4:
                                            this.setState({
                                                imageUrl: value,
                                            });
                                            _a.label = 5;
                                        case 5:
                                            this.getFileUnsubscribeTimeoutId = window.setTimeout(function () { return getFileSubscription.unsubscribe(); }, 0);
                                            _a.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); },
                            error: function (error) {
                                _this.onError(error);
                            },
                        });
                        this.getFileSubscription = getFileSubscription;
                        return [2 /*return*/];
                }
            });
        }); };
        _this.setRemoteImageUrl = function (identifier) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var mediaClient, id, imageUrl;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mediaClient = this.props.mediaClient;
                        return [4 /*yield*/, identifier.id];
                    case 1:
                        id = _a.sent();
                        return [4 /*yield*/, mediaClient.getImageUrl(id, {
                                collection: identifier.collectionName,
                                mode: 'full-fit',
                            })];
                    case 2:
                        imageUrl = _a.sent();
                        this.setState({
                            imageUrl: imageUrl,
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.copyFileToUserCollection = function (fileId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, userAuthProvider, authProvider, file, collectionName, source, destination;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.props, _b = _a.mediaClient, _c = _b.config, userAuthProvider = _c.userAuthProvider, authProvider = _c.authProvider, file = _b.file, collectionName = _a.identifier.collectionName;
                        if (!userAuthProvider) return [3 /*break*/, 2];
                        source = {
                            id: fileId,
                            collection: collectionName,
                            authProvider: authProvider,
                        };
                        destination = {
                            collection: constants_1.RECENTS_COLLECTION,
                            authProvider: userAuthProvider,
                            occurrenceKey: v4_1.default(),
                        };
                        return [4 /*yield*/, file.copyFile(source, destination)];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.onSave = function (imageData, dimensions) {
            var fileName = _this.fileName;
            var _a = _this.props, mediaClient = _a.mediaClient, identifier = _a.identifier, onUploadStart = _a.onUploadStart, onFinish = _a.onFinish, formatMessage = _a.intl.formatMessage;
            var hasBeenEdited = _this.state.hasBeenEdited;
            var collectionName = identifier.collectionName;
            var uploadableFile = {
                content: imageData,
                collection: collectionName,
                name: exports.convertFileNameToPng(fileName),
            };
            var id = v4_1.default();
            var occurrenceKey = v4_1.default();
            var touchedFiles = mediaClient.file.touchFiles([
                {
                    fileId: id,
                    collection: collectionName,
                    occurrenceKey: occurrenceKey,
                },
            ], collectionName);
            var deferredUploadId = touchedFiles.then(function (touchedFiles) { return touchedFiles.created[0].uploadId; });
            var uploadableFileUpfrontIds = {
                id: id,
                deferredUploadId: deferredUploadId,
                occurrenceKey: occurrenceKey,
            };
            var uploadingFileState = mediaClient.file.upload(uploadableFile, undefined, uploadableFileUpfrontIds);
            var newFileIdentifier = {
                id: id,
                collectionName: collectionName,
                mediaItemType: 'file',
                occurrenceKey: occurrenceKey,
            };
            var timeStarted = Date.now();
            util_1.fireAnalyticsEvent({
                eventType: 'ui',
                action: 'clicked',
                actionSubject: 'button',
                actionSubjectId: 'saveButton',
                attributes: {
                    annotated: hasBeenEdited,
                },
            }, _this.props.createAnalyticsEvent);
            var uploadingFileStateSubscription = uploadingFileState.subscribe({
                next: function (fileState) {
                    if (fileState.status === 'processing') {
                        _this.copyFileToUserCollection(fileState.id).then(function () {
                            if (onFinish) {
                                onFinish(newFileIdentifier);
                            }
                            util_1.fireAnalyticsEvent({
                                eventType: 'track',
                                action: 'uploaded',
                                actionSubject: 'media',
                                actionSubjectId: id,
                                attributes: {
                                    status: 'success',
                                    fileStatus: fileState.status,
                                    fileMediatype: fileState.mediaType,
                                    fileMimetype: fileState.mimeType,
                                    fileSize: fileState.size,
                                    uploadDurationMsec: Date.now() - timeStarted,
                                    annotated: hasBeenEdited,
                                },
                            }, _this.props.createAnalyticsEvent);
                            _this.uploadFileUnsubscribeTimeoutId = window.setTimeout(function () { return uploadingFileStateSubscription.unsubscribe(); }, 0);
                        });
                    }
                    else if (fileState.status === 'failed-processing' ||
                        fileState.status === 'error') {
                        _this.onError(formatMessage(media_ui_1.messages.could_not_save_image));
                        _this.uploadFileUnsubscribeTimeoutId = window.setTimeout(function () { return uploadingFileStateSubscription.unsubscribe(); }, 0);
                        util_1.fireAnalyticsEvent({
                            eventType: 'track',
                            action: 'uploaded',
                            actionSubject: 'media',
                            actionSubjectId: id,
                            attributes: {
                                status: 'fail',
                                failReason: formatMessage(media_ui_1.messages.could_not_save_image),
                                fileStatus: fileState.status,
                                uploadDurationMsec: Date.now() - timeStarted,
                                annotated: hasBeenEdited,
                            },
                        }, _this.props.createAnalyticsEvent);
                    }
                },
            });
            if (onUploadStart) {
                onUploadStart(newFileIdentifier, dimensions);
            }
        };
        _this.onAnyEdit = function (tool, shapeParameters) {
            var hasBeenEdited = _this.state.hasBeenEdited;
            util_1.fireAnalyticsEvent({
                eventType: 'ui',
                action: 'annotated',
                actionSubject: 'annotation',
                actionSubjectId: tool,
                attributes: shapeParameters,
            }, _this.props.createAnalyticsEvent);
            if (!hasBeenEdited) {
                _this.setState({ hasBeenEdited: true });
            }
        };
        _this.closeConfirmationDialog = function () {
            _this.setState({ closeIntent: false });
        };
        _this.closeAnyway = function () {
            var onClose = _this.props.onClose;
            var hasBeenEdited = _this.state.hasBeenEdited;
            _this.closeConfirmationDialog();
            util_1.fireAnalyticsEvent({
                eventType: 'ui',
                action: 'clicked',
                actionSubject: 'button',
                actionSubjectId: 'confirmCancelButton',
                attributes: {
                    annotated: hasBeenEdited,
                },
            }, _this.props.createAnalyticsEvent);
            if (onClose) {
                onClose();
            }
        };
        _this.renderDeleteConfirmation = function () {
            var formatMessage = _this.props.intl.formatMessage;
            var closeIntent = _this.state.closeIntent;
            if (closeIntent) {
                var actions = [
                    {
                        text: formatMessage(media_ui_1.messages.annotate_confirmation_close_anyway),
                        onClick: _this.closeAnyway,
                    },
                    {
                        text: formatMessage(media_ui_1.messages.cancel),
                        onClick: _this.closeConfirmationDialog,
                    },
                ];
                return (React.createElement(modal_dialog_1.ModalTransition, null,
                    React.createElement(modal_dialog_1.default, { width: "small", appearance: "danger", heading: formatMessage(media_ui_1.messages.annotate_confirmation_heading), actions: actions, onClose: _this.closeConfirmationDialog }, formatMessage(media_ui_1.messages.annotate_confirmation_content))));
            }
            return null;
        };
        _this.onCancel = function (input) {
            var hasBeenEdited = _this.state.hasBeenEdited;
            var onClose = _this.props.onClose;
            util_1.fireAnalyticsEvent({
                eventType: 'ui',
                action: 'clicked',
                actionSubject: 'button',
                actionSubjectId: 'cancelButton',
                attributes: {
                    annotated: hasBeenEdited,
                    input: input,
                },
            }, _this.props.createAnalyticsEvent);
            if (hasBeenEdited) {
                _this.setState({ closeIntent: true });
            }
            else if (onClose) {
                onClose();
            }
        };
        _this.onError = function (error) {
            _this.setState({
                hasError: true,
                errorMessage: error,
            });
        };
        _this.clickShellNotPass = function (e) {
            // Stop click from propagating back to the editor.
            // Without it editor will get focus and apply all the key events
            e.stopPropagation();
        };
        _this.renderLoading = function () {
            return (React.createElement(styled_1.SpinnerWrapper, null,
                React.createElement(spinner_1.default, { size: "large", invertColor: true })));
        };
        _this.renderEditor = function (imageUrl) {
            var EditorViewWithAnalyticsContext = analytics_next_1.withAnalyticsContext({
                attributes: {
                    annotated: _this.state.hasBeenEdited,
                },
            })(editorView_1.default);
            return (React.createElement(EditorViewWithAnalyticsContext, { imageUrl: imageUrl, onSave: _this.onSave, onCancel: _this.onCancel, onError: _this.onError, onAnyEdit: _this.onAnyEdit }));
        };
        _this.renderError = function (error) {
            var onClose = _this.props.onClose;
            if (error instanceof Error) {
                error = error.message;
            }
            return React.createElement(errorView_1.default, { message: error, onCancel: onClose || (function () { }) });
        };
        return _this;
    }
    SmartMediaEditor.prototype.componentDidMount = function () {
        var identifier = this.props.identifier;
        this.getFile(identifier);
    };
    SmartMediaEditor.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var _a = this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
        if (nextProps.identifier.id !== identifier.id ||
            nextProps.mediaClient !== mediaClient) {
            this.getFile(nextProps.identifier);
        }
    };
    SmartMediaEditor.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.getFileUnsubscribeTimeoutId);
        window.clearTimeout(this.uploadFileUnsubscribeTimeoutId);
        var _a = this, getFileSubscription = _a.getFileSubscription, uploadFileSubscription = _a.uploadFileSubscription;
        if (getFileSubscription) {
            getFileSubscription.unsubscribe();
        }
        if (uploadFileSubscription) {
            uploadFileSubscription.unsubscribe();
        }
    };
    SmartMediaEditor.prototype.render = function () {
        var _this = this;
        var _a = this.state, imageUrl = _a.imageUrl, hasError = _a.hasError, errorMessage = _a.errorMessage;
        var content = hasError
            ? this.renderError(errorMessage)
            : imageUrl
                ? this.renderEditor(imageUrl)
                : this.renderLoading();
        return (React.createElement(styled_1.Blanket, { onClick: this.clickShellNotPass },
            this.renderDeleteConfirmation(),
            React.createElement(media_ui_1.Shortcut, { keyCode: 27, handler: function () { return _this.onCancel('esc'); } }),
            content));
    };
    SmartMediaEditor.contextTypes = {
        intl: react_intl_1.intlShape,
    };
    return SmartMediaEditor;
}(React.Component));
exports.SmartMediaEditor = SmartMediaEditor;
var default_1 = /** @class */ (function (_super) {
    tslib_1.__extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        var Component = analytics_next_1.withAnalyticsContext({
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        })(analytics_next_1.withAnalyticsEvents()(react_intl_1.injectIntl(SmartMediaEditor)));
        var content = React.createElement(Component, tslib_1.__assign({}, this.props));
        return this.context.intl ? (content) : (React.createElement(react_intl_1.IntlProvider, { locale: "en" }, content));
    };
    return default_1;
}(React.Component));
exports.default = default_1;
//# sourceMappingURL=smartMediaEditor.js.map