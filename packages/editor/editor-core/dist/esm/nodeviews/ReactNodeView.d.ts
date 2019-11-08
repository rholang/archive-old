import * as React from 'react';
import { NodeView, EditorView, Decoration } from 'prosemirror-view';
import { Node as PMNode } from 'prosemirror-model';
import { PortalProviderAPI } from '../ui/PortalProvider';
export declare type getPosHandler = () => number;
export declare type ReactComponentProps = {
    [key: string]: unknown;
};
export declare type ForwardRef = (node: HTMLElement | null) => void;
export declare type shouldUpdate = (nextNode: PMNode) => boolean;
export default class ReactNodeView<P = ReactComponentProps> implements NodeView {
    private domRef?;
    private contentDOMWrapper?;
    private reactComponent?;
    private portalProviderAPI;
    private hasContext;
    private _viewShouldUpdate?;
    reactComponentProps: P;
    view: EditorView;
    getPos: getPosHandler;
    contentDOM: Node | undefined;
    node: PMNode;
    constructor(node: PMNode, view: EditorView, getPos: getPosHandler, portalProviderAPI: PortalProviderAPI, reactComponentProps?: P, reactComponent?: React.ComponentType<any>, hasContext?: boolean, viewShouldUpdate?: shouldUpdate);
    /**
     * This method exists to move initialization logic out of the constructor,
     * so object can be initialized properly before calling render first time.
     *
     * Example:
     * Instance properties get added to an object only after super call in
     * constructor, which leads to some methods being undefined during the
     * first render.
     */
    init(): this;
    private renderReactComponent;
    createDomRef(): HTMLElement;
    getContentDOM(): {
        dom: Node;
        contentDOM?: Node | null | undefined;
    } | undefined;
    handleRef: (node: HTMLElement | null) => void;
    private _handleRef;
    render(props: P, forwardRef?: ForwardRef): React.ReactElement<any> | null;
    update(node: PMNode, _decorations: Array<Decoration>, validUpdate?: (currentNode: PMNode, newNode: PMNode) => boolean): boolean;
    viewShouldUpdate(nextNode: PMNode): boolean;
    /**
     * Copies the attributes from a ProseMirror Node to a DOM node.
     * @param node The Prosemirror Node from which to source the attributes
     */
    setDomAttrs(node: PMNode, element: HTMLElement): void;
    readonly dom: HTMLElement | undefined;
    destroy(): void;
    static fromComponent(component: React.ComponentType<any>, portalProviderAPI: PortalProviderAPI, props?: ReactComponentProps, viewShouldUpdate?: (nextNode: PMNode) => boolean): (node: PMNode<any>, view: EditorView<any>, getPos: getPosHandler) => ReactNodeView<ReactComponentProps>;
}
/**
 * A ReactNodeView that handles React components sensitive
 * to selection changes.
 *
 * If the selection changes, it will attempt to re-render the
 * React component. Otherwise it does nothing.
 *
 * You can subclass `viewShouldUpdate` to include other
 * props that your component might want to consider before
 * entering the React lifecycle. These are usually props you
 * compare in `shouldComponentUpdate`.
 *
 * An example:
 *
 * ```
 * viewShouldUpdate(nextNode) {
 *   if (nextNode.attrs !== this.node.attrs) {
 *     return true;
 *   }
 *
 *   return super.viewShouldUpdate(nextNode);
 * }```
 */
export declare class SelectionBasedNodeView<P = ReactComponentProps> extends ReactNodeView<P> {
    private oldSelection;
    private selectionChangeState;
    pos: number | undefined;
    posEnd: number | undefined;
    constructor(node: PMNode, view: EditorView, getPos: getPosHandler, portalProviderAPI: PortalProviderAPI, reactComponentProps: P, reactComponent?: React.ComponentType<any>, hasContext?: boolean, viewShouldUpdate?: shouldUpdate);
    /**
     * Update current node's start and end positions.
     *
     * Prefer `this.pos` rather than getPos(), because calling getPos is
     * expensive, unless you know you're definitely going to render.
     */
    private updatePos;
    isSelectionInsideNode: (from: number, to: number, pos?: number | undefined, posEnd?: number | undefined) => boolean;
    private isSelectedNode;
    insideSelection: () => boolean;
    viewShouldUpdate(_nextNode: PMNode): boolean;
    destroy(): void;
    private onSelectionChange;
}
