import { Component } from 'react';
import { Node as PMNode } from 'prosemirror-model';
import { EditorView, Decoration } from 'prosemirror-view';
import { MediaSingleLayout } from '@atlaskit/adf-schema';
import { ProviderFactory, ContextIdentifierProvider } from '@atlaskit/editor-common';
import { CardEvent } from '@atlaskit/media-card';
import { MediaClientConfig } from '@atlaskit/media-core';
import { SelectionBasedNodeView } from '../../../nodeviews/ReactNodeView';
import { EventDispatcher } from '../../../event-dispatcher';
import { PortalProviderAPI } from '../../../ui/PortalProvider';
import { MediaOptions, MediaPMPluginOptions } from '../index';
import { MediaSingleNodeProps, MediaSingleNodeViewProps } from './types';
import { MediaNodeUpdater } from './mediaNodeUpdater';
import { DispatchAnalyticsEvent } from '../../analytics';
export interface MediaSingleNodeState {
    width?: number;
    height?: number;
    viewMediaClientConfig?: MediaClientConfig;
    contextIdentifierProvider?: ContextIdentifierProvider;
}
export default class MediaSingleNode extends Component<MediaSingleNodeProps, MediaSingleNodeState> {
    static defaultProps: Partial<MediaSingleNodeProps>;
    state: MediaSingleNodeState;
    createMediaNodeUpdater: (props: MediaSingleNodeProps) => MediaNodeUpdater;
    UNSAFE_componentWillReceiveProps(nextProps: MediaSingleNodeProps): void;
    setViewMediaClientConfig: (props: MediaSingleNodeProps) => Promise<void>;
    updateMediaNodeAttributes: (props: MediaSingleNodeProps) => Promise<void>;
    componentDidMount(): Promise<void>;
    private onExternalImageLoaded;
    selectMediaSingle: ({ event }: CardEvent) => void;
    updateSize: (width: number | null, layout: MediaSingleLayout) => void;
    render(): JSX.Element;
}
declare class MediaSingleNodeView extends SelectionBasedNodeView<MediaSingleNodeViewProps> {
    lastOffsetLeft: number;
    forceViewUpdate: boolean;
    createDomRef(): HTMLElement;
    viewShouldUpdate(nextNode: PMNode): boolean;
    getNodeMediaId(node: PMNode): string | undefined;
    update(node: PMNode, decorations: Decoration[], isValidUpdate?: (currentNode: PMNode, newNode: PMNode) => boolean): boolean;
    render(): JSX.Element;
    ignoreMutation(): boolean;
}
export declare const ReactMediaSingleNode: (portalProviderAPI: PortalProviderAPI, eventDispatcher: EventDispatcher<any>, providerFactory: ProviderFactory, mediaOptions?: MediaOptions, pluginOptions?: MediaPMPluginOptions | undefined, fullWidthMode?: boolean | undefined, dispatchAnalyticsEvent?: DispatchAnalyticsEvent | undefined) => (node: PMNode<any>, view: EditorView<any>, getPos: () => number) => MediaSingleNodeView;
export {};
