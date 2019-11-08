"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var analytics_next_1 = require("@atlaskit/analytics-next");
var media_viewer_1 = require("./analytics/media-viewer");
var closed_1 = require("./analytics/closed");
var index_1 = require("./analytics/index");
var list_1 = require("./list");
var collection_1 = require("./collection");
var content_1 = require("./content");
var styled_1 = require("./styled");
var MediaViewerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MediaViewerComponent, _super);
    function MediaViewerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(index_1.channel);
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
        this.fireAnalytics(media_viewer_1.mediaViewerModalEvent());
        MediaViewerComponent.startTime = Date.now();
    };
    MediaViewerComponent.prototype.sendClosedEvent = function (input) {
        this.fireAnalytics(closed_1.closedEvent(input));
    };
    MediaViewerComponent.prototype.render = function () {
        var content = (React.createElement(styled_1.Blanket, null,
            React.createElement(media_ui_1.Shortcut, { keyCode: 27, handler: this.onShortcutClosed }),
            React.createElement(content_1.Content, { onClose: this.onContentClose }, this.renderContent())));
        return this.context.intl ? (content) : (React.createElement(react_intl_1.IntlProvider, { locale: "en" }, content));
    };
    MediaViewerComponent.prototype.renderContent = function () {
        var _a = this.props, selectedItem = _a.selectedItem, mediaClient = _a.mediaClient, onClose = _a.onClose, itemSource = _a.itemSource;
        var defaultSelectedItem = selectedItem;
        if (itemSource.kind === 'COLLECTION') {
            return (React.createElement(collection_1.Collection, { pageSize: itemSource.pageSize, defaultSelectedItem: defaultSelectedItem, collectionName: itemSource.collectionName, mediaClient: mediaClient, onClose: onClose }));
        }
        else if (itemSource.kind === 'ARRAY') {
            var items = itemSource.items;
            var firstItem = items[0];
            return (React.createElement(list_1.List, { defaultSelectedItem: defaultSelectedItem || firstItem, items: items, mediaClient: mediaClient, onClose: onClose }));
        }
        else {
            return null;
        }
    };
    MediaViewerComponent.contextTypes = {
        intl: react_intl_1.intlShape,
    };
    MediaViewerComponent.startTime = Date.now();
    MediaViewerComponent.timerElapsed = function () { return Date.now() - MediaViewerComponent.startTime; };
    return MediaViewerComponent;
}(React.Component));
exports.MediaViewerComponent = MediaViewerComponent;
exports.MediaViewer = analytics_next_1.withAnalyticsEvents()(MediaViewerComponent);
//# sourceMappingURL=media-viewer.js.map