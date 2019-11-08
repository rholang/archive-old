"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
var matches_1 = tslib_1.__importDefault(require("./matches"));
var schema_1 = tslib_1.__importDefault(require("./schema"));
/**
 * ProseMirror doesn't support empty text nodes, which can be quite
 * inconvenient when you want to capture a position ref without introducing
 * text.
 *
 * Take a couple of examples:
 *
 *     p('{<>}')
 *     p('Hello ', '{<>}', 'world!')
 *
 * After the ref syntax is stripped you're left with:
 *
 *     p('')
 *     p('Hello ', '', 'world!')
 *
 * This violates the rule of text nodes being non-empty. This class solves the
 * problem by providing an alternative data structure that *only* stores refs,
 * and can be used in scenarios where an empty text would be forbidden.
 *
 * This is done under the hood when using `text()` factory, and instead of
 * always returning a text node, it'll instead return one of two things:
 *
 * - a text node -- when given a non-empty string
 * - a refs tracker -- when given a string that *only* contains refs.
 */
var RefsTracker = /** @class */ (function () {
    function RefsTracker() {
    }
    return RefsTracker;
}());
exports.RefsTracker = RefsTracker;
/**
 * Create a text node.
 *
 * Special markers called "refs" can be put in the text. Refs provide a way to
 * declaratively describe a position within some text, and then access the
 * position in the resulting node.
 */
function text(value, schema) {
    var e_1, _a;
    var stripped = '';
    var textIndex = 0;
    var refs = {};
    // Helpers
    var isEven = function (n) { return n % 2 === 0; };
    try {
        for (var _b = tslib_1.__values(matches_1.default(value, /([\\]+)?{(\w+|<|>|<>|<cell|cell>|<node>|<\|gap>|<gap\|>)}/g)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var match = _c.value;
            var _d = tslib_1.__read(match, 3), refToken = _d[0], skipChars = _d[1], refName = _d[2];
            var index = match.index;
            var skipLen = skipChars && skipChars.length;
            if (skipLen) {
                if (isEven(skipLen)) {
                    index += skipLen / 2;
                }
                else {
                    stripped += value.slice(textIndex, index + (skipLen - 1) / 2);
                    stripped += value.slice(index + skipLen, index + refToken.length);
                    textIndex = index + refToken.length;
                    continue;
                }
            }
            stripped += value.slice(textIndex, index);
            refs[refName] = stripped.length;
            textIndex = match.index + refToken.length;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    stripped += value.slice(textIndex);
    var node = stripped === '' ? new RefsTracker() : schema.text(stripped);
    node.refs = refs;
    return node;
}
exports.text = text;
/**
 * Offset ref position values by some amount.
 */
function offsetRefs(refs, offset) {
    var result = {};
    for (var name_1 in refs) {
        result[name_1] = refs[name_1] + offset;
    }
    return result;
}
exports.offsetRefs = offsetRefs;
/**
 * Given a collection of nodes, sequence them in an array and return the result
 * along with the updated refs.
 */
function sequence() {
    var e_2, _a;
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    var position = 0;
    var refs = {};
    var nodes = [];
    // It's bizarre that this is necessary. An if/else in the for...of should have
    // sufficient but it did not work at the time of writing.
    var isRefsTracker = function (n) { return n instanceof RefsTracker; };
    var isRefsNode = function (n) { return !isRefsTracker(n); };
    try {
        for (var content_1 = tslib_1.__values(content), content_1_1 = content_1.next(); !content_1_1.done; content_1_1 = content_1.next()) {
            var node = content_1_1.value;
            if (isRefsTracker(node)) {
                refs = tslib_1.__assign(tslib_1.__assign({}, refs), offsetRefs(node.refs, position));
            }
            if (isRefsNode(node)) {
                var thickness = node.isText ? 0 : 1;
                refs = tslib_1.__assign(tslib_1.__assign({}, refs), offsetRefs(node.refs, position + thickness));
                position += node.nodeSize;
                nodes.push(node);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (content_1_1 && !content_1_1.done && (_a = content_1.return)) _a.call(content_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return { nodes: nodes, refs: refs };
}
exports.sequence = sequence;
/**
 * Given a jagged array, flatten it down to a single level.
 */
function flatten(deep) {
    var e_3, _a;
    var flat = [];
    try {
        for (var deep_1 = tslib_1.__values(deep), deep_1_1 = deep_1.next(); !deep_1_1.done; deep_1_1 = deep_1.next()) {
            var item = deep_1_1.value;
            if (Array.isArray(item)) {
                flat.splice.apply(flat, tslib_1.__spread([flat.length, 0], item));
            }
            else {
                flat.push(item);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (deep_1_1 && !deep_1_1.done && (_a = deep_1.return)) _a.call(deep_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return flat;
}
exports.flatten = flatten;
/**
 * Coerce builder content into ref nodes.
 */
function coerce(content, schema) {
    var refsContent = content.map(function (item) {
        return typeof item === 'string' ? text(item, schema) : item(schema);
    });
    return sequence.apply(void 0, tslib_1.__spread(flatten(refsContent)));
}
exports.coerce = coerce;
/**
 * Create a factory for nodes.
 */
function nodeFactory(type, attrs, marks) {
    if (attrs === void 0) { attrs = {}; }
    return function () {
        var content = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            content[_i] = arguments[_i];
        }
        return function (schema) {
            var _a = coerce(content, schema), nodes = _a.nodes, refs = _a.refs;
            var nodeBuilder = schema.nodes[type.name];
            if (!nodeBuilder) {
                throw new Error("Node: \"" + type.name + "\" doesn't exist in schema. It's usually caused by lacking of a plugin that contributes this node. Schema contains following nodes: " + Object.keys(schema.nodes).join(', '));
            }
            var node = nodeBuilder.createChecked(attrs, nodes, marks);
            node.refs = refs;
            return node;
        };
    };
}
exports.nodeFactory = nodeFactory;
/**
 * Create a factory for marks.
 */
function markFactory(type, attrs, allowDupes) {
    if (attrs === void 0) { attrs = {}; }
    if (allowDupes === void 0) { allowDupes = false; }
    return function () {
        var content = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            content[_i] = arguments[_i];
        }
        return function (schema) {
            var markBuilder = schema.marks[type.name];
            if (!markBuilder) {
                throw new Error("Mark: \"" + type.name + "\" doesn't exist in schema. It's usually caused by lacking of a plugin that contributes this mark. Schema contains following marks: " + Object.keys(schema.marks).join(', '));
            }
            var mark = markBuilder.create(attrs);
            var nodes = coerce(content, schema).nodes;
            return nodes.map(function (node) {
                if (!allowDupes && mark.type.isInSet(node.marks)) {
                    return node;
                }
                else {
                    var refNode = node.mark(mark.addToSet(node.marks));
                    refNode.refs = node.refs;
                    return refNode;
                }
            });
        };
    };
}
exports.markFactory = markFactory;
exports.fragment = function () {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return flatten(content);
};
exports.slice = function () {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return new prosemirror_model_1.Slice(prosemirror_model_1.Fragment.from(coerce(content, schema_1.default).nodes), 0, 0);
};
/**
 * Builds a 'clean' version of the nodes, without Refs or RefTrackers
 */
exports.clean = function (content) { return function (schema) {
    var node = content(schema);
    if (Array.isArray(node)) {
        return node.reduce(function (acc, next) {
            if (next instanceof prosemirror_model_1.Node) {
                acc.push(prosemirror_model_1.Node.fromJSON(schema, next.toJSON()));
            }
            return acc;
        }, []);
    }
    return node instanceof prosemirror_model_1.Node
        ? prosemirror_model_1.Node.fromJSON(schema, node.toJSON())
        : undefined;
}; };
exports.cleanOne = function (content) { return function (schema) {
    return exports.clean(content)(schema)[0];
}; };
//
// Nodes
//
exports.doc = nodeFactory(schema_1.default.nodes.doc, {});
exports.p = nodeFactory(schema_1.default.nodes.paragraph, {});
exports.blockquote = nodeFactory(schema_1.default.nodes.blockquote, {});
exports.h1 = nodeFactory(schema_1.default.nodes.heading, { level: 1 });
exports.h2 = nodeFactory(schema_1.default.nodes.heading, { level: 2 });
exports.h3 = nodeFactory(schema_1.default.nodes.heading, { level: 3 });
exports.h4 = nodeFactory(schema_1.default.nodes.heading, { level: 4 });
exports.h5 = nodeFactory(schema_1.default.nodes.heading, { level: 5 });
exports.h6 = nodeFactory(schema_1.default.nodes.heading, { level: 6 });
exports.li = nodeFactory(schema_1.default.nodes.listItem, {});
exports.ul = nodeFactory(schema_1.default.nodes.bulletList, {});
exports.ol = nodeFactory(schema_1.default.nodes.orderedList, {});
exports.br = nodeFactory(schema_1.default.nodes.hardBreak, {});
exports.hr = nodeFactory(schema_1.default.nodes.rule, {});
exports.panel = function (attrs) {
    if (attrs === void 0) { attrs = {}; }
    return nodeFactory(schema_1.default.nodes.panel, attrs);
};
exports.panelNote = exports.panel({ panelType: 'note' });
exports.hardBreak = nodeFactory(schema_1.default.nodes.hardBreak, {});
exports.code_block = function (attrs) {
    if (attrs === void 0) { attrs = {}; }
    return nodeFactory(schema_1.default.nodes.codeBlock, attrs);
};
exports.img = function (attrs) {
    return nodeFactory(schema_1.default.nodes.image, attrs);
};
exports.emoji = function (attrs) {
    var emojiNodeAttrs = {
        shortName: attrs.shortName,
        id: attrs.id,
        text: attrs.text || attrs.fallback,
    };
    return nodeFactory(schema_1.default.nodes.emoji, emojiNodeAttrs);
};
exports.mention = function (attrs) {
    return nodeFactory(schema_1.default.nodes.mention, attrs);
};
exports.table = function (attrs) {
    return nodeFactory(schema_1.default.nodes.table, attrs);
};
exports.tr = nodeFactory(schema_1.default.nodes.tableRow, {});
exports.td = function (attrs) {
    return nodeFactory(schema_1.default.nodes.tableCell, attrs);
};
exports.th = function (attrs) {
    return nodeFactory(schema_1.default.nodes.tableHeader, attrs);
};
exports.tdEmpty = exports.td()(exports.p(''));
exports.thEmpty = exports.th()(exports.p(''));
exports.tdCursor = exports.td()(exports.p('{<>}'));
exports.thCursor = exports.th()(exports.p('{<>}'));
exports.decisionList = function (attrs) {
    if (attrs === void 0) { attrs = {}; }
    return nodeFactory(schema_1.default.nodes.decisionList, attrs);
};
exports.decisionItem = function (attrs) {
    if (attrs === void 0) { attrs = {}; }
    return nodeFactory(schema_1.default.nodes.decisionItem, attrs);
};
exports.taskList = function (attrs) {
    if (attrs === void 0) { attrs = {}; }
    return nodeFactory(schema_1.default.nodes.taskList, attrs);
};
exports.taskItem = function (attrs) {
    if (attrs === void 0) { attrs = {}; }
    return nodeFactory(schema_1.default.nodes.taskItem, attrs);
};
exports.confluenceUnsupportedBlock = function (cxhtml) {
    return nodeFactory(schema_1.default.nodes.confluenceUnsupportedBlock, { cxhtml: cxhtml })();
};
exports.confluenceUnsupportedInline = function (cxhtml) {
    return nodeFactory(schema_1.default.nodes.confluenceUnsupportedInline, { cxhtml: cxhtml })();
};
exports.confluenceJiraIssue = function (attrs) { return nodeFactory(schema_1.default.nodes.confluenceJiraIssue, attrs); };
exports.inlineExtension = function (attrs) { return nodeFactory(schema_1.default.nodes.inlineExtension, attrs); };
exports.extension = function (attrs) { return nodeFactory(schema_1.default.nodes.extension, attrs); };
exports.bodiedExtension = function (attrs) { return nodeFactory(schema_1.default.nodes.bodiedExtension, attrs); };
exports.date = function (attrs) {
    return nodeFactory(schema_1.default.nodes.date, attrs)();
};
exports.status = function (attrs) { return nodeFactory(schema_1.default.nodes.status, attrs)(); };
exports.mediaSingle = function (attrs) {
    if (attrs === void 0) { attrs = { layout: 'center' }; }
    return nodeFactory(schema_1.default.nodes.mediaSingle, attrs);
};
exports.mediaGroup = nodeFactory(schema_1.default.nodes.mediaGroup);
exports.media = function (attrs) {
    return nodeFactory(schema_1.default.nodes.media, attrs);
};
exports.placeholder = function (attrs) {
    return nodeFactory(schema_1.default.nodes.placeholder, attrs)();
};
exports.layoutSection = nodeFactory(schema_1.default.nodes.layoutSection);
exports.layoutColumn = function (attrs) {
    return nodeFactory(schema_1.default.nodes.layoutColumn, attrs);
};
exports.inlineCard = function (attrs) {
    return nodeFactory(schema_1.default.nodes.inlineCard, attrs);
};
exports.blockCard = function (attrs) {
    return nodeFactory(schema_1.default.nodes.blockCard, attrs);
};
exports.unsupportedInline = function (attrs) {
    return nodeFactory(schema_1.default.nodes.unsupportedInline, attrs);
};
exports.unsupportedBlock = function (attrs) {
    return nodeFactory(schema_1.default.nodes.unsupportedBlock, attrs);
};
//
// Marks
//
exports.em = markFactory(schema_1.default.marks.em, {});
exports.subsup = function (attrs) {
    return markFactory(schema_1.default.marks.subsup, attrs);
};
exports.underline = markFactory(schema_1.default.marks.underline, {});
exports.strong = markFactory(schema_1.default.marks.strong, {});
exports.code = markFactory(schema_1.default.marks.code, {});
exports.strike = markFactory(schema_1.default.marks.strike, {});
exports.a = function (attrs) {
    return markFactory(schema_1.default.marks.link, attrs);
};
exports.typeAheadQuery = function (attrs) {
    if (attrs === void 0) { attrs = { trigger: '', query: '' }; }
    return markFactory(schema_1.default.marks.typeAheadQuery, attrs);
};
exports.textColor = function (attrs) {
    return markFactory(schema_1.default.marks.textColor, attrs);
};
exports.confluenceInlineComment = function (attrs) {
    return markFactory(schema_1.default.marks.confluenceInlineComment, attrs ? attrs : {}, true);
};
exports.annotation = function (attrs) {
    return markFactory(schema_1.default.marks.annotation, attrs, true);
};
//
// Block Marks
//
exports.alignment = function (attrs) {
    return markFactory(schema_1.default.marks.alignment, attrs);
};
exports.breakout = function (attrs) {
    return markFactory(schema_1.default.marks.breakout, attrs);
};
exports.indentation = function (attrs) {
    return markFactory(schema_1.default.marks.indentation, attrs);
};
// builderEval is used for doc-builder example, and needs scope of the above node factories
exports.builderEval = function (data) {
    // eslint-disable-next-line no-eval
    return eval(data);
};
//# sourceMappingURL=schema-builder.js.map