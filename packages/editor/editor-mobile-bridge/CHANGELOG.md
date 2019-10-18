# @atlaskit/editor-mobile-bridge

## 9.0.0

### Major Changes

- [major][bd94b1d552](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bd94b1d552):

  ED-7631: removed deprecated code for actions/decisions component- [major][ae4f336a3a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ae4f336a3a):

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

### Minor Changes

- [minor][80572c341d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80572c341d):

  FM-2502 Relay hybrid editor/renderer analytics to native

  Capture any analytics events within the editor/renderer and send them through `analyticsBridge.trackEvent` to allow native-side to process and fire the events

### Patch Changes

- [patch][cc28419139](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc28419139):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.- [patch][7f3b4e4ec1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7f3b4e4ec1):

  FM-2370 Fix issue where renderBridge.onContentRendered was not being called when renderer was given invalid adf- [patch][c6835f9555](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c6835f9555):

  Update "scroll to element" after changing DOM type for action in ED-7674

- Updated dependencies [4585681e3d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4585681e3d):
- Updated dependencies [e7b5c917de](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7b5c917de):
  - @atlaskit/task-decision@16.0.0
  - @atlaskit/renderer@52.0.0
  - @atlaskit/editor-core@113.2.0
  - @atlaskit/emoji@62.5.4
  - @atlaskit/editor-common@41.2.0
  - @atlaskit/media-core@30.0.17
  - @atlaskit/media-test-helpers@25.2.0
  - @atlaskit/media-client@3.0.0

## 8.11.2

### Patch Changes

- [patch][a2d0043716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a2d0043716):

  Updated version of analytics-next to fix potential incompatibilities with TS 3.6

## 8.11.1

### Patch Changes

- [patch][a8162fcbb9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a8162fcbb9):

  FM-2539 Fix issue where scroll pos would jump when typing at bottom of document in iOS

## 8.11.0

### Minor Changes

- [minor][65ada7f318](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/65ada7f318):

  **FABDODGEM-12 Editor Cashmere Release**

  - [Internal post](http://go.atlassian.com/cashmere-release)

  **Affected editor components:**

  tables, media, mobile, text color, emoji, copy/paste, analytics

  **Performance**

  - Async import for code blocks and task items on renderer
    - https://product-fabric.atlassian.net/browse/ED-7155

  **Table**

  - Add support to sort tables that contains smart links
    - https://product-fabric.atlassian.net/browse/ED-7449
  - Scale table when changing to full width mode
    - https://product-fabric.atlassian.net/browse/ED-7724

  **Text color**

  - Update text color toolbar with right color when text is inside a list, panel, etc.
    - https://product-fabric.atlassian.net/browse/FM-1752

**Mobile** - Implement undo/redo interface on Hybrid Editor - https://product-fabric.atlassian.net/browse/FM-2393

**Copy and Paste**

    - Support copy & paste when missing context-id attr
      - https://product-fabric.atlassian.net/browse/MS-2344
    - Right click + copy image fails the second time that is pasted
      - https://product-fabric.atlassian.net/browse/MS-2324
    - Copying a never touched image for the first time from editor fails to paste
      - https://product-fabric.atlassian.net/browse/MS-2338
    - Implement analytics when a file is copied
      - https://product-fabric.atlassian.net/browse/MS-2036

**Media**

- Add analytics events and error reporting [NEW BIG FEATURE]
  - https://product-fabric.atlassian.net/browse/MS-2275
  - https://product-fabric.atlassian.net/browse/MS-2329
  - https://product-fabric.atlassian.net/browse/MS-2330
  - https://product-fabric.atlassian.net/browse/MS-2331
  - https://product-fabric.atlassian.net/browse/MS-2332
  - https://product-fabric.atlassian.net/browse/MS-2390
- Fixed issue where we can’t insert same file from MediaPicker twice
  - https://product-fabric.atlassian.net/browse/MS-2080
- Disable upload of external files to media
  - https://product-fabric.atlassian.net/browse/MS-2372

**Notable Bug Fixes**

    - Implement consistent behaviour for rule and mediaSingle on insertion
      - Feature Flag:
        - allowNewInsertionBehaviour - [default: true]
      - https://product-fabric.atlassian.net/browse/ED-7503
    - Fixed bug where we were showing table controls on mobile.
      - https://product-fabric.atlassian.net/browse/ED-7690
    - Fixed bug where editor crashes after unmounting react component.
      - https://product-fabric.atlassian.net/browse/ED-7318
    - Fixed bug where custom emojis are not been showed on the editor
      - https://product-fabric.atlassian.net/browse/ED-7726

- [minor][98ad94c69c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/98ad94c69c):

  FM-2393 Expose undo/redo methods on mobile bridge

  native-to-web: undo/redo methods which will hook directly into prosemirror-history's
  web-to-native: undoRedoBridge.stateChange which informs native whether undo and redo are currently available so they can enable/disable their buttons accordingly

## 8.10.2

### Patch Changes

- [patch][ff722f80a4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ff722f80a4):

  ED-7760 Prevent scroll jumping when editing near the end of the document on iOS.

## 8.10.1

### Patch Changes

- [patch][5463e933e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5463e933e6):

  FM-2472 Fix issue where Android Recycled View height would grow indefinitely

## 8.10.0

### Minor Changes

- [minor][3458937c4c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3458937c4c):

  FM-2383 Enable Emoji Picker in native UI on iOS. Supports system and custom emojis via the type ahead flow when type a semicolon ':'- [minor][e171e3f38e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e171e3f38e):

  FM-2055, FM-2261: Expose mobile bridge API methods for scrolling to a mention, action, or decision item by ID. Add localId value into rendered action/decision list elements within the existing custom data attribute to allow scroll targetting.

### Patch Changes

- [patch][9fb705e807](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9fb705e807):

  FM-2212: Refactor Mobile Bridge CSS to improve body scrolling. FM-2024: Improve Mobile Editing UX when tapping beneath Tables, Layouts, Columns.- [patch][40ead387ef](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/40ead387ef):

  ED-7532 Expose ability to cancel default browser behavior when clicking Smart Links- [patch][45ae9e1cc2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/45ae9e1cc2):

  ED-7201 Add new background cell colors and improve text color

- Updated dependencies [166eb02474](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/166eb02474):
- Updated dependencies [80adfefba2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80adfefba2):
  - @atlaskit/editor-json-transformer@6.3.3
  - @atlaskit/editor-test-helpers@10.0.0
  - @atlaskit/task-decision@15.3.4
  - @atlaskit/editor-core@113.0.0
  - @atlaskit/renderer@51.0.0
  - @atlaskit/emoji@62.5.1
  - @atlaskit/mention@18.15.2
  - @atlaskit/status@0.9.13
  - @atlaskit/editor-common@41.0.0

## 8.9.3

### Patch Changes

- [patch][07dd73fa12](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/07dd73fa12):

  FM-2240 Fix issue where smart links would cause hybrid renderer to crash in Android

## 8.9.2

### Patch Changes

- [patch][08ec269915](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/08ec269915):

  ED-7532 Expose ability to cancel default browser behaviour when clicking Smart Links within the Mobile Renderer.

## 8.9.1

### Patch Changes

- [patch][9c28ef71fe](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c28ef71fe):

  Add missing peerDependency in package.json

## 8.9.0

### Minor Changes

- [minor][c6efb2f5b6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c6efb2f5b6):

  Prefix the legacy lifecycle methods with UNSAFE\_\* to avoid warning in React 16.9+

  More information about the deprecation of lifecycles methods can be found here:
  https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

## 8.8.21

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 8.8.20

### Patch Changes

- [patch][0d7d459f1a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0d7d459f1a):

  Fixes type errors which were incompatible with TS 3.6

## 8.8.19

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 8.8.18

### Patch Changes

- [patch][14ee438465](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/14ee438465):

  ED-6714: Re-enable editorActions.replaceDocument for mobile-bridge with better tolerance of invalid nodes

## 8.8.17

- Updated dependencies [69586b5353](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/69586b5353):
  - @atlaskit/editor-core@112.41.6
  - @atlaskit/editor-test-helpers@9.11.6
  - @atlaskit/renderer@49.7.8
  - @atlaskit/media-client@2.0.1
  - @atlaskit/media-core@30.0.10
  - @atlaskit/media-test-helpers@25.0.0

## 8.8.16

- Updated dependencies [84887b940c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/84887b940c):
  - @atlaskit/form@6.1.7
  - @atlaskit/smart-card@12.4.3
  - @atlaskit/textfield@3.0.0

## 8.8.15

- Updated dependencies [ee804f3eeb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ee804f3eeb):
  - @atlaskit/editor-common@39.17.2
  - @atlaskit/editor-core@112.41.2
  - @atlaskit/renderer@49.7.7
  - @atlaskit/media-core@30.0.9
  - @atlaskit/media-test-helpers@24.3.5
  - @atlaskit/media-client@2.0.0

## 8.8.14

- Updated dependencies [688f2957ca](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/688f2957ca):
  - @atlaskit/multi-entry-tools@0.0.2
  - @atlaskit/button@13.1.1
  - @atlaskit/editor-core@112.39.12
  - @atlaskit/editor-test-helpers@9.11.5
  - @atlaskit/emoji@62.2.6
  - @atlaskit/status@0.9.8
  - @atlaskit/smart-card@12.4.1

## 8.8.13

### Patch Changes

- [patch][f34776be97](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f34776be97):

  Type definition files are now referenced in package.json

## 8.8.12

### Patch Changes

- [patch][0bb88234e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0bb88234e6):

  Upgrade prosemirror-view to 1.9.12

## 8.8.11

### Patch Changes

- [patch][ec8066a555](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ec8066a555):

  Upgrade `@types/prosemirror-view` Typescript definitions to latest 1.9.x API

## 8.8.10

### Patch Changes

- [patch][66e3f954c2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/66e3f954c2):

  FM-2149 Disable default oauth2 flow when resolving smart links. Native to resolve auth on their side instead.

## 8.8.9

### Patch Changes

- [patch][bbff8a7d87](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bbff8a7d87):

  Fixes bug, missing version.json file

## 8.8.8

### Patch Changes

- [patch][18dfac7332](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18dfac7332):

  In this PR, we are:

  - Re-introducing dist build folders
  - Adding back cjs
  - Replacing es5 by cjs and es2015 by esm
  - Creating folders at the root for entry-points
  - Removing the generation of the entry-points at the root
    Please see this [ticket](https://product-fabric.atlassian.net/browse/BUILDTOOLS-118) or this [page](https://hello.atlassian.net/wiki/spaces/FED/pages/452325500/Finishing+Atlaskit+multiple+entry+points) for further details

## 8.8.7

- Updated dependencies [790e66bece](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/790e66bece):
  - @atlaskit/button@13.0.11
  - @atlaskit/form@6.1.4
  - @atlaskit/editor-core@112.33.9
  - @atlaskit/media-test-helpers@24.3.1
  - @atlaskit/select@10.0.0

## 8.8.6

### Patch Changes

- [patch][fabee8bd0e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fabee8bd0e):

  ED-7238: refactor test to use EditorProps over importing mentionPlugin

## 8.8.5

### Patch Changes

- [patch][29854703dc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/29854703dc):

  ED-6896 Fix to ensure editor-mobile-bridge releases contain the precompiled app within ./dist

## 8.8.4

> **DON'T USE** - This release is missing a precompiled dist.

### Patch Changes

- [patch][f7d5a189ab](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f7d5a189ab):

  Release non-empty dist package 🤞

## 8.8.3

> **DON'T USE** - This release is missing a precompiled dist.

### Patch Changes

- [patch][ed1fd9801e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ed1fd9801e):

  ED-6896 Leverage buid pipeline fix to ensure correct version number is compiled into dist

## 8.8.2

> **DON'T USE** - This release is missing a precompiled dist.

### Patch Changes

- [patch][e80e60b358](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e80e60b358):

  FM-2123: fixed double @ insertion on mention composition (Android)

## 8.8.1

### Patch Changes

- [patch][dfa96bfdcc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dfa96bfdcc):

  FM-2056 Expose mention tapping via renderer bridge so that iOS/Android can display a native profile card for the selected user

## 8.8.0

### Minor Changes

- [minor][d6c31deacf](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d6c31deacf):

  ED-6701 Upgrade prosemirror-view to 1.9.10 and prosemirror-inputrules to 1.0.4 for composition input improvements

## 8.7.4

### Patch Changes

- [patch][c3e3421cb9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c3e3421cb9):

  FM-2054: improved table rendering in Hybrid Editor for Mobile

## 8.7.3

### Patch Changes

- [patch][bb64fcedcb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bb64fcedcb):

  uploadContext and viewContext fields of MediaProvider (part of Editor and Renderer props) are deprecated. New fields uploadMediaClientConfig and viewMediaClientConfig should be used from now on.

## 8.7.2

- Updated dependencies [393fb6acd2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/393fb6acd2):
  - @atlaskit/editor-test-helpers@9.4.1
  - @atlaskit/renderer@49.0.1
  - @atlaskit/editor-core@112.14.0
  - @atlaskit/smart-card@12.0.0

## 8.7.1

- Updated dependencies [ff85c1c706](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ff85c1c706):
  - @atlaskit/editor-core@112.13.9
  - @atlaskit/task-decision@15.0.4
  - @atlaskit/renderer@49.0.0

## 8.7.0

### Minor Changes

- [minor][2472de1af7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2472de1af7):

  ED-5671 Expose media tapping via renderer bridge so that iOS/Android apps can display the selected item in their native media viewers

## 8.6.4

- [patch][b0ef06c685](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b0ef06c685):

  - This is just a safety release in case anything strange happened in in the previous one. See Pull Request #5942 for details

## 8.6.3

- Updated dependencies [9ecfef12ac](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9ecfef12ac):
  - @atlaskit/editor-core@112.11.0
  - @atlaskit/editor-test-helpers@9.3.4
  - @atlaskit/renderer@48.7.0
  - @atlaskit/media-client@1.2.0
  - @atlaskit/media-core@30.0.3
  - @atlaskit/media-test-helpers@24.0.0

## 8.6.2

- [patch][7d4010d923](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7d4010d923):

  - ED-6765: fixed mediaSingle deletion issue on Android (no workaround)

## 8.6.1

- [patch][7936e9a2a9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7936e9a2a9):

  - ED-6910: fixed a regression in webpack configuration

## 8.6.0

- [minor][21f5217343](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/21f5217343):

  - consume emoji new entrypoints in AK

## 8.5.0

- [minor][7089d49f61](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7089d49f61):

  - consume the new mention entrypoints

## 8.4.0

- [minor][9a1b2075e8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9a1b2075e8):

  - consume new Status entrypoints

## 8.3.2

- [patch][ec1d1861bc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ec1d1861bc):

  - ED-6910: disabled sourcemaps in production

## 8.3.1

- [patch][12aa76d5b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/12aa76d5b5):

  - ED-6814: fixed rendering mediaSingle without collection

## 8.3.0

- [minor][79f0ef0601](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/79f0ef0601):

  - Use strict tsconfig to compile editor packages

## 8.2.4

- [patch][5ad66b6d1a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5ad66b6d1a):

  - [ED-6860] Revert prosemirror-view 1.8.9 bumps, this version was making the cursor typing slowly. this version is recreating all plugins when we use `EditorView.setProps`

## 8.2.3

- Updated dependencies [5e4ff01e4c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5e4ff01e4c):
  - @atlaskit/editor-json-transformer@6.0.2
  - @atlaskit/editor-test-helpers@9.1.4
  - @atlaskit/mention@18.1.0
  - @atlaskit/editor-core@112.0.0

## 8.2.2

- Updated dependencies [154372926b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/154372926b):
  - @atlaskit/editor-json-transformer@6.0.1
  - @atlaskit/editor-test-helpers@9.1.2
  - @atlaskit/editor-core@111.0.0

## 8.2.1

- [patch][72fc33f8e7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/72fc33f8e7):

  - FS-3243 - Refactor status plugin to use new architecture

## 8.2.0

- [minor][47273cabd4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/47273cabd4):

  - ED-6803: Added bridge.clearContent() method for Android

## 8.1.0

- [minor][5a49043dac](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5a49043dac):

  - Enable strictPropertyInitialization in tsconfig.base

## 8.0.1

- [patch][80cf1c1e82](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80cf1c1e82):

  - [ED-6654] Update prosemirror-view to 1.8.9 that fixes a few issues with mouse selections on prosemirror like click on table and the controls doesn't show up

## 8.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 7.6.3

- Updated dependencies [a1192ef860](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a1192ef860):
  - @atlaskit/editor-common@38.0.0
  - @atlaskit/editor-core@109.0.0
  - @atlaskit/renderer@47.0.0
  - @atlaskit/emoji@61.0.0
  - @atlaskit/editor-json-transformer@5.0.4
  - @atlaskit/editor-test-helpers@8.0.8
  - @atlaskit/task-decision@14.0.9
  - @atlaskit/media-core@29.3.0

## 7.6.2

- Updated dependencies [e7292ab444](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7292ab444):
  - @atlaskit/editor-common@37.0.0
  - @atlaskit/editor-core@108.0.0
  - @atlaskit/renderer@46.0.0
  - @atlaskit/emoji@60.0.0
  - @atlaskit/editor-json-transformer@5.0.3
  - @atlaskit/editor-test-helpers@8.0.7
  - @atlaskit/task-decision@14.0.8
  - @atlaskit/media-core@29.2.0

## 7.6.1

- [patch][3ffe0451d1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3ffe0451d1):

  - ED-6486: fixed version number obtained from editor-mobile-bridge

## 7.6.0

- [minor][089eae03fd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/089eae03fd):

  - ED-6486: added method for getting current editor bridge version

## 7.5.1

- Updated dependencies [6cdf11238d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6cdf11238d):
  - @atlaskit/form@5.2.10
  - @atlaskit/smart-card@10.4.2
  - @atlaskit/textfield@1.0.0

## 7.5.0

- [minor][8fb796b610](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8fb796b610):

  - ED-6728: Added scrollToSelection() method to bridge

## 7.4.4

- [patch][f224fa19d5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f224fa19d5):

  - ED-6716 Enables allowConfluenceInlineComment for mobile editor bridge so inline comments are now no longer unsupported content

## 7.4.3

- [patch][83014a7395](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/83014a7395):

  - ED-6716 Prevent mobile-bridge from deleting invalid marks. Temporary fix for inline comments being removed in the document.

## 7.4.2

- Updated dependencies [9c0b4744be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0b4744be):
  - @atlaskit/docs@7.0.3
  - @atlaskit/button@12.0.3
  - @atlaskit/form@5.2.7
  - @atlaskit/select@8.1.1
  - @atlaskit/textfield@0.4.4
  - @atlaskit/editor-common@36.1.12
  - @atlaskit/editor-core@107.13.4
  - @atlaskit/renderer@45.6.1
  - @atlaskit/emoji@59.2.3
  - @atlaskit/mention@17.6.7
  - @atlaskit/status@0.8.3
  - @atlaskit/task-decision@14.0.5
  - @atlaskit/smart-card@10.2.4
  - @atlaskit/theme@8.1.7

## 7.4.1

- [patch][351e23aeb5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/351e23aeb5):

  - ED-6102: fixed inline node deletion on Android

## 7.4.0

- [minor][7964240a6a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7964240a6a):

  - ED-6698: Adding smart cards to the renderer and on document load

## 7.3.2

- Updated dependencies [1e826b2966](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e826b2966):
  - @atlaskit/docs@7.0.2
  - @atlaskit/form@5.2.5
  - @atlaskit/select@8.0.5
  - @atlaskit/textfield@0.4.3
  - @atlaskit/theme@8.1.6
  - @atlaskit/editor-core@107.12.5
  - @atlaskit/renderer@45.4.3
  - @atlaskit/emoji@59.2.1
  - @atlaskit/task-decision@14.0.3
  - @atlaskit/media-core@29.1.4
  - @atlaskit/smart-card@10.2.2
  - @atlaskit/button@12.0.0

## 7.3.1

- [patch][55e47676aa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/55e47676aa):

  - revert update status code splits in Renderer/Editor which causes component dist to be broken

## 7.3.0

- [minor][db29d1eca9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/db29d1eca9):

  - ED-6357: bridge.currentSelection() provides rectangle coords of selected link

## 7.2.0

- [minor][969915d261](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/969915d261):

  - update status import entrypoints in Renderer/editor

## 7.1.10

- [patch][97e555c168](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97e555c168):

  - Revert "[ED-5259 - ED-6200] adds defaultMarks on tableNode (pull request #5259)"

## 7.1.9

- [patch][d13fad66df](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13fad66df):

  - Enable esModuleInterop for typescript, this allows correct use of default exports

## 7.1.8

- [patch][92c8c14019](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/92c8c14019):

  - ED-6492: Fixed media single without dimensions not rendering on mobile

## 7.1.7

- Updated dependencies [c2c36de22b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c2c36de22b):
  - @atlaskit/editor-common@36.0.0
  - @atlaskit/editor-core@107.0.0
  - @atlaskit/renderer@45.0.0
  - @atlaskit/emoji@59.0.0
  - @atlaskit/editor-json-transformer@5.0.2
  - @atlaskit/editor-test-helpers@8.0.3
  - @atlaskit/task-decision@14.0.1
  - @atlaskit/media-core@29.1.0

## 7.1.6

- Updated dependencies [eb4323c388](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/eb4323c388):
  - @atlaskit/editor-core@106.7.3
  - @atlaskit/renderer@44.4.2
  - @atlaskit/task-decision@14.0.0

## 7.1.5

- Updated dependencies [97abf5e006](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97abf5e006):
  - @atlaskit/editor-core@106.7.2
  - @atlaskit/renderer@44.4.1
  - @atlaskit/status@0.8.0

## 7.1.4

- [patch][9e97d4186b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9e97d4186b):

  - ED-6488 Fix dark mode editor in mobile bridge

## 7.1.3

- Updated dependencies [8eff47cacb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8eff47cacb):
  - @atlaskit/form@5.2.3
  - @atlaskit/textfield@0.4.0

## 7.1.2

- [patch][1bcaa1b991](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1bcaa1b991):

  - Add npmignore for index.ts to prevent some jest tests from resolving that instead of index.js

## 7.1.1

- [patch][205b101e2b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/205b101e2b):

  - ED-6230: bump prosemirror-view to 1.8.3; workaround Chrome bug with copy paste multiple images

## 7.1.0

- [minor][ce221ff69e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ce221ff69e):

  - Add smart cards to the mobile bridge

## 7.0.1

- Updated dependencies [b684722884](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b684722884):
  - @atlaskit/editor-core@106.0.3
  - @atlaskit/renderer@44.0.1
  - @atlaskit/emoji@58.1.0
  - @atlaskit/mention@17.1.0
  - @atlaskit/status@0.7.0
  - @atlaskit/task-decision@13.1.0

## 7.0.0

- [major][9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):

  - Dropped ES5 distributables from the typescript packages

## 6.15.0

- [minor][29870e89f2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/29870e89f2):

  - Enable noImplicitAny for mobile bridge

## 6.14.2

- Updated dependencies [7ab3e93996](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7ab3e93996):
  - @atlaskit/editor-common@34.0.0
  - @atlaskit/editor-core@105.0.0
  - @atlaskit/editor-test-helpers@7.0.6
  - @atlaskit/renderer@43.0.0
  - @atlaskit/emoji@57.0.0
  - @atlaskit/editor-json-transformer@4.3.5
  - @atlaskit/task-decision@12.0.1
  - @atlaskit/media-core@28.0.0

## 6.14.1

- Updated dependencies [72c6f68226](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/72c6f68226):
  - @atlaskit/editor-core@104.1.1
  - @atlaskit/renderer@42.0.1
  - @atlaskit/task-decision@12.0.0

## 6.14.0

- [minor][efc3cdd52e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/efc3cdd52e):

  - ED-6354: added bridge for sending JS errors to native

## 6.13.7

- Updated dependencies [4d17df92f8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4d17df92f8):
  - @atlaskit/editor-json-transformer@4.3.4
  - @atlaskit/editor-test-helpers@7.0.5
  - @atlaskit/task-decision@11.3.2
  - @atlaskit/editor-core@104.0.0
  - @atlaskit/renderer@42.0.0

## 6.13.6

- [patch][5e319bb725](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5e319bb725):

  - ED-6286: fix post-PR for media upload on mobile

## 6.13.5

- [patch][4bb4f46a6f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4bb4f46a6f):

  - ED-5603: fixed updating links on mobile

## 6.13.4

- Updated dependencies [76299208e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76299208e6):
  - @atlaskit/button@10.1.3
  - @atlaskit/editor-core@103.0.3
  - @atlaskit/editor-json-transformer@4.3.3
  - @atlaskit/renderer@41.2.1
  - @atlaskit/emoji@56.2.1
  - @atlaskit/mention@16.2.2
  - @atlaskit/status@0.5.1
  - @atlaskit/task-decision@11.3.1
  - @atlaskit/media-core@27.2.3
  - @atlaskit/editor-common@33.0.3
  - @atlaskit/docs@7.0.0
  - @atlaskit/form@5.1.8
  - @atlaskit/select@8.0.0
  - @atlaskit/textfield@0.3.0
  - @atlaskit/theme@8.0.0

## 6.13.3

- Updated dependencies [60f0ad9a7e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/60f0ad9a7e):
  - @atlaskit/editor-json-transformer@4.3.2
  - @atlaskit/editor-core@103.0.0
  - @atlaskit/editor-test-helpers@7.0.4

## 6.13.2

- Updated dependencies [4072865c1c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4072865c1c):
  - @atlaskit/editor-core@102.1.10
  - @atlaskit/renderer@41.1.1
  - @atlaskit/emoji@56.2.0
  - @atlaskit/status@0.5.0
  - @atlaskit/task-decision@11.3.0

## 6.13.1

- [patch][59fcd0bbc9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/59fcd0bbc9):

  - FM-1618: fixed media upload on mobile

## 6.13.0

- [minor][6032a39f1a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6032a39f1a):

  - ED-6189: registered insertBlockType() on mobile bridge

## 6.12.2

- Updated dependencies [e9b824bf86](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e9b824bf86):
  - @atlaskit/form@5.1.7
  - @atlaskit/textfield@0.2.0

## 6.12.1

- Updated dependencies [36bb743af0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/36bb743af0):
  - @atlaskit/editor-core@102.1.1
  - @atlaskit/renderer@41.0.1
  - @atlaskit/emoji@56.1.0
  - @atlaskit/status@0.4.0

## 6.12.0

- [minor][d18b085e2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d18b085e2a):

  - Integrating truly upfront ID

## 6.11.1

- Updated dependencies [4aee5f3cec](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4aee5f3cec):
  - @atlaskit/editor-common@33.0.0
  - @atlaskit/editor-core@102.0.0
  - @atlaskit/renderer@41.0.0
  - @atlaskit/emoji@56.0.0
  - @atlaskit/editor-json-transformer@4.3.1
  - @atlaskit/editor-test-helpers@7.0.2
  - @atlaskit/task-decision@11.2.3
  - @atlaskit/media-core@27.2.0

## 6.11.0

- [minor][27189951b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/27189951b5):

  - ED-5967: added API to enable links on hybrid editor

## 6.10.0

- [minor][30b4e99377](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/30b4e99377):

  - ED-5888 Add editor dark mode

## 6.9.1

- Updated dependencies [4a84fc40e0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4a84fc40e0):
  - @atlaskit/editor-json-transformer@4.1.12
  - @atlaskit/editor-test-helpers@7.0.1
  - @atlaskit/task-decision@11.2.2
  - @atlaskit/editor-core@101.0.0
  - @atlaskit/renderer@40.0.0

## 6.9.0

- [minor][5dc1e046b2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5dc1e046b2):

  - Apply stricture typings to elements related editor code

## 6.8.2

- Updated dependencies [4af5bd2a58](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4af5bd2a58):
  - @atlaskit/editor-json-transformer@4.1.11
  - @atlaskit/editor-common@32.0.2
  - @atlaskit/renderer@39.0.2
  - @atlaskit/emoji@55.0.1
  - @atlaskit/mention@16.2.1
  - @atlaskit/status@0.3.6
  - @atlaskit/editor-core@100.0.0
  - @atlaskit/editor-test-helpers@7.0.0

## 6.8.1

- Updated dependencies [fc6164c8c2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fc6164c8c2):
  - @atlaskit/editor-common@32.0.0
  - @atlaskit/editor-core@99.0.0
  - @atlaskit/renderer@39.0.0
  - @atlaskit/emoji@55.0.0
  - @atlaskit/editor-json-transformer@4.1.10
  - @atlaskit/editor-test-helpers@6.3.22
  - @atlaskit/task-decision@11.2.1
  - @atlaskit/media-core@27.1.0

## 6.8.0

- [minor][e609e6d78c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e609e6d78c):

  - FM-1464: Add callback to ReactRenderer.onComplete to notify native renderBridge

## 6.7.13

- Updated dependencies [06713e0a0c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06713e0a0c):
  - @atlaskit/form@5.1.5
  - @atlaskit/editor-core@98.10.3
  - @atlaskit/select@7.0.0

## 6.7.12

- [patch][334d2db5df](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/334d2db5df):

  - ED-6206: fixed media card issue on mobile editor

## 6.7.11

- [patch][7ad6037cca](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7ad6037cca):

  - ED-6048: fixed bullet point not showing up until text inserted

## 6.7.10

- [patch][557a2b5734](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/557a2b5734):

  - ED-5788: bump prosemirror-view and prosemirror-model

## 6.7.9

- [patch][01935688f8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/01935688f8):

  - FM-1494: turned off CSS properties overflow and overflow-scrolling

## 6.7.8

- Updated dependencies [69c8d0c19c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/69c8d0c19c):
  - @atlaskit/editor-common@31.0.0
  - @atlaskit/editor-core@98.0.0
  - @atlaskit/editor-test-helpers@6.3.17
  - @atlaskit/renderer@38.0.0
  - @atlaskit/emoji@54.0.0
  - @atlaskit/editor-json-transformer@4.1.8
  - @atlaskit/task-decision@11.1.8
  - @atlaskit/media-core@27.0.0

## 6.7.7

- [patch][e2eca7e6d5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e2eca7e6d5):

  - ED-6111: fixed renderer rendering unsupported content with some ADF

## 6.7.6

- [patch][4a52fa0b89](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4a52fa0b89):

  - ED-6050: enabled layouts (mobile editor)

## 6.7.5

- [patch][2db7577588](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2db7577588):

  - ED-5924: Fixes handling of node deletion for composition events.

## 6.7.4

- Updated dependencies [85d5d168fd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/85d5d168fd):
  - @atlaskit/editor-common@30.0.0
  - @atlaskit/editor-core@97.0.0
  - @atlaskit/renderer@37.0.0
  - @atlaskit/emoji@53.0.0
  - @atlaskit/editor-json-transformer@4.1.7
  - @atlaskit/editor-test-helpers@6.3.12
  - @atlaskit/task-decision@11.1.6
  - @atlaskit/media-core@26.2.0

## 6.7.3

- [patch][4e764a26d4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4e764a26d4):

  - ED-6070: Don't render proper mediaCard on mobile until we have a valid collection

## 6.7.2

- Updated dependencies [dadef80](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dadef80):
  - @atlaskit/editor-common@29.0.0
  - @atlaskit/editor-core@96.0.0
  - @atlaskit/renderer@36.0.0
  - @atlaskit/emoji@52.0.0
  - @atlaskit/editor-json-transformer@4.1.6
  - @atlaskit/editor-test-helpers@6.3.11
  - @atlaskit/task-decision@11.1.5
  - @atlaskit/media-core@26.1.0

## 6.7.1

- [patch][060f2da](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/060f2da):

  - ED-5991: bumped prosemirror-view to 1.6.8

## 6.7.0

- [minor][df30c63](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df30c63):

  - ED-5723: Enables typeahead support for mobile editor

  * Added a new bridge `typeAheadBridge`, which contains `typeAheadQuery()` and `dismissTypeAhead()`
    - `typeAheadQuery(query: string, trigger: string)` - This will notify integrators when a user is attempting to filter down a list.
    - `dismissTypeAhead` - Call this to dismiss any typeahead related content.
  * Added bridge function `insertTypeAheadItem()`, which currently only supports inserting mentions.
    - `insertTypeAheadItem(type: 'mention', payload: string)` - Payload is a stringified JSON blob containing the information to insert a mention in this scenario.
  * Added bridge function `setFocus()` to handle returning the focus to the editor after a native interaction.
  * Added new promise `getAccountId`, which is used to highlight the current user's mention.

## 6.6.1

- Updated dependencies [0c116d6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0c116d6):
  - @atlaskit/editor-json-transformer@4.1.5
  - @atlaskit/editor-test-helpers@6.3.8
  - @atlaskit/editor-common@28.0.2
  - @atlaskit/renderer@35.0.1
  - @atlaskit/editor-core@95.0.0
  - @atlaskit/mention@16.0.0

## 6.6.0

- [minor][c0dc7e3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c0dc7e3):

  - FS-3360 - Support state analytics attribute with values new or existing. Implement for web, and mobile support via mobile-bridge.

## 6.5.6

- Updated dependencies [cbb8cb5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cbb8cb5):
  - @atlaskit/editor-common@28.0.0
  - @atlaskit/editor-core@94.0.0
  - @atlaskit/editor-test-helpers@6.3.7
  - @atlaskit/renderer@35.0.0
  - @atlaskit/emoji@51.0.0
  - @atlaskit/editor-json-transformer@4.1.4
  - @atlaskit/task-decision@11.1.4
  - @atlaskit/media-core@26.0.0

## 6.5.5

- Updated dependencies [72d37fb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/72d37fb):
  - @atlaskit/editor-common@27.0.0
  - @atlaskit/editor-core@93.0.0
  - @atlaskit/editor-test-helpers@6.3.6
  - @atlaskit/renderer@34.0.0
  - @atlaskit/emoji@50.0.0
  - @atlaskit/editor-json-transformer@4.1.3
  - @atlaskit/task-decision@11.1.3
  - @atlaskit/media-core@25.0.0

## 6.5.4

- Updated dependencies [e858305](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e858305):
  - @atlaskit/editor-json-transformer@4.1.2
  - @atlaskit/editor-test-helpers@6.3.5
  - @atlaskit/renderer@33.0.4
  - @atlaskit/task-decision@11.1.2
  - @atlaskit/editor-common@26.0.0
  - @atlaskit/editor-core@92.0.19

## 6.5.3

- Updated dependencies [00c648e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/00c648e):
- Updated dependencies [a17bb0e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a17bb0e):
- Updated dependencies [99f08a0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/99f08a0):
  - @atlaskit/editor-core@92.0.9
  - @atlaskit/renderer@33.0.3
  - @atlaskit/status@0.3.0

## 6.5.2

- Updated dependencies [b3738ea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b3738ea):
  - @atlaskit/editor-common@25.0.0
  - @atlaskit/editor-core@92.0.0
  - @atlaskit/renderer@33.0.0
  - @atlaskit/emoji@49.0.0
  - @atlaskit/editor-json-transformer@4.1.1
  - @atlaskit/editor-test-helpers@6.3.4
  - @atlaskit/task-decision@11.1.1
  - @atlaskit/media-core@24.7.0

## 6.5.1

- Updated dependencies [647a46f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/647a46f):
  - @atlaskit/select@6.1.14
  - @atlaskit/textfield@0.1.5
  - @atlaskit/form@5.0.0

## 6.5.0

- [minor][462b70f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/462b70f):

  - ED-5819: Enables support for text color on mobile

## 6.4.10

- Updated dependencies [1205725](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1205725):
  - @atlaskit/task-decision@11.0.10
  - @atlaskit/editor-common@24.0.0
  - @atlaskit/editor-core@91.1.0
  - @atlaskit/editor-json-transformer@4.1.0
  - @atlaskit/editor-test-helpers@6.3.3
  - @atlaskit/renderer@32.1.0

## 6.4.9

- Updated dependencies [80f765b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80f765b):
  - @atlaskit/editor-common@23.0.0
  - @atlaskit/editor-core@91.0.0
  - @atlaskit/renderer@32.0.0
  - @atlaskit/emoji@48.0.0
  - @atlaskit/editor-json-transformer@4.0.25
  - @atlaskit/editor-test-helpers@6.3.2
  - @atlaskit/task-decision@11.0.9
  - @atlaskit/media-core@24.6.0

## 6.4.8

- [patch][f5d4e83](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f5d4e83):

  - ED-5866: Fixes incorrect return from Mocked Emoji provider.

## 6.4.7

- [patch][43501db](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/43501db):

  - ED-5812: Fixes some regressions in the mobile editor

  Including:

  - Disables mediaGoup lazy loading.
  - Fixes unsupported emoji content.
  - Fixes missed call to Android bridge for block state.

## 6.4.6

- [patch][e01ea01](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e01ea01):

  - Bump to match @atlaskit/docs dep

## 6.4.5

- [patch][d3d0d67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d3d0d67):

  - Mobile bridge can be public and updated the description

## 6.4.4

- [patch][7190767](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7190767):

  - Fixes empty collection name and API naming mismatches

## 6.4.3

- [patch][7515804](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7515804):

  - Fixes requesting media auth for empty string collections.

## 6.4.2

- [patch][0a297ba](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0a297ba):

  - Packages should not be shown in the navigation, search and overview

## 6.4.1

- [patch][232238c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/232238c):

  - ED-5866: Turn off lazy loading for images on mobile.

## 6.4.0

- [minor][008c694](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/008c694):

  - ED-5584: Capture emoji requests for native processing on iOS only.

## 6.3.4

- [patch][94094fe](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/94094fe):

  - Adds support for links around images

## 6.3.3

- [patch][3a7224a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3a7224a):

  - ED-5677: enabled quickInsert and gapCursor by default (quickInsert: except for mobile appearance)

## 6.3.2

- [patch][3061b52](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3061b52):

  - AK-5723 - adjust files in package.json to ensure correct publishing of dist/package.json

## 6.3.1

- [patch][345b45c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/345b45c):

  - Update @atlaskit/button inside @atlaskit/editor-mobile-bridge

## 6.3.0

- [minor][086f816](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/086f816):

  - FS-3150 - Support status in the editor-mobile-bridge

## 6.2.1

- Updated dependencies [7e8b4b9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e8b4b9):
  - @atlaskit/editor-common@22.0.0
  - @atlaskit/editor-core@89.0.0
  - @atlaskit/renderer@31.0.0
  - @atlaskit/emoji@47.0.0
  - @atlaskit/editor-json-transformer@4.0.22
  - @atlaskit/editor-test-helpers@6.2.19
  - @atlaskit/task-decision@11.0.4
  - @atlaskit/media-core@24.5.0

## 6.2.0

- [minor][dfcb816](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dfcb816):

  - ED-5818: Add support for inserting block nodes

  Bridge API now supports inserting:

  - Tables
  - Panels
  - Codeblocks
  - Block Quotes
  - Actions
  - Decisions

## 6.1.0

- [minor][ab6d96b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ab6d96b):

  - ED-5710: Fixes calling media upfront.

  We now only call for the media auth, when rendering / loading a media item.

## 6.0.0

- [major][6d6522b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6d6522b):

  - Refactor mentions to use TypeAhead plugin

## 5.6.0

- [minor][d901563](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d901563):

  - FM-1388: Add bridge API to both editor and renderer to set padding

## 5.5.0

- [minor][586100b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/586100b):

  - ED-5584: Added Emoji support to the renderer.

## 5.4.1

- [patch][05a4cf3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/05a4cf3):

  - FM-1358: Fixes scrolling lag when encountering a shadow

## 5.4.0

- [minor][611d8a5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/611d8a5):

  - ED-5707 Enable pinch to zoom in Renderer

## 5.3.0

- [minor][13a108f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/13a108f):

  - Updated package bundle

## 5.2.4

- Updated dependencies [2c21466](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2c21466):
  - @atlaskit/editor-common@21.0.0
  - @atlaskit/editor-core@88.0.0
  - @atlaskit/renderer@30.0.0
  - @atlaskit/editor-json-transformer@4.0.21
  - @atlaskit/editor-test-helpers@6.2.16
  - @atlaskit/task-decision@11.0.2
  - @atlaskit/media-core@24.4.0

## 5.2.3

- [patch][f6c3f01](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f6c3f01):

  - ED-5586: Removes padding from editor and renderer for mobile.

## 5.2.2

- [patch][3756327](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3756327):

  - ED-5588: Fixes font size changing when rotating viewport on iOS.

## 5.2.1

- [patch][a9eb99f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a9eb99f):

  - ED-5510: fix deleting last character in a cell in Safari

## 5.2.0

- [minor][f5696d5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f5696d5):

  - ED-5606: Added support for sending task update events to native for handling

## 5.1.0

- [minor][d793999](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d793999):

  - ED-5583: Pass all link events to native for handling

## 5.0.4

- [patch][e5e040c" d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e5e040c"
  d):

  - Fixes passing null to renderer before we have content. ED-5587

## 5.0.3

- [patch] Fixed rendering media in the renderer. FM-1280 [00aaf8e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/00aaf8e)

## 5.0.2

- [patch] Fixes rendering elements on iOS before scrolling ends. FM-1277 [9d3029b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d3029b)

## 5.0.1

- [patch] ED-5513: render table that respects columns widths except on mobile [716bb9d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/716bb9d)

## 5.0.0

- [major] Media refactor and fileID upfront [052ce89](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/052ce89)

## 4.0.15

- [patch] Fixing the padding and the renderer bridge content [e550390](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e550390)

## 4.0.14

- [patch] Updated dependencies [b1ce691](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b1ce691)
  - @atlaskit/editor-common@20.0.0
  - @atlaskit/editor-core@86.0.0
  - @atlaskit/renderer@29.0.0
  - @atlaskit/editor-json-transformer@4.0.18
  - @atlaskit/editor-test-helpers@6.2.7
  - @atlaskit/task-decision@11.0.1
  - @atlaskit/media-core@24.3.0

## 4.0.13

- [patch] Updated dependencies [8a1ccf2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8a1ccf2)
  - @atlaskit/renderer@28.0.1
  - @atlaskit/editor-core@85.6.0
  - @atlaskit/task-decision@11.0.0

## 4.0.12

- [patch] Updated dependencies [6e510d8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6e510d8)
  - @atlaskit/editor-core@85.5.1
  - @atlaskit/editor-common@19.3.2
  - @atlaskit/media-core@24.2.2
  - @atlaskit/renderer@28.0.0

## 4.0.11

- [patch] Updated dependencies [2afa60d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2afa60d)
  - @atlaskit/editor-common@19.0.0
  - @atlaskit/editor-core@85.0.0
  - @atlaskit/renderer@27.0.0
  - @atlaskit/editor-json-transformer@4.0.17
  - @atlaskit/editor-test-helpers@6.2.6
  - @atlaskit/media-core@24.2.0

## 4.0.10

- [patch] Updated dependencies [8b2c4d3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8b2c4d3)
- [patch] Updated dependencies [3302d51](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3302d51)
  - @atlaskit/editor-common@18.0.0
  - @atlaskit/editor-core@84.0.0
  - @atlaskit/renderer@26.0.0
  - @atlaskit/editor-json-transformer@4.0.16
  - @atlaskit/editor-test-helpers@6.2.5
  - @atlaskit/media-core@24.1.0

## 4.0.9

- [patch] Updated dependencies [23c7eca](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/23c7eca)
  - @atlaskit/editor-json-transformer@4.0.15
  - @atlaskit/editor-test-helpers@6.2.4
  - @atlaskit/editor-core@83.0.0
  - @atlaskit/renderer@25.0.0

## 4.0.8

- [patch] change grey to gray to keep consistent across editor pkgs [1b2a0b3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1b2a0b3)

## 4.0.7

- [patch] ED-5424: fix telepointers in collab editing [643a860](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/643a860)

## 4.0.6

- [patch] Updated dependencies [ef76f1f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ef76f1f)
  - @atlaskit/editor-json-transformer@4.0.13
  - @atlaskit/editor-common@17.0.1
  - @atlaskit/editor-core@82.0.0
  - @atlaskit/editor-test-helpers@6.1.3

## 4.0.5

- [patch] Updated dependencies [927ae63](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/927ae63)
  - @atlaskit/editor-common@17.0.0
  - @atlaskit/editor-core@81.0.0
  - @atlaskit/editor-test-helpers@6.1.2
  - @atlaskit/renderer@24.0.0
  - @atlaskit/editor-json-transformer@4.0.12
  - @atlaskit/media-core@24.0.0

## 4.0.4

- [patch] Remove mention calls from the bridge [3b04be7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3b04be7)

## 4.0.3

- [patch] ED-5346: prosemirror upgrade [5bd4432](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5bd4432)

## 4.0.2

- [patch] Updated dependencies [2a6410f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2a6410f)
  - @atlaskit/editor-common@16.2.0
  - @atlaskit/editor-core@80.5.0
  - @atlaskit/renderer@23.0.0

## 4.0.1

- [patch] Fix the flash bug on scroll in iOS webviews [6c047b4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6c047b4)

## 4.0.0

- [major] Adding renderer to the mobile bridge [3b4c276](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3b4c276)

## 3.0.11

- [patch] Fixing the android bridge change [6d5e0a9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6d5e0a9)

## 3.0.10

- [patch] Fixing the scroll after setting content on Mobile [0a03e2d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0a03e2d)

## 3.0.9

- [patch] Fix the tap hightlight and padding [ffd3b8a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ffd3b8a)

## 3.0.8

- [patch] Updated dependencies [6e1d642](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6e1d642)
  - @atlaskit/editor-core@80.0.0
  - @atlaskit/editor-json-transformer@4.0.11
  - @atlaskit/editor-test-helpers@6.0.9
  - @atlaskit/media-core@23.2.0

## 3.0.7

- [patch] Sending block formatting changes separately [96c9414](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/96c9414)

## 3.0.6

- [patch] Making the media resolution aysnc [c6bacea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c6bacea)

## 3.0.5

- [patch] Updated dependencies [7545979](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7545979)
  - @atlaskit/editor-core@79.0.0
  - @atlaskit/editor-json-transformer@4.0.8
  - @atlaskit/media-core@23.1.0

## 3.0.4

- [patch] Updated dependencies [911a570](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/911a570)
  - @atlaskit/media-core@23.0.2
  - @atlaskit/editor-json-transformer@4.0.7
  - @atlaskit/editor-core@78.0.0

## 3.0.3

- [patch] Updated dependencies [b12f7e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b12f7e6)
  - @atlaskit/mention@15.0.6
  - @atlaskit/editor-json-transformer@4.0.6
  - @atlaskit/editor-core@77.1.4

## 3.0.2

- [patch] Allow all nodes and fix load time on Mobile [a9080a7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a9080a7)

## 3.0.1

- [patch] update the dependency of react-dom to 16.4.2 due to vulnerability in previous versions read https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html for details [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
- [none] Updated dependencies [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
  - @atlaskit/mention@15.0.5
  - @atlaskit/editor-core@77.0.2

## 3.0.0

- [patch] Synchronous property "serviceHost" as part of many Interfaces in media components (like MediaApiConfig) is removed and replaced with asynchronous "baseUrl" as part of Auth object. [d02746f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d02746f)
- [none] Updated dependencies [597e0bd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/597e0bd)
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-core@77.0.0
- [none] Updated dependencies [61df453](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/61df453)
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-core@77.0.0
- [none] Updated dependencies [812a39c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/812a39c)
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-core@77.0.0
- [none] Updated dependencies [c8eb097](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c8eb097)
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-core@77.0.0
- [major] Updated dependencies [d02746f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d02746f)
  - @atlaskit/media-core@23.0.0
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-core@77.0.0

## 2.0.7

- [patch] Upgrade to webpack 4 [ea8a4bb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ea8a4bb)
- [none] Updated dependencies [ea8a4bb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ea8a4bb)

## 2.0.6

- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/mention@15.0.2
  - @atlaskit/editor-json-transformer@4.0.3
  - @atlaskit/editor-core@76.4.5
  - @atlaskit/media-core@22.2.1

## 2.0.5

- [patch] Updated dependencies [f6bf6c8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f6bf6c8)
  - @atlaskit/mention@15.0.0
  - @atlaskit/editor-core@76.1.0

## 2.0.4

- [patch] ED-4961 refactor block-type plugin [b88ca64](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b88ca64)
- [patch] Updated dependencies [b88ca64](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b88ca64)
  - @atlaskit/editor-core@76.0.23

## 2.0.3

- [patch] ED-4960, refactoring text formatting plugin. [f4a0996](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f4a0996)
- [none] Updated dependencies [f4a0996](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f4a0996)
  - @atlaskit/editor-core@76.0.16

## 2.0.2

- [patch] Fixing CSS issues [93d3ccf](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/93d3ccf)

## 2.0.1

- [none] Updated dependencies [25353c3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/25353c3)
  - @atlaskit/editor-core@76.0.0
  - @atlaskit/editor-json-transformer@4.0.1
- [patch] Updated dependencies [38c0543](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/38c0543)
  - @atlaskit/editor-core@76.0.0
  - @atlaskit/editor-json-transformer@4.0.1

## 2.0.0

- [major] Updates to React ^16.4.0 [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
- [major] Updated dependencies [563a7eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/563a7eb)
  - @atlaskit/editor-json-transformer@4.0.0
  - @atlaskit/mention@14.0.0
  - @atlaskit/editor-core@75.0.0
  - @atlaskit/media-core@22.0.0
- [major] Updated dependencies [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
  - @atlaskit/mention@14.0.0
  - @atlaskit/editor-json-transformer@4.0.0
  - @atlaskit/editor-core@75.0.0
  - @atlaskit/media-core@22.0.0

## 1.0.8

- [patch] Updated dependencies [c98857e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c98857e)
  - @atlaskit/mention@13.1.10
  - @atlaskit/editor-core@74.0.16
- [patch] Updated dependencies [8a125a7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8a125a7)
  - @atlaskit/mention@13.1.10
  - @atlaskit/editor-core@74.0.16
- [patch] Updated dependencies [cacfb53](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cacfb53)
  - @atlaskit/mention@13.1.10
  - @atlaskit/editor-core@74.0.16

## 1.0.7

- [patch] ED-4964: refactor lists state [81f1a95](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/81f1a95)
- [none] Updated dependencies [81f1a95](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/81f1a95)
  - @atlaskit/editor-core@74.0.1

## 1.0.6

- [patch] Updated dependencies [af0cde6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/af0cde6)
  - @atlaskit/editor-core@74.0.0
  - @atlaskit/editor-json-transformer@3.1.7

## 1.0.5

- [none] Updated dependencies [8c711bd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8c711bd)
  - @atlaskit/editor-core@73.9.26
- [patch] Updated dependencies [42ee1ea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/42ee1ea)
  - @atlaskit/media-core@21.0.0
  - @atlaskit/editor-core@73.9.26

## 1.0.4

- [patch] Updated dependencies [d7dca64](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d7dca64)
  - @atlaskit/mention@13.1.4
  - @atlaskit/editor-core@73.9.10

## 1.0.3

- [patch] Updated dependencies [8d5053e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8d5053e)
  - @atlaskit/mention@13.1.3
  - @atlaskit/editor-json-transformer@3.1.5
  - @atlaskit/editor-core@73.9.5

## 1.0.2

- [patch] Updated dependencies [0cf2f52](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0cf2f52)
  - @atlaskit/mention@13.1.2
  - @atlaskit/editor-json-transformer@3.1.4
  - @atlaskit/editor-core@73.9.2

## 1.0.1

- [patch] Updated dependencies [c57e9c1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c57e9c1)
  - @atlaskit/editor-core@73.8.19
  - @atlaskit/media-core@20.0.0

## 1.0.0

- [major] Added support for blocks and lists [b5a920b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b5a920b)
- [none] Updated dependencies [b5a920b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b5a920b)
  - @atlaskit/editor-core@73.8.12

## 0.2.4

- [patch] Bump prosemirror-view to 1.3.3 to fix issue where newlines in code-blocks would vanish in IE11. (ED-4830) [fc5a082](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fc5a082)
- [none] Updated dependencies [fc5a082](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fc5a082)
  - @atlaskit/editor-core@73.8.3

## 0.2.3

- [patch] ED-4489 Fix can't submit with enter using Korean and Japanese IME [0274524](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0274524)
- [none] Updated dependencies [0274524](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0274524)
  - @atlaskit/editor-core@73.7.8

## 0.2.2

- [patch] Clean Changelogs - remove duplicates and empty entries [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
- [none] Updated dependencies [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
  - @atlaskit/mention@13.1.1
  - @atlaskit/editor-json-transformer@3.1.2
  - @atlaskit/editor-core@73.7.5
  - @atlaskit/media-core@19.1.3

## 0.2.1

- [patch] Update changelogs to remove duplicate [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
- [none] Updated dependencies [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
  - @atlaskit/editor-json-transformer@3.1.1
  - @atlaskit/editor-core@73.7.1
  - @atlaskit/media-core@19.1.2

## 0.2.0

- [none] Updated dependencies [7217164](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7217164)
  - @atlaskit/editor-core@73.5.0
  - @atlaskit/mention@13.1.0
  - @atlaskit/editor-json-transformer@3.1.0

## 0.1.9

- [patch] Provided bridge implementation to support Media on iOS. [43875e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/43875e6)

## 0.1.8

- [patch] Updated dependencies [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
  - @atlaskit/mention@13.0.0
  - @atlaskit/editor-json-transformer@3.0.9
  - @atlaskit/editor-core@73.0.0
  - @atlaskit/media-core@19.0.0

## 0.1.7

- [patch] Updated dependencies [1c87e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1c87e5a)
  - @atlaskit/mention@12.0.3
  - @atlaskit/editor-json-transformer@3.0.8
  - @atlaskit/editor-core@72.2.2

## 0.1.6

- [patch] Updated dependencies [639ae5e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/639ae5e)
  - @atlaskit/mention@12.0.2
  - @atlaskit/editor-core@72.1.8

## 0.1.5

- [none] Updated dependencies [ba702bc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ba702bc)
  - @atlaskit/mention@12.0.0
  - @atlaskit/editor-core@72.0.6

## 0.1.4

- [none] Updated dependencies [febc44d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/febc44d)
  - @atlaskit/editor-core@72.0.0
  - @atlaskit/editor-json-transformer@3.0.7

## 0.1.3

- [none] Updated dependencies [8fd4dd1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8fd4dd1)
  - @atlaskit/mention@11.1.4
  - @atlaskit/editor-json-transformer@3.0.6
  - @atlaskit/editor-core@71.4.0

## 0.1.2

- [patch] Bump to prosemirror-view@1.3.0 [faea319](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/faea319)

## 0.1.0

- [minor] Media APIs exposed to mobile clients and can be used by native media components [31c66f4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/31c66f4)

## 0.0.17

- [patch] Added missing dependencies and added lint rule to catch them all [0672503](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0672503)

## 0.0.14

- [patch] enabled minimization @ mobile bridge [95703e3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/95703e3)

## 0.0.13

- [patch] Implemented setContent for editor mobile native-to-web bridge [b5c150b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b5c150b)

## 0.0.11

- [patch] Fix running 'run.if.package.changed' script in cases like master branch or package being dependent only [d90ab10](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d90ab10)

## 0.0.9

- [patch] Small changes in build process for editor-mobile-bridge [78d543a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/78d543a)

## 0.0.8

- [patch] Upgrading ProseMirror Libs [35d14d5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d14d5)

## 0.0.3

- [patch] Fix dependency [d4bcbf4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d4bcbf4)

## 0.0.2

- [patch] editor-mobile-bridge module introduced [4a338f6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4a338f6)
