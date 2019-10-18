# @atlaskit/docs

## 8.1.9

### Patch Changes

- [patch][5f044ec4d0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5f044ec4d0):

  Update pretty-proptype dep fro 1.0.1 to 1.0.2

## 8.1.8

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 8.1.7

### Patch Changes

- [patch][97bab7fd28](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97bab7fd28):

  `@atlaskit/checkbox` **10.x** includes the following changes:

  - Replaced previous theme implementation with new `@atlaskit/theme` v2 implementation
    - Please read more about this implementation in the [theming guide](https://atlaskit.atlassian.com/packages/core/theme/docs/theming-guide)
  - Added `overrides` prop which enables targeted customisations of key components in the @atlaskit/checkbox package.
    - Please read more about this implementation in the [overrides guide](https://atlaskit.atlassian.com/packages/core/theme/docs/overrides-guide)

  ### Breaking Changes

  **HiddenCheckbox and spread props**

  Passing props to the `<Checkbox/>` component for them to be spread onto the underlying `<HiddenCheckbox/>` component is now **no longer possible**.
  `@atlaskit/checkbox` still supports passing props down to the `<HiddenCheckbox/>` component, however we've opted to make this behaviour more explicit.

  Whereas previously you would do this:

  ```js
  <Checkbox
    ...supportedCheckboxProps
    'data-testid'='test-checkbox'
  />
  ```

  Now you would leverage the overrides prop to pass these props down to the `<HiddenCheckbox/>` component like so:

  ```js
  <Checkbox
    ...supportedCheckboxProps
    overrides={{
      HiddenCheckbox:{
        attributesFn: () => ({ 'data-testid': 'test-checkbox' })
      }
    }}
  />
  ```

## 8.1.6

### Patch Changes

- [patch][556c413643](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/556c413643):

  Fixes the title size of the Atlaskit documentation messages.

## 8.1.5

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 8.1.4

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 8.1.3

- Updated dependencies [06326ef3f7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/06326ef3f7):
  - @atlaskit/button@13.0.9
  - @atlaskit/section-message@4.0.5
  - @atlaskit/icon@19.0.0

## 8.1.2

- Updated dependencies [cfc3c8adb3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cfc3c8adb3):
  - @atlaskit/button@13.0.8
  - @atlaskit/icon@18.0.0

## 8.1.1

- [patch][b0ef06c685](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b0ef06c685):

  - This is just a safety release in case anything strange happened in in the previous one. See Pull Request #5942 for details

## 8.1.0

- [minor][35405c3362](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35405c3362):

  Currently on the Atlaskit website, we are using section messages for developer preview at several places. In addition, as we recently removed couple of components from the Atlaskit service desk, we need to indicate if the component is intended for Atlassian first. Hence, We added another section message that will warn about the usage.

  Now, in your docs, you can directly import those section messages to inform your customers.

  ## Usage:

  - <AtlassianInternalWarning /> is the section message that warns about Atlassian usage.
  - <DevPreviewWarning> is the section message that warns about the componenent readiness.

  - If you add the two section messages, meaning the component is Atlassian only and in dev preview:
    `import { AtlassianInternalWarning, DevPreviewWarning } from '@atlaskit/docs/src/SectionMessages';`

  ````${(
      <>
      <div style={{ marginBottom: '0.5rem'}}>
      <AtlassianInternalWarning />
      </div>
      <div style={{ marginTop: '0.5rem'}}>
        <DevPreviewWarning />
      </div>
      </>
    )}```

  - If you need one component, just import the requested one: `${( <AtlassianInternalWarning />)}`

  ````

- Updated dependencies [97bfe81ec8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/97bfe81ec8):
  - @atlaskit/code@11.0.0

## 8.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 7.0.4

- [patch][d3cad2622e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d3cad2622e):

  - Removes babel-runtime in favour of @babel/runtime

## 7.0.3

- Updated dependencies [9c0b4744be](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9c0b4744be):
  - @atlaskit/button@12.0.3
  - @atlaskit/code@9.0.1
  - @atlaskit/icon@16.0.9
  - @atlaskit/theme@8.1.7

## 7.0.2

- Updated dependencies [1e826b2966](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e826b2966):
  - @atlaskit/icon@16.0.8
  - @atlaskit/theme@8.1.6
  - @atlaskit/button@12.0.0

## 7.0.1

- Updated dependencies [9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):
  - @atlaskit/icon@16.0.5
  - @atlaskit/theme@8.0.1
  - @atlaskit/button@11.0.0

## 7.0.0

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

## 6.0.2

- [patch][050e08173f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/050e08173f):

  - Add missing import for codesandboxer

## 6.0.1

- Updated dependencies [d7ef59d432](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d7ef59d432):
  - @atlaskit/button@10.1.2
  - @atlaskit/icon@16.0.0

## 6.0.0

- [major][58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):

  - Use latest version of pretty-proptypes - this is incompatible with `extract-react-types` versions under `0.15.0`

## 5.2.3

- Updated dependencies [d13242d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d13242d):
  - @atlaskit/button@10.0.4
  - @atlaskit/code@8.2.1
  - @atlaskit/icon@15.0.1
  - @atlaskit/theme@7.0.0

## 5.2.2

- Updated dependencies [ab9b69c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ab9b69c):
  - @atlaskit/button@10.0.1
  - @atlaskit/icon@15.0.0

## 5.2.1

- Updated dependencies [6998f11](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6998f11):
  - @atlaskit/icon@14.6.1
  - @atlaskit/theme@6.2.1
  - @atlaskit/button@10.0.0

## 5.2.0

- [minor] Add ErrorBoundary to Examples so that errors in Example components don't leak out onto the containing page when embedding examples within docs. [5131102](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5131102)

## 5.1.0

- [minor] Example component now accepts a packageName. This prop is now required [7a8278d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7a8278d)

## 5.0.8

- [patch] Updated dependencies [65c6514](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/65c6514)
  - @atlaskit/button@9.0.13
  - @atlaskit/icon@14.0.0

## 5.0.7

- [patch] Upgrade extract-react-types to add TypeScript support. [c742e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c742e5a)

## 5.0.6

- [patch] Updated dependencies [df22ad8](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df22ad8)
  - @atlaskit/theme@6.0.0
  - @atlaskit/icon@13.2.5
  - @atlaskit/code@8.0.1
  - @atlaskit/button@9.0.6

## 5.0.5

- [patch] Updated dependencies [f9c0cdb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f9c0cdb)
  - @atlaskit/code@8.0.0

## 5.0.4

- [patch] Export a modified replaceImport function [18f2701](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18f2701)
- [none] Updated dependencies [18f2701](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/18f2701)

## 5.0.3

- [patch] Update pretty-proptypes [c7e484c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c7e484c)
- [none] Updated dependencies [c7e484c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c7e484c)

## 5.0.2

- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/icon@13.2.2
  - @atlaskit/button@9.0.4
  - @atlaskit/theme@5.1.2
  - @atlaskit/code@7.0.2

## 5.0.1

- [patch] Move analytics tests and replace elements to core [49d4ab4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/49d4ab4)
- [none] Updated dependencies [49d4ab4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/49d4ab4)
  - @atlaskit/button@9.0.2

## 5.0.0

- [major] Updates to React ^16.4.0 [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
- [major] Updated dependencies [563a7eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/563a7eb)
  - @atlaskit/button@9.0.0
  - @atlaskit/theme@5.0.0
  - @atlaskit/code@7.0.0
  - @atlaskit/icon@13.0.0
- [major] Updated dependencies [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
  - @atlaskit/button@9.0.0
  - @atlaskit/theme@5.0.0
  - @atlaskit/code@7.0.0
  - @atlaskit/icon@13.0.0

## 4.2.2

- [patch] Add missing dependencies to packages to get the website to build [99446e3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/99446e3)

- [none] Updated dependencies [99446e3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/99446e3)
- [none] Updated dependencies [9bac948](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9bac948)

## 4.2.1

- [patch] Updated dependencies [eee2d45](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/eee2d45)
  - @atlaskit/code@6.0.0

## 4.2.0

- [minor] Added upgrade guide, updated atlaskit/docs dep on react-markings to expose md parser customisations [aef4aea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aef4aea)
- [none] Updated dependencies [aef4aea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/aef4aea)

## 4.1.1

- [patch] Update changelogs to remove duplicate [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
- [none] Updated dependencies [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
  - @atlaskit/theme@4.0.3
  - @atlaskit/icon@12.1.1
  - @atlaskit/code@5.0.3

## 4.1.0

- [none] Updated dependencies [9d20f54](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d20f54)
  - @atlaskit/icon@12.1.0
  - @atlaskit/theme@4.0.2
  - @atlaskit/code@5.0.2

## 4.0.1

- [patch] Updated dependencies [223cd67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/223cd67)
  - @atlaskit/icon@12.0.1
  - @atlaskit/theme@4.0.1
  - @atlaskit/code@5.0.1

## 4.0.0

- [major] makes styled-components a peer dependency and upgrades version range from 1.4.6 - 3 to ^3.2.6 [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
- [patch] Updated dependencies [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
  - @atlaskit/icon@12.0.0
  - @atlaskit/theme@4.0.0
  - @atlaskit/code@5.0.0

## 3.0.4

- [patch] Updated dependencies [d662caa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d662caa)
  - @atlaskit/icon@11.3.0
  - @atlaskit/theme@3.2.2
  - @atlaskit/code@4.0.4

## 3.0.3

## 3.0.2

- [patch] Upgrade pretty proptypes [0ad9962](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0ad9962)

## 3.0.1

- [patch] Switch to using pretty-proptypes [2b08b6b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2b08b6b)

## 3.0.0

- [major] Bump to React 16.3. [4251858](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4251858)

## 2.6.2

- [patch] Update look and feel of collapsed props [e42d92e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e42d92e)

## 2.6.1

- [patch] Props with default values are not marked as required [d00499f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d00499f)

## 2.6.0

- [minor] Add prop to allow proptype shape to be hidden [3150228](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3150228)

## 2.5.5

- [patch] Docs now handle props of nested intersections, and remove console errors [fd2d099](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/fd2d099)

## 2.5.4

- [patch] Make header not display when passed a string [cff04f2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cff04f2)

## 2.5.3

- [patch] Add converter for intersection in prettyPropType [0d6b5fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0d6b5fa)

## 2.5.2

- [patch] Re-releasing due to potentially broken babel release [9ed0bba](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9ed0bba)

## 2.5.1

- [patch] Update kind2string dependency to 0.3.1 [2c432fd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2c432fd)

## 2.5.0

- [minor] Update styled-components dependency to support versions 1.4.6 - 3 [ceccf30](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ceccf30)

## 2.4.3

- [patch] updated the repository url to https://bitbucket.org/atlassian/atlaskit-mk-2 [1e57e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e57e5a)

## 2.4.2

- [patch] Refactor code helper function to fix React re-render bug. [8dcb772](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8dcb772)

## 2.4.1

## 2.4.0

- [minor] Add React 16 support. [12ea6e4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/12ea6e4)

## 2.3.0

- [minor] Added support for JSX Elements in default prop declarations [8030309](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8030309)

## 2.2.0

- [minor] Props component now understands how to parse members of the Array type [3eebe75](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3eebe75)

## 2.1.1

- [patch] Convert function parameters [f6c5a21](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f6c5a21)
- [patch] Convert function parameters [f6c5a21](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f6c5a21)

## 2.1.0

- [minor] corrected types and added heading option to props [bdf39b3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bdf39b3)
- [minor] corrected types and added heading option to props [bdf39b3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bdf39b3)

## 2.0.0

- [major] Now renders default props, consumes breaking change from extract-react-types [df9fa94](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df9fa94)
- [major] Now renders default props, consumes breaking change from extract-react-types [df9fa94](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/df9fa94)

## 1.0.1

- [patch] Releasing 1.x as this is now stable [0b87d5c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0b87d5c)
- [patch] Releasing 1.x as this is now stable [0b87d5c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0b87d5c)

## 0.0.7

- [patch] Bump version of @atlaskit/docs everywhere [9a0ea18](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9a0ea18)
- [patch] Bump version of @atlaskit/docs everywhere [9a0ea18](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9a0ea18)
- [patch] Update react-markings dependency [71d0703](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/71d0703)
- [patch] Update react-markings dependency [71d0703](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/71d0703)

## 0.0.6

- [patch] bump icon dependency [da14956](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/da14956)
- [patch] bump icon dependency [da14956](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/da14956)

## 0.0.5

- [patch] bump consumer versions for release [c730a1c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c730a1c)
- [patch] bump consumer versions for release [c730a1c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c730a1c)
- [patch] Add documentation to editor core; introduce code formatting method to docs [a1c7e56](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a1c7e56)
- [patch] Add documentation to editor core; introduce code formatting method to docs [a1c7e56](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a1c7e56)

## 0.0.4

- [patch] Use correct dependencies [7b178b1](7b178b1)
- [patch] Use correct dependencies [7b178b1](7b178b1)
- [patch] Adding responsive behavior to the editor. [e0d9867](e0d9867)
- [patch] Adding responsive behavior to the editor. [e0d9867](e0d9867)
