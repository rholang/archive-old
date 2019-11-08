"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* eslint-disable no-console */
var React = tslib_1.__importStar(require("react"));
var editor_common_1 = require("@atlaskit/editor-common");
var renderer_1 = require("@atlaskit/renderer");
var analytics_listeners_1 = tslib_1.__importDefault(require("@atlaskit/analytics-listeners"));
var implementation_1 = tslib_1.__importDefault(require("./native-to-web/implementation"));
var implementation_2 = require("./web-to-native/implementation");
var providers_1 = require("../providers");
var cardProvider_1 = require("../providers/cardProvider");
var smart_card_1 = require("@atlaskit/smart-card");
var dispatcher_1 = require("./dispatcher");
var analytics_client_1 = require("../analytics-client");
var rendererBridge = (window.rendererBridge = new implementation_1.default());
var handleAnalyticsEvent = function (event) {
    implementation_2.toNativeBridge.call('analyticsBridge', 'trackEvent', {
        event: JSON.stringify(event),
    });
};
var MobileRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(MobileRenderer, _super);
    function MobileRenderer(props) {
        var _this = _super.call(this, props) || this;
        _this.analyticsClient = analytics_client_1.analyticsBridgeClient(handleAnalyticsEvent);
        _this.handleToggleTask = function (key, state) {
            implementation_2.toNativeBridge.call('taskDecisionBridge', 'updateTask', {
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
        var taskDecisionProvider = providers_1.TaskDecisionProvider(_this.handleToggleTask);
        _this.providerFactory = editor_common_1.ProviderFactory.create({
            mediaProvider: props.mediaProvider || providers_1.MediaProvider,
            mentionProvider: Promise.resolve(providers_1.MentionProvider),
            taskDecisionProvider: Promise.resolve(taskDecisionProvider),
            emojiProvider: Promise.resolve(providers_1.EmojiProvider),
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
                return implementation_2.toNativeBridge.call('renderBridge', 'onContentRendered');
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
        implementation_2.toNativeBridge.call('linkBridge', 'onLinkClick', { url: url });
    };
    MobileRenderer.prototype.componentDidMount = function () {
        var _this = this;
        dispatcher_1.eventDispatcher.on('setRendererContent', function (_a) {
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
            var smartCardClient_1 = this.props.cardClient || cardProvider_1.cardClient;
            return (React.createElement(analytics_listeners_1.default, { client: this.analyticsClient },
                React.createElement(editor_common_1.WithCreateAnalyticsEvent, { render: function (createAnalyticsEvent) { return (React.createElement(smart_card_1.Provider, { client: smartCardClient_1, authFlow: authFlow_1 },
                        React.createElement(renderer_1.ReactRenderer, { onComplete: _this.handleRendererContentLoaded, onError: _this.handleRendererContentLoaded, dataProviders: _this.providerFactory, appearance: "mobile", document: _this.state.document, createAnalyticsEvent: createAnalyticsEvent, rendererContext: {
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
                                            implementation_2.toNativeBridge.call('mediaBridge', 'onMediaClick', {
                                                mediaId: mediaId,
                                                occurrenceKey: occurrenceKey,
                                            });
                                        }
                                    },
                                },
                                mention: {
                                    onClick: function (profileId, alias) {
                                        implementation_2.toNativeBridge.call('mentionBridge', 'onMentionClick', {
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
exports.default = MobileRenderer;
//# sourceMappingURL=mobile-renderer-element.js.map