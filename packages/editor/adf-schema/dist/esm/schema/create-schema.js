import { __assign, __read, __spread } from "tslib";
import { Schema } from 'prosemirror-model';
import { COLOR, FONT_STYLE, SEARCH_QUERY, LINK } from './groups';
import { link, em, strong, textColor, strike, subsup, underline, code, typeAheadQuery, confluenceInlineComment, breakout, alignment, indentation, annotation, } from './marks';
import { confluenceJiraIssue, confluenceUnsupportedBlock, confluenceUnsupportedInline, doc, paragraph, text, bulletList, orderedList, listItem, heading, blockquote, codeBlock, panel, rule, image, mention, media, mediaGroup, mediaSingle, hardBreak, emoji, table, tableCell, tableHeader, tableRow, decisionList, decisionItem, taskList, taskItem, unknownBlock, extension, inlineExtension, bodiedExtension, date, placeholder, layoutSection, layoutColumn, inlineCard, blockCard, unsupportedBlock, unsupportedInline, status, nestableTaskList, } from './nodes';
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
    groupDeclaration(COLOR),
    groupDeclaration(FONT_STYLE),
    groupDeclaration(SEARCH_QUERY),
    groupDeclaration(LINK),
];
var markGroupDeclarationsNames = markGroupDeclarations.map(function (groupMark) { return groupMark.name; });
var nodesInOrder = [
    { name: 'doc', spec: doc },
    { name: 'paragraph', spec: paragraph },
    { name: 'text', spec: text },
    { name: 'bulletList', spec: bulletList },
    { name: 'orderedList', spec: orderedList },
    { name: 'listItem', spec: listItem },
    { name: 'heading', spec: heading },
    { name: 'blockquote', spec: blockquote },
    { name: 'codeBlock', spec: codeBlock },
    { name: 'panel', spec: panel },
    { name: 'rule', spec: rule },
    { name: 'image', spec: image },
    { name: 'mention', spec: mention },
    { name: 'media', spec: media },
    { name: 'mediaGroup', spec: mediaGroup },
    { name: 'mediaSingle', spec: mediaSingle },
    { name: 'placeholder', spec: placeholder },
    { name: 'layoutSection', spec: layoutSection },
    { name: 'layoutColumn', spec: layoutColumn },
    { name: 'hardBreak', spec: hardBreak },
    { name: 'emoji', spec: emoji },
    { name: 'table', spec: table },
    { name: 'tableCell', spec: tableCell },
    { name: 'tableRow', spec: tableRow },
    { name: 'tableHeader', spec: tableHeader },
    { name: 'confluenceJiraIssue', spec: confluenceJiraIssue },
    { name: 'confluenceUnsupportedInline', spec: confluenceUnsupportedInline },
    { name: 'confluenceUnsupportedBlock', spec: confluenceUnsupportedBlock },
    { name: 'decisionList', spec: decisionList },
    { name: 'decisionItem', spec: decisionItem },
    { name: 'taskList', spec: taskList },
    { name: 'taskList', spec: nestableTaskList },
    { name: 'taskItem', spec: taskItem },
    { name: 'date', spec: date },
    { name: 'status', spec: status },
    { name: 'extension', spec: extension },
    { name: 'inlineExtension', spec: inlineExtension },
    { name: 'bodiedExtension', spec: bodiedExtension },
    { name: 'inlineCard', spec: inlineCard },
    { name: 'blockCard', spec: blockCard },
    { name: 'unknownBlock', spec: unknownBlock },
    { name: 'unsupportedBlock', spec: unsupportedBlock },
    { name: 'unsupportedInline', spec: unsupportedInline },
];
var marksInOrder = __spread([
    { name: 'link', spec: link },
    { name: 'em', spec: em },
    { name: 'strong', spec: strong },
    { name: 'textColor', spec: textColor },
    { name: 'strike', spec: strike },
    { name: 'subsup', spec: subsup },
    { name: 'underline', spec: underline },
    { name: 'code', spec: code },
    { name: 'typeAheadQuery', spec: typeAheadQuery },
    { name: 'alignment', spec: alignment },
    { name: 'annotation', spec: annotation },
    { name: 'confluenceInlineComment', spec: confluenceInlineComment }
], markGroupDeclarations, [
    { name: 'breakout', spec: breakout },
    { name: 'indentation', spec: indentation },
]);
/**
 * Creates a schema preserving order of marks and nodes.
 */
export function createSchema(config) {
    var customNodeSpecs = config.customNodeSpecs, customMarkSpecs = config.customMarkSpecs;
    var nodesConfig = Object.keys(customNodeSpecs || {}).concat(config.nodes);
    var marksConfig = Object.keys(customMarkSpecs || {})
        .concat(config.marks || [])
        .concat(markGroupDeclarationsNames);
    var nodes = addItems(nodesInOrder, nodesConfig, customNodeSpecs);
    var marks = addItems(marksInOrder, marksConfig, customMarkSpecs);
    nodes = sanitizeNodes(nodes, marks);
    return new Schema({
        nodes: nodes,
        marks: marks,
    });
}
export function sanitizeNodes(nodes, supportedMarks) {
    var nodeNames = Object.keys(nodes);
    nodeNames.forEach(function (nodeKey) {
        var nodeSpec = __assign({}, nodes[nodeKey]);
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