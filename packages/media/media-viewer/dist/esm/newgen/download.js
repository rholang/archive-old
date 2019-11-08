import { __assign } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { messages } from '@atlaskit/media-ui';
import { isErrorFileState, isExternalImageIdentifier, } from '@atlaskit/media-client';
import { DownloadButtonWrapper } from './styled';
import { MediaButton } from '@atlaskit/media-ui';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import { downloadButtonEvent, downloadErrorButtonEvent, } from './analytics/download';
import { channel } from './analytics';
import DownloadIcon from '@atlaskit/icon/glyph/download';
var downloadIcon = React.createElement(DownloadIcon, { label: "Download" });
// TODO: MS-1556
export var DownloadButton = withAnalyticsEvents({
    onClick: function (createEvent, props) {
        var ev = createEvent(props.analyticsPayload);
        ev.fire(channel);
    },
})(MediaButton);
export var createItemDownloader = function (file, mediaClient, collectionName) { return function () {
    var id = file.id;
    var name = !isErrorFileState(file) ? file.name : undefined;
    return mediaClient.file.downloadBinary(id, name, collectionName);
}; };
export var ErrorViewDownloadButton = function (props) {
    var downloadEvent = downloadErrorButtonEvent(props.state, props.err);
    return (React.createElement(DownloadButtonWrapper, null,
        React.createElement(DownloadButton, { analyticsPayload: downloadEvent, appearance: "primary", onClick: createItemDownloader(props.state, props.mediaClient, props.collectionName) },
            React.createElement(FormattedMessage, __assign({}, messages.download)))));
};
export var ToolbarDownloadButton = function (props) {
    var state = props.state, mediaClient = props.mediaClient, identifier = props.identifier;
    var downloadEvent = downloadButtonEvent(state);
    // TODO [MS-1731]: make it work for external files as well
    if (isExternalImageIdentifier(identifier)) {
        return null;
    }
    return (React.createElement(DownloadButton, { analyticsPayload: downloadEvent, appearance: 'toolbar', onClick: createItemDownloader(state, mediaClient, identifier.collectionName), iconBefore: downloadIcon }));
};
export var DisabledToolbarDownloadButton = (React.createElement(MediaButton, { appearance: 'toolbar', isDisabled: true, iconBefore: downloadIcon }));
//# sourceMappingURL=download.js.map