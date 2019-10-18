# @atlaskit/editor-wikimarkup-transformer

## 4.5.3

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

- [patch][c64e893ef8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c64e893ef8):

  merge multiple media groups with single child media node into one media group with multiple children media nodes

- Updated dependencies [4585681e3d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4585681e3d):
- Updated dependencies [bd94b1d552](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bd94b1d552):
  - @atlaskit/renderer@52.0.0
  - @atlaskit/editor-core@113.2.0
  - @atlaskit/editor-common@41.2.0
  - @atlaskit/editor-json-transformer@6.3.4
  - @atlaskit/profilecard@12.3.3
  - @atlaskit/util-data-test@13.0.0

## 4.5.2

### Patch Changes

- [patch][e95f75250d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e95f75250d):

  a bug where a | character at the start of a monospace would cause the parser to crash was fixed, but adding table token type to the ignorelist of the monospace parser.

## 4.5.1

- Updated dependencies [1194ad5eb3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1194ad5eb3):
- Updated dependencies [166eb02474](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/166eb02474):
- Updated dependencies [40ead387ef](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/40ead387ef):
- Updated dependencies [80adfefba2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80adfefba2):
  - @atlaskit/editor-common@41.0.0
  - @atlaskit/editor-core@113.0.0
  - @atlaskit/editor-json-transformer@6.3.3
  - @atlaskit/editor-test-helpers@10.0.0
  - @atlaskit/renderer@51.0.0
  - @atlaskit/adf-schema@4.0.0

## 4.5.0

### Minor Changes

- [minor][7b58498bbf](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7b58498bbf):

  CS-916 ADF->wiki conversion renders empty cells

## 4.4.9

- Updated dependencies [08ec269915](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/08ec269915):
  - @atlaskit/editor-core@112.44.2
  - @atlaskit/editor-json-transformer@6.3.2
  - @atlaskit/editor-test-helpers@9.11.13
  - @atlaskit/editor-common@40.0.0
  - @atlaskit/renderer@50.0.0

## 4.4.8

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 4.4.7

- Updated dependencies [6164bc2629](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6164bc2629):
  - @atlaskit/editor-core@112.39.5
  - @atlaskit/editor-json-transformer@6.2.3
  - @atlaskit/editor-test-helpers@9.11.3
  - @atlaskit/adf-schema@3.0.0
  - @atlaskit/editor-common@39.17.0
  - @atlaskit/renderer@49.7.5

## 4.4.6

### Patch Changes

- [patch][d77e23ae9b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d77e23ae9b):

  Respect empty column

## 4.4.5

### Patch Changes

- [patch][5d9be88694](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5d9be88694):

  fix the issuer where color macro is broken down to multiple paragraph

## 4.4.4

### Patch Changes

- [patch][bbff8a7d87](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bbff8a7d87):

  Fixes bug, missing version.json file

## 4.4.3

### Patch Changes

- [patch][18dfac7332](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18dfac7332):

  In this PR, we are:

  - Re-introducing dist build folders
  - Adding back cjs
  - Replacing es5 by cjs and es2015 by esm
  - Creating folders at the root for entry-points
  - Removing the generation of the entry-points at the root
    Please see this [ticket](https://product-fabric.atlassian.net/browse/BUILDTOOLS-118) or this [page](https://hello.atlassian.net/wiki/spaces/FED/pages/452325500/Finishing+Atlaskit+multiple+entry+points) for further details

## 4.4.2

### Patch Changes

- [patch][f7921c3d54](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f7921c3d54):

  Specail case for hanlding emoji in table

## 4.4.1

- Updated dependencies [2b333a4c6d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2b333a4c6d):
  - @atlaskit/editor-common@39.8.7
  - @atlaskit/renderer@49.1.2
  - @atlaskit/profilecard@12.0.0

## 4.4.0

### Minor Changes

- [minor][10b8678029](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/10b8678029):

  Fix es5 build

## 4.3.0

### Minor Changes

- [minor][f05bb0df52](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f05bb0df52):

  Improve emoji parsing

## 4.2.5

- Updated dependencies [ff85c1c706](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ff85c1c706):
  - @atlaskit/editor-core@112.13.9
  - @atlaskit/renderer@49.0.0

## 4.2.4

- Updated dependencies [a40f54404e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a40f54404e):
  - @atlaskit/editor-common@39.8.2
  - @atlaskit/renderer@48.8.2
  - @atlaskit/profilecard@11.0.0

## 4.2.3

- [patch][e794ba2c53](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e794ba2c53):

  - Release for es5

## 4.2.2

- [patch][3e9995b40d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3e9995b40d):

  - remove unnessary dependencies and bring back es5 to wikimarkup

## 4.2.1

- [patch][78f6d092be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/78f6d092be):

  - Allow issue links to be surrounded by ()

## 4.2.0

- [minor][79f0ef0601](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/79f0ef0601):

  - Use strict tsconfig to compile editor packages

## 4.1.2

- Updated dependencies [5e4ff01e4c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5e4ff01e4c):
  - @atlaskit/editor-json-transformer@6.0.2
  - @atlaskit/editor-test-helpers@9.1.4
  - @atlaskit/editor-core@112.0.0

## 4.1.1

- Updated dependencies [154372926b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/154372926b):
  - @atlaskit/editor-json-transformer@6.0.1
  - @atlaskit/editor-test-helpers@9.1.2
  - @atlaskit/editor-core@111.0.0

## 4.1.0

- [minor][5a49043dac](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5a49043dac):

  - Enable strictPropertyInitialization in tsconfig.base

## 4.0.9

- Updated dependencies [7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):
  - @atlaskit/adf-schema@2.5.5
  - @atlaskit/editor-common@39.0.0
  - @atlaskit/editor-core@110.0.0
  - @atlaskit/renderer@48.0.0
  - @atlaskit/docs@8.0.0
  - @atlaskit/theme@9.0.0
  - @atlaskit/editor-json-transformer@6.0.0
  - @atlaskit/editor-test-helpers@9.0.0
  - @atlaskit/util-data-test@12.0.0
  - @atlaskit/profilecard@10.0.0

## 4.0.8

- Updated dependencies [a1192ef860](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a1192ef860):
  - @atlaskit/editor-common@38.0.0
  - @atlaskit/editor-core@109.0.0
  - @atlaskit/renderer@47.0.0
  - @atlaskit/editor-json-transformer@5.0.4
  - @atlaskit/editor-test-helpers@8.0.8
  - @atlaskit/util-data-test@11.1.9

## 4.0.7

- Updated dependencies [e7292ab444](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7292ab444):
  - @atlaskit/editor-common@37.0.0
  - @atlaskit/editor-core@108.0.0
  - @atlaskit/renderer@46.0.0
  - @atlaskit/editor-json-transformer@5.0.3
  - @atlaskit/editor-test-helpers@8.0.7
  - @atlaskit/util-data-test@11.1.8

## 4.0.6

- Updated dependencies [9c0b4744be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0b4744be):
  - @atlaskit/docs@7.0.3
  - @atlaskit/editor-common@36.1.12
  - @atlaskit/editor-core@107.13.4
  - @atlaskit/renderer@45.6.1
  - @atlaskit/profilecard@9.0.2
  - @atlaskit/theme@8.1.7

## 4.0.5

- [patch][97e555c168](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97e555c168):

  - Revert "[ED-5259 - ED-6200] adds defaultMarks on tableNode (pull request #5259)"

## 4.0.4

- [patch][b425ea772b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b425ea772b):

  - Revert "ED-5505 add strong as default mark to table header (pull request #5291)"

## 4.0.3

- Updated dependencies [bfca144ea5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bfca144ea5):
  - @atlaskit/editor-common@36.1.1
  - @atlaskit/renderer@45.2.2
  - @atlaskit/profilecard@9.0.0

## 4.0.2

- Updated dependencies [c2c36de22b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c2c36de22b):
  - @atlaskit/editor-common@36.0.0
  - @atlaskit/editor-core@107.0.0
  - @atlaskit/renderer@45.0.0
  - @atlaskit/editor-json-transformer@5.0.2
  - @atlaskit/editor-test-helpers@8.0.3
  - @atlaskit/util-data-test@11.1.5

## 4.0.1

- [patch][1bcaa1b991](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1bcaa1b991):

  - Add npmignore for index.ts to prevent some jest tests from resolving that instead of index.js

## 4.0.0

- [major][9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):

  - Dropped ES5 distributables from the typescript packages

## 3.5.6

- Updated dependencies [7ab3e93996](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7ab3e93996):
  - @atlaskit/editor-common@34.0.0
  - @atlaskit/editor-core@105.0.0
  - @atlaskit/editor-test-helpers@7.0.6
  - @atlaskit/renderer@43.0.0
  - @atlaskit/editor-json-transformer@4.3.5
  - @atlaskit/util-data-test@10.2.5

## 3.5.5

- Updated dependencies [4d17df92f8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4d17df92f8):
  - @atlaskit/editor-json-transformer@4.3.4
  - @atlaskit/editor-test-helpers@7.0.5
  - @atlaskit/editor-core@104.0.0
  - @atlaskit/renderer@42.0.0

## 3.5.4

- Updated dependencies [dbff4fdcf9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dbff4fdcf9):
  - @atlaskit/editor-common@33.0.4
  - @atlaskit/renderer@41.3.1
  - @atlaskit/profilecard@8.0.0

## 3.5.3

- Updated dependencies [76299208e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76299208e6):
  - @atlaskit/editor-core@103.0.3
  - @atlaskit/editor-json-transformer@4.3.3
  - @atlaskit/renderer@41.2.1
  - @atlaskit/util-data-test@10.2.3
  - @atlaskit/editor-common@33.0.3
  - @atlaskit/docs@7.0.0
  - @atlaskit/theme@8.0.0
  - @atlaskit/profilecard@7.0.0

## 3.5.2

- Updated dependencies [60f0ad9a7e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/60f0ad9a7e):
  - @atlaskit/editor-json-transformer@4.3.2
  - @atlaskit/editor-core@103.0.0
  - @atlaskit/editor-test-helpers@7.0.4

## 3.5.1

- Updated dependencies [4aee5f3cec](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4aee5f3cec):
  - @atlaskit/editor-common@33.0.0
  - @atlaskit/editor-core@102.0.0
  - @atlaskit/renderer@41.0.0
  - @atlaskit/editor-json-transformer@4.3.1
  - @atlaskit/editor-test-helpers@7.0.2
  - @atlaskit/util-data-test@10.2.2

## 3.5.0

- [minor][9bb0ecb48a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9bb0ecb48a):

  - Support wiki to smart link

## 3.4.0

- [minor][1eb20bca95](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1eb20bca95):

  - ED-6368: No implicit any for editor-\*-transformer packages

## 3.3.0

- [minor][6b23c22b7d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6b23c22b7d):

  - Advanced table fallback

## 3.2.0

- [minor][06532fe23e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06532fe23e):

  - Adds mediaSingle support for list

## 3.1.0

- [minor][8709be280f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8709be280f):

  - Add issue key token to convert into inline cards (Jira Smart Cards)

## 3.0.3

- Updated dependencies [4a84fc40e0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4a84fc40e0):
  - @atlaskit/editor-json-transformer@4.1.12
  - @atlaskit/editor-test-helpers@7.0.1
  - @atlaskit/editor-core@101.0.0
  - @atlaskit/renderer@40.0.0

## 3.0.2

- Updated dependencies [4af5bd2a58](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4af5bd2a58):
  - @atlaskit/editor-json-transformer@4.1.11
  - @atlaskit/adf-schema@1.5.4
  - @atlaskit/editor-common@32.0.2
  - @atlaskit/renderer@39.0.2
  - @atlaskit/editor-core@100.0.0
  - @atlaskit/editor-test-helpers@7.0.0

## 3.0.1

- Updated dependencies [fc6164c8c2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fc6164c8c2):
  - @atlaskit/editor-common@32.0.0
  - @atlaskit/editor-core@99.0.0
  - @atlaskit/renderer@39.0.0
  - @atlaskit/editor-json-transformer@4.1.10
  - @atlaskit/editor-test-helpers@6.3.22
  - @atlaskit/util-data-test@10.2.1

## 3.0.0

- [major][be24d8040f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/be24d8040f):

  - Change parse function to accept context parameter

## 2.10.3

- [patch][279b08b325](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/279b08b325):

  - Refactor internal TokenParser interface to receive an object and add immutable shared Context internally

## 2.10.2

- [patch][557a2b5734](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/557a2b5734):

  - ED-5788: bump prosemirror-view and prosemirror-model

## 2.10.1

- Updated dependencies [69c8d0c19c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/69c8d0c19c):
  - @atlaskit/editor-common@31.0.0
  - @atlaskit/editor-core@98.0.0
  - @atlaskit/editor-test-helpers@6.3.17
  - @atlaskit/renderer@38.0.0
  - @atlaskit/editor-json-transformer@4.1.8
  - @atlaskit/util-data-test@10.0.36

## 2.10.0

- [minor][f56a86f8ff](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f56a86f8ff):

  - Adds in smart card conversion

## 2.9.11

- Updated dependencies [85d5d168fd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/85d5d168fd):
  - @atlaskit/editor-common@30.0.0
  - @atlaskit/editor-core@97.0.0
  - @atlaskit/renderer@37.0.0
  - @atlaskit/editor-json-transformer@4.1.7
  - @atlaskit/editor-test-helpers@6.3.12
  - @atlaskit/util-data-test@10.0.34

## 2.9.10

- Updated dependencies [dadef80](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dadef80):
  - @atlaskit/editor-common@29.0.0
  - @atlaskit/editor-core@96.0.0
  - @atlaskit/renderer@36.0.0
  - @atlaskit/editor-json-transformer@4.1.6
  - @atlaskit/editor-test-helpers@6.3.11
  - @atlaskit/util-data-test@10.0.33

## 2.9.9

- Updated dependencies [0c116d6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0c116d6):
  - @atlaskit/editor-json-transformer@4.1.5
  - @atlaskit/editor-test-helpers@6.3.8
  - @atlaskit/editor-common@28.0.2
  - @atlaskit/renderer@35.0.1
  - @atlaskit/util-data-test@10.0.32
  - @atlaskit/editor-core@95.0.0

## 2.9.8

- [patch][74bf476](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/74bf476):

  - support codeblock in list

## 2.9.7

- Updated dependencies [cbb8cb5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cbb8cb5):
  - @atlaskit/editor-common@28.0.0
  - @atlaskit/editor-core@94.0.0
  - @atlaskit/editor-test-helpers@6.3.7
  - @atlaskit/renderer@35.0.0
  - @atlaskit/editor-json-transformer@4.1.4
  - @atlaskit/util-data-test@10.0.31

## 2.9.6

- Updated dependencies [72d37fb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/72d37fb):
  - @atlaskit/editor-common@27.0.0
  - @atlaskit/editor-core@93.0.0
  - @atlaskit/editor-test-helpers@6.3.6
  - @atlaskit/renderer@34.0.0
  - @atlaskit/editor-json-transformer@4.1.3
  - @atlaskit/util-data-test@10.0.30

## 2.9.5

- Updated dependencies [e858305](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e858305):
  - @atlaskit/editor-json-transformer@4.1.2
  - @atlaskit/editor-test-helpers@6.3.5
  - @atlaskit/renderer@33.0.4
  - @atlaskit/editor-common@26.0.0
  - @atlaskit/editor-core@92.0.19

## 2.9.4

- [patch][aca2425](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aca2425):

  - Escaping in common formatter

## 2.9.3

- [patch][df74239](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df74239):

  - Parse mailto text

## 2.9.2

- [patch][1d9228c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1d9228c):

  - trim escape in link href

## 2.9.1

- [patch][75046da](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/75046da):

  - macros keyword can be case insensitive

## 2.9.0

- [minor][a4b49b2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4b49b2):

  - Parse macros inside table cells

## 2.8.2

- Updated dependencies [b3738ea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b3738ea):
  - @atlaskit/editor-common@25.0.0
  - @atlaskit/editor-core@92.0.0
  - @atlaskit/renderer@33.0.0
  - @atlaskit/editor-json-transformer@4.1.1
  - @atlaskit/editor-test-helpers@6.3.4
  - @atlaskit/util-data-test@10.0.28

## 2.8.1

- [patch][0a28c41](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0a28c41):

  - bq. doesn't need a following space

## 2.8.0

- [minor][1205725](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1205725):

  - Move schema to its own package

## 2.7.6

- Updated dependencies [80f765b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80f765b):
  - @atlaskit/editor-common@23.0.0
  - @atlaskit/editor-core@91.0.0
  - @atlaskit/renderer@32.0.0
  - @atlaskit/editor-json-transformer@4.0.25
  - @atlaskit/editor-test-helpers@6.3.2
  - @atlaskit/util-data-test@10.0.26

## 2.7.5

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/theme@7.0.1
  - @atlaskit/editor-core@90.3.15
  - @atlaskit/editor-json-transformer@4.0.24
  - @atlaskit/renderer@31.1.3
  - @atlaskit/util-data-test@10.0.25
  - @atlaskit/profilecard@6.1.2
  - @atlaskit/docs@6.0.0

## 2.7.4

- [patch][77df0db](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/77df0db):

  - use em dash for citation

## 2.7.3

- Updated dependencies [d13242d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13242d):
  - @atlaskit/docs@5.2.3
  - @atlaskit/editor-common@22.2.3
  - @atlaskit/editor-core@90.2.1
  - @atlaskit/renderer@31.0.7
  - @atlaskit/profilecard@6.1.1
  - @atlaskit/theme@7.0.0

## 2.7.2

- Updated dependencies [3a7224a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3a7224a):
  - @atlaskit/editor-json-transformer@4.0.23
  - @atlaskit/editor-test-helpers@6.2.23
  - @atlaskit/editor-core@90.0.0

## 2.7.1

- Updated dependencies [7e8b4b9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e8b4b9):
  - @atlaskit/editor-common@22.0.0
  - @atlaskit/editor-core@89.0.0
  - @atlaskit/renderer@31.0.0
  - @atlaskit/editor-json-transformer@4.0.22
  - @atlaskit/editor-test-helpers@6.2.19
  - @atlaskit/util-data-test@10.0.21

## 2.7.0

- [minor][37eaced](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/37eaced):

  - Fix media items inside table cells

## 2.6.2

- [patch][352fbc9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/352fbc9):

  - Should not ignore double and triple dashes in list item

## 2.6.1

- [patch][f11c6e2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f11c6e2):

  - Escape properly

## 2.6.0

- [minor][8451c11](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8451c11):

  - Fly over links inside table cells

## 2.5.2

- [patch][c93eb36](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c93eb36):

  - Do not jump over the link if invalid

## 2.5.1

- [patch][fce377d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fce377d):

  - fix issue with mentions in list

## 2.5.0

- [minor][6fb9918](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6fb9918):

  - Fix strong bug when ending line finishes with two strong symbols

## 2.4.6

- Updated dependencies [9c0844d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0844d):
  - @atlaskit/editor-common@21.2.2
  - @atlaskit/renderer@30.2.1
  - @atlaskit/profilecard@6.0.0

## 2.4.5

- [patch][3148c95](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3148c95):

  - add error and success color

## 2.4.4

- [patch][01a92e1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/01a92e1):

  - Title for panel and noformat changes

## 2.4.3

- [patch][131e012](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/131e012):

  - Port from Jira regex for dashes

## 2.4.2

- [patch][171443f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/171443f):

  - Re-wrtie table parser

## 2.4.1

- [patch][930ca26](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/930ca26):

  - Fixed issue with library importing from a path within the editor common package

## 2.4.0

- [minor][8681fc0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8681fc0):

  - Improve wikimarkup link handling with formatting and titles

## 2.3.6

- [patch][56007b3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/56007b3):

  - Allow {color} in formatter

## 2.3.5

- [patch][d76aa5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d76aa5a):

  - Adds in support for multiple -

## 2.3.4

- [patch][7b8efea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7b8efea):

  - Heading doesn't need a following space

## 2.3.3

- [patch][5f2efe0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5f2efe0):

  - Change triple dash symbol and update parser rules

## 2.3.2

- [patch][904b74c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/904b74c):

  - Fix the behaivor of \\ for line break

## 2.3.1

- [patch][5b4474f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5b4474f):

  - Improve handling of 'rules' in lists and at end of content

## 2.3.0

- [minor][640e01f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/640e01f):

  - Ignore double dash symbol when sticked with alphanumerical, unicode without space, or parenthesis

## 2.2.0

- [minor][fd35bec](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fd35bec):

  - Refactor tokenizer to accpt the whole input and its position

## 2.1.27

- [patch][fd0ed3a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fd0ed3a):

  - Changed parser to only start a list if it is led with a single dash

## 2.1.26

- Updated dependencies [2c21466](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2c21466):
  - @atlaskit/editor-common@21.0.0
  - @atlaskit/editor-core@88.0.0
  - @atlaskit/renderer@30.0.0
  - @atlaskit/editor-json-transformer@4.0.21
  - @atlaskit/editor-test-helpers@6.2.16
  - @atlaskit/util-data-test@10.0.20

## 2.1.25

- [patch][b64fc55](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b64fc55):

  - Adds roundtrip for external image

## 2.1.24

- Updated dependencies [a6dd6e3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a6dd6e3):
  - @atlaskit/editor-common@20.3.1
  - @atlaskit/renderer@29.3.1
  - @atlaskit/profilecard@5.0.0

## 2.1.23

- [patch][7ca5551](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7ca5551):

  - allow list to jump over empty lines in macro successfully

## 2.1.22

- [patch][674b3d9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/674b3d9):

  - convert unknow macros to plain text

## 2.1.21

- [patch][c6763e2" d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c6763e2"
  d):

  - new pattern for mention

## 2.1.20

- [patch] Make common-formatter more generic for citation and monospace [c727890](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c727890)

## 2.1.19

- [patch] Fix link format with | in url [d4a84b3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d4a84b3)

## 2.1.18

- [patch] space in list item content doesn't matter [d56abbd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d56abbd)

## 2.1.17

- [patch] List item symbol followed by line break is not valid [df6c74a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df6c74a)

## 2.1.16

- [patch] Fix common-formater ending symbol behavior and use external media for links in media [b1926a8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b1926a8)

## 2.1.15

- [patch] Updated dependencies [052ce89](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/052ce89)
  - @atlaskit/editor-json-transformer@4.0.19
  - @atlaskit/editor-test-helpers@6.2.8
  - @atlaskit/editor-core@87.0.0
  - @atlaskit/editor-common@20.1.2

## 2.1.14

- [patch] Ignore heading text when fails [d2ac796](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d2ac796)

## 2.1.13

- [patch] common formater can be valid if surrounded by non alphanumeric characters [5576cc2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5576cc2)

## 2.1.12

- [patch] list items should allow leading spaces [2aad896](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2aad896)

## 2.1.11

- [patch] Adds escape for macro, mention and media [8a89d20](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8a89d20)

## 2.1.10

- [patch] Updated dependencies [b1ce691](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b1ce691)
  - @atlaskit/editor-common@20.0.0
  - @atlaskit/editor-core@86.0.0
  - @atlaskit/renderer@29.0.0
  - @atlaskit/editor-json-transformer@4.0.18
  - @atlaskit/editor-test-helpers@6.2.7
  - @atlaskit/util-data-test@10.0.16

## 2.1.9

- [patch] Updated dependencies [6e510d8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6e510d8)
  - @atlaskit/editor-core@85.5.1
  - @atlaskit/editor-common@19.3.2
  - @atlaskit/renderer@28.0.0

## 2.1.8

- [patch] Updated dependencies [2afa60d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2afa60d)
  - @atlaskit/editor-common@19.0.0
  - @atlaskit/editor-core@85.0.0
  - @atlaskit/renderer@27.0.0
  - @atlaskit/editor-json-transformer@4.0.17
  - @atlaskit/editor-test-helpers@6.2.6
  - @atlaskit/util-data-test@10.0.14

## 2.1.7

- [patch] Updated dependencies [8b2c4d3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8b2c4d3)
- [patch] Updated dependencies [3302d51](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3302d51)
  - @atlaskit/editor-common@18.0.0
  - @atlaskit/editor-core@84.0.0
  - @atlaskit/renderer@26.0.0
  - @atlaskit/editor-json-transformer@4.0.16
  - @atlaskit/editor-test-helpers@6.2.5
  - @atlaskit/util-data-test@10.0.12

## 2.1.6

- [patch] Updated dependencies [23c7eca](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/23c7eca)
  - @atlaskit/editor-json-transformer@4.0.15
  - @atlaskit/editor-test-helpers@6.2.4
  - @atlaskit/util-data-test@10.0.11
  - @atlaskit/editor-core@83.0.0
  - @atlaskit/renderer@25.0.0

## 2.1.5

- [patch] change grey to gray to keep consistent across editor pkgs [1b2a0b3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1b2a0b3)

## 2.1.4

- [patch] Ignore link text in link format [dc46cae](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/dc46cae)

## 2.1.3

- [patch] Updated dependencies [ef76f1f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ef76f1f)
  - @atlaskit/editor-json-transformer@4.0.13
  - @atlaskit/editor-common@17.0.1
  - @atlaskit/editor-core@82.0.0
  - @atlaskit/editor-test-helpers@6.1.3

## 2.1.2

- [patch] Updated dependencies [927ae63](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/927ae63)
  - @atlaskit/editor-common@17.0.0
  - @atlaskit/editor-core@81.0.0
  - @atlaskit/util-data-test@10.0.10
  - @atlaskit/editor-test-helpers@6.1.2
  - @atlaskit/renderer@24.0.0
  - @atlaskit/editor-json-transformer@4.0.12

## 2.1.1

- [patch] Use proper marks for texts under blockquote [7d31a25](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7d31a25)

## 2.1.0

- [minor] Support an errorCallback for collection fail information [86e0d88](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/86e0d88)

## 2.0.28

- [patch] Updated dependencies [2a6410f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2a6410f)
  - @atlaskit/editor-common@16.2.0
  - @atlaskit/editor-core@80.5.0
  - @atlaskit/renderer@23.0.0

## 2.0.27

- [patch] link format takes higher priority over common formatters [b05205f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b05205f)

## 2.0.26

- [patch] fix link regex to know where to stop [ee04ad4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ee04ad4)

## 2.0.25

- [patch] Fix encoder for missing closing \! [c585e27](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c585e27)

## 2.0.24

- [patch] New rules for formatter [50edbb0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/50edbb0)

## 2.0.23

- [patch] should convert content inside monospace as plain text [f5e9f01](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f5e9f01)

## 2.0.22

- [patch] Sometimes the leading dashes is not list [7cf3406](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7cf3406)

## 2.0.21

- [patch] Updated dependencies [6e1d642](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6e1d642)
  - @atlaskit/editor-common@16.0.0
  - @atlaskit/editor-core@80.0.0
  - @atlaskit/renderer@22.0.0
  - @atlaskit/editor-json-transformer@4.0.11
  - @atlaskit/editor-test-helpers@6.0.9
  - @atlaskit/util-data-test@10.0.9

## 2.0.20

- [patch] Convert file link to media group [d9331e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d9331e6)

## 2.0.19

- [patch] Updated transformation of productivity emoji [83cdd9f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/83cdd9f)

## 2.0.18

- [patch] Convert to mediaSingle with width and height [5b1d869](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5b1d869)

## 2.0.17

- [patch] Convert to same cell types [9571a76](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9571a76)

## 2.0.16

- [patch] keep width and height when transform back to wiki attachment [4acc88a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4acc88a)

## 2.0.15

- [patch] should parse empty wiki [03f0b1b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/03f0b1b)

## 2.0.14

- [patch] Fix color error [2b513c5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2b513c5)

## 2.0.13

- [patch] Keep title of code block [95f9654](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/95f9654)

## 2.0.12

- [patch] Trailing spaces of a table should not create a empty cell [eade148](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/eade148)

## 2.0.11

- [patch] Updated dependencies [7545979](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7545979)
  - @atlaskit/editor-common@15.0.0
  - @atlaskit/editor-core@79.0.0
  - @atlaskit/renderer@21.0.0
  - @atlaskit/editor-json-transformer@4.0.8
  - @atlaskit/editor-test-helpers@6.0.6
  - @atlaskit/util-data-test@10.0.8

## 2.0.10

- [patch] Updated dependencies [911a570](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/911a570)
  - @atlaskit/editor-json-transformer@4.0.7
  - @atlaskit/renderer@20.1.1
  - @atlaskit/editor-test-helpers@6.0.5
  - @atlaskit/editor-core@78.0.0

## 2.0.9

- [patch] Updated dependencies [b12f7e6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b12f7e6)
  - @atlaskit/renderer@20.0.11
  - @atlaskit/util-data-test@10.0.7
  - @atlaskit/profilecard@4.0.8
  - @atlaskit/editor-common@14.0.11
  - @atlaskit/editor-test-helpers@6.0.3
  - @atlaskit/editor-json-transformer@4.0.6
  - @atlaskit/editor-core@77.1.4

## 2.0.8

- [patch] Convert all media items to thumbnail [eb0f1f4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/eb0f1f4)

## 2.0.7

- [patch] whitelist supported language for wiki markup [a3edfda](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a3edfda)

## 2.0.6

- [patch] Updated dependencies [df22ad8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df22ad8)
  - @atlaskit/theme@6.0.0
  - @atlaskit/profilecard@4.0.7
  - @atlaskit/renderer@20.0.7
  - @atlaskit/editor-core@77.0.14
  - @atlaskit/docs@5.0.6

## 2.0.5

- [patch] wikimarkup parser should parse media item with ( and ) correctly [76adf36](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/76adf36)

## 2.0.4

- [none] Updated dependencies [597e0bd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/597e0bd)
  - @atlaskit/profilecard@4.0.3
  - @atlaskit/renderer@20.0.0
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-core@77.0.0
  - @atlaskit/editor-test-helpers@6.0.0
  - @atlaskit/editor-common@14.0.0
- [none] Updated dependencies [61df453](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/61df453)
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/profilecard@4.0.3
  - @atlaskit/editor-common@14.0.0
  - @atlaskit/editor-test-helpers@6.0.0
  - @atlaskit/renderer@20.0.0
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-core@77.0.0
- [none] Updated dependencies [812a39c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/812a39c)
  - @atlaskit/profilecard@4.0.3
  - @atlaskit/renderer@20.0.0
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-core@77.0.0
  - @atlaskit/editor-test-helpers@6.0.0
  - @atlaskit/editor-common@14.0.0
- [none] Updated dependencies [c8eb097](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c8eb097)
  - @atlaskit/renderer@20.0.0
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/profilecard@4.0.3
  - @atlaskit/editor-common@14.0.0
  - @atlaskit/editor-test-helpers@6.0.0
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-core@77.0.0
- [patch] Updated dependencies [d02746f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d02746f)
  - @atlaskit/util-data-test@10.0.3
  - @atlaskit/profilecard@4.0.3
  - @atlaskit/editor-json-transformer@4.0.4
  - @atlaskit/editor-common@14.0.0
  - @atlaskit/renderer@20.0.0
  - @atlaskit/editor-test-helpers@6.0.0
  - @atlaskit/editor-core@77.0.0

## 2.0.3

- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/renderer@19.2.6
  - @atlaskit/util-data-test@10.0.2
  - @atlaskit/profilecard@4.0.2
  - @atlaskit/editor-json-transformer@4.0.3
  - @atlaskit/editor-common@13.2.7
  - @atlaskit/editor-test-helpers@5.1.2
  - @atlaskit/editor-core@76.4.5
  - @atlaskit/theme@5.1.2
  - @atlaskit/docs@5.0.2

## 2.0.2

- [patch] Bump prosemirror-model to 1.6 in order to use toDebugString on Text node spec [fdd5c5d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fdd5c5d)
- [none] Updated dependencies [fdd5c5d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fdd5c5d)
  - @atlaskit/renderer@19.2.5
  - @atlaskit/editor-common@13.2.6
  - @atlaskit/editor-test-helpers@5.1.1
  - @atlaskit/editor-json-transformer@4.0.2
  - @atlaskit/editor-core@76.4.2

## 2.0.1

- [none] Updated dependencies [25353c3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/25353c3)
  - @atlaskit/editor-core@76.0.0
  - @atlaskit/editor-test-helpers@5.0.1
  - @atlaskit/editor-json-transformer@4.0.1
- [patch] Updated dependencies [38c0543](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/38c0543)
  - @atlaskit/editor-core@76.0.0
  - @atlaskit/editor-test-helpers@5.0.1
  - @atlaskit/editor-json-transformer@4.0.1

## 2.0.0

- [major] Updated dependencies [563a7eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/563a7eb)
  - @atlaskit/renderer@19.0.0
  - @atlaskit/util-data-test@10.0.0
  - @atlaskit/profilecard@4.0.0
  - @atlaskit/editor-json-transformer@4.0.0
  - @atlaskit/editor-common@13.0.0
  - @atlaskit/editor-test-helpers@5.0.0
  - @atlaskit/editor-core@75.0.0
  - @atlaskit/theme@5.0.0
  - @atlaskit/docs@5.0.0
- [major] Updated dependencies [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
  - @atlaskit/renderer@19.0.0
  - @atlaskit/util-data-test@10.0.0
  - @atlaskit/profilecard@4.0.0
  - @atlaskit/editor-json-transformer@4.0.0
  - @atlaskit/editor-core@75.0.0
  - @atlaskit/editor-test-helpers@5.0.0
  - @atlaskit/editor-common@13.0.0
  - @atlaskit/theme@5.0.0
  - @atlaskit/docs@5.0.0

## 1.1.11

- [none] Updated dependencies [5f6ec84](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5f6ec84)
  - @atlaskit/editor-core@74.0.17
  - @atlaskit/editor-test-helpers@4.2.4
  - @atlaskit/renderer@18.2.18
  - @atlaskit/editor-common@12.0.0
  - @atlaskit/editor-json-transformer@3.1.8
- [patch] Updated dependencies [5958588](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5958588)
  - @atlaskit/editor-core@74.0.17
  - @atlaskit/editor-test-helpers@4.2.4
  - @atlaskit/renderer@18.2.18
  - @atlaskit/editor-common@12.0.0
  - @atlaskit/editor-json-transformer@3.1.8

## 1.1.10

- [patch] Adds roundtrip testing for nodes and applys fixes [83a2ec7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/83a2ec7)

## 1.1.9

- [patch] Updated dependencies [af0cde6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/af0cde6)
  - @atlaskit/editor-core@74.0.0
  - @atlaskit/editor-test-helpers@4.2.2
  - @atlaskit/editor-json-transformer@3.1.7

## 1.1.8

- [patch] Add missing dependencies to packages to get the website to build [99446e3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/99446e3)

- [none] Updated dependencies [99446e3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/99446e3)
  - @atlaskit/renderer@18.2.11
  - @atlaskit/profilecard@3.13.1
  - @atlaskit/docs@4.2.2
- [none] Updated dependencies [9bac948](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9bac948)
  - @atlaskit/renderer@18.2.11
  - @atlaskit/docs@4.2.2

## 1.1.7

- [patch] Updated dependencies [8d5053e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8d5053e)
  - @atlaskit/util-data-test@9.1.15
  - @atlaskit/renderer@18.2.9
  - @atlaskit/editor-json-transformer@3.1.5
  - @atlaskit/editor-common@11.3.8
  - @atlaskit/editor-test-helpers@4.1.9
  - @atlaskit/editor-core@73.9.5

## 1.1.6

- [patch] Updated dependencies [0cf2f52](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0cf2f52)
  - @atlaskit/util-data-test@9.1.14
  - @atlaskit/renderer@18.2.7
  - @atlaskit/editor-json-transformer@3.1.4
  - @atlaskit/editor-core@73.9.2
  - @atlaskit/editor-test-helpers@4.1.8
  - @atlaskit/editor-common@11.3.7

## 1.1.5

- [patch] Fixes an issue where double line breaks doesn’t start a new paragraph [8242007](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8242007)

## 1.1.4

- [patch] Remove pinned prosemirror-model@1.4.0 and move back to caret ranges for prosemirror-model@^1.5.0 [4faccc0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4faccc0)
- [patch] Updated dependencies [4faccc0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4faccc0)
  - @atlaskit/renderer@18.2.5
  - @atlaskit/editor-common@11.3.0
  - @atlaskit/editor-test-helpers@4.1.5
  - @atlaskit/editor-json-transformer@3.1.3
  - @atlaskit/editor-core@73.8.6

## 1.1.3

- [patch] Remove the additional rows when encode code block from ADF to wikiMarkup [7b81171](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7b81171)

## 1.1.2

- [patch] remove the additional whitespace in encoder [3a28d31](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3a28d31)

## 1.1.1

- [patch] Clean Changelogs - remove duplicates and empty entries [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
- [none] Updated dependencies [e7756cd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e7756cd)
  - @atlaskit/util-data-test@9.1.13
  - @atlaskit/editor-json-transformer@3.1.2
  - @atlaskit/renderer@18.1.2
  - @atlaskit/editor-core@73.7.5
  - @atlaskit/editor-test-helpers@4.1.2
  - @atlaskit/editor-common@11.2.1
  - @atlaskit/theme@4.0.4

## 1.1.0

- [none] Updated dependencies [7217164](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7217164)
  - @atlaskit/editor-core@73.5.0
  - @atlaskit/editor-test-helpers@4.1.0
  - @atlaskit/renderer@18.1.0
  - @atlaskit/util-data-test@9.1.11
  - @atlaskit/editor-common@11.1.0
  - @atlaskit/editor-json-transformer@3.1.0

## 1.0.10

- [patch] Update and lock prosemirror-model version to 1.4.0 [febf753](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/febf753)
- [none] Updated dependencies [febf753](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/febf753)
  - @atlaskit/renderer@18.0.3
  - @atlaskit/editor-common@11.0.6
  - @atlaskit/editor-test-helpers@4.0.7
  - @atlaskit/editor-json-transformer@3.0.11
  - @atlaskit/editor-core@73.4.4

## 1.0.9

- [patch] Adding breakout to extensions [3d1b0ab](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3d1b0ab)
- [none] Updated dependencies [3d1b0ab](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3d1b0ab)
  - @atlaskit/editor-test-helpers@4.0.6
  - @atlaskit/editor-core@73.4.3
  - @atlaskit/editor-common@11.0.5

## 1.0.8

- [patch] Updated dependencies [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
  - @atlaskit/util-data-test@9.1.10
  - @atlaskit/editor-json-transformer@3.0.9
  - @atlaskit/renderer@18.0.0
  - @atlaskit/editor-core@73.0.0
  - @atlaskit/editor-test-helpers@4.0.3
  - @atlaskit/editor-common@11.0.0
  - @atlaskit/theme@4.0.0
  - @atlaskit/docs@4.0.0

## 1.0.7

- [patch] Updated dependencies [1c87e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1c87e5a)
  - @atlaskit/editor-test-helpers@4.0.2
  - @atlaskit/editor-common@10.1.9

## 1.0.6

- [patch] ED-4689 add \_\_confluenceMetadata to link mark schema [e76e4b4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e76e4b4)
- [patch] Updated dependencies [e76e4b4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e76e4b4)
  - @atlaskit/editor-common@10.1.6

## 1.0.5

- [patch] Fix transformer throwing error when given an empty string to parse [bda0aac](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bda0aac)

## 1.0.4

- [patch] Fix issue where providing a custom schema would crash the transformer [c5f7851](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c5f7851)

## 1.0.3

- [none] Updated dependencies [febc44d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/febc44d)
  - @atlaskit/editor-core@72.0.0
  - @atlaskit/editor-test-helpers@4.0.0
  - @atlaskit/renderer@17.0.0
  - @atlaskit/util-data-test@9.1.4
  - @atlaskit/editor-common@10.0.0
  - @atlaskit/editor-json-transformer@3.0.7

## 1.0.2

- [patch] Fix a issue where last table row is duplicated in Wiki parser [2fd3446](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2fd3446)

## 1.0.1

- [none] Updated dependencies [8fd4dd1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8fd4dd1)
  - @atlaskit/editor-test-helpers@3.1.8
  - @atlaskit/editor-common@9.3.9

## 1.0.0

- [major] Migrate wikimarkup transformer [b8cab45](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b8cab45)

## 0.0.15

- [patch] ED-4336 support loading dynamic/"auto" tables from confluence to fixed-width tables [0c2f72a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0c2f72a)

## 0.0.13

- [patch] Added missing dependencies and added lint rule to catch them all [0672503](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0672503)

## 0.0.12

- [patch] Lots of new nodes support in wiki markup parser [08071ea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/08071ea)

## 0.0.10

- [patch] change table node builder constructor for tests, remove tableWithAttrs [cf43535](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cf43535)

## 0.0.8

- [patch] ED-3939: support macros, most of text effects, emoji, mentions, tables and lists [d173a70](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d173a70)

## 0.0.6

- [patch] Upgrading ProseMirror Libs [35d14d5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d14d5)

## 0.0.5

- [patch] Add "sideEffects: false" to AKM2 packages to allow consumer's to tree-shake [c3b018a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c3b018a)
