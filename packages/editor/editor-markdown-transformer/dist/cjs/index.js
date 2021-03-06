"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adf_schema_1 = require("@atlaskit/adf-schema");
var markdown_it_1 = tslib_1.__importDefault(require("markdown-it"));
var markdown_it_table_1 = require("markdown-it-table");
var prosemirror_markdown_1 = require("prosemirror-markdown");
var media_1 = require("./media");
function filterMdToPmSchemaMapping(schema, map) {
    return Object.keys(map).reduce(function (newMap, key) {
        var value = map[key];
        var block = value.block || value.node;
        var mark = value.mark;
        if ((block && schema.nodes[block]) || (mark && schema.marks[mark])) {
            newMap[key] = value;
        }
        return newMap;
    }, {});
}
var pmSchemaToMdMapping = {
    nodes: {
        blockquote: 'blockquote',
        paragraph: 'paragraph',
        rule: 'hr',
        // lheading (---, ===)
        heading: ['heading', 'lheading'],
        codeBlock: ['code', 'fence'],
        listItem: 'list',
        image: 'image',
    },
    marks: {
        em: 'emphasis',
        strong: 'text',
        link: ['link', 'autolink', 'reference', 'linkify'],
        strike: 'strikethrough',
        code: 'backticks',
    },
};
var mdToPmMapping = {
    blockquote: { block: 'blockquote' },
    paragraph: { block: 'paragraph' },
    em: { mark: 'em' },
    strong: { mark: 'strong' },
    link: {
        mark: 'link',
        attrs: function (tok) { return ({
            href: tok.attrGet('href'),
            title: tok.attrGet('title') || null,
        }); },
    },
    hr: { node: 'rule' },
    heading: {
        block: 'heading',
        attrs: function (tok) { return ({ level: +tok.tag.slice(1) }); },
    },
    softbreak: { node: 'hardBreak' },
    hardbreak: { node: 'hardBreak' },
    code_block: { block: 'codeBlock' },
    list_item: { block: 'listItem' },
    bullet_list: { block: 'bulletList' },
    ordered_list: {
        block: 'orderedList',
        attrs: function (tok) { return ({ order: +tok.attrGet('order') || 1 }); },
    },
    code_inline: { mark: 'code' },
    fence: {
        block: 'codeBlock',
        // we trim any whitespaces around language definition
        attrs: function (tok) { return ({ language: (tok.info && tok.info.trim()) || null }); },
    },
    media_single: {
        block: 'mediaSingle',
        attrs: function () { return ({}); },
    },
    media: {
        node: 'media',
        attrs: function (tok) {
            return {
                url: tok.attrGet('url'),
                type: 'external',
            };
        },
    },
    emoji: {
        node: 'emoji',
        attrs: function (tok) { return ({
            shortName: ":" + tok.markup + ":",
            text: tok.content,
        }); },
    },
    table: { block: 'table' },
    tr: { block: 'tableRow' },
    th: { block: 'tableHeader' },
    td: { block: 'tableCell' },
    s: { mark: 'strike' },
};
var md = markdown_it_1.default('zero', {
    html: false,
    linkify: true,
});
md.enable([
    // Process html entity - &#123;, &#xAF;, &quot;, ...
    'entity',
    // Process escaped chars and hardbreaks
    'escape',
]);
var MarkdownTransformer = /** @class */ (function () {
    function MarkdownTransformer(schema, tokenizer) {
        if (schema === void 0) { schema = adf_schema_1.defaultSchema; }
        if (tokenizer === void 0) { tokenizer = md; }
        // Enable markdown plugins based on schema
        ['nodes', 'marks'].forEach(function (key) {
            for (var idx in pmSchemaToMdMapping[key]) {
                if (schema[key][idx]) {
                    tokenizer.enable(pmSchemaToMdMapping[key][idx]);
                }
            }
        });
        if (schema.nodes.table) {
            tokenizer.use(markdown_it_table_1.markdownItTable);
        }
        if (schema.nodes.media && schema.nodes.mediaSingle) {
            tokenizer.use(media_1.markdownItMedia);
        }
        this.markdownParser = new prosemirror_markdown_1.MarkdownParser(schema, tokenizer, filterMdToPmSchemaMapping(schema, mdToPmMapping));
    }
    MarkdownTransformer.prototype.encode = function (_node) {
        throw new Error('This is not implemented yet');
    };
    MarkdownTransformer.prototype.parse = function (content) {
        return this.markdownParser.parse(content);
    };
    return MarkdownTransformer;
}());
exports.MarkdownTransformer = MarkdownTransformer;
//# sourceMappingURL=index.js.map