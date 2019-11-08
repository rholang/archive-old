"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var react_intl_1 = require("react-intl");
var prosemirror_utils_1 = require("prosemirror-utils");
var main_1 = require("../pm-plugins/main");
var messages_1 = tslib_1.__importDefault(require("../../../messages"));
var media_wrap_left_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/media-wrap-left"));
var media_wrap_right_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/media-wrap-right"));
var media_wide_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/media-wide"));
var media_full_width_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/media-full-width"));
var align_image_left_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/align-image-left"));
var align_image_right_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/align-image-right"));
var align_image_center_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/align-image-center"));
var media_single_1 = require("../utils/media-single");
var alignmentIcons = [
    { value: 'align-start', icon: align_image_left_1.default },
    { value: 'center', icon: align_image_center_1.default },
    { value: 'align-end', icon: align_image_right_1.default },
];
var wrappingIcons = [
    { value: 'wrap-left', icon: media_wrap_left_1.default },
    { value: 'wrap-right', icon: media_wrap_right_1.default },
];
var breakoutIcons = [
    { value: 'wide', icon: media_wide_1.default },
    { value: 'full-width', icon: media_full_width_1.default },
];
exports.messages = react_intl_1.defineMessages({
    wrapLeft: {
        id: 'fabric.editor.wrapLeft',
        defaultMessage: 'Wrap left',
        description: 'Aligns your image to the left and wraps text around it.',
    },
    wrapRight: {
        id: 'fabric.editor.wrapRight',
        defaultMessage: 'Wrap right',
        description: 'Aligns your image to the right and wraps text around it.',
    },
});
var layoutToMessages = {
    'wrap-left': exports.messages.wrapLeft,
    center: messages_1.default.alignImageCenter,
    'wrap-right': exports.messages.wrapRight,
    wide: messages_1.default.layoutWide,
    'full-width': messages_1.default.layoutFullWidth,
    'align-end': messages_1.default.alignImageRight,
    'align-start': messages_1.default.alignImageLeft,
};
var makeAlign = function (layout) {
    return function (state, dispatch) {
        var pluginState = main_1.stateKey.getState(state);
        if (!pluginState || !dispatch) {
            return false;
        }
        var mediaSingle = state.schema.nodes.mediaSingle;
        var mediaSingleNode = pluginState.selectedMediaContainerNode();
        if (!mediaSingleNode || mediaSingleNode.type !== mediaSingle) {
            return false;
        }
        var newAttrs = media_single_1.alignAttributes(layout, mediaSingleNode.attrs);
        dispatch(state.tr.setNodeMarkup(state.selection.from, undefined, newAttrs));
        return true;
    };
};
var mapIconsToToolbarItem = function (icons, layout, intl) {
    return icons.map(function (toolbarItem) {
        var value = toolbarItem.value;
        return {
            type: 'button',
            icon: toolbarItem.icon,
            title: intl.formatMessage(layoutToMessages[value]),
            selected: layout === value,
            onClick: makeAlign(value),
        };
    });
};
var shouldHideLayoutToolbar = function (selection, _a, allowResizingInTables) {
    var nodes = _a.nodes;
    return prosemirror_utils_1.hasParentNodeOfType(tslib_1.__spread([
        nodes.bodiedExtension,
        nodes.layoutSection,
        nodes.listItem
    ], (allowResizingInTables ? [] : [nodes.table])))(selection);
};
var buildLayoutButtons = function (state, intl, allowResizing, allowResizingInTables) {
    var selection = state.selection;
    var mediaSingle = state.schema.nodes.mediaSingle;
    if (!(selection instanceof prosemirror_state_1.NodeSelection) ||
        !selection.node ||
        !mediaSingle ||
        shouldHideLayoutToolbar(selection, state.schema, allowResizingInTables)) {
        return [];
    }
    var layout = selection.node.attrs.layout;
    var toolbarItems = tslib_1.__spread(mapIconsToToolbarItem(alignmentIcons, layout, intl), [
        { type: 'separator' }
    ], mapIconsToToolbarItem(wrappingIcons, layout, intl));
    if (!allowResizing) {
        toolbarItems = toolbarItems.concat(tslib_1.__spread([
            { type: 'separator' }
        ], mapIconsToToolbarItem(breakoutIcons, layout, intl)));
    }
    return toolbarItems;
};
exports.default = buildLayoutButtons;
//# sourceMappingURL=buildMediaLayoutButtons.js.map