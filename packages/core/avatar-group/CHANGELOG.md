# @atlaskit/avatar-group

## 5.0.1

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 5.0.0

### Major Changes

- [major][40bda8f796](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/40bda8f796):

  @atlaskit/avatar-group has been converted to Typescript. Typescript consumers will now get static type safety. Flow types are no longer provided. No API or behavioural changes.

## 4.0.13

- Updated dependencies [8d0f37c23e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8d0f37c23e):
  - @atlaskit/dropdown-menu@8.1.1
  - @atlaskit/item@10.1.5
  - @atlaskit/avatar@17.0.0
  - @atlaskit/theme@9.2.2

## 4.0.12

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 4.0.11

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 4.0.10

### Patch Changes

- [patch][708028db86](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/708028db86):

  Change all the imports to theme in Core to use multi entry points

## 4.0.9

### Patch Changes

- [patch][de35ce8c67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/de35ce8c67):

  Updates component maintainers

## 4.0.8

### Patch Changes

- [patch][10d566fe8d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/10d566fe8d):

  Removed unused dependencies from package.json for avatar-group: @atlaskit/tooltip was unused.

## 4.0.7

- Updated dependencies [7e9d653278](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e9d653278):
  - @atlaskit/avatar@16.0.8
  - @atlaskit/toggle@8.0.0

## 4.0.6

- Updated dependencies [06326ef3f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06326ef3f7):
  - @atlaskit/docs@8.1.3
  - @atlaskit/avatar@16.0.6
  - @atlaskit/button@13.0.9
  - @atlaskit/dropdown-menu@8.0.8
  - @atlaskit/field-base@13.0.6
  - @atlaskit/item@10.0.5
  - @atlaskit/toggle@7.0.3
  - @atlaskit/tooltip@15.0.2
  - @atlaskit/icon@19.0.0

## 4.0.5

### Patch Changes

- [patch][4615439434](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4615439434):

  index.ts will now be ignored when publishing to npm

## 4.0.4

- Updated dependencies [67f06f58dd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/67f06f58dd):
  - @atlaskit/avatar@16.0.4
  - @atlaskit/dropdown-menu@8.0.5
  - @atlaskit/icon@18.0.1
  - @atlaskit/item@10.0.3
  - @atlaskit/tooltip@15.0.0

## 4.0.3

- Updated dependencies [cfc3c8adb3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cfc3c8adb3):
  - @atlaskit/docs@8.1.2
  - @atlaskit/avatar@16.0.3
  - @atlaskit/button@13.0.8
  - @atlaskit/dropdown-menu@8.0.4
  - @atlaskit/field-base@13.0.4
  - @atlaskit/item@10.0.2
  - @atlaskit/toggle@7.0.1
  - @atlaskit/tooltip@14.0.3
  - @atlaskit/icon@18.0.0

## 4.0.2

- Updated dependencies [97bfe81ec8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97bfe81ec8):
  - @atlaskit/docs@8.1.0
  - @atlaskit/code@11.0.0

## 4.0.1

- [patch][21854842b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/21854842b5):

  - Clean couple of TODO's that were already done

## 4.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 3.0.4

- Updated dependencies [9c0b4744be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0b4744be):
  - @atlaskit/docs@7.0.3
  - @atlaskit/avatar@15.0.4
  - @atlaskit/button@12.0.3
  - @atlaskit/code@9.0.1
  - @atlaskit/dropdown-menu@7.0.6
  - @atlaskit/field-base@12.0.2
  - @atlaskit/icon@16.0.9
  - @atlaskit/item@9.0.1
  - @atlaskit/toggle@6.0.4
  - @atlaskit/tooltip@13.0.4
  - @atlaskit/theme@8.1.7

## 3.0.3

- Updated dependencies [1e826b2966](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e826b2966):
  - @atlaskit/docs@7.0.2
  - @atlaskit/avatar@15.0.3
  - @atlaskit/dropdown-menu@7.0.4
  - @atlaskit/icon@16.0.8
  - @atlaskit/theme@8.1.6
  - @atlaskit/toggle@6.0.3
  - @atlaskit/tooltip@13.0.3
  - @atlaskit/button@12.0.0

## 3.0.2

- [patch][ea173a3ee2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ea173a3ee2):

  - Internal changes only. Component is now SSR compatible. If server side rendered, Avatar Images will begin to load immediately; before client bundle is ready. If this is undesired, `imageUrl` can be passed in after component is mounted.

## 3.0.1

- Updated dependencies [9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):
  - @atlaskit/docs@7.0.1
  - @atlaskit/avatar@15.0.1
  - @atlaskit/dropdown-menu@7.0.1
  - @atlaskit/icon@16.0.5
  - @atlaskit/theme@8.0.1
  - @atlaskit/toggle@6.0.1
  - @atlaskit/tooltip@13.0.1
  - @atlaskit/button@11.0.0

## 3.0.0

- [major][76299208e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76299208e6):

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

## 2.1.12

- [patch][3a9b559382](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3a9b559382):

  - Stopping href from being passed down to Avatar in DropdownMenu rendered in AvatarGroup

## 2.1.11

- [patch][ed05c5c5d9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ed05c5c5d9):

  - Change border color of avatar in avatar group dropdown menu to transparent so that it does not overlap with focus ring

## 2.1.10

- Updated dependencies [d7ef59d432](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d7ef59d432):
  - @atlaskit/docs@6.0.1
  - @atlaskit/avatar@14.1.8
  - @atlaskit/button@10.1.2
  - @atlaskit/dropdown-menu@6.1.26
  - @atlaskit/field-base@11.0.14
  - @atlaskit/item@8.0.15
  - @atlaskit/toggle@5.0.15
  - @atlaskit/tooltip@12.1.15
  - @atlaskit/icon@16.0.0

## 2.1.9

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/avatar@14.1.7
  - @atlaskit/button@10.1.1
  - @atlaskit/code@8.2.2
  - @atlaskit/dropdown-menu@6.1.25
  - @atlaskit/field-base@11.0.13
  - @atlaskit/icon@15.0.2
  - @atlaskit/item@8.0.14
  - @atlaskit/theme@7.0.1
  - @atlaskit/toggle@5.0.14
  - @atlaskit/tooltip@12.1.13
  - @atlaskit/docs@6.0.0

## 2.1.8

- Updated dependencies [d13242d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13242d):
  - @atlaskit/docs@5.2.3
  - @atlaskit/button@10.0.4
  - @atlaskit/code@8.2.1
  - @atlaskit/dropdown-menu@6.1.24
  - @atlaskit/field-base@11.0.12
  - @atlaskit/icon@15.0.1
  - @atlaskit/item@8.0.13
  - @atlaskit/toggle@5.0.13
  - @atlaskit/tooltip@12.1.12
  - @atlaskit/theme@7.0.0
  - @atlaskit/avatar@14.1.6

## 2.1.7

- Updated dependencies [ab9b69c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ab9b69c):
  - @atlaskit/docs@5.2.2
  - @atlaskit/avatar@14.1.5
  - @atlaskit/button@10.0.1
  - @atlaskit/dropdown-menu@6.1.23
  - @atlaskit/field-base@11.0.11
  - @atlaskit/item@8.0.12
  - @atlaskit/toggle@5.0.12
  - @atlaskit/tooltip@12.1.11
  - @atlaskit/icon@15.0.0

## 2.1.6

- Updated dependencies [6998f11](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6998f11):
  - @atlaskit/docs@5.2.1
  - @atlaskit/avatar@14.1.4
  - @atlaskit/dropdown-menu@6.1.22
  - @atlaskit/icon@14.6.1
  - @atlaskit/theme@6.2.1
  - @atlaskit/toggle@5.0.11
  - @atlaskit/tooltip@12.1.10
  - @atlaskit/button@10.0.0

## 2.1.5

- [patch] Adds missing implicit @babel/runtime dependency [b71751b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b71751b)

## 2.1.4

- [patch] Adds new theming API to Avatar and AvatarItem components [79dd93f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/79dd93f)

## 2.1.3

- [patch] Updated dependencies [65c6514](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/65c6514)
  - @atlaskit/docs@5.0.8
  - @atlaskit/avatar@14.0.11
  - @atlaskit/button@9.0.13
  - @atlaskit/dropdown-menu@6.1.17
  - @atlaskit/field-base@11.0.8
  - @atlaskit/item@8.0.8
  - @atlaskit/toggle@5.0.9
  - @atlaskit/tooltip@12.1.1
  - @atlaskit/icon@14.0.0

## 2.1.1

- [patch] Updated dependencies [df22ad8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df22ad8)
  - @atlaskit/theme@6.0.0
  - @atlaskit/tooltip@12.0.9
  - @atlaskit/toggle@5.0.6
  - @atlaskit/item@8.0.5
  - @atlaskit/icon@13.2.5
  - @atlaskit/field-base@11.0.5
  - @atlaskit/dropdown-menu@6.1.8
  - @atlaskit/code@8.0.1
  - @atlaskit/button@9.0.6
  - @atlaskit/avatar@14.0.8
  - @atlaskit/docs@5.0.6

## 2.1.0

- [minor] Added prop moreButtonProps to allow modification of the group's MoreButton [6efa808](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6efa808)

## 2.0.8

- [patch] Updated dependencies [f9c0cdb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f9c0cdb)
  - @atlaskit/code@8.0.0
  - @atlaskit/docs@5.0.5

## 2.0.7

- [patch] update the dependency of react-dom to 16.4.2 due to vulnerability in previous versions read https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html for details [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
- [none] Updated dependencies [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
  - @atlaskit/tooltip@12.0.5
  - @atlaskit/field-base@11.0.3
  - @atlaskit/toggle@5.0.5
  - @atlaskit/button@9.0.5
  - @atlaskit/theme@5.1.3
  - @atlaskit/code@7.0.3
  - @atlaskit/item@8.0.4
  - @atlaskit/icon@13.2.4
  - @atlaskit/dropdown-menu@6.1.5
  - @atlaskit/avatar@14.0.6

## 2.0.6

- [patch] Update pretty-proptypes [c7e484c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c7e484c)
- [none] Updated dependencies [c7e484c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c7e484c)
  - @atlaskit/docs@5.0.3

## 2.0.5

- [patch] Clean up changelog [5b5bd8e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5b5bd8e)

## 2.0.4

- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/tooltip@12.0.4
  - @atlaskit/item@8.0.3
  - @atlaskit/icon@13.2.2
  - @atlaskit/toggle@5.0.4
  - @atlaskit/button@9.0.4
  - @atlaskit/theme@5.1.2
  - @atlaskit/code@7.0.2
  - @atlaskit/docs@5.0.2
  - @atlaskit/dropdown-menu@6.1.4
  - @atlaskit/avatar@14.0.5
  - @atlaskit/field-base@11.0.2

## 2.0.3

- [patch] Add a SSR test for every package, add react-dom and build-utils in devDependencies [7e331b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e331b5)
- [none] Updated dependencies [7e331b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e331b5)
  - @atlaskit/tooltip@12.0.3
  - @atlaskit/field-base@11.0.1
  - @atlaskit/toggle@5.0.3
  - @atlaskit/button@9.0.3
  - @atlaskit/theme@5.1.1
  - @atlaskit/code@7.0.1
  - @atlaskit/item@8.0.2
  - @atlaskit/icon@13.2.1
  - @atlaskit/dropdown-menu@6.1.3
  - @atlaskit/avatar@14.0.4

## 2.0.2

- [patch] Update dev dependencies and docs [d0e13b7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d0e13b7)

## 2.0.1

- [patch] Updated dependencies [e6b1985](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e6b1985)
  - @atlaskit/tooltip@12.0.0
  - @atlaskit/item@8.0.1
  - @atlaskit/icon@13.1.1
  - @atlaskit/dropdown-menu@6.1.1
  - @atlaskit/avatar@14.0.1

## 2.0.0

- [major] Updates to React ^16.4.0 [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
- [major] Updated dependencies [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
  - @atlaskit/tooltip@11.0.0
  - @atlaskit/field-base@11.0.0
  - @atlaskit/toggle@5.0.0
  - @atlaskit/button@9.0.0
  - @atlaskit/theme@5.0.0
  - @atlaskit/code@7.0.0
  - @atlaskit/docs@5.0.0
  - @atlaskit/item@8.0.0
  - @atlaskit/icon@13.0.0
  - @atlaskit/dropdown-menu@6.0.0
  - @atlaskit/avatar@14.0.0

## 1.0.2

- [patch] Fix flow types [da63331](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/da63331)
- [patch] Updated dependencies [7724115](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7724115)
  - @atlaskit/avatar@13.0.0
  - @atlaskit/button@8.2.5
  - @atlaskit/item@7.0.8
  - @atlaskit/dropdown-menu@5.2.3

## 1.0.1

- [patch] Small avatar-group docs improvements [a54f6ea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a54f6ea)

## 1.0.0

- [major] Split avatar-group into its own package [8a01bcd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8a01bcd)
- [patch] Updated dependencies [8a01bcd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8a01bcd)
  - @atlaskit/avatar@12.0.0
  - @atlaskit/item@7.0.7
  - @atlaskit/dropdown-menu@5.2.2
