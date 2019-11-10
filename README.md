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
  - yarn depl:netlify
- Deploy to Github (gh-pages)
  cd into /website/ -> yarn depl:gh-pages
  
# Tutorials

## Bolt usage
Bolt is like yarn workspaces and links the dependencies into each package under node_modules.


## Folder structure

## Errors solutions



# Contributing

This community driven project should be bring all the awesome ressources for Rholang and Rchain together. Feel free to make a push request

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
