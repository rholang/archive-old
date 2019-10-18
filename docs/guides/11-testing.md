# Testing in Atlaskit

We encourage adding tests to all components on **Atlaskit**.

**Jest** is the testing framework across all types of tests in Atlaskit. At the moment, we use Jest version **24.8.0**, feel free to consult the [links](https://jestjs.io/docs/en/24.8/getting-started.html) for any additional commands.

## Testing support as of today includes
### Unit tests
**Note**: We currently use both `Enzyme` and `@testing-library/react`. There is no preferred library but the recommendation is:
* if testing the component details( children, state, props), use `Enzyme`.
* if testing the end to end user perspective and for example `data-attributes`, use `@testing-library/react`.

- write unit test for component using **Jest test framework**.
- *unit tests* for packages should be structured under `<pkg>/src/__tests__/unit` folder.
- on CI these are run against changed packages only.
- run all tests `yarn test`.
- run all tests in watch mode `yarn test --watch`.
- run test for changed packages `yarn test:changed`.
- run single test `yarn test <path_to_test_file>`.
- run tests under certain directories `yarn test <path_to_directory>`.
- to update all snapshot artifacts `yarn test --updateSnapshot` or `yarn test -u`.
- to update all snapshot artifacts under a directory: 
    * `yarn test <path_to_directory> --updateSnapshot`
    * `yarn test <path_to_directory> -u`.
- to update one snapshot artifact:
    * `yarn test <path_to_file> --updateSnapshot`
    * `yarn test <path_to_file> -u`.

### Browser unit tests
**Note**: Karma tests are skipped at the moment.
- some components require unit tests which can be run against **real browser**.
- these tests use *jest-karma runner*.
- *browser unit tests* for packages should be structured under `<pkg>/__tests-karma__`.
- on local these run against Chrome.
- on CI these run against 5 different browsers across OS for changed packages only.
- to run on local `yarn test:browser`.
- to run on local using watch mode `yarn test:browser:watch`.
- to run on *browserstack* :
    - set `BROWSERSTACK_USERNAME = <username>`.
    - set `BROWSERSTACK_KEY = <userkey>`.
    - run all *browser unit test* `yarn test:browser:browserstack`.

### Browser Webdriver/Integration tests
- webdriver tests are used to test actual behavior of component inside of browser on **user interactions**.
- use **Jest runner** for running the webdriver tests.
- *webdriver tests* for packages should be structured under `<pkg>/src/__tests__/integration`.
- on local these run against Chrome.
- on CI these are run against 5 different browsers across OS for changed packages only.
- to run all *webdriver tests* on local `yarn test:webdriver`.
- to run all tests under a package on local `yarn test:webdriver <pkg>`.
- to run all tests under certain directories on local `yarn test:webdriver <path_to_to_directory>`.
- to run single test on local `yarn test:webdriver <path_to_file>`.
- all the commands above can be run using *watch mode* :
    - `yarn test:webdriver:watch` will run watch mode headlessly.
    - `yarn test:webdriver:watch:chrome` will run watch mode only on Chrome browser.
- to run on *browserstack*:
    - set `BROWSERSTACK_USERNAME = <username>`.
    - set `BROWSERSTACK_KEY = <userkey>`.
    - run all *webdriver tests* `yarn test:webdriver:browserstack`.
    - run all tests under a package `yarn test:webdriver:browserstack <pkg>`.
    - run all tests under certain directories `yarn test:webdriver:browserstack <path_to_to_directory>`.
    - run single test `yarn test:webdriver:browserstack <path_to_file>`.

For further details or a test template, please consult this [link](https://hello.atlassian.net/wiki/spaces/Atlaskit/pages/136112313/How+to+add+webdriver+browser+tests+for+components+in+Atlaskit).

### Visual regression tests

Visual regression tests are used to identify visual differences on **UI components** with or without **user interactions**.

> Due to inconsistencies between platforms _(e.g. font rendering, text selection, scrollbars)_ VR snapshots should always be generated from the Docker image.

#### Prerequisite for Visual regression tests
- install docker as it is used to run tests both locally and in CI
- install git lfs through `brew install git-lfs`,
- once latest master is checkout, run `yarn run enable:lfs`
- run `git lfs pull` to pull lfs assets
- **troubleshooting:** If you get the error `Skipping object checkout, Git LFS is not installed.` try running `git lfs install` and then `git lfs update --force` to recreate your hooks.

- use **Jest runner** for running the visual regression tests.
- *visual regression tests* for packages should be structured under `<pkg>/src/__tests__/visual-regression`.
- *visual regression tests* run using docker, jest-image-snapshot, puppeteer and chromium both on local and CI.
- on CI these are run against changed packages only.
- to run all *visual regression tests* on local `yarn test:vr`.
- to run all tests under a package on local `yarn test:vr <pkg>`.
- to run all tests under certain directories on local `yarn test:vr <path_to_directory>`.
- to run a single test on local `yarn test:vr <path_to_file>`.
- to run a single test on local using *watch mode* :
    - you will need to start the server in another terminal with this command `VISUAL_REGRESSION=true yarn start <pkg>`.
    - `yarn test:vr <path_to_file> --watch` will run watch mode headlessly.
    - `yarn test:vr <path_to_file> --debug` will run watch mode only on Chrome browser.
- to update all images snapshots for the entire repository `yarn test:vr -u` or `yarn test:vr --updateSnapshot`.
- to update all image snapshots for the package `yarn test:vr <pkg> --updateSnapshot` or `yarn test:vr <pkg> -u`.
- to update image snapshots for a single test `yarn test:vr <path_to_file> --updateSnapshot` or `yarn test:vr <path_to_file> -u` will update the snapshot if there is a change.  

**Notes:**

- you can still use the `--watch` and `--debug` flags with `<pkg>`, `<path_to_directory>` and for all tests but it is not recommended.
- Updating image snapshots isn't possible when the `--debug` flag is used. This ensures committed snapshot images are deterministic when run in CI.


For further details or a test template, please consult this [link](https://hello.atlassian.net/wiki/spaces/Atlaskit/pages/136113035/How+to+add+visual+regression+tests+in+Atlaskit).



### Flow tests
- flow tests can be used to explicitly verify that components are being typed correctly from the consumers perspective.
- they are especially useful for testing that HOC are typed correctly and don't result in types from the original component being lost
- these tests are unique in that they are just code that is typechecked by flow instead of executed
- to test valid component usages, simply use your component with valid props and flow will error if there is a problem
- to test invalid component usages, use your component with missing/invalid props and add an `// $ExpectError - invalid xxx prop` comment above it. Flow will then warn when
it does *not* detect any flow errors from an invalid usage of your component
- *flow tests* for packages should be structured under `<pkg>/src/__tests__/flow`
- on both local and CI, these will be executed as part of flow typechecking, `yarn typecheck:flow`.
- there is no way to only test a specific directory as flow is executed on an app level.
- to disable specific tests, you will need to comment out code failing flow typechecking or remove/edit $ExpectError comments so they are not flagged as unused.
