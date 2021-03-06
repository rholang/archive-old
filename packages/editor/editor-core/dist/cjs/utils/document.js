"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_model_1 = require("prosemirror-model");
var adf_utils_1 = require("@atlaskit/adf-utils");
var analytics_1 = require("../analytics");
var privacy_filter_1 = require("../utils/filter/privacy-filter");
var FALSE_POSITIVE_MARKS = ['code', 'alignment', 'indentation'];
/**
 * Checks if node is an empty paragraph.
 */
function isEmptyParagraph(node) {
    return (!node ||
        (node.type.name === 'paragraph' && !node.textContent && !node.childCount));
}
exports.isEmptyParagraph = isEmptyParagraph;
/**
 * Returns false if node contains only empty inline nodes and hardBreaks.
 */
function hasVisibleContent(node) {
    var isInlineNodeHasVisibleContent = function (inlineNode) {
        return inlineNode.isText
            ? !!inlineNode.textContent.trim()
            : inlineNode.type.name !== 'hardBreak';
    };
    if (node.isInline) {
        return isInlineNodeHasVisibleContent(node);
    }
    else if (node.isBlock && (node.isLeaf || node.isAtom)) {
        return true;
    }
    else if (!node.childCount) {
        return false;
    }
    for (var index = 0; index < node.childCount; index++) {
        var child = node.child(index);
        if (hasVisibleContent(child)) {
            return true;
        }
    }
    return false;
}
exports.hasVisibleContent = hasVisibleContent;
/**
 * Checks if a node has any content. Ignores node that only contain empty block nodes.
 */
function isNodeEmpty(node) {
    if (node && node.textContent) {
        return false;
    }
    if (!node ||
        !node.childCount ||
        (node.childCount === 1 && isEmptyParagraph(node.firstChild))) {
        return true;
    }
    var block = [];
    var nonBlock = [];
    node.forEach(function (child) {
        child.isInline ? nonBlock.push(child) : block.push(child);
    });
    return (!nonBlock.length &&
        !block.filter(function (childNode) {
            return (!!childNode.childCount &&
                !(childNode.childCount === 1 && isEmptyParagraph(childNode.firstChild))) ||
                childNode.isAtom;
        }).length);
}
exports.isNodeEmpty = isNodeEmpty;
/**
 * Checks if a node looks like an empty document
 */
function isEmptyDocument(node) {
    var nodeChild = node.content.firstChild;
    if (node.childCount !== 1 || !nodeChild) {
        return false;
    }
    return (nodeChild.type.name === 'paragraph' &&
        !nodeChild.childCount &&
        nodeChild.nodeSize === 2 &&
        (!nodeChild.marks || nodeChild.marks.length === 0));
}
exports.isEmptyDocument = isEmptyDocument;
function wrapWithUnsupported(originalValue, type) {
    if (type === void 0) { type = 'block'; }
    return {
        type: "unsupported" + (type === 'block' ? 'Block' : 'Inline'),
        attrs: { originalValue: originalValue },
    };
}
function fireAnalyticsEvent(entity, error, type) {
    if (type === void 0) { type = 'block'; }
    var code = error.code, meta = error.meta;
    analytics_1.analyticsService.trackEvent('atlassian.editor.unsupported', {
        name: entity.type || 'unknown',
        type: type,
        errorCode: code,
        meta: meta && JSON.stringify(meta),
    });
}
function processRawValue(schema, value, providerFactory, sanitizePrivateContent) {
    if (!value) {
        return;
    }
    var node;
    if (typeof value === 'string') {
        try {
            node = JSON.parse(value);
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.error("Error processing value: " + value + " isn't a valid JSON");
            return;
        }
    }
    else {
        node = value;
    }
    if (Array.isArray(node)) {
        // eslint-disable-next-line no-console
        console.error("Error processing value: " + node + " is an array, but it must be an object.");
        return;
    }
    try {
        var nodes = Object.keys(schema.nodes);
        var marks_1 = Object.keys(schema.marks);
        var validate = adf_utils_1.validator(nodes, marks_1, { allowPrivateAttributes: true });
        var emptyDoc = { type: 'doc', content: [] };
        // ProseMirror always require a child under doc
        if (node.type === 'doc') {
            if (Array.isArray(node.content) && node.content.length === 0) {
                node.content.push({
                    type: 'paragraph',
                    content: [],
                });
            }
            // Just making sure doc is always valid
            if (!node.version) {
                node.version = 1;
            }
        }
        var _a = validate(node, function (entity, error, options) {
            // Remove any invalid marks
            if (marks_1.indexOf(entity.type) > -1) {
                if (!(error.code === 'INVALID_TYPE' &&
                    FALSE_POSITIVE_MARKS.indexOf(entity.type) > -1)) {
                    fireAnalyticsEvent(entity, error, 'mark');
                }
                return;
            }
            /**
             * There's a inconsistency between ProseMirror and ADF.
             * `content` is actually optional in ProseMirror.
             * And, also empty `text` node is not valid.
             */
            if (error.code === 'MISSING_PROPERTIES' &&
                entity.type === 'paragraph') {
                return { type: 'paragraph', content: [] };
            }
            // Can't fix it by wrapping
            // TODO: We can repair missing content like `panel` without a `paragraph`.
            if (error.code === 'INVALID_CONTENT_LENGTH') {
                return entity;
            }
            if (options.allowUnsupportedBlock) {
                fireAnalyticsEvent(entity, error);
                return wrapWithUnsupported(entity);
            }
            else if (options.allowUnsupportedInline) {
                fireAnalyticsEvent(entity, error, 'inline');
                return wrapWithUnsupported(entity, 'inline');
            }
            return entity;
        }).entity, entity = _a === void 0 ? emptyDoc : _a;
        var newEntity = maySanitizePrivateContent(entity, providerFactory, sanitizePrivateContent);
        var parsedDoc = prosemirror_model_1.Node.fromJSON(schema, newEntity);
        // throws an error if the document is invalid
        parsedDoc.check();
        return parsedDoc;
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.error("Error processing document:\n" + e.message + "\n\n", JSON.stringify(node));
        return;
    }
}
exports.processRawValue = processRawValue;
var maySanitizePrivateContent = function (entity, providerFactory, sanitizePrivateContent) {
    if (sanitizePrivateContent && providerFactory) {
        return privacy_filter_1.sanitizeNodeForPrivacy(entity, providerFactory);
    }
    return entity;
};
exports.getStepRange = function (transaction) {
    var from = -1;
    var to = -1;
    transaction.steps.forEach(function (step) {
        step.getMap().forEach(function (_oldStart, _oldEnd, newStart, newEnd) {
            from = newStart < from || from === -1 ? newStart : from;
            to = newEnd < to || to === -1 ? newEnd : to;
        });
    });
    if (from !== -1) {
        return { from: from, to: to };
    }
    return null;
};
/**
 * Find the farthest node given a condition
 * @param predicate Function to check the node
 */
exports.findFarthestParentNode = function (predicate) { return function (selection) {
    var $from = selection.$from;
    var candidate = null;
    for (var i = $from.depth; i > 0; i--) {
        var node = $from.node(i);
        if (predicate(node)) {
            candidate = {
                pos: i > 0 ? $from.before(i) : 0,
                start: $from.start(i),
                depth: i,
                node: node,
            };
        }
    }
    return candidate;
}; };
exports.isSelectionEndOfParagraph = function (state) {
    return state.selection.$to.parent.type === state.schema.nodes.paragraph &&
        state.selection.$to.pos === state.doc.resolve(state.selection.$to.pos).end();
};
function nodesBetweenChanged(tr, f, startPos) {
    var stepRange = exports.getStepRange(tr);
    if (!stepRange) {
        return;
    }
    tr.doc.nodesBetween(stepRange.from, stepRange.to, f, startPos);
}
exports.nodesBetweenChanged = nodesBetweenChanged;
function getNodesCount(node) {
    var count = {};
    node.nodesBetween(0, node.nodeSize - 2, function (node) {
        count[node.type.name] = (count[node.type.name] || 0) + 1;
    });
    return count;
}
exports.getNodesCount = getNodesCount;
//# sourceMappingURL=document.js.map