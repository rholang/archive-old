import { Plugin, EditorState, PluginKey } from 'prosemirror-state';
import { ProviderFactory } from '@atlaskit/editor-common';
import { EmojiProvider, EmojiDescription } from '@atlaskit/emoji';
import { EditorPlugin, Command } from '../../types';
import { Dispatch } from '../../event-dispatcher';
import { PortalProviderAPI } from '../../ui/PortalProvider';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare const defaultListLimit = 50;
export interface EmojiPluginOptions {
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
    allowZeroWidthSpaceAfter?: boolean;
    useInlineWrapper?: boolean;
}
declare const emojiPlugin: (options?: EmojiPluginOptions | undefined) => EditorPlugin;
export default emojiPlugin;
/**
 * Actions
 */
export declare const ACTIONS: {
    SET_PROVIDER: string;
    SET_RESULTS: string;
};
export declare const setProvider: (provider?: EmojiProvider | undefined) => Command;
export declare const setResults: (results: {
    emojis: EmojiDescription[];
}) => Command;
export declare type EmojiPluginState = {
    emojiProvider?: EmojiProvider;
    emojis?: Array<EmojiDescription>;
};
export declare const emojiPluginKey: PluginKey<any>;
export declare function getEmojiPluginState(state: EditorState): EmojiPluginState;
export declare function emojiPluginFactory(dispatch: Dispatch, providerFactory: ProviderFactory, portalProviderAPI: PortalProviderAPI, options?: EmojiPluginOptions): Plugin<any>;
