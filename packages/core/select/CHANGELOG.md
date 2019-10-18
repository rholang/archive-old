# @atlaskit/select

## 10.2.0

### Minor Changes

- [minor][17a07074e8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/17a07074e8):

  Fix padding to be consistent with other Atlaskit form fields. This change includes removing padding from around the icon itself, and adding padding to the icon container, as well as altering the padding around the input container.

## 10.1.3

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 10.1.2

### Patch Changes

- [patch][a2d0043716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a2d0043716):

  Updated version of analytics-next to fix potential incompatibilities with TS 3.6

## 10.1.1

- Updated dependencies [97bab7fd28](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97bab7fd28):
  - @atlaskit/button@13.3.1
  - @atlaskit/form@6.2.3
  - @atlaskit/modal-dialog@10.3.1
  - @atlaskit/checkbox@10.0.0
  - @atlaskit/docs@8.1.7

## 10.1.0

### Minor Changes

- [minor][c6efb2f5b6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c6efb2f5b6):

  Prefix the legacy lifecycle methods with UNSAFE\_\* to avoid warning in React 16.9+

  More information about the deprecation of lifecycles methods can be found here:
  https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

## 10.0.8

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 10.0.7

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 10.0.6

### Patch Changes

- [patch][708028db86](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/708028db86):

  Change all the imports to theme in Core to use multi entry points

## 10.0.5

### Patch Changes

- [patch][abee1a5f4f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/abee1a5f4f):

  Bumping internal dependency (memoize-one) to latest version (5.1.0). memoize-one@5.1.0 has full typescript support so it is recommended that typescript consumers use it also.

## 10.0.4

### Patch Changes

- [patch][de35ce8c67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/de35ce8c67):

  Updates component maintainers

## 10.0.3

- Updated dependencies [926b43142b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/926b43142b):
  - @atlaskit/analytics-next@6.0.0
  - @atlaskit/button@13.1.2
  - @atlaskit/checkbox@9.0.5
  - @atlaskit/modal-dialog@10.1.3
  - @atlaskit/tooltip@15.0.9

## 10.0.2

### Patch Changes

- [patch][f20ac3080c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f20ac3080c):

  Removed unused dependencies from package.json for select: react-transition-group was unused.

## 10.0.1

### Patch Changes

- [patch][9f8ab1084b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9f8ab1084b):

  Consume analytics-next ts type definitions as an ambient declaration.

## 10.0.0

### Major Changes

- [major][790e66bece](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/790e66bece):

  Major bump to react-select which includes a bump from emotion 9 --> 10, this will impact users who are currently creating custom components using emotion. Empty values in selects have also now been changed to be more deterministic across single and multi select. See https://github.com/JedWatson/react-select/issues/3585 for details

## 9.1.10

- Updated dependencies [87a2638655](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/87a2638655):
  - @atlaskit/button@13.0.10
  - @atlaskit/form@6.1.2
  - @atlaskit/modal-dialog@10.0.8
  - @atlaskit/checkbox@9.0.0

## 9.1.9

### Patch Changes

- [patch][ef04b7fe05](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ef04b7fe05):

  Cleaned up event listeners on unmount

## 9.1.8

- Updated dependencies [06326ef3f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06326ef3f7):
  - @atlaskit/docs@8.1.3
  - @atlaskit/button@13.0.9
  - @atlaskit/checkbox@8.0.5
  - @atlaskit/form@6.1.1
  - @atlaskit/modal-dialog@10.0.7
  - @atlaskit/tooltip@15.0.2
  - @atlaskit/icon@19.0.0

## 9.1.7

### Patch Changes

- [patch][4615439434](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4615439434):

  index.ts will now be ignored when publishing to npm

## 9.1.6

- Updated dependencies [67f06f58dd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/67f06f58dd):
  - @atlaskit/form@6.0.6
  - @atlaskit/icon@18.0.1
  - @atlaskit/tooltip@15.0.0

## 9.1.5

- Updated dependencies [cfc3c8adb3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cfc3c8adb3):
  - @atlaskit/docs@8.1.2
  - @atlaskit/button@13.0.8
  - @atlaskit/checkbox@8.0.2
  - @atlaskit/form@6.0.5
  - @atlaskit/modal-dialog@10.0.4
  - @atlaskit/tooltip@14.0.3
  - @atlaskit/icon@18.0.0

## 9.1.4

- Updated dependencies [70862830d6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/70862830d6):
  - @atlaskit/button@13.0.6
  - @atlaskit/form@6.0.4
  - @atlaskit/modal-dialog@10.0.2
  - @atlaskit/checkbox@8.0.0
  - @atlaskit/icon@17.2.0
  - @atlaskit/theme@9.1.0

## 9.1.3

- [patch][b0ef06c685](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b0ef06c685):

  - This is just a safety release in case anything strange happened in in the previous one. See Pull Request #5942 for details

## 9.1.2

- Updated dependencies [215688984e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/215688984e):
- Updated dependencies [06c5cccf9d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06c5cccf9d):
  - @atlaskit/button@13.0.4
  - @atlaskit/spinner@12.0.0
  - @atlaskit/form@6.0.3
  - @atlaskit/icon@17.1.2
  - @atlaskit/modal-dialog@10.0.0

## 9.1.1

- Updated dependencies [4b07b57640](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4b07b57640):
  - @atlaskit/button@13.0.2
  - @atlaskit/icon@17.0.2
  - @atlaskit/logo@12.0.0

## 9.1.0

- [minor][3d5ab16856](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3d5ab16856):

  - Add missing dependency @emotion/core

## 9.0.1

- [patch][21854842b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/21854842b5):

  - Clean couple of TODO's that were already done

## 9.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 8.1.1

- Updated dependencies [9c0b4744be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0b4744be):
  - @atlaskit/docs@7.0.3
  - @atlaskit/button@12.0.3
  - @atlaskit/checkbox@6.0.4
  - @atlaskit/form@5.2.7
  - @atlaskit/icon@16.0.9
  - @atlaskit/logo@10.0.4
  - @atlaskit/modal-dialog@8.0.7
  - @atlaskit/spinner@10.0.7
  - @atlaskit/tooltip@13.0.4
  - @atlaskit/theme@8.1.7

## 8.1.0

- [minor][b50c289008](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b50c289008):

  - Don't close popup select when cleared.

## 8.0.5

- Updated dependencies [1e826b2966](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e826b2966):
  - @atlaskit/docs@7.0.2
  - @atlaskit/analytics-next@4.0.3
  - @atlaskit/checkbox@6.0.3
  - @atlaskit/form@5.2.5
  - @atlaskit/icon@16.0.8
  - @atlaskit/logo@10.0.3
  - @atlaskit/modal-dialog@8.0.6
  - @atlaskit/spinner@10.0.5
  - @atlaskit/theme@8.1.6
  - @atlaskit/tooltip@13.0.3
  - @atlaskit/button@12.0.0

## 8.0.4

- [patch][2a90c65e27](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2a90c65e27):

  - Fix, and guard against, missing refs

## 8.0.3

- Updated dependencies [9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):
  - @atlaskit/docs@7.0.1
  - @atlaskit/analytics-next@4.0.1
  - @atlaskit/checkbox@6.0.1
  - @atlaskit/form@5.2.1
  - @atlaskit/icon@16.0.5
  - @atlaskit/logo@10.0.1
  - @atlaskit/modal-dialog@8.0.2
  - @atlaskit/spinner@10.0.1
  - @atlaskit/theme@8.0.1
  - @atlaskit/tooltip@13.0.1
  - @atlaskit/button@11.0.0

## 8.0.2

- [patch][87808b7791](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/87808b7791):

  - AK-5973 expose handleKeyDown as prop for PopupSelect

## 8.0.1

- [patch][69c6f6acb7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/69c6f6acb7):

  - Minor bug fixes in 2.4.2 react-select patch. See the release notes for details here https://github.com/JedWatson/react-select/releases/tag/v2.4.2

## 8.0.0

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

## 7.2.2

- [patch][39850f9615](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/39850f9615):

  - Popup select set focus to selected option, instead of the first option, when the menu opens

## 7.2.1

- [patch][37c2eeec43](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/37c2eeec43):

  - Added possibility to add compact styling for multi select component

## 7.2.0

- [minor][46ffd45f21](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/46ffd45f21):

  - Added ability to toggle animations in atlaskit/select, updated UserPicker to disable animations using this new behaviour

## 7.1.2

- [patch][bcdb413cb4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bcdb413cb4):

  - Encapsulate checkbox/radio option styles inside the primitive

## 7.1.1

- [patch][896bf5bef9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/896bf5bef9):

  - Fix bug breaking mobile UX, and causing menu to not be openable on touch

## 7.1.0

- [minor][571ec20522](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/571ec20522):

  - Updated react-select to 2.4.0, includes updates to BEM modifiers in options, for more information see the react-select release notes https://github.com/JedWatson/react-select/releases/tag/v2.4.0
  - Added makeAnimated invocation back to createSelect, as multi select in modal bug has been resolved.
  - Export makeAsyncSelect and makeCreatableSelect function from src

## 7.0.0

- [major][06713e0a0c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06713e0a0c):

  - popup select "target" is now a function that must resolve to a node

## 6.1.20

- [patch][957778f085](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/957778f085):

  - Expose CheckboxOption and RadioOption from select package

## 6.1.19

- Updated dependencies [d7ef59d432](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d7ef59d432):
  - @atlaskit/docs@6.0.1
  - @atlaskit/button@10.1.2
  - @atlaskit/checkbox@5.0.11
  - @atlaskit/form@5.1.2
  - @atlaskit/modal-dialog@7.2.1
  - @atlaskit/tooltip@12.1.15
  - @atlaskit/icon@16.0.0

## 6.1.18

- [patch][6148c6c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6148c6c):

  - AK-5693 apply styles to loading indicator

## 6.1.17

- [patch][e9ccac7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e9ccac7):

  - pin react-select at 2.1.x to avoid SSR issues in 2.2.0

## 6.1.16

- [patch][b9b1900](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b9b1900):

  - Use @atlaskit/select instead of @atlaskit/single-select on the Fullscreen examples on website

## 6.1.15

- [patch][6195ac3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6195ac3):

  - remove animated functionality to temporarily resolve blocking issue with portal

## 6.1.14

- [patch][a048a85](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a048a85):

  - Updated to be compatible with new Forms API

- Updated dependencies [647a46f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/647a46f):
  - @atlaskit/form@5.0.0

## 6.1.13

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/analytics-next@3.1.2
  - @atlaskit/button@10.1.1
  - @atlaskit/checkbox@5.0.9
  - @atlaskit/form@4.0.21
  - @atlaskit/icon@15.0.2
  - @atlaskit/logo@9.2.6
  - @atlaskit/modal-dialog@7.1.1
  - @atlaskit/spinner@9.0.13
  - @atlaskit/theme@7.0.1
  - @atlaskit/tooltip@12.1.13
  - @atlaskit/docs@6.0.0

## 6.1.12

- [patch][82fc5f5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/82fc5f5):

  - Pinning react-popper to 1.0.2 to avoid recursive bug

## 6.1.11

- [patch][bfc508c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bfc508c):

  - CheckboxSelect options now have correct flex styles on the option value

## 6.1.10

- Updated dependencies [d13242d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13242d):
  - @atlaskit/docs@5.2.3
  - @atlaskit/button@10.0.4
  - @atlaskit/checkbox@5.0.8
  - @atlaskit/form@4.0.20
  - @atlaskit/icon@15.0.1
  - @atlaskit/logo@9.2.5
  - @atlaskit/modal-dialog@7.0.14
  - @atlaskit/spinner@9.0.12
  - @atlaskit/tooltip@12.1.12
  - @atlaskit/theme@7.0.0

## 6.1.9

- Updated dependencies [ab9b69c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ab9b69c):
  - @atlaskit/docs@5.2.2
  - @atlaskit/button@10.0.1
  - @atlaskit/checkbox@5.0.7
  - @atlaskit/form@4.0.19
  - @atlaskit/modal-dialog@7.0.13
  - @atlaskit/tooltip@12.1.11
  - @atlaskit/icon@15.0.0

## 6.1.8

- Updated dependencies [6998f11](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6998f11):
  - @atlaskit/docs@5.2.1
  - @atlaskit/analytics-next@3.1.1
  - @atlaskit/checkbox@5.0.6
  - @atlaskit/form@4.0.18
  - @atlaskit/icon@14.6.1
  - @atlaskit/logo@9.2.4
  - @atlaskit/modal-dialog@7.0.12
  - @atlaskit/spinner@9.0.11
  - @atlaskit/theme@6.2.1
  - @atlaskit/tooltip@12.1.10
  - @atlaskit/button@10.0.0

## 6.1.7

- [patch][1fb2c2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1fb2c2a):

  - Fixed issue where tooltips and modals would initially render in the wrong location

## 6.1.6

- [patch][a637f5e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a637f5e):

  - Refine and fix some flow type errors found by fixing @atlaskit/analytics-next HOCs to allow flow to type check properly

## 6.1.5

- [patch][fcf97d8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fcf97d8):

  - Fix countries and mismatched flags

## 6.1.4

- [patch][6ab8e95" d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6ab8e95"
  d):

  - Removed wrapping div from around selects as it is no longer needed when using the latest inline-dialog component.

## 6.1.3

- [patch][dab963b" d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dab963b"
  d):

  - Make sure portal binds to DOM only

## 6.1.2

- [patch][0782e03" d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0782e03"
  d):

  - bumped react-select to 2.1.1 minor bug fixes including mirroring the logic for the backspace key to delete, and stripping theme props from Input and GroupHeading dom elements. See https://github.com/JedWatson/react-select/releases/tag/v2.1.1 for details

## 6.1.1

- [patch] fixed popupselect bug by replacing Fragment with div element containing the requisite event handlers [80dd688](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80dd688)

## 6.1.0

- [minor] Change tabSelectsValue to default to false in @atlaskit/select, bumped react-select dep to 2.1.0, see release logs for details https://github.com/JedWatson/react-select/releases/tag/2.1.0 [dd4cbea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dd4cbea)

## 6.0.4

- [patch] fix issues with PopupSelect and NavigationSwitcher [b4e19c3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b4e19c3)

## 6.0.3

- [patch] Adds missing implicit @babel/runtime dependency [b71751b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b71751b)

## 6.0.2

- [patch] Updated dependencies [65c6514](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/65c6514)
  - @atlaskit/docs@5.0.8
  - @atlaskit/button@9.0.13
  - @atlaskit/checkbox@5.0.2
  - @atlaskit/form@4.0.10
  - @atlaskit/modal-dialog@7.0.2
  - @atlaskit/tooltip@12.1.1
  - @atlaskit/icon@14.0.0

## 6.0.1

- [patch] Fixing analytics events for checkbox/radio/select [3e428e3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3e428e3)

## 6.0.0

- [major] Bumped react-select dep from 2.0.0-beta.7 to 2.0.0. This includes a breaking change to custom components, the innerRef property is now declared on the root of the props object, as opposed to being part of the innerProps object passed to each component. For a full list of changes in 2.0.0 please see the react-select changelog here. https://github.com/JedWatson/react-select/blob/master/HISTORY.md [4194aa4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4194aa4)

## 5.0.19

- [patch] Added a multi-select example for PopupSelect [483a335](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/483a335)

## 5.0.18

- [patch] Updated dependencies [80e1925](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80e1925)
  - @atlaskit/button@9.0.9
  - @atlaskit/form@4.0.5
  - @atlaskit/modal-dialog@7.0.1
  - @atlaskit/checkbox@5.0.0

## 5.0.17

- [patch] Updated dependencies [d5a043a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d5a043a)
  - @atlaskit/form@4.0.3
  - @atlaskit/icon@13.8.1
  - @atlaskit/tooltip@12.0.14
  - @atlaskit/modal-dialog@7.0.0

## 5.0.16

- [patch] Updated dependencies [9c66d4d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c66d4d)
  - @atlaskit/form@4.0.2
  - @atlaskit/webdriver-runner@0.1.0

## 5.0.15

- [patch] Adds sideEffects: false to allow proper tree shaking [b5d6d04](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b5d6d04)

## 5.0.14

- [patch] Updated dependencies [d8d8107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d8d8107)
  - @atlaskit/form@4.0.0

## 5.0.13

- [patch] Using the latest popper to avoid recursive setState calls. [9dceca9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9dceca9)

## 5.0.11

- [patch] Updating datetime-picker and select styles [981b96c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/981b96c)

## 5.0.10

- [patch] add switcher to nav-next ui components docs page [e083d63](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e083d63)
- [none] Updated dependencies [e083d63](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e083d63)

## 5.0.9

- [patch] Updated dependencies [df22ad8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df22ad8)
  - @atlaskit/theme@6.0.0
  - @atlaskit/tooltip@12.0.9
  - @atlaskit/spinner@9.0.6
  - @atlaskit/modal-dialog@6.0.9
  - @atlaskit/icon@13.2.5
  - @atlaskit/form@3.1.6
  - @atlaskit/checkbox@4.0.4
  - @atlaskit/button@9.0.6
  - @atlaskit/docs@5.0.6

## 5.0.8

- [patch] update the dependency of react-dom to 16.4.2 due to vulnerability in previous versions read https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html for details [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
- [none] Updated dependencies [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
  - @atlaskit/tooltip@12.0.5
  - @atlaskit/modal-dialog@6.0.6
  - @atlaskit/analytics-next@3.0.4
  - @atlaskit/checkbox@4.0.3
  - @atlaskit/button@9.0.5
  - @atlaskit/theme@5.1.3
  - @atlaskit/spinner@9.0.5
  - @atlaskit/icon@13.2.4
  - @atlaskit/form@3.1.5

## 5.0.7

- [patch] Fix bug with Popup select not opening if target was an SVG object [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/tooltip@12.0.4
  - @atlaskit/icon@13.2.2
  - @atlaskit/checkbox@4.0.2
  - @atlaskit/button@9.0.4
  - @atlaskit/theme@5.1.2
  - @atlaskit/spinner@9.0.4
  - @atlaskit/analytics-next@3.0.3
  - @atlaskit/docs@5.0.2
  - @atlaskit/modal-dialog@6.0.5
  - @atlaskit/form@3.1.4

## 5.0.6

- [patch] Add a SSR test for every package, add react-dom and build-utils in devDependencies [7e331b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e331b5)
- [patch] Updated dependencies [7e331b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e331b5)
  - @atlaskit/tooltip@12.0.3
  - @atlaskit/modal-dialog@6.0.4
  - @atlaskit/analytics-next@3.0.2
  - @atlaskit/checkbox@4.0.1
  - @atlaskit/button@9.0.3
  - @atlaskit/theme@5.1.1
  - @atlaskit/spinner@9.0.3
  - @atlaskit/icon@13.2.1
  - @atlaskit/form@3.1.3

## 5.0.5

- [patch] Removed incorrect min-height for forms. Fixed select dev dep range for form. [186a2ee](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/186a2ee)
- [none] Updated dependencies [186a2ee](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/186a2ee)
  - @atlaskit/form@3.1.2

## 5.0.4

- [patch] Updated dependencies [25d6e48](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/25d6e48)
  - @atlaskit/form@3.1.1

## 5.0.3

- [patch] Updated dependencies [e33f19d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e33f19d)
  - @atlaskit/form@3.1.0

## 5.0.2

- [patch] Move analytics tests and replace elements to core [49d4ab4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/49d4ab4)
- [none] Updated dependencies [49d4ab4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/49d4ab4)
  - @atlaskit/tooltip@12.0.1
  - @atlaskit/modal-dialog@6.0.1
  - @atlaskit/analytics-next@3.0.1
  - @atlaskit/button@9.0.2
  - @atlaskit/spinner@9.0.2
  - @atlaskit/docs@5.0.1

## 5.0.1

- [patch] Updated dependencies [e6b1985](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e6b1985)
  - @atlaskit/tooltip@12.0.0
  - @atlaskit/icon@13.1.1
  - @atlaskit/form@3.0.1

## 5.0.0

- [major] Provides analytics for common component interations. See the [Instrumented Components](https://atlaskit.atlassian.com/packages/core/analytics-next) section for more details. If you are using enzyme for testing you will have to use [our forked version of the library](https://atlaskit.atlassian.com/docs/guides/testing#we-use-a-forked-version-of-enzyme). [563a7eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/563a7eb)
- [major] Updates to React ^16.4.0 [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
- [major] Updated dependencies [563a7eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/563a7eb)
  - @atlaskit/tooltip@11.0.0
  - @atlaskit/modal-dialog@6.0.0
  - @atlaskit/analytics-next@3.0.0
  - @atlaskit/checkbox@4.0.0
  - @atlaskit/button@9.0.0
  - @atlaskit/theme@5.0.0
  - @atlaskit/docs@5.0.0
  - @atlaskit/icon@13.0.0
  - @atlaskit/form@3.0.0
- [major] Updated dependencies [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
  - @atlaskit/tooltip@11.0.0
  - @atlaskit/modal-dialog@6.0.0
  - @atlaskit/analytics-next@3.0.0
  - @atlaskit/checkbox@4.0.0
  - @atlaskit/button@9.0.0
  - @atlaskit/theme@5.0.0
  - @atlaskit/docs@5.0.0
  - @atlaskit/icon@13.0.0
  - @atlaskit/form@3.0.0

## 4.5.2

- [patch] Update loading indicator to be inline with ADG3 [da661fd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/da661fd)
- [none] Updated dependencies [da661fd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/da661fd)

## 4.5.1

- [patch] fixed actionMeta not being passed to onChange of PopupSelect [83833be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/83833be)
- [none] Updated dependencies [83833be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/83833be)

## 4.5.0

- [minor] atlaskit/select now invokes a makeAnimated function to wrap passed in components in default animated behaviour. As this invocation returns a new set of react components each time, we've also implemented a lightweight component cache using memoize-one and react-fast-compare. Additionally updates made to datetime-picker to not instantiate a new component on render everytime (for performance reasons as well as to satisfy our caching logic), we now also pass relevant state values through the select as props to be ingested by our custom components, instead of directly capturing them within lexical scope. [9b01264](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9b01264)
- [none] Updated dependencies [9b01264](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9b01264)

## 4.4.0

- [minor] Added nav-next "Switcher" component. Minor fixes and dep bump for select. [ed5d8d1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ed5d8d1)
- [none] Updated dependencies [ed5d8d1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ed5d8d1)

## 4.3.6

- [patch] ADG3 guideline allignemnt, updated padding and height, update colors for hover and active, update icons [b53da28](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b53da28)
- [none] Updated dependencies [b53da28](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b53da28)

## 4.3.5

- [patch] Updated dependencies [60c715f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/60c715f)
  - @atlaskit/form@2.1.5

## 4.3.4

- [patch] Updated dependencies [a78cd4d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a78cd4d)
  - @atlaskit/icon@12.6.2

## 4.3.3

- [patch] Replace internal styled components with emotion styled components [415a64a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/415a64a)
- [none] Updated dependencies [415a64a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/415a64a)

## 4.3.2

- [patch] Updated dependencies [470a1fb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/470a1fb)
  - @atlaskit/form@2.1.4

## 4.3.1

- [patch] Fix \$FlowFixMe and release packages [25d0b2d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/25d0b2d)
- [patch] Updated dependencies [25d0b2d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/25d0b2d)
  - @atlaskit/tooltip@10.3.1
  - @atlaskit/modal-dialog@5.2.5
  - @atlaskit/button@8.2.2
  - @atlaskit/checkbox@3.1.2
  - @atlaskit/icon@12.3.1
  - @atlaskit/form@2.1.3

## 4.3.0

- [minor] Fixes types for Flow 0.74 [dc50cd2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dc50cd2)
- [none] Updated dependencies [dc50cd2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dc50cd2)
  - @atlaskit/tooltip@10.3.0
  - @atlaskit/button@8.2.0
  - @atlaskit/checkbox@3.1.0
  - @atlaskit/icon@12.2.0

## 4.2.3

- [patch] Clean Changelogs - remove duplicates and empty entries [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
- [patch] Updated dependencies [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
  - @atlaskit/tooltip@10.2.1
  - @atlaskit/modal-dialog@5.2.2
  - @atlaskit/button@8.1.2
  - @atlaskit/theme@4.0.4
  - @atlaskit/checkbox@3.0.6
  - @atlaskit/icon@12.1.2
  - @atlaskit/form@2.1.2

## 4.2.2

- [patch] Added upgrade guide, updated atlaskit/docs dep on react-markings to expose md parser customisations [aef4aea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aef4aea)
- [none] Updated dependencies [aef4aea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aef4aea)
  - @atlaskit/docs@4.2.0

## 4.2.1

- [patch] Update changelogs to remove duplicate [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
- [none] Updated dependencies [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
  - @atlaskit/theme@4.0.3
  - @atlaskit/modal-dialog@5.1.1
  - @atlaskit/icon@12.1.1
  - @atlaskit/checkbox@3.0.5
  - @atlaskit/button@8.1.1
  - @atlaskit/docs@4.1.1

## 4.2.0

- [none] Updated dependencies [9d20f54](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d20f54)
  - @atlaskit/modal-dialog@5.1.0
  - @atlaskit/icon@12.1.0
  - @atlaskit/checkbox@3.0.4
  - @atlaskit/docs@4.1.0
  - @atlaskit/theme@4.0.2
  - @atlaskit/button@8.1.0

## 4.1.0

- [minor] Fix InlineDialog closing on Select option click. Added Select prop onClickPreventDefault which is enabled by default [11accbd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/11accbd)
- [minor] Updated dependencies [11accbd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/11accbd)

## 4.0.1

- [patch] Update readme's [223cd67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/223cd67)
- [patch] Updated dependencies [223cd67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/223cd67)
  - @atlaskit/modal-dialog@5.0.1
  - @atlaskit/icon@12.0.1
  - @atlaskit/checkbox@3.0.1
  - @atlaskit/button@8.0.1
  - @atlaskit/theme@4.0.1
  - @atlaskit/docs@4.0.1

## 4.0.0

- [major] makes styled-components a peer dependency and upgrades version range from 1.4.6 - 3 to ^3.2.6 [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
- [patch] Updated dependencies [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
  - @atlaskit/modal-dialog@5.0.0
  - @atlaskit/icon@12.0.0
  - @atlaskit/checkbox@3.0.0
  - @atlaskit/button@8.0.0
  - @atlaskit/theme@4.0.0
  - @atlaskit/docs@4.0.0

## 3.2.0

- [minor] Add named export "CompositeSelect" to the Atlaskit select package [9c34042](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c34042)

## 3.1.0

- [minor] Added `spacing` prop, which allows for a compact mode that supports 32px trigger height for single-select, bumped react-select to beta.6 [59ab4a6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/59ab4a6)
- [minor] added `spacing` prop to support `compact` mode for single select.
- bumped react-select to beta.6, this includes the following changes:
  - `actionMeta` for `remove-value` and `pop-value` events now contain a `removedValue` property.
  - Fixed bug with `css` attribute being applied to DOM element in SingleValue.
  - selectValue now filters items based on getOptionValue method.
  - Added `createOptionPosition` prop for Creatable select, which allows the user to specify whether the createOption element displays as the first or last option in the menu.
  - Added touch handling logic to detect user intent to scroll the page when interacting with the select control.

## 3.0.2

- [patch] Updated dependencies [d662caa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d662caa)
  - @atlaskit/icon@11.3.0
  - @atlaskit/modal-dialog@4.0.5
  - @atlaskit/checkbox@2.0.2
  - @atlaskit/button@7.2.5
  - @atlaskit/theme@3.2.2
  - @atlaskit/docs@3.0.4

## 3.0.1

- [patch] Fix imports for creaetable, async and async creatable selects [92ae24e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/92ae24e)

## 3.0.0

- [major] Update to react-select@beta.4, removed developer preview warning. Stable release [d05b9e5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d05b9e5)
- BREAKING: Removed `maxValueHeight` prop and functionality, this is a breaking change that affects multi -value components predominantly. The control will now expand to accommodate contained values, as opposed to constraining to a maxValueHeight with a scrollable area.
- `Async`, `Creatable`, `AsyncCreatable` components now imported from `react-select` and not from `react-select/lib/*`.
- Internal cx implementation refactored to reduce specificity of css-in-js base styles. By default these base-styles will be overridden by css styles associated to provided class names.
- Fixed animated component bug where setting isSearchable to false would throw warnings in the console.
- Added a `classNamePrefix` prop which now controls the class names applied to internal components, `className` prop is now intended for adding a className to the bounding selectContainer only. If the classNamePrefix field is left undefined, then the className prop will currently fulfill both these roles, however a warning will be shown and _this functionality is intended to be deprecated in future releases_.
- Added --is-disabled className modifier to the default Option component
- Fixed IE11 issues around element overflow in the menuList, and scroll indicators in the control.
- Added multi-value keyboard navigation using left and right arrow keys.
- Added fix to ensure focus is on the input when the menu opens.

## 2.0.2

- [patch] Release to align @atlaskit/select styles and theme with ADG3 guideline. [7468739](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7468739)

## 2.0.0

- [major] Classname prop added, if this is given a value we surface logical semantic classes prefixed with the supplied value to enable styling via css otherwise a generated hash value is used.W e also now export icon components from the components object to facilitate easier customisation. Previously this behaviour was enforced, and classes were given semantic values and prefixed with ‘react-select’ by default (i.e. react-select\_\_dropdown-indicator) . See the following commit for details https://github.com/JedWatson/react-select/commit/109d1aadb585cc5fd113d03309d80bd59b5eaf9b Also in this release, IE 11 display bugfix for centre alligned elements in a flex parent, fix for react15 compatibility, fix for bug where long tail values were not being truncated properly in the control [8d19b24](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8d19b24)

## 1.3.1

- [patch] Update react-select version to fix flowtype errors [240a083](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/240a083)

## 1.3.0

- [minor] Update react-select dep in @atlaskit/select to alpha.10 [4073781](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4073781)

## 1.2.0

- [minor] @atlaskit/select now exports the createFilter [df7d845](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df7d845)

## 1.1.1

- [patch] Re-export some exports from react-select for use in other packages. [eda9906](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/eda9906)

## 1.1.0

- [minor] Added default text-truncation behaviour for options in radio and checkbox selects [5b37cc1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5b37cc1)

## 1.0.0

- [major] Bump to React 16.3. [4251858](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4251858)

## 0.3.0

- [minor] Added Creatable and AsyncCreatable exports, added menuPortalTarget prop to portal select menu, updated selects to expose intenral focus and blur methods' [a7b06f4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a7b06f4)

## 0.2.1

- [patch] Re-releasing due to potentially broken babel release [9ed0bba](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9ed0bba)

## 0.2.0

- [minor] Update styled-components dependency to support versions 1.4.6 - 3 [ceccf30](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ceccf30)

## 0.1.7

- [patch] updated the repository url to https://bitbucket.org/atlassian/atlaskit-mk-2 [1e57e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e57e5a)

## 0.1.6

- [patch] Update to alpha.6 and cleanup CountrySelect [c972f53](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c972f53)

## 0.1.5

- [patch] Packages Flow types for elements components [3111e74](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3111e74)

## 0.1.4

- [patch] misc updates to select package [bd000c7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bd000c7)

## 0.1.3

- [patch] added temporary SelectWraper to demonstrate validation [0ef5343](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0ef5343)

## 0.1.2

- [patch] Resolved low hanging flow errors in field-base field-text comment icon item and website, \$ [007de27](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/007de27)

## 0.1.1

- [patch] initial release of the select package [1b8e01d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1b8e01d)

## 0.1.0

- Initial release
