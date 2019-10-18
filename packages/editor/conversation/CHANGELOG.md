# @atlaskit/conversation

## 15.2.15

### Patch Changes

- [patch][cc28419139](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc28419139):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.- [patch][ae4f336a3a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ae4f336a3a):

**FABDODGEM-13 Editor Damask Release** - [Internal post](http://go.atlassian.com/damask-release)

**BREAKING CHANGES**

- **Media:** Removed deprecated "context" property from media components in favor of "mediaClientConfig". This affects all public media UI components.
  - https://product-fabric.atlassian.net/browse/MS-2038
- **Tasks & Decisions:** Removed containerAri for task-decisions components.
  - https://product-fabric.atlassian.net/browse/ED-7631
- **Renderer:** Adapts to task-decision changes.
- **Editor Mobile Bridge:** Adapts to task-decision changes.
- **Util Data Test:** Adapts to task-decision changes.

---

**Affected Editor Components:**

tables, media, mobile, emoji, tasks & decisions, analytics

**Editor**

- Support nested actions in stage-0 schema; Change DOM representation of actions
  - https://product-fabric.atlassian.net/browse/ED-7674
- Updated i18n translations
  - https://product-fabric.atlassian.net/browse/ED-7750
- Improved analytics & crash reporting (via a new error boundary)
  - https://product-fabric.atlassian.net/browse/ED-7766
  - https://product-fabric.atlassian.net/browse/ED-7806
- Improvements to heading anchor links.
  - https://product-fabric.atlassian.net/browse/ED-7849
  - https://product-fabric.atlassian.net/browse/ED-7860
- Copy/Paste improvements
  - https://product-fabric.atlassian.net/browse/ED-7840
  - https://product-fabric.atlassian.net/browse/ED-7849
- Fixes for the selection state of Smart links.
  - https://product-fabric.atlassian.net/browse/ED-7602?src=confmacro
- Improvements for table resizing & column creation.
  - https://product-fabric.atlassian.net/browse/ED-7698
  - https://product-fabric.atlassian.net/browse/ED-7319
  - https://product-fabric.atlassian.net/browse/ED-7799

**Mobile**

- GASv3 Analytics Events are now relayed from the web to the native context, ready for dispatching.
  - https://product-fabric.atlassian.net/browse/FM-2502
- Hybrid Renderer Recycler view now handles invalid ADF nodes gracefully.
  - https://product-fabric.atlassian.net/browse/FM-2370

**Media**

- Improved analytics
  - https://product-fabric.atlassian.net/browse/MS-2036
  - https://product-fabric.atlassian.net/browse/MS-2145
  - https://product-fabric.atlassian.net/browse/MS-2416
  - https://product-fabric.atlassian.net/browse/MS-2487
- Added shouldOpenMediaViewer property to renderer
  - https://product-fabric.atlassian.net/browse/MS-2393
- Implemented analytics for file copy
  - https://product-fabric.atlassian.net/browse/MS-2036
- New `media-viewed` event dispatched when media is interacted with via the media card or viewer.
  - https://product-fabric.atlassian.net/browse/MS-2284
- Support for `alt` text attribute on media image elements.
  - https://product-fabric.atlassian.net/browse/ED-7776

**i18n-tools**

Bumped dependencies.

- Updated dependencies [4585681e3d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4585681e3d):
- Updated dependencies [bd94b1d552](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bd94b1d552):
  - @atlaskit/renderer@52.0.0
  - @atlaskit/editor-core@113.2.0
  - @atlaskit/editor-common@41.2.0
  - @atlaskit/reactions@17.2.4
  - @atlaskit/util-data-test@13.0.0

## 15.2.14

### Patch Changes

- [patch][848999c42e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/848999c42e):

  Update src pointing to index.tsx instead of index.ts.

## 15.2.13

- Updated dependencies [2376ada634](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2376ada634):
  - @atlaskit/comment@9.0.0

## 15.2.12

### Patch Changes

- [patch][a2d0043716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a2d0043716):

  Updated version of analytics-next to fix potential incompatibilities with TS 3.6

## 15.2.11

- Updated dependencies [166eb02474](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/166eb02474):
- Updated dependencies [40ead387ef](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/40ead387ef):
- Updated dependencies [80adfefba2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80adfefba2):
  - @atlaskit/comment@8.0.14
  - @atlaskit/editor-core@113.0.0
  - @atlaskit/renderer@51.0.0
  - @atlaskit/reactions@17.2.1
  - @atlaskit/editor-common@41.0.0

## 15.2.10

- Updated dependencies [8d0f37c23e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8d0f37c23e):
  - @atlaskit/comment@8.0.13
  - @atlaskit/single-select@8.0.13
  - @atlaskit/editor-core@112.44.5
  - @atlaskit/renderer@50.0.2
  - @atlaskit/avatar@17.0.0

## 15.2.9

- Updated dependencies [08ec269915](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/08ec269915):
  - @atlaskit/editor-core@112.44.2
  - @atlaskit/editor-common@40.0.0
  - @atlaskit/renderer@50.0.0

## 15.2.8

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 15.2.7

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 15.2.6

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

## 15.2.5

### Patch Changes

- [patch][9f8ab1084b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9f8ab1084b):

  Consume analytics-next ts type definitions as an ambient declaration.

## 15.2.4

### Patch Changes

- [patch][bbff8a7d87](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bbff8a7d87):

  Fixes bug, missing version.json file

## 15.2.3

### Patch Changes

- [patch][18dfac7332](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18dfac7332):

  In this PR, we are:

  - Re-introducing dist build folders
  - Adding back cjs
  - Replacing es5 by cjs and es2015 by esm
  - Creating folders at the root for entry-points
  - Removing the generation of the entry-points at the root
    Please see this [ticket](https://product-fabric.atlassian.net/browse/BUILDTOOLS-118) or this [page](https://hello.atlassian.net/wiki/spaces/FED/pages/452325500/Finishing+Atlaskit+multiple+entry+points) for further details

## 15.2.2

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

## 15.2.1

- Updated dependencies [ff85c1c706](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ff85c1c706):
  - @atlaskit/editor-core@112.13.9
  - @atlaskit/renderer@49.0.0

## 15.2.0

- [minor][455c179e06](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/455c179e06):

  - Allows to set a canModerateComments prop to allow delete comments by users other than the author of the comment

## 15.1.1

- [patch][5d840d3b0a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5d840d3b0a):

  - Conversation editor long text wrapping fix

## 15.1.0

- [minor][79f0ef0601](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/79f0ef0601):

  - Use strict tsconfig to compile editor packages

## 15.0.2

- Updated dependencies [5e4ff01e4c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5e4ff01e4c):
  - @atlaskit/comment@8.0.2
  - @atlaskit/editor-core@112.0.0

## 15.0.1

- Updated dependencies [154372926b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/154372926b):
  - @atlaskit/comment@8.0.1
  - @atlaskit/editor-core@111.0.0

## 15.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 14.3.2

- Updated dependencies [a1192ef860](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a1192ef860):
  - @atlaskit/editor-common@38.0.0
  - @atlaskit/editor-core@109.0.0
  - @atlaskit/renderer@47.0.0
  - @atlaskit/comment@7.0.8
  - @atlaskit/reactions@16.1.10
  - @atlaskit/util-data-test@11.1.9

## 14.3.1

- Updated dependencies [e7292ab444](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7292ab444):
  - @atlaskit/editor-common@37.0.0
  - @atlaskit/editor-core@108.0.0
  - @atlaskit/renderer@46.0.0
  - @atlaskit/comment@7.0.7
  - @atlaskit/reactions@16.1.9
  - @atlaskit/util-data-test@11.1.8

## 14.3.0

- [minor][0e8d32ceb6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0e8d32ceb6):

  - add onCommentPermalinkClick prop so consumers can handle that click for scrolling or other purpose

## 14.2.2

- [patch][0a4ccaafae](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0a4ccaafae):

  - Bump tslib

- [patch][0ac39bd2dd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0ac39bd2dd):

  - Bump tslib to 1.9

## 14.2.1

- [patch][fdbc4744b3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fdbc4744b3):

  - Fixed infinite recursion bug

## 14.2.0

- [minor][8cd293e322](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8cd293e322):

  - Exposing lifecycle hooks for Conversation Editor

## 14.1.1

- [patch][d13fad66df](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13fad66df):

  - Enable esModuleInterop for typescript, this allows correct use of default exports

## 14.1.0

- [minor][33563e651d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/33563e651d):

  - Add support for user-state lozenges

## 14.0.2

- Updated dependencies [c2c36de22b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c2c36de22b):
  - @atlaskit/editor-common@36.0.0
  - @atlaskit/editor-core@107.0.0
  - @atlaskit/renderer@45.0.0
  - @atlaskit/comment@7.0.4
  - @atlaskit/reactions@16.1.3
  - @atlaskit/util-data-test@11.1.5

## 14.0.1

- [patch][1bcaa1b991](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1bcaa1b991):

  - Add npmignore for index.ts to prevent some jest tests from resolving that instead of index.js

## 14.0.0

- [major][9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):

  - Dropped ES5 distributables from the typescript packages

## 13.0.1

- Updated dependencies [7ab3e93996](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7ab3e93996):
  - @atlaskit/editor-common@34.0.0
  - @atlaskit/editor-core@105.0.0
  - @atlaskit/renderer@43.0.0
  - @atlaskit/comment@7.0.2
  - @atlaskit/reactions@15.6.2
  - @atlaskit/util-data-test@10.2.5

## 13.0.0

- [major][68247a2490](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/68247a2490):

  - The internal mechanism for handling successfully retrieved conversations now resets the internal store to that collection instead of concatenating them to pre-existing ones.

## 12.2.0

- [minor][55d8c2a898](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/55d8c2a898):

  - noImplicitAny for @atlaskit/conversation

## 12.1.5

- Updated dependencies [4d17df92f8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4d17df92f8):
  - @atlaskit/comment@7.0.1
  - @atlaskit/editor-core@104.0.0
  - @atlaskit/renderer@42.0.0

## 12.1.4

- Updated dependencies [76299208e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76299208e6):
  - @atlaskit/editor-core@103.0.3
  - @atlaskit/renderer@41.2.1
  - @atlaskit/analytics-listeners@4.2.1
  - @atlaskit/reactions@15.6.1
  - @atlaskit/util-data-test@10.2.3
  - @atlaskit/editor-common@33.0.3
  - @atlaskit/docs@7.0.0
  - @atlaskit/analytics-next@4.0.0
  - @atlaskit/avatar@15.0.0
  - @atlaskit/comment@7.0.0
  - @atlaskit/single-select@7.0.0

## 12.1.3

- Updated dependencies [60f0ad9a7e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/60f0ad9a7e):
  - @atlaskit/comment@6.0.45
  - @atlaskit/editor-core@103.0.0

## 12.1.2

- [patch][6eb409e5cc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6eb409e5cc):

  - Pass portal prop through to nested comments in conversation threads and re-render comments when it changes

## 12.1.1

- Updated dependencies [4aee5f3cec](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4aee5f3cec):
  - @atlaskit/editor-common@33.0.0
  - @atlaskit/editor-core@102.0.0
  - @atlaskit/renderer@41.0.0
  - @atlaskit/comment@6.0.44
  - @atlaskit/reactions@15.5.1
  - @atlaskit/util-data-test@10.2.2

## 12.1.0

- [minor][b9a541a266](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b9a541a266):

  - Add ability to pass down a portal prop to the renderer

## 12.0.2

- [patch][a3875fd978](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a3875fd978):

  - Don't auto scroll editor into view on reply

## 12.0.1

- Updated dependencies [4a84fc40e0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4a84fc40e0):
  - @atlaskit/comment@6.0.43
  - @atlaskit/editor-core@101.0.0
  - @atlaskit/renderer@40.0.0

## 12.0.0

- [major][dce41f798f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dce41f798f):

  - use objectId to identity the document and make containerId as optional

## 11.1.16

- Updated dependencies [4af5bd2a58](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4af5bd2a58):
  - @atlaskit/comment@6.0.42
  - @atlaskit/editor-common@32.0.2
  - @atlaskit/renderer@39.0.2
  - @atlaskit/reactions@15.4.2
  - @atlaskit/editor-core@100.0.0

## 11.1.15

- Updated dependencies [fc6164c8c2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fc6164c8c2):
  - @atlaskit/editor-common@32.0.0
  - @atlaskit/editor-core@99.0.0
  - @atlaskit/renderer@39.0.0
  - @atlaskit/comment@6.0.41
  - @atlaskit/reactions@15.4.1
  - @atlaskit/util-data-test@10.2.1

## 11.1.14

- Updated dependencies [69c8d0c19c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/69c8d0c19c):
  - @atlaskit/editor-common@31.0.0
  - @atlaskit/editor-core@98.0.0
  - @atlaskit/renderer@38.0.0
  - @atlaskit/comment@6.0.40
  - @atlaskit/reactions@15.3.4
  - @atlaskit/util-data-test@10.0.36

## 11.1.13

- Updated dependencies [85d5d168fd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/85d5d168fd):
  - @atlaskit/editor-common@30.0.0
  - @atlaskit/editor-core@97.0.0
  - @atlaskit/renderer@37.0.0
  - @atlaskit/comment@6.0.38
  - @atlaskit/reactions@15.3.2
  - @atlaskit/util-data-test@10.0.34

## 11.1.12

- Updated dependencies [dadef80](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dadef80):
  - @atlaskit/editor-common@29.0.0
  - @atlaskit/editor-core@96.0.0
  - @atlaskit/renderer@36.0.0
  - @atlaskit/comment@6.0.37
  - @atlaskit/reactions@15.3.1
  - @atlaskit/util-data-test@10.0.33

## 11.1.11

- Updated dependencies [0c116d6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0c116d6):
  - @atlaskit/comment@6.0.35
  - @atlaskit/editor-common@28.0.2
  - @atlaskit/renderer@35.0.1
  - @atlaskit/util-data-test@10.0.32
  - @atlaskit/editor-core@95.0.0

## 11.1.10

- Updated dependencies [cbb8cb5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cbb8cb5):
  - @atlaskit/editor-common@28.0.0
  - @atlaskit/editor-core@94.0.0
  - @atlaskit/renderer@35.0.0
  - @atlaskit/comment@6.0.34
  - @atlaskit/reactions@15.2.2
  - @atlaskit/util-data-test@10.0.31

## 11.1.9

- Updated dependencies [72d37fb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/72d37fb):
  - @atlaskit/editor-common@27.0.0
  - @atlaskit/editor-core@93.0.0
  - @atlaskit/renderer@34.0.0
  - @atlaskit/comment@6.0.33
  - @atlaskit/reactions@15.2.1
  - @atlaskit/util-data-test@10.0.30

## 11.1.8

- Updated dependencies [e858305](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e858305):
  - @atlaskit/renderer@33.0.4
  - @atlaskit/editor-common@26.0.0
  - @atlaskit/editor-core@92.0.19

## 11.1.7

- Updated dependencies [b3738ea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b3738ea):
  - @atlaskit/editor-common@25.0.0
  - @atlaskit/editor-core@92.0.0
  - @atlaskit/renderer@33.0.0
  - @atlaskit/comment@6.0.32
  - @atlaskit/reactions@15.0.11
  - @atlaskit/util-data-test@10.0.28

## 11.1.6

- Updated dependencies [1205725](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1205725):
  - @atlaskit/editor-common@24.0.0
  - @atlaskit/editor-core@91.1.0
  - @atlaskit/renderer@32.1.0

## 11.1.5

- Updated dependencies [80f765b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80f765b):
  - @atlaskit/editor-common@23.0.0
  - @atlaskit/editor-core@91.0.0
  - @atlaskit/renderer@32.0.0
  - @atlaskit/comment@6.0.31
  - @atlaskit/reactions@15.0.10
  - @atlaskit/util-data-test@10.0.26

## 11.1.4

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/analytics-next@3.1.2
  - @atlaskit/avatar@14.1.7
  - @atlaskit/comment@6.0.30
  - @atlaskit/single-select@6.0.11
  - @atlaskit/editor-core@90.3.15
  - @atlaskit/renderer@31.1.3
  - @atlaskit/analytics-listeners@4.1.4
  - @atlaskit/reactions@15.0.9
  - @atlaskit/util-data-test@10.0.25
  - @atlaskit/docs@6.0.0

## 11.1.3

- Updated dependencies [3a7224a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3a7224a):
  - @atlaskit/comment@6.0.28
  - @atlaskit/editor-core@90.0.0

## 11.1.2

- Updated dependencies [7e8b4b9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e8b4b9):
  - @atlaskit/editor-common@22.0.0
  - @atlaskit/editor-core@89.0.0
  - @atlaskit/renderer@31.0.0
  - @atlaskit/comment@6.0.25
  - @atlaskit/reactions@15.0.4
  - @atlaskit/util-data-test@10.0.21

## 11.1.1

- Updated dependencies [2c21466](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2c21466):
  - @atlaskit/editor-common@21.0.0
  - @atlaskit/editor-core@88.0.0
  - @atlaskit/renderer@30.0.0
  - @atlaskit/comment@6.0.24
  - @atlaskit/reactions@15.0.3
  - @atlaskit/util-data-test@10.0.20

## 11.1.0

- [minor] adds a new saveDraft abstract method on the ConversationResource which will be implemented in Bitbucket to enable storing of comment drafts in localStorage [66e2375](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/66e2375)

## 11.0.2

- [patch] Updated dependencies [052ce89](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/052ce89)
  - @atlaskit/comment@6.0.23
  - @atlaskit/editor-core@87.0.0
  - @atlaskit/editor-common@20.1.2

## 11.0.1

- [patch] Updated dependencies [b1ce691](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b1ce691)
  - @atlaskit/editor-common@20.0.0
  - @atlaskit/editor-core@86.0.0
  - @atlaskit/renderer@29.0.0
  - @atlaskit/comment@6.0.21
  - @atlaskit/reactions@15.0.1
  - @atlaskit/util-data-test@10.0.16

## 11.0.0

- [major] Fix reactions. Remove context and receive store as a prop. [b1de9c8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b1de9c8)

## 10.0.6

- [patch] Updated dependencies [6e510d8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6e510d8)
  - @atlaskit/editor-core@85.5.1
  - @atlaskit/editor-common@19.3.2
  - @atlaskit/renderer@28.0.0

## 10.0.5

- [patch] Updated dependencies [2afa60d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2afa60d)
  - @atlaskit/editor-common@19.0.0
  - @atlaskit/editor-core@85.0.0
  - @atlaskit/renderer@27.0.0
  - @atlaskit/comment@6.0.20
  - @atlaskit/reactions@14.0.5
  - @atlaskit/util-data-test@10.0.14

## 10.0.4

- [patch] Upgrade react-syntax-highlighter again and use async loaded prism [260d66a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/260d66a)

## 10.0.3

- [patch] Updated dependencies [8b2c4d3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8b2c4d3)
- [patch] Updated dependencies [3302d51](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3302d51)
  - @atlaskit/editor-common@18.0.0
  - @atlaskit/editor-core@84.0.0
  - @atlaskit/renderer@26.0.0
  - @atlaskit/comment@6.0.19
  - @atlaskit/reactions@14.0.3
  - @atlaskit/util-data-test@10.0.12

## 10.0.2

- [patch] Updated dependencies [23c7eca](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/23c7eca)
  - @atlaskit/comment@6.0.18
  - @atlaskit/util-data-test@10.0.11
  - @atlaskit/editor-core@83.0.0
  - @atlaskit/renderer@25.0.0

## 10.0.1

- [patch] Fix allowFeedbackAndHelpButtons prop not being passed through to the CommentContainer by Conversations [76f20a3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76f20a3)

## 10.0.0

- [major] Reactions state management revisited [7e8d079](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e8d079)
- [major] Updated dependencies [7e8d079](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e8d079)
  - @atlaskit/reactions@14.0.0

## 9.3.8

- [patch] Updated dependencies [ef76f1f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ef76f1f)
  - @atlaskit/comment@6.0.16
  - @atlaskit/editor-common@17.0.1
  - @atlaskit/editor-core@82.0.0

## 9.3.7

- [patch] Updated dependencies [927ae63](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/927ae63)
  - @atlaskit/editor-common@17.0.0
  - @atlaskit/editor-core@81.0.0
  - @atlaskit/reactions@13.1.3
  - @atlaskit/util-data-test@10.0.10
  - @atlaskit/renderer@24.0.0
  - @atlaskit/comment@6.0.15

## 9.3.6

- [patch] Updated dependencies [2a6410f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2a6410f)
  - @atlaskit/editor-common@16.2.0
  - @atlaskit/editor-core@80.5.0
  - @atlaskit/renderer@23.0.0

## 9.3.5

- [patch] use new tsconfig for typechecking [09df171](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/09df171)

## 9.3.4

- [patch] Updated dependencies [6e1d642](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6e1d642)
  - @atlaskit/editor-common@16.0.0
  - @atlaskit/editor-core@80.0.0
  - @atlaskit/renderer@22.0.0
  - @atlaskit/comment@6.0.14
  - @atlaskit/reactions@13.1.1
  - @atlaskit/util-data-test@10.0.9

## 9.3.3

- [patch] Add module mainField to packagejson to get codesplitting to work in BBCloud [f8c92b0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f8c92b0)

## 9.3.2

- [patch] Updated dependencies [7545979](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7545979)
  - @atlaskit/editor-common@15.0.0
  - @atlaskit/editor-core@79.0.0
  - @atlaskit/renderer@21.0.0
  - @atlaskit/comment@6.0.12
  - @atlaskit/reactions@13.0.9
  - @atlaskit/util-data-test@10.0.8

## 9.3.1

- [patch] Updated dependencies [90ba6bd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/90ba6bd)
  - @atlaskit/analytics-listeners@4.0.0

## 9.3.0

- [minor] Add analytics track events to Conversation component [2d6ab8d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2d6ab8d)

## 9.2.1

- [patch] Updated dependencies [911a570](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/911a570)
  - @atlaskit/renderer@20.1.1
  - @atlaskit/editor-core@78.0.0
  - @atlaskit/comment@6.0.11

## 9.2.0

- [minor] Adds option to disable heading ids in renderer, and disable them by default in conversations [efcca1a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/efcca1a)

## 9.1.5

- [patch] Updated dependencies [b12f7e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b12f7e6)
  - @atlaskit/renderer@20.0.11
  - @atlaskit/util-data-test@10.0.7
  - @atlaskit/editor-common@14.0.11
  - @atlaskit/reactions@13.0.8
  - @atlaskit/editor-core@77.1.4
  - @atlaskit/comment@6.0.8

## 9.1.4

- [patch] Add next gen analytics to conversation component [dfa100e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dfa100e)
- [patch] Add nextgen analytics to conversation component [9e2626f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9e2626f)
- [patch] Updated dependencies [dfa100e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dfa100e)
  - @atlaskit/analytics-listeners@3.3.1

## 9.1.3

- [patch] update the dependency of react-dom to 16.4.2 due to vulnerability in previous versions read https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html for details [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
- [none] Updated dependencies [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
  - @atlaskit/util-data-test@10.0.4
  - @atlaskit/reactions@13.0.5
  - @atlaskit/editor-core@77.0.2
  - @atlaskit/comment@6.0.6
  - @atlaskit/editor-common@14.0.1
  - @atlaskit/avatar@14.0.6

## 9.1.2

- [none] Updated dependencies [597e0bd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/597e0bd)
  - @atlaskit/renderer@20.0.0
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/reactions@13.0.4
  - @atlaskit/editor-core@77.0.0
  - @atlaskit/comment@6.0.5
  - @atlaskit/editor-common@14.0.0
- [none] Updated dependencies [61df453](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/61df453)
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/editor-common@14.0.0
  - @atlaskit/reactions@13.0.4
  - @atlaskit/renderer@20.0.0
  - @atlaskit/editor-core@77.0.0
  - @atlaskit/comment@6.0.5
- [none] Updated dependencies [a95ee92](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a95ee92)
  - @atlaskit/reactions@13.0.4
- [none] Updated dependencies [812a39c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/812a39c)
  - @atlaskit/renderer@20.0.0
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/reactions@13.0.4
  - @atlaskit/editor-core@77.0.0
  - @atlaskit/comment@6.0.5
  - @atlaskit/editor-common@14.0.0
- [none] Updated dependencies [c8eb097](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c8eb097)
  - @atlaskit/renderer@20.0.0
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/editor-common@14.0.0
  - @atlaskit/reactions@13.0.4
  - @atlaskit/editor-core@77.0.0
  - @atlaskit/comment@6.0.5
- [patch] Updated dependencies [d02746f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d02746f)
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/reactions@13.0.4
  - @atlaskit/editor-common@14.0.0
  - @atlaskit/renderer@20.0.0
  - @atlaskit/editor-core@77.0.0
  - @atlaskit/comment@6.0.5

## 9.1.1

- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/renderer@19.2.6
  - @atlaskit/util-data-test@10.0.2
  - @atlaskit/reactions@13.0.3
  - @atlaskit/editor-common@13.2.7
  - @atlaskit/editor-core@76.4.5
  - @atlaskit/comment@6.0.4
  - @atlaskit/single-select@6.0.3
  - @atlaskit/docs@5.0.2
  - @atlaskit/avatar@14.0.5

## 9.1.0

- [minor] Updated dependencies [f6bf6c8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f6bf6c8)
  - @atlaskit/util-data-test@10.0.1
  - @atlaskit/renderer@19.1.0
  - @atlaskit/editor-core@76.1.0
  - @atlaskit/editor-common@13.1.0

## 9.0.1

- [none] Updated dependencies [25353c3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/25353c3)
  - @atlaskit/editor-core@76.0.0
  - @atlaskit/comment@6.0.1
- [patch] Updated dependencies [38c0543](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/38c0543)
  - @atlaskit/editor-core@76.0.0
  - @atlaskit/comment@6.0.1

## 9.0.0

- [major] Updates to React ^16.4.0 [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
- [major] Updated dependencies [563a7eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/563a7eb)
  - @atlaskit/renderer@19.0.0
  - @atlaskit/util-data-test@10.0.0
  - @atlaskit/editor-common@13.0.0
  - @atlaskit/reactions@13.0.0
  - @atlaskit/editor-core@75.0.0
  - @atlaskit/comment@6.0.0
  - @atlaskit/single-select@6.0.0
  - @atlaskit/docs@5.0.0
  - @atlaskit/avatar@14.0.0
- [major] Updated dependencies [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
  - @atlaskit/renderer@19.0.0
  - @atlaskit/util-data-test@10.0.0
  - @atlaskit/reactions@13.0.0
  - @atlaskit/editor-core@75.0.0
  - @atlaskit/comment@6.0.0
  - @atlaskit/editor-common@13.0.0
  - @atlaskit/single-select@6.0.0
  - @atlaskit/docs@5.0.0
  - @atlaskit/avatar@14.0.0

## 8.3.2

- [none] Updated dependencies [5f6ec84](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5f6ec84)
  - @atlaskit/editor-core@74.0.17
  - @atlaskit/renderer@18.2.18
  - @atlaskit/editor-common@12.0.0
- [patch] Updated dependencies [5958588](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5958588)
  - @atlaskit/editor-core@74.0.17
  - @atlaskit/renderer@18.2.18
  - @atlaskit/editor-common@12.0.0

## 8.3.1

- [patch] Updated dependencies [c98857e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c98857e)
  - @atlaskit/util-data-test@9.1.19
  - @atlaskit/renderer@18.2.17
  - @atlaskit/editor-core@74.0.16
  - @atlaskit/editor-common@11.4.6
- [patch] Updated dependencies [8a125a7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8a125a7)
  - @atlaskit/util-data-test@9.1.19
  - @atlaskit/renderer@18.2.17
  - @atlaskit/editor-core@74.0.16
  - @atlaskit/editor-common@11.4.6
- [none] Updated dependencies [cacfb53](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cacfb53)
  - @atlaskit/util-data-test@9.1.19
  - @atlaskit/renderer@18.2.17
  - @atlaskit/editor-core@74.0.16
  - @atlaskit/editor-common@11.4.6

## 8.3.0

- [minor] Adds beforeunload warning dialog when a Conversation has an open editor [aabd327](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aabd327)

## 8.2.13

- [none] Updated dependencies [da63331](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/da63331)
  - @atlaskit/editor-core@74.0.8
  - @atlaskit/single-select@5.2.5
  - @atlaskit/comment@5.0.6
  - @atlaskit/avatar@13.0.0
- [patch] Updated dependencies [7724115](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7724115)
  - @atlaskit/avatar@13.0.0
  - @atlaskit/editor-core@74.0.8
  - @atlaskit/single-select@5.2.5
  - @atlaskit/comment@5.0.6

## 8.2.12

- [patch] Updated dependencies [ddcc42f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ddcc42f)
  - @atlaskit/reactions@12.2.0

## 8.2.11

- [patch] Updated dependencies [af0cde6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/af0cde6)
  - @atlaskit/editor-core@74.0.0
  - @atlaskit/comment@5.0.5

## 8.2.10

- [none] Updated dependencies [40095d6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/40095d6)
  - @atlaskit/editor-core@73.9.29
- [patch] Updated dependencies [d520a6f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d520a6f)
  - @atlaskit/editor-core@73.9.29

## 8.2.9

- [patch] Updated dependencies [8a01bcd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8a01bcd)
  - @atlaskit/avatar@12.0.0
  - @atlaskit/editor-core@73.9.19
  - @atlaskit/single-select@5.2.4
  - @atlaskit/comment@5.0.4

## 8.2.8

- [patch] Updated dependencies [8d5053e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8d5053e)
  - @atlaskit/util-data-test@9.1.15
  - @atlaskit/renderer@18.2.9
  - @atlaskit/reactions@12.1.5
  - @atlaskit/editor-common@11.3.8
  - @atlaskit/editor-core@73.9.5
  - @atlaskit/comment@5.0.3

## 8.2.7

- [patch] Updated dependencies [0cf2f52](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0cf2f52)
  - @atlaskit/util-data-test@9.1.14
  - @atlaskit/renderer@18.2.7
  - @atlaskit/reactions@12.1.4
  - @atlaskit/editor-core@73.9.2
  - @atlaskit/comment@5.0.2
  - @atlaskit/editor-common@11.3.7

## 8.2.6

- [patch] Updated dependencies [5b79a19](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5b79a19)
  - @atlaskit/editor-core@73.8.20
  - @atlaskit/comment@5.0.1
- [none] Updated dependencies [d708792](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d708792)
  - @atlaskit/editor-core@73.8.20
  - @atlaskit/comment@5.0.1

## 8.2.5

- [patch] Updated dependencies [4faccc0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4faccc0)
  - @atlaskit/renderer@18.2.5
  - @atlaskit/editor-common@11.3.0
  - @atlaskit/editor-core@73.8.6

## 8.2.4

- [patch] Updated dependencies [8efe0af](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8efe0af)
  - @atlaskit/comment@5.0.0

## 8.2.3

- [patch] Updated dependencies [4e4825e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4e4825e)
  - @atlaskit/editor-core@73.8.0
  - @atlaskit/editor-common@11.2.6

## 8.2.2

- [patch] Clean Changelogs - remove duplicates and empty entries [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
- [none] Updated dependencies [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
  - @atlaskit/util-data-test@9.1.13
  - @atlaskit/reactions@12.1.3
  - @atlaskit/renderer@18.1.2
  - @atlaskit/editor-core@73.7.5
  - @atlaskit/comment@4.1.2
  - @atlaskit/editor-common@11.2.1
  - @atlaskit/single-select@5.1.2

## 8.2.1

- [patch] Update changelogs to remove duplicate [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
- [none] Updated dependencies [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
  - @atlaskit/util-data-test@9.1.12
  - @atlaskit/renderer@18.1.1
  - @atlaskit/editor-core@73.7.1
  - @atlaskit/comment@4.1.1
  - @atlaskit/editor-common@11.1.2
  - @atlaskit/single-select@5.1.1
  - @atlaskit/avatar@11.1.1
  - @atlaskit/docs@4.1.1

## 8.2.0

- [none] Updated dependencies [7217164](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7217164)
  - @atlaskit/editor-core@73.5.0
  - @atlaskit/renderer@18.1.0
  - @atlaskit/util-data-test@9.1.11
  - @atlaskit/reactions@12.1.0
  - @atlaskit/editor-common@11.1.0
  - @atlaskit/comment@4.1.0

## 8.1.1

- [patch] Updated dependencies [b7a4fd5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b7a4fd5)
  - @atlaskit/editor-core@73.4.6

## 8.1.0

- [minor] Updated dependencies [cad95fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cad95fa)
  - @atlaskit/editor-core@73.2.0

## 8.0.0

- [major] makes styled-components a peer dependency and upgrades version range from 1.4.6 - 3 to ^3.2.6 [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
- [patch] Updated dependencies [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
  - @atlaskit/util-data-test@9.1.10
  - @atlaskit/reactions@12.0.12
  - @atlaskit/renderer@18.0.0
  - @atlaskit/editor-core@73.0.0
  - @atlaskit/comment@4.0.0
  - @atlaskit/editor-common@11.0.0
  - @atlaskit/single-select@5.0.0
  - @atlaskit/docs@4.0.0
  - @atlaskit/avatar@11.0.0

## 7.6.3

- [patch] Updated dependencies [1c87e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1c87e5a)
  - @atlaskit/util-data-test@9.1.9
  - @atlaskit/reactions@12.0.11
  - @atlaskit/renderer@17.0.9
  - @atlaskit/editor-core@72.2.2
  - @atlaskit/comment@3.1.9
  - @atlaskit/editor-common@10.1.9

## 7.6.2

- [patch] Comments should re-render when the user is changed [507ff28](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/507ff28)

## 7.6.1

- [patch] Fixes a bug with temp comment where createdBy wasn't set correctly [a761abc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a761abc)

## 7.6.0

- [minor] Replace <div> with Fragment so CSS rules apply to adjacent conversations [96dc1bf](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/96dc1bf)

## 7.5.6

- [patch] Updated dependencies [179332e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/179332e)
  - @atlaskit/renderer@17.0.7

## 7.5.5

- [patch] Updated dependencies [41eb1c1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/41eb1c1)
  - @atlaskit/editor-common@10.1.3
  - @atlaskit/renderer@17.0.6

## 7.5.4

- [patch] Updated dependencies [758b342](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/758b342)
  - @atlaskit/renderer@17.0.2
  - @atlaskit/editor-core@72.0.7

## 7.5.3

- [none] Updated dependencies [febc44d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/febc44d)
  - @atlaskit/editor-core@72.0.0
  - @atlaskit/renderer@17.0.0
  - @atlaskit/util-data-test@9.1.4
  - @atlaskit/reactions@12.0.7
  - @atlaskit/editor-common@10.0.0
  - @atlaskit/comment@3.1.8

## 7.5.2

- [patch] Updated dependencies [1764815](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1764815)
  - @atlaskit/reactions@12.0.6

## 7.5.1

- [none] Updated dependencies [8fd4dd1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8fd4dd1)
  - @atlaskit/renderer@16.2.6
  - @atlaskit/util-data-test@9.1.3
  - @atlaskit/reactions@12.0.5
  - @atlaskit/editor-core@71.4.0
  - @atlaskit/comment@3.1.6
  - @atlaskit/editor-common@9.3.9

## 7.5.0

- [minor] Add option to allow feedback and help buttons [ca8bdc3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ca8bdc3)

## 7.4.0

- [minor] Add ability to disable scroll-to behavior and permalinks [94792ca](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/94792ca)

## 7.2.0

- [minor] Support for main conversations. Fixes margin-right on editor component. Added scroll-behavior. [58a90ba](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58a90ba)

## 7.1.14

- [patch] Avatar should display tooltip on hover and be clickable if profile url is provided [272893c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/272893c)

## 7.1.12

- [patch] Close empty editor on save [e5a9f36](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e5a9f36)

## 7.1.8

- [patch] Fix permalink check [8d715f1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8d715f1)

## 7.1.3

- [patch] Close Editor when comment is saved [ae181bf](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ae181bf)

## 7.1.1

- [patch] Adding placholder prop for optionally setting the editor placholder text [9f1696a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9f1696a)

## 7.1.0

- [minor] Adding permalink support [c79d549](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c79d549)

## 7.0.1

- [patch] Don't allow empty comments [cd9069c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cd9069c)

## 7.0.0

- [major] Bump to React 16.3. [4251858](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4251858)

## 6.3.6

- [patch] Fixes rendering of the editor in IE11 [df91076](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df91076)

## 6.3.3

- [patch] Fix for styled-components types to support v1.4.x [75a2375](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/75a2375)

## 6.3.0

- [minor] Adding support for reactions [1b74cff](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1b74cff)

## 6.2.0

- [minor] Update styled-components dependency to support versions 1.4.6 - 3 [ceccf30](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ceccf30)

## 6.1.1

- [patch] Make textFormatting and hyperlink plugins default [689aa8d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/689aa8d)

## 6.1.0

- [minor] Adding renderEditor prop [e2485f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e2485f7)

## 6.0.0

- [major] Replacing internal store with Redux [703bb99](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/703bb99)

## 5.2.5

- [patch] Adding documentations and fixed prop-types [4430cbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4430cbb)

## 5.2.3

- [patch] updated the repository url to https://bitbucket.org/atlassian/atlaskit-mk-2 [1e57e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e57e5a)

## 5.2.2

- [patch] Enabling hyperlinks in the conversation editor [a151fd3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a151fd3)

## 5.2.0

- [minor] Add subscribe/unsubscribe methods to resource provider [5c1e2bf](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5c1e2bf)

## 5.1.1

- [patch] bump editor-common to 6.1.2 [bb7802e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bb7802e)

## 5.1.0

- [minor] Add error state and cancel/retry [0c1bb6e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0c1bb6e)

## 5.0.3

- [patch] bump mention to 9.1.1 to fix mention autocomplete bug [c7708c6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c7708c6)

## 5.0.2

- [patch] Avoid unnecessary re-render of comments [402cc7c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/402cc7c)

## 5.0.0

- [major] Added some tests for reducer/store and renamed actions [ba629ef](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ba629ef)

## 4.9.0

- [minor] Adding optimistic updates [45922f3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/45922f3)

## 4.8.1

- [patch] Fixes the avatar next to the editor and hides reply functionality if user isn't set [0123c1d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0123c1d)

## 4.8.0

- [minor] Add optional onUserClick handler [40f2e90](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/40f2e90)

## 4.7.0

- [minor] Add emoji/mention support [846baed](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/846baed)

## 4.6.0

- [minor] Fix delete comment to accept 204 [83b5f70](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/83b5f70)

## 4.5.0

- [minor] Add comment delete functionality [e26446a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e26446a)

## 4.4.0

- [minor] Add React 16 support. [12ea6e4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/12ea6e4)

## 4.3.0

- [minor] feature/ED-3471 Add comment edit functionality [c474f67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c474f67)

## 4.0.0

- [major] New API [41633b9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/41633b9)

## 3.0.10

- [patch] Fix dependencies in CI [670e930](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/670e930)

## 3.0.9

- [patch] dummy changeset to initiate release [ba17f5b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ba17f5b)

## 3.0.0

- [major] Changing the API to match the service [b308326](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b308326)

## 2.0.0

- [major] Conversation Component [bc1a3a4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bc1a3a4)
