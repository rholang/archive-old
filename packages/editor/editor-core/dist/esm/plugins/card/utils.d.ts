import { EditorState } from 'prosemirror-state';
import { NodeType, Node } from 'prosemirror-model';
import { CardInfo } from './types';
export declare const appearanceForNodeType: (spec: NodeType<any>) => "inline" | "block" | undefined;
export declare const selectedCardAppearance: (state: EditorState<any>) => false | "inline" | "block" | undefined;
export declare type TitleUrlPair = {
    title?: string;
    url?: string;
};
export declare const titleUrlPairFromNode: (node: Node<any>) => TitleUrlPair;
/**
 * Merges the title and url from attributes and CardInfo from the resolved view, preferring the CardInfo.
 * @param titleUrlPair title and url information from the node attributes
 * @param info information stored in state from the resolved UI component view
 */
export declare const mergeCardInfo: (titleUrlPair: TitleUrlPair, info?: CardInfo | undefined) => TitleUrlPair;
export declare const displayInfoForCard: (node: Node<any>, info?: CardInfo | undefined) => TitleUrlPair;
export declare const findCardInfo: (state: EditorState<any>) => CardInfo | undefined;
