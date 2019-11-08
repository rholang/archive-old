"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var main_1 = require("./pm-plugins/main");
exports.appearanceForNodeType = function (spec) {
    if (spec.name === 'inlineCard') {
        return 'inline';
    }
    else if (spec.name === 'blockCard') {
        return 'block';
    }
    return;
};
exports.selectedCardAppearance = function (state) {
    return state.selection instanceof prosemirror_state_1.NodeSelection &&
        exports.appearanceForNodeType(state.selection.node.type);
};
exports.titleUrlPairFromNode = function (node) {
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
exports.mergeCardInfo = function (titleUrlPair, info) {
    return {
        title: (info && info.title) || titleUrlPair.title,
        url: (info && info.url) || titleUrlPair.url,
    };
};
exports.displayInfoForCard = function (node, info) {
    return exports.mergeCardInfo(exports.titleUrlPairFromNode(node), info);
};
exports.findCardInfo = function (state) {
    var pluginState = main_1.pluginKey.getState(state);
    return pluginState.cards.find(function (cardInfo) { return cardInfo.pos === state.selection.from; });
};
//# sourceMappingURL=utils.js.map