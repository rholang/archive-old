import { createSchema } from './create-schema';
export var defaultSchema = createSchema({
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
        'image',
        'mention',
        'media',
        'mediaGroup',
        'mediaSingle',
        'confluenceUnsupportedBlock',
        'confluenceUnsupportedInline',
        'confluenceJiraIssue',
        'extension',
        'inlineExtension',
        'bodiedExtension',
        'hardBreak',
        'emoji',
        'table',
        'tableCell',
        'tableHeader',
        'tableRow',
        'decisionList',
        'decisionItem',
        'taskList',
        'taskItem',
        'unknownBlock',
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
        'link',
        'em',
        'strong',
        'strike',
        'subsup',
        'underline',
        'code',
        'textColor',
        'confluenceInlineComment',
        'breakout',
        'alignment',
        'indentation',
        'annotation',
    ],
});
//# sourceMappingURL=default-schema.js.map