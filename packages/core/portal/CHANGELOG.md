# @atlaskit/portal

## 3.1.2

### Patch Changes

- [patch][adc048de7e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/adc048de7e):

  Fixing ie11 bug caused by using Event constructor

## 3.1.1

**Warning: Do not use this version. It has been deprecated**

It is broken for ie11 if you are not polyfilling the `new Event` constructor

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 3.1.0

**Warning: Do not use this version. It has been deprecated**

It is broken for ie11 if you are not polyfilling the `new Event` constructor

### Minor Changes

- [minor][bf8796cffa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bf8796cffa):

  Add mount and unmount events to @atlaskit/portal

## 3.0.13

- Updated dependencies [a75dfaad67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a75dfaad67):
  - @atlaskit/onboarding@9.0.0

## 3.0.12

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 3.0.11

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 3.0.10

### Patch Changes

- [patch][de35ce8c67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/de35ce8c67):

  Updates component maintainers

## 3.0.9

### Patch Changes

- [patch][bbff8a7d87](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bbff8a7d87):

  Fixes bug, missing version.json file

## 3.0.8

### Patch Changes

- [patch][18dfac7332](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18dfac7332):

  In this PR, we are:

  - Re-introducing dist build folders
  - Adding back cjs
  - Replacing es5 by cjs and es2015 by esm
  - Creating folders at the root for entry-points
  - Removing the generation of the entry-points at the root
    Please see this [ticket](https://product-fabric.atlassian.net/browse/BUILDTOOLS-118) or this [page](https://hello.atlassian.net/wiki/spaces/FED/pages/452325500/Finishing+Atlaskit+multiple+entry+points) for further details

## 3.0.7

- Updated dependencies [06326ef3f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06326ef3f7):
  - @atlaskit/docs@8.1.3
  - @atlaskit/button@13.0.9
  - @atlaskit/flag@12.0.10
  - @atlaskit/inline-dialog@12.0.3
  - @atlaskit/modal-dialog@10.0.7
  - @atlaskit/onboarding@8.0.6
  - @atlaskit/tooltip@15.0.2
  - @atlaskit/icon@19.0.0

## 3.0.6

### Patch Changes

- [patch][4615439434](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4615439434):

  index.ts will now be ignored when publishing to npm

## 3.0.5

### Patch Changes

- [patch][93bcf314c6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/93bcf314c6):

  Added missing tslib dep

## 3.0.4

- Updated dependencies [67f06f58dd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/67f06f58dd):
  - @atlaskit/icon@18.0.1
  - @atlaskit/tooltip@15.0.0

## 3.0.3

- Updated dependencies [cfc3c8adb3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cfc3c8adb3):
  - @atlaskit/docs@8.1.2
  - @atlaskit/button@13.0.8
  - @atlaskit/flag@12.0.4
  - @atlaskit/inline-dialog@12.0.1
  - @atlaskit/modal-dialog@10.0.4
  - @atlaskit/onboarding@8.0.4
  - @atlaskit/tooltip@14.0.3
  - @atlaskit/icon@18.0.0

## 3.0.2

- Updated dependencies [181209d135](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/181209d135):
  - @atlaskit/modal-dialog@10.0.3
  - @atlaskit/inline-dialog@12.0.0

## 3.0.1

- [patch][b0ef06c685](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b0ef06c685):

  - This is just a safety release in case anything strange happened in in the previous one. See Pull Request #5942 for details

## 3.0.0

- [major][dacfb81ca1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dacfb81ca1):

  - @atlaskit/portal has been converted to Typescript. Typescript consumers will now get static type safety. Flow types are no longer provided. No API or behavioural changes.

- Updated dependencies [06c5cccf9d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06c5cccf9d):
  - @atlaskit/icon@17.1.2
  - @atlaskit/onboarding@8.0.2
  - @atlaskit/modal-dialog@10.0.0

## 2.0.1

- Updated dependencies [238b65171f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/238b65171f):
  - @atlaskit/flag@12.0.0

## 2.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 1.0.0

- [major][5b6b4d6a0f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5b6b4d6a0f):

  - This major release indicates that this package is no longer under dev preview but is ready for use

## 0.3.1

- Updated dependencies [1e826b2966](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e826b2966):
  - @atlaskit/docs@7.0.2
  - @atlaskit/flag@10.0.5
  - @atlaskit/icon@16.0.8
  - @atlaskit/inline-dialog@10.0.3
  - @atlaskit/modal-dialog@8.0.6
  - @atlaskit/onboarding@7.0.3
  - @atlaskit/tooltip@13.0.3
  - @atlaskit/button@12.0.0

## 0.3.0

- [minor][ce4e1b4780](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ce4e1b4780):

  - zIndex prop now accepts string and number values. Portal consumers can now use css values like "unset" if needed.

## 0.2.2

- [patch][98e11001ff](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/98e11001ff):

  - Removes duplicate babel-runtime dependency

## 0.2.1

- Updated dependencies [9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):
  - @atlaskit/docs@7.0.1
  - @atlaskit/flag@10.0.1
  - @atlaskit/icon@16.0.5
  - @atlaskit/inline-dialog@10.0.1
  - @atlaskit/modal-dialog@8.0.2
  - @atlaskit/onboarding@7.0.1
  - @atlaskit/tooltip@13.0.1
  - @atlaskit/button@11.0.0

## 0.2.0

- [minor][76299208e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76299208e6):

  - Drop ES5 from all the flow modules

  ### Dropping CJS support in all @atlaskit packages

  As a breaking change, all @atlaskit packages will be dropping cjs distributions and will only distribute esm. This means all distributed code will be transpiled, but will still contain `import` and
  `export` declarations.

  The major reason for doing this is to allow us to support multiple entry points in packages, e.g:

  ```js
  import colors from `@atlaskit/theme/colors`;
  ```

  Previously this was sort of possible for consumers by doing something like:

  ```js
  import colors from `@atlaskit/theme/dist/esm/colors`;
  ```

  This has a couple of issues. 1, it treats the file system as API making internal refactors harder, we have to worry about how consumers might be using things that aren't _actually_ supposed to be used. 2. We are unable to do this _internally_ in @atlaskit packages. This leads to lots of packages bundling all of theme, just to use a single color, especially in situations where tree shaking fails.

  To support being able to use multiple entrypoints internally, we unfortunately cannot have multiple distributions as they would need to have very different imports from of their own internal dependencies.

  ES Modules are widely supported by all modern bundlers and can be worked around in node environments.

  We may choose to revisit this solution in the future if we find any unintended condequences, but we see this as a pretty sane path forward which should lead to some major bundle size decreases, saner API's and simpler package architecture.

  Please reach out to #fabric-build (if in Atlassian) or create an issue in [Design System Support](https://ecosystem.atlassian.net/secure/CreateIssue.jspa?pid=24670) (for external) if you have any questions or queries about this.

## 0.1.0

- [minor][27cacd44ab](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/27cacd44ab):

  - Components inside Portal render after portal container element is attached to the DOM

## 0.0.18

- Updated dependencies [d7ef59d432](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d7ef59d432):
  - @atlaskit/docs@6.0.1
  - @atlaskit/button@10.1.2
  - @atlaskit/flag@9.1.9
  - @atlaskit/inline-dialog@9.0.14
  - @atlaskit/modal-dialog@7.2.1
  - @atlaskit/onboarding@6.1.16
  - @atlaskit/tooltip@12.1.15
  - @atlaskit/icon@16.0.0

## 0.0.17

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/button@10.1.1
  - @atlaskit/flag@9.1.8
  - @atlaskit/icon@15.0.2
  - @atlaskit/inline-dialog@9.0.13
  - @atlaskit/modal-dialog@7.1.1
  - @atlaskit/onboarding@6.1.14
  - @atlaskit/tooltip@12.1.13
  - @atlaskit/docs@6.0.0

## 0.0.16

- Updated dependencies [ab9b69c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ab9b69c):
  - @atlaskit/docs@5.2.2
  - @atlaskit/button@10.0.1
  - @atlaskit/flag@9.1.6
  - @atlaskit/inline-dialog@9.0.11
  - @atlaskit/modal-dialog@7.0.13
  - @atlaskit/onboarding@6.1.11
  - @atlaskit/tooltip@12.1.11
  - @atlaskit/icon@15.0.0

## 0.0.15

- Updated dependencies [6998f11](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6998f11):
  - @atlaskit/docs@5.2.1
  - @atlaskit/flag@9.1.5
  - @atlaskit/icon@14.6.1
  - @atlaskit/inline-dialog@9.0.10
  - @atlaskit/modal-dialog@7.0.12
  - @atlaskit/onboarding@6.1.10
  - @atlaskit/tooltip@12.1.10
  - @atlaskit/button@10.0.0

## 0.0.14

- [patch][1fb2c2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1fb2c2a):

  - Fixed issue where tooltips and modals would initially render in the wrong location

## 0.0.13

- [patch][3f5a4dd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3f5a4dd):

  - Replaces our own check for dom in ssr with exenv package

## 0.0.12

- [patch] fixes problem with the DOM container for portal not creating a new stacking context [aaab348](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aaab348)

## 0.0.11

- [patch] Adds missing implicit @babel/runtime dependency [b71751b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b71751b)

## 0.0.10

- [patch] Updated dependencies [65c6514](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/65c6514)
  - @atlaskit/docs@5.0.8
  - @atlaskit/button@9.0.13
  - @atlaskit/flag@9.0.11
  - @atlaskit/inline-dialog@9.0.6
  - @atlaskit/modal-dialog@7.0.2
  - @atlaskit/onboarding@6.0.2
  - @atlaskit/tooltip@12.1.1
  - @atlaskit/icon@14.0.0

## 0.0.9

- [patch] Updated dependencies [d5a043a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d5a043a)
  - @atlaskit/icon@13.8.1
  - @atlaskit/onboarding@6.0.1
  - @atlaskit/flag@9.0.10
  - @atlaskit/tooltip@12.0.14
  - @atlaskit/modal-dialog@7.0.0

## 0.0.8

- [patch] Updated dependencies [d9d2f0d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d9d2f0d)
- [none] Updated dependencies [89be4f1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/89be4f1)
  - @atlaskit/flag@9.0.9
  - @atlaskit/tooltip@12.0.13
  - @atlaskit/onboarding@6.0.0

## 0.0.7

- [patch] Adds sideEffects: false to allow proper tree shaking [b5d6d04](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b5d6d04)

## 0.0.6

- [patch] Updated dependencies [1d9e75a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1d9e75a)
  - @atlaskit/inline-dialog@9.0.0
  - @atlaskit/tooltip@12.0.8
  - @atlaskit/modal-dialog@6.0.8
- [none] Updated dependencies [a3109d3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a3109d3)
  - @atlaskit/inline-dialog@9.0.0
  - @atlaskit/tooltip@12.0.8
  - @atlaskit/modal-dialog@6.0.8
- [none] Updated dependencies [87d45d3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/87d45d3)
  - @atlaskit/inline-dialog@9.0.0
  - @atlaskit/tooltip@12.0.8
  - @atlaskit/modal-dialog@6.0.8
- [none] Updated dependencies [a08b0c2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a08b0c2)
  - @atlaskit/inline-dialog@9.0.0
  - @atlaskit/tooltip@12.0.8
  - @atlaskit/modal-dialog@6.0.8

## 0.0.5

- [patch] Adds missing dependency on babel-runtime [e41e465](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e41e465)
- [none] Updated dependencies [e41e465](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e41e465)
  - @atlaskit/tooltip@12.0.7

## 0.0.4

- [patch] update the dependency of react-dom to 16.4.2 due to vulnerability in previous versions read https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html for details [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
- [none] Updated dependencies [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
  - @atlaskit/tooltip@12.0.5
  - @atlaskit/inline-dialog@8.0.4
  - @atlaskit/modal-dialog@6.0.6
  - @atlaskit/onboarding@5.1.4
  - @atlaskit/flag@9.0.4
  - @atlaskit/button@9.0.5
  - @atlaskit/icon@13.2.4

## 0.0.3

- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/inline-dialog@8.0.3
  - @atlaskit/tooltip@12.0.4
  - @atlaskit/onboarding@5.1.3
  - @atlaskit/flag@9.0.3
  - @atlaskit/icon@13.2.2
  - @atlaskit/button@9.0.4
  - @atlaskit/docs@5.0.2
  - @atlaskit/modal-dialog@6.0.5

## 0.0.2

- [patch] Initial dev release of portal package [6d5c8c0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6d5c8c0)
