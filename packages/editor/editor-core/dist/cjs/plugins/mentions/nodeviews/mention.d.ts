import { Node as PMNode } from 'prosemirror-model';
import { EditorView, NodeView } from 'prosemirror-view';
import { ProviderFactory } from '@atlaskit/editor-common';
import { ReactNodeView, getPosHandler } from '../../../nodeviews';
import { PortalProviderAPI } from '../../../ui/PortalProvider';
import { MentionPluginOptions } from '../index';
export interface Props {
    providerFactory: ProviderFactory;
    options?: MentionPluginOptions;
}
export declare class MentionNodeView extends ReactNodeView<Props> {
    createDomRef(): HTMLElement;
    render(props: Props): JSX.Element;
}
export default function mentionNodeView(portalProviderAPI: PortalProviderAPI, providerFactory: ProviderFactory, options?: MentionPluginOptions): (node: PMNode<any>, view: EditorView<any>, getPos: getPosHandler) => NodeView<any>;
