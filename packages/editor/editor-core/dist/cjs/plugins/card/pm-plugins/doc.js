"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var main_1 = require("./main");
var actions_1 = require("./actions");
var utils_1 = require("../utils");
var utils_2 = require("../../../utils");
var prosemirror_model_1 = require("prosemirror-model");
var main_2 = require("../../paste/pm-plugins/main");
var prosemirror_history_1 = require("prosemirror-history");
var analytics_1 = require("../../../plugins/analytics");
var prosemirror_utils_1 = require("prosemirror-utils");
var adf_schema_1 = require("@atlaskit/adf-schema");
function shouldReplace(node, compareLinkText, compareToUrl) {
    if (compareLinkText === void 0) { compareLinkText = true; }
    var linkMark = node.marks.find(function (mark) { return mark.type.name === 'link'; });
    if (!linkMark) {
        // not a link anymore
        return false;
    }
    // ED-6041: compare normalised link text after linkfy from Markdown transformer
    // instead, since it always decodes URL ('%20' -> ' ') on the link text
    var normalisedHref = main_2.md.normalizeLinkText(linkMark.attrs.href);
    var normalizedLinkText = main_2.md.normalizeLinkText(node.text || '');
    if (compareLinkText && normalisedHref !== normalizedLinkText) {
        return false;
    }
    if (compareToUrl) {
        var normalizedUrl = main_2.md.normalizeLinkText(compareToUrl);
        if (normalizedUrl !== normalisedHref) {
            return false;
        }
    }
    return true;
}
exports.shouldReplace = shouldReplace;
function insertCard(tr, cardAdf, schema) {
    var inlineCard = schema.nodes.inlineCard;
    // ED-5638: add an extra space after inline cards to avoid re-rendering them
    var nodes = [cardAdf];
    if (cardAdf.type === inlineCard) {
        nodes.push(schema.text(' '));
    }
    return prosemirror_utils_1.safeInsert(prosemirror_model_1.Fragment.fromArray(nodes))(tr);
}
exports.insertCard = insertCard;
/**
 * Attempt to replace the link into the respective card.
 */
function replaceLinksToCards(tr, cardAdf, schema, request) {
    var inlineCard = schema.nodes.inlineCard;
    var url = request.url;
    if (!adf_schema_1.isSafeUrl(url)) {
        return;
    }
    // replace all the outstanding links with their cards
    var pos = tr.mapping.map(request.pos);
    var $pos = tr.doc.resolve(pos);
    var node = tr.doc.nodeAt(pos);
    if (!node || !node.type.isText) {
        return;
    }
    if (!shouldReplace(node, request.compareLinkText, url)) {
        return;
    }
    // ED-5638: add an extra space after inline cards to avoid re-rendering them
    var nodes = [cardAdf];
    if (cardAdf.type === inlineCard) {
        nodes.push(schema.text(' '));
    }
    tr.replaceWith(pos, pos + (node.text || url).length, nodes);
    return $pos.node($pos.depth - 1).type.name;
}
exports.replaceQueuedUrlWithCard = function (url, cardData) { return function (editorState, dispatch) {
    var state = main_1.pluginKey.getState(editorState);
    if (!state) {
        return false;
    }
    // find the requests for this URL
    var requests = state.requests.filter(function (req) { return req.url === url; });
    // try to transform response to ADF
    var schema = editorState.schema;
    var inlineCard = schema.nodes.inlineCard;
    var cardAdf = utils_2.processRawValue(schema, cardData);
    var tr = editorState.tr;
    if (cardAdf) {
        // Should prevent any other node than cards? [inlineCard, blockCard].includes(cardAdf.type)
        var nodeContexts_1 = requests
            .map(function (request) { return replaceLinksToCards(tr, cardAdf, schema, request); })
            .filter(function (context) { return !!context; }); // context exist
        // Send analytics information
        if (nodeContexts_1.length) {
            var nodeContext = nodeContexts_1.every(function (context) { return context === nodeContexts_1[0]; })
                ? nodeContexts_1[0]
                : 'mixed';
            var nodeType = cardAdf.type === inlineCard ? 'inlineCard' : 'blockCard';
            var _a = tslib_1.__read(url.split('/'), 3), domainName = _a[2];
            analytics_1.addAnalytics(editorState, tr, {
                action: analytics_1.ACTION.INSERTED,
                actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                actionSubjectId: analytics_1.ACTION_SUBJECT_ID.SMART_LINK,
                eventType: analytics_1.EVENT_TYPE.TRACK,
                attributes: {
                    inputMethod: requests[0]
                        .source /* TODO: what if each request has a different source?
                               unlikely, but need to define behaviour.
      
                               ignore analytics event? take first? provide 'mixed' as well?*/,
                    nodeType: nodeType,
                    nodeContext: nodeContext,
                    domainName: domainName,
                },
            });
        }
    }
    if (dispatch) {
        dispatch(actions_1.resolveCard(url)(prosemirror_history_1.closeHistory(tr)));
    }
    return true;
}; };
exports.queueCardsFromChangedTr = function (state, tr, source, normalizeLinkText) {
    if (normalizeLinkText === void 0) { normalizeLinkText = true; }
    var schema = state.schema;
    var link = schema.marks.link;
    var requests = [];
    utils_2.nodesBetweenChanged(tr, function (node, pos) {
        if (!node.isText) {
            return true;
        }
        var linkMark = node.marks.find(function (mark) { return mark.type === link; });
        if (linkMark) {
            if (!shouldReplace(node, normalizeLinkText)) {
                return false;
            }
            requests.push({
                url: linkMark.attrs.href,
                pos: pos,
                appearance: 'inline',
                compareLinkText: normalizeLinkText,
                source: source,
            });
        }
        return false;
    });
    return actions_1.queueCards(requests)(tr);
};
exports.changeSelectedCardToLink = function (text, href) { return function (state, dispatch) {
    var selectedNode = state.selection instanceof prosemirror_state_1.NodeSelection && state.selection.node;
    if (!selectedNode) {
        return false;
    }
    var link = state.schema.marks.link;
    var url = selectedNode.attrs.url || selectedNode.attrs.data.url;
    var tr = state.tr.replaceSelectionWith(state.schema.text(text || url, [link.create({ href: href || url })]), false);
    if (dispatch) {
        dispatch(tr.scrollIntoView());
    }
    return true;
}; };
exports.changeSelectedCardToText = function (text) { return function (state, dispatch) {
    var selectedNode = state.selection instanceof prosemirror_state_1.NodeSelection && state.selection.node;
    if (!selectedNode) {
        return false;
    }
    var tr = state.tr.replaceSelectionWith(state.schema.text(text), false);
    if (dispatch) {
        dispatch(tr.scrollIntoView());
    }
    return true;
}; };
exports.setSelectedCardAppearance = function (appearance) { return function (state, dispatch) {
    var selectedNode = state.selection instanceof prosemirror_state_1.NodeSelection && state.selection.node;
    if (!selectedNode) {
        return false;
    }
    if (utils_1.appearanceForNodeType(selectedNode.type) === appearance) {
        return false;
    }
    var _a = state.schema.nodes, inlineCard = _a.inlineCard, blockCard = _a.blockCard;
    var pos = state.selection.from;
    if (appearance === 'block' && state.selection.$from.parent.childCount === 1) {
        var tr_1 = state.tr.replaceRangeWith(pos - 1, pos + selectedNode.nodeSize + 1, blockCard.createChecked(selectedNode.attrs, undefined, selectedNode.marks));
        if (dispatch) {
            dispatch(tr_1.scrollIntoView());
        }
        return true;
    }
    var tr = state.tr.setNodeMarkup(pos, appearance === 'inline' ? inlineCard : blockCard, selectedNode.attrs, selectedNode.marks);
    if (dispatch) {
        dispatch(tr.scrollIntoView());
    }
    return true;
}; };
//# sourceMappingURL=doc.js.map