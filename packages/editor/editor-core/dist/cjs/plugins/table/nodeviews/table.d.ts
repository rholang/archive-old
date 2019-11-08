import { Node as PmNode } from 'prosemirror-model';
import { EditorView, NodeView } from 'prosemirror-view';
import ReactNodeView, { ForwardRef, getPosHandler } from '../../../nodeviews/ReactNodeView';
import { PortalProviderAPI } from '../../../ui/PortalProvider';
export declare type TableOptions = {
    dynamicTextSizing?: boolean;
    isBreakoutEnabled?: boolean;
    isFullWidthModeEnabled?: boolean;
    wasFullWidthModeEnabled?: boolean;
};
export interface Props {
    node: PmNode;
    view: EditorView;
    allowColumnResizing?: boolean;
    cellMinWidth?: number;
    portalProviderAPI: PortalProviderAPI;
    getPos: () => number;
    options?: TableOptions;
}
export default class TableView extends ReactNodeView<Props> {
    private table;
    private observer?;
    constructor(props: Props);
    getContentDOM(): {
        dom: Node;
        contentDOM?: Node | null | undefined;
    };
    setDomAttrs(node: PmNode): void;
    render(props: Props, forwardRef: ForwardRef): JSX.Element;
    ignoreMutation(): boolean;
    destroy(): void;
    private resizeForBreakoutContent;
    private resizeForExtensionContent;
    private handleMutation;
}
export declare const createTableView: (node: PmNode<any>, view: EditorView<any>, getPos: getPosHandler, portalProviderAPI: PortalProviderAPI, options: TableOptions) => NodeView<any>;
