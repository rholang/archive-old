"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adf_schema_1 = require("@atlaskit/adf-schema");
/*
 * It's important that this order follows the marks rank defined here:
 * https://product-fabric.atlassian.net/wiki/spaces/E/pages/11174043/Document+structure#Documentstructure-Rank
 */
exports.markOrder = [
    'link',
    'em',
    'strong',
    'textColor',
    'strike',
    'subsup',
    'underline',
    'code',
    'confluenceInlineComment',
    'annotation',
];
exports.isSubSupType = function (type) {
    return type === 'sub' || type === 'sup';
};
/*
 * Sorts mark by the predefined order above
 */
exports.getMarksByOrder = function (marks) {
    return tslib_1.__spread(marks).sort(function (a, b) { return exports.markOrder.indexOf(a.type.name) - exports.markOrder.indexOf(b.type.name); });
};
/*
 * Check if two marks are the same by comparing type and attrs
 */
exports.isSameMark = function (mark, otherMark) {
    if (!mark || !otherMark) {
        return false;
    }
    return mark.eq(otherMark);
};
exports.getValidDocument = function (doc, schema, adfStage) {
    if (schema === void 0) { schema = adf_schema_1.defaultSchema; }
    if (adfStage === void 0) { adfStage = 'final'; }
    var node = exports.getValidNode(doc, schema, adfStage);
    if (node.type === 'doc') {
        node.content = wrapInlineNodes(node.content);
        return node;
    }
    return null;
};
var wrapInlineNodes = function (nodes) {
    if (nodes === void 0) { nodes = []; }
    return nodes.map(function (node) {
        return adf_schema_1.inlineNodes.has(node.type) ? { type: 'paragraph', content: [node] } : node;
    });
};
exports.getValidContent = function (content, schema, adfStage) {
    if (schema === void 0) { schema = adf_schema_1.defaultSchema; }
    if (adfStage === void 0) { adfStage = 'final'; }
    return content.map(function (node) { return exports.getValidNode(node, schema, adfStage); });
};
var TEXT_COLOR_PATTERN = /^#[0-9a-f]{6}$/i;
var RELATIVE_LINK = /^\//;
var flattenUnknownBlockTree = function (node, schema, adfStage) {
    if (schema === void 0) { schema = adf_schema_1.defaultSchema; }
    if (adfStage === void 0) { adfStage = 'final'; }
    var output = [];
    var isPrevLeafNode = false;
    for (var i = 0; i < node.content.length; i++) {
        var childNode = node.content[i];
        var isLeafNode = !(childNode.content && childNode.content.length);
        if (i > 0) {
            if (isPrevLeafNode) {
                output.push({ type: 'text', text: ' ' });
            }
            else {
                output.push({ type: 'hardBreak' });
            }
        }
        if (isLeafNode) {
            output.push(exports.getValidNode(childNode, schema, adfStage));
        }
        else {
            output.push.apply(output, tslib_1.__spread(flattenUnknownBlockTree(childNode, schema, adfStage)));
        }
        isPrevLeafNode = isLeafNode;
    }
    return output;
};
/**
 * Sanitize unknown node tree
 *
 * @see https://product-fabric.atlassian.net/wiki/spaces/E/pages/11174043/Document+structure#Documentstructure-ImplementationdetailsforHCNGwebrenderer
 */
exports.getValidUnknownNode = function (node) {
    var _a = node.attrs, attrs = _a === void 0 ? {} : _a, content = node.content, text = node.text, type = node.type;
    if (!content || !content.length) {
        var unknownInlineNode = {
            type: 'text',
            text: text || attrs.text || "[" + type + "]",
        };
        var textUrl = attrs.textUrl;
        if (textUrl && adf_schema_1.isSafeUrl(textUrl)) {
            unknownInlineNode.marks = [
                {
                    type: 'link',
                    attrs: {
                        href: textUrl,
                    },
                },
            ];
        }
        return unknownInlineNode;
    }
    /*
     * Find leaf nodes and join them. If leaf nodes' parent node is the same node
     * join with a blank space, otherwise they are children of different branches, i.e.
     * we need to join them with a hardBreak node
     */
    return {
        type: 'unknownBlock',
        content: flattenUnknownBlockTree(node),
    };
};
/*
 * This method will validate a Node according to the spec defined here
 * https://product-fabric.atlassian.net/wiki/spaces/E/pages/11174043/Document+structure#Documentstructure-Nodes
 *
 * This is also the place to handle backwards compatibility.
 *
 * If a node is not recognized or is missing required attributes, we should return 'unknown'
 *
 */
exports.getValidNode = function (originalNode, schema, adfStage) {
    if (schema === void 0) { schema = adf_schema_1.defaultSchema; }
    if (adfStage === void 0) { adfStage = 'final'; }
    var attrs = originalNode.attrs, marks = originalNode.marks, text = originalNode.text, type = originalNode.type;
    var content = originalNode.content;
    var node = {
        attrs: attrs,
        marks: marks,
        text: text,
        type: type,
    };
    if (content) {
        node.content = content = exports.getValidContent(content, schema, adfStage);
    }
    // If node type doesn't exist in schema, make it an unknown node
    if (!schema.nodes[type]) {
        return exports.getValidUnknownNode(node);
    }
    if (type) {
        switch (type) {
            case 'doc': {
                var version = originalNode.version;
                if (version && content && content.length) {
                    return {
                        type: type,
                        content: content,
                    };
                }
                break;
            }
            case 'codeBlock': {
                if (content) {
                    content = content.reduce(function (acc, val) {
                        if (val.type === 'text') {
                            acc.push({ type: val.type, text: val.text });
                        }
                        return acc;
                    }, []);
                }
                if (attrs && attrs.language) {
                    return {
                        type: type,
                        attrs: attrs,
                        content: content,
                        marks: marks,
                    };
                }
                return {
                    type: type,
                    content: content,
                    marks: marks,
                };
            }
            case 'date': {
                if (attrs && attrs.timestamp) {
                    return {
                        type: type,
                        attrs: attrs,
                    };
                }
                break;
            }
            case 'status': {
                if (attrs && attrs.text && attrs.color) {
                    return {
                        type: type,
                        attrs: attrs,
                    };
                }
                break;
            }
            case 'emoji': {
                if (attrs && attrs.shortName) {
                    return {
                        type: type,
                        attrs: attrs,
                    };
                }
                break;
            }
            case 'inlineExtension':
            case 'extension': {
                if (attrs && attrs.extensionType && attrs.extensionKey) {
                    return {
                        type: type,
                        attrs: attrs,
                    };
                }
                break;
            }
            case 'inlineCard':
            case 'blockCard': {
                if (attrs &&
                    ((attrs.url && adf_schema_1.isSafeUrl(attrs.url)) ||
                        (attrs.data && attrs.data.url && adf_schema_1.isSafeUrl(attrs.data.url)))) {
                    return {
                        type: type,
                        attrs: attrs,
                    };
                }
                break;
            }
            case 'bodiedExtension': {
                if (attrs && attrs.extensionType && attrs.extensionKey && content) {
                    return {
                        type: type,
                        attrs: attrs,
                        content: content,
                    };
                }
                break;
            }
            case 'hardBreak': {
                return {
                    type: type,
                };
            }
            case 'media': {
                var mediaId = '';
                var mediaType = '';
                var mediaCollection = [];
                var mediaUrl = '';
                if (attrs) {
                    var id = attrs.id, collection = attrs.collection, type_1 = attrs.type, url = attrs.url;
                    mediaId = id;
                    mediaType = type_1;
                    mediaCollection = collection;
                    mediaUrl = url;
                }
                if (mediaType === 'external' && !!mediaUrl) {
                    return {
                        type: type,
                        attrs: {
                            type: mediaType,
                            url: mediaUrl,
                            width: attrs.width,
                            height: attrs.height,
                        },
                    };
                }
                else if (mediaId && mediaType) {
                    var mediaAttrs = {
                        type: mediaType,
                        id: mediaId,
                        collection: mediaCollection,
                    };
                    if (attrs.width) {
                        mediaAttrs.width = attrs.width;
                    }
                    if (attrs.height) {
                        mediaAttrs.height = attrs.height;
                    }
                    return {
                        type: type,
                        attrs: mediaAttrs,
                    };
                }
                break;
            }
            case 'mediaGroup': {
                if (Array.isArray(content) && !content.some(function (e) { return e.type !== 'media'; })) {
                    return {
                        type: type,
                        content: content,
                    };
                }
                break;
            }
            case 'mediaSingle': {
                if (Array.isArray(content) &&
                    content.length === 1 &&
                    content[0].type === 'media') {
                    return {
                        type: type,
                        attrs: attrs,
                        content: content,
                        marks: marks,
                    };
                }
                break;
            }
            case 'mention': {
                var mentionText = '';
                var mentionId = void 0;
                var mentionAccess = void 0;
                if (attrs) {
                    var text_1 = attrs.text, displayName = attrs.displayName, id = attrs.id, accessLevel = attrs.accessLevel;
                    mentionText = text_1 || displayName;
                    mentionId = id;
                    mentionAccess = accessLevel;
                }
                if (!mentionText) {
                    mentionText = text || '@unknown';
                }
                if (mentionText && mentionId) {
                    var mentionNode = {
                        type: type,
                        attrs: {
                            id: mentionId,
                            text: mentionText,
                            accessLevel: '',
                        },
                    };
                    if (mentionAccess) {
                        mentionNode.attrs.accessLevel = mentionAccess;
                    }
                    return mentionNode;
                }
                break;
            }
            case 'paragraph': {
                return marks
                    ? {
                        type: type,
                        content: content || [],
                        marks: marks,
                    }
                    : { type: type, content: content || [] };
            }
            case 'rule': {
                return {
                    type: type,
                };
            }
            case 'text': {
                var marks_1 = node.marks;
                if (text) {
                    if (marks_1) {
                        marks_1 = marks_1.reduce(function (acc, mark) {
                            var validMark = exports.getValidMark(mark, adfStage);
                            if (validMark) {
                                acc.push(validMark);
                            }
                            return acc;
                        }, []);
                    }
                    return marks_1 ? { type: type, text: text, marks: marks_1 } : { type: type, text: text };
                }
                break;
            }
            case 'heading': {
                if (attrs) {
                    var level = attrs.level;
                    var between = function (x, a, b) { return x >= a && x <= b; };
                    if (level && between(level, 1, 6)) {
                        return marks
                            ? {
                                type: type,
                                content: content,
                                marks: marks,
                                attrs: {
                                    level: level,
                                },
                            }
                            : {
                                type: type,
                                content: content,
                                attrs: {
                                    level: level,
                                },
                            };
                    }
                }
                break;
            }
            case 'bulletList': {
                if (content) {
                    return {
                        type: type,
                        content: content,
                    };
                }
                break;
            }
            case 'orderedList': {
                if (content) {
                    return {
                        type: type,
                        content: content,
                        attrs: {
                            order: attrs && attrs.order,
                        },
                    };
                }
                break;
            }
            case 'listItem': {
                if (content) {
                    return {
                        type: type,
                        content: wrapInlineNodes(content),
                    };
                }
                break;
            }
            case 'blockquote': {
                if (content) {
                    return {
                        type: type,
                        content: content,
                    };
                }
                break;
            }
            case 'panel': {
                var types = ['info', 'note', 'tip', 'success', 'warning', 'error'];
                if (attrs && content) {
                    var panelType = attrs.panelType;
                    if (types.indexOf(panelType) > -1) {
                        return {
                            type: type,
                            attrs: { panelType: panelType },
                            content: content,
                        };
                    }
                }
                break;
            }
            case 'layoutSection': {
                if (content) {
                    return {
                        type: type,
                        marks: marks,
                        content: content,
                    };
                }
                break;
            }
            case 'layoutColumn': {
                if (attrs && content) {
                    if (attrs.width > 0 && attrs.width <= 100) {
                        return {
                            type: type,
                            content: content,
                            attrs: attrs,
                        };
                    }
                }
                break;
            }
            case 'decisionList': {
                return {
                    type: type,
                    content: content,
                    attrs: {
                        localId: (attrs && attrs.localId) || adf_schema_1.generateUuid(),
                    },
                };
            }
            case 'decisionItem': {
                return {
                    type: type,
                    content: content,
                    attrs: {
                        localId: (attrs && attrs.localId) || adf_schema_1.generateUuid(),
                        state: (attrs && attrs.state) || 'DECIDED',
                    },
                };
            }
            case 'taskList': {
                return {
                    type: type,
                    content: content,
                    attrs: {
                        localId: (attrs && attrs.localId) || adf_schema_1.generateUuid(),
                    },
                };
            }
            case 'taskItem': {
                return {
                    type: type,
                    content: content,
                    attrs: {
                        localId: (attrs && attrs.localId) || adf_schema_1.generateUuid(),
                        state: (attrs && attrs.state) || 'TODO',
                    },
                };
            }
            case 'table': {
                if (Array.isArray(content) &&
                    content.length > 0 &&
                    !content.some(function (e) { return e.type !== 'tableRow'; })) {
                    return {
                        type: type,
                        content: content,
                        attrs: attrs,
                    };
                }
                break;
            }
            case 'tableRow': {
                if (Array.isArray(content) &&
                    content.length > 0 &&
                    !content.some(function (e) { return e.type !== 'tableCell' && e.type !== 'tableHeader'; })) {
                    return {
                        type: type,
                        content: content,
                    };
                }
                break;
            }
            case 'tableCell':
            case 'tableHeader': {
                if (content) {
                    var cellAttrs = {};
                    if (attrs) {
                        if (attrs.colspan && attrs.colspan > 1) {
                            cellAttrs.colspan = attrs.colspan;
                        }
                        if (attrs.rowspan && attrs.rowspan > 1) {
                            cellAttrs.rowspan = attrs.rowspan;
                        }
                        if (attrs.background) {
                            cellAttrs.background = attrs.background;
                        }
                        if (attrs.colwidth && Array.isArray(attrs.colwidth)) {
                            cellAttrs.colwidth = attrs.colwidth;
                        }
                    }
                    return {
                        type: type,
                        content: wrapInlineNodes(content),
                        attrs: attrs ? cellAttrs : undefined,
                    };
                }
                break;
            }
            case 'image': {
                if (attrs && attrs.src) {
                    return {
                        type: type,
                        attrs: attrs,
                    };
                }
                break;
            }
            case 'placeholder': {
                if (attrs && typeof attrs.text !== 'undefined') {
                    return { type: type, attrs: attrs };
                }
                break;
            }
        }
    }
    return exports.getValidUnknownNode(node);
};
/*
 * This method will validate a Mark according to the spec defined here
 * https://product-fabric.atlassian.net/wiki/spaces/E/pages/11174043/Document+structure#Documentstructure-Marks
 *
 * This is also the place to handle backwards compatibility.
 *
 * If a node is not recognized or is missing required attributes, we should return null
 *
 */
exports.getValidMark = function (mark, adfStage) {
    if (adfStage === void 0) { adfStage = 'final'; }
    var attrs = mark.attrs, type = mark.type;
    if (type) {
        switch (type) {
            case 'code': {
                return {
                    type: type,
                };
            }
            case 'em': {
                return {
                    type: type,
                };
            }
            case 'link': {
                if (attrs) {
                    var href = attrs.href, url = attrs.url, __confluenceMetadata = attrs.__confluenceMetadata;
                    var linkHref = href || url;
                    if (linkHref &&
                        linkHref.indexOf(':') === -1 &&
                        !RELATIVE_LINK.test(linkHref)) {
                        linkHref = "http://" + linkHref;
                    }
                    var linkAttrs = {
                        href: linkHref,
                    };
                    if (__confluenceMetadata) {
                        linkAttrs.__confluenceMetadata = __confluenceMetadata;
                    }
                    if (linkHref && adf_schema_1.isSafeUrl(linkHref)) {
                        return {
                            type: type,
                            attrs: linkAttrs,
                        };
                    }
                }
                break;
            }
            case 'strike': {
                return {
                    type: type,
                };
            }
            case 'strong': {
                return {
                    type: type,
                };
            }
            case 'subsup': {
                if (attrs && attrs['type']) {
                    var subSupType = attrs['type'];
                    if (exports.isSubSupType(subSupType)) {
                        return {
                            type: type,
                            attrs: {
                                type: subSupType,
                            },
                        };
                    }
                }
                break;
            }
            case 'textColor': {
                if (attrs && TEXT_COLOR_PATTERN.test(attrs.color)) {
                    return {
                        type: type,
                        attrs: attrs,
                    };
                }
                break;
            }
            case 'underline': {
                return {
                    type: type,
                };
            }
        }
    }
    if (adfStage === 'stage0') {
        switch (type) {
            case 'confluenceInlineComment': {
                return {
                    type: type,
                    attrs: attrs,
                };
            }
            case 'annotation': {
                return {
                    type: type,
                    attrs: attrs,
                };
            }
        }
    }
    return null;
};
//# sourceMappingURL=validator.js.map