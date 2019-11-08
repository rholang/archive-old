import { __extends } from "tslib";
/* eslint-disable no-console */
import * as React from 'react';
import { ProviderFactory, WithCreateAnalyticsEvent, } from '@atlaskit/editor-common';
import { ReactRenderer } from '@atlaskit/renderer';
import FabricAnalyticsListeners from '@atlaskit/analytics-listeners';
import RendererBridgeImpl from './native-to-web/implementation';
import { toNativeBridge } from './web-to-native/implementation';
import { MediaProvider, MentionProvider, TaskDecisionProvider, EmojiProvider, } from '../providers';
import { cardClient } from '../providers/cardProvider';
import { Provider as SmartCardProvider, } from '@atlaskit/smart-card';
import { eventDispatcher } from './dispatcher';
import { analyticsBridgeClient } from '../analytics-client';
var rendererBridge = (window.rendererBridge = new RendererBridgeImpl());
var handleAnalyticsEvent = function (event) {
    toNativeBridge.call('analyticsBridge', 'trackEvent', {
        event: JSON.stringify(event),
    });
};
var MobileRenderer = /** @class */ (function (_super) {
    __extends(MobileRenderer, _super);
    function MobileRenderer(props) {
        var _this = _super.call(this, props) || this;
        _this.analyticsClient = analyticsBridgeClient(handleAnalyticsEvent);
        _this.handleToggleTask = function (key, state) {
            toNativeBridge.call('taskDecisionBridge', 'updateTask', {
                taskId: key.localId,
                state: state,
            });
        };
        var document = null;
        if (props.document) {
            try {
                document = JSON.parse(props.document);
            }
            catch (e) { }
        }
        _this.state = { document: document };
        var taskDecisionProvider = TaskDecisionProvider(_this.handleToggleTask);
        _this.providerFactory = ProviderFactory.create({
            mediaProvider: props.mediaProvider || MediaProvider,
            mentionProvider: Promise.resolve(MentionProvider),
            taskDecisionProvider: Promise.resolve(taskDecisionProvider),
            emojiProvider: Promise.resolve(EmojiProvider),
        });
        _this.containerAri = 'MOCK-containerAri';
        _this.objectAri = 'MOCK-objectAri';
        rendererBridge.containerAri = _this.containerAri;
        rendererBridge.objectAri = _this.objectAri;
        rendererBridge.taskDecisionProvider = taskDecisionProvider;
        return _this;
    }
    MobileRenderer.prototype.handleRendererContentLoaded = function () {
        if (window &&
            !window.webkit && // don't fire on iOS
            window.requestAnimationFrame) {
            window.requestAnimationFrame(function () {
                return toNativeBridge.call('renderBridge', 'onContentRendered');
            });
        }
    };
    MobileRenderer.prototype.onLinkClick = function (event, url) {
        // Prevent redirection within the WebView
        event.preventDefault();
        if (!url) {
            return;
        }
        // Relay the URL through the bridge for handling
        toNativeBridge.call('linkBridge', 'onLinkClick', { url: url });
    };
    MobileRenderer.prototype.componentDidMount = function () {
        var _this = this;
        eventDispatcher.on('setRendererContent', function (_a) {
            var content = _a.content;
            _this.setState({
                document: content,
            });
        });
    };
    MobileRenderer.prototype.render = function () {
        var _this = this;
        try {
            // If we haven't received a document yet, don't pass null.
            // We'll get a flash of 'unsupported content'.
            // Could add a loader here if needed.
            if (!this.state.document) {
                return null;
            }
            // Temporarily opting out of the default oauth2 flow for phase 1 of Smart Links
            // See https://product-fabric.atlassian.net/browse/FM-2149 for details.
            var authFlow_1 = 'disabled';
            var smartCardClient_1 = this.props.cardClient || cardClient;
            return (React.createElement(FabricAnalyticsListeners, { client: this.analyticsClient },
                React.createElement(WithCreateAnalyticsEvent, { render: function (createAnalyticsEvent) { return (React.createElement(SmartCardProvider, { client: smartCardClient_1, authFlow: authFlow_1 },
                        React.createElement(ReactRenderer, { onComplete: _this.handleRendererContentLoaded, onError: _this.handleRendererContentLoaded, dataProviders: _this.providerFactory, appearance: "mobile", document: _this.state.document, createAnalyticsEvent: createAnalyticsEvent, rendererContext: {
                                // These will need to come from the native side.
                                objectAri: _this.objectAri,
                                containerAri: _this.containerAri,
                            }, eventHandlers: {
                                link: {
                                    onClick: _this.onLinkClick,
                                },
                                media: {
                                    onClick: function (result, analyticsEvent) {
                                        var mediaItemDetails = result.mediaItemDetails;
                                        // Media details only exist once resolved. Not available during loading/pending state.
                                        if (mediaItemDetails) {
                                            var mediaId = mediaItemDetails.id;
                                            // We don't have access to the occurrence key at this point so native will default to the first instance for now.
                                            // https://product-fabric.atlassian.net/browse/FM-1984
                                            var occurrenceKey = null;
                                            toNativeBridge.call('mediaBridge', 'onMediaClick', {
                                                mediaId: mediaId,
                                                occurrenceKey: occurrenceKey,
                                            });
                                        }
                                    },
                                },
                                mention: {
                                    onClick: function (profileId, alias) {
                                        toNativeBridge.call('mentionBridge', 'onMentionClick', {
                                            profileId: profileId,
                                        });
                                    },
                                },
                                smartCard: {
                                    onClick: _this.onLinkClick,
                                },
                            } }))); } })));
        }
        catch (ex) {
            return React.createElement("pre", null, "Invalid document");
        }
    };
    return MobileRenderer;
}(React.Component));
export default MobileRenderer;
//# sourceMappingURL=mobile-renderer-element.js.map