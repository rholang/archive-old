import { Directory } from './types';

// SITE_DATA is dynamically generated at runtime by bolt-fs-loader.
// Configuration for bolt-fs-loader is in webpack.config.js since it needs to be dynamically created
// depending on the subset of packages we want to represent on the website.
// @ts-ignore: Those data are populated at run-time and it is not possible to declare those file in typescript.
import data from './SITE_DATA_SITEMAP';
// @ts-ignore: Those data are populated at run-time and it is not possible to declare those file in typescript.
import * as fs from './utils/fs';



const dirs = fs.getDirectories(data.children);
console.log(dirs)

const publicPackages: Directory = {
  type: 'dir',
  id: 'packages',
  children: [],
};


export const docs: Directory = fs.getById(dirs, 'docs');
export const packages: Directory = fs.getById(dirs, 'packages');
export const externalPackages: Directory = publicPackages;
export const patterns: Directory = fs.maybeGetById(dirs, 'patterns') || {
  type: 'dir',
  id: 'patterns',
  children: [],
};
