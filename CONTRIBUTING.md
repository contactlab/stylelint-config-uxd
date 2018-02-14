# Contributing Guidelines
Some basic conventions for contributing to **stylelint-config-uxd**.

## Contents
- [Tools](#tools)
- [General](#general)
- [Forking](#forking)
- [Cloning and Building](#cloning-and-building)
- [Testing and Linting](#testing-and-linting)
- [Branching](#branching)
- [Commit Message Format](#commit-message-format)

## 🛠️ Tools
* Prefer latest [Node](https://nodejs.org/en/download/) version
* Use [Yarn](https://yarnpkg.com/lang/en/docs/install/) over npm

## 📝 General
Please make sure that there aren't existing pull requests attempting to address the issue mentioned. Likewise, please check for issues related to update, as someone else may be working on the issue in a branch or fork.

* Please open a discussion in a new issue / existing issue to talk about the changes you'd like to bring
* Develop in a topic branch, not `master` or `develop`

## 👷 Forking
If you do not have direct write access, please fork this repository.

When you are happy with your changes, submit a pull request for code review.

## 📦 Cloning and Building
1. `git clone https://github.com/contactlab/stylelint-config-uxd.git`
2. `cd stylelint-config-uxd`
3. `npm install` or `yarn install`
4. `npm run build` or `yarn build`

## 🚨 Testing and Linting
Please, test and check your code using `npm run test` or `yarn test` before submitting your pull requests.

## 🚧 Branching
We follow a [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

![Feature Branches](http://puu.sh/lP4eT/43f3131730.png)

We try to keep two main branches at all times:

- `master` for production
- `develop` for current development, a branch off `master`

That way, we follow the workflow:

1. branch off `develop`, giving your branch one of the prefixes defined below,
2. make your changes in that branch,
3. merge your branch back into `develop`,
4. delete your branch to clean up

In some cases, your branches may only consist of one or two commits. This is still okay as you can submit a pull request for code review back into `develop`.

You may want to branch again, e.g.:

```
* master
|\
| \
| |
| (b1) develop
| |\
| | (b2) feature/my-new-feature
| | |\
| | | (b3) test/unit-tests-for-new-feature
| | |/
| | (m1)
| |/
| (m2)
| |\
| | (b4) fix/broken-thing
| |/
| (m3)
| /|
|/ |
(m4)
|  |
|  |
*  *
```

Here, we:

 1. branched off `master` to create our `develop` branch, at **`b1`**
 2. branched off `develop` to create a new feature under the new branch `feature/my-new-feature`, at **`b2`**
 3. branched off `feature/my-new-feature` to create some unit tests for that feature under `test/unit-tests-for-new-feature`, at **`b3`**
 4. merged those unit tests back into `feature/my-new-feature`, at **`m1`**
 5. merged the new feature back into `develop`, at **`m2`**
 6. found a new bug in the feature later on, so branched off `develop` into `fix/broken-thing`, at **`b4`**
 7. after we fixed our bug, we merged `fix/broken-thing` back into `develop`, at **`m3`**
 8. decide we're ready to release, so merge `develop` into `master`, at **`m4`**

Note that along the way **we're deleting branches after we don't need them**. This helps us keep *short-lived* branches that don't go *stale* after months of inactivity, and prevents us from forgetting about open branches. The only branch we kept open was `develop`, which we can always branch off for new, un-released changes again.

Ideally, any changes that are merged into `master` have been **code-reviewed** before they were merged into `develop`. **You should always code review before merging back into `develop`**. You can do this by performing a Pull Request, where the reviewer can see the changes you want to merge in to `develop`.

#### Branch Prefixes
When branching, try to prefix your branch with one of the following:

Prefix     | Description                                                               | Example
-----------|---------------------------------------------------------------------------|--------------------------------------------------------------------
`feature/` | New feature was added                                                     | `feature/add-learning-outcome-alignment`
`fix/`     | A bug was fixed                                                           | `fix/crash-when-code-submission-finished`
`enhance/` | Improvement to existing feature, but not visual enhancement (See `LOOKS`) | `enhance/allow-code-files-to-be-submitted`
`looks/`   | UI Refinement, but not functional change (See `ENHANCE`)                  | `looks/rebrand-ui-for-version-2-marketing`
`quality/` | Refactoring of existing code                                              | `quality/make-code-convention-consistent`
`doc/`     | Documentation-related changes                                             | `doc/add-new-api-documentation`
`config/`  | Project configuration changes                                             | `config/add-framework-x-to-project`
`speed/`   | Performance-related improvements                                          | `speed/new-algorithm-to-process-foo`
`test/`    | Test addition or enhancement                                              | `test/unit-tests-for-new-feature-x`

## 💬 Commit Message Format
Each commit message should include a **type**, a **scope** and a **subject**:

```
<type>(<optional scope>): <subject>
```

Lines should not exceed 100 characters. This allows the message to be easier to read on github as well as in various git tools and produces a nice, neat commit log ie:

```
#271 feat(src/rules.js): add 'color-no-invalid-hex' rule
#270 style(src/index.js): add semicolons after every statement
#269 refactor(src/rules.js): update rule 'unit-no-unknown' test
```

#### Type
Must be one of the following:

Prefix     | Description
-----------|-------------------------------------------------------------------------------------------------------
`feat`     | A new feature
`fix`      | A bug fix
`docs`     | Documentation only changes
`style`    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
`refactor` | A code change that neither fixes a bug or adds a feature
`test`     | Adding missing tests
`chore`    | Changes to the build process or auxiliary tools and libraries such as documentation generation

#### Scope
The scope could be anything specifying place of the commit change. For example editorconfig, readme, package, etc...

#### Subject
The subject contains succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* Don't capitalize first letter
* No dot (.) at the end