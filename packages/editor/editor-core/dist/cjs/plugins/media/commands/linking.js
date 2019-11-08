"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var linking_1 = require("../pm-plugins/linking");
var utils_1 = require("../../hyperlink/utils");
var commands_1 = require("../../../commands");
var actions_1 = require("../pm-plugins/linking/actions");
var analytics_1 = require("../../analytics");
exports.showLinkingToolbar = linking_1.createMediaLinkingCommand(function (state) {
    var mediaLinkingState = linking_1.getMediaLinkingState(state);
    if (mediaLinkingState && mediaLinkingState.mediaPos !== null) {
        var mediaSingle = state.doc.nodeAt(mediaLinkingState.mediaPos);
        if (mediaSingle) {
            return {
                type: actions_1.MediaLinkingActionsTypes.showToolbar,
            };
        }
    }
    return false;
});
exports.hideLinkingToolbar = linking_1.createMediaLinkingCommand({
    type: actions_1.MediaLinkingActionsTypes.hideToolbar,
});
function getCurrentUrl(state) {
    var linkType = state.schema.marks.link;
    var mediaLinkingState = linking_1.getMediaLinkingState(state);
    if (!mediaLinkingState || mediaLinkingState.mediaPos === null) {
        return;
    }
    var $pos = state.doc.resolve(mediaLinkingState.mediaPos);
    var node = state.doc.nodeAt($pos.pos);
    if (!node) {
        return;
    }
    var hasLink = linkType.isInSet(node.marks);
    if (!hasLink) {
        return;
    }
    var link = node.marks.find(function (mark) { return mark.type === linkType; }); // Already check exist
    var url = link.attrs.href;
    return url;
}
function toggleLinkMark(tr, state, _a) {
    var _b = _a.forceRemove, forceRemove = _b === void 0 ? false : _b, url = _a.url;
    var mediaLinkingState = linking_1.getMediaLinkingState(state);
    if (!mediaLinkingState || mediaLinkingState.mediaPos === null) {
        return tr;
    }
    var $pos = state.doc.resolve(mediaLinkingState.mediaPos);
    var node = state.doc.nodeAt($pos.pos);
    if (!node) {
        return tr;
    }
    var linkMark = state.schema.marks.link;
    var mediaSingle = state.schema.nodes.mediaSingle;
    var toggleBlockLinkMark = commands_1.createToggleBlockMarkOnRange(linkMark, function (prevAttrs, node) {
        // Only add mark to media single
        if (!node || node.type !== mediaSingle) {
            return; //No op
        }
        if (forceRemove) {
            return false;
        }
        var href = utils_1.normalizeUrl(url);
        if (prevAttrs && prevAttrs.href === href) {
            return; //No op
        }
        if (href.trim() === '') {
            return false; // remove
        }
        return tslib_1.__assign(tslib_1.__assign({}, prevAttrs), { href: href });
    }, [mediaSingle]);
    toggleBlockLinkMark($pos.pos, $pos.pos + node.nodeSize - 1, tr, state);
    return tr;
}
exports.unlink = linking_1.createMediaLinkingCommand({
    type: actions_1.MediaLinkingActionsTypes.unlink,
}, function (tr, state) {
    return analytics_1.addAnalytics(state, toggleLinkMark(tr, state, { forceRemove: true }), {
        eventType: analytics_1.EVENT_TYPE.TRACK,
        action: analytics_1.ACTION.UNLINK,
        actionSubject: analytics_1.ACTION_SUBJECT.MEDIA_SINGLE,
        actionSubjectId: analytics_1.ACTION_SUBJECT_ID.MEDIA_LINK,
    });
});
exports.setUrlToMedia = function (url, inputMethod) {
    return linking_1.createMediaLinkingCommand({
        type: actions_1.MediaLinkingActionsTypes.setUrl,
        payload: utils_1.normalizeUrl(url),
    }, function (tr, state) {
        var currentUrl = getCurrentUrl(state);
        if (!currentUrl) {
            // Insert Media Link
            analytics_1.addAnalytics(state, tr, {
                eventType: analytics_1.EVENT_TYPE.TRACK,
                action: analytics_1.ACTION.INSERTED,
                actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                actionSubjectId: analytics_1.ACTION_SUBJECT_ID.MEDIA_LINK,
                attributes: {
                    inputMethod: inputMethod,
                },
            });
        }
        else if (url !== currentUrl) {
            // Change Url Event
            analytics_1.addAnalytics(state, tr, {
                eventType: analytics_1.EVENT_TYPE.TRACK,
                action: analytics_1.ACTION.CHANGED_URL,
                actionSubject: analytics_1.ACTION_SUBJECT.MEDIA_SINGLE,
                actionSubjectId: analytics_1.ACTION_SUBJECT_ID.MEDIA_LINK,
            });
        }
        return toggleLinkMark(tr, state, { url: url });
    });
};
//# sourceMappingURL=linking.js.map