import { __extends } from "tslib";
import * as React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { Shortcut } from '@atlaskit/media-ui';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { mediaViewerModalEvent } from './analytics/media-viewer';
import { closedEvent } from './analytics/closed';
import { channel } from './analytics/index';
import { List } from './list';
import { Collection } from './collection';
import { Content } from './content';
import { Blanket } from './styled';
var MediaViewerComponent = /** @class */ (function (_super) {
    __extends(MediaViewerComponent, _super);
    function MediaViewerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(channel);
            }
        };
        _this.onShortcutClosed = function () {
            _this.sendClosedEvent('escKey');
            var onClose = _this.props.onClose;
            if (onClose) {
                onClose();
            }
        };
        _this.onContentClose = function (_e, analyticsEvent) {
            var onClose = _this.props.onClose;
            if (analyticsEvent &&
                analyticsEvent.payload &&
                analyticsEvent.payload.actionSubject === 'button') {
                _this.sendClosedEvent('button');
            }
            if (onClose) {
                onClose();
            }
        };
        return _this;
    }
    MediaViewerComponent.prototype.UNSAFE_componentWillMount = function () {
        this.fireAnalytics(mediaViewerModalEvent());
        MediaViewerComponent.startTime = Date.now();
    };
    MediaViewerComponent.prototype.sendClosedEvent = function (input) {
        this.fireAnalytics(closedEvent(input));
    };
    MediaViewerComponent.prototype.render = function () {
        var content = (React.createElement(Blanket, null,
            React.createElement(Shortcut, { keyCode: 27, handler: this.onShortcutClosed }),
            React.createElement(Content, { onClose: this.onContentClose }, this.renderContent())));
        return this.context.intl ? (content) : (React.createElement(IntlProvider, { locale: "en" }, content));
    };
    MediaViewerComponent.prototype.renderContent = function () {
        var _a = this.props, selectedItem = _a.selectedItem, mediaClient = _a.mediaClient, onClose = _a.onClose, itemSource = _a.itemSource;
        var defaultSelectedItem = selectedItem;
        if (itemSource.kind === 'COLLECTION') {
            return (React.createElement(Collection, { pageSize: itemSource.pageSize, defaultSelectedItem: defaultSelectedItem, collectionName: itemSource.collectionName, mediaClient: mediaClient, onClose: onClose }));
        }
        else if (itemSource.kind === 'ARRAY') {
            var items = itemSource.items;
            var firstItem = items[0];
            return (React.createElement(List, { defaultSelectedItem: defaultSelectedItem || firstItem, items: items, mediaClient: mediaClient, onClose: onClose }));
        }
        else {
            return null;
        }
    };
    MediaViewerComponent.contextTypes = {
        intl: intlShape,
    };
    MediaViewerComponent.startTime = Date.now();
    MediaViewerComponent.timerElapsed = function () { return Date.now() - MediaViewerComponent.startTime; };
    return MediaViewerComponent;
}(React.Component));
export { MediaViewerComponent };
export var MediaViewer = withAnalyticsEvents()(MediaViewerComponent);
//# sourceMappingURL=media-viewer.js.map