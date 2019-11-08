"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_utils_1 = require("prosemirror-utils");
var remove_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/remove"));
var messages_1 = tslib_1.__importDefault(require("../../../messages"));
var main_1 = require("../pm-plugins/main");
var decoration_1 = require("../../base/pm-plugins/decoration");
var annotation_1 = require("./annotation");
var linking_1 = require("./linking");
var buildMediaLayoutButtons_1 = tslib_1.__importDefault(require("./buildMediaLayoutButtons"));
var linking_2 = require("../pm-plugins/linking");
var remove = function (state, dispatch) {
    if (dispatch) {
        dispatch(prosemirror_utils_1.removeSelectedNode(state.tr));
    }
    return true;
};
exports.floatingToolbar = function (state, intl, options) {
    if (options === void 0) { options = {}; }
    var providerFactory = options.providerFactory, allowResizing = options.allowResizing, allowAnnotation = options.allowAnnotation, allowLinking = options.allowLinking, allowAdvancedToolBarOptions = options.allowAdvancedToolBarOptions, allowResizingInTables = options.allowResizingInTables;
    var mediaSingle = state.schema.nodes.mediaSingle;
    var pluginState = main_1.stateKey.getState(state);
    var mediaLinkingState = linking_2.getMediaLinkingState(state);
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
        linking_1.shouldShowMediaLinkToolbar(state)) {
        var linkingToolbar = linking_1.getLinkingToolbar(baseToolbar, mediaLinkingState, state, intl, providerFactory);
        if (linkingToolbar) {
            return linkingToolbar;
        }
    }
    var toolbarButtons = [];
    if (allowAdvancedToolBarOptions) {
        toolbarButtons = buildMediaLayoutButtons_1.default(state, intl, allowResizing, allowResizingInTables);
        if (toolbarButtons.length) {
            if (allowAnnotation) {
                toolbarButtons.push({
                    type: 'custom',
                    render: annotation_1.renderAnnotationButton(pluginState, intl),
                });
            }
        }
        if (allowLinking && linking_1.shouldShowMediaLinkToolbar(state)) {
            if (toolbarButtons.length) {
                toolbarButtons.push({ type: 'separator' });
            }
            var linkingButtons = linking_1.buildLinkingButtons(state, intl);
            toolbarButtons.push.apply(toolbarButtons, tslib_1.__spread(linkingButtons));
        }
        if (toolbarButtons.length) {
            toolbarButtons.push({ type: 'separator' });
        }
    }
    return tslib_1.__assign(tslib_1.__assign({}, baseToolbar), { items: tslib_1.__spread(toolbarButtons, [
            {
                type: 'button',
                appearance: 'danger',
                icon: remove_1.default,
                onMouseEnter: decoration_1.hoverDecoration(mediaSingle, true),
                onMouseLeave: decoration_1.hoverDecoration(mediaSingle, false),
                title: intl.formatMessage(messages_1.default.remove),
                onClick: remove,
            },
        ]) });
};
//# sourceMappingURL=index.js.map