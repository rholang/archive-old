import { createSchema } from './create-schema';
export default function makeSchema(config) {
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
    return createSchema({ nodes: nodes, marks: marks });
}
export function isSchemaWithLists(schema) {
    return !!schema.nodes.bulletList;
}
export function isSchemaWithMentions(schema) {
    return !!schema.nodes.mention;
}
export function isSchemaWithEmojis(schema) {
    return !!schema.nodes.emoji;
}
export function isSchemaWithLinks(schema) {
    return !!schema.marks.link;
}
export function isSchemaWithAdvancedTextFormattingMarks(schema) {
    return !!schema.marks.code && !!schema.marks.strike;
}
export function isSchemaWithSubSupMark(schema) {
    return !!schema.marks.subsup;
}
export function isSchemaWithCodeBlock(schema) {
    return !!schema.nodes.codeBlock;
}
export function isSchemaWithBlockQuotes(schema) {
    return !!schema.nodes.blockquote;
}
export function isSchemaWithMedia(schema) {
    return !!schema.nodes.mediaGroup && !!schema.nodes.media;
}
export function isSchemaWithTextColor(schema) {
    return !!schema.marks.textColor;
}
export function isSchemaWithTables(schema) {
    return (!!schema.nodes.table &&
        !!schema.nodes.tableCell &&
        !!schema.nodes.tableHeader &&
        !!schema.nodes.tableRow);
}
//# sourceMappingURL=jira-schema.js.map