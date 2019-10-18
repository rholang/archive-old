# @atlaskit/feature-flag-client

## 3.1.7

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 3.1.6

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 3.1.5

### Patch Changes

- [patch][bbff8a7d87](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bbff8a7d87):

  Fixes bug, missing version.json file

## 3.1.4

### Patch Changes

- [patch][18dfac7332](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18dfac7332):

  In this PR, we are:

  - Re-introducing dist build folders
  - Adding back cjs
  - Replacing es5 by cjs and es2015 by esm
  - Creating folders at the root for entry-points
  - Removing the generation of the entry-points at the root
    Please see this [ticket](https://product-fabric.atlassian.net/browse/BUILDTOOLS-118) or this [page](https://hello.atlassian.net/wiki/spaces/FED/pages/452325500/Finishing+Atlaskit+multiple+entry+points) for further details

## 3.1.3

### Patch Changes

- [patch][6edcd3bc31](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6edcd3bc31):

  Add the ability to send custom attributes with the exposure event

## 3.1.2

### Patch Changes

- [patch][0ccf9ade40](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0ccf9ade40):

  Use process.env.NODE_ENV to check for node environment, in all files

## 3.1.1

- [patch][2e25dad67e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2e25dad67e):

  - Change process.env check to process.env.NODE_ENV check

## 3.1.0

- [minor][5a49043dac](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5a49043dac):

  - Enable strictPropertyInitialization in tsconfig.base

## 3.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 2.1.2

- [patch][0a4ccaafae](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0a4ccaafae):

  - Bump tslib

## 2.1.1

- [patch][1bcaa1b991](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1bcaa1b991):

  - Add npmignore for index.ts to prevent some jest tests from resolving that instead of index.js

## 2.1.0

- [minor][a89f1bf6cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a89f1bf6cd):

  - Enable noImplicitAny for growth/feature-flag-client

## 2.0.0

- [major][9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):

  - Dropped ES5 distributables from the typescript packages

## 1.1.2

- Updated dependencies [76299208e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76299208e6):
  - @atlaskit/docs@7.0.0

## 1.1.1

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/docs@6.0.0

## 1.1.0

- [minor] Expect "kind" instead of "reason" from products [5930bab](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5930bab)

## 1.0.5

- [patch] MEP-211: Supporting "value" attribute [8c0ddfc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8c0ddfc)

## 1.0.4

- [patch] MEP-103: Allowing simple flags to have strings or booleans as values [4e6f8ab](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4e6f8ab)

## 1.0.3

- [patch] MEP-103 : Support short form of a feature flag for variants [0ac7332](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0ac7332)

## 1.0.2

- [patch] MEP-103: Including flagKey in the attributes [afd42f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/afd42f7)

## 1.0.1

- [patch] MEP-103: Adding missing source to event shape [0e870d8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0e870d8)

## 1.0.0

- [major] Receive analyticsHandler instead of analyticClient [f082105](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f082105)

## 0.1.0

- [minor] Implementing new version of the feature flag client [a7dbdbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a7dbdbb)

## 0.0.4

- [patch] Updated dependencies [6e1d642](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6e1d642)
  - @atlaskit/renderer@22.0.0

## 0.0.3

- [patch] Updated dependencies [7545979](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7545979)
  - @atlaskit/renderer@21.0.0

## 0.0.2

- [patch] Updated dependencies [b12f7e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b12f7e6)
  - @atlaskit/renderer@20.0.11

## 0.0.1

- [patch] Moving feature flag client to atlaskit [c61ba5f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c61ba5f)
