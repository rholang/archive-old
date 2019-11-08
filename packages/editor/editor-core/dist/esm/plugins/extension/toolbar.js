import { __read, __spread } from "tslib";
import { defineMessages } from 'react-intl';
import { hasParentNodeOfType } from 'prosemirror-utils';
import RemoveIcon from '@atlaskit/icon/glyph/editor/remove';
import EditIcon from '@atlaskit/icon/glyph/editor/edit';
import FullWidthIcon from '@atlaskit/icon/glyph/editor/media-full-width';
import WideIcon from '@atlaskit/icon/glyph/editor/media-wide';
import CenterIcon from '@atlaskit/icon/glyph/editor/media-center';
import commonMessages from '../../messages';
import { pluginKey as macroPluginKey } from '../macro';
import { updateExtensionLayout, editExtension, removeExtension, } from './actions';
import { pluginKey } from './plugin';
import { hoverDecoration } from '../base/pm-plugins/decoration';
export var messages = defineMessages({
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
            !hasParentNodeOfType([bodiedExtension, table])(selection))) &&
        !hasParentNodeOfType([layoutSection])(selection));
};
var breakoutOptions = function (state, formatMessage, extensionState, breakoutEnabled) {
    var layout = extensionState.layout, allowBreakout = extensionState.allowBreakout, node = extensionState.node;
    return breakoutEnabled && allowBreakout && isLayoutSupported(state, node)
        ? [
            {
                type: 'button',
                icon: CenterIcon,
                onClick: updateExtensionLayout('default'),
                selected: layout === 'default',
                title: formatMessage(commonMessages.layoutFixedWidth),
            },
            {
                type: 'button',
                icon: WideIcon,
                onClick: updateExtensionLayout('wide'),
                selected: layout === 'wide',
                title: formatMessage(commonMessages.layoutWide),
            },
            {
                type: 'button',
                icon: FullWidthIcon,
                onClick: updateExtensionLayout('full-width'),
                selected: layout === 'full-width',
                title: formatMessage(commonMessages.layoutFullWidth),
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
            icon: EditIcon,
            onClick: editExtension(macroState && macroState.macroProvider, extensionState.updateExtension),
            title: formatMessage(messages.edit),
        },
    ];
};
export var getToolbarConfig = function (breakoutEnabled) {
    if (breakoutEnabled === void 0) { breakoutEnabled = true; }
    return function (state, _a) {
        var formatMessage = _a.formatMessage;
        var extensionState = pluginKey.getState(state);
        var macroState = macroPluginKey.getState(state);
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
                items: __spread(editButton(formatMessage, macroState, extensionState), breakoutOptions(state, formatMessage, extensionState, breakoutEnabled), [
                    {
                        type: 'separator',
                    },
                    {
                        type: 'button',
                        icon: RemoveIcon,
                        appearance: 'danger',
                        onClick: removeExtension(),
                        onMouseEnter: hoverDecoration(nodeType, true),
                        onMouseLeave: hoverDecoration(nodeType, false),
                        title: formatMessage(commonMessages.remove),
                    },
                ]),
            };
        }
        return;
    };
};
//# sourceMappingURL=toolbar.js.map