# @atlaskit/branch-installer

## 0.3.0

### Minor Changes

- [minor][5344193efa](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5344193efa):

  Add support for passing arbitrary flags to the branch install command, i.e. yarn/bolt, by adding the flags after a '--' separator

## 0.2.1

### Patch Changes

- [patch][0ed6b4e90c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/0ed6b4e90c):

  Expose cmd and add a retry to the upgrade

## 0.2.0

### Minor Changes

- [minor][4dc307b4f9](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4dc307b4f9):

  Fix bug where yarn upgrade would not upgrade anything in Jira

## 0.1.8

### Patch Changes

- [patch][a2d0043716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a2d0043716):

  Updated version of analytics-next to fix potential incompatibilities with TS 3.6

## 0.1.7

### Patch Changes

- [patch][5d4bcea150](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/5d4bcea150):

  Revert broken branch installer change

## 0.1.6

### Patch Changes

- [patch][23675b1438](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/23675b1438):

  Add quotes to version url of yarn upgrade command

## 0.1.5

### Patch Changes

- [patch][bcf4d840c7](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/bcf4d840c7):

  Forgotten changeset, updates cdn url to use https

## 0.1.4

### Patch Changes

- [patch][348b1058fd](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/348b1058fd):

  First version of branch deploy integrator cli

## 0.1.3

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 0.1.2

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 0.1.1

### Patch Changes

- [patch][b1a76f9009](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/b1a76f9009):

  Fixes bug in CLI not passing flags correctly

## 0.1.0

### Minor Changes

- [minor][368105e77a](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/368105e77a):

  Branch installer now works on a commit level instead of branch level, lots of API changes

  **From the help message**

  ```
  Installs the Atlaskit dependency versions from the given commit.

    Usage
        $ atlaskit-branch-installer commitHash
      Options
        --engine Which engine to use (bolt/yarn) [Default: yarn]
        --cmd Command to run to install packages (add/upgrade) [Default: add]
        --dry-run Do not install the packages just print it
        --verbose Show what is going on

        [Advanced]
        --packages Comma separated list of packages to install from commit [Default: all]
        --timeout Maximum time to wait (in ms) for a manifest to be published for a commit [Default: 20000]
        --interval How long to wait (in ms) between retries when looking for packages manifest [Default: 5000]

      Examples
        $ yarn atlaskit-branch-installer 6ce63f22816e --verbose
        $ yarn atlaskit-branch-installer 6ce63f22816e --packages=@atlaskit/avatar,@atlaskit/editor-core
        $ yarn atlaskit-branch-installer 6ce63f22816e --timeout=180000 --interval=10000 --engine=bolt --cmd=upgrade
  ```

## 0.0.8

- [patch][d972e00](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/d972e00):

  - Improve verbose and check the custom build using a UID

## 0.0.7

- [patch][683b30c](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/683b30c):

  - Move index.js to src folder

## 0.0.6

- [patch][310d5ff](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/310d5ff):

  - Fix bad quotes on package

## 0.0.5

- [patch][49e1a37](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/49e1a37):

  - Add dry-run and no-bolt flags to CLI

## 0.0.3

- [patch][ab9320d](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ab9320d):

  - Expose maxAttempts & timeout through the CLI

## 0.0.2

- [patch][4a4de08](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/4a4de08):

  - First version of branch installer
