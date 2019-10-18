# @atlaskit/email-renderer

## 3.0.2

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

- Updated dependencies [bd94b1d552](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bd94b1d552):
  - @atlaskit/util-data-test@13.0.0

## 3.0.1

### Patch Changes

- [patch][a2d0043716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a2d0043716):

  Updated version of analytics-next to fix potential incompatibilities with TS 3.6

## 3.0.0

### Major Changes

- [major][80adfefba2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80adfefba2):

  Remove applicationCard node and action mark

- Updated dependencies [1194ad5eb3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1194ad5eb3):
  - @atlaskit/adf-schema@4.0.0

## 2.10.3

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 2.10.2

### Patch Changes

- [patch][13cc59f1fd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/13cc59f1fd):

  Minor tweaks in rendering of media previews

## 2.10.1

- Updated dependencies [6164bc2629](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6164bc2629):
  - @atlaskit/adf-schema@3.0.0

## 2.10.0

### Minor Changes

- [minor][44e4f03514](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/44e4f03514):

  CS-1238 Media nodes render attachments based on context

## 2.9.0

### Minor Changes

- [minor][435258881c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/435258881c):

  CS-1238 Media honor width and flow settings

## 2.8.0

### Minor Changes

- [minor][4c3772ce61](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4c3772ce61):

  CS-1238 Added generic icon for media attachments

## 2.7.1

### Patch Changes

- [patch][59fb844cd5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/59fb844cd5):

  CS-1184 Email renderer - prevent tables from flowing outside container

## 2.7.0

### Minor Changes

- [minor][5b89d23a43](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5b89d23a43):

  CS-1184 Email renderer icons compressed, rendered diff looks better for some nodes

## 2.6.0

### Minor Changes

- [minor][d08834952b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d08834952b):

  CS-1184 CSS prefix shortened

## 2.5.0

### Minor Changes

- [minor][8cd4402937](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8cd4402937):

  CSS corrections

## 2.4.0

### Minor Changes

- [minor][0718ea79a0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0718ea79a0):

  Email renderer notification distributor integration

## 2.3.0

### Minor Changes

- [minor][22af1d9ddd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/22af1d9ddd):

  FS-4032 - Remove background styling from actions and decisions in email. Unable to support hover.

## 2.2.0

### Minor Changes

- [minor][c617f954b7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c617f954b7):

  Extracted CSS for last set of 4 ADF nodes

## 2.1.0

### Minor Changes

- [minor][86218aa155](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/86218aa155):

  Email renderer: Extracted CSS for 8 more nodes

## 2.0.0

### Major Changes

- [major][38d11825f2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/38d11825f2):

  Renderer does not inline CSS anymore, but can be turned on by a flag for testing purposes

## 1.4.0

### Minor Changes

- [minor][60f541121b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/60f541121b):

  Added buildstep into atlaskit pipeline

## 1.3.0

### Minor Changes

- [minor][34c6df4fb8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/34c6df4fb8):

  adf-schema has been extended with one missing color, email-renderer now bundles up styles into .css file

## 1.2.0

### Minor Changes

- [minor][b5c75d12d5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b5c75d12d5):

  adds support for embedded images in email renderer

## 1.1.1

### Patch Changes

- [patch][fa7d25c521](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fa7d25c521):

  Email renderer es5 tsconfig file tweak

## 1.1.0

### Minor Changes

- [minor][59da918bba](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/59da918bba):

  Email renderer builds to es5

## 1.0.0

### Major Changes

- [major][ff85c1c706](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ff85c1c706):

  Extracted email renderer outside react renderer
