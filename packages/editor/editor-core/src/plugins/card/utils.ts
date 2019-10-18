import { EditorState, NodeSelection } from 'prosemirror-state';
import { NodeType, Node } from 'prosemirror-model';
import { CardAppearance, CardInfo } from './types';
import { CardPluginState } from './types';
import { pluginKey } from './pm-plugins/main';

export const appearanceForNodeType = (
  spec: NodeType,
): CardAppearance | undefined => {
  if (spec.name === 'inlineCard') {
    return 'inline';
  } else if (spec.name === 'blockCard') {
    return 'block';
  }
  return;
};

export const selectedCardAppearance = (state: EditorState) =>
  state.selection instanceof NodeSelection &&
  appearanceForNodeType(state.selection.node.type);

export type TitleUrlPair = { title?: string; url?: string };

export const titleUrlPairFromNode = (node: Node): TitleUrlPair => {
  const { attrs } = node;

  return {
    url: attrs.url || (attrs.data && attrs.data.url),
    title: attrs.data && attrs.data.title,
  };
};

/**
 * Merges the title and url from attributes and CardInfo from the resolved view, preferring the CardInfo.
 * @param titleUrlPair title and url information from the node attributes
 * @param info information stored in state from the resolved UI component view
 */
export const mergeCardInfo = (
  titleUrlPair: TitleUrlPair,
  info?: CardInfo,
): TitleUrlPair => {
  return {
    title: (info && info.title) || titleUrlPair.title,
    url: (info && info.url) || titleUrlPair.url,
  };
};

export const displayInfoForCard = (node: Node, info?: CardInfo) =>
  mergeCardInfo(titleUrlPairFromNode(node), info);

export const findCardInfo = (state: EditorState) => {
  const pluginState: CardPluginState = pluginKey.getState(state);
  return pluginState.cards.find(
    cardInfo => cardInfo.pos === state.selection.from,
  );
};
