/* @flow */

/*::
import type { Directory, File } from './types';
*/
const nodePath = require('path');

function pad(str /*: string */, depth /*: number */) {
  return str.padStart(str.length + depth * 2);
}

function getSafeRaw(file) {
  let raw = `function(){ return import(/* webpackChunkName: "${
    file.uid
  } (raw)" */'!!raw-loader!${file.path}'); }`;
  if (['.json'].includes(nodePath.extname(file.path))) {
    raw = `function(){ return Promise.reject({
        error: "We cannot parse raw json at the moment due to weback4 trying to parse json after it has gone through the raw loader. Please use the non-raw version of of JSON files"
      }) }`;
  }
  return raw;
}

function printFile(file /*: File */, depth /*: number */) {
  return pad(
    `file('${file.id}',
    function(){ return import(/* webpackChunkName: "${file.uid}" */ '${
      file.path
    }'); }, ${getSafeRaw(file)}
  )`,
    depth,
  );
}

function printDir(dir /*: Directory */, depth /*: number */ = 0) {
  return [
    pad(`dir('${dir.id}', [`, depth),
    dir.children
      .map(child =>
        child.type === 'dir'
          ? printDir(child, depth + 1)
          : printFile(child, depth + 1),
      )
      .join(',\n'),
    pad(`])`, depth),
  ].join('\n');
}

function getSitemapFile(file /*: File */, depth /*: number */) {
  return file.uid;
}

function getSitemap(dir /*: Directory */, depth /*: number */ = 0) {
  let uriList = dir.children
    .map(child =>
      child.type === 'dir'
        ? getSitemap(child, depth + 1)
        : getSitemapFile(child, depth + 1),
    )
    .join(',')
    .split(',');

  let matchList = uriList.map(text =>
    text.replace(
      /^.*(content)([^\d]*)[\d|\-]*([^\d]*)[\d|\-]*([^\d]*)\..*/,
      (matchedString, first, second, third, fourth) => {
        return first + second + third + fourth;
      },
    ),
  );

  let filteredList = matchList.filter(x => x.match(/.*content.*/g));

  return filteredList;
}

module.exports = { printDir, getSitemap, printFile, pad };
