# Rholang
This is the repository of the website [https://rholang.github.io/](https://rholang.github.io/). 

# Pre-requisites
- Linux OS (due to some linux specific commands)
- install globally
  - yarn
  - bolt
    - yarn config set prefix ~/.yarn
    - yarn global add bolt
    - open file /home/<name>/.bashrc -> insert into: export PATH="$PATH:` yarn global bin`"
    - restart pc -> bolt is globally available

# Quick install
- fork this repository and open with vscode (cd into /rholang.github.io/)
- terminal: bolt
  - executes yarn automatically and links project dependencies (uses yarn like workspaces)
- yarn start:home
  - website is locally available


# Deploy
- Deploy to Netlify
  - change .env.example to .env -> set credentials
  - yarn depl
- Deploy to Github (gh-pages)
  - your github repository needs to branches: source and master
  - cd into /website/ -> yarn depl:gh-pages
  
# Tutorials
If you want to be more advanced and contribute to this project, than the following details are helpfull.

## Bolt usage
Bolt is like yarn workspaces and links the dependencies into each package under node_modules.

### Add npm package
- if you want e.g. a npm package to install under /website/ 
  - cd into /website/
  - bolt add -D webpack 
    - install webpack package under devDependencies

### Upgrade all npm packages from whole workspace to specific version
- bolt ws upgrade webpack@4.41.2

### Remove all npm packages from whole workspace
- bolt ws remove webpack


## Folder structure
- /build/webpack-config/config/index.js
  - file for configure webpack (file-loaders ...)
  
- /content
   - all markdown files belong here

- /website
  - landing page and whole website from rholang is here

## Rebuild all packages
- Normally most needed packages have a prebuild /dist folder
- If you want to manually rebuild them:
  - terminal: yarn build

## Errors solutions

Error: $ babel src -d dist/cjs --root-mode upward { TypeError: /home/t/bak2/atlaskit-mk-2/packages/core/navigation-next/src/components/connected/SortableGroup/index.js: Property expression of JSXExpressionContainer expected node to be of a type ["Expression","JSXEmptyExpression"] 

Solution: remove yarn.lock and replace it with that from this repository

Error: White page after yarn start:home

Solution: remove .cache-loader folder from /node_modules or look in chrome dev tools console

# Contributing

This community driven project should bring all the awesome resources for Rholang and Rchain together. Feel free to make a push request.

# License

This is a [mono-repo][monorepo], which means that different parts of this repository can have different licenses.

The base level of the repository is licensed under [Apache 2.0][license]. There are separate license files (`LICENSE`) for each component under `/packages` that specify the license restrictions for each component. While most components are licensed under the Apache 2.0 license, please note packages containing styles, assets & icons are most likely licensed under the [Atlassian Design Guidelines license][adg_license].

If you fork this repository you can continue to use those Atlassian Design Guidelines licensed components only under the given license restrictions. If you want to redistribute this repository, you will need to replace these Atlassian Design Guidelines licensed components with your own implementation.

Copyright (c) 2018 Atlassian and others.

[adg]: http://atlassian.design/ 'Atlassian Design Guidelines'
[adg_license]: https://atlassian.design/guidelines/handy/license
[contributing_repo]: ./CONTRIBUTING.md
[contributing_site]: https://atlaskit.atlassian.com/docs/guides/contributing
[license]: ./LICENSE
[atlaskitregistry]: https://atlaskit.atlassian.com/ 'Atlaskit Registry'
[codeofconduct]: ./CODE_OF_CONDUCT.md
[monorepo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
