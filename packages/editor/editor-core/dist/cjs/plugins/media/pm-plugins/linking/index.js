"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var plugin_state_factory_1 = require("../../../../utils/plugin-state-factory");
var prosemirror_state_1 = require("prosemirror-state");
var reducer_1 = tslib_1.__importDefault(require("./reducer"));
var mediaLinkingPluginKey = new prosemirror_state_1.PluginKey('mediaLinking');
var initialState = {
    visible: false,
    editable: false,
    mediaPos: null,
    link: '',
};
function mapping(tr, pluginState) {
    if (pluginState && pluginState.mediaPos !== null) {
        return tslib_1.__assign(tslib_1.__assign({}, pluginState), { mediaPos: tr.mapping.map(pluginState.mediaPos) });
    }
    return pluginState;
}
function onSelectionChanged(tr) {
    var isNodeSelection = tr.selection instanceof prosemirror_state_1.NodeSelection;
    if (!isNodeSelection) {
        return initialState;
    }
    var node = tr.doc.nodeAt(tr.selection.$from.pos);
    if (!node || node.type.name !== 'mediaSingle') {
        return initialState;
    }
    var mark = node.marks.find(function (mark) { return mark.type.name === 'link'; });
    if (mark) {
        return tslib_1.__assign(tslib_1.__assign({}, initialState), { mediaPos: tr.selection.$from.pos, editable: true, link: mark.attrs.href });
    }
    return tslib_1.__assign(tslib_1.__assign({}, initialState), { mediaPos: tr.selection.$from.pos });
}
var mediaLinkingPluginFactory = plugin_state_factory_1.pluginFactory(mediaLinkingPluginKey, reducer_1.default, {
    mapping: mapping,
    onSelectionChanged: onSelectionChanged,
});
exports.createMediaLinkingCommand = mediaLinkingPluginFactory.createCommand, exports.getMediaLinkingState = mediaLinkingPluginFactory.getPluginState;
exports.default = (function (dispatch) {
    return new prosemirror_state_1.Plugin({
        key: mediaLinkingPluginKey,
        state: mediaLinkingPluginFactory.createPluginState(dispatch, initialState),
    });
});
//# sourceMappingURL=index.js.map