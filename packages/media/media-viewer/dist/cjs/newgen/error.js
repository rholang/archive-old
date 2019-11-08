"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_1 = require("./styled");
var media_ui_1 = require("@atlaskit/media-ui");
var error_images_1 = require("./error-images");
var analytics_next_1 = require("@atlaskit/analytics-next");
var item_viewer_1 = require("./analytics/item-viewer");
var analytics_1 = require("../newgen/analytics");
var errorLoadingFileImage = function (formatMessage) { return (React.createElement(styled_1.ErrorImage, { src: error_images_1.errorLoadingFile, alt: formatMessage(media_ui_1.messages.error_loading_file) })); };
var cannotViewFileImage = function (formatMessage) { return (React.createElement(styled_1.ErrorImage, { src: error_images_1.cannotViewFile, alt: formatMessage(media_ui_1.messages.error_generating_preview) })); };
var getErrorMessage = function (formatMessage, errorName) {
    var messages = {
        metadataFailed: (React.createElement("div", null,
            errorLoadingFileImage(formatMessage),
            React.createElement("p", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.something_went_wrong))),
            React.createElement("p", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.might_be_a_hiccup))))),
        previewFailed: (React.createElement("div", null,
            cannotViewFileImage(formatMessage),
            React.createElement("p", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.couldnt_generate_preview))))),
        unsupported: (React.createElement("div", null,
            cannotViewFileImage(formatMessage),
            React.createElement("p", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.cant_preview_file_type))))),
        idNotFound: (React.createElement("div", null,
            errorLoadingFileImage(formatMessage),
            React.createElement("p", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.item_not_found_in_list))))),
        noPDFArtifactsFound: (React.createElement("div", null,
            cannotViewFileImage(formatMessage),
            React.createElement("p", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.no_pdf_artifacts))))),
        failedProcessing: (React.createElement("div", null,
            errorLoadingFileImage(formatMessage),
            React.createElement("p", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.something_went_wrong))),
            React.createElement("p", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.might_be_a_hiccup))))),
    };
    return messages[errorName];
};
var MediaViewerError = /** @class */ (function () {
    function MediaViewerError(errorName, fileState, innerError) {
        this.errorName = errorName;
        this.fileState = fileState;
        this.innerError = innerError;
    }
    return MediaViewerError;
}());
exports.MediaViewerError = MediaViewerError;
exports.createError = function (name, innerError, fileState) {
    return new MediaViewerError(name, fileState, innerError);
};
var ErrorMessage = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorMessage, _super);
    function ErrorMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(analytics_1.channel);
            }
        };
        return _this;
    }
    ErrorMessage.prototype.componentDidMount = function () {
        var _a = this.props.error, failReason = _a.errorName, fileState = _a.fileState;
        var event = item_viewer_1.mediaPreviewFailedEvent(failReason, fileState);
        this.fireAnalytics(event);
    };
    ErrorMessage.prototype.render = function () {
        var formatMessage = this.props.intl.formatMessage;
        var errorMessage = getErrorMessage(formatMessage, this.props.error.errorName);
        return (React.createElement(styled_1.ErrorMessageWrapper, null,
            errorMessage,
            this.props.children));
    };
    return ErrorMessage;
}(React.Component));
exports.ErrorMessage = ErrorMessage;
exports.default = analytics_next_1.withAnalyticsEvents()(react_intl_1.injectIntl(ErrorMessage));
//# sourceMappingURL=error.js.map