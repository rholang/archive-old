"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_schema_1 = require("./create-schema");
exports.bitbucketSchema = create_schema_1.createSchema({
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