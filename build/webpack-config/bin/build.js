#!/usr/bin/env node

// @flow

const minimatch = require('minimatch');

const bolt = require('bolt');
const webpack = require('webpack');
const createConfig = require('../config');
const { print, buildBanner } = require('../banner');
const utils = require('../config/utils');

async function runBuild() {
  const mode = 'production';

  const workspaceGlobs = process.argv
    .slice(2)
    .filter(arg => !arg.startsWith('--')) // in case we ever pass other flags to this script
    .map(arg => arg.replace(/["']/g, '')); // remove all quotes (users add them to prevent early glob expansion)
  const report = !!process.argv.find(arg => arg.startsWith('--report'));

  const websiteEnv = 'local';
  const projectRoot = (await bolt.getProject({ cwd: process.cwd() })).dir;
  const workspaces = await bolt.getWorkspaces();

  const filteredWorkspaces = workspaceGlobs.length
    ? workspaces.filter(ws =>
        workspaceGlobs.some(glob =>
          minimatch(ws.dir, glob, { matchBase: true }),
        ),
      )
    : workspaces; // if no globs were passed, we'll use all workspaces.

  let globs =
    workspaceGlobs.length > 0
      ? utils.createWorkspacesGlob(filteredWorkspaces, projectRoot)
      : utils.createDefaultGlob();

  /* At the moment, the website and webpack folders do not build a package and it is not possible to test it.
** The current workaround, we build another package that builds the homepage and indirectly test the website.
** We picked the package polyfills:
 - the package is internal.
 - no integration tests will be added.
 - changes to the package will not impact the build system.
*/
  if (['website', 'webpack'].indexOf(globs) === -1) {
    globs = globs.map(glob =>
      glob
        .replace('website', 'packages/core/polyfills')
        .replace('build/webpack-config', 'packages/core/polyfills')
        // Remap packages without examples to a package they indend to leverage within their tests
        .replace(
          'packages/editor/editor-common',
          'packages/editor/editor-core',
        ),
    );
  }

  if (!globs.length) {
    console.info(
      `${workspaceGlobs.toString()}: Nothing to run or pattern does not match!`,
    );
    process.exit(0);
  }

  //
  // Creating webpack instance
  //

  const config = await createConfig({
    globs,
    mode,
    websiteEnv,
    report,
  });

  const compiler = webpack(config);

  //
  // Running Webpack Compiler
  //

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) console.error(err.details);
        reject(1); // eslint-disable-line
      }

      const statsString = stats.toString('minimal');
      if (statsString) console.log(statsString + '\n');
      if (stats.hasErrors()) reject(2);

      resolve();
    });
  });
}

runBuild().catch(errCode => {
  process.exit(errCode);
});
