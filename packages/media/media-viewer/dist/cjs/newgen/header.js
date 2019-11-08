"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_client_1 = require("@atlaskit/media-client");
var deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
var media_ui_1 = require("@atlaskit/media-ui");
var react_intl_1 = require("react-intl");
var domain_1 = require("./domain");
var styled_1 = require("./styled");
var media_type_icon_1 = require("./media-type-icon");
var error_1 = require("./error");
var download_1 = require("./download");
var initialState = {
    item: domain_1.Outcome.pending(),
};
var Header = /** @class */ (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.renderDownload = function () {
            var item = _this.state.item;
            var _a = _this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
            return item.match({
                pending: function () { return download_1.DisabledToolbarDownloadButton; },
                failed: function () { return download_1.DisabledToolbarDownloadButton; },
                successful: function (item) { return (React.createElement(download_1.ToolbarDownloadButton, { state: item, identifier: identifier, mediaClient: mediaClient })); },
            });
        };
        _this.renderSize = function (item) {
            if (item.size) {
                return _this.renderSeparator() + media_ui_1.toHumanReadableMediaSize(item.size);
            }
            else {
                return '';
            }
        };
        _this.renderSeparator = function () {
            return ' · ';
        };
        _this.renderFileTypeText = function (mediaType) {
            var mediaTypeTranslationMap = {
                doc: media_ui_1.messages.document,
                audio: media_ui_1.messages.audio,
                video: media_ui_1.messages.video,
                image: media_ui_1.messages.image,
                unknown: media_ui_1.messages.unknown,
            };
            var message = mediaTypeTranslationMap[mediaType || 'unknown'];
            // Defaulting to unknown again since backend has more mediaTypes than the current supported ones
            return React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, message || media_ui_1.messages.unknown));
        };
        _this.getMediaIcon = function (mediaType) {
            return React.createElement(media_type_icon_1.MediaTypeIcon, { type: mediaType });
        };
        return _this;
    }
    Header.prototype.UNSAFE_componentWillUpdate = function (nextProps) {
        if (this.needsReset(this.props, nextProps)) {
            this.release();
            this.init(nextProps);
        }
    };
    Header.prototype.componentDidMount = function () {
        this.init(this.props);
    };
    Header.prototype.componentWillUnmount = function () {
        this.release();
    };
    Header.prototype.init = function (props) {
        var _this = this;
        this.setState(initialState, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var mediaClient, identifier, _a, name_1, fileState, id, _b;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        mediaClient = props.mediaClient, identifier = props.identifier;
                        if (media_client_1.isExternalImageIdentifier(identifier)) {
                            _a = identifier.name, name_1 = _a === void 0 ? identifier.dataURI : _a;
                            fileState = {
                                status: 'processing',
                                id: name_1,
                                mediaType: 'image',
                                mimeType: 'image/',
                                name: name_1,
                                representations: {},
                                size: 0,
                            };
                            this.setState({
                                item: domain_1.Outcome.successful(fileState),
                            });
                            return [2 /*return*/];
                        }
                        if (!(typeof identifier.id === 'string')) return [3 /*break*/, 1];
                        _b = identifier.id;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, identifier.id];
                    case 2:
                        _b = _c.sent();
                        _c.label = 3;
                    case 3:
                        id = _b;
                        this.subscription = mediaClient.file
                            .getFileState(id, {
                            collectionName: identifier.collectionName,
                        })
                            .subscribe({
                            next: function (file) {
                                _this.setState({
                                    item: domain_1.Outcome.successful(file),
                                });
                            },
                            error: function (err) {
                                _this.setState({
                                    item: domain_1.Outcome.failed(error_1.createError('metadataFailed', err)),
                                });
                            },
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Header.prototype.render = function () {
        return (React.createElement(styled_1.Header, { className: media_ui_1.hideControlsClassName },
            React.createElement(styled_1.LeftHeader, null, this.renderMetadata()),
            React.createElement(styled_1.RightHeader, null, this.renderDownload())));
    };
    Header.prototype.renderMetadata = function () {
        var _this = this;
        var item = this.state.item;
        return item.match({
            successful: function (item) { return _this.renderMetadataLayout(item); },
            pending: function () { return null; },
            failed: function () { return null; },
        });
    };
    Header.prototype.renderMetadataLayout = function (item) {
        if (item.status === 'processed' || item.status === 'processing') {
            return (React.createElement(styled_1.MetadataWrapper, null,
                React.createElement(styled_1.MetadataIconWrapper, null, this.getMediaIcon(item.mediaType)),
                React.createElement(styled_1.MedatadataTextWrapper, null,
                    React.createElement(styled_1.MetadataFileName, null, item.name || React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.unknown))),
                    React.createElement(styled_1.MetadataSubText, null,
                        this.renderFileTypeText(item.mediaType),
                        this.renderSize(item)))));
        }
        else {
            return null;
        }
    };
    Header.prototype.needsReset = function (propsA, propsB) {
        return (!deep_equal_1.default(propsA.identifier, propsB.identifier) ||
            propsA.mediaClient !== propsB.mediaClient);
    };
    Header.prototype.release = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return Header;
}(React.Component));
exports.Header = Header;
exports.default = react_intl_1.injectIntl(Header);
//# sourceMappingURL=header.js.map