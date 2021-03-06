import { NodeSelection } from 'prosemirror-state';
import { pluginKey } from './pm-plugins/main';
export var appearanceForNodeType = function (spec) {
    if (spec.name === 'inlineCard') {
        return 'inline';
    }
    else if (spec.name === 'blockCard') {
        return 'block';
    }
    return;
};
export var selectedCardAppearance = function (state) {
    return state.selection instanceof NodeSelection &&
        appearanceForNodeType(state.selection.node.type);
};
export var titleUrlPairFromNode = function (node) {
    var attrs = node.attrs;
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
export var mergeCardInfo = function (titleUrlPair, info) {
    return {
        title: (info && info.title) || titleUrlPair.title,
        url: (info && info.url) || titleUrlPair.url,
    };
};
export var displayInfoForCard = function (node, info) {
    return mergeCardInfo(titleUrlPairFromNode(node), info);
};
export var findCardInfo = function (state) {
    var pluginState = pluginKey.getState(state);
    return pluginState.cards.find(function (cardInfo) { return cardInfo.pos === state.selection.from; });
};
//# sourceMappingURL=utils.js.map