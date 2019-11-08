"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("./utils");
var main_1 = require("./pm-plugins/main");
var prosemirror_state_1 = require("prosemirror-state");
var commands_1 = require("../../utils/commands");
var analytics_1 = require("../analytics");
var doc_1 = require("../card/pm-plugins/doc");
var analytics_2 = require("./analytics");
function isTextAtPos(pos) {
    return function (state) {
        var node = state.doc.nodeAt(pos);
        return !!node && node.isText;
    };
}
exports.isTextAtPos = isTextAtPos;
function isLinkAtPos(pos) {
    return function (state) {
        var node = state.doc.nodeAt(pos);
        return !!node && state.schema.marks.link.isInSet(node.marks);
    };
}
exports.isLinkAtPos = isLinkAtPos;
function setLinkHref(href, pos, to, isTabPressed) {
    return commands_1.filter(isTextAtPos(pos), function (state, dispatch) {
        var $pos = state.doc.resolve(pos);
        var node = state.doc.nodeAt(pos);
        var linkMark = state.schema.marks.link;
        var mark = linkMark.isInSet(node.marks);
        var url = utils_1.normalizeUrl(href);
        if (mark && mark.attrs.href === url) {
            return false;
        }
        var rightBound = to && pos !== to ? to : pos - $pos.textOffset + node.nodeSize;
        var tr = state.tr.removeMark(pos, rightBound, linkMark);
        if (href.trim()) {
            tr.addMark(pos, rightBound, linkMark.create(tslib_1.__assign(tslib_1.__assign({}, ((mark && mark.attrs) || {})), { href: url })));
        }
        if (!isTabPressed) {
            tr.setMeta(main_1.stateKey, { type: main_1.LinkAction.HIDE_TOOLBAR });
        }
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    });
}
exports.setLinkHref = setLinkHref;
function updateLink(href, text, pos, to) {
    return function (state, dispatch) {
        var $pos = state.doc.resolve(pos);
        var node = state.doc.nodeAt(pos);
        if (!node) {
            return false;
        }
        var url = utils_1.normalizeUrl(href);
        if (!url) {
            return false;
        }
        var mark = state.schema.marks.link.isInSet(node.marks);
        var linkMark = state.schema.marks.link;
        var rightBound = to && pos !== to ? to : pos - $pos.textOffset + node.nodeSize;
        var tr = state.tr;
        tr.insertText(text, pos, rightBound);
        tr.addMark(pos, pos + text.length, linkMark.create(tslib_1.__assign(tslib_1.__assign({}, ((mark && mark.attrs) || {})), { url: url })));
        tr.setMeta(main_1.stateKey, { type: main_1.LinkAction.HIDE_TOOLBAR });
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    };
}
exports.updateLink = updateLink;
function setLinkText(text, pos, to) {
    return commands_1.filter(isLinkAtPos(pos), function (state, dispatch) {
        var $pos = state.doc.resolve(pos);
        var node = state.doc.nodeAt(pos);
        var mark = state.schema.marks.link.isInSet(node.marks);
        if (node && text.length > 0 && text !== node.text) {
            var rightBound = to && pos !== to ? to : pos - $pos.textOffset + node.nodeSize;
            var tr = state.tr;
            tr.insertText(text, pos, rightBound);
            tr.addMark(pos, pos + text.length, mark);
            tr.setMeta(main_1.stateKey, { type: main_1.LinkAction.HIDE_TOOLBAR });
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        }
        return false;
    });
}
exports.setLinkText = setLinkText;
function insertLink(from, to, href, text, source) {
    return commands_1.filter(main_1.canLinkBeCreatedInRange(from, to), function (state, dispatch) {
        var link = state.schema.marks.link;
        if (href.trim()) {
            var tr = state.tr;
            var normalizedUrl = utils_1.normalizeUrl(href);
            if (from === to) {
                var textContent = text || href;
                tr.insertText(textContent, from, to);
                tr.addMark(from, from + textContent.length, link.create({ href: normalizedUrl }));
            }
            else {
                tr.addMark(from, to, link.create({ href: normalizedUrl }));
                tr.setSelection(prosemirror_state_1.Selection.near(tr.doc.resolve(to)));
            }
            doc_1.queueCardsFromChangedTr(state, tr, source, false);
            tr.setMeta(main_1.stateKey, { type: main_1.LinkAction.HIDE_TOOLBAR });
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        }
        return false;
    });
}
exports.insertLink = insertLink;
exports.insertLinkWithAnalytics = function (inputMethod, from, to, href, text) {
    return analytics_1.withAnalytics(analytics_2.getLinkCreationAnalyticsEvent(inputMethod, href))(insertLink(from, to, href, text, inputMethod));
};
function removeLink(pos) {
    return setLinkHref('', pos);
}
exports.removeLink = removeLink;
function editInsertedLink() {
    return function (state, dispatch) {
        if (dispatch) {
            dispatch(state.tr.setMeta(main_1.stateKey, {
                type: main_1.LinkAction.EDIT_INSERTED_TOOLBAR,
            }));
        }
        return true;
    };
}
exports.editInsertedLink = editInsertedLink;
function showLinkToolbar(inputMethod) {
    if (inputMethod === void 0) { inputMethod = analytics_1.INPUT_METHOD.TOOLBAR; }
    return function (state, dispatch) {
        if (dispatch) {
            var tr = state.tr.setMeta(main_1.stateKey, {
                type: main_1.LinkAction.SHOW_INSERT_TOOLBAR,
            });
            tr = analytics_1.addAnalytics(state, tr, {
                action: analytics_1.ACTION.INVOKED,
                actionSubject: analytics_1.ACTION_SUBJECT.TYPEAHEAD,
                actionSubjectId: analytics_1.ACTION_SUBJECT_ID.TYPEAHEAD_LINK,
                attributes: { inputMethod: inputMethod },
                eventType: analytics_1.EVENT_TYPE.UI,
            });
            dispatch(tr);
        }
        return true;
    };
}
exports.showLinkToolbar = showLinkToolbar;
function hideLinkToolbar() {
    return function (state, dispatch) {
        if (dispatch) {
            dispatch(state.tr.setMeta(main_1.stateKey, { type: main_1.LinkAction.HIDE_TOOLBAR }));
        }
        return true;
    };
}
exports.hideLinkToolbar = hideLinkToolbar;
//# sourceMappingURL=commands.js.map