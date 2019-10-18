import * as React from 'react';
import { EditorView } from 'prosemirror-view';
import { EditorViewWithComposition } from '../types';
import {
  Editor,
  MediaProvider as MediaProviderType,
  EditorProps,
} from '@atlaskit/editor-core';
import FabricAnalyticsListeners, {
  AnalyticsWebClient,
} from '@atlaskit/analytics-listeners';
import {
  GasPurePayload,
  GasPureScreenEventPayload,
} from '@atlaskit/analytics-gas-types';

// @ts-ignore
import { AtlaskitThemeProvider } from '@atlaskit/theme';
import { toNativeBridge } from './web-to-native';
import WebBridgeImpl from './native-to-web';
import MobilePicker from './MobileMediaPicker';
import {
  initPluginListeners,
  destroyPluginListeners,
} from './plugin-subscription';
import {
  MediaProvider,
  MentionProvider,
  TaskDecisionProvider,
  EmojiProvider,
} from '../providers';
import { parseLocationSearch } from '../bridge-utils';
import { Provider as SmartCardProvider } from '@atlaskit/smart-card';
import { cardClient, cardProvider } from '../providers/cardProvider';
import { analyticsBridgeClient } from '../analytics-client';

const params = parseLocationSearch();
// @ts-ignore
// eslint-disable-next-line no-redeclare
import { AtlaskitThemeProvider } from '@atlaskit/theme';

export const bridge: WebBridgeImpl = ((window as any).bridge = new WebBridgeImpl());

const handleAnalyticsEvent = (
  event: GasPurePayload | GasPureScreenEventPayload,
) => {
  toNativeBridge.call('analyticsBridge', 'trackEvent', {
    event: JSON.stringify(event),
  });
};

class EditorWithState extends Editor {
  onEditorCreated(instance: {
    view: EditorView & EditorViewWithComposition;
    eventDispatcher: any;
    transformer?: any;
  }) {
    super.onEditorCreated(instance);

    const { eventDispatcher, view } = instance;
    bridge.editorView = view;
    bridge.editorActions._privateRegisterEditor(view, eventDispatcher);
    if (this.props.media && this.props.media.customMediaPicker) {
      bridge.mediaPicker = this.props.media.customMediaPicker;
    }

    initPluginListeners(eventDispatcher, bridge, view);
  }

  onEditorDestroyed(instance: {
    view: EditorView;
    eventDispatcher: any;
    transformer?: any;
  }) {
    super.onEditorDestroyed(instance);

    destroyPluginListeners(instance.eventDispatcher, bridge);

    bridge.editorActions._privateUnregisterEditor();
    bridge.editorView = null;
    bridge.mentionsPluginState = null;
  }
}

type Props = EditorProps & {
  mode?: 'light' | 'dark';
  mediaProvider?: Promise<MediaProviderType>;
};

export default function mobileEditor(props: Props) {
  // eg. If the URL parameter is like ?mode=dark use that, otherwise check the prop (used in example)
  const mode = (params && params.theme) || props.mode || 'light';
  // Temporarily opting out of the default oauth2 flow for phase 1 of Smart Links
  // See https://product-fabric.atlassian.net/browse/FM-2149 for details.
  const authFlow = 'disabled';
  const analyticsClient: AnalyticsWebClient = analyticsBridgeClient(
    handleAnalyticsEvent,
  );

  return (
    <FabricAnalyticsListeners client={analyticsClient}>
      <SmartCardProvider client={cardClient} authFlow={authFlow}>
        <AtlaskitThemeProvider mode={mode}>
          <EditorWithState
            appearance="mobile"
            mentionProvider={Promise.resolve(MentionProvider)}
            emojiProvider={Promise.resolve(EmojiProvider)}
            media={{
              customMediaPicker: new MobilePicker(),
              provider: props.mediaProvider || MediaProvider,
              allowMediaSingle: true,
            }}
            allowConfluenceInlineComment={true}
            allowLists={true}
            onChange={() => {
              toNativeBridge.updateText(bridge.getContent());
            }}
            allowPanel={true}
            allowCodeBlocks={true}
            allowTables={{
              allowControls: false,
            }}
            UNSAFE_cards={{
              provider: props.cardProvider || Promise.resolve(cardProvider),
            }}
            allowExtension={true}
            allowTextColor={true}
            allowDate={true}
            allowRule={true}
            allowStatus={true}
            allowLayouts={{
              allowBreakout: true,
            }}
            allowAnalyticsGASV3={true}
            taskDecisionProvider={Promise.resolve(TaskDecisionProvider())}
            // eg. If the URL parameter is like ?mode=dark use that, otherwise check the prop (used in example)
            {...props}
          />
        </AtlaskitThemeProvider>
      </SmartCardProvider>
    </FabricAnalyticsListeners>
  );
}
