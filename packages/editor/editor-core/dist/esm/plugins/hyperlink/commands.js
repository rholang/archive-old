import { __assign } from "tslib";
import { normalizeUrl } from './utils';
import { stateKey, LinkAction, canLinkBeCreatedInRange, } from './pm-plugins/main';
import { Selection } from 'prosemirror-state';
import { filter } from '../../utils/commands';
import { addAnalytics, ACTION, ACTION_SUBJECT, INPUT_METHOD, EVENT_TYPE, ACTION_SUBJECT_ID, withAnalytics, } from '../analytics';
import { queueCardsFromChangedTr } from '../card/pm-plugins/doc';
import { getLinkCreationAnalyticsEvent } from './analytics';
export function isTextAtPos(pos) {
    return function (state) {
        var node = state.doc.nodeAt(pos);
        return !!node && node.isText;
    };
}
export function isLinkAtPos(pos) {
    return function (state) {
        var node = state.doc.nodeAt(pos);
        return !!node && state.schema.marks.link.isInSet(node.marks);
    };
}
export function setLinkHref(href, pos, to, isTabPressed) {
    return filter(isTextAtPos(pos), function (state, dispatch) {
        var $pos = state.doc.resolve(pos);
        var node = state.doc.nodeAt(pos);
        var linkMark = state.schema.marks.link;
        var mark = linkMark.isInSet(node.marks);
        var url = normalizeUrl(href);
        if (mark && mark.attrs.href === url) {
            return false;
        }
        var rightBound = to && pos !== to ? to : pos - $pos.textOffset + node.nodeSize;
        var tr = state.tr.removeMark(pos, rightBound, linkMark);
        if (href.trim()) {
            tr.addMark(pos, rightBound, linkMark.create(__assign(__assign({}, ((mark && mark.attrs) || {})), { href: url })));
        }
        if (!isTabPressed) {
            tr.setMeta(stateKey, { type: LinkAction.HIDE_TOOLBAR });
        }
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    });
}
export function updateLink(href, text, pos, to) {
    return function (state, dispatch) {
        var $pos = state.doc.resolve(pos);
        var node = state.doc.nodeAt(pos);
        if (!node) {
            return false;
        }
        var url = normalizeUrl(href);
        if (!url) {
            return false;
        }
        var mark = state.schema.marks.link.isInSet(node.marks);
        var linkMark = state.schema.marks.link;
        var rightBound = to && pos !== to ? to : pos - $pos.textOffset + node.nodeSize;
        var tr = state.tr;
        tr.insertText(text, pos, rightBound);
        tr.addMark(pos, pos + text.length, linkMark.create(__assign(__assign({}, ((mark && mark.attrs) || {})), { url: url })));
        tr.setMeta(stateKey, { type: LinkAction.HIDE_TOOLBAR });
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    };
}
export function setLinkText(text, pos, to) {
    return filter(isLinkAtPos(pos), function (state, dispatch) {
        var $pos = state.doc.resolve(pos);
        var node = state.doc.nodeAt(pos);
        var mark = state.schema.marks.link.isInSet(node.marks);
        if (node && text.length > 0 && text !== node.text) {
            var rightBound = to && pos !== to ? to : pos - $pos.textOffset + node.nodeSize;
            var tr = state.tr;
            tr.insertText(text, pos, rightBound);
            tr.addMark(pos, pos + text.length, mark);
            tr.setMeta(stateKey, { type: LinkAction.HIDE_TOOLBAR });
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        }
        return false;
    });
}
export function insertLink(from, to, href, text, source) {
    return filter(canLinkBeCreatedInRange(from, to), function (state, dispatch) {
        var link = state.schema.marks.link;
        if (href.trim()) {
            var tr = state.tr;
            var normalizedUrl = normalizeUrl(href);
            if (from === to) {
                var textContent = text || href;
                tr.insertText(textContent, from, to);
                tr.addMark(from, from + textContent.length, link.create({ href: normalizedUrl }));
            }
            else {
                tr.addMark(from, to, link.create({ href: normalizedUrl }));
                tr.setSelection(Selection.near(tr.doc.resolve(to)));
            }
            queueCardsFromChangedTr(state, tr, source, false);
            tr.setMeta(stateKey, { type: LinkAction.HIDE_TOOLBAR });
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        }
        return false;
    });
}
export var insertLinkWithAnalytics = function (inputMethod, from, to, href, text) {
    return withAnalytics(getLinkCreationAnalyticsEvent(inputMethod, href))(insertLink(from, to, href, text, inputMethod));
};
export function removeLink(pos) {
    return setLinkHref('', pos);
}
export function editInsertedLink() {
    return function (state, dispatch) {
        if (dispatch) {
            dispatch(state.tr.setMeta(stateKey, {
                type: LinkAction.EDIT_INSERTED_TOOLBAR,
            }));
        }
        return true;
    };
}
export function showLinkToolbar(inputMethod) {
    if (inputMethod === void 0) { inputMethod = INPUT_METHOD.TOOLBAR; }
    return function (state, dispatch) {
        if (dispatch) {
            var tr = state.tr.setMeta(stateKey, {
                type: LinkAction.SHOW_INSERT_TOOLBAR,
            });
            tr = addAnalytics(state, tr, {
                action: ACTION.INVOKED,
                actionSubject: ACTION_SUBJECT.TYPEAHEAD,
                actionSubjectId: ACTION_SUBJECT_ID.TYPEAHEAD_LINK,
                attributes: { inputMethod: inputMethod },
                eventType: EVENT_TYPE.UI,
            });
            dispatch(tr);
        }
        return true;
    };
}
export function hideLinkToolbar() {
    return function (state, dispatch) {
        if (dispatch) {
            dispatch(state.tr.setMeta(stateKey, { type: LinkAction.HIDE_TOOLBAR }));
        }
        return true;
    };
}
//# sourceMappingURL=commands.js.map