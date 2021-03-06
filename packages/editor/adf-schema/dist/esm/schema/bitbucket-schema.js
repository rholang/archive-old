import { createSchema } from './create-schema';
export var bitbucketSchema = createSchema({
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
        'hardBreak',
        'rule',
        'image',
        'media',
        'mediaSingle',
        'mention',
        'emoji',
        'table',
        'tableCell',
        'tableHeader',
        'tableRow',
    ],
    marks: ['em', 'strong', 'strike', 'link', 'code'],
});
//# sourceMappingURL=bitbucket-schema.js.map