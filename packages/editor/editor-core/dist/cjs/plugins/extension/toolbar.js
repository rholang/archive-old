"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_intl_1 = require("react-intl");
var prosemirror_utils_1 = require("prosemirror-utils");
var remove_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/remove"));
var edit_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/edit"));
var media_full_width_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/media-full-width"));
var media_wide_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/media-wide"));
var media_center_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/media-center"));
var messages_1 = tslib_1.__importDefault(require("../../messages"));
var macro_1 = require("../macro");
var actions_1 = require("./actions");
var plugin_1 = require("./plugin");
var decoration_1 = require("../base/pm-plugins/decoration");
exports.messages = react_intl_1.defineMessages({
    edit: {
        id: 'fabric.editor.edit',
        defaultMessage: 'Edit',
        description: 'Edit the properties for this extension.',
    },
});
var isLayoutSupported = function (state, selectedExtNode) {
    var _a = state.schema.nodes, bodiedExtension = _a.bodiedExtension, extension = _a.extension, layoutSection = _a.layoutSection, table = _a.table, selection = state.selection;
    if (!selectedExtNode) {
        return false;
    }
    return !!((selectedExtNode.node.type === bodiedExtension ||
        (selectedExtNode.node.type === extension &&
            !prosemirror_utils_1.hasParentNodeOfType([bodiedExtension, table])(selection))) &&
        !prosemirror_utils_1.hasParentNodeOfType([layoutSection])(selection));
};
var breakoutOptions = function (state, formatMessage, extensionState, breakoutEnabled) {
    var layout = extensionState.layout, allowBreakout = extensionState.allowBreakout, node = extensionState.node;
    return breakoutEnabled && allowBreakout && isLayoutSupported(state, node)
        ? [
            {
                type: 'button',
                icon: media_center_1.default,
                onClick: actions_1.updateExtensionLayout('default'),
                selected: layout === 'default',
                title: formatMessage(messages_1.default.layoutFixedWidth),
            },
            {
                type: 'button',
                icon: media_wide_1.default,
                onClick: actions_1.updateExtensionLayout('wide'),
                selected: layout === 'wide',
                title: formatMessage(messages_1.default.layoutWide),
            },
            {
                type: 'button',
                icon: media_full_width_1.default,
                onClick: actions_1.updateExtensionLayout('full-width'),
                selected: layout === 'full-width',
                title: formatMessage(messages_1.default.layoutFullWidth),
            },
        ]
        : [];
};
var editButton = function (formatMessage, macroState, extensionState) {
    if (!extensionState.showEditButton) {
        return [];
    }
    return [
        {
            type: 'button',
            icon: edit_1.default,
            onClick: actions_1.editExtension(macroState && macroState.macroProvider, extensionState.updateExtension),
            title: formatMessage(exports.messages.edit),
        },
    ];
};
exports.getToolbarConfig = function (breakoutEnabled) {
    if (breakoutEnabled === void 0) { breakoutEnabled = true; }
    return function (state, _a) {
        var formatMessage = _a.formatMessage;
        var extensionState = plugin_1.pluginKey.getState(state);
        var macroState = macro_1.pluginKey.getState(state);
        if (extensionState && extensionState.element) {
            var nodeType = [
                state.schema.nodes.extension,
                state.schema.nodes.inlineExtension,
                state.schema.nodes.bodiedExtension,
            ];
            return {
                title: 'Extension floating controls',
                getDomRef: function () { return extensionState.element.parentElement || undefined; },
                nodeType: nodeType,
                items: tslib_1.__spread(editButton(formatMessage, macroState, extensionState), breakoutOptions(state, formatMessage, extensionState, breakoutEnabled), [
                    {
                        type: 'separator',
                    },
                    {
                        type: 'button',
                        icon: remove_1.default,
                        appearance: 'danger',
                        onClick: actions_1.removeExtension(),
                        onMouseEnter: decoration_1.hoverDecoration(nodeType, true),
                        onMouseLeave: decoration_1.hoverDecoration(nodeType, false),
                        title: formatMessage(messages_1.default.remove),
                    },
                ]),
            };
        }
        return;
    };
};
//# sourceMappingURL=toolbar.js.map