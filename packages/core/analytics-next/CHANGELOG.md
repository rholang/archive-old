# @atlaskit/analytics-next

## 6.3.1

### Patch Changes

- [patch][35d2229b2a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/35d2229b2a):

  Adding missing license to packages and update to Copyright 2019 Atlassian Pty Ltd.

## 6.3.0

### Minor Changes

- [minor][2252a7a999](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2252a7a999):

  Bug fix for using the hook with nested contexts, performance improvements, new `useAnalyticsEventsCallback` hook to provide a performance enhanced-abstraction for firing events with a callback.

## 6.2.0

### Minor Changes

- [minor][42fd897e16](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/42fd897e16):

  - Introduces a new custom React hook, `useAnalyticsEvents_experimental`, for creating analytics events within functional components. This hook replaces the need for the `withAnalyticsEvents` HOC. See the [Reference documentation](https://atlaskit.atlassian.com/packages/core/analytics-next/docs/reference) for details on how to use this new hook.

## 6.1.0

### Minor Changes

- [minor][c6efb2f5b6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c6efb2f5b6):

  Prefix the legacy lifecycle methods with UNSAFE\_\* to avoid warning in React 16.9+

  More information about the deprecation of lifecycles methods can be found here:
  https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

## 6.0.3

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 6.0.2

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 6.0.1

### Patch Changes

- [patch][de35ce8c67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/de35ce8c67):

  Updates component maintainers

## 6.0.0

### Major Changes

- [major][926b43142b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/926b43142b):

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

## 5.4.1

### Patch Changes

- [patch][1439241943](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1439241943):

  Adding error boundary in media picker dropzone

## 5.4.0

### Minor Changes

- [minor][e1f8aaf33b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/e1f8aaf33b):

  - Adding entry point for `AnalyticsErrorBoundary` package

  ```
  // How to use

  // Import via entry point
  import AnalyticsListener from '@atlaskit/analytics-next/AnalyticsListener';
  import AnalyticsErrorBoundary from '@atlaskit/analytics-next/AnalyticsErrorBoundary';

  // Wrapping your component with the component
  class ButtonWithAnalyticsErrorBoundary extends React.Component {
    handleEvent = (analyticsEvent) => {
      const { payload, context } = analyticsEvent;
      console.log('Received event:', analyticsEvent, { payload, context });
    };

    render() {
      return (
        <AnalyticsListener channel="atlaskit" onEvent={this.handleEvent}>
          <AnalyticsErrorBoundary
            channel="atlaskit"
            data={{
              componentName: 'button',
              packageName: '@atlaskit/button',
              componentVersion: '999.9.9',
            }}
          >
            <Button>Click me</Button>
          </AnalyticsErrorBoundary>
        </AnalyticsListener>
      )
    }
  }
  ```

  Notes on new API:

  - Plug-and-play component. As soon and it's wrapping a component it's fully integrated.
  - It has Analytics context and events integrated already. Keep in mind it requires `AnalyticsListener` as a top level component to work properly, otherwise it won't trigger analytics events.

## 5.3.1

### Patch Changes

- [patch][281451e6dc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/281451e6dc):

  Republishing package to export AnalyticsErrorBoundaryProps

## 5.3.0

### Minor Changes

- [minor][ed9ae90c94](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ed9ae90c94):

  Adding Analytics Error Boundary component

## 5.2.0

### Minor Changes

- [minor][8fcbe23ec6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8fcbe23ec6):

  Updated types for analytics-next and buttons to make them easier to consume

## 5.1.3

### Patch Changes

- [patch][c6ad66d326](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c6ad66d326):

  The types property in package.json now points to the correct file"

## 5.1.2

### Patch Changes

- [patch][9f8ab1084b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9f8ab1084b):

  Consume analytics-next ts type definitions as an ambient declaration.

## 5.1.1

### Patch Changes

- [patch][6ea9bb7873](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6ea9bb7873):

  analytics-next now exports an ambient module declaration which resolves an issue with types being required via relative imports

## 5.1.0

### Minor Changes

- [minor][d0db01b410](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d0db01b410):

  TypeScript users of withAnalyticsEvents and withAnalyticsContext are now required to provide props as a generic type. This is so that TypeScript can correctly calculate the props and defaultProps of the returned component.

  Before:

  ```typescript
  withAnalyticsEvents()(Button) as ComponentClass<Props>;
  ```

  After:

  ```typescript
  withAnalyticsEvents<Props>()(Button);
  ```

## 5.0.2

### Patch Changes

- [patch][4615439434](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4615439434):

  index.ts will now be ignored when publishing to npm

## 5.0.1

### Patch Changes

- [patch][47acb57783](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/47acb57783):

  - Avoid unnecessary re-renders on components that use withAnalytics

## 5.0.0

- [major][7c17b35107](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7c17b35107):

  - Updates react and react-dom peer dependencies to react@^16.8.0 and react-dom@^16.8.0. To use this package, please ensure you use at least this version of react and react-dom.

## 4.0.5

- [patch][3f28e6443c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3f28e6443c):

  - @atlaskit/analytics-next-types is deprecated. Now you can use types for @atlaskit/analytics-next supplied from itself.

## 4.0.4

- [patch][9321da655d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9321da655d):

  - Update AnalyticsEventMap, as per major inline edit rewrite

## 4.0.3

- Updated dependencies [1e826b2966](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e826b2966):
  - @atlaskit/docs@7.0.2
  - @atlaskit/field-text@8.0.2
  - @atlaskit/button@12.0.0

## 4.0.2

- [patch][98e11001ff](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/98e11001ff):

  - Removes duplicate babel-runtime dependency

## 4.0.1

- Updated dependencies [9d5cc39394](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d5cc39394):
  - @atlaskit/docs@7.0.1
  - @atlaskit/field-text@8.0.1
  - @atlaskit/button@11.0.0

## 4.0.0

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

## 3.2.1

- [patch][8de4c3f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8de4c3f):

  - Added missing export

## 3.2.0

- [minor][c3fa0b6](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c3fa0b6):

  - Added support for props of Sum type

## 3.1.2

- Updated dependencies [58b84fa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/58b84fa):
  - @atlaskit/button@10.1.1
  - @atlaskit/field-text@7.0.18
  - @atlaskit/docs@6.0.0

## 3.1.1

- Updated dependencies [6998f11](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6998f11):
  - @atlaskit/docs@5.2.1
  - @atlaskit/field-text@7.0.15
  - @atlaskit/button@10.0.0

## 3.1.0

- [minor][cffeed0](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cffeed0):

  - Type `withAnalyticsEvents` and `withAnalyticsContext` HOCs so that they do not lose flow types of the components they wrap when chained together.

    This will fix flow types not flowing through all of the components that we have instrumented with analytics as they are typically wrapped with both HOCs. To get flow types flowing
    through your components again, upgrade them to the latest version and also update their @atlaskit/analytics-next dependency to the latest version.

    We also now export `AnalyticsContextWrappedComp` and `AnalyticsEventsWrappedComp` parameterised types that allow you to explicitly type components wrapped with these HOCs which is necessary in cases where the HOC wrapping is extracted into another function.

## 3.0.11

- [patch][d903ab5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d903ab5):

  - Updates list of instrumented components

## 3.0.10

- [patch] Adds missing implicit @babel/runtime dependency [b71751b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b71751b)

## 3.0.9

- [patch] adds missing babel-runtime dependency to package json [93b031a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/93b031a)

## 3.0.8

- [patch] Fixing analytics events for checkbox/radio/select [3e428e3](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/3e428e3)

## 3.0.7

- [patch] Loosen AnalyticsEventPayload type to cater for Screen events [2d4b52e](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/2d4b52e)

## 3.0.5

- [patch] Loosen AnalyticsEventCreator return type [f7432a2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f7432a2)
- [none] Updated dependencies [f7432a2](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f7432a2)

## 3.0.4

- [patch] update the dependency of react-dom to 16.4.2 due to vulnerability in previous versions read https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html for details [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
- [none] Updated dependencies [a4bd557](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a4bd557)
  - @atlaskit/field-text@7.0.4
  - @atlaskit/button@9.0.5

## 3.0.3

- [patch] Updated dependencies [acd86a1](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/acd86a1)
  - @atlaskit/button@9.0.4
  - @atlaskit/field-text@7.0.3
  - @atlaskit/docs@5.0.2

## 3.0.2

- [patch] Add a SSR test for every package, add react-dom and build-utils in devDependencies [7e331b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e331b5)
- [none] Updated dependencies [7e331b5](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e331b5)
  - @atlaskit/field-text@7.0.2
  - @atlaskit/button@9.0.3

## 3.0.1

- [patch] Move analytics tests and replace elements to core [49d4ab4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/49d4ab4)
- [none] Updated dependencies [49d4ab4](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/49d4ab4)
  - @atlaskit/field-text@7.0.1
  - @atlaskit/button@9.0.2
  - @atlaskit/docs@5.0.1

## 3.0.0

- [major] Updates to React ^16.4.0 [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
- [major] Updated dependencies [563a7eb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/563a7eb)
  - @atlaskit/field-text@7.0.0
  - @atlaskit/button@9.0.0
  - @atlaskit/docs@5.0.0
- [major] Updated dependencies [7edb866](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7edb866)
  - @atlaskit/field-text@7.0.0
  - @atlaskit/button@9.0.0
  - @atlaskit/docs@5.0.0

## 2.1.9

- [patch] removes requirement of children to be a single React node [53cba6b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/53cba6b)
- [none] Updated dependencies [53cba6b](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/53cba6b)

## 2.1.8

- [patch] Update changelogs to remove duplicate [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
- [none] Updated dependencies [cc58e17](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/cc58e17)
  - @atlaskit/button@8.1.1
  - @atlaskit/docs@4.1.1

## 2.1.7

- [none] Updated dependencies [9d20f54](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9d20f54)
  - @atlaskit/docs@4.1.0
  - @atlaskit/field-text@6.0.2
  - @atlaskit/button@8.1.0

## 2.1.6

- [patch] Unpublish fake TS declaration file [ec9f11f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ec9f11f)
- [none] Updated dependencies [ec9f11f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ec9f11f)

## 2.1.5

- [patch] Update readme's [223cd67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/223cd67)
- [patch] Updated dependencies [223cd67](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/223cd67)
  - @atlaskit/field-text@6.0.1
  - @atlaskit/button@8.0.1
  - @atlaskit/docs@4.0.1

## 2.1.4

- [patch] Updated dependencies [1e80619](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e80619)
  - @atlaskit/field-text@6.0.0
  - @atlaskit/button@8.0.0
  - @atlaskit/docs@4.0.0

## 2.1.3

- [patch] Removed ambient typescript type declaration file from analytics-next - this may be a breaking change for typescript consumers [290d804](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/290d804)
- [none] Updated dependencies [290d804](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/290d804)

## 2.1.2

- [patch] Fix prop callbacks specified in the create event map to not change reference values each render and instead only update when the original prop callback changes [586a80c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/586a80c)
- [none] Updated dependencies [586a80c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/586a80c)

## 2.1.1

- [patch] Updated dependencies [d662caa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d662caa)
  - @atlaskit/field-text@5.0.3
  - @atlaskit/button@7.2.5
  - @atlaskit/docs@3.0.4

## 2.1.0

- [minor] Export cleanProps function that can be used to strip analytics props provided by our HOCs, useful when spreading props to a child element [973d6ea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/973d6ea)

## 2.0.0

- [major] Bump to React 16.3. [4251858](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4251858)

## 1.1.10

- [patch] Adjusted exports to prevent attempted exporting of flow types in built code. [183ee96](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/183ee96)

## 1.1.9

- [patch] Updates flow types of withAnalyticsEvents and withAnalyticsContext HOCs [26778bc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/26778bc)
- [patch] Uses element config flow type with button deprecation warnings hoc [a9aa90a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a9aa90a)

## 1.1.8

- [patch] Add "sideEffects: false" to AKM2 packages to allow consumer's to tree-shake [c3b018a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c3b018a)

## 1.1.7

- [patch] Fix/revert TS TDs in analytics-next [1284d32](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1284d32)

## 1.1.6

- [patch] Fix analytics-next TS type definition [9faaa5f](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9faaa5f)
- [patch] Fix analytics-next TS type definition [7e26229](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7e26229)

## 1.1.5

- [patch] Add analytics events for click and show actions of media-card [031d5da](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/031d5da)
- [patch] Add analytics events for click and show actions of media-card [b361185](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b361185)

## 1.1.4

- [patch] fixes problem with withAnalyticsEvents HOC passing old function props to wrapped component [c88b030](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c88b030)

## 1.1.3

- [patch] adds displayName to analytics HOCs [f69ccad](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/f69ccad)

## 1.1.2

- [patch] Re-releasing due to potentially broken babel release [9ed0bba](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/9ed0bba)

## 1.1.1

- [patch] Remove min requirement of node 8 for analytics-next [c864671](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/c864671)

## 1.1.0

- [minor] adds createAndFireEvent utility method and updates docs [24a93fc](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/24a93fc)

## 1.0.3

- [patch] fixes flow type problem with wrapping stateless functional components in withAnalyticsEvents [8344ffb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/8344ffb)

## 1.0.2

- [patch] Adds action key to analytics payload type [7deeaef](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/7deeaef)

## 1.0.1

- [patch] updated the repository url to https://bitbucket.org/atlassian/atlaskit-mk-2 [1e57e5a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/1e57e5a)

## 1.0.0

- [major] release @atlaskit/analytics-next package [80695ea](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/80695ea)
