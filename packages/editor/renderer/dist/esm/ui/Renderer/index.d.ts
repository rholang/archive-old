import * as React from 'react';
import { PureComponent } from 'react';
import { Schema } from 'prosemirror-model';
import { ADFStage, ProviderFactory, EventHandlers, ExtensionHandlers } from '@atlaskit/editor-common';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { RendererContext } from '../../';
import { RenderOutputStat } from '../../render-document';
import { RendererAppearance } from './types';
export interface Extension<T> {
    extensionKey: string;
    parameters?: T;
    content?: any;
}
export interface Props {
    document: any;
    dataProviders?: ProviderFactory;
    eventHandlers?: EventHandlers;
    extensionHandlers?: ExtensionHandlers;
    onComplete?: (stat: RenderOutputStat) => void;
    onError?: (error: any) => void;
    portal?: HTMLElement;
    rendererContext?: RendererContext;
    schema?: Schema;
    appearance?: RendererAppearance;
    adfStage?: ADFStage;
    disableHeadingIDs?: boolean;
    allowDynamicTextSizing?: boolean;
    allowHeadingAnchorLinks?: boolean;
    maxHeight?: number;
    truncated?: boolean;
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
    allowColumnSorting?: boolean;
    shouldOpenMediaViewer?: boolean;
}
export declare class Renderer extends PureComponent<Props, {}> {
    private providerFactory;
    private serializer?;
    private rafID?;
    private editorRef?;
    constructor(props: Props);
    private anchorLinkAnalytics;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    private updateSerializer;
    private fireAnalyticsEvent;
    render(): JSX.Element;
    componentWillUnmount(): void;
}
declare const RendererWithAnalytics: (props: Props) => JSX.Element;
export default RendererWithAnalytics;
declare type RendererWrapperProps = {
    appearance: RendererAppearance;
    dynamicTextSizing: boolean;
    wrapperRef?: (instance: React.RefObject<HTMLElement>) => void;
} & {
    children?: React.ReactNode;
};
export declare function RendererWrapper({ appearance, children, dynamicTextSizing, wrapperRef, }: RendererWrapperProps): JSX.Element;
