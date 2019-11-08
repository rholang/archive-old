"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var link_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/link"));
var shortcut_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/shortcut"));
var analytics_1 = require("../../analytics");
var linking_1 = require("../commands/linking");
var linking_2 = require("../pm-plugins/linking");
var messages_1 = require("../../../messages");
var MediaLinkingToolbar_1 = tslib_1.__importDefault(require("../ui/MediaLinkingToolbar"));
var ToolbarComponents_1 = require("../../../ui/RecentSearch/ToolbarComponents");
function shouldShowMediaLinkToolbar(editorState) {
    var mediaLinkingState = linking_2.getMediaLinkingState(editorState);
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
exports.shouldShowMediaLinkToolbar = shouldShowMediaLinkToolbar;
exports.buildLinkingButtons = function (state, intl) {
    var mediaLinkingState = linking_2.getMediaLinkingState(state);
    if (mediaLinkingState.editable) {
        return [
            {
                type: 'button',
                onClick: linking_1.showLinkingToolbar,
                selected: false,
                title: intl.formatMessage(messages_1.linkToolbarMessages.editLink),
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
                        dispatch(analytics_1.addAnalytics(state, state.tr, {
                            eventType: analytics_1.EVENT_TYPE.TRACK,
                            action: analytics_1.ACTION.VISITED,
                            actionSubject: analytics_1.ACTION_SUBJECT.MEDIA_SINGLE,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.MEDIA_LINK,
                        }));
                    }
                    return true;
                },
                selected: false,
                title: intl.formatMessage(messages_1.linkToolbarMessages.openLink),
                icon: shortcut_1.default,
                className: 'hyperlink-open-link',
            },
        ];
    }
    return [
        {
            type: 'button',
            icon: link_1.default,
            title: intl.formatMessage(messages_1.linkToolbarMessages.addLink),
            onClick: linking_1.showLinkingToolbar,
        },
    ];
};
exports.getLinkingToolbar = function (toolbarBaseConfig, mediaLinkingState, state, intl, providerFactory) {
    var link = mediaLinkingState.link, visible = mediaLinkingState.visible, editing = mediaLinkingState.editable, mediaPos = mediaLinkingState.mediaPos;
    if (visible && mediaPos !== null) {
        var node = state.doc.nodeAt(mediaPos);
        if (node) {
            return tslib_1.__assign(tslib_1.__assign({}, toolbarBaseConfig), { height: ToolbarComponents_1.RECENT_SEARCH_HEIGHT_IN_PX, width: ToolbarComponents_1.RECENT_SEARCH_WIDTH_IN_PX, forcePlacement: true, items: [
                    {
                        type: 'custom',
                        render: function (view, idx) {
                            if (!view || !providerFactory) {
                                return null;
                            }
                            return (React.createElement(MediaLinkingToolbar_1.default, { key: idx, displayUrl: link, providerFactory: providerFactory, intl: intl, editing: editing, onUnlink: function () { return linking_1.unlink(view.state, view.dispatch, view); }, onBack: function (href, meta) {
                                    if (href.trim() && meta.inputMethod) {
                                        linking_1.setUrlToMedia(href, meta.inputMethod)(view.state, view.dispatch, view);
                                    }
                                    linking_1.hideLinkingToolbar(view.state, view.dispatch, view);
                                }, onCancel: function () {
                                    return linking_1.hideLinkingToolbar(view.state, view.dispatch, view);
                                }, onSubmit: function (href, meta) {
                                    linking_1.setUrlToMedia(href, meta.inputMethod)(view.state, view.dispatch, view);
                                    linking_1.hideLinkingToolbar(view.state, view.dispatch, view);
                                }, onBlur: function () {
                                    linking_1.hideLinkingToolbar(view.state, view.dispatch, view);
                                } }));
                        },
                    },
                ] });
        }
    }
};
//# sourceMappingURL=linking.js.map