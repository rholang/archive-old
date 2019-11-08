"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var editor_core_1 = require("@atlaskit/editor-core");
var analytics_listeners_1 = tslib_1.__importDefault(require("@atlaskit/analytics-listeners"));
// @ts-ignore
var theme_1 = require("@atlaskit/theme");
var web_to_native_1 = require("./web-to-native");
var native_to_web_1 = tslib_1.__importDefault(require("./native-to-web"));
var MobileMediaPicker_1 = tslib_1.__importDefault(require("./MobileMediaPicker"));
var plugin_subscription_1 = require("./plugin-subscription");
var providers_1 = require("../providers");
var bridge_utils_1 = require("../bridge-utils");
var smart_card_1 = require("@atlaskit/smart-card");
var cardProvider_1 = require("../providers/cardProvider");
var analytics_client_1 = require("../analytics-client");
var params = bridge_utils_1.parseLocationSearch();
exports.bridge = (window.bridge = new native_to_web_1.default());
var handleAnalyticsEvent = function (event) {
    web_to_native_1.toNativeBridge.call('analyticsBridge', 'trackEvent', {
        event: JSON.stringify(event),
    });
};
var EditorWithState = /** @class */ (function (_super) {
    tslib_1.__extends(EditorWithState, _super);
    function EditorWithState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorWithState.prototype.onEditorCreated = function (instance) {
        _super.prototype.onEditorCreated.call(this, instance);
        var eventDispatcher = instance.eventDispatcher, view = instance.view;
        exports.bridge.editorView = view;
        exports.bridge.editorActions._privateRegisterEditor(view, eventDispatcher);
        if (this.props.media && this.props.media.customMediaPicker) {
            exports.bridge.mediaPicker = this.props.media.customMediaPicker;
        }
        plugin_subscription_1.initPluginListeners(eventDispatcher, exports.bridge, view);
    };
    EditorWithState.prototype.onEditorDestroyed = function (instance) {
        _super.prototype.onEditorDestroyed.call(this, instance);
        plugin_subscription_1.destroyPluginListeners(instance.eventDispatcher, exports.bridge);
        exports.bridge.editorActions._privateUnregisterEditor();
        exports.bridge.editorView = null;
        exports.bridge.mentionsPluginState = null;
    };
    return EditorWithState;
}(editor_core_1.Editor));
function mobileEditor(props) {
    // eg. If the URL parameter is like ?mode=dark use that, otherwise check the prop (used in example)
    var mode = (params && params.theme) || props.mode || 'light';
    // Temporarily opting out of the default oauth2 flow for phase 1 of Smart Links
    // See https://product-fabric.atlassian.net/browse/FM-2149 for details.
    var authFlow = 'disabled';
    var analyticsClient = analytics_client_1.analyticsBridgeClient(handleAnalyticsEvent);
    return (React.createElement(analytics_listeners_1.default, { client: analyticsClient },
        React.createElement(smart_card_1.Provider, { client: cardProvider_1.cardClient, authFlow: authFlow },
            React.createElement(theme_1.AtlaskitThemeProvider, { mode: mode },
                React.createElement(EditorWithState, tslib_1.__assign({ appearance: "mobile", mentionProvider: Promise.resolve(providers_1.MentionProvider), emojiProvider: Promise.resolve(providers_1.EmojiProvider), media: {
                        customMediaPicker: new MobileMediaPicker_1.default(),
                        provider: props.mediaProvider || providers_1.MediaProvider,
                        allowMediaSingle: true,
                    }, allowConfluenceInlineComment: true, allowLists: true, onChange: function () {
                        web_to_native_1.toNativeBridge.updateText(exports.bridge.getContent());
                    }, allowPanel: true, allowCodeBlocks: true, allowTables: {
                        allowControls: false,
                    }, UNSAFE_cards: {
                        provider: props.cardProvider || Promise.resolve(cardProvider_1.cardProvider),
                    }, allowExtension: true, allowTextColor: true, allowDate: true, allowRule: true, allowStatus: true, allowLayouts: {
                        allowBreakout: true,
                    }, allowAnalyticsGASV3: true, taskDecisionProvider: Promise.resolve(providers_1.TaskDecisionProvider()) }, props))))));
}
exports.default = mobileEditor;
//# sourceMappingURL=mobile-editor-element.js.map