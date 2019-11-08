import { __assign } from "tslib";
import { stateKey as mediaPluginKey, } from '../pm-plugins/main';
import { findMediaNode, findAllMediaSingleNodes } from './helpers';
import { SetAttrsStep } from '../../../utils';
export var updateAllMediaNodesAttrs = function (id, attrs, isMediaSingle) { return function (state, dispatch) {
    var mediaPluginState = mediaPluginKey.getState(state);
    var mediaNodes;
    if (isMediaSingle) {
        mediaNodes = findAllMediaSingleNodes(mediaPluginState, id);
    }
    else {
        var mediaGroupNode = findMediaNode(mediaPluginState, id, isMediaSingle);
        mediaNodes = mediaGroupNode ? [mediaGroupNode] : [];
    }
    // TODO: ED-7784 Clean media plugin state from having media that were previously removed.
    // Sanity check
    var mediaType = state.schema.nodes.media;
    mediaNodes = mediaNodes.filter(function (nodeWithPos) {
        var node;
        try {
            node = state.doc.nodeAt(nodeWithPos.getPos());
        }
        catch (e) {
            return false;
        }
        return node && node.type === mediaType;
    });
    if (mediaNodes.length === 0) {
        return false;
    }
    if (dispatch) {
        var tr_1 = state.tr;
        mediaNodes.forEach(function (_a) {
            var getPos = _a.getPos;
            return tr_1.step(new SetAttrsStep(getPos(), attrs));
        });
        tr_1.setMeta('addToHistory', false);
        dispatch(tr_1);
    }
    return true;
}; };
export var updateMediaNodeAttrs = function (id, attrs, isMediaSingle) { return function (state, dispatch) {
    var mediaPluginState = mediaPluginKey.getState(state);
    var mediaNodeWithPos = findMediaNode(mediaPluginState, id, isMediaSingle);
    if (!mediaNodeWithPos) {
        return false;
    }
    if (dispatch) {
        dispatch(state.tr
            .step(new SetAttrsStep(mediaNodeWithPos.getPos(), attrs))
            .setMeta('addToHistory', false));
    }
    return true;
}; };
export var replaceExternalMedia = function (pos, attrs) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr
            .step(new SetAttrsStep(pos, __assign({ type: 'file', url: null }, attrs)))
            .setMeta('addToHistory', false));
        return true;
    }
    return false;
}; };
//# sourceMappingURL=index.js.map