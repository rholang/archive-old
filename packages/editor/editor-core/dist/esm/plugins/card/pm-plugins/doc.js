import { __read } from "tslib";
import { NodeSelection } from 'prosemirror-state';
import { pluginKey } from './main';
import { resolveCard, queueCards } from './actions';
import { appearanceForNodeType } from '../utils';
import { processRawValue, nodesBetweenChanged } from '../../../utils';
import { Fragment } from 'prosemirror-model';
import { md } from '../../paste/pm-plugins/main';
import { closeHistory } from 'prosemirror-history';
import { addAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, EVENT_TYPE, } from '../../../plugins/analytics';
import { safeInsert } from 'prosemirror-utils';
import { isSafeUrl } from '@atlaskit/adf-schema';
export function shouldReplace(node, compareLinkText, compareToUrl) {
    if (compareLinkText === void 0) { compareLinkText = true; }
    var linkMark = node.marks.find(function (mark) { return mark.type.name === 'link'; });
    if (!linkMark) {
        // not a link anymore
        return false;
    }
    // ED-6041: compare normalised link text after linkfy from Markdown transformer
    // instead, since it always decodes URL ('%20' -> ' ') on the link text
    var normalisedHref = md.normalizeLinkText(linkMark.attrs.href);
    var normalizedLinkText = md.normalizeLinkText(node.text || '');
    if (compareLinkText && normalisedHref !== normalizedLinkText) {
        return false;
    }
    if (compareToUrl) {
        var normalizedUrl = md.normalizeLinkText(compareToUrl);
        if (normalizedUrl !== normalisedHref) {
            return false;
        }
    }
    return true;
}
export function insertCard(tr, cardAdf, schema) {
    var inlineCard = schema.nodes.inlineCard;
    // ED-5638: add an extra space after inline cards to avoid re-rendering them
    var nodes = [cardAdf];
    if (cardAdf.type === inlineCard) {
        nodes.push(schema.text(' '));
    }
    return safeInsert(Fragment.fromArray(nodes))(tr);
}
/**
 * Attempt to replace the link into the respective card.
 */
function replaceLinksToCards(tr, cardAdf, schema, request) {
    var inlineCard = schema.nodes.inlineCard;
    var url = request.url;
    if (!isSafeUrl(url)) {
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
export var replaceQueuedUrlWithCard = function (url, cardData) { return function (editorState, dispatch) {
    var state = pluginKey.getState(editorState);
    if (!state) {
        return false;
    }
    // find the requests for this URL
    var requests = state.requests.filter(function (req) { return req.url === url; });
    // try to transform response to ADF
    var schema = editorState.schema;
    var inlineCard = schema.nodes.inlineCard;
    var cardAdf = processRawValue(schema, cardData);
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
            var _a = __read(url.split('/'), 3), domainName = _a[2];
            addAnalytics(editorState, tr, {
                action: ACTION.INSERTED,
                actionSubject: ACTION_SUBJECT.DOCUMENT,
                actionSubjectId: ACTION_SUBJECT_ID.SMART_LINK,
                eventType: EVENT_TYPE.TRACK,
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
        dispatch(resolveCard(url)(closeHistory(tr)));
    }
    return true;
}; };
export var queueCardsFromChangedTr = function (state, tr, source, normalizeLinkText) {
    if (normalizeLinkText === void 0) { normalizeLinkText = true; }
    var schema = state.schema;
    var link = schema.marks.link;
    var requests = [];
    nodesBetweenChanged(tr, function (node, pos) {
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
    return queueCards(requests)(tr);
};
export var changeSelectedCardToLink = function (text, href) { return function (state, dispatch) {
    var selectedNode = state.selection instanceof NodeSelection && state.selection.node;
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
export var changeSelectedCardToText = function (text) { return function (state, dispatch) {
    var selectedNode = state.selection instanceof NodeSelection && state.selection.node;
    if (!selectedNode) {
        return false;
    }
    var tr = state.tr.replaceSelectionWith(state.schema.text(text), false);
    if (dispatch) {
        dispatch(tr.scrollIntoView());
    }
    return true;
}; };
export var setSelectedCardAppearance = function (appearance) { return function (state, dispatch) {
    var selectedNode = state.selection instanceof NodeSelection && state.selection.node;
    if (!selectedNode) {
        return false;
    }
    if (appearanceForNodeType(selectedNode.type) === appearance) {
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