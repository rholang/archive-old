import { EditorState, PluginKey } from 'prosemirror-state';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { MentionProvider, TeamMentionProvider, MentionDescription } from '@atlaskit/mention/resource';
import { ContextIdentifierProvider } from '@atlaskit/editor-common';
import { EditorPlugin, Command } from '../../types';
export interface TeamInfoAttrAnalytics {
    teamId: String;
    includesYou: boolean;
    memberCount: number;
}
export interface MentionPluginOptions {
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
    sanitizePrivateContent?: boolean;
    mentionInsertDisplayName?: boolean;
    useInlineWrapper?: boolean;
    allowZeroWidthSpaceAfter?: boolean;
}
declare const mentionsPlugin: (options?: MentionPluginOptions | undefined) => EditorPlugin;
export default mentionsPlugin;
/**
 * Actions
 */
export declare const ACTIONS: {
    SET_PROVIDER: string;
    SET_RESULTS: string;
    SET_CONTEXT: string;
};
export declare const setProvider: (provider: MentionProvider | undefined) => Command;
export declare const setResults: (results: MentionDescription[]) => Command;
export declare const setContext: (context: ContextIdentifierProvider | undefined) => Command;
/**
 *
 * ProseMirror Plugin
 *
 */
export declare const mentionPluginKey: PluginKey<any>;
export declare function getMentionPluginState(state: EditorState): MentionPluginState;
export declare type MentionPluginState = {
    mentionProvider?: MentionProvider | TeamMentionProvider;
    contextIdentifierProvider?: ContextIdentifierProvider;
    mentions?: Array<MentionDescription>;
};
