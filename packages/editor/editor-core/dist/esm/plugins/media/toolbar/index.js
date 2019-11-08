import { __assign, __read, __spread } from "tslib";
import { removeSelectedNode } from 'prosemirror-utils';
import RemoveIcon from '@atlaskit/icon/glyph/editor/remove';
import commonMessages from '../../../messages';
import { stateKey } from '../pm-plugins/main';
import { hoverDecoration } from '../../base/pm-plugins/decoration';
import { renderAnnotationButton } from './annotation';
import { getLinkingToolbar, buildLinkingButtons, shouldShowMediaLinkToolbar, } from './linking';
import buildLayoutButtons from './buildMediaLayoutButtons';
import { getMediaLinkingState } from '../pm-plugins/linking';
var remove = function (state, dispatch) {
    if (dispatch) {
        dispatch(removeSelectedNode(state.tr));
    }
    return true;
};
export var floatingToolbar = function (state, intl, options) {
    if (options === void 0) { options = {}; }
    var providerFactory = options.providerFactory, allowResizing = options.allowResizing, allowAnnotation = options.allowAnnotation, allowLinking = options.allowLinking, allowAdvancedToolBarOptions = options.allowAdvancedToolBarOptions, allowResizingInTables = options.allowResizingInTables;
    var mediaSingle = state.schema.nodes.mediaSingle;
    var pluginState = stateKey.getState(state);
    var mediaLinkingState = getMediaLinkingState(state);
    if (!mediaSingle || !pluginState) {
        return;
    }
    var baseToolbar = {
        title: 'Media floating controls',
        nodeType: mediaSingle,
        getDomRef: function () { return pluginState.element; },
    };
    if (allowLinking &&
        mediaLinkingState &&
        mediaLinkingState.visible &&
        shouldShowMediaLinkToolbar(state)) {
        var linkingToolbar = getLinkingToolbar(baseToolbar, mediaLinkingState, state, intl, providerFactory);
        if (linkingToolbar) {
            return linkingToolbar;
        }
    }
    var toolbarButtons = [];
    if (allowAdvancedToolBarOptions) {
        toolbarButtons = buildLayoutButtons(state, intl, allowResizing, allowResizingInTables);
        if (toolbarButtons.length) {
            if (allowAnnotation) {
                toolbarButtons.push({
                    type: 'custom',
                    render: renderAnnotationButton(pluginState, intl),
                });
            }
        }
        if (allowLinking && shouldShowMediaLinkToolbar(state)) {
            if (toolbarButtons.length) {
                toolbarButtons.push({ type: 'separator' });
            }
            var linkingButtons = buildLinkingButtons(state, intl);
            toolbarButtons.push.apply(toolbarButtons, __spread(linkingButtons));
        }
        if (toolbarButtons.length) {
            toolbarButtons.push({ type: 'separator' });
        }
    }
    return __assign(__assign({}, baseToolbar), { items: __spread(toolbarButtons, [
            {
                type: 'button',
                appearance: 'danger',
                icon: RemoveIcon,
                onMouseEnter: hoverDecoration(mediaSingle, true),
                onMouseLeave: hoverDecoration(mediaSingle, false),
                title: intl.formatMessage(commonMessages.remove),
                onClick: remove,
            },
        ]) });
};
//# sourceMappingURL=index.js.map