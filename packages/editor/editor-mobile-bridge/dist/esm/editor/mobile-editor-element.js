import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Editor, } from '@atlaskit/editor-core';
import FabricAnalyticsListeners from '@atlaskit/analytics-listeners';
// @ts-ignore
import { AtlaskitThemeProvider } from '@atlaskit/theme';
import { toNativeBridge } from './web-to-native';
import WebBridgeImpl from './native-to-web';
import MobilePicker from './MobileMediaPicker';
import { initPluginListeners, destroyPluginListeners, } from './plugin-subscription';
import { MediaProvider, MentionProvider, TaskDecisionProvider, EmojiProvider, } from '../providers';
import { parseLocationSearch } from '../bridge-utils';
import { Provider as SmartCardProvider } from '@atlaskit/smart-card';
import { cardClient, cardProvider } from '../providers/cardProvider';
import { analyticsBridgeClient } from '../analytics-client';
var params = parseLocationSearch();
export var bridge = (window.bridge = new WebBridgeImpl());
var handleAnalyticsEvent = function (event) {
    toNativeBridge.call('analyticsBridge', 'trackEvent', {
        event: JSON.stringify(event),
    });
};
var EditorWithState = /** @class */ (function (_super) {
    __extends(EditorWithState, _super);
    function EditorWithState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorWithState.prototype.onEditorCreated = function (instance) {
        _super.prototype.onEditorCreated.call(this, instance);
        var eventDispatcher = instance.eventDispatcher, view = instance.view;
        bridge.editorView = view;
        bridge.editorActions._privateRegisterEditor(view, eventDispatcher);
        if (this.props.media && this.props.media.customMediaPicker) {
            bridge.mediaPicker = this.props.media.customMediaPicker;
        }
        initPluginListeners(eventDispatcher, bridge, view);
    };
    EditorWithState.prototype.onEditorDestroyed = function (instance) {
        _super.prototype.onEditorDestroyed.call(this, instance);
        destroyPluginListeners(instance.eventDispatcher, bridge);
        bridge.editorActions._privateUnregisterEditor();
        bridge.editorView = null;
        bridge.mentionsPluginState = null;
    };
    return EditorWithState;
}(Editor));
export default function mobileEditor(props) {
    // eg. If the URL parameter is like ?mode=dark use that, otherwise check the prop (used in example)
    var mode = (params && params.theme) || props.mode || 'light';
    // Temporarily opting out of the default oauth2 flow for phase 1 of Smart Links
    // See https://product-fabric.atlassian.net/browse/FM-2149 for details.
    var authFlow = 'disabled';
    var analyticsClient = analyticsBridgeClient(handleAnalyticsEvent);
    return (React.createElement(FabricAnalyticsListeners, { client: analyticsClient },
        React.createElement(SmartCardProvider, { client: cardClient, authFlow: authFlow },
            React.createElement(AtlaskitThemeProvider, { mode: mode },
                React.createElement(EditorWithState, __assign({ appearance: "mobile", mentionProvider: Promise.resolve(MentionProvider), emojiProvider: Promise.resolve(EmojiProvider), media: {
                        customMediaPicker: new MobilePicker(),
                        provider: props.mediaProvider || MediaProvider,
                        allowMediaSingle: true,
                    }, allowConfluenceInlineComment: true, allowLists: true, onChange: function () {
                        toNativeBridge.updateText(bridge.getContent());
                    }, allowPanel: true, allowCodeBlocks: true, allowTables: {
                        allowControls: false,
                    }, UNSAFE_cards: {
                        provider: props.cardProvider || Promise.resolve(cardProvider),
                    }, allowExtension: true, allowTextColor: true, allowDate: true, allowRule: true, allowStatus: true, allowLayouts: {
                        allowBreakout: true,
                    }, allowAnalyticsGASV3: true, taskDecisionProvider: Promise.resolve(TaskDecisionProvider()) }, props))))));
}
//# sourceMappingURL=mobile-editor-element.js.map