export const invalidAdf = {
  version: 1,
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Hello text',
        },
      ],
    },
    {
      type: 'broken',
      attrs: {},
    },
  ],
};
