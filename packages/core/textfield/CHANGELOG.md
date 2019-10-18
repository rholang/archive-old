# @atlaskit/textfield

## 3.1.2

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 3.1.1

### Patch Changes

- [patch][a2d0043716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a2d0043716):

  Updated version of analytics-next to fix potential incompatibilities with TS 3.6

## 3.1.0

### Minor Changes

- [minor][9638c553c0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9638c553c0):

  Adding an optional prop `testId` that will set the attribute value `data-testid`. It will help products to write better integration and end to end tests.

## 3.0.7

### Patch Changes

- [patch][d5def52d98](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d5def52d98):

  Refactored textfield styles to better support border-box being set globally.

## 3.0.6

- Updated dependencies [8d0f37c23e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8d0f37c23e):
  - @atlaskit/avatar@17.0.0
  - @atlaskit/theme@9.2.2

## 3.0.5

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 3.0.4

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 3.0.3

### Patch Changes

- [patch][708028db86](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/708028db86):

  Change all the imports to theme in Core to use multi entry points

## 3.0.2

### Patch Changes

- [patch][de35ce8c67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/de35ce8c67):

  Updates component maintainers

## 3.0.1

- Updated dependencies [926b43142b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/926b43142b):
  - @atlaskit/analytics-next@6.0.0
  - @atlaskit/avatar@16.0.10
  - @atlaskit/button@13.1.2

## 3.0.0

### Major Changes

- [major][84887b940c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/84887b940c):

  - Converting from flow to typescript 🎉
  - Correctly typing the current prop spreading onto the internal `<input>` element
  - Removing `isHovered` and `isFocused` from public API as they previously did not do anything

## 2.0.5

### Patch Changes

- [patch][2fe6e8fbdf](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2fe6e8fbdf):

  Removed unused dependencies from package.json for textfield: @emotion/core was unused.

## 2.0.4

### Patch Changes

- [patch][9f8ab1084b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9f8ab1084b):

  Consume analytics-next ts type definitions as an ambient declaration.

## 2.0.3

- Updated dependencies [06326ef3f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06326ef3f7):
  - @atlaskit/docs@8.1.3
  - @atlaskit/avatar@16.0.6
  - @atlaskit/button@13.0.9
  - @atlaskit/form@6.1.1
  - @atlaskit/icon@19.0.0

## 2.0.2

### Patch Changes

- [patch][4615439434](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4615439434):

  index.ts will now be ignored when publishing to npm

## 2.0.1

- Updated dependencies [cfc3c8adb3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cfc3c8adb3):
  - @atlaskit/docs@8.1.2
  - @atlaskit/avatar@16.0.3
  - @atlaskit/button@13.0.8
  - @atlaskit/form@6.0.5
  - @atlaskit/icon@18.0.0

## 2.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 1.0.0

- [major][6cdf11238d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6cdf11238d):

  - This major release indicates that this package is no longer under dev preview but is ready for use

## 0.4.5

- [patch][7157a95389](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7157a95389):

  - Internal changes only. Textfield is compatible with SSR.

## 0.4.4

- Updated dependencies [9c0b4744be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0b4744be):
  - @atlaskit/docs@7.0.3
  - @atlaskit/avatar@15.0.4
  - @atlaskit/button@12.0.3
  - @atlaskit/form@5.2.7
  - @atlaskit/icon@16.0.9
  - @atlaskit/theme@8.1.7

## 0.4.3

- Updated dependencies [1e826b2966](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e826b2966):
  - @atlaskit/docs@7.0.2
  - @atlaskit/analytics-next@4.0.3
  - @atlaskit/avatar@15.0.3
  - @atlaskit/form@5.2.5
  - @atlaskit/icon@16.0.8
  - @atlaskit/theme@8.1.6
  - @atlaskit/button@12.0.0

## 0.4.2

- [patch][a28eb04426](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a28eb04426):

  - Migrates package from emotion 9 to emotion 10. No behaviour or API changes.

## 0.4.1

- [patch][e0797c2937](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e0797c2937):

  - Support object refs e.g. React.createRef()

## 0.4.0

- [minor][8eff47cacb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8eff47cacb):

  - Allow element before and/or after input

## 0.3.1

- Updated dependencies [9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):
  - @atlaskit/docs@7.0.1
  - @atlaskit/analytics-next@4.0.1
  - @atlaskit/form@5.2.1
  - @atlaskit/theme@8.0.1
  - @atlaskit/button@11.0.0

## 0.3.0

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

## 0.2.0

- [minor][e9b824bf86](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e9b824bf86):

  - **Breaking**: Changes to the `theme` prop. The type of this prop remains as `(ThemeTokens, ThemeProps) => ThemeTokens`.
    - The shape of `ThemeTokens` has changed. `container` and `input` keys are now required. The value of these keys are style objects.
    - More information has been added to ThemeProps.

  ```diff
  type ThemeTokens = {
  - backgroundColor: string
  - backgroundColorFocus: string
  - backgroundColorHover: string
  - borderColor: string
  - borderColorFocus: string
  - textColor: string
  - disabledTextColor: string
  - placeholderTextColor: string
  + container: Object,
  + input: Object
  }

  type ThemeProps = {
    appearance: ThemeAppearance,
    mode: 'dark' | 'light',
  +  isDisabled: boolean,
  +  isFocused: boolean,
  +  isHovered: boolean,
  +  isInvalid: boolean,
  +  isMonospaced: boolean,
  +  isCompact: boolean,
  +  width?: string | number,
  };
  ```

## 0.1.6

- [patch][3d8322bd71](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3d8322bd71):

  - Trival refactor: update a variable name

## 0.1.5

- [patch][2e5dd50](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2e5dd50):

  - Update validation example to be compatible with the new Forms API

- Updated dependencies [647a46f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/647a46f):
  - @atlaskit/form@5.0.0

## 0.1.4

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/analytics-next@3.1.2
  - @atlaskit/button@10.1.1
  - @atlaskit/form@4.0.21
  - @atlaskit/theme@7.0.1
  - @atlaskit/docs@6.0.0

## 0.1.3

- [patch][63f969d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/63f969d):

  - Fixed height of compact textfields to correctly be 32px instead of 28px

## 0.1.2

- [patch][480a57c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/480a57c):

  - Convert to use new theme API.

## 0.1.1

- Updated dependencies [6998f11](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6998f11):
  - @atlaskit/docs@5.2.1
  - @atlaskit/analytics-next@3.1.1
  - @atlaskit/form@4.0.18
  - @atlaskit/theme@6.2.1
  - @atlaskit/button@10.0.0

## 0.1.0

- [minor][62109bd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/62109bd):

  - Refactor of field-text to remove field-base and normalise along api patterns established in other form components.
