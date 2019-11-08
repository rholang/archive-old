"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_schema_1 = require("./create-schema");
function makeSchema(config) {
    var nodes = ['doc', 'paragraph', 'text', 'hardBreak', 'heading', 'rule'];
    var marks = ['strong', 'em', 'underline', 'typeAheadQuery'];
    if (config.allowLinks) {
        marks.push('link');
    }
    if (config.allowLists) {
        nodes.push('orderedList', 'bulletList', 'listItem');
    }
    if (config.allowMentions) {
        nodes.push('mention');
        marks.push('mentionQuery');
    }
    if (config.allowEmojis) {
        nodes.push('emoji');
    }
    if (config.allowAdvancedTextFormatting) {
        marks.push('strike', 'code');
    }
    if (config.allowSubSup) {
        marks.push('subsup');
    }
    if (config.allowCodeBlock) {
        nodes.push('codeBlock');
    }
    if (config.allowBlockQuote) {
        nodes.push('blockquote');
    }
    if (config.allowMedia) {
        nodes.push('mediaGroup', 'mediaSingle', 'media');
    }
    if (config.allowTextColor) {
        marks.push('textColor');
    }
    if (config.allowTables) {
        nodes.push('table', 'tableCell', 'tableHeader', 'tableRow');
    }
    return create_schema_1.createSchema({ nodes: nodes, marks: marks });
}
exports.default = makeSchema;
function isSchemaWithLists(schema) {
    return !!schema.nodes.bulletList;
}
exports.isSchemaWithLists = isSchemaWithLists;
function isSchemaWithMentions(schema) {
    return !!schema.nodes.mention;
}
exports.isSchemaWithMentions = isSchemaWithMentions;
function isSchemaWithEmojis(schema) {
    return !!schema.nodes.emoji;
}
exports.isSchemaWithEmojis = isSchemaWithEmojis;
function isSchemaWithLinks(schema) {
    return !!schema.marks.link;
}
exports.isSchemaWithLinks = isSchemaWithLinks;
function isSchemaWithAdvancedTextFormattingMarks(schema) {
    return !!schema.marks.code && !!schema.marks.strike;
}
exports.isSchemaWithAdvancedTextFormattingMarks = isSchemaWithAdvancedTextFormattingMarks;
function isSchemaWithSubSupMark(schema) {
    return !!schema.marks.subsup;
}
exports.isSchemaWithSubSupMark = isSchemaWithSubSupMark;
function isSchemaWithCodeBlock(schema) {
    return !!schema.nodes.codeBlock;
}
exports.isSchemaWithCodeBlock = isSchemaWithCodeBlock;
function isSchemaWithBlockQuotes(schema) {
    return !!schema.nodes.blockquote;
}
exports.isSchemaWithBlockQuotes = isSchemaWithBlockQuotes;
function isSchemaWithMedia(schema) {
    return !!schema.nodes.mediaGroup && !!schema.nodes.media;
}
exports.isSchemaWithMedia = isSchemaWithMedia;
function isSchemaWithTextColor(schema) {
    return !!schema.marks.textColor;
}
exports.isSchemaWithTextColor = isSchemaWithTextColor;
function isSchemaWithTables(schema) {
    return (!!schema.nodes.table &&
        !!schema.nodes.tableCell &&
        !!schema.nodes.tableHeader &&
        !!schema.nodes.tableRow);
}
exports.isSchemaWithTables = isSchemaWithTables;
//# sourceMappingURL=jira-schema.js.map