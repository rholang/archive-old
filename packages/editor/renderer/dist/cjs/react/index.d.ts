import { Fragment, Mark, Node, Schema } from 'prosemirror-model';
import { Serializer } from '../';
import { RendererAppearance } from '../ui/Renderer/types';
import { AnalyticsEventPayload } from '../analytics/events';
import { TextWrapper } from './nodes';
import { ProviderFactory, EventHandlers, ExtensionHandlers } from '@atlaskit/editor-common';
export interface RendererContext {
    objectAri?: string;
    containerAri?: string;
    adDoc?: any;
    schema?: Schema;
}
export interface ConstructorParams {
    providers?: ProviderFactory;
    eventHandlers?: EventHandlers;
    extensionHandlers?: ExtensionHandlers;
    portal?: HTMLElement;
    objectContext?: RendererContext;
    appearance?: RendererAppearance;
    disableHeadingIDs?: boolean;
    allowDynamicTextSizing?: boolean;
    allowHeadingAnchorLinks?: boolean;
    allowColumnSorting?: boolean;
    fireAnalyticsEvent?: (event: AnalyticsEventPayload) => void;
    shouldOpenMediaViewer?: boolean;
}
export default class ReactSerializer implements Serializer<JSX.Element> {
    private providers?;
    private eventHandlers?;
    private extensionHandlers?;
    private portal?;
    private rendererContext?;
    private appearance?;
    private disableHeadingIDs?;
    private headingIds;
    private allowDynamicTextSizing?;
    private allowHeadingAnchorLinks?;
    private allowColumnSorting?;
    private fireAnalyticsEvent?;
    private shouldOpenMediaViewer?;
    constructor({ providers, eventHandlers, extensionHandlers, portal, objectContext, appearance, disableHeadingIDs, allowDynamicTextSizing, allowHeadingAnchorLinks, allowColumnSorting, fireAnalyticsEvent, shouldOpenMediaViewer, }: ConstructorParams);
    private resetState;
    serializeFragment(fragment: Fragment, props?: any, target?: any, key?: string, parentInfo?: {
        parentIsIncompleteTask: boolean;
        path: Array<Node>;
    }): JSX.Element | null;
    private serializeTextWrapper;
    private serializeMark;
    private renderNode;
    private renderMark;
    private getTableChildrenProps;
    private getTableProps;
    private getDateProps;
    private getMediaProps;
    private getProps;
    private headingAnchorSupported;
    private getHeadingProps;
    private getHeadingId;
    private getUniqueHeadingId;
    private getMarkProps;
    static getChildNodes(fragment: Fragment): (Node | TextWrapper)[];
    static getMarks(node: Node): Mark[];
    static buildMarkStructure(content: Node[]): Mark<any>[];
    static fromSchema(_schema: Schema, { providers, eventHandlers, extensionHandlers, appearance, disableHeadingIDs, allowDynamicTextSizing, allowHeadingAnchorLinks, allowColumnSorting, }: ConstructorParams): ReactSerializer;
}
