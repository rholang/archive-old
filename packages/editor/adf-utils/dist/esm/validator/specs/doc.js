export default {
    props: {
        version: { type: 'enum', values: [1] },
        type: { type: 'enum', values: ['doc'] },
        content: {
            type: 'array',
            items: [
                [
                    'paragraph_with_no_marks',
                    'paragraph_with_alignment',
                    'paragraph_with_indentation',
                    'bulletList',
                    'mediaSingle',
                    'codeBlock_with_no_marks',
                    'codeBlock_with_marks',
                    'orderedList',
                    'heading_with_no_marks',
                    'heading_with_alignment',
                    'heading_with_indentation',
                    'panel',
                    'blockquote',
                    'rule',
                    'mediaGroup',
                    'decisionList',
                    'taskList',
                    'nestableTaskList',
                    'table',
                    'extension',
                    'bodiedExtension',
                    'blockCard',
                    'layoutSection',
                ],
            ],
            allowUnsupportedBlock: true,
        },
    },
};
//# sourceMappingURL=doc.js.map