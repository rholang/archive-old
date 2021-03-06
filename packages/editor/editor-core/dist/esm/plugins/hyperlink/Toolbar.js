import { __assign } from "tslib";
import * as React from 'react';
import { stateKey, } from './pm-plugins/main';
import { removeLink, setLinkText, insertLink, editInsertedLink, hideLinkToolbar, setLinkHref, updateLink, insertLinkWithAnalytics, } from './commands';
import RecentList from './ui/HyperlinkAddToolbar';
import UnlinkIcon from '@atlaskit/icon/glyph/editor/unlink';
import OpenIcon from '@atlaskit/icon/glyph/shortcut';
import { normalizeUrl } from './utils';
import { linkToolbarMessages as linkToolbarCommonMessages } from '../../messages';
import { RECENT_SEARCH_HEIGHT_IN_PX, RECENT_SEARCH_WIDTH_IN_PX, } from '../../ui/RecentSearch/ToolbarComponents';
/* type guard for edit links */
function isEditLink(linkMark) {
    return linkMark.pos !== undefined;
}
function getLinkText(activeLinkMark, state) {
    if (!activeLinkMark.node) {
        return undefined;
    }
    var textToUrl = normalizeUrl(activeLinkMark.node.text);
    var linkMark = activeLinkMark.node.marks.find(function (mark) { return mark.type === state.schema.marks.link; });
    var linkHref = linkMark && linkMark.attrs.href;
    if (textToUrl === linkHref) {
        return undefined;
    }
    return activeLinkMark.node.text;
}
var handleBlur = function (activeLinkMark, view) { return function (type, url, text, isTabPressed) {
    switch (type) {
        case 'url': {
            if (url) {
                return setLinkHref(url, isEditLink(activeLinkMark) ? activeLinkMark.pos : activeLinkMark.from, isEditLink(activeLinkMark) ? undefined : activeLinkMark.to, isTabPressed)(view.state, view.dispatch);
            }
            if (isEditLink(activeLinkMark) && activeLinkMark.node && !url) {
                removeLink(activeLinkMark.pos)(view.state, view.dispatch);
            }
            return hideLinkToolbar()(view.state, view.dispatch);
        }
        case 'text': {
            if (text && url) {
                return activeLinkMark.type === 'INSERT'
                    ? insertLink(activeLinkMark.from, activeLinkMark.to, url, text)(view.state, view.dispatch)
                    : setLinkText(text, activeLinkMark.pos)(view.state, view.dispatch);
            }
            return hideLinkToolbar()(view.state, view.dispatch);
        }
        default: {
            return hideLinkToolbar()(view.state, view.dispatch);
        }
    }
}; };
export var getToolbarConfig = function (state, _a, providerFactory) {
    var formatMessage = _a.formatMessage;
    var linkState = stateKey.getState(state);
    if (linkState && linkState.activeLinkMark) {
        var activeLinkMark_1 = linkState.activeLinkMark;
        var hyperLinkToolbar = {
            title: 'Hyperlink floating controls',
            nodeType: [
                state.schema.nodes.text,
                state.schema.nodes.paragraph,
                state.schema.nodes.heading,
                state.schema.nodes.taskItem,
                state.schema.nodes.decisionItem,
            ].filter(function (nodeType) { return !!nodeType; }),
            align: 'left',
            className: activeLinkMark_1.type.match('INSERT|EDIT_INSERTED')
                ? 'hyperlink-floating-toolbar'
                : '',
        };
        switch (activeLinkMark_1.type) {
            case 'EDIT': {
                var pos = activeLinkMark_1.pos, node = activeLinkMark_1.node;
                var linkMark = node.marks.filter(function (mark) { return mark.type === state.schema.marks.link; });
                var link = linkMark[0] && linkMark[0].attrs.href;
                var labelOpenLink = formatMessage(linkToolbarCommonMessages.openLink);
                var labelUnlink = formatMessage(linkToolbarCommonMessages.unlink);
                var editLink = formatMessage(linkToolbarCommonMessages.editLink);
                return __assign(__assign({}, hyperLinkToolbar), { height: 32, width: 250, items: [
                        {
                            type: 'button',
                            onClick: editInsertedLink(),
                            selected: false,
                            title: editLink,
                            showTitle: true,
                        },
                        {
                            type: 'separator',
                        },
                        {
                            type: 'button',
                            target: '_blank',
                            href: link,
                            onClick: function () { return true; },
                            selected: false,
                            title: labelOpenLink,
                            icon: OpenIcon,
                            className: 'hyperlink-open-link',
                        },
                        {
                            type: 'separator',
                        },
                        {
                            type: 'button',
                            onClick: removeLink(pos),
                            selected: false,
                            title: labelUnlink,
                            icon: UnlinkIcon,
                        },
                    ] });
            }
            case 'EDIT_INSERTED':
            case 'INSERT': {
                var link_1;
                if (isEditLink(activeLinkMark_1) && activeLinkMark_1.node) {
                    var linkMark = activeLinkMark_1.node.marks.filter(function (mark) { return mark.type === state.schema.marks.link; });
                    link_1 = linkMark[0] && linkMark[0].attrs.href;
                }
                var displayText_1 = isEditLink(activeLinkMark_1)
                    ? getLinkText(activeLinkMark_1, state)
                    : linkState.activeText;
                return __assign(__assign({}, hyperLinkToolbar), { height: RECENT_SEARCH_HEIGHT_IN_PX, width: RECENT_SEARCH_WIDTH_IN_PX, items: [
                        {
                            type: 'custom',
                            render: function (view, idx) {
                                if (!view) {
                                    return null;
                                }
                                return (React.createElement(RecentList, { key: idx, displayUrl: link_1, displayText: displayText_1 || '', providerFactory: providerFactory, onSubmit: function (href, text, inputMethod) {
                                        isEditLink(activeLinkMark_1)
                                            ? updateLink(href, text, activeLinkMark_1.pos)(view.state, view.dispatch)
                                            : insertLinkWithAnalytics(inputMethod, activeLinkMark_1.from, activeLinkMark_1.to, href, text)(view.state, view.dispatch);
                                        view.focus();
                                    }, onBlur: handleBlur(activeLinkMark_1, view) }));
                            },
                        },
                    ] });
            }
        }
    }
    return;
};
//# sourceMappingURL=Toolbar.js.map