// @flow
const prettier = require('prettier');

module.exports = (
  icons /*: { fileKey: string, displayName: string }[]*/,
  packageName /*: string */,
  synonyms /*: { [string]: string[] } */ = {},
  universalSynonyms /*: string[] */ = [],
) =>
  prettier.format(
    `
/* eslint-disable global-require */
/**
 * NOTE:
 *
 * This file is automatically generated by the build process.
 * DO NOT CHANGE IT BY HAND or your changes will be lost.
 *
 * To change the format of this file, modify build/icon/createIconDocs.js.
 * Add synonyms in icon/icons/synonyms.js.
 */

interface Data {
  keywords: string[];
  componentName: string;
  package: string;
}

const metaData: Record<string, Data> = {
  ${icons
    .map(({ fileKey, displayName }) => {
      const componentName = displayName.toLowerCase().replace(/icon$/, '');
      const packageNames =
        fileKey !== componentName ? [fileKey, componentName] : [fileKey];
      const packageSynonyms = synonyms[fileKey] || [];
      const keywords = [
        ...packageNames,
        ...packageSynonyms,
        ...universalSynonyms,
      ].map(keyword => `'${keyword}'`);
      return `
      '${fileKey}': {
        keywords: [${keywords.join(', ')}],
        componentName: '${displayName}',
        package: '${packageName}/glyph/${fileKey}',
      },`;
    })
    .join('')}
}

export default metaData;
`,
    {
      printWidth: 200,
      singleQuote: true,
      trailingComma: 'es5',
    },
  );