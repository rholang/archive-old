"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var main_1 = require("../pm-plugins/main");
var helpers_1 = require("./helpers");
var utils_1 = require("../../../utils");
exports.updateAllMediaNodesAttrs = function (id, attrs, isMediaSingle) { return function (state, dispatch) {
    var mediaPluginState = main_1.stateKey.getState(state);
    var mediaNodes;
    if (isMediaSingle) {
        mediaNodes = helpers_1.findAllMediaSingleNodes(mediaPluginState, id);
    }
    else {
        var mediaGroupNode = helpers_1.findMediaNode(mediaPluginState, id, isMediaSingle);
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
            return tr_1.step(new utils_1.SetAttrsStep(getPos(), attrs));
        });
        tr_1.setMeta('addToHistory', false);
        dispatch(tr_1);
    }
    return true;
}; };
exports.updateMediaNodeAttrs = function (id, attrs, isMediaSingle) { return function (state, dispatch) {
    var mediaPluginState = main_1.stateKey.getState(state);
    var mediaNodeWithPos = helpers_1.findMediaNode(mediaPluginState, id, isMediaSingle);
    if (!mediaNodeWithPos) {
        return false;
    }
    if (dispatch) {
        dispatch(state.tr
            .step(new utils_1.SetAttrsStep(mediaNodeWithPos.getPos(), attrs))
            .setMeta('addToHistory', false));
    }
    return true;
}; };
exports.replaceExternalMedia = function (pos, attrs) { return function (state, dispatch) {
    if (dispatch) {
        dispatch(state.tr
            .step(new utils_1.SetAttrsStep(pos, tslib_1.__assign({ type: 'file', url: null }, attrs)))
            .setMeta('addToHistory', false));
        return true;
    }
    return false;
}; };
//# sourceMappingURL=index.js.map