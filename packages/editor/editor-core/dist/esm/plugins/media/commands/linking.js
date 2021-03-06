import { __assign } from "tslib";
import { createMediaLinkingCommand, getMediaLinkingState, } from '../pm-plugins/linking';
import { normalizeUrl } from '../../hyperlink/utils';
import { createToggleBlockMarkOnRange } from '../../../commands';
import { MediaLinkingActionsTypes } from '../pm-plugins/linking/actions';
import { addAnalytics, EVENT_TYPE, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, } from '../../analytics';
export var showLinkingToolbar = createMediaLinkingCommand(function (state) {
    var mediaLinkingState = getMediaLinkingState(state);
    if (mediaLinkingState && mediaLinkingState.mediaPos !== null) {
        var mediaSingle = state.doc.nodeAt(mediaLinkingState.mediaPos);
        if (mediaSingle) {
            return {
                type: MediaLinkingActionsTypes.showToolbar,
            };
        }
    }
    return false;
});
export var hideLinkingToolbar = createMediaLinkingCommand({
    type: MediaLinkingActionsTypes.hideToolbar,
});
function getCurrentUrl(state) {
    var linkType = state.schema.marks.link;
    var mediaLinkingState = getMediaLinkingState(state);
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
    var mediaLinkingState = getMediaLinkingState(state);
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
    var toggleBlockLinkMark = createToggleBlockMarkOnRange(linkMark, function (prevAttrs, node) {
        // Only add mark to media single
        if (!node || node.type !== mediaSingle) {
            return; //No op
        }
        if (forceRemove) {
            return false;
        }
        var href = normalizeUrl(url);
        if (prevAttrs && prevAttrs.href === href) {
            return; //No op
        }
        if (href.trim() === '') {
            return false; // remove
        }
        return __assign(__assign({}, prevAttrs), { href: href });
    }, [mediaSingle]);
    toggleBlockLinkMark($pos.pos, $pos.pos + node.nodeSize - 1, tr, state);
    return tr;
}
export var unlink = createMediaLinkingCommand({
    type: MediaLinkingActionsTypes.unlink,
}, function (tr, state) {
    return addAnalytics(state, toggleLinkMark(tr, state, { forceRemove: true }), {
        eventType: EVENT_TYPE.TRACK,
        action: ACTION.UNLINK,
        actionSubject: ACTION_SUBJECT.MEDIA_SINGLE,
        actionSubjectId: ACTION_SUBJECT_ID.MEDIA_LINK,
    });
});
export var setUrlToMedia = function (url, inputMethod) {
    return createMediaLinkingCommand({
        type: MediaLinkingActionsTypes.setUrl,
        payload: normalizeUrl(url),
    }, function (tr, state) {
        var currentUrl = getCurrentUrl(state);
        if (!currentUrl) {
            // Insert Media Link
            addAnalytics(state, tr, {
                eventType: EVENT_TYPE.TRACK,
                action: ACTION.INSERTED,
                actionSubject: ACTION_SUBJECT.DOCUMENT,
                actionSubjectId: ACTION_SUBJECT_ID.MEDIA_LINK,
                attributes: {
                    inputMethod: inputMethod,
                },
            });
        }
        else if (url !== currentUrl) {
            // Change Url Event
            addAnalytics(state, tr, {
                eventType: EVENT_TYPE.TRACK,
                action: ACTION.CHANGED_URL,
                actionSubject: ACTION_SUBJECT.MEDIA_SINGLE,
                actionSubjectId: ACTION_SUBJECT_ID.MEDIA_LINK,
            });
        }
        return toggleLinkMark(tr, state, { url: url });
    });
};
//# sourceMappingURL=linking.js.map