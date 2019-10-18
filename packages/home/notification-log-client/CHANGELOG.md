# @atlaskit/notification-log-service

## 4.0.8

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 4.0.7

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 4.0.6

### Patch Changes

- [patch][bbff8a7d87](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bbff8a7d87):

  Fixes bug, missing version.json file

## 4.0.5

### Patch Changes

- [patch][18dfac7332](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18dfac7332):

  In this PR, we are:

  - Re-introducing dist build folders
  - Adding back cjs
  - Replacing es5 by cjs and es2015 by esm
  - Creating folders at the root for entry-points
  - Removing the generation of the entry-points at the root
    Please see this [ticket](https://product-fabric.atlassian.net/browse/BUILDTOOLS-118) or this [page](https://hello.atlassian.net/wiki/spaces/FED/pages/452325500/Finishing+Atlaskit+multiple+entry+points) for further details

## 4.0.4

- Updated dependencies [7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):
  - @atlaskit/util-service-support@4.0.3
  - @atlaskit/docs@8.0.0
  - @atlaskit/notification-indicator@7.0.0

## 4.0.3

- [patch][0a4ccaafae](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0a4ccaafae):

  - Bump tslib

## 4.0.2

- Updated dependencies [987ab01f30](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/987ab01f30):
  - @atlaskit/notification-indicator@6.0.0

## 4.0.1

- [patch][1bcaa1b991](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1bcaa1b991):

  - Add npmignore for index.ts to prevent some jest tests from resolving that instead of index.js

## 4.0.0

- [major][9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):

  - Dropped ES5 distributables from the typescript packages

## 3.1.2

- Updated dependencies [76299208e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76299208e6):
  - @atlaskit/util-service-support@3.1.1
  - @atlaskit/notification-indicator@4.1.3
  - @atlaskit/docs@7.0.0

## 3.1.1

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/util-service-support@3.0.5
  - @atlaskit/notification-indicator@4.0.6
  - @atlaskit/docs@6.0.0

## 3.1.0

- [minor] use new V2 notification API, add app-version header, add source query param [1583aea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1583aea)

## 3.0.2

- [patch] Updated dependencies [b12f7e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b12f7e6)
  - @atlaskit/notification-indicator@4.0.3

## 3.0.1

- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/notification-indicator@4.0.1
  - @atlaskit/docs@5.0.2
  - @atlaskit/util-service-support@3.0.1

## 3.0.0

- [major] Updated dependencies [563a7eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/563a7eb)
  - @atlaskit/notification-indicator@4.0.0
  - @atlaskit/docs@5.0.0
  - @atlaskit/util-service-support@3.0.0
- [major] Updated dependencies [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
  - @atlaskit/notification-indicator@4.0.0
  - @atlaskit/docs@5.0.0
  - @atlaskit/util-service-support@3.0.0

## 2.0.8

- [patch] Clean Changelogs - remove duplicates and empty entries [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
- [none] Updated dependencies [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
  - @atlaskit/notification-indicator@3.0.5

## 2.0.7

- [patch] Update changelogs to remove duplicate [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
- [none] Updated dependencies [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
  - @atlaskit/notification-indicator@3.0.4
  - @atlaskit/util-service-support@2.0.11
  - @atlaskit/docs@4.1.1

## 2.0.6

- [none] Updated dependencies [9d20f54](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d20f54)
  - @atlaskit/docs@4.1.0
  - @atlaskit/notification-indicator@3.0.3
  - @atlaskit/util-service-support@2.0.10

## 2.0.5

- [patch] Updated dependencies [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
  - @atlaskit/notification-indicator@3.0.2
  - @atlaskit/docs@4.0.0
  - @atlaskit/util-service-support@2.0.8

## 2.0.4

- [patch] Updated dependencies [d662caa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d662caa)
  - @atlaskit/notification-indicator@3.0.1
  - @atlaskit/docs@3.0.4
  - @atlaskit/util-service-support@2.0.7

## 2.0.3

## 2.0.2

- [patch] updated the repository url to https://bitbucket.org/atlassian/atlaskit-mk-2 [1e57e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e57e5a)

## 2.0.1

- [patch] notification-indicator and notification-log-client now compile into es5 compliant code for both es5 and es2015 packages to maintain compatibility with old toolings [1783e37](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1783e37)

## 2.0.0

- [major] Added notification-log-client and notification-indicator into Atlaskit. Please refer to docs and examples for their usages. [ac98216](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ac98216)
