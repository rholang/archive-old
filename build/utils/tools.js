const bolt = require('bolt');
const path = require('path');
const { exists } = require('./fs');

async function getPackagesInfo(cwd, opts) {
  let project = await bolt.getProject({ cwd });
  let packages = await bolt.getWorkspaces({ cwd, ...opts });

  return await Promise.all(packages.map(pkg => getPackageInfo(pkg, project)));
}

async function getPackageInfo(pkg, project) {
  let resolvedProject = project || (await bolt.getProject({ cwd }));
  let relativeDir = path.relative(resolvedProject.dir, pkg.dir);
  let srcExists = await exists(path.join(pkg.dir, 'src'));
  let tsConfigExists = await exists(path.join(pkg.dir, 'tsconfig.json'));
  let tsConfigCliExists = await exists(
    path.join(pkg.dir, 'build', 'cli', 'tsconfig.json'),
  );
  let testBrowserExists = await exists(path.join(pkg.dir, '__tests-karma__'));
  let testWebdriverExists = await exists(
    path.join(pkg.dir, 'src', '__tests__', 'integration'),
  );
  let testVisualRegressionExists = await exists(
    path.join(pkg.dir, 'src', '__tests__', 'visual-regression'),
  );

  let isBrowserPackage = !relativeDir.startsWith('build');
  let isWebsitePackage = relativeDir.startsWith('website');

  let allDependencies = Object.assign(
    {},
    pkg.config.dependencies,
    pkg.config.devDependencies,
    pkg.config.peerDependencies,
  );

  let hasKarmaDep = !!allDependencies.karma;

  let isTypeScriptCLI = tsConfigCliExists;
  let isTypeScript = tsConfigExists && !isWebsitePackage; // The website does not need to be built

  let isBabel = srcExists && !isTypeScript && !isWebsitePackage;
  let isFlow = isBabel || isWebsitePackage;
  let isESLint = srcExists || isWebsitePackage || !isBrowserPackage;

  let isKarma = testBrowserExists || hasKarmaDep;
  let isBrowserStack = isKarma;
  let isStylelint = srcExists && isBrowserPackage;
  let isWebdriver = testWebdriverExists;
  let isVisualRegression = testVisualRegressionExists;

  return {
    dir: pkg.dir,
    name: pkg.name,
    config: pkg.config,
    relativeDir,
    isTypeScript,
    isTypeScriptCLI,
    isBabel,
    isFlow,
    isESLint,
    isKarma,
    isBrowserStack,
    isStylelint,
    isWebdriver,
    isVisualRegression,
    isBrowserPackage,
  };
}

const TOOL_NAME_TO_FILTERS /*: { [key: string]: (pkg: Object) => boolean } */ = {
  typescript: pkg => pkg.isTypeScript,
  typescriptcli: pkg => pkg.isTypeScriptCLI,
  babel: pkg => pkg.isBabel,
  flow: pkg => pkg.isFlow,
  eslint: pkg => pkg.isESLint,
  karma: pkg => pkg.isKarma,
  browserstack: pkg => pkg.isBrowserStack,
  stylelint: pkg => pkg.isStylelint,
  webdriver: pkg => pkg.isWebdriver,
  vr: pkg => pkg.isVisualRegression,
};

async function getPackageDirsForTools(cwd) {
  let packages = await getPackagesInfo(cwd);
  let toolGroups = {};

  Object.keys(TOOL_NAME_TO_FILTERS).map(toolName => {
    toolGroups[toolName] = packages
      .filter(TOOL_NAME_TO_FILTERS[toolName])
      .map(pkg => pkg.relativeDir);
  });

  return toolGroups;
}

module.exports = {
  getPackageInfo,
  getPackagesInfo,
  getPackageDirsForTools,
  TOOL_NAME_TO_FILTERS,
};
