"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var main_1 = require("./pm-plugins/main");
var commands_1 = require("./commands");
var HyperlinkAddToolbar_1 = tslib_1.__importDefault(require("./ui/HyperlinkAddToolbar"));
var unlink_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/unlink"));
var shortcut_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/shortcut"));
var utils_1 = require("./utils");
var messages_1 = require("../../messages");
var ToolbarComponents_1 = require("../../ui/RecentSearch/ToolbarComponents");
/* type guard for edit links */
function isEditLink(linkMark) {
    return linkMark.pos !== undefined;
}
function getLinkText(activeLinkMark, state) {
    if (!activeLinkMark.node) {
        return undefined;
    }
    var textToUrl = utils_1.normalizeUrl(activeLinkMark.node.text);
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
                return commands_1.setLinkHref(url, isEditLink(activeLinkMark) ? activeLinkMark.pos : activeLinkMark.from, isEditLink(activeLinkMark) ? undefined : activeLinkMark.to, isTabPressed)(view.state, view.dispatch);
            }
            if (isEditLink(activeLinkMark) && activeLinkMark.node && !url) {
                commands_1.removeLink(activeLinkMark.pos)(view.state, view.dispatch);
            }
            return commands_1.hideLinkToolbar()(view.state, view.dispatch);
        }
        case 'text': {
            if (text && url) {
                return activeLinkMark.type === 'INSERT'
                    ? commands_1.insertLink(activeLinkMark.from, activeLinkMark.to, url, text)(view.state, view.dispatch)
                    : commands_1.setLinkText(text, activeLinkMark.pos)(view.state, view.dispatch);
            }
            return commands_1.hideLinkToolbar()(view.state, view.dispatch);
        }
        default: {
            return commands_1.hideLinkToolbar()(view.state, view.dispatch);
        }
    }
}; };
exports.getToolbarConfig = function (state, _a, providerFactory) {
    var formatMessage = _a.formatMessage;
    var linkState = main_1.stateKey.getState(state);
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
                var labelOpenLink = formatMessage(messages_1.linkToolbarMessages.openLink);
                var labelUnlink = formatMessage(messages_1.linkToolbarMessages.unlink);
                var editLink = formatMessage(messages_1.linkToolbarMessages.editLink);
                return tslib_1.__assign(tslib_1.__assign({}, hyperLinkToolbar), { height: 32, width: 250, items: [
                        {
                            type: 'button',
                            onClick: commands_1.editInsertedLink(),
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
                            icon: shortcut_1.default,
                            className: 'hyperlink-open-link',
                        },
                        {
                            type: 'separator',
                        },
                        {
                            type: 'button',
                            onClick: commands_1.removeLink(pos),
                            selected: false,
                            title: labelUnlink,
                            icon: unlink_1.default,
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
                return tslib_1.__assign(tslib_1.__assign({}, hyperLinkToolbar), { height: ToolbarComponents_1.RECENT_SEARCH_HEIGHT_IN_PX, width: ToolbarComponents_1.RECENT_SEARCH_WIDTH_IN_PX, items: [
                        {
                            type: 'custom',
                            render: function (view, idx) {
                                if (!view) {
                                    return null;
                                }
                                return (React.createElement(HyperlinkAddToolbar_1.default, { key: idx, displayUrl: link_1, displayText: displayText_1 || '', providerFactory: providerFactory, onSubmit: function (href, text, inputMethod) {
                                        isEditLink(activeLinkMark_1)
                                            ? commands_1.updateLink(href, text, activeLinkMark_1.pos)(view.state, view.dispatch)
                                            : commands_1.insertLinkWithAnalytics(inputMethod, activeLinkMark_1.from, activeLinkMark_1.to, href, text)(view.state, view.dispatch);
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