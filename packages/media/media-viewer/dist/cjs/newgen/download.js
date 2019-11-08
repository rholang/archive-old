"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var media_client_1 = require("@atlaskit/media-client");
var styled_1 = require("./styled");
var media_ui_2 = require("@atlaskit/media-ui");
var analytics_next_1 = require("@atlaskit/analytics-next");
var download_1 = require("./analytics/download");
var analytics_1 = require("./analytics");
var download_2 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/download"));
var downloadIcon = React.createElement(download_2.default, { label: "Download" });
// TODO: MS-1556
exports.DownloadButton = analytics_next_1.withAnalyticsEvents({
    onClick: function (createEvent, props) {
        var ev = createEvent(props.analyticsPayload);
        ev.fire(analytics_1.channel);
    },
})(media_ui_2.MediaButton);
exports.createItemDownloader = function (file, mediaClient, collectionName) { return function () {
    var id = file.id;
    var name = !media_client_1.isErrorFileState(file) ? file.name : undefined;
    return mediaClient.file.downloadBinary(id, name, collectionName);
}; };
exports.ErrorViewDownloadButton = function (props) {
    var downloadEvent = download_1.downloadErrorButtonEvent(props.state, props.err);
    return (React.createElement(styled_1.DownloadButtonWrapper, null,
        React.createElement(exports.DownloadButton, { analyticsPayload: downloadEvent, appearance: "primary", onClick: exports.createItemDownloader(props.state, props.mediaClient, props.collectionName) },
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.download)))));
};
exports.ToolbarDownloadButton = function (props) {
    var state = props.state, mediaClient = props.mediaClient, identifier = props.identifier;
    var downloadEvent = download_1.downloadButtonEvent(state);
    // TODO [MS-1731]: make it work for external files as well
    if (media_client_1.isExternalImageIdentifier(identifier)) {
        return null;
    }
    return (React.createElement(exports.DownloadButton, { analyticsPayload: downloadEvent, appearance: 'toolbar', onClick: exports.createItemDownloader(state, mediaClient, identifier.collectionName), iconBefore: downloadIcon }));
};
exports.DisabledToolbarDownloadButton = (React.createElement(media_ui_2.MediaButton, { appearance: 'toolbar', isDisabled: true, iconBefore: downloadIcon }));
//# sourceMappingURL=download.js.map