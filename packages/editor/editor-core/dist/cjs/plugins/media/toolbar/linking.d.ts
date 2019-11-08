import { NodeType } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { InjectedIntl } from 'react-intl';
import { ProviderFactory } from '@atlaskit/editor-common';
import { Command } from '../../../types';
import { FloatingToolbarConfig, FloatingToolbarItem } from '../../floating-toolbar/types';
import { MediaLinkingState } from '../pm-plugins/linking';
export declare function shouldShowMediaLinkToolbar(editorState: EditorState): boolean;
export declare const buildLinkingButtons: (state: EditorState<any>, intl: InjectedIntl) => FloatingToolbarItem<Command>[];
declare type MediaToolbarBaseConfig = {
    title: string;
    getDomRef?: (view: EditorView) => HTMLElement | undefined;
    nodeType: NodeType | NodeType[];
};
export declare const getLinkingToolbar: (toolbarBaseConfig: MediaToolbarBaseConfig, mediaLinkingState: MediaLinkingState, state: EditorState<any>, intl: InjectedIntl, providerFactory?: ProviderFactory | undefined) => FloatingToolbarConfig | undefined;
export {};
