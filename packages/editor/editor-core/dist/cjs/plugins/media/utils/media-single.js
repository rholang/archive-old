"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var shared_context_1 = require("../../shared-context");
var utils_1 = require("../../../utils");
var media_common_1 = require("../utils/media-common");
var slice_1 = require("../../../utils/slice");
var node_width_1 = require("../../../utils/node-width");
var utils_2 = require("../ui/ResizableMediaSingle/utils");
var analytics_1 = require("../../analytics");
var insert_1 = require("../../../utils/insert");
exports.wrappedLayouts = [
    'wrap-left',
    'wrap-right',
    'align-end',
    'align-start',
];
exports.nonWrappedLayouts = [
    'center',
    'wide',
    'full-width',
];
var getInsertMediaAnalytics = function (inputMethod, fileExtension) { return ({
    action: analytics_1.ACTION.INSERTED,
    actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
    actionSubjectId: analytics_1.ACTION_SUBJECT_ID.MEDIA,
    attributes: {
        inputMethod: inputMethod,
        fileExtension: fileExtension,
    },
    eventType: analytics_1.EVENT_TYPE.TRACK,
}); };
function shouldAddParagraph(state) {
    return (utils_1.atTheBeginningOfBlock(state) &&
        !utils_1.checkNodeDown(state.selection, state.doc, utils_1.isEmptyParagraph));
}
function insertNodesWithOptionalParagraph(nodes, analyticsAttributes) {
    if (analyticsAttributes === void 0) { analyticsAttributes = {}; }
    return function (state, dispatch) {
        var tr = state.tr, schema = state.schema;
        var paragraph = schema.nodes.paragraph;
        var inputMethod = analyticsAttributes.inputMethod, fileExtension = analyticsAttributes.fileExtension;
        var openEnd = 0;
        if (shouldAddParagraph(state)) {
            nodes.push(paragraph.create());
            openEnd = 1;
        }
        tr.replaceSelection(new prosemirror_model_1.Slice(prosemirror_model_1.Fragment.from(nodes), 0, openEnd));
        if (inputMethod) {
            analytics_1.addAnalytics(state, tr, getInsertMediaAnalytics(inputMethod, fileExtension));
        }
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    };
}
exports.isMediaSingle = function (schema, fileMimeType) {
    return !!schema.nodes.mediaSingle && utils_1.isImage(fileMimeType);
};
exports.insertMediaAsMediaSingle = function (view, node, inputMethod) {
    var state = view.state, dispatch = view.dispatch;
    var _a = state.schema.nodes, mediaSingle = _a.mediaSingle, media = _a.media;
    if (!mediaSingle) {
        return false;
    }
    // if not an image type media node
    if (node.type !== media ||
        (!utils_1.isImage(node.attrs.__fileMimeType) && node.attrs.type !== 'external')) {
        return false;
    }
    var mediaSingleNode = mediaSingle.create({}, node);
    var nodes = [mediaSingleNode];
    var analyticsAttributes = {
        inputMethod: inputMethod,
        fileExtension: node.attrs.__fileMimeType,
    };
    return insertNodesWithOptionalParagraph(nodes, analyticsAttributes)(state, dispatch);
};
exports.insertMediaSingleNode = function (view, mediaState, inputMethod, collection) {
    if (collection === undefined) {
        return false;
    }
    var state = view.state, dispatch = view.dispatch;
    var grandParent = state.selection.$from.node(-1);
    var node = exports.createMediaSingleNode(state.schema, collection)(mediaState);
    var shouldSplit = grandParent && grandParent.type.validContent(prosemirror_model_1.Fragment.from(node));
    var fileExtension;
    if (mediaState.fileName) {
        var extensionIdx = mediaState.fileName.lastIndexOf('.');
        fileExtension =
            extensionIdx >= 0
                ? mediaState.fileName.substring(extensionIdx + 1)
                : undefined;
    }
    if (shouldSplit) {
        insertNodesWithOptionalParagraph([node], { fileExtension: fileExtension, inputMethod: inputMethod })(state, dispatch);
    }
    else {
        var allowNewInsertionBehaviour = shared_context_1.getEditorProps(view.state).allowNewInsertionBehaviour;
        var tr = null;
        if (allowNewInsertionBehaviour) {
            tr = insert_1.safeInsert(node, state.selection.from)(state.tr);
        }
        if (!tr) {
            var content = shouldAddParagraph(view.state)
                ? prosemirror_model_1.Fragment.fromArray([node, state.schema.nodes.paragraph.create()])
                : node;
            tr = prosemirror_utils_1.safeInsert(content, undefined, true)(state.tr);
        }
        if (inputMethod) {
            tr = analytics_1.addAnalytics(state, tr, getInsertMediaAnalytics(inputMethod, fileExtension));
        }
        dispatch(tr);
    }
    return true;
};
exports.createMediaSingleNode = function (schema, collection) { return function (mediaState) {
    var id = mediaState.id, dimensions = mediaState.dimensions, contextId = mediaState.contextId, _a = mediaState.scaleFactor, scaleFactor = _a === void 0 ? 1 : _a;
    var _b = dimensions || {
        height: undefined,
        width: undefined,
    }, width = _b.width, height = _b.height;
    var _c = schema.nodes, media = _c.media, mediaSingle = _c.mediaSingle;
    var mediaNode = media.create({
        id: id,
        type: 'file',
        collection: collection,
        contextId: contextId,
        width: width && Math.round(width / scaleFactor),
        height: height && Math.round(height / scaleFactor),
    });
    media_common_1.copyOptionalAttrsFromMediaState(mediaState, mediaNode);
    return mediaSingle.createChecked({}, mediaNode);
}; };
function transformSliceForMedia(slice, schema) {
    var _a = schema.nodes, mediaSingle = _a.mediaSingle, layoutSection = _a.layoutSection, table = _a.table, bulletList = _a.bulletList, orderedList = _a.orderedList;
    return function (selection) {
        if (prosemirror_utils_1.hasParentNodeOfType([layoutSection, table, bulletList, orderedList])(selection)) {
            return slice_1.mapSlice(slice, function (node) {
                return node.type.name === 'mediaSingle'
                    ? mediaSingle.createChecked({}, node.content, node.marks)
                    : node;
            });
        }
        return slice;
    };
}
exports.transformSliceForMedia = transformSliceForMedia;
exports.alignAttributes = function (layout, oldAttrs, gridSize) {
    if (gridSize === void 0) { gridSize = 12; }
    var width = oldAttrs.width;
    var oldLayout = oldAttrs.layout;
    if (exports.wrappedLayouts.indexOf(oldLayout) === -1 &&
        exports.wrappedLayouts.indexOf(layout) > -1) {
        if (!width ||
            width >= 100 ||
            ['full-width', 'wide'].indexOf(oldLayout) > -1) {
            width = 50;
        }
    }
    else if (layout !== oldLayout &&
        ['full-width', 'wide'].indexOf(oldLayout) > -1) {
        // unset width
        width = undefined;
    }
    else if (width) {
        var cols = Math.round((width / 100) * gridSize);
        var targetCols = cols;
        if (exports.wrappedLayouts.indexOf(oldLayout) > -1 &&
            exports.nonWrappedLayouts.indexOf(layout) > -1) {
            // wrap -> center needs to align to even grid
            targetCols = Math.floor(targetCols / 2) * 2;
            width = undefined;
        }
        else if (exports.nonWrappedLayouts.indexOf(oldLayout) > -1 &&
            exports.wrappedLayouts.indexOf(layout) > -1) {
            // cannot resize to full column width, and cannot resize to 1 column
            if (cols <= 1) {
                targetCols = 2;
            }
            else if (cols >= gridSize) {
                targetCols = 10;
            }
        }
        if (targetCols !== cols) {
            width = (targetCols / gridSize) * 100;
        }
    }
    return tslib_1.__assign(tslib_1.__assign({}, oldAttrs), { layout: layout,
        width: width });
};
exports.calcMediaPxWidth = function (opts) {
    var origWidth = opts.origWidth, origHeight = opts.origHeight, layout = opts.layout, pctWidth = opts.pctWidth, containerWidth = opts.containerWidth, isFullWidthModeEnabled = opts.isFullWidthModeEnabled, pos = opts.pos, state = opts.state, resizedPctWidth = opts.resizedPctWidth;
    var width = containerWidth.width, lineLength = containerWidth.lineLength;
    var nestedWidth = node_width_1.getParentNodeWidth(pos, state, containerWidth, isFullWidthModeEnabled);
    var calculatedPctWidth = calcPctWidth(containerWidth, pctWidth, origWidth, origHeight);
    var calculatedResizedPctWidth = calcPctWidth(containerWidth, resizedPctWidth, origWidth, origHeight);
    if (nestedWidth) {
        return Math.min(calculatedPctWidth || origWidth, nestedWidth);
    }
    else if (layout === 'wide') {
        if (lineLength) {
            var wideWidth = Math.ceil(lineLength * editor_common_1.breakoutWideScaleRatio);
            return wideWidth > width ? lineLength : wideWidth;
        }
    }
    else if (layout === 'full-width') {
        return width - editor_common_1.akEditorBreakoutPadding;
    }
    else if (calculatedPctWidth) {
        if (exports.wrappedLayouts.indexOf(layout) > -1) {
            if (calculatedResizedPctWidth) {
                if (resizedPctWidth < 50) {
                    return calculatedResizedPctWidth;
                }
                return calculatedPctWidth;
            }
            return Math.min(calculatedPctWidth, origWidth);
        }
        if (calculatedResizedPctWidth) {
            return calculatedResizedPctWidth;
        }
        return calculatedPctWidth;
    }
    else if (layout === 'center') {
        if (calculatedResizedPctWidth) {
            return calculatedResizedPctWidth;
        }
        return Math.min(origWidth, lineLength || width);
    }
    else if (layout && utils_2.alignmentLayouts.indexOf(layout) !== -1) {
        var halfLineLength = Math.ceil((lineLength || width) / 2);
        return origWidth <= halfLineLength ? origWidth : halfLineLength;
    }
    return origWidth;
};
var calcPctWidth = function (containerWidth, pctWidth, origWidth, origHeight) {
    return pctWidth &&
        origWidth &&
        origHeight &&
        Math.ceil(editor_common_1.calcPxFromPct(pctWidth / 100, containerWidth.lineLength || containerWidth.width));
};
//# sourceMappingURL=media-single.js.map