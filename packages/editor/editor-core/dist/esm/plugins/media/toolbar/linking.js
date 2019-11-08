import { __assign } from "tslib";
import * as React from 'react';
import LinkIcon from '@atlaskit/icon/glyph/editor/link';
import OpenIcon from '@atlaskit/icon/glyph/shortcut';
import { ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, addAnalytics, EVENT_TYPE, } from '../../analytics';
import { hideLinkingToolbar, setUrlToMedia, showLinkingToolbar, unlink, } from '../commands/linking';
import { getMediaLinkingState } from '../pm-plugins/linking';
import { linkToolbarMessages } from '../../../messages';
import MediaLinkingToolbar from '../ui/MediaLinkingToolbar';
import { RECENT_SEARCH_HEIGHT_IN_PX, RECENT_SEARCH_WIDTH_IN_PX, } from '../../../ui/RecentSearch/ToolbarComponents';
export function shouldShowMediaLinkToolbar(editorState) {
    var mediaLinkingState = getMediaLinkingState(editorState);
    if (!mediaLinkingState || mediaLinkingState.mediaPos === null) {
        return false;
    }
    var _a = editorState.schema, mediaSingle = _a.nodes.mediaSingle, link = _a.marks.link;
    var $pos = editorState.doc.resolve(mediaLinkingState.mediaPos);
    var node = editorState.doc.nodeAt(mediaLinkingState.mediaPos);
    var parent = $pos.parent;
    return (!!node &&
        parent &&
        node.type === mediaSingle &&
        parent.type.allowsMarkType(link));
}
export var buildLinkingButtons = function (state, intl) {
    var mediaLinkingState = getMediaLinkingState(state);
    if (mediaLinkingState.editable) {
        return [
            {
                type: 'button',
                onClick: showLinkingToolbar,
                selected: false,
                title: intl.formatMessage(linkToolbarMessages.editLink),
                showTitle: true,
            },
            { type: 'separator' },
            {
                type: 'button',
                target: '_blank',
                href: mediaLinkingState.link,
                onClick: function (state, dispatch) {
                    // Track if is visited
                    if (dispatch) {
                        dispatch(addAnalytics(state, state.tr, {
                            eventType: EVENT_TYPE.TRACK,
                            action: ACTION.VISITED,
                            actionSubject: ACTION_SUBJECT.MEDIA_SINGLE,
                            actionSubjectId: ACTION_SUBJECT_ID.MEDIA_LINK,
                        }));
                    }
                    return true;
                },
                selected: false,
                title: intl.formatMessage(linkToolbarMessages.openLink),
                icon: OpenIcon,
                className: 'hyperlink-open-link',
            },
        ];
    }
    return [
        {
            type: 'button',
            icon: LinkIcon,
            title: intl.formatMessage(linkToolbarMessages.addLink),
            onClick: showLinkingToolbar,
        },
    ];
};
export var getLinkingToolbar = function (toolbarBaseConfig, mediaLinkingState, state, intl, providerFactory) {
    var link = mediaLinkingState.link, visible = mediaLinkingState.visible, editing = mediaLinkingState.editable, mediaPos = mediaLinkingState.mediaPos;
    if (visible && mediaPos !== null) {
        var node = state.doc.nodeAt(mediaPos);
        if (node) {
            return __assign(__assign({}, toolbarBaseConfig), { height: RECENT_SEARCH_HEIGHT_IN_PX, width: RECENT_SEARCH_WIDTH_IN_PX, forcePlacement: true, items: [
                    {
                        type: 'custom',
                        render: function (view, idx) {
                            if (!view || !providerFactory) {
                                return null;
                            }
                            return (React.createElement(MediaLinkingToolbar, { key: idx, displayUrl: link, providerFactory: providerFactory, intl: intl, editing: editing, onUnlink: function () { return unlink(view.state, view.dispatch, view); }, onBack: function (href, meta) {
                                    if (href.trim() && meta.inputMethod) {
                                        setUrlToMedia(href, meta.inputMethod)(view.state, view.dispatch, view);
                                    }
                                    hideLinkingToolbar(view.state, view.dispatch, view);
                                }, onCancel: function () {
                                    return hideLinkingToolbar(view.state, view.dispatch, view);
                                }, onSubmit: function (href, meta) {
                                    setUrlToMedia(href, meta.inputMethod)(view.state, view.dispatch, view);
                                    hideLinkingToolbar(view.state, view.dispatch, view);
                                }, onBlur: function () {
                                    hideLinkingToolbar(view.state, view.dispatch, view);
                                } }));
                        },
                    },
                ] });
        }
    }
};
//# sourceMappingURL=linking.js.map