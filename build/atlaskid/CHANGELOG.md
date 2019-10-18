# Landkid

## 1.0.4

### Patch Changes

- [patch][a2d0043716](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/a2d0043716):

  Updated version of analytics-next to fix potential incompatibilities with TS 3.6

## 1.0.3

### Patch Changes

- [patch][097b696613](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/097b696613):

  Components now depend on TS 3.6 internally, in order to fix an issue with TS resolving non-relative imports as relative imports

## 1.0.2

### Patch Changes

- [patch][ecca4d1dbb](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/ecca4d1dbb):

  Upgraded Typescript to 3.3.x

## 1.0.1

### Patch Changes

- [patch][43f66019ee](https://bitbucket.org/atlassian/atlaskit-mk-2/commits/43f66019ee):

  Updates dependency on p-wait-for

This changelog is manually curated.

We don't publish this package, so we'll be doing versions based on the docker image

## v28 (2018-10-30)

- Adding one new user

## v27 (2018-10-24)

- Adding Bitbucket team

## v26 (2018-10-08)

- [Adding home team](https://trello.com/c/mPYXBp0G/)

## v25 (2018-09-10)

- [Just adding more users](https://trello.com/c/vuRjKTd4/)

## v24 (2018-09-04)

- [Moving landkid to a single ALB](https://trello.com/c/GjPB5VBb/)

## v18 (2018-06-14)

- Just minor UI changes to how builds link (they now link to the pullrequest AND the build and links are now clickable before the first statusUpdate is received)

## v17 (2018-06-11)

- Major internal refactor
- Adds landkid preact ui
- Adds lots more config options
  - NOTE: Moves `usersAllowedToMerge` into `prSettings` (BREAKING CHANGE)

## v14 (not sure)

- This was the last release before the major refactor/ui update
- If reverting back to this, make sure the config is updated! There were breaking changes

## v7 (2018-03-5 )

Uses landkid version 0.0.20

- Introduces `unlock` and `next` endpoints
  - `api/unlock` and `api/next` respectively
- Introduces `pausedReason` functionality
  - `api/pause` can now accept a `pausedReason` string which will appear in the state and on the
    front end.
  - `curl -H "Content-Type: application/json" -X POST https://atlaskit-atlaskid.us-west-1.staging.public.atl-paas.net/api/pause -d '{"reason":"Upgrade in progress"}'`
- Added `elementsTeam` and `searchAndSmartsTeam` to allowed users
