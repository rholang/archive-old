# @atlaskit/smart-card

## 12.5.11

### Patch Changes

- [patch][47ff615517](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/47ff615517):

  Ensure smartlinks client handles errors batched with JsonLd- [patch][ae4f336a3a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ae4f336a3a):

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

## 12.5.10

### Patch Changes

- [patch][666464508d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/666464508d):

  handle undefined meta

## 12.5.9

- Updated dependencies [f9b5e24662](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f9b5e24662):
  - @atlaskit/icon-file-type@5.0.0
  - @atlaskit/icon-object@5.0.0
  - @atlaskit/icon@19.0.8

## 12.5.8

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 12.5.7

### Patch Changes

- [patch][a2d0043716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a2d0043716):

  Updated version of analytics-next to fix potential incompatibilities with TS 3.6

## 12.5.6

- Updated dependencies [97bab7fd28](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97bab7fd28):
  - @atlaskit/button@13.3.1
  - @atlaskit/form@6.2.3
  - @atlaskit/radio@3.0.18
  - @atlaskit/media-ui@11.6.7
  - @atlaskit/checkbox@10.0.0
  - @atlaskit/docs@8.1.7

## 12.5.5

### Patch Changes

- [patch][fc79969f86](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fc79969f86):

  Update all the theme imports in media to use multi entry points

## 12.5.4

### Patch Changes

- [patch][b8fd0f0847](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b8fd0f0847):

  hot-88372: fix css props breaking in layoutNG.

## 12.5.3

### Patch Changes

- [patch][07dd73fa12](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/07dd73fa12):

  FM-2240 Fix issue where smart links would cause hybrid renderer to crash in Android

## 12.5.2

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 12.5.1

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 12.5.0

### Minor Changes

- [minor][bdee736f14](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bdee736f14):

  ED-7175: unify smart link and hyperlink toolbars

  Also updates the toDOM and parseDOM on ADF nodes, making `url` optional.

  Smart cards can now optionally be passed an onResolve callback, of the shape:

      onResolve?: (data: { url?: string; title?: string }) => void;

  This gets fired when the view resolves a smart card from JSON-LD, either via the client or the `data` prop.

### Patch Changes

- [patch][32a88ae6b7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/32a88ae6b7):

  SL-365: link target for smart link should come from props rather than JSON-LD

  This also reduces the possibility of XSS attacks. Implementors should still verify they're not passing invalid URLs to the `smart-card` components.- [patch][7f1bab3c93](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7f1bab3c93):

  SL-359: pass onClick props to pending and error states

## 12.4.4

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

## 12.4.3

- Updated dependencies [84887b940c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/84887b940c):
  - @atlaskit/form@6.1.7
  - @atlaskit/icon@19.0.2
  - @atlaskit/textfield@3.0.0

## 12.4.2

### Patch Changes

- [patch][77b09e36eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/77b09e36eb):

  fix: provide the correct url for the edge proxy to api-private.atlassian.com

## 12.4.1

### Patch Changes

- [patch][688f2957ca](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/688f2957ca):

  Fixes various TypeScript errors which were previously failing silently

## 12.4.0

### Minor Changes

- [minor][b19bf68c22](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b19bf68c22):

  fix: when environment is not provided then default to using the edge proxy instead

## 12.3.5

### Patch Changes

- [patch][6695dbd447](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6695dbd447):

  fix: ensure smartlinks render a not found view when the link resource isn't found

## 12.3.4

### Patch Changes

- [patch][19a83a0c7e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/19a83a0c7e):

  fixed issues with cards not updating after authentication

## 12.3.3

### Patch Changes

- [patch][8903a232f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8903a232f7):

  fix: fallback to blue links when resolve is unsupported

## 12.3.2

### Patch Changes

- [patch][9f8ab1084b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9f8ab1084b):

  Consume analytics-next ts type definitions as an ambient declaration.

## 12.3.1

### Patch Changes

- [patch][6742fbf2cc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6742fbf2cc):

  bugfix, fixes missing version.json file

## 12.3.0

### Minor Changes

- [minor][602ab89822](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/602ab89822):

  SL-345 add property for disabling auth flow of Smart Links (for Mobile).

## 12.2.8

### Patch Changes

- [patch][18dfac7332](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18dfac7332):

  In this PR, we are:

  - Re-introducing dist build folders
  - Adding back cjs
  - Replacing es5 by cjs and es2015 by esm
  - Creating folders at the root for entry-points
  - Removing the generation of the entry-points at the root
    Please see this [ticket](https://product-fabric.atlassian.net/browse/BUILDTOOLS-118) or this [page](https://hello.atlassian.net/wiki/spaces/FED/pages/452325500/Finishing+Atlaskit+multiple+entry+points) for further details

## 12.2.7

### Patch Changes

- [patch][b346bb2963](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b346bb2963):

  added support for batching of link resolve requests in Smart Card client.

## 12.2.6

### Patch Changes

- [patch][c95713b660](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c95713b660):

  fix lazy rendering offset to be more portable between devices

## 12.2.5

- Updated dependencies [87a2638655](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/87a2638655):
  - @atlaskit/button@13.0.10
  - @atlaskit/form@6.1.2
  - @atlaskit/radio@3.0.7
  - @atlaskit/media-ui@11.4.2
  - @atlaskit/checkbox@9.0.0

## 12.2.4

### Patch Changes

- [patch][aed5ccba18](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aed5ccba18):

  SL-343 fix behaviour when using middle-click or clicking inside of iframes for inline Smart Links.

## 12.2.3

- Updated dependencies [06326ef3f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06326ef3f7):
  - @atlaskit/docs@8.1.3
  - @atlaskit/button@13.0.9
  - @atlaskit/checkbox@8.0.5
  - @atlaskit/form@6.1.1
  - @atlaskit/inline-message@10.0.7
  - @atlaskit/radio@3.0.6
  - @atlaskit/table-tree@7.0.6
  - @atlaskit/textfield@2.0.3
  - @atlaskit/media-ui@11.4.1
  - @atlaskit/icon@19.0.0

## 12.2.2

### Patch Changes

- [patch][4258086c0d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4258086c0d):

  fix: some smartlinks with sourcecode artifacts were being incorrectly rendered

## 12.2.1

### Patch Changes

- [patch][b5eb352152](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b5eb352152):

  SL-336: fix page crash when state is undefined.

## 12.2.0

### Minor Changes

- [minor][09f094a7a2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/09f094a7a2):

  SL-259: bump react-lazily-render, remove react-lazily-render-scroll-parent.

## 12.1.1

### Patch Changes

- [patch][8e50d00fc6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8e50d00fc6):

  SL-331: fix edit handler for smart-card.

## 12.1.0

### Minor Changes

- [minor][86bf524679](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/86bf524679):

  ED-7117, ED-7087: Fix copy pasting smart links out of editor. Fallback to HTML anchor tag if errors occur during rendering (e.g. no provider found).

## 12.0.0

### Major Changes

- [major][393fb6acd2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/393fb6acd2):

  refactor @atlaskit/smart-card front-end: simplification. BREAKING CHANGE: Client no longer accepts configuration options as first argument; deprecated in favour of new state management layer.

## 11.1.6

- Updated dependencies [cfc3c8adb3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cfc3c8adb3):
  - @atlaskit/docs@8.1.2
  - @atlaskit/button@13.0.8
  - @atlaskit/checkbox@8.0.2
  - @atlaskit/form@6.0.5
  - @atlaskit/inline-message@10.0.3
  - @atlaskit/radio@3.0.3
  - @atlaskit/table-tree@7.0.4
  - @atlaskit/textfield@2.0.1
  - @atlaskit/media-ui@11.2.8
  - @atlaskit/icon@18.0.0

## 11.1.5

### Patch Changes

- [patch][1347760307](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1347760307):

  - fix pull request, branch and commit name formatting

## 11.1.4

- Updated dependencies [70862830d6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/70862830d6):
  - @atlaskit/button@13.0.6
  - @atlaskit/form@6.0.4
  - @atlaskit/radio@3.0.2
  - @atlaskit/media-ui@11.2.7
  - @atlaskit/checkbox@8.0.0
  - @atlaskit/icon@17.2.0
  - @atlaskit/theme@9.1.0

## 11.1.3

- [patch][b0ef06c685](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b0ef06c685):

  - This is just a safety release in case anything strange happened in in the previous one. See Pull Request #5942 for details

## 11.1.2

- Updated dependencies [66af32c013](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/66af32c013):
- Updated dependencies [1da5351f72](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1da5351f72):
  - @atlaskit/inline-message@10.0.0
  - @atlaskit/form@6.0.3
  - @atlaskit/radio@3.0.0

## 11.1.1

- Updated dependencies [3af5a7e685](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3af5a7e685):
  - @atlaskit/media-ui@11.2.4
  - @atlaskit/page@11.0.0

## 11.1.0

- [minor][4969df0716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4969df0716):

  - fix lazy rendering bugs in Smart Links.

## 11.0.5

- [patch][27f666ed85](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/27f666ed85):

  - Fixed example.

## 11.0.4

- [patch][94ffb3b638](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/94ffb3b638):

  - check for taskType icon in the json payload

## 11.0.3

- [patch][6a52b3d258](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a52b3d258):

  - fix for clicking behaviour in view/edit mode for Inline Smart Links.

## 11.0.2

- [patch][7e18a6398b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e18a6398b):

  - improve type safety when defining smart-card environment

## 11.0.1

- [patch][b7687b9981](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b7687b9981):

  - Changed smart link functionality so that it will open in the same tab if clicked.

## 11.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 10.5.0

- [minor][593404cba8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/593404cba8):

  - add status lozenge to source code issue references.

## 10.4.2

- Updated dependencies [dd95622388](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dd95622388):
- Updated dependencies [6cdf11238d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6cdf11238d):
  - @atlaskit/form@5.2.10
  - @atlaskit/textarea@1.0.0
  - @atlaskit/textfield@1.0.0

## 10.4.1

- [patch][3e4c4d7e2d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3e4c4d7e2d):

  - fix: send 'Origin' header in resolve requests

## 10.4.0

- [minor][da5a7f3390](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/da5a7f3390):

  - fix third-party link extractors to resolve URLs more accurately.

## 10.3.1

- Updated dependencies [6c4e41ff36](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6c4e41ff36):
  - @atlaskit/form@5.2.9
  - @atlaskit/radio@1.0.0

## 10.3.0

- [minor][ce985861c3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ce985861c3):

  - Added analytics for UI actions, and updated existing operational analytics events

## 10.2.4

- Updated dependencies [9c0b4744be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0b4744be):
  - @atlaskit/docs@7.0.3
  - @atlaskit/button@12.0.3
  - @atlaskit/checkbox@6.0.4
  - @atlaskit/form@5.2.7
  - @atlaskit/icon@16.0.9
  - @atlaskit/icon-file-type@3.0.8
  - @atlaskit/icon-object@3.0.8
  - @atlaskit/inline-message@8.0.3
  - @atlaskit/radio@0.5.3
  - @atlaskit/textarea@0.4.4
  - @atlaskit/textfield@0.4.4
  - @atlaskit/media-ui@10.1.5
  - @atlaskit/theme@8.1.7

## 10.2.3

- [patch][3f28e6443c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3f28e6443c):

  - @atlaskit/analytics-next-types is deprecated. Now you can use types for @atlaskit/analytics-next supplied from itself.

## 10.2.2

- Updated dependencies [1e826b2966](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e826b2966):
  - @atlaskit/docs@7.0.2
  - @atlaskit/analytics-next@4.0.3
  - @atlaskit/checkbox@6.0.3
  - @atlaskit/form@5.2.5
  - @atlaskit/icon@16.0.8
  - @atlaskit/icon-file-type@3.0.7
  - @atlaskit/icon-object@3.0.7
  - @atlaskit/inline-message@8.0.2
  - @atlaskit/page@9.0.3
  - @atlaskit/radio@0.5.2
  - @atlaskit/textarea@0.4.1
  - @atlaskit/textfield@0.4.3
  - @atlaskit/theme@8.1.6
  - @atlaskit/media-ui@10.1.3
  - @atlaskit/button@12.0.0

## 10.2.1

- [patch][d13fad66df](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13fad66df):

  - Enable esModuleInterop for typescript, this allows correct use of default exports

## 10.2.0

- [minor][9b0dd21ce7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9b0dd21ce7):

  - allow the appearance of lozenges within smart link tasks to be configured

## 10.1.2

- [patch][aa117f5341](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aa117f5341):

  - fix alignment and UI for inline Smart Links.

## 10.1.1

- Updated dependencies [f504850fe2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f504850fe2):
  - @atlaskit/form@5.2.4
  - @atlaskit/textarea@0.4.0

## 10.1.0

- [minor][11a6c98707](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/11a6c98707):

  - refactor Smart Links frontend directory structure.

## 10.0.2

- Updated dependencies [8eff47cacb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8eff47cacb):
  - @atlaskit/form@5.2.3
  - @atlaskit/textfield@0.4.0

## 10.0.1

- [patch][1bcaa1b991](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1bcaa1b991):

  - Add npmignore for index.ts to prevent some jest tests from resolving that instead of index.js

## 10.0.0

- [major][9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):

  - Dropped ES5 distributables from the typescript packages

## 9.11.4

- [patch][8ed53a1cbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8ed53a1cbb):

  - fix padding, wrapping for inline smart links.

## 9.11.3

- Updated dependencies [76299208e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76299208e6):
  - @atlaskit/button@10.1.3
  - @atlaskit/icon@16.0.4
  - @atlaskit/icon-file-type@3.0.4
  - @atlaskit/icon-object@3.0.4
  - @atlaskit/textarea@0.2.5
  - @atlaskit/analytics-gas-types@3.2.5
  - @atlaskit/media-ui@9.2.1
  - @atlaskit/outbound-auth-flow-client@1.0.4
  - @atlaskit/docs@7.0.0
  - @atlaskit/analytics-next@4.0.0
  - @atlaskit/checkbox@6.0.0
  - @atlaskit/form@5.1.8
  - @atlaskit/inline-message@8.0.0
  - @atlaskit/page@9.0.0
  - @atlaskit/radio@0.5.0
  - @atlaskit/textfield@0.3.0
  - @atlaskit/theme@8.0.0

## 9.11.2

- Updated dependencies [e9b824bf86](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e9b824bf86):
  - @atlaskit/form@5.1.7
  - @atlaskit/textfield@0.2.0

## 9.11.1

- [patch][2cb8c44165](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2cb8c44165):

  - Fix environments mix-up

## 9.11.0

- [minor][41147bbc4c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/41147bbc4c):

  - Fix for links in editor

## 9.10.0

- [minor][ea423a619f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ea423a619f):

  - Fixed the call to the /check endpoint

## 9.9.0

- [minor][7f70e97f98](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7f70e97f98):

  - Added environments to client

## 9.8.0

- [minor][1594f351d9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1594f351d9):

  - added inline extractors for Bitbucket and Github.

## 9.7.1

- Updated dependencies [d5bce1ea15](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d5bce1ea15):
  - @atlaskit/media-ui@9.0.0

## 9.7.0

- [minor][1c62bcce7d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1c62bcce7d):

  - Fix a problem with smart cards not appearing sometimes when lazy rendered and lazy loaded after code-split.

## 9.6.8

- [patch][af3918bc89](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/af3918bc89):

  - The url part of the unauthorized link is now grey

## 9.6.7

- [patch][abce6949c0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/abce6949c0):

  - fix icon sizing and url key.

## 9.6.6

- [patch][5ae645d661](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5ae645d661):

  - Fixing analytics in smart-cards

## 9.6.5

- [patch][2035bef8fb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2035bef8fb):

  - Fix inline extractor priority preventing @type arrays in some cases.

## 9.6.4

- [patch][56c5a4b41f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/56c5a4b41f):

  - Fix "try again" should not be showing when there are no auth methods

## 9.6.3

- [patch][63e6f7d420](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/63e6f7d420):

  - Fix missing attributes for link view

## 9.6.2

- [patch][cbc601aed3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cbc601aed3):

  - Added missing type of events for Confluence

## 9.6.1

- [patch][bef9abc8de](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bef9abc8de):

  - added background colour to inline card views, fixed icon alignment.

## 9.6.0

- [minor][27b12fdfc6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/27b12fdfc6):

  - added support for rendering of icons in Jira links

## 9.5.0

- [minor][d664fc3d49](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d664fc3d49):

  - added support for rendering of icons with Confluence links

## 9.4.1

- Updated dependencies [d7ef59d432](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d7ef59d432):
  - @atlaskit/docs@6.0.1
  - @atlaskit/button@10.1.2
  - @atlaskit/checkbox@5.0.11
  - @atlaskit/form@5.1.2
  - @atlaskit/inline-message@7.0.11
  - @atlaskit/radio@0.4.6
  - @atlaskit/media-ui@8.2.5
  - @atlaskit/icon@16.0.0

## 9.4.0

- [minor][8ff07c1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8ff07c1):

  - Analytics, first attempt, validate the idea

- [minor][7777442](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7777442):

  - More analytics for smart links

- [minor][7302ea6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7302ea6):

  - Analytics for smart cards

## 9.3.0

- [minor][150626e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/150626e):

  - add support for source code repository urls (currently Bitbucket and Github) in smart-cards.

## 9.2.2

- Updated dependencies [647a46f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/647a46f):
  - @atlaskit/radio@0.4.5
  - @atlaskit/textfield@0.1.5
  - @atlaskit/form@5.0.0

## 9.2.1

- [patch][9c50550](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c50550):

  - Do not show connect button if there are no auth methods.

## 9.2.0

- [minor][95f98cc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/95f98cc):

  - User can click on a smart card to open a new window/tab

## 9.1.0

- [minor][1175616](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1175616):

  - Simplified error state in inline cards: no red state anymore, just blue link

## 9.0.4

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/button@10.1.1
  - @atlaskit/checkbox@5.0.9
  - @atlaskit/field-range@5.0.12
  - @atlaskit/field-text@7.0.18
  - @atlaskit/field-text-area@4.0.14
  - @atlaskit/form@4.0.21
  - @atlaskit/icon@15.0.2
  - @atlaskit/icon-file-type@3.0.2
  - @atlaskit/icon-object@3.0.2
  - @atlaskit/inline-message@7.0.10
  - @atlaskit/page@8.0.12
  - @atlaskit/radio@0.4.4
  - @atlaskit/theme@7.0.1
  - @atlaskit/media-ui@8.1.2
  - @atlaskit/outbound-auth-flow-client@1.0.2
  - @atlaskit/docs@6.0.0

## 9.0.3

- Updated dependencies [5de3574](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5de3574):
  - @atlaskit/media-ui@8.0.0

## 9.0.2

- Updated dependencies [d13242d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13242d):
  - @atlaskit/docs@5.2.3
  - @atlaskit/button@10.0.4
  - @atlaskit/checkbox@5.0.8
  - @atlaskit/field-range@5.0.11
  - @atlaskit/field-text@7.0.16
  - @atlaskit/field-text-area@4.0.13
  - @atlaskit/form@4.0.20
  - @atlaskit/icon@15.0.1
  - @atlaskit/icon-file-type@3.0.1
  - @atlaskit/icon-object@3.0.1
  - @atlaskit/inline-message@7.0.9
  - @atlaskit/radio@0.4.3
  - @atlaskit/media-ui@7.8.2
  - @atlaskit/theme@7.0.0

## 9.0.1

- [patch][4c0c2a0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4c0c2a0):

  - Fix Cards throwing Error when client is not provided.

## 9.0.0

- [major][df32968](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df32968):

  - Introduced pending state (which is represented as a link) and a race between resolving state and the data fetch.

## 8.8.5

- Updated dependencies [ab9b69c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ab9b69c):
  - @atlaskit/docs@5.2.2
  - @atlaskit/button@10.0.1
  - @atlaskit/checkbox@5.0.7
  - @atlaskit/form@4.0.19
  - @atlaskit/inline-message@7.0.8
  - @atlaskit/radio@0.4.2
  - @atlaskit/media-ui@7.6.2
  - @atlaskit/icon-file-type@3.0.0
  - @atlaskit/icon-object@3.0.0
  - @atlaskit/icon@15.0.0

## 8.8.4

- Updated dependencies [6998f11](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6998f11):
  - @atlaskit/docs@5.2.1
  - @atlaskit/checkbox@5.0.6
  - @atlaskit/field-text@7.0.15
  - @atlaskit/field-text-area@4.0.12
  - @atlaskit/form@4.0.18
  - @atlaskit/icon@14.6.1
  - @atlaskit/icon-file-type@2.0.1
  - @atlaskit/icon-object@2.0.1
  - @atlaskit/inline-message@7.0.7
  - @atlaskit/page@8.0.11
  - @atlaskit/radio@0.4.1
  - @atlaskit/theme@6.2.1
  - @atlaskit/media-ui@7.6.1
  - @atlaskit/field-range@5.0.9
  - @atlaskit/button@10.0.0

## 8.8.3

- Updated dependencies [b42680b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b42680b):
  - @atlaskit/form@4.0.17
  - @atlaskit/radio@0.4.0

## 8.8.2

- [patch][b859e08](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b859e08):

  - Update dependent versions

## 8.8.1

- Updated dependencies [8199088](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8199088):
  - @atlaskit/form@4.0.16
  - @atlaskit/radio@0.3.0

## 8.8.0

- [minor][93b31fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/93b31fa):

  - Add support for nested <SmartCardProvider />

## 8.7.1

- [patch][00cd9a8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/00cd9a8):

  - Add tag support for inline task card.

## 8.7.0

- [minor][e89e244](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e89e244):

  - Implemented time-based caching for the client.

## 8.6.3

- [patch][4b989c3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4b989c3):

  - Fix inline cards crashing after change to the format.

## 8.6.2

- [patch][a567cc9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a567cc9):

  - Improve rendering of Smart Cards.

## 8.6.1

- [patch][7bc4461](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7bc4461):

  - ED-5565: support connecting external React.Context to nodeviews

## 8.6.0

- [minor][1aa57ab](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1aa57ab):

  Clean up for media up and new task converter for smart cards

- [minor][d310628](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d310628):

  Added a converter for atlassian:task type

## 8.5.2

- [patch] ED-5439: add block smart cards, toolbar switcher [5f8bdfe](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5f8bdfe)

## 8.5.1

- [patch] fix cards being reloaded with the same definition id [b4b6a45](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b4b6a45)

## 8.5.0

- [minor] Added task converter [8678076](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8678076)

## 8.4.1

- [patch] Update blockcard and inline card exports to be compatible with tree shaking. Preperation for asyncloading parts of smart card [ced32d0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ced32d0)

## 8.4.0

- [minor] Client to be extended [039c0ad](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/039c0ad)

## 8.3.3

- [patch] Replace @atlassian/outbound-auth-flow-client with @atlaskit/ [faff9c1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/faff9c1)

## 8.3.2

- [patch] expose onClick handler for Card [3f5585c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3f5585c)

## 8.3.1

- [patch] Additional test case [9b86661](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9b86661)

## 8.3.0

- [minor] Refactored the rxjs set up for smart cards [026c96e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/026c96e)

## 8.2.4

- [patch] Removes usages of rxjs/Rx [d098f25](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d098f25)

## 8.2.3

- [patch] Fix rxjs and date-fns import in TS components [ab15cee](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ab15cee)

## 8.2.2

- [patch] Updated dependencies [dae7792](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dae7792)
  - @atlaskit/media-ui@6.0.0

## 8.2.1

- [patch] Fix rxjs imports to only import what's needed [2e0ce2b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2e0ce2b)

## 8.2.0

- [minor] Added `isSelected` to the `Card` component (inline resolved view) [6666d82](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6666d82)

## 8.1.2

- [patch] Updated dependencies [4194aa4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4194aa4)
  - @atlaskit/form@4.0.9
  - @atlaskit/select@6.0.0

## 8.1.1

- [patch] Updated dependencies [d8d8107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d8d8107)
  - @atlaskit/select@5.0.14
  - @atlaskit/form@4.0.0

## 8.1.0

- [minor] Switched to the amerizan way of spelling unauthorized [7c223f9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c223f9)

## 8.0.1

- [patch] Updated dependencies [b12f7e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b12f7e6)
  - @atlaskit/media-ui@5.1.2

## 8.0.0

- [major] fix call to ORS by switching to fetch from XHR [48b95b0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/48b95b0)
- [patch] Cleaner fetch function [e9b1477](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e9b1477)

## 7.0.6

- [patch] Updated dependencies [333a440](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/333a440)
  - @atlaskit/inline-message@7.0.0
- [none] Updated dependencies [1d9e75a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1d9e75a)
  - @atlaskit/inline-message@7.0.0
- [none] Updated dependencies [a3109d3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a3109d3)
  - @atlaskit/inline-message@7.0.0
- [none] Updated dependencies [87d45d3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/87d45d3)
  - @atlaskit/inline-message@7.0.0
- [none] Updated dependencies [a08b0c2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a08b0c2)
  - @atlaskit/inline-message@7.0.0

## 7.0.5

- [patch] ED-4824: added renderer support for smart cards [7cf0a78](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7cf0a78)

## 7.0.4

- [patch] ED-5222: bump react-lazily-render package [5844820](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5844820)

## 7.0.3

- [patch] Fix es5 exports of some of the newer modules [3f0cd7d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3f0cd7d)

## 7.0.2

- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/select@5.0.7
  - @atlaskit/page@8.0.2
  - @atlaskit/media-ui@5.0.2
  - @atlaskit/field-range@5.0.2
  - @atlaskit/field-text@7.0.3
  - @atlaskit/docs@5.0.2
  - @atlaskit/inline-message@6.0.2
  - @atlaskit/form@3.1.4

## 7.0.1

- [patch] Fix CORS request in Smart Card [b0e2ce3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b0e2ce3)

## 7.0.0

- [major] Implemented smart cards and common views for other cards [fa6f865](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fa6f865)
- [major] Implemented smart cards and common UI elements [fdd03d8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fdd03d8)
- [major] Implement smart card [49c8425](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/49c8425)
- [major] Smart cards implementation and moved UI elements into media-ui package [3476e01](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3476e01)
- [major] Updated dependencies [fa6f865](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fa6f865)
  - @atlaskit/media-ui@5.0.0
- [major] Updated dependencies [fdd03d8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fdd03d8)
  - @atlaskit/media-ui@5.0.0
- [major] Updated dependencies [49c8425](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/49c8425)
  - @atlaskit/media-ui@5.0.0
- [major] Updated dependencies [3476e01](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3476e01)
  - @atlaskit/media-ui@5.0.0

## 6.0.1

- [patch] Updated dependencies [e6b1985](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e6b1985)
  - @atlaskit/tooltip@12.0.0
  - @atlaskit/icon@13.1.1
  - @atlaskit/dropdown-menu@6.1.1
  - @atlaskit/avatar-group@2.0.1
  - @atlaskit/avatar@14.0.1

## 6.0.0

- [major] Updates to React ^16.4.0 [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
- [major] Updated dependencies [563a7eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/563a7eb)
  - @atlaskit/tooltip@11.0.0
  - @atlaskit/inline-message@6.0.0
  - @atlaskit/field-text@7.0.0
  - @atlaskit/page@8.0.0
  - @atlaskit/button@9.0.0
  - @atlaskit/media-ui@4.0.0
  - @atlaskit/theme@5.0.0
  - @atlaskit/lozenge@6.0.0
  - @atlaskit/field-range@5.0.0
  - @atlaskit/badge@9.0.0
  - @atlaskit/spinner@9.0.0
  - @atlaskit/docs@5.0.0
  - @atlaskit/icon@13.0.0
  - @atlaskit/dropdown-menu@6.0.0
  - @atlaskit/avatar-group@2.0.0
  - @atlaskit/avatar@14.0.0
- [major] Updated dependencies [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
  - @atlaskit/page@8.0.0
  - @atlaskit/media-ui@4.0.0
  - @atlaskit/tooltip@11.0.0
  - @atlaskit/inline-message@6.0.0
  - @atlaskit/field-text@7.0.0
  - @atlaskit/button@9.0.0
  - @atlaskit/theme@5.0.0
  - @atlaskit/lozenge@6.0.0
  - @atlaskit/field-range@5.0.0
  - @atlaskit/badge@9.0.0
  - @atlaskit/spinner@9.0.0
  - @atlaskit/docs@5.0.0
  - @atlaskit/icon@13.0.0
  - @atlaskit/dropdown-menu@6.0.0
  - @atlaskit/avatar-group@2.0.0
  - @atlaskit/avatar@14.0.0

## 5.3.3

- [none] Updated dependencies [da63331](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/da63331)
  - @atlaskit/button@8.2.5
  - @atlaskit/dropdown-menu@5.2.3
  - @atlaskit/avatar-group@1.0.2
  - @atlaskit/avatar@13.0.0
- [patch] Updated dependencies [7724115](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7724115)
  - @atlaskit/avatar@13.0.0
  - @atlaskit/button@8.2.5
  - @atlaskit/dropdown-menu@5.2.3
  - @atlaskit/avatar-group@1.0.2

## 5.3.2

- [patch] Updated dependencies [8a01bcd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8a01bcd)
  - @atlaskit/avatar@12.0.0
  - @atlaskit/dropdown-menu@5.2.2
  - @atlaskit/avatar-group@1.0.0

## 5.3.1

- [patch] Updated dependencies [cdba8b3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cdba8b3)
  - @atlaskit/spinner@8.0.0
  - @atlaskit/button@8.2.3

## 5.3.0

- [minor] Error view for inline smart card [74a0d46](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/74a0d46)
- [minor] Implemented auth error view for the inline card [6c6f078](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6c6f078)
- [minor] Implemented auth error view for inline SC [5bb26b4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5bb26b4)

## 5.2.1

- [patch] Update changelogs to remove duplicate [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
- [none] Updated dependencies [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
  - @atlaskit/media-ui@3.1.1
  - @atlaskit/theme@4.0.3
  - @atlaskit/spinner@7.0.1
  - @atlaskit/lozenge@5.0.3
  - @atlaskit/inline-message@5.1.1
  - @atlaskit/icon@12.1.1
  - @atlaskit/dropdown-menu@5.0.3
  - @atlaskit/button@8.1.1
  - @atlaskit/badge@8.0.3
  - @atlaskit/avatar@11.1.1
  - @atlaskit/docs@4.1.1

## 5.2.0

- [patch] Updated dependencies [9d20f54](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d20f54)
  - @atlaskit/spinner@7.0.0
  - @atlaskit/page@7.1.0
  - @atlaskit/tooltip@10.2.0
  - @atlaskit/dropdown-menu@5.0.2
  - @atlaskit/avatar@11.1.0
  - @atlaskit/icon@12.1.0
  - @atlaskit/media-ui@3.1.0
  - @atlaskit/docs@4.1.0
  - @atlaskit/theme@4.0.2
  - @atlaskit/lozenge@5.0.2
  - @atlaskit/field-text@6.0.2
  - @atlaskit/field-range@4.0.2
  - @atlaskit/badge@8.0.2
  - @atlaskit/inline-message@5.1.0
  - @atlaskit/button@8.1.0

## 5.1.1

- [patch] Fix UI issues with inline card resolving view [2de7ce7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2de7ce7)
- [patch] Fix for inline resolved card [97efb49](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97efb49)
- [patch] Fix the resolving view [f86d117](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f86d117)

## 5.1.0

- [minor] added the LinkView for inline cards in the resolving/errored state [823caef](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/823caef)

## 5.0.0

- [major] Renamed and refactored the resolved for inline cards [732d2f5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/732d2f5)

## 4.0.0

- [major] makes styled-components a peer dependency and upgrades version range from 1.4.6 - 3 to ^3.2.6 [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
- [patch] Updated dependencies [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
  - @atlaskit/page@7.0.0
  - @atlaskit/media-ui@3.0.0
  - @atlaskit/tooltip@10.0.0
  - @atlaskit/icon@12.0.0
  - @atlaskit/inline-message@5.0.0
  - @atlaskit/field-text@6.0.0
  - @atlaskit/button@8.0.0
  - @atlaskit/lozenge@5.0.0
  - @atlaskit/field-range@4.0.0
  - @atlaskit/badge@8.0.0
  - @atlaskit/spinner@6.0.0
  - @atlaskit/docs@4.0.0
  - @atlaskit/dropdown-menu@5.0.0
  - @atlaskit/avatar@11.0.0

## 3.0.4

- [patch] Updated dependencies [1c87e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1c87e5a)
  - @atlaskit/page@6.0.4

## 3.0.3

- [patch] fix inline smart-cards to support styled-components v1 [35d547f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d547f)

## 3.0.2

- [patch] Updated dependencies [d662caa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d662caa)
  - @atlaskit/icon@11.3.0
  - @atlaskit/media-ui@2.1.1
  - @atlaskit/tooltip@9.2.1
  - @atlaskit/page@6.0.3
  - @atlaskit/inline-message@4.0.2
  - @atlaskit/field-text@5.0.3
  - @atlaskit/dropdown-menu@4.0.3
  - @atlaskit/button@7.2.5
  - @atlaskit/badge@7.1.2
  - @atlaskit/spinner@5.0.2
  - @atlaskit/avatar@10.0.6
  - @atlaskit/docs@3.0.4
  - @atlaskit/lozenge@4.0.1

## 3.0.1

- [patch] add @types/prop-types to dependencies of smart-card [d558d2b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d558d2b)

## 3.0.0

- [major] Renamed smart card components and exposed inline smart card views [1094bb6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1094bb6)

## 2.0.2

- [patch] Implemented <InlineCardView /> for displaying a smart card inline with text. This view is NOT directly exported to consumers. [293b3a7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/293b3a7)

## 2.0.1

- [patch] Added missing dependencies and added lint rule to catch them all [0672503](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0672503)

## 2.0.0

- [major] Bump to React 16.3. [4251858](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4251858)

## 1.0.2

- [patch] fixed missing and inccorect versions of dependencies [7bfbb09](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7bfbb09)
- [patch] fix dependencies [0e57cde](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0e57cde)

## 1.0.1

- [patch] fix path for atkaskit in package.json [6ac9661](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6ac9661)
