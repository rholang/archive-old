import * as React from 'react';
import { Node as PMNode } from 'prosemirror-model';
import { EditorView, NodeView } from 'prosemirror-view';
import { PortalProviderAPI } from '../../../ui/PortalProvider';
import { MediaClientConfig } from '@atlaskit/media-core';
import { EditorAppearance } from '../../../types';
import { ProviderFactory, ContextIdentifierProvider } from '@atlaskit/editor-common';
import { MediaProvider } from '../types';
export declare type MediaGroupProps = {
    forwardRef?: (ref: HTMLElement) => void;
    node: PMNode;
    view: EditorView;
    getPos: () => number;
    selected: number | null;
    disabled?: boolean;
    allowLazyLoading?: boolean;
    editorAppearance: EditorAppearance;
    mediaProvider: Promise<MediaProvider>;
    contextIdentifierProvider?: Promise<ContextIdentifierProvider>;
};
export interface MediaGroupState {
    viewMediaClientConfig?: MediaClientConfig;
}
export default class MediaGroup extends React.Component<MediaGroupProps, MediaGroupState> {
    private mediaPluginState;
    private mediaNodes;
    state: MediaGroupState;
    constructor(props: MediaGroupProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(props: MediaGroupProps): void;
    shouldComponentUpdate(nextProps: MediaGroupProps): boolean;
    updateMediaClientConfig(): void;
    setMediaItems: (props: MediaGroupProps) => void;
    renderChildNodes: () => JSX.Element;
    render(): JSX.Element;
}
export declare const ReactMediaGroupNode: (portalProviderAPI: PortalProviderAPI, providerFactory: ProviderFactory, allowLazyLoading?: boolean | undefined, editorAppearance?: any) => (node: PMNode<any>, view: EditorView<any>, getPos: () => number) => NodeView<any>;
