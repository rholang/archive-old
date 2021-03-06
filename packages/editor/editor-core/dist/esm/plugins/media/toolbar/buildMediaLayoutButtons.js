import { __read, __spread } from "tslib";
import { NodeSelection } from 'prosemirror-state';
import { defineMessages } from 'react-intl';
import { hasParentNodeOfType } from 'prosemirror-utils';
import { stateKey } from '../pm-plugins/main';
import commonMessages from '../../../messages';
import WrapLeftIcon from '@atlaskit/icon/glyph/editor/media-wrap-left';
import WrapRightIcon from '@atlaskit/icon/glyph/editor/media-wrap-right';
import WideIcon from '@atlaskit/icon/glyph/editor/media-wide';
import FullWidthIcon from '@atlaskit/icon/glyph/editor/media-full-width';
import EditorAlignImageLeft from '@atlaskit/icon/glyph/editor/align-image-left';
import EditorAlignImageRight from '@atlaskit/icon/glyph/editor/align-image-right';
import EditorAlignImageCenter from '@atlaskit/icon/glyph/editor/align-image-center';
import { alignAttributes } from '../utils/media-single';
var alignmentIcons = [
    { value: 'align-start', icon: EditorAlignImageLeft },
    { value: 'center', icon: EditorAlignImageCenter },
    { value: 'align-end', icon: EditorAlignImageRight },
];
var wrappingIcons = [
    { value: 'wrap-left', icon: WrapLeftIcon },
    { value: 'wrap-right', icon: WrapRightIcon },
];
var breakoutIcons = [
    { value: 'wide', icon: WideIcon },
    { value: 'full-width', icon: FullWidthIcon },
];
export var messages = defineMessages({
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
    'wrap-left': messages.wrapLeft,
    center: commonMessages.alignImageCenter,
    'wrap-right': messages.wrapRight,
    wide: commonMessages.layoutWide,
    'full-width': commonMessages.layoutFullWidth,
    'align-end': commonMessages.alignImageRight,
    'align-start': commonMessages.alignImageLeft,
};
var makeAlign = function (layout) {
    return function (state, dispatch) {
        var pluginState = stateKey.getState(state);
        if (!pluginState || !dispatch) {
            return false;
        }
        var mediaSingle = state.schema.nodes.mediaSingle;
        var mediaSingleNode = pluginState.selectedMediaContainerNode();
        if (!mediaSingleNode || mediaSingleNode.type !== mediaSingle) {
            return false;
        }
        var newAttrs = alignAttributes(layout, mediaSingleNode.attrs);
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
    return hasParentNodeOfType(__spread([
        nodes.bodiedExtension,
        nodes.layoutSection,
        nodes.listItem
    ], (allowResizingInTables ? [] : [nodes.table])))(selection);
};
var buildLayoutButtons = function (state, intl, allowResizing, allowResizingInTables) {
    var selection = state.selection;
    var mediaSingle = state.schema.nodes.mediaSingle;
    if (!(selection instanceof NodeSelection) ||
        !selection.node ||
        !mediaSingle ||
        shouldHideLayoutToolbar(selection, state.schema, allowResizingInTables)) {
        return [];
    }
    var layout = selection.node.attrs.layout;
    var toolbarItems = __spread(mapIconsToToolbarItem(alignmentIcons, layout, intl), [
        { type: 'separator' }
    ], mapIconsToToolbarItem(wrappingIcons, layout, intl));
    if (!allowResizing) {
        toolbarItems = toolbarItems.concat(__spread([
            { type: 'separator' }
        ], mapIconsToToolbarItem(breakoutIcons, layout, intl)));
    }
    return toolbarItems;
};
export default buildLayoutButtons;
//# sourceMappingURL=buildMediaLayoutButtons.js.map