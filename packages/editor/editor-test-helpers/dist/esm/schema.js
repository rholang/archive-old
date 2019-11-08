import { __assign } from "tslib";
import { Node, Schema, } from 'prosemirror-model';
import { paragraph, createSchema } from '@atlaskit/adf-schema';
export { Node, Schema };
export default createSchema({
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
        plain: __assign(__assign({}, paragraph), { content: 'text*', marks: '' }),
    },
});
//# sourceMappingURL=schema.js.map