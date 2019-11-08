import * as React from 'react';
import { MediaProvider as MediaProviderType } from '@atlaskit/editor-core';
import { RendererProps } from '@atlaskit/renderer';
import { Client as CardClient } from '@atlaskit/smart-card';
export interface MobileRendererProps extends RendererProps {
    document: string;
    mediaProvider?: Promise<MediaProviderType>;
    cardClient?: CardClient;
}
export interface MobileRendererState {
    /** as defined in the renderer */
    document: any;
}
export default class MobileRenderer extends React.Component<MobileRendererProps, MobileRendererState> {
    private providerFactory;
    private objectAri;
    private containerAri;
    private analyticsClient;
    constructor(props: MobileRendererProps);
    private handleRendererContentLoaded;
    private handleToggleTask;
    private onLinkClick;
    componentDidMount(): void;
    render(): JSX.Element | null;
}
