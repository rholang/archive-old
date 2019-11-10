# Rholang
This is the repository of the website [https://rholang.github.io/](https://rholang.github.io/). 

# Pre-requisites
- Linux OS (due to some linux specific commands)
- install globally
  - yarn
  - bolt
    - yarn config set prefix ~/.yarn

# Contributing

Contribution is currently **only** available for Atlassian employees.

We’re temporarily unable to grant contributor access to external developers.

For **Atlassians**, if you want to make a request, suggest an improvement or raise a bug about Atlaskit, [read the contribution guide on our website][contributing_site] to get started, and our [CONTRIBUTING.md][contributing_repo] for more details.



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
