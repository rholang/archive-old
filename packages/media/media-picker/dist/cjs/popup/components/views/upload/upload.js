"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var media_card_1 = require("@atlaskit/media-card");
var media_client_1 = require("@atlaskit/media-client");
var constants_1 = require("@atlaskit/media-client/constants");
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var flag_1 = tslib_1.__importStar(require("@atlaskit/flag"));
var annotate_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/annotate"));
var trash_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/trash"));
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/error"));
var react_intl_1 = require("react-intl");
var modal_dialog_1 = tslib_1.__importStar(require("@atlaskit/modal-dialog"));
var media_ui_1 = require("@atlaskit/media-ui");
var webgl_1 = require("../../../tools/webgl");
var dropzone_1 = require("./dropzone");
var fileClick_1 = require("../../../actions/fileClick");
var editorShowImage_1 = require("../../../actions/editorShowImage");
var editRemoteImage_1 = require("../../../actions/editRemoteImage");
var phrases_1 = require("../editor/phrases");
var styled_1 = require("./styled");
var removeFileFromRecents_1 = require("../../../actions/removeFileFromRecents");
var createEditCardAction = function (handler, label) {
    return {
        label: label,
        handler: handler,
        icon: React.createElement(annotate_1.default, { label: phrases_1.menuEdit, size: "medium" }),
    };
};
var createDeleteCardAction = function (handler) {
    return {
        label: phrases_1.menuDelete,
        handler: handler,
        icon: React.createElement(trash_1.default, { label: phrases_1.menuDelete, size: "medium" }),
    };
};
var cardDimension = { width: 162, height: 108 };
var StatelessUploadView = /** @class */ (function (_super) {
    tslib_1.__extends(StatelessUploadView, _super);
    function StatelessUploadView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mounted = false;
        _this.state = {
            hasPopupBeenVisible: false,
            isWebGLWarningFlagVisible: false,
            shouldDismissWebGLWarningFlag: false,
            isLoadingNextPage: false,
        };
        _this.renderDeleteConfirmation = function () {
            var deletionCandidate = _this.state.deletionCandidate;
            var removeFileFromRecents = _this.props.removeFileFromRecents;
            var closeDialog = function () {
                _this.setState({ deletionCandidate: undefined });
            };
            if (!deletionCandidate) {
                return null;
            }
            var id = deletionCandidate.id, occurrenceKey = deletionCandidate.occurrenceKey;
            var actions = [
                {
                    text: 'Delete permanently',
                    onClick: function () {
                        removeFileFromRecents(id, occurrenceKey);
                        closeDialog();
                    },
                },
                {
                    text: 'Cancel',
                    onClick: function () {
                        closeDialog();
                    },
                },
            ];
            return (React.createElement(modal_dialog_1.ModalTransition, null,
                React.createElement(modal_dialog_1.default, { width: "small", appearance: "danger", heading: "Delete forever?", actions: actions, onClose: closeDialog }, "This file is about to be permanently deleted. Once you delete, it's gone for good.")));
        };
        _this.onThresholdReachedListener = function () {
            var isLoadingNextPage = _this.state.isLoadingNextPage;
            if (isLoadingNextPage) {
                return;
            }
            _this.setState({ isLoadingNextPage: true }, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var mediaClient;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, , 2, 3]);
                            mediaClient = this.props.mediaClient;
                            return [4 /*yield*/, mediaClient.collection.loadNextPage(constants_1.RECENTS_COLLECTION)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            if (this.mounted) {
                                this.setState({ isLoadingNextPage: false });
                            }
                            return [7 /*endfinally*/];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        };
        _this.renderLoadingView = function () {
            return (React.createElement(styled_1.SpinnerWrapper, null,
                React.createElement(spinner_1.default, { size: "large" })));
        };
        _this.renderLoadingNextPageView = function () {
            var isLoadingNextPage = _this.state.isLoadingNextPage;
            // We want to always render LoadingNextPageWrapper regardless of the next page loading or not
            // to keep the same wrapper height, this prevents jumping when interacting with the infinite scroll
            return (React.createElement(styled_1.LoadingNextPageWrapper, null, isLoadingNextPage && React.createElement(spinner_1.default, null)));
        };
        _this.renderRecentsView = function (cards) {
            var isWebGLWarningFlagVisible = _this.state.isWebGLWarningFlagVisible;
            return (React.createElement("div", null,
                React.createElement(styled_1.RecentUploadsTitle, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.recent_uploads))),
                React.createElement(styled_1.CardsWrapper, null, cards),
                _this.renderLoadingNextPageView(),
                isWebGLWarningFlagVisible && _this.renderWebGLWarningFlag()));
        };
        _this.renderWebGLWarningFlag = function () {
            var formatMessage = _this.props.intl.formatMessage;
            return (React.createElement(flag_1.FlagGroup, { onDismissed: _this.onFlagDismissed },
                React.createElement(flag_1.default, { description: formatMessage(media_ui_1.messages.webgl_warning_description), icon: React.createElement(error_1.default, { label: "info" }), id: "webgl-warning-flag", title: formatMessage(media_ui_1.messages.unable_to_annotate_image), actions: [
                        {
                            content: formatMessage(media_ui_1.messages.learn_more),
                            onClick: _this.onLearnMoreClicked,
                        },
                    ] })));
        };
        _this.onFlagDismissed = function () {
            _this.setState({ isWebGLWarningFlagVisible: false });
        };
        _this.onLearnMoreClicked = function () {
            _this.setState({ shouldDismissWebGLWarningFlag: true });
            _this.onFlagDismissed();
            window.open('https://get.webgl.org/');
        };
        return _this;
    }
    StatelessUploadView.prototype.componentDidMount = function () {
        this.mounted = true;
    };
    StatelessUploadView.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    StatelessUploadView.prototype.render = function () {
        var _a = this.props, isLoading = _a.isLoading, browserRef = _a.browserRef;
        var cards = this.renderCards();
        var isEmpty = !isLoading && cards.length === 0;
        var contentPart = null;
        if (isLoading) {
            contentPart = this.renderLoadingView();
        }
        else if (!isEmpty) {
            contentPart = this.renderRecentsView(cards);
        }
        var confirmationDialog = this.renderDeleteConfirmation();
        return (React.createElement(media_ui_1.InfiniteScroll, { height: "100%", onThresholdReached: this.onThresholdReachedListener },
            React.createElement(styled_1.Wrapper, null,
                React.createElement(dropzone_1.Dropzone, { isEmpty: isEmpty, browserRef: browserRef }),
                contentPart,
                confirmationDialog)));
    };
    StatelessUploadView.prototype.onAnnotateActionClick = function (callback) {
        var _this = this;
        return function () {
            if (webgl_1.isWebGLAvailable()) {
                callback();
            }
            else {
                _this.showWebGLWarningFlag();
            }
        };
    };
    StatelessUploadView.prototype.renderCards = function () {
        var recentFilesCards = this.recentFilesCards();
        var uploadingFilesCards = this.uploadingFilesCards();
        return uploadingFilesCards
            .concat(recentFilesCards)
            .map(function (_a) {
            var key = _a.key, card = _a.el;
            return (React.createElement(styled_1.CardWrapper, { tabIndex: 0, className: "e2e-recent-upload-card", key: key }, card));
        });
    };
    StatelessUploadView.prototype.uploadingFilesCards = function () {
        var _this = this;
        var _a = this.props, uploads = _a.uploads, onFileClick = _a.onFileClick, mediaClient = _a.mediaClient;
        var itemsKeys = Object.keys(uploads);
        itemsKeys.sort(function (a, b) {
            return uploads[b].index - uploads[a].index;
        });
        var selectedUploadIds = this.props.selectedItems
            .filter(function (item) { return item.serviceName === 'upload'; })
            .map(function (item) { return item.id; });
        return itemsKeys.map(function (key) {
            var item = _this.props.uploads[key];
            var file = item.file;
            var mediaType = media_client_1.getMediaTypeFromMimeType(file.metadata.mimeType);
            var fileMetadata = tslib_1.__assign(tslib_1.__assign({}, file.metadata), { mimeType: mediaType });
            var id = fileMetadata.id, size = fileMetadata.size, name = fileMetadata.name, occurrenceKey = fileMetadata.occurrenceKey;
            var selected = selectedUploadIds.indexOf(id) > -1;
            var serviceFile = {
                id: id,
                mimeType: mediaType,
                name: name,
                size: size,
                occurrenceKey: occurrenceKey,
                date: 0,
            };
            var onClick = function () { return onFileClick(serviceFile, 'upload'); };
            var actions = [
                createDeleteCardAction(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        this.setState({
                            deletionCandidate: { id: id, occurrenceKey: occurrenceKey },
                        });
                        return [2 /*return*/];
                    });
                }); }),
            ]; // TODO [MS-1017]: allow file annotation for uploading files
            var identifier = {
                id: id,
                mediaItemType: 'file',
            };
            return {
                key: id,
                el: (React.createElement(media_card_1.Card, { mediaClientConfig: mediaClient.config, identifier: identifier, dimensions: cardDimension, selectable: true, selected: selected, onClick: onClick, actions: actions })),
            };
        });
    };
    StatelessUploadView.prototype.recentFilesCards = function () {
        var _this = this;
        var _a = this.props, mediaClient = _a.mediaClient, recents = _a.recents, recentsCollection = _a.recentsCollection, selectedItems = _a.selectedItems, onFileClick = _a.onFileClick, onEditRemoteImage = _a.onEditRemoteImage, formatMessage = _a.intl.formatMessage;
        var items = recents.items;
        var selectedRecentFiles = selectedItems
            .filter(function (item) { return item.serviceName === 'recent_files'; })
            .map(function (item) { return item.id; });
        var onClick = function (_a) {
            var mediaItemDetails = _a.mediaItemDetails;
            var fileDetails = mediaItemDetails;
            if (fileDetails) {
                var id = fileDetails.id;
                onFileClick({
                    id: id,
                    date: 0,
                    name: fileDetails.name || '',
                    mimeType: fileDetails.mimeType || '',
                    size: fileDetails.size || 0,
                }, 'recent_files');
            }
        };
        var editHandler = function (mediaItem) {
            if (mediaItem && mediaItem.type === 'file') {
                var _a = mediaItem.details, id = _a.id, name_1 = _a.name;
                if (webgl_1.isWebGLAvailable()) {
                    onEditRemoteImage({
                        id: id,
                        name: name_1 || '',
                    }, recentsCollection);
                }
                else {
                    // WebGL not available - show warning flag
                    _this.showWebGLWarningFlag();
                }
            }
        };
        return items.map(function (item) {
            var id = item.id, occurrenceKey = item.occurrenceKey, details = item.details;
            var selected = selectedRecentFiles.indexOf(id) > -1;
            var actions = [
                createDeleteCardAction(function () {
                    _this.setState({ deletionCandidate: { id: id, occurrenceKey: occurrenceKey } });
                }),
            ];
            if (details.mediaType === 'image') {
                actions.unshift(createEditCardAction(editHandler, formatMessage(media_ui_1.messages.annotate)));
            }
            return {
                key: occurrenceKey + "-" + id,
                el: (React.createElement(media_card_1.Card, { mediaClientConfig: mediaClient.config, identifier: {
                        id: id,
                        mediaItemType: 'file',
                        collectionName: recentsCollection,
                    }, dimensions: cardDimension, selectable: true, selected: selected, onClick: onClick, actions: actions })),
            };
        });
    };
    StatelessUploadView.prototype.showWebGLWarningFlag = function () {
        this.setState({ isWebGLWarningFlagVisible: true });
    };
    return StatelessUploadView;
}(react_1.Component));
exports.StatelessUploadView = StatelessUploadView;
var mapStateToProps = function (state) { return ({
    isLoading: state.view.isLoading,
    recents: state.recents,
    uploads: state.uploads,
    selectedItems: state.selectedItems,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onFileClick: function (serviceFile, serviceName) {
        return dispatch(fileClick_1.fileClick(serviceFile, serviceName));
    },
    onEditorShowImage: function (file, dataUri) {
        return dispatch(editorShowImage_1.editorShowImage(dataUri, file));
    },
    onEditRemoteImage: function (file, collectionName) {
        return dispatch(editRemoteImage_1.editRemoteImage(file, collectionName));
    },
    removeFileFromRecents: function (id, occurrenceKey) {
        return dispatch(removeFileFromRecents_1.removeFileFromRecents(id, occurrenceKey));
    },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_intl_1.injectIntl(StatelessUploadView));
//# sourceMappingURL=upload.js.map