"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_intl_1 = require("react-intl");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_1 = require("prosemirror-utils");
var remove_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/remove"));
var unlink_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/unlink"));
var shortcut_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/shortcut"));
var analytics_1 = require("../../analytics");
var analytics_2 = require("../analytics");
var messages_1 = require("../../messages");
var messages_2 = tslib_1.__importDefault(require("../../messages"));
var decoration_1 = require("../base/pm-plugins/decoration");
var doc_1 = require("./pm-plugins/doc");
var main_1 = require("./pm-plugins/main");
var EditLinkToolbar_1 = require("./ui/EditLinkToolbar");
var utils_1 = require("./utils");
var adf_schema_1 = require("@atlaskit/adf-schema");
exports.messages = react_intl_1.defineMessages({
    block: {
        id: 'fabric.editor.displayBlock',
        defaultMessage: 'Display as card',
        description: 'Display link as a card with a rich preview similar to in a Facebook feed with page title, description, and potentially an image.',
    },
    inline: {
        id: 'fabric.editor.displayInline',
        defaultMessage: 'Display as link',
        description: 'Display link with the title only.',
    },
    link: {
        id: 'fabric.editor.displayLink',
        defaultMessage: 'Display as text',
        description: 'Convert the card to become a regular text-based hyperlink.',
    },
});
exports.removeCard = function (state, dispatch) {
    if (!(state.selection instanceof prosemirror_state_1.NodeSelection)) {
        return false;
    }
    var type = state.selection.node.type.name;
    var payload = {
        action: analytics_2.ACTION.DELETED,
        actionSubject: analytics_2.ACTION_SUBJECT.SMART_LINK,
        actionSubjectId: type,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.TOOLBAR,
            displayMode: type,
        },
        eventType: analytics_2.EVENT_TYPE.TRACK,
    };
    if (dispatch) {
        dispatch(analytics_2.addAnalytics(state, prosemirror_utils_1.removeSelectedNode(state.tr), payload));
    }
    analytics_1.analyticsService.trackEvent('atlassian.editor.format.card.delete.button');
    return true;
};
exports.visitCardLink = function (state, dispatch) {
    if (!(state.selection instanceof prosemirror_state_1.NodeSelection)) {
        return false;
    }
    var type = state.selection.node.type;
    var url = utils_1.titleUrlPairFromNode(state.selection.node).url;
    var payload = {
        action: analytics_2.ACTION.VISITED,
        actionSubject: analytics_2.ACTION_SUBJECT.SMART_LINK,
        actionSubjectId: type.name,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.TOOLBAR,
        },
        eventType: analytics_2.EVENT_TYPE.TRACK,
    };
    // All card links should open in the same tab per https://product-fabric.atlassian.net/browse/MS-1583.
    analytics_1.analyticsService.trackEvent('atlassian.editor.format.card.visit.button');
    // We are in edit mode here, open the smart card URL in a new window.
    window.open(url);
    if (dispatch) {
        dispatch(analytics_2.addAnalytics(state, state.tr, payload));
    }
    return true;
};
var unlinkCard = function (node, state) {
    var displayInfo = utils_1.displayInfoForCard(node, utils_1.findCardInfo(state));
    var text = displayInfo.title || displayInfo.url;
    if (text) {
        return doc_1.changeSelectedCardToText(text);
    }
    return function () { return false; };
};
var generateDeleteButton = function (node, state, intl) {
    var inlineCard = state.schema.nodes.inlineCard;
    if (node.type === inlineCard) {
        return {
            type: 'button',
            title: intl.formatMessage(messages_1.linkToolbarMessages.unlink),
            icon: unlink_1.default,
            onClick: unlinkCard(node, state),
        };
    }
    return {
        type: 'button',
        appearance: 'danger',
        icon: remove_1.default,
        onMouseEnter: decoration_1.hoverDecoration(node.type, true),
        onMouseLeave: decoration_1.hoverDecoration(node.type, false),
        title: intl.formatMessage(messages_2.default.remove),
        onClick: exports.removeCard,
    };
};
var generateToolbarItems = function (state, intl, providerFactory) { return function (node) {
    var url = utils_1.titleUrlPairFromNode(node).url;
    if (url && !adf_schema_1.isSafeUrl(url)) {
        return [];
    }
    var pluginState = main_1.pluginKey.getState(state);
    if (pluginState.showLinkingToolbar) {
        return [
            EditLinkToolbar_1.buildEditLinkToolbar({
                providerFactory: providerFactory,
                node: node,
            }),
        ];
    }
    else {
        return [
            {
                type: 'button',
                selected: false,
                title: intl.formatMessage(messages_1.linkToolbarMessages.editLink),
                showTitle: true,
                onClick: EditLinkToolbar_1.editLink,
            },
            { type: 'separator' },
            {
                type: 'button',
                icon: shortcut_1.default,
                className: 'hyperlink-open-link',
                title: intl.formatMessage(messages_1.linkToolbarMessages.openLink),
                onClick: exports.visitCardLink,
            },
            { type: 'separator' },
            generateDeleteButton(node, state, intl),
        ];
    }
}; };
exports.floatingToolbar = function (state, intl, providerFactory) {
    var _a = state.schema.nodes, inlineCard = _a.inlineCard, blockCard = _a.blockCard;
    var nodeType = [inlineCard, blockCard];
    var pluginState = main_1.pluginKey.getState(state);
    return tslib_1.__assign({ title: 'Card floating controls', nodeType: nodeType, items: generateToolbarItems(state, intl, providerFactory) }, (pluginState.showLinkingToolbar ? EditLinkToolbar_1.editLinkToolbarConfig : {}));
};
//# sourceMappingURL=toolbar.js.map