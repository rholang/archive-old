"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
var groups_1 = require("./groups");
var marks_1 = require("./marks");
var nodes_1 = require("./nodes");
function addItems(builtInItems, config, customSpecs) {
    if (customSpecs === void 0) { customSpecs = {}; }
    if (!config) {
        return {};
    }
    /**
     * Add built-in Node / Mark specs
     */
    var items = builtInItems.reduce(function (items, _a) {
        var name = _a.name, spec = _a.spec;
        if (config.indexOf(name) !== -1) {
            items[name] = customSpecs[name] || spec;
        }
        return items;
    }, {});
    /**
     * Add Custom Node / Mark specs
     */
    return Object.keys(customSpecs).reduce(function (items, name) {
        if (items[name]) {
            return items;
        }
        items[name] = customSpecs[name];
        return items;
    }, items);
}
// We use groups to allow schemas to be constructed in different shapes without changing node/mark
// specs, but this means nodes/marks are defined with groups that might never be used in the schema.
// In this scenario ProseMirror will complain and prevent the schema from being constructed.
//
// To avoid the problem, we include items that serve to "declare" the groups in the schema. This
// approach unfortunately leaves unused items in the schema, but has the benefit of avoiding the
// need to manipulate `exclude` or content expression values for potentially every schema item.
function groupDeclaration(name) {
    return {
        name: "__" + name + "GroupDeclaration",
        spec: {
            group: name,
        },
    };
}
var markGroupDeclarations = [
    groupDeclaration(groups_1.COLOR),
    groupDeclaration(groups_1.FONT_STYLE),
    groupDeclaration(groups_1.SEARCH_QUERY),
    groupDeclaration(groups_1.LINK),
];
var markGroupDeclarationsNames = markGroupDeclarations.map(function (groupMark) { return groupMark.name; });
var nodesInOrder = [
    { name: 'doc', spec: nodes_1.doc },
    { name: 'paragraph', spec: nodes_1.paragraph },
    { name: 'text', spec: nodes_1.text },
    { name: 'bulletList', spec: nodes_1.bulletList },
    { name: 'orderedList', spec: nodes_1.orderedList },
    { name: 'listItem', spec: nodes_1.listItem },
    { name: 'heading', spec: nodes_1.heading },
    { name: 'blockquote', spec: nodes_1.blockquote },
    { name: 'codeBlock', spec: nodes_1.codeBlock },
    { name: 'panel', spec: nodes_1.panel },
    { name: 'rule', spec: nodes_1.rule },
    { name: 'image', spec: nodes_1.image },
    { name: 'mention', spec: nodes_1.mention },
    { name: 'media', spec: nodes_1.media },
    { name: 'mediaGroup', spec: nodes_1.mediaGroup },
    { name: 'mediaSingle', spec: nodes_1.mediaSingle },
    { name: 'placeholder', spec: nodes_1.placeholder },
    { name: 'layoutSection', spec: nodes_1.layoutSection },
    { name: 'layoutColumn', spec: nodes_1.layoutColumn },
    { name: 'hardBreak', spec: nodes_1.hardBreak },
    { name: 'emoji', spec: nodes_1.emoji },
    { name: 'table', spec: nodes_1.table },
    { name: 'tableCell', spec: nodes_1.tableCell },
    { name: 'tableRow', spec: nodes_1.tableRow },
    { name: 'tableHeader', spec: nodes_1.tableHeader },
    { name: 'confluenceJiraIssue', spec: nodes_1.confluenceJiraIssue },
    { name: 'confluenceUnsupportedInline', spec: nodes_1.confluenceUnsupportedInline },
    { name: 'confluenceUnsupportedBlock', spec: nodes_1.confluenceUnsupportedBlock },
    { name: 'decisionList', spec: nodes_1.decisionList },
    { name: 'decisionItem', spec: nodes_1.decisionItem },
    { name: 'taskList', spec: nodes_1.taskList },
    { name: 'taskList', spec: nodes_1.nestableTaskList },
    { name: 'taskItem', spec: nodes_1.taskItem },
    { name: 'date', spec: nodes_1.date },
    { name: 'status', spec: nodes_1.status },
    { name: 'extension', spec: nodes_1.extension },
    { name: 'inlineExtension', spec: nodes_1.inlineExtension },
    { name: 'bodiedExtension', spec: nodes_1.bodiedExtension },
    { name: 'inlineCard', spec: nodes_1.inlineCard },
    { name: 'blockCard', spec: nodes_1.blockCard },
    { name: 'unknownBlock', spec: nodes_1.unknownBlock },
    { name: 'unsupportedBlock', spec: nodes_1.unsupportedBlock },
    { name: 'unsupportedInline', spec: nodes_1.unsupportedInline },
];
var marksInOrder = tslib_1.__spread([
    { name: 'link', spec: marks_1.link },
    { name: 'em', spec: marks_1.em },
    { name: 'strong', spec: marks_1.strong },
    { name: 'textColor', spec: marks_1.textColor },
    { name: 'strike', spec: marks_1.strike },
    { name: 'subsup', spec: marks_1.subsup },
    { name: 'underline', spec: marks_1.underline },
    { name: 'code', spec: marks_1.code },
    { name: 'typeAheadQuery', spec: marks_1.typeAheadQuery },
    { name: 'alignment', spec: marks_1.alignment },
    { name: 'annotation', spec: marks_1.annotation },
    { name: 'confluenceInlineComment', spec: marks_1.confluenceInlineComment }
], markGroupDeclarations, [
    { name: 'breakout', spec: marks_1.breakout },
    { name: 'indentation', spec: marks_1.indentation },
]);
/**
 * Creates a schema preserving order of marks and nodes.
 */
function createSchema(config) {
    var customNodeSpecs = config.customNodeSpecs, customMarkSpecs = config.customMarkSpecs;
    var nodesConfig = Object.keys(customNodeSpecs || {}).concat(config.nodes);
    var marksConfig = Object.keys(customMarkSpecs || {})
        .concat(config.marks || [])
        .concat(markGroupDeclarationsNames);
    var nodes = addItems(nodesInOrder, nodesConfig, customNodeSpecs);
    var marks = addItems(marksInOrder, marksConfig, customMarkSpecs);
    nodes = sanitizeNodes(nodes, marks);
    return new prosemirror_model_1.Schema({
        nodes: nodes,
        marks: marks,
    });
}
exports.createSchema = createSchema;
function sanitizeNodes(nodes, supportedMarks) {
    var nodeNames = Object.keys(nodes);
    nodeNames.forEach(function (nodeKey) {
        var nodeSpec = tslib_1.__assign({}, nodes[nodeKey]);
        if (nodeSpec.marks && nodeSpec.marks !== '_') {
            nodeSpec.marks = nodeSpec.marks
                .split(' ')
                .filter(function (mark) { return !!supportedMarks[mark]; })
                .join(' ');
        }
        if (nodeSpec.content) {
            var content = nodeSpec.content.replace(/\W/g, ' ');
            var contentKeys = content.split(' ');
            var unsupportedContentKeys = contentKeys.filter(function (contentKey) { return !isContentSupported(nodes, contentKey); });
            nodeSpec.content = unsupportedContentKeys.reduce(function (newContent, nodeName) { return sanitizedContent(newContent, nodeName); }, nodeSpec.content);
        }
        nodes[nodeKey] = nodeSpec;
    });
    return nodes;
}
exports.sanitizeNodes = sanitizeNodes;
function sanitizedContent(content, invalidContent) {
    if (!invalidContent.length) {
        return content || '';
    }
    if (!content || !content.match(/\w/)) {
        return '';
    }
    var newContent = content
        .replace(new RegExp("(" + invalidContent + "((\\s)*\\|)+)|((\\|(\\s)*)+" + invalidContent + ")|(" + invalidContent + "$)", 'g'), '')
        .replace('  ', ' ')
        .trim();
    return newContent;
}
function isContentSupported(nodes, contentKey) {
    var nodeKeys = Object.keys(nodes);
    // content is with valid node
    if (nodeKeys.indexOf(contentKey) > -1) {
        return true;
    }
    // content is with valid group
    for (var supportedKey in nodes) {
        var nodeSpec = nodes[supportedKey];
        if (nodeSpec && nodeSpec.group === contentKey) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=create-schema.js.map