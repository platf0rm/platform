# Contributing Guidlines

## project repositories
* [`platform`](https://github.com/platf0rm/platform) - guidelines, documentation and specifications only
* [`platform-api`](https://github.com/platf0rm/platform-api) - web json api project
* [`platform-web-ui`](https://github.com/platf0rm/platform-web-ui) - public facing website project
* [`platf0rm-android`](https://github.com/platf0rm/platf0rm-mobile) - mobile project (android)

## contributing
***pre-requisites***:
1. `git clone` the `repo` for the project you will be working on
2. decide on what `feature` you will be working on.

***work-flow***:
1. create a `local branch` base of `master or milestone-branch` (*format*: `feature/{name}`)
2. push to remote branch
3. open `PR` for branch (an `issue` will be created)
4. commit code. move `issue`'s progress in `waffle.io` if needed.
6. push changes to `remote branch` once done
7. have `PR` reviewed by the team. (**2 approvals = good to merge**)
8. merge to `master or milestone-branch`. merge to be done by the owner.

## branching
1. a feature branch (`feature/{feature-name}`) based on `master or milestone-branch` shall be created for a feature you'll be working on
2. the branch should only be worked on by a single developer
3. for cases where you need to commit changes on an **un-merged** `feature branch`, you should create a new branch based on that `feature branch` and a pull-request should follow

## feature suggestion
Project-specific issues should be created under a specific project. Otherwise, it can be created on the `platform` main repo