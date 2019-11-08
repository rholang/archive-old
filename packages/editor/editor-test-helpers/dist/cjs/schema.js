"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
exports.Node = prosemirror_model_1.Node;
exports.Schema = prosemirror_model_1.Schema;
var adf_schema_1 = require("@atlaskit/adf-schema");
exports.default = adf_schema_1.createSchema({
    nodes: [
        'doc',
        'paragraph',
        'text',
        'bulletList',
        'orderedList',
        'listItem',
        'heading',
        'blockquote',
        'codeBlock',
        'panel',
        'rule',
        'hardBreak',
        'mention',
        'emoji',
        'image',
        'media',
        'mediaGroup',
        'confluenceUnsupportedBlock',
        'confluenceUnsupportedInline',
        'confluenceJiraIssue',
        'mediaSingle',
        'plain',
        'table',
        'tableCell',
        'tableHeader',
        'tableRow',
        'decisionList',
        'decisionItem',
        'taskList',
        'taskItem',
        'extension',
        'inlineExtension',
        'bodiedExtension',
        'date',
        'status',
        'placeholder',
        'layoutSection',
        'layoutColumn',
        'inlineCard',
        'blockCard',
        'unsupportedBlock',
        'unsupportedInline',
    ],
    marks: [
        'em',
        'strong',
        'code',
        'strike',
        'underline',
        'link',
        'subsup',
        'typeAheadQuery',
        'textColor',
        'confluenceInlineComment',
        'breakout',
        'alignment',
        'indentation',
        'annotation',
    ],
    customNodeSpecs: {
        plain: tslib_1.__assign(tslib_1.__assign({}, adf_schema_1.paragraph), { content: 'text*', marks: '' }),
    },
});
//# sourceMappingURL=schema.js.map