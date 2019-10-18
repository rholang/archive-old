# @atlaskit/range

## 3.0.9

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 3.0.8

- Updated dependencies [97bab7fd28](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97bab7fd28):
  - @atlaskit/checkbox@10.0.0
  - @atlaskit/docs@8.1.7

## 3.0.7

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 3.0.6

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 3.0.5

### Patch Changes

- [patch][708028db86](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/708028db86):

  Change all the imports to theme in Core to use multi entry points

## 3.0.4

### Patch Changes

- [patch][de35ce8c67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/de35ce8c67):

  Updates component maintainers

## 3.0.3

### Patch Changes

- [patch][f34776be97](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f34776be97):

  Type definition files are now referenced in package.json

## 3.0.2

- Updated dependencies [87a2638655](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/87a2638655):
  - @atlaskit/checkbox@9.0.0

## 3.0.1

### Patch Changes

- [patch][4615439434](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4615439434):

  index.ts will now be ignored when publishing to npm

## 3.0.0

### Major Changes

- [major][4a08d1912e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4a08d1912e):

  @atlaskit/range has been converted to Typescript. Typescript consumers will now get static type safety. Flow types are no longer provided. No API or behavioural changes.

## 2.0.2

- Updated dependencies [67f06f58dd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/67f06f58dd):
  - @atlaskit/tooltip@15.0.0

## 2.0.1

- Updated dependencies [70862830d6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/70862830d6):
  - @atlaskit/checkbox@8.0.0
  - @atlaskit/theme@9.1.0

## 2.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 1.0.0

- [major][546b636a36](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/546b636a36):

  - This major release indicates that this package is no longer under dev preview but is ready for use

## 0.2.2

- [patch][1f2a181b0f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1f2a181b0f):

  - onChange is no longer overridden by spread props. As a result this component should now work in uncontrolled mode

## 0.2.1

- Updated dependencies [9c0b4744be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0b4744be):
  - @atlaskit/docs@7.0.3
  - @atlaskit/checkbox@6.0.4
  - @atlaskit/tooltip@13.0.4
  - @atlaskit/theme@8.1.7

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

## 0.1.3

- [patch][aab267bb3a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aab267bb3a):

  - Added test to make sure the props are passed down to hidden input

## 0.1.2

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/checkbox@5.0.9
  - @atlaskit/theme@7.0.1
  - @atlaskit/tooltip@12.1.13
  - @atlaskit/docs@6.0.0

## 0.1.1

- [patch][d13242d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13242d):

  - Change API to experimental theming API to namespace component themes into separate contexts and make theming simpler. Update all dependant components.

## 0.1.0

- [minor][8945a58](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8945a58):

  - Initial release
