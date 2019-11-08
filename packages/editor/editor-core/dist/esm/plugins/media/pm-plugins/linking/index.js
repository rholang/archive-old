import { __assign } from "tslib";
import { pluginFactory } from '../../../../utils/plugin-state-factory';
import { PluginKey, Plugin, NodeSelection, } from 'prosemirror-state';
import reducer from './reducer';
var mediaLinkingPluginKey = new PluginKey('mediaLinking');
var initialState = {
    visible: false,
    editable: false,
    mediaPos: null,
    link: '',
};
function mapping(tr, pluginState) {
    if (pluginState && pluginState.mediaPos !== null) {
        return __assign(__assign({}, pluginState), { mediaPos: tr.mapping.map(pluginState.mediaPos) });
    }
    return pluginState;
}
function onSelectionChanged(tr) {
    var isNodeSelection = tr.selection instanceof NodeSelection;
    if (!isNodeSelection) {
        return initialState;
    }
    var node = tr.doc.nodeAt(tr.selection.$from.pos);
    if (!node || node.type.name !== 'mediaSingle') {
        return initialState;
    }
    var mark = node.marks.find(function (mark) { return mark.type.name === 'link'; });
    if (mark) {
        return __assign(__assign({}, initialState), { mediaPos: tr.selection.$from.pos, editable: true, link: mark.attrs.href });
    }
    return __assign(__assign({}, initialState), { mediaPos: tr.selection.$from.pos });
}
var mediaLinkingPluginFactory = pluginFactory(mediaLinkingPluginKey, reducer, {
    mapping: mapping,
    onSelectionChanged: onSelectionChanged,
});
export var createMediaLinkingCommand = mediaLinkingPluginFactory.createCommand, getMediaLinkingState = mediaLinkingPluginFactory.getPluginState;
export default (function (dispatch) {
    return new Plugin({
        key: mediaLinkingPluginKey,
        state: mediaLinkingPluginFactory.createPluginState(dispatch, initialState),
    });
});
//# sourceMappingURL=index.js.map