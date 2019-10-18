# @atlaskit/status

## 0.9.16

- Updated dependencies [ae4f336a3a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ae4f336a3a):
  - @atlaskit/i18n-tools@0.6.0
  - @atlaskit/editor-test-helpers@10.1.2

## 0.9.15

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 0.9.14

### Patch Changes

- [patch][a2d0043716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a2d0043716):

  Updated version of analytics-next to fix potential incompatibilities with TS 3.6

## 0.9.13

- Updated dependencies [80adfefba2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80adfefba2):
  - @atlaskit/editor-test-helpers@10.0.0

## 0.9.12

### Patch Changes

- [patch][c8bb1c7896](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c8bb1c7896):

  Fix some packages having a 'modules' field in package.json rather than 'module'

## 0.9.11

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 0.9.10

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 0.9.9

### Patch Changes

- [patch][926b43142b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/926b43142b):

  Analytics-next has been converted to Typescript. Typescript consumers will now get static type safety. Flow types are no longer provided. No behavioural changes.

  **Breaking changes**

  - `withAnalyticsForSumTypeProps` alias has been removed, please use `withAnalyticsEvents`
  - `AnalyticsContextWrappedComp` alias has been removed, please use `withAnalyticsContext`

  **Breaking changes to TypeScript annotations**

  - `withAnalyticsEvents` now infers proptypes automatically, consumers no longer need to provide props as a generic type.
  - `withAnalyticsContext` now infers proptypes automatically, consumers no longer need to provide props as a generic type.
  - Type `WithAnalyticsEventProps` has been renamed to `WithAnalyticsEventsProps` to match source code
  - Type `CreateUIAnalyticsEventSignature` has been renamed to `CreateUIAnalyticsEvent` to match source code
  - Type `UIAnalyticsEventHandlerSignature` has been renamed to `UIAnalyticsEventHandler` to match source code
  - Type `AnalyticsEventsPayload` has been renamed to `AnalyticsEventPayload`
  - Type `ObjectType` has been removed, please use `Record<string, any>` or `[key: string]: any`
  - Type `UIAnalyticsEventInterface` has been removed, please use `UIAnalyticsEvent`
  - Type `AnalyticsEventInterface` has been removed, please use `AnalyticsEvent`
  - Type `CreateAndFireEventFunction` removed and should now be inferred by TypeScript
  - Type `AnalyticsEventUpdater` removed and should now be inferred by TypeScript

## 0.9.8

### Patch Changes

- [patch][688f2957ca](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/688f2957ca):

  Fixes various TypeScript errors which were previously failing silently

## 0.9.7

### Patch Changes

- [patch][9f8ab1084b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9f8ab1084b):

  Consume analytics-next ts type definitions as an ambient declaration.

## 0.9.6

### Patch Changes

- [patch][bbff8a7d87](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bbff8a7d87):

  Fixes bug, missing version.json file

## 0.9.5

### Patch Changes

- [patch][18dfac7332](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18dfac7332):

  In this PR, we are:

  - Re-introducing dist build folders
  - Adding back cjs
  - Replacing es5 by cjs and es2015 by esm
  - Creating folders at the root for entry-points
  - Removing the generation of the entry-points at the root
    Please see this [ticket](https://product-fabric.atlassian.net/browse/BUILDTOOLS-118) or this [page](https://hello.atlassian.net/wiki/spaces/FED/pages/452325500/Finishing+Atlaskit+multiple+entry+points) for further details

## 0.9.4

### Patch Changes

- [patch][d0db01b410](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d0db01b410):

  TypeScript users of withAnalyticsEvents and withAnalyticsContext are now required to provide props as a generic type. This is so that TypeScript can correctly calculate the props and defaultProps of the returned component.

  Before:

  ```typescript
  withAnalyticsEvents()(Button) as ComponentClass<Props>;
  ```

  After:

  ```typescript
  withAnalyticsEvents<Props>()(Button);
  ```

## 0.9.3

- Updated dependencies [06326ef3f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06326ef3f7):
  - @atlaskit/docs@8.1.3
  - @atlaskit/editor-test-helpers@9.5.2
  - @atlaskit/icon@19.0.0

## 0.9.2

- Updated dependencies [cfc3c8adb3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cfc3c8adb3):
  - @atlaskit/docs@8.1.2
  - @atlaskit/editor-test-helpers@9.3.9
  - @atlaskit/icon@18.0.0

## 0.9.1

- Updated dependencies [ed41cac6ac](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ed41cac6ac):
  - @atlaskit/theme@9.0.3
  - @atlaskit/lozenge@9.0.0

## 0.9.0

- [minor][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 0.8.3

- Updated dependencies [9c0b4744be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0b4744be):
  - @atlaskit/docs@7.0.3
  - @atlaskit/field-text@8.0.3
  - @atlaskit/icon@16.0.9
  - @atlaskit/lozenge@7.0.2
  - @atlaskit/theme@8.1.7

## 0.8.2

- [patch][3f28e6443c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3f28e6443c):

  - @atlaskit/analytics-next-types is deprecated. Now you can use types for @atlaskit/analytics-next supplied from itself.

## 0.8.1

- [patch][351e23aeb5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/351e23aeb5):

  - ED-6102: fixed inline node deletion on Android

## 0.8.0

- [minor][97abf5e006](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97abf5e006):

  - Support entry points for Status and StatusPicker for selective imports

## 0.7.2

- Updated dependencies [b0210d7ccc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b0210d7ccc):
  - @atlaskit/elements-test-helpers@0.5.0

## 0.7.1

- [patch][1bcaa1b991](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1bcaa1b991):

  - Add npmignore for index.ts to prevent some jest tests from resolving that instead of index.js

## 0.7.0

- [minor][b684722884](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b684722884):

  - improvement of SSR tests and examples for Fabric Elements

## 0.6.0

- [minor][9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):

  - Dropped ES5 distributables from the typescript packages

## 0.5.2

- Updated dependencies [7261577953](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7261577953):
  - @atlaskit/elements-test-helpers@0.3.0

## 0.5.1

- Updated dependencies [76299208e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76299208e6):
  - @atlaskit/icon@16.0.4
  - @atlaskit/analytics-gas-types@3.2.5
  - @atlaskit/docs@7.0.0
  - @atlaskit/analytics-next@4.0.0
  - @atlaskit/field-text@8.0.0
  - @atlaskit/lozenge@7.0.0
  - @atlaskit/theme@8.0.0

## 0.5.0

- [minor][4072865c1c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4072865c1c):

  - added SSR tests to task-decision

## 0.4.0

- [minor][36bb743af0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/36bb743af0):

  - added/cleaned up ssr tests

## 0.3.8

- [patch][e27ba4f443](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e27ba4f443):

  - added SSR tests to status

## 0.3.7

- [patch][0e4dedafc1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0e4dedafc1):

  - Fix incorrect dependency listings

## 0.3.6

- Updated dependencies [4af5bd2a58](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4af5bd2a58):
  - @atlaskit/editor-test-helpers@7.0.0

## 0.3.5

- [patch][1856738865](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1856738865):

  - Update status picker example to be interactive

## 0.3.4

- [patch][109cf449d6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/109cf449d6):

  - enable noImplicitAny for status. fix related issues

## 0.3.3

- [patch][9696b18dec](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9696b18dec):

  - disabled automatic correction and spelling in the StatusPicker texfield (safari bug)

## 0.3.2

- Updated dependencies [d7ef59d432](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d7ef59d432):
  - @atlaskit/docs@6.0.1
  - @atlaskit/icon@16.0.0

## 0.3.1

- [patch][7d9ccd7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7d9ccd7):

  - fixed copy/paste status from renderer to editor

## 0.3.0

- [minor][00c648e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/00c648e):

  - fixed typo in i18n messages and code improvements

- [minor][a17bb0e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a17bb0e):

  - added i18n translations

- [minor][99f08a0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/99f08a0):

  - added i18n support to Fabric Status

## 0.2.11

- [patch][d3f3e19](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d3f3e19):

  - restored StatusContainer to editor-core, avoid re-rendering on event handlers, removed unused props in the renderer

- [patch][44cc61d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/44cc61d):

  - added native status analytics

## 0.2.10

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/field-text@7.0.18
  - @atlaskit/icon@15.0.2
  - @atlaskit/lozenge@6.2.4
  - @atlaskit/theme@7.0.1
  - @atlaskit/docs@6.0.0

## 0.2.9

- [patch][48640fb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/48640fb):

  - FS-3227 - Prevent status popup focus from scrolling editor

## 0.2.8

- Updated dependencies [d13242d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13242d):
  - @atlaskit/docs@5.2.3
  - @atlaskit/field-text@7.0.16
  - @atlaskit/icon@15.0.1
  - @atlaskit/theme@7.0.0
  - @atlaskit/lozenge@6.2.3

## 0.2.7

- [patch][3061b52](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3061b52):

  - AK-5723 - adjust files in package.json to ensure correct publishing of dist/package.json

## 0.2.6

- Updated dependencies [ab9b69c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ab9b69c):
  - @atlaskit/docs@5.2.2
  - @atlaskit/icon@15.0.0

## 0.2.5

- [patch][d518ce0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d518ce0):

  - FS-3118 - Only focus status input field on initial insertion. FS-3158 - Fix focus flicker in status input field.

## 0.2.4

- [patch][36c362f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/36c362f):

  - FS-3174 - Fix usage of gridSize() and borderRadius()

## 0.2.3

- [patch][527b954](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/527b954):

  - FS-3174 - Remove usage of util-shared-styles from elements components

## 0.2.2

- [patch] ED-5529 Fix JSON Schema [d286ab3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d286ab3)

## 0.2.1

- [patch] Updated dependencies [65c6514](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/65c6514)
  - @atlaskit/docs@5.0.8
  - @atlaskit/icon@14.0.0

## 0.2.0

- [minor] FS-2963 When inserting a status, I can pick a colour from a predefined colour picker [a633d77](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a633d77)
- [minor] FS-2963 Change status color [547b3d9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/547b3d9)

## 0.1.0

- [minor] FS-2961 Introduce status component and status node in editor [7fe2b0a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7fe2b0a)
